/* eslint-plugin-disable functional */
import { CssObjectType } from '@redesign-system/theme/libs'
import { aliases } from '@redesign-system/theme/libs/utility/utility.alias'
import { memorize } from 'c-ufunc/libs/memorize'
import { unitlessKeys as unitless } from './unitless'

type cursorType = {
  readonly name: string
  readonly styles: string
  readonly next: cursorType
}

interface RegisteredCache {
  readonly [key: string]: string
}
export type Interpolation = any

const UNDEFINED_AS_OBJECT_KEY_ERROR =
  "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key)."
let cursor: cursorType
let shouldWarnAboutInterpolatingClassNameFromCss = true
const hyphenateRegex = /[A-Z]|^ms/g
const animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g

function isCustomProperty(property: string): boolean {
  return property.charCodeAt(1) === 45
}

function isProcessableValue(value: any): boolean {
  return value != null && typeof value !== 'boolean'
}
const processStyleName = memorize()((styleName: string) =>
  isCustomProperty(styleName)
    ? styleName
    : styleName.replace(hyphenateRegex, '-$&').toLowerCase()
)

const processStyleValue = (
  key: string,
  value: string | number
): string | number => {
  switch (key) {
    case 'animation':
    case 'animationName': {
      if (typeof value === 'string') {
        return value.replace(animationRegex, (_match, p1, p2) => {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor,
          }
          return p1
        })
      }
    }
  }

  if (
    (unitless as any)[key] !== 1 &&
    !isCustomProperty(key) &&
    typeof value === 'number' &&
    value !== 0
  ) {
    return value + 'px'
  }
  return value
}

function handleInterpolation(
  mergedProps: void | Object,
  registered: RegisteredCache | void,
  interpolation: Interpolation,
  couldBeSelectorInterpolation: boolean
): string | number {
  if (interpolation == null) {
    return ''
  }
  if (interpolation.__emotion_styles !== undefined) {
    if (
      process.env.NODE_ENV !== 'production' &&
      interpolation.toString() === 'NO_COMPONENT_SELECTOR'
    ) {
      throw new Error(
        'Component selectors can only be used in conjunction with babel-plugin-emotion.'
      )
    }
    return interpolation
  }

  switch (typeof interpolation) {
    case 'boolean': {
      return ''
    }
    case 'object': {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor,
        }

        return interpolation.name
      }
      if (interpolation.styles !== undefined) {
        let next = interpolation.next
        if (next !== undefined) {
          // not the most efficient thing ever but this is a pretty rare case
          // and there will be very few iterations of this generally
          while (next !== undefined) {
            cursor = {
              name: next.name,
              styles: next.styles,
              next: cursor,
            }
            next = next.next
          }
        }
        let styles = `${interpolation.styles};`
        if (
          process.env.NODE_ENV !== 'production' &&
          interpolation.map !== undefined
        ) {
          styles += interpolation.map
        }

        return styles
      }

      return createStringFromObject(mergedProps, registered, interpolation)
    }
    case 'function': {
      if (mergedProps !== undefined) {
        const previousCursor = cursor
        const result = interpolation(mergedProps)
        cursor = previousCursor

        return handleInterpolation(
          mergedProps,
          registered,
          result,
          couldBeSelectorInterpolation
        )
      } else if (process.env.NODE_ENV !== 'production') {
        console.error(
          'Functions that are interpolated in css calls will be stringified.\n' +
            'If you want to have a css call based on props, create a function that returns a css call like this\n' +
            'let dynamicStyle = (props) => css`color: ${props.color}`\n' +
            'It can be called directly with props or interpolated in a styled call like this\n' +
            "let SomeComponent = styled('div')`${dynamicStyle}`"
        )
      }
      break
    }
    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        const matched: any[] = []
        const replaced = interpolation.replace(
          animationRegex,
          (_match, _p1, p2) => {
            const fakeVarName = `animation${matched.length}`
            matched.push(
              `const ${fakeVarName} = keyframes\`${p2.replace(
                /^@keyframes animation-\w+/,
                ''
              )}\``
            )
            return `\${${fakeVarName}}`
          }
        )
        if (matched.length) {
          console.error(
            '`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' +
              'Instead of doing this:\n\n' +
              [...matched, `\`${replaced}\``].join('\n') +
              '\n\nYou should wrap it with `css` like this:\n\n' +
              `css\`${replaced}\``
          )
        }
      }
      break
  }

  // finalize string values (regular strings and functions interpolated into css calls)
  if (registered == null) {
    return interpolation
  }
  const cached = registered[interpolation]
  if (
    process.env.NODE_ENV !== 'production' &&
    couldBeSelectorInterpolation &&
    shouldWarnAboutInterpolatingClassNameFromCss &&
    cached !== undefined
  ) {
    console.error(
      'Interpolating a className from css`` is not recommended and will cause problems with composition.\n' +
        'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion'
    )
    shouldWarnAboutInterpolatingClassNameFromCss = false
  }
  return cached !== undefined && !couldBeSelectorInterpolation
    ? cached
    : interpolation
}

export function createStringFromObject(
  mergedProps: void | Object,
  registered: RegisteredCache | void,
  obj: { readonly [key: string]: Interpolation }
): string {
  let string = ''

  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false)
    }
  } else {
    for (const key in obj) {
      const _key = aliases().get(key)
      const value = obj[key]

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += `${_key}{${registered[value]}}`
        } else if (isProcessableValue(value)) {
          string += `${processStyleName(_key)}:${processStyleValue(
            _key,
            value
          )};`
        }
      } else {
        if (
          _key === 'NO_COMPONENT_SELECTOR' &&
          process.env.NODE_ENV !== 'production'
        ) {
          throw new Error(
            'Component selectors can only be used in conjunction with babel-plugin-emotion.'
          )
        }
        if (
          Array.isArray(value) &&
          typeof value[0] === 'string' &&
          (registered == null || registered[value[0]] === undefined)
        ) {
          for (let i = 0; i < value.length; i++) {
            if (isProcessableValue(value[i])) {
              string += `${processStyleName(_key)}:${processStyleValue(
                _key,
                value[i]
              )};`
            }
          }
        } else {
          const interpolated = handleInterpolation(
            mergedProps,
            registered,
            value,
            false
          )
          switch (_key) {
            case 'animation':
            case 'animationName': {
              string += `${processStyleName(_key)}:${interpolated};`
              break
            }
            default: {
              if (
                process.env.NODE_ENV !== 'production' &&
                _key === 'undefined'
              ) {
                console.error(UNDEFINED_AS_OBJECT_KEY_ERROR)
              }
              string += `${_key}{${interpolated}}`
            }
          }
        }
      }
    }
  }

  return string
}

function buildStyles(
  styles: any,
  props: { readonly [key: string]: any } = {}
): string {
  const registered = {}

  switch (typeof styles) {
    case 'function': {
      // transform function to string
      const result = styles(props)

      return typeof result === 'string'
        ? result
        : createStringFromObject({}, registered, result)
    }
    case 'object':
      // transform object to string
      return createStringFromObject({}, registered, styles)
    default:
      return styles
  }
}

export function createStyleString(
  styles: string | CssObjectType,
  props: { readonly [key: string]: any } = {}
): string {
  return Array.isArray(styles)
    ? styles.reduce(
        (acc: string, style: any) =>
          `${acc} ${createStyleString(style, props)}`,
        ''
      )
    : buildStyles(styles, props)
}

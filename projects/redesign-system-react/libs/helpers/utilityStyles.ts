import { UtilityInterface, getAlias } from '@redesign-system/theme/libs'

import { BaseInterface } from '../Base'

export function utilityStyles(
  props: BaseInterface
): string | readonly string[] {
  const initialTheme: Partial<BaseInterface> = {}

  const reducer = (previous: any, key: any) => {
    const propKey = getAlias(key) as keyof UtilityInterface
    const prop = props[key]

    const utility =
      (props.theme as any).utility || ({} as Partial<UtilityInterface>)
    const utilityFn = utility[propKey]

    return prop && utilityFn
      ? {
          ...previous,
          ...utilityFn(prop),
        }
      : previous
  }

  return props.theme
    ? Object.keys(props).reduce(reducer, initialTheme)
    : initialTheme
}

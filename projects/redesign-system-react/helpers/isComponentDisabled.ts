import {
  DISABLED,
  PRIMARY_DISABLED,
  SECONDARY_DISABLED,
  TERTIARY_DISABLED,
  AppearanceTypes,
} from '@redesign-system/theme'

export function isComponentDisabled({
  appearance,
  disabled,
}: {
  readonly disabled?: boolean
  readonly appearance?: AppearanceTypes
  readonly [key: string]: any
}): true | undefined {
  return disabled ||
    appearance === DISABLED ||
    appearance === PRIMARY_DISABLED ||
    appearance === SECONDARY_DISABLED ||
    appearance === TERTIARY_DISABLED
    ? true
    : undefined
}

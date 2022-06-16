import { toUpperFirst } from 'c-ufunc/libs/toUpperFirst'

export function getBorder(
  border: { readonly [key: string]: string },
  appearance?: string
): string {
  if (appearance && appearance !== 'PRIMARY') {
    return border[`thick${toUpperFirst(appearance.toLowerCase())}`]
  }

  return border.thick
}

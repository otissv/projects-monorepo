export interface ScrollbarInterface {
  readonly width: string
  readonly height: string
  readonly backgroundColor: string

  readonly corner: {
    readonly backgroundColor: string
  }

  readonly thumb: {
    readonly backgroundColor: string
    readonly outline: string
    readonly transition: string
    readonly hover: {
      readonly backgroundColor: string
    }
  }
}

export type PartialScrollbarInterface = Partial<ScrollbarInterface>

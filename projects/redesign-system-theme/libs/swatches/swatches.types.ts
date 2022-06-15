export interface SwatchesInterface {
  readonly [key: string]: string
}

export interface PartialSwatchesInterface extends Partial<SwatchesInterface> {
  readonly [key: string]: string
}

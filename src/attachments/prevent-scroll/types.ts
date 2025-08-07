export interface PreventScrollOptions {
  wheel?: {
    /**
     * @default true
     */
    enable?: boolean
    /**
     * @default this
     */
    target?: Element | Document | Window
  }
  touchmove?: {
    /**
     * @default true
     */
    enable?: boolean
    /**
     * @default this
     */
    target?: Element | Document | Window
  }
  keydown?: {
    /**
     * @default true
     */
    enable?: boolean
    /**
     * @default document
     */
    target?: Element | Document | Window
    /**
     * @default ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','PageDown','PageUp','Home','End',' '],
     */
    keys?: string[]
  }
}

export * from './'

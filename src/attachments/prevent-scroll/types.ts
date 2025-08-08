export interface PreventScrollOptions {
  /**
   * @default undefined
   */
  target?: Element | Document | Window
  /**
   * @default (e: Event): void => e.preventDefault()
   */
  handler?: (e: Event) => void
  /**
   * @default (e: KeyboardEvent): void => { if (keys.includes(e.key)) e.preventDefault() }
   */
  handlerKey?: (e: KeyboardEvent) => void
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

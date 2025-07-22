export interface KeyboardOptions {
  event?: {
    /**
     * @default 'keydown'
     */
    type?: 'keydown' | 'keyup'
    /**
     * @default this
     */
    target?: Element | Document | Window
  }
  /**
   * @default undefined
   */
  keys?: string[]
}

export * from './'

export interface ClickOutsideOptions {
  event?: {
    /**
     * @default document
     */
    target?: Element | Document | Window
  }
  /**
   * @default undefined
   */
  trigger?: Element | null | (Element | null)[]
}

export * from './'

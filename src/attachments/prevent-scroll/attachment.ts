import type { Attachment } from 'svelte/attachments'
import type { PreventScrollOptions } from './types'

export function preventScroll(options: PreventScrollOptions = {}): Attachment {
  return (el: Element) => {
    const {
      wheel: { enable: wheelEnable = true, target: wheelTarget = el } = {},
      touchmove: { enable: touchEnable = true, target: touchTarget = el } = {},
      keydown: {
        enable: keyEnable = true,
        target: keyTarget = document,
        keys = [
          'ArrowLeft',
          'ArrowRight',
          'ArrowUp',
          'ArrowDown',
          'PageDown',
          'PageUp',
          'Home',
          'End',
          ' ',
        ],
      } = {},
    } = options

    const handler = (e: Event): void => e.preventDefault()
    const handlerKey = (e: KeyboardEvent): void => {
      if (keys.includes(e.key)) e.preventDefault()
    }

    if (wheelEnable) {
      wheelTarget.addEventListener('wheel', handler, { passive: false })
    }
    if (touchEnable) {
      touchTarget.addEventListener('touchmove', handler, { passive: false })
    }
    if (keyEnable) {
      keyTarget.addEventListener('keydown', handlerKey as EventListener)
    }

    return () => {
      if (wheelEnable) wheelTarget.removeEventListener('wheel', handler)
      if (touchEnable) touchTarget.removeEventListener('touchmove', handler)
      if (keyEnable) {
        keyTarget.removeEventListener('keydown', handlerKey as EventListener)
      }
    }
  }
}

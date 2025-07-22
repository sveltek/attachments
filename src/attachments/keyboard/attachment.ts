import type { Attachment } from 'svelte/attachments'
import type { KeyboardOptions } from './types'

export function keyboard(
  callback: (event: KeyboardEvent) => void,
  options: KeyboardOptions = {},
): Attachment {
  return (el: Element) => {
    const { event: { type = 'keydown', target = el } = {}, keys } = options

    const handler = (event: KeyboardEvent): void => {
      if (!keys || keys.includes(event.key)) callback(event)
    }

    target.addEventListener(type, handler as EventListener)

    return () => {
      target.removeEventListener(type, handler as EventListener)
    }
  }
}

import type { Attachment } from 'svelte/attachments'
import type { ClickOutsideOptions } from './types'

export function clickOutside(
  callback: (event: MouseEvent) => void,
  options: ClickOutsideOptions = {},
): Attachment {
  return (el: Element) => {
    const { element = document, trigger } = options

    const triggers = Array.isArray(trigger) ? trigger : [trigger]

    const handler = (event: MouseEvent): void => {
      const target = event.target as Node

      if (el.contains(target) || triggers.some((v) => v?.contains(target))) {
        return
      }

      callback(event)
    }

    element.addEventListener('click', handler as EventListener, true)

    return () => {
      element.removeEventListener('click', handler as EventListener, true)
    }
  }
}

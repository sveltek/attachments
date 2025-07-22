# clickOutside

Triggers a callback when clicking outside the target element.

## Usage

### Simple

Triggers when clicking outside an element. Great for modals, popovers, dropdowns etc.

```svelte
<script lang="ts">
  import { clickOutside } from '@sveltek/attachments'

  let isOpen = $state(false)

  const toggle = (): boolean => (isOpen = !isOpen)
</script>

<button onclick={toggle}>Menu</button>

{#if isOpen}
  <div {@attach clickOutside(toggle)}>Content...</div>
{/if}
```

### Custom Trigger

Specifies a custom `trigger` element, like a button or link that opens the content. Clicks on this `trigger` won’t count as outside clicks.

Defaults to `undefined`, and can be a single target or an array of targets.

```svelte
<script lang="ts">
  import { clickOutside } from '@sveltek/attachments'

  let isOpen = $state(false)

  // custom trigger
  let trigger = $state<Element>()

  const toggle = (): boolean => (isOpen = !isOpen)
</script>

<button bind:this={trigger} onclick={toggle}>Menu</button>

{#if isOpen}
  <div {@attach clickOutside(toggle, { trigger })}>Content...</div>
{/if}
```

## API

```ts
function clickOutside(
  callback: (event: MouseEvent) => void,
  options: ClickOutsideOptions = {},
): Attachment
```

## Types

```ts
interface ClickOutsideOptions {
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
```

## Source

[Function](./attachment.ts)

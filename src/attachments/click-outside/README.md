# clickOutside

## Import

```ts
import { clickOutside } from '@sveltek/attachments'
```

## Usage

### Simple

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

[Function](./index.ts)

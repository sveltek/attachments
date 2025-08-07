# preventScroll

Prevents scrolling via wheel, touch, and keyboard navigation on the target element.

It’s super useful for modals, overlays, or any UI that should temporarily disable scrolling without causing layout shift.

## Usage

It should be applied to a container that covers the scrollable area you want to block.

If the modal or overlay includes scrollable content inside, apply the action only to the backdrop or outer container to avoid interfering with internal scrolling.

Keyboard-based scroll prevention (e.g. arrows, spacebar) is applied globally to the document while the `attachment` is active, and this behavior can be customized as needed or completely disabled.

### Simple

```svelte
<script lang="ts">
  import { preventScroll } from '@sveltek/attachments'

  let isOpen = $state(false)
</script>

<div data-page>
  <button onclick={() => (isOpen = !isOpen)}>Open Modal</button>

  {#if isOpen}
    <div {@attach preventScroll()} data-modal-overlay></div>

    <div data-modal-container>
      <div data-modal-content>
        <button onclick={() => (isOpen = !isOpen)} data-modal-content-trigger>
          Close Modal
        </button>
        <div data-modal-content-inner>Scrolling content...</div>
      </div>
    </div>
  {/if}
</div>

<style>
  [data-page] {
    min-height: 300vh;
  }

  [data-modal-overlay] {
    z-index: 10;
    position: fixed;
    inset: 0;
    background: oklch(20.5% 0 0);
  }

  [data-modal-container] {
    z-index: 20;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  [data-modal-content] {
    width: 300px;
    height: 300px;
    border-radius: 2rem;
    padding: 1rem;
    background-color: oklch(26.9% 0 0);
    overflow: auto;
    overscroll-behavior: contain;
    pointer-events: auto;
  }

  [data-modal-content-trigger] {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  [data-modal-content-inner] {
    min-height: 1000px;
  }
</style>
```

## API

```ts
function preventScroll(options?: PreventScrollOptions): Attachment
```

## Types

```ts
interface PreventScrollOptions {
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
```

## Source

[Function](./attachment.ts)

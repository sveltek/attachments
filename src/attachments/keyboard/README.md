# keyboard

## Import

```ts
import { keyboard } from '@sveltek/attachments'
```

## Usage

### Simple

```svelte
<script lang="ts">
  import { keyboard } from '@sveltek/attachments'

  const callback = (event: KeyboardEvent): void => {
    console.log(event)
  }
</script>

<input {@attach keyboard(callback)} placeholder="Press any key..." />
```

### Custom Keys

```svelte
<script lang="ts">
  import { keyboard } from '@sveltek/attachments'

  const callback = (event: KeyboardEvent): void => {
    console.log(event)
  }
</script>

<input
  {@attach keyboard(callback, { keys: ['Shift', 'Meta'] })}
  placeholder="Press Shift or Command keys..."
/>
```

### Custom Event Type

```svelte
<script lang="ts">
  import { keyboard } from '@sveltek/attachments'

  const callback = (event: KeyboardEvent): void => {
    console.log(event)
  }
</script>

<input
  {@attach keyboard(callback, { event: { type: 'keyup' } })}
  placeholder="Press any key..."
/>
```

### Custom Event Target

```svelte
<script lang="ts">
  import { keyboard } from '@sveltek/attachments'

  const callback = (event: KeyboardEvent): void => {
    console.log(event)
  }
</script>

<div {@attach keyboard(callback, { event: { target: document } })}>
  Press any key...
</div>
```

## API

```ts
function keyboard(
  callback: (event: KeyboardEvent) => void,
  options: KeyboardOptions = {},
): Attachment
```

## Types

```ts
interface KeyboardOptions {
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
```

## Source

[Function](./index.ts)

# keyboard

Triggers a callback when a specified keyboard event occurs.

## Usage

### Simple

By default, it triggers a callback on every keypress.

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

Triggers a callback only when the specified keys are pressed.

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

See a full list of [key values](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values).

### Custom Event Type

Allows setting a custom keyboard event type to control behavior. Accepted values are `keydown` and `keyup`.

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

Defines where the keyboard event is listened for. If not set, it uses the `element` itself.

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

[Function](./attachment.ts)

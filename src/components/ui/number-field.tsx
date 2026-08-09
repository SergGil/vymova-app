import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field"

import { cn } from "@/lib/utils"

// Not in shadcn's hosted registry — hand-authored directly on
// @base-ui/react/number-field, matching this file's siblings' conventions
// (data-slot, cn()). Root-only pass-through plus the parts callers actually
// compose (Group/Increment/Decrement/Input) — no ScrubArea export (unused).
function NumberField(props: NumberFieldPrimitive.Root.Props) {
  return <NumberFieldPrimitive.Root data-slot="number-field" {...props} />
}

// NumberFieldRoot always auto-renders its OWN hidden <input type="number">
// for form semantics (a separate, purely-cosmetic mirror, same pattern as
// Switch's hidden input) — but that is NOT the element the Increment/
// Decrement buttons' press-and-hold mechanism reads from. That mechanism
// needs a *rendered* NumberFieldInput (its `inputRef`, populated only when
// this component mounts) — without one, `usePressAndHold`'s `elementRef.
// current` is null and a real pointerdown-driven click silently no-ops
// (the fallback plain-click handler still works, which is why this only
// broke in a real browser, not in a jsdom test using .click()). Callers
// that don't want a visibly-editable field (e.g. srs-cap-control.tsx's
// −/value/+ layout) should still render this, just visually hidden.
function NumberFieldInput({
  className,
  ...props
}: NumberFieldPrimitive.Input.Props) {
  return (
    <NumberFieldPrimitive.Input
      data-slot="number-field-input"
      className={className}
      {...props}
    />
  )
}

function NumberFieldGroup({
  className,
  ...props
}: NumberFieldPrimitive.Group.Props) {
  return (
    <NumberFieldPrimitive.Group
      data-slot="number-field-group"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
}

function NumberFieldIncrement({
  className,
  ...props
}: NumberFieldPrimitive.Increment.Props) {
  return (
    <NumberFieldPrimitive.Increment
      data-slot="number-field-increment"
      className={className}
      {...props}
    />
  )
}

function NumberFieldDecrement({
  className,
  ...props
}: NumberFieldPrimitive.Decrement.Props) {
  return (
    <NumberFieldPrimitive.Decrement
      data-slot="number-field-decrement"
      className={className}
      {...props}
    />
  )
}

export {
  NumberField,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldDecrement,
  NumberFieldInput,
}

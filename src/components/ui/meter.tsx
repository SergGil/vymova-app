import { Meter as MeterPrimitive } from "@base-ui/react/meter"

import { cn } from "@/lib/utils"

// Not in shadcn's hosted registry (only Progress is) — hand-authored
// directly on @base-ui/react/meter, matching this file's siblings'
// conventions (data-slot, cn()). Root-only: unlike Progress, Meter has no
// visual opinion of its own (no Track/Indicator) — it's purely the
// accessible-value wrapper (role="meter", aria-valuenow/min/max/text)
// around whatever visual a caller already renders as children.
function Meter({ className, ...props }: MeterPrimitive.Root.Props) {
  return (
    <MeterPrimitive.Root
      data-slot="meter"
      className={cn(className)}
      {...props}
    />
  )
}

export { Meter }

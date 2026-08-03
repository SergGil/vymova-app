import { useEffect, useState } from "react"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"
// Required — sonner ships its actual structural CSS (toast sizing/layout/
// stacking) as a separate stylesheet, not inline styles or Tailwind classes.
// Without it every toast measures 0x0 (sonner's own height-measurement
// effect still runs and sets --initial-height, but nothing in the DOM
// gives the element any intrinsic size to measure) and never becomes
// visible despite existing in the DOM with a real z-index.
import "sonner/dist/styles.css"

// Not next-themes' useTheme() — this app has no next-themes provider (it
// isn't a Next.js app); dark mode is a plain body.dark class toggle
// (js/core/theme.tsx), with no reactive channel of its own to subscribe to
// yet, so this watches the class directly via MutationObserver instead of
// polling or requiring theme.tsx to grow one just for this.
function useAppTheme(): ToasterProps["theme"] {
  const [isDark, setIsDark] = useState(
    () => typeof document !== "undefined" && document.body.classList.contains("dark"),
  )
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark"))
    })
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])
  return isDark ? "dark" : "light"
}

const Toaster = ({ ...props }: ToasterProps) => {
  const theme = useAppTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--color-popover)",
          "--normal-text": "var(--color-popover-foreground)",
          "--normal-border": "var(--color-border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

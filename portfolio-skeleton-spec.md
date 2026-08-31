# Portfolio — Interaction Skeleton Build Spec (v1)

**How to use this:** hand this file to Claude Code in the project folder and build it section by section (1 → 6), reviewing each animation before moving to the next, rather than generating everything in one shot.

**Scope:** structure and interaction logic only. No theme, colors, background animations, or real content yet — those come in a later pass. Don't add any of that now even if it seems easy to sneak in.

Stack in use: React, Tailwind, Motion (`motion/react`), shadcn/ui, Kokonut UI (registry already configured).

---

## 1. Header — reuse as the base, don't rebuild

Start from this component exactly as-is for the show/hide-on-scroll mechanic (fixed header, hides on scroll down past 150px, reveals on scroll up):

```tsx
"use client"

import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useState } from "react"

export default function ScrollHideHeader() {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0
        if (current > previous && current > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return (
        <motion.header
            className="header"
            animate={{
                y: hidden ? -140 : 0,
                opacity: hidden ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {/* logo + nav replaced in sections 2 & 3 below */}
        </motion.header>
    )
}
```

Two changes to make to it:
- Swap the static SVG logo for the name/AVM lockup from Section 2.
- Swap the placeholder nav links for the real nav from Section 3.

Keep the `useScroll` / `useMotionValueEvent` hide-on-direction logic untouched — it's independent of the docking behavior below and both should run at the same time.

---

## 2. Name reveal + dock animation

**Hero (full viewport height, above the docked header state):**
- Displays the name on two lines:
  ```
  Adrian
  Velazquez-Mtz
  ```
- On mount, animate it in with a binary-scramble/decode effect: each character rapidly cycles through random `0`/`1` digits before resolving to its real letter, staggered left-to-right so the name appears to decode itself into existence.

**Build the scramble effect as one reusable hook/component**, not hardcoded to the name — it gets reused for nav hover in Section 4:

```
useScrambleText(text: string, charset = "01", staggerMs = 30, resolveMs = 500)
```

**Docking on scroll:**
- Once the user scrolls past the hero section, the full name transitions into a compact **"AVM"** wordmark docked in the header, using Motion's `layoutId` shared-layout animation so it feels like one element shrinking/moving into place — not a hard cut.
- This triggers off **scroll position** (crossed out of the hero section), independently of the header's hide/show-on-**direction** behavior from Section 1. Both are active simultaneously: once docked, "AVM" still hides on scroll-down and reveals on scroll-up.

*(Flag if this read on the interaction is wrong — the alternative is having the header hide/reveal logic itself only start applying after the dock point, so the header is fully absent, not just transparent, while still in the hero.)*

---

## 3. Nav

Once docked, the header shows three items:

- About Me
- Projects
- Contact Info

Clicking **Projects** smooth-scrolls to the projects section (anchor scroll, e.g. `scrollIntoView({ behavior: "smooth" })`).

---

## 4. Hover scramble on nav items

On hover, each nav item's letters scramble through `0`/`1` for ~400–600ms before resolving back to the readable label. Reuse the exact `useScrambleText` hook from Section 2 — don't write a second implementation.

---

## 5. Projects section

- 8 placeholder project cards in a **two-column grid** (4 rows × 2 columns). *(Assumption — if you actually meant a single-column zigzag/alternating layout instead of a grid, say so, it's a quick swap.)*
- Each card: placeholder image/video area, title, one-line description. No real content yet.

---

## 6. Project detail view

**Recommended approach:** Motion `layoutId` shared-element transition. Clicking a card expands it in place into a full-detail overlay — dimmed background, larger image/video, longer write-up, spec table, links. Same library already in the project, minimal new code, and it's the transition that reads as the most polished for the least effort.

Build in basic modal semantics from the start, even at skeleton stage — cheap now, annoying to retrofit later:
- `Escape` closes it
- click-outside closes it
- focus moves into the panel on open

**Note for later, not now:** a `layoutId` modal isn't individually linkable. If you'll eventually want to send someone a direct link to one specific project, that means giving each project its own route/slug — worth deciding before real content goes in, but not something to solve in this pass.

---

## Explicitly out of scope for this pass

- Color theme / dark mode
- Background animations (circuit-trace patterns, particles, etc.)
- Real project content or images
- Contact form functionality
- About Me section content

# Portfolio — Feel & Content Layer Spec (v2)

Continues numbering from `portfolio-skeleton-spec.md` (Sections 1–6). Hand this to Claude Code the same way — one section at a time, review before moving on.

**Scope:** Sections 7–11 are ready to build. Background/theme is intentionally NOT in this pass — see the note at the bottom. Build everything here on a plain/neutral background for now.

---

## 7. Project detail overlay (extends Section 6)

- Overlay covers **~90–95% of the viewport**, not full 100% — leave a slim dimmed margin so it reads as "zoomed into this card" rather than "navigated to a new page." This is a recommendation, not a hard requirement — go full-bleed if it looks better once it's built.
- **Image carousel:** horizontal, infinite cycling both directions (camera-roll behavior). Build it on shadcn's carousel component rather than hand-rolling with Motion drag gestures:
  ```bash
  npx shadcn@latest add carousel
  ```
  It's Embla under the hood and already handles infinite loop, drag, and arrow controls.
- **In-depth description:** a text block below or beside the carousel — placeholder copy for now.
- **Skills/tools line:** one row of tags, one per skill/program/framework used on that project (e.g. "Altium · STM32 · C++ · KiCad"). Use shadcn's `Badge` component or a Kokonut tag/pill component for these.
- **Close ("X"):** fixed top-left of the overlay. Clicking it must reverse the *same* `layoutId` transition used to open it, shrinking back into the card's exact grid position — not a generic fade-out.
- Lock body scroll while the overlay is open; restore it on close.

---

## 8. Profile photo — randomized per load

- Positioned to the right of the name in the hero.
- On each page load, picks one image at random from a provided array of image paths.
- **Must be picked client-side after mount** (e.g. inside `useEffect`, or a client-component state initializer) — never during server render. A server-rendered guess won't match the client's re-roll and will throw a Next.js hydration mismatch. Show a placeholder/skeleton until the client has mounted and picked.

---

## 9. About Me

- A section with placeholder paragraph text. No layout/style decisions needed yet — just get the block in place so the later theme pass has something to sit inside of.

---

## 10. Quote — randomized per load

- Pool of ~10 quotes (from shows, movies, wherever). One picked at random on every reload.
- Same client-side-random requirement as Section 8 — pick after mount, not during SSR.
- Naming note: this is a *random* quote, not a literal "quote of the day." A true daily quote would seed the pick from the date string so it stays fixed until midnight. Building exactly what was asked for now (random every reload); flag if you want the date-seeded version instead later.

---

## 11. Contact

- Two icons: **LinkedIn** and **Email** (mailto: link).
- Tagline alongside them, all-lowercase, standard smiley:
  > reach out anytime! :D

---

## 12. Background — CPU / electric-circuit theme (decided)

Reference: thomaskrakow's "Animated CPU with electric circuit" — https://codepen.io/thomaskrakow/pen/zYWqezM

That pen is a **centered illustration** (a CPU graphic with animated spark/electric-arc lines through it, contained to roughly 450px) — not built as a full-page tiling background. Use it as two separate pieces rather than one literal reuse:

- **Hero centerpiece:** place a version of the CPU + electric-arc illustration in/near the hero, roughly at its natural contained scale (e.g. behind or beside the name/photo from Section 8). This is where the reference asset works essentially as-is.
- **Ambient site-wide layer:** extract the *technique* — thin glowing lines with pulses of "current" traveling along paths, fading in and out — and run it sparsely, at low opacity, full-bleed behind the rest of the page. Keeps the theme present after the hero without repeating the same chip graphic edge-to-edge.
- Keep opacity/contrast subdued anywhere this sits directly behind text — readability wins over atmosphere.
- Respect `prefers-reduced-motion`: pause or simplify the animation for users with that setting on. Cheap to add now, standard accessibility practice.

---

## 13. Footer (placeholder)

- Minimal footer at the bottom of the page: quick links mirroring the nav (About Me / Projects / Contact Info), the same LinkedIn/Email icons from Section 11, and a one-line copyright ("© [year] Adrian Velazquez-Mtz"). Placeholder styling for now — this is a structural placeholder, not a final design.

---

## 14. Loading states for randomized content

- The photo (Section 8) and quote (Section 10) are both picked client-side after mount. Reserve their exact final dimensions in the layout up front so nothing shifts when the real content appears, and show a neutral placeholder (skeleton box / subtle pulse) in that space until the pick has happened, then fade the real content in. Prevents both layout jump and a blank flash on load.

---

## 15. Hero tagline (one-line pitch)

- Placeholder copy, directly under the name in the hero:
  > Hardware engineer designing systems from schematic to silicon.
- Swap for real positioning copy later — this is here so the hero has its full intended content while the skeleton is being reviewed.

---

## 16. Skills & Tools section

- Placement: directly below the About Me text block (Section 9) — not a separate nav item, to keep the 3-item nav intact.
- Structure: grouped rows of tag/badge pills, reusing the same Badge/tag component from the project skill line in Section 7, for visual consistency across the site.
- Placeholder categories/tags (swap for the real list later):
  - **Design & CAD:** Altium, KiCad
  - **Languages & Firmware:** C, C++, Python
  - **Test & Measurement:** Oscilloscope, Logic Analyzer
  - **Process & Manufacturing:** DFM, SMT Assembly

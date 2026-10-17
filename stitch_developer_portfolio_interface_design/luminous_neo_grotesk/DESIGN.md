---
name: Luminous Neo-Grotesk
colors:
  surface: '#15004b'
  surface-dim: '#15004b'
  surface-bright: '#3d2882'
  surface-container-lowest: '#10003d'
  surface-container-low: '#1e0060'
  surface-container: '#220269'
  surface-container-high: '#2d1473'
  surface-container-highest: '#38237e'
  on-surface: '#e7deff'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e7deff'
  inverse-on-surface: '#341d79'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#b6c4ff'
  on-secondary: '#00287e'
  secondary-container: '#0041c0'
  on-secondary-container: '#abbcff'
  tertiary: '#ffffff'
  on-tertiary: '#00363c'
  tertiary-container: '#91f1ff'
  on-tertiary-container: '#006f7a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b6c4ff'
  on-secondary-fixed: '#00164f'
  on-secondary-fixed-variant: '#003bb0'
  tertiary-fixed: '#91f1ff'
  tertiary-fixed-dim: '#5cd7e7'
  on-tertiary-fixed: '#001f23'
  on-tertiary-fixed-variant: '#004f57'
  background: '#15004b'
  on-background: '#e7deff'
  surface-variant: '#38237e'
typography:
  headline-display:
    fontFamily: Space Grotesk
    fontSize: 112px
    fontWeight: '700'
    lineHeight: 96px
    letterSpacing: -0.04em
  headline-display-mobile:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 68px
    letterSpacing: -0.04em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-xl:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 2rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system establishes a cinematic, high-end creative portfolio environment tailored for elite technical direction and creative development. Inspired by visionary digital agencies, the visual tone blends architectural precision with an atmospheric, dynamic color spectrum.

The design movement combines **Neo-Grotesque Brutalism** and **Atmospheric Glassmorphism**:
- **Monolithic Typography:** Unapologetic, monumental headline sizing anchored by ultra-tight letter tracking and strict vertical cadence.
- **Luminous Atmospheric Mesh:** Deep, cavernous indigo foundations lifted by electric cobalt gradients, drifting pastel purples, and soft celestial cyan lights.
- **Architectural Division:** Micro-thin hairline structural grids (1px at 20% to 40% white opacity) separating cavernous viewports without visual clutter.
- **Tactile Pill Geometry:** High-contrast pill-shaped tags, buttons, and inline media nodes that seamlessly integrate dynamic imagery directly into monumental typographical statements.

## Colors

The palette revolves around deep atmospheric luminosity set against an ink-rich indigo canvas.

### Core Roles
- **Canvas Root (`#2A1070`):** The foundational midnight-indigo plane. Serves as the bedrock for the blurred radial mesh layers.
- **Primary Kinetic Accent (`#2F5BD8`):** High-voltage electric blue powering active interactive states, core focal points, and ambient volumetric flares.
- **Secondary Atmospheric Light (`#6EE7F7`):** Radiant sky-cyan used for secondary accents, glow effects, metric highlights, and hover state transitions.
- **Primary Foreground (`#FFFFFF`):** Pure optical white used for ultra-crisp display headlines, hairline layout borders, and solid interactive pill elements.
- **Tertiary Drift Tone (`#C4B5FD`):** Muted pastel lavender for ambient gradient undercurrents and subtle auxiliary micro-copy.

### Color Rules & Alpha Gradients
- **Hairline Dividers:** Pure white rendered at `rgba(255, 255, 255, 0.2)` for primary module divisions, stepping up to `rgba(255, 255, 255, 0.4)` on interactive borders or emphasized section caps.
- **Body & Metadata Text:** Off-white surfaces at `rgba(255, 255, 255, 0.72)` to prevent eye strain against high-contrast headlines.
- **Ambient Canvas Shader:** CSS radial gradients mixing `#2A1070` (base), `#2F5BD8` (35% mid-drift), `#6EE7F7` (15% accent edge), and faint lavender `#C4B5FD` at 40% blur dispersion.

## Typography

The typography pairs an assertive neo-grotesque display engine with an ultra-legible utilitarian sans:

- **Display & Section Headers (`Space Grotesk`):** Must always be rendered uppercase (`text-transform: uppercase`) when applied to `headline-display` and `headline-xl`. Ultra-tight negative tracking (`-0.04em`) creates a solid visual block where words act as structural architectural elements.
- **Inline Headline Media Tags:** Headlines accommodate inline-block graphic capsules (pill assets: avatars, preview snippets, 3D icons) vertically centered within the text line. Their height matches `0.85em` of the respective headline size with a 4:3 or 16:9 ratio and a 9999px border radius.
- **Editorial & Body Text (`Inter`):** Retains high contrast and natural leading. Optimized for pristine readability over glowing dark gradient backdrops.
- **System Labels & Metadata:** Always rendered with open tracking (`+0.08em`) in full uppercase to establish rhythm between micro-annotations and monumental titles.

## Layout & Spacing

The layout employs an open 12-column fluid grid framed by generous breathing room and editorial whitespace.

### Grid & Canvas Rhythm
- **Desktop (>= 1024px):** 12-column dynamic grid with a `4rem` outer margin and `2rem` column gutters. Section blocks use vertical padding ranging from `6rem` to `10rem` (`space-xl` multipliers).
- **Tablet (768px - 1023px):** 8-column grid with `2.5rem` outer margins and `1.5rem` gutters.
- **Mobile (< 768px):** 4-column fluid layout with `1.25rem` outer canvas boundaries and `1rem` column gutters.

### Structure & Division
Sections must not rely on block-fill container changes. Instead, horizontal hairline boundaries (`1px solid rgba(255, 255, 255, 0.2)`) divide distinct portfolio phases (Work, Stack, Experience, Inquiries). Content adheres tightly to edge-to-edge full width bounds while respecting the outer margin channels.

## Elevation & Depth

Visual hierarchy is created using optical translucent layers, backdrop filters, and localized radial illumination rather than traditional drop shadows.

### Glassmorphism & Atmospheric Depth
- **Level 0 (Canvas Base):** Deep indigo `#2A1070` background populated with drifting ambient vector blurs (`filter: blur(120px)`) rendering `#2F5BD8` and `#6EE7F7` color fields.
- **Level 1 (Card & Section Containers):** Frosted glass surfaces using `rgba(255, 255, 255, 0.04)` fill, `backdrop-filter: blur(16px)`, and a structural perimeter border of `1px solid rgba(255, 255, 255, 0.15)`.
- **Level 2 (Floating Navigation & Dialogs):** Suspended glass pills utilizing `rgba(18, 7, 50, 0.65)` fill, `backdrop-filter: blur(24px)`, and an elevated hairline contour of `1px solid rgba(255, 255, 255, 0.3)`.
- **Hover & Illumination:** Interactive surfaces reveal a localized radial gradient glow (`radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(110, 231, 247, 0.15), transparent 40%)`) instead of standard elevation shadows.

## Shapes

The design system embraces high-contrast geometry: sharp architectural structural sections contrasting with continuous soft curves.

- **Pills (Primary Geometry):** Buttons, interactive tags, category chips, navigation modules, and inline typographic media frames strictly utilize `rounded-full` (radius `9999px`).
- **Cards & Visual Containers:** Glassmorphism panels use an architectural corner radius of `1.5rem` (`24px`), softening the structural grid while preserving modern brutalist edges.
- **Inline Photo Tags:** Media capsules embedded within display typography must maintain complete pill roundedness (`9999px`) with an internal `1.5px` border outline in `rgba(255, 255, 255, 0.4)`.

## Components

### Buttons
- **Outlined Pill (Signature Action):**
  - Geometry: Full pill radius (`9999px`), padding `0.875rem 2rem`.
  - Border: `2px solid #FFFFFF`.
  - Background: Fully transparent.
  - Text: Uppercase `Space Grotesk` or bold `Inter`, `#FFFFFF`, letter spacing `0.04em`.
  - Hover: Background fills instantly to solid `#FFFFFF`; text color transitions to canvas indigo `#2A1070`.
- **Solid Primary Pill:**
  - Geometry: Full pill radius, solid `#FFFFFF` fill, `#2A1070` text.
  - Hover: Background transitions to electric cyan `#6EE7F7`, text remains `#2A1070` with subtle scale enhancement (`scale(1.02)`).

### Inline Headline Pill Media (Signature Brand Token)
- Graphic snippets (project thumbnails, agency team crops, technology badges) inserted inline inside display headings.
- Displayed as `display: inline-flex`, vertical alignment `middle`, height `0.8em`, margins `0 0.25em`.
- Border-radius: `9999px`; overflow: `hidden`; border: `1.5px solid rgba(255, 255, 255, 0.4)`.

### Floating Navigation Pill
- Centered fixed position dock (`bottom: 2rem` or `top: 2rem`).
- Shell: `backdrop-filter: blur(20px)`, background `rgba(42, 16, 112, 0.55)`, border `1px solid rgba(255, 255, 255, 0.25)`.
- Internal items: Round icon buttons and pill links with smooth text crossfades and luminous hover pills (`rgba(255, 255, 255, 0.1)`).

### Glassmorphism Cards
- Background: `rgba(255, 255, 255, 0.03)`.
- Backdrop: `blur(16px)`.
- Border: `1px solid rgba(255, 255, 255, 0.15)`.
- Padding: `2.5rem` on desktop, `1.5rem` on mobile.
- Focus/Hover: Border illuminates to `rgba(110, 231, 247, 0.6)` with internal subtle gradient shifts.

### Chips & Tags
- Height: `28px` to `32px`. Pill-shaped border `1px solid rgba(255, 255, 255, 0.25)`.
- Background: `rgba(255, 255, 255, 0.05)`.
- Text: `label-caps`, uppercase, `#FFFFFF`.

### Form Fields & Inputs
- Underline or soft glass capsule styling.
- Default input: `background: rgba(255, 255, 255, 0.04)`, border `1px solid rgba(255, 255, 255, 0.2)`.
- Roundedness: `9999px` for single-line inputs; `1.25rem` for textareas.
- Active state: Border transitions to `#6EE7F7` with ambient glow box-shadow (`0 0 16px rgba(110, 231, 247, 0.25)`).
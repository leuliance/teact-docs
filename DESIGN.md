---
name: Teact
description: React for Telegram bots — documentation and landing site, set as a shipping manifest.
colors:
  ink: "#17140f"
  ink-soft: "#4a4136"
  kraft: "#cba574"
  kraft-deep: "#b48c58"
  kraft-tint: "#eee3cf"
  label: "#fdfcf9"
  rule: "#d9cdb7"
  safety-orange: "#ff5a1f"
  safety-orange-ink: "#b93a0c"
  telegram-blue: "#2aabee"
  telegram-chat: "#cfdfe9"
  dark-ink: "#f2ebde"
  dark-kraft: "#2b2219"
  dark-label: "#1a1612"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 5.25rem)"
    fontWeight: 850
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 108"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.72
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 75"
  code:
    fontFamily: "Martian Mono, ui-monospace, Menlo, monospace"
    fontSize: "0.8125rem"
    lineHeight: 1.7
    fontVariation: "'wdth' 87.5"
rounded:
  none: "0px"
  bubble: "16px"
spacing:
  gutter: "16px"
  field: "12px 16px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.safety-orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.label}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "48px"
  label-field:
    backgroundColor: "{colors.label}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.field}"
  field-header:
    backgroundColor: "{colors.kraft-tint}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
  inline-code:
    backgroundColor: "{colors.kraft-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
---

# Design System: Teact

## Overview

**Creative North Star: "The Shipping Manifest"**

Teact ships React components to Telegram, so the site is set like freight paperwork: a kraft-card ground, white label stock laid on top, ruled fields with condensed caps for their names, monospace for codes and tracking numbers, and one safety-orange mark for what matters. The neobrutalism is deliberately subtle: borders are 2px, shadows are short hard offsets (2–5px), corners are square, colour is flat. Nothing glows, blurs or gradients.

On the landing page the world carries the page: the hero is one shipping label whose CONTENTS field is a working bot demo. In the docs the world owns the frame only — the rail, title openers, code, tables, callouts — and the reading column stays calm at a 68ch measure.

**Key Characteristics:**
- Label stock on kraft; ink borders define every container.
- Square corners everywhere except Telegram's own chat bubbles in previews.
- Field labels in condensed caps; values in Archivo or Martian Mono.
- One accent (safety orange) for the primary action, active markers and selection.
- Telegram blue appears only inside rendered Telegram previews.

## Colors

A cardboard-and-label palette: warm kraft neutrals, near-black ink, one hazard accent.

### Primary
- **Safety Orange** (#ff5a1f; dark #ff6b36): the primary action (copy-install button), active TOC marker, step numbers, selection highlight, focus rings. Text on it is always ink.
- **Safety Orange Ink** (#b93a0c; dark #ff8a5c): orange used as text or a thin stroke on label stock (links' hover underline, the "Teact 1.0" stamp, list markers) — the AA-safe variant.

### Neutral
- **Kraft** (#cba574; dark #2b2219): the page ground of the landing page and the mobile docs masthead.
- **Kraft Tint** (#eee3cf; dark #221c15): alternating landing sections, the docs rail, field-header strips, inline code.
- **Label Stock** (#fdfcf9; dark #1a1612): every card, label, code block and the docs reading ground.
- **Ink** (#17140f; dark #f2ebde): text and all 2px borders.
- **Ink Soft** (#4a4136; dark #c9bda9): secondary text, field labels.
- **Rule** (#d9cdb7; dark #4a3f31): 1px row dividers inside lists and tables.

### Tertiary (product truth)
- **Telegram Blue** (#2aabee) and **Telegram Chat** (#cfdfe9; dark #10202b): only inside `TelegramPreview` and the hero demo, so the rendered output looks like Telegram.

### Named Rules
**The One Mark Rule.** Safety orange marks a single thing per region: the primary action, the active item, or a measured value. It never fills a section.

**The Telegram Is Quoted Rule.** Telegram's own colours appear only where Telegram is being shown, never in the site chrome.

## Typography

**Display / Body Font:** Archivo, variable width axis (with system sans fallback)
**Code / Label-codes Font:** Martian Mono at 87.5% width (with system mono fallback)

**Character:** One grotesk does all the talking — stretched wide and black for headlines, condensed caps for field labels, normal width for reading — the way a label printer reuses one face. Martian Mono is reserved for code, package names and tracking numbers.

### Hierarchy
- **Display** (850, clamp(2.6rem → 5.25rem), 0.98, wdth 112): landing headlines only.
- **Headline** (800, 1.625rem docs h2 / 2.25–3rem landing h2, wdth 108): section openers; docs h2 sits under a 2px ink rule.
- **Title** (750, 1.1875rem): docs h3.
- **Body** (400, 1rem / 1.125rem on landing, 1.72): reading text, max 68ch in docs.
- **Label** (700, 0.6875rem, 0.08em, uppercase, wdth 75): field names (FROM, TO, CONTENTS, TRACKING), table headers, rail group headings.

### Named Rules
**The One Face Rule.** Hierarchy comes from Archivo's width and weight axes, not from adding faces.

## Layout

Content max width 72rem (`max-w-6xl`) with a 16px gutter on phones and 24px from `sm`. Landing sections alternate kraft and kraft tint, separated by full-width 2px ink rules, with 56–80px vertical padding. Labels split into ruled fields with CSS grid (FROM | TO | stamp; code | preview). On phones the hero preview moves above the code so the rendered result leads. Docs: Fumadocs layout, 268px rail, page width 1180px, reading column 68ch.

## Elevation & Depth

Depth is printed, not lit: zero-blur hard offset shadows in ink (black in dark mode) under label stock. They are structural — they say "this is a separate sheet" — and they collapse on press.

### Shadow Vocabulary
- **Hard Small** (`box-shadow: 2px 2px 0 0 ink`): code blocks, callouts, rail active item, small buttons.
- **Hard** (`box-shadow: 3px 3px 0 0 ink`): labels, tables, primary buttons.
- **Hard Large** (`box-shadow: 5px 5px 0 0 ink`): the hero label and the closing label only.
- **Press** (hover: `4px 4px 0 0` with `translate(-1px,-1px)`; active: `1px 1px 0 0` with `translate(2px,2px)`): every pressable label.

### Named Rules
**The Paper Stack Rule.** A shadow means a separate sheet of label stock. Never put a shadowed box inside another shadowed box.

## Shapes

Square corners (0px) on everything the site draws. Borders are 2px ink for containers and 1px rule for internal dividers; dashed rule separates an expanded manifest row. The only rounded shapes are Telegram's chat bubbles and inline keyboard buttons inside previews (16px / 8px), because they quote Telegram.

## Components

### Buttons
- **Shape:** square, 2px ink border, min height 48px.
- **Primary (copy command):** safety orange, ink mono text, `$` prompt, a ruled "Copy" segment; becomes "Copied" with a check.
- **Secondary:** label stock, ink text, hard shadow.
- **Hover / Active:** the Press shadow behaviour; focus ring 2px safety orange, 2px offset.

### Labels / Containers
- **Corner Style:** 0px.
- **Background:** label stock; field headers in kraft tint with label-caps text.
- **Shadow Strategy:** Hard, or Hard Large for page-defining labels.
- **Border:** 2px ink; internal fields split by 2px ink, rows by 1px rule.

### Manifest (packing list)
Ruled rows: item number (mono), package (mono, bold), contents, group tag (bordered caps). A row expands to its install command and docs link; only one open at a time.

### Docs rail
Kraft tint with a 2px ink right edge; group headings in label caps; items become a bordered label chip with Hard Small shadow when active.

### Code blocks and tables
Label stock, 2px ink border, Hard Small shadow; kraft-tint title strip with the file name in mono. Tables use a kraft-tint caps header and 1px rule dividers with tabular numerals.

### Callouts
Labeled stickers: 2px ink border, a full-width typed header strip (Note, Tip, Watch out, Don't, Works), body below. No coloured side stripe.

### TelegramPreview (signature)
A label whose field header reads "Renders in Telegram as", containing a faithful Telegram chat: user bubble, bot bubble with name, inline keyboard rows, optional reply keyboard, "edited" mark. On the landing page the same component is live: its buttons edit the message and highlight the handler line in the code.

## Do's and Don'ts

### Do:
- **Do** set every container as label stock with a 2px ink border and square corners.
- **Do** name fields in condensed label caps (wdth 75, 0.08em, uppercase) and put values in Archivo or Martian Mono.
- **Do** show rendered Telegram output with `TelegramPreview` next to the code that produces it.
- **Do** keep docs body text at 68ch and let the frame, not the column, carry the world.

### Don't:
- **Don't** use gradients, glows, blur or glass.
- **Don't** round corners outside Telegram previews.
- **Don't** use Telegram blue in site chrome or safety orange as a fill for a whole section.
- **Don't** nest a shadowed box inside another shadowed box.
- **Don't** add eyebrow labels above headings; field labels belong inside labels only.

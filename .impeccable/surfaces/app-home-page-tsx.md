---
version: 1
slug: "app-home-page-tsx"
primary_target: "app/(home)/page.tsx"
related_targets: []
---

# Landing page (app/(home)/page.tsx)

Mode: Persuade. Audience: React devs new to bots and existing Telegram bot devs, equally. Action: copy `bun create teact` (primary) or open the docs. Proof: real code, the bot UI it renders, measured CLI numbers; no stars/downloads (none yet), no testimonials.

## Direction contract

THESIS: Teact ships React components to Telegram, so the page is a parcel being shipped: one big shipping label whose contents are a working bot. It refuses the dev-tool default of a centred gradient headline over a row of equal feature cards.

OWN-WORLD: kraft-card ground, white label stock, ink #17140f, safety orange accent, Telegram blue only inside the bot preview. 2px ink borders, 3px hard offset shadows, label fields split by ruled cells. Archivo (wide black for headlines, condensed caps for field labels), Martian Mono for codes and tracking numbers.

STORY: see that a component becomes a Telegram message; press its buttons and watch it edit in place; read the packing list (15 packages); see the same bot ship to polling, a webhook server or the edge; read real speed numbers; copy the install line.

FIRST VIEWPORT: label strip nav; one shipping label filling the content width. FROM/TO field and the headline across the top, CONTENTS field with the TSX on the left and the live Telegram preview on the right, TRACKING field at the bottom holding the copyable `bun create teact` (primary action) and a Docs button, with a data-drawn barcode. Signature interaction: the preview's inline keyboard really works and the code highlights the handler that ran.

FORM: shipping manifest, candidate 4 of 7 (keycaps, chat thread, sticker sheet, manifest, specimen sheet, zine, Swiss grid); seed c8d5d9f3 (degraded roll, no challengers).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

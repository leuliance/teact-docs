---
version: 1
slug: "app-docs-layout-tsx"
primary_target: "app/docs/layout.tsx"
related_targets: ["app/docs/[[...slug]]/page.tsx"]
---

# Docs (app/docs/**)

Mode: Read. Reader: building a bot, looking up an API, a pattern or a deploy step. Problems to fix (owner): looks stock, pages too thin, hard to find things, code examples too plain.

## Direction contract

THESIS: the manifest world owns the frame (masthead, rail, title openers, code, tables, callouts); the reading column stays calm. Refuses the stock Fumadocs look and any world material inside running text.

OWN-WORLD: same tokens as the landing page; docs ground is label stock, the nav band is kraft, sidebar groups set as condensed label tabs, the active page a bordered label chip with a 2px hard shadow; code blocks and tables are ruled manifests with a mono title strip; callouts are labeled stickers with a typed header strip.

STORY: the reader always knows where they are (section tab, breadcrumb, page tag chips), reads a detailed page with tabs, file titles and rendered Telegram output previews, and moves on via next/previous and related links.

FIRST VIEWPORT: kraft nav band with wordmark, search field and links; left rail grouped by stage (Start, Build, Data, Ship, Reference); title opener with description and package tags; body at 68ch; right TOC with an orange active marker.

FORM: same direction as the landing page (seed c8d5d9f3), Read-mode rendition.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

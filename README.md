# VitalSource Captures Summary

## Captured Files
- **44 JavaScript files** (original minified) in `js/`
- **44 JavaScript files** (deobfuscated/beautified) in `js_decompiled/`
- **23 source maps** (`.map` files) alongside deobfuscated JS
- **8 HTML files** in `html/` (page structure, iframes, EPUB content)
- **1 screenshot** (screenshot.png)
- **143 HTTP requests** logged (requests.json)
- **134 HTTP responses** logged (responses.json)
- **55 JS source files** captured from network (some overwritten due to same name)
- **scripts_info.json** - script tag metadata
- **links_info.json** - CSS/font link metadata
- **iframes_info.json** - iframe sources

## Tooling
- **Babel** configured (babel.config.js with preset-env + preset-react)
- **Terser** used for JS beautification (deobfuscate.js script)
- **Source maps** generated for supported files

## Key API Endpoints (jigsaw.vitalsource.com)
- `/books/{isbn}` - Book metadata
- `/info/books.json?isbns={isbn}` - License/book info
- `/books/{isbn}/pages.json` - Page list
- `/books/{isbn}/toc` - Table of contents
- `/books/{isbn}/pagebreaks` - Page break positions
- `/books/{isbn}/pagebreaks` - Page break positions
- `/books/{isbn}/epub/OPS/...` - EPUB content (XHTML)
- `/books/{isbn}/epub/cfi/...` - Content via CFI (Canonical Fragment Identifier)
- `/books/{isbn}/highlights` - User highlights
- `/books/{isbn}/bookmarks` - User bookmarks
- `/books/{isbn}/pages/recent` - Recently viewed pages

## Other Services
- `login.vitalsource.com/redirect` - Authentication redirect
- `print.vitalsource.com/print/{isbn}/limits` - Print permissions
- `flashcards.vitalsource.com/v2/auth/...` - Flashcards auth
- `search.vitalsource.com` - Search
- `covers.vitalsource.com/vbid/{isbn}/width/120` - Cover images
- `chameleon.vitalsource.com/api/brands/...` - Branding/config
- `lumberjack-cfw.vitalsource.com/track` - Event tracking
- `bam.nr-data.net` - New Relic analytics

## Book Info
- **Title**: Living with Art
- **Author**: Mark Getlein
- **ISBN**: 9781266607752 (vbid)
- **Original ISBN**: 9781266431227 (from URL)

## Authentication
- Uses `bc_token` query parameter for direct book access
- No MFA/campus login required with valid bc_token
- Token: `context_token=61bfec10-aae6-013f-f189-1eb286fc39a0`

## Content Delivery
- Book content served as EPUB (XHTML) files from `jigsaw.vitalsource.com`
- EPUB content accessed via POST with base64-encoded data
- Images served as PNG from `/epub/OPS/img/...`
- Content rendered in a mosaic iframe reader

## Notes
- The campus SSO login at campus.capella.edu requires PingID MFA
- MFA is blocked from cloud server IPs (company policy)
- The bc_token provides direct access without SSO

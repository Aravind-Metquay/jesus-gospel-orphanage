# Put the 14 photographs here

Use exactly these filenames (any of .jpg .jpeg .png .webp .avif):

| Group      | Filenames                                            |
| ---------- | ---------------------------------------------------- |
| Daily life | `daily-01` … `daily-06`                              |
| Elder care | `elder-01` … `elder-04`                              |
| Events     | `event-01` … `event-04`                              |
| Hero       | `../hero.jpg` (wide, landscape)                      |
| Director   | `../director.jpg` (portrait)                         |
| Logo       | `../logo.svg` or `../logo.png`                       |

Drop the files straight off the camera — don't resize them first. The build
compresses each one and generates phone-sized WebP versions automatically.

Then write the alt text in `src/data/site.ts`: describe what is happening in
the photo, not "children smiling". A slot with no file shows a dashed
placeholder instead of breaking the page.

**Consent:** every photo showing a child needs permission from their guardian
before it goes online. Get it in writing.

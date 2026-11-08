# NDINA Gallery site rules

## Images: WebP only (site-wide performance rule)
- All images on every page must be **WebP** (`.webp`), including embedded data URIs. No JPEG/PNG in page markup.
- Exceptions: `og:image` / social share images stay JPEG (crawler compatibility), and favicons/SVG logos.
- Size caps: full-bleed/hero images max 1600px on the long edge (quality ~75); in-article and artwork images max 1200px (quality ~72–75). Gallery thumbnails use a separate ~320px `-th.webp`, never the full image.
- Below-the-fold images use `loading="lazy" decoding="async"`; only the first visible image loads eagerly.
- Only deviate (larger, higher-resolution files) when explicitly asked for a high-res zoom view of artwork. Keep the standard version for the normal page view.
- Delete the original JPG/PNG from the repo once converted, unless it is an exception above.

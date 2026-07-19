const OLD_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.66 Safari/537.36";

/**
 * Google Fonts serves woff2 (unreadable by satori/next-og) to modern user agents and a
 * latin-only subset to old ones unless a `text=` subset is requested — this fetches a
 * TTF/WOFF containing exactly the glyphs `text` needs, so diacritics (ā, ṇ, ś, ò, à...)
 * in practice titles actually render in generated OG images instead of dropping silently.
 */
export async function loadDisplayFont(text: string): Promise<ArrayBuffer> {
  const params = new URLSearchParams({ family: "Fraunces:wght@600", text });
  const css = await fetch(`https://fonts.googleapis.com/css2?${params}`, {
    headers: { "User-Agent": OLD_UA },
  }).then((res) => res.text());

  const fontUrl = css.match(/src: url\(([^)]+)\)/)?.[1];
  if (!fontUrl) throw new Error("Could not resolve Fraunces font URL from Google Fonts CSS");

  const fontResponse = await fetch(fontUrl);
  return fontResponse.arrayBuffer();
}

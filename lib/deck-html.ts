import { readFile } from "node:fs/promises";
import path from "node:path";

const DECK_SLUG_PATTERN = /^[a-z0-9-]+$/;

export async function readDeckHtml(slug: string) {
  if (!DECK_SLUG_PATTERN.test(slug)) {
    return null;
  }

  const htmlPath = path.join(process.cwd(), "public", "deck", slug, "index.html");

  try {
    return await readFile(htmlPath, "utf8");
  } catch {
    return null;
  }
}

export function createDeckHtmlResponse(html: string) {
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=600",
    },
  });
}

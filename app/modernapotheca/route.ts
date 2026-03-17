import { createDeckHtmlResponse, readDeckHtml } from "@/lib/deck-html";

export const runtime = "nodejs";

export async function GET() {
  const html = await readDeckHtml("modernapotheca");

  if (!html) {
    return new Response("Not found", { status: 404 });
  }

  return createDeckHtmlResponse(html);
}

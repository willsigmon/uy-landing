import { createDeckHtmlResponse, readDeckHtml } from "@/lib/deck-html";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const html = await readDeckHtml(slug);

  if (!html) {
    return new Response("Not found", { status: 404 });
  }

  return createDeckHtmlResponse(html);
}

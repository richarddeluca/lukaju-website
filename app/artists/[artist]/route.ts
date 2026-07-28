import { NextRequest, NextResponse } from "next/server";
import { ARTISTS_DATA } from "@/config/artists";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ artist: string }> }
) {
  const { artist } = await params;
  const artistSlug = artist.toLowerCase();

  const artistConfig = ARTISTS_DATA[artistSlug];

  if (artistConfig && artistConfig.targetUrl) {
    // Redireciona para o link do artista registrando o acesso na rota Vercel Analytics
    return NextResponse.redirect(artistConfig.targetUrl, { status: 307 });
  }

  // Caso o artista não seja encontrado, redireciona para a página principal
  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url, { status: 307 });
}

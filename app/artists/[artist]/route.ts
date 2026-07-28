import { NextRequest, NextResponse } from "next/server";
import { ARTISTS_DATA } from "@/config/artists";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ artist: string }> }
) {
  const { artist } = await params;
  let artistSlug = artist.toLowerCase().replace("_", "-");

  const artistConfig = ARTISTS_DATA[artistSlug];

  if (artistConfig && artistConfig.targetUrl) {
    // Redireciona para o link real do artista gravando a métrica no Vercel Analytics
    return NextResponse.redirect(artistConfig.targetUrl, { status: 307 });
  }

  // Se o artista não for encontrado, volta para a home
  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url, { status: 307 });
}

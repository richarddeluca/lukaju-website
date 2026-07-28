export interface ArtistConfig {
  slug: string;
  name: string;
  role: string;
  img: string;
  targetUrl: string;
}

export const ARTISTS_DATA: Record<string, ArtistConfig> = {
  hime: {
    slug: "hime",
    name: "Hime",
    role: "Character Illustrator",
    img: "/artists/hime.webp",
    targetUrl: "https://twitter.com/hime", // Substitua pelo link real do artista (Twitter/X, ArtStation, Pixiv, etc.)
  },
  valneeko: {
    slug: "valneeko",
    name: "Valneeko",
    role: "Character Illustrator",
    img: "/artists/valneeko.jpg",
    targetUrl: "https://twitter.com/valneeko", // Substitua pelo link real do artista
  },
  hoyo: {
    slug: "hoyo",
    name: "HoYo",
    role: "Key Visuals & Art Assets",
    img: "/artists/hoyo.jpg",
    targetUrl: "https://twitter.com/hoyo", // Substitua pelo link real do artista
  },
  "lua-lunareth": {
    slug: "lua-lunareth",
    name: "Lua Lunareth",
    role: "Color & Environmental Mood",
    img: "/artists/lua_lunareth.jpg",
    targetUrl: "https://twitter.com/lualunareth", // Substitua pelo link real do artista
  },
};

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
        targetUrl: "https://linktr.ee/hime07358",
    },
    valneeko: {
        slug: "valneeko",
        name: "Valneeko",
        role: "Character Illustrator",
        img: "/artists/valneeko.jpg",
        targetUrl: "https://valneeko.carrd.co/",
    },
    hoyo: {
        slug: "hoyo",
        name: "HoYo",
        role: "Character Illustrator",
        img: "/artists/hoyo.jpg",
        targetUrl: "https://cara.app/hoyoart",
    },
    "lua-lunareth": {
        slug: "lua-lunareth",
        name: "Lua Lunareth",
        role: "Background Illustrator",
        img: "/artists/lua_lunareth.jpg",
        targetUrl: "https://lualunareth.carrd.co/",
    },
    "soffiy": {
        slug: "soffiy",
        name: "Soffiy",
        role: "Background Illustrator",
        img: "/artists/soffiy.jpg",
        targetUrl: "https://vgen.co/Soffiyy",
    },
};

export const SITE_TITLE_BASE = "Brayden Babbitt" as const;
export const DEFAULT_SITE_DESCRIPTION =
  "Brayden Babbitt's personal website, showcasing his projects, blog, and other content." as const;

export const TAGS = {
  React: {
    color: "#61DAFB",
  },
  Typescript: {
    color: "#3178C6",
  },
  Postgres: {
    color: "#336791",
  },
  Deno: {
    color: "#202020",
  },
  Supabase: {
    color: "#3ECF8E",
  },
  Astro: {
    color: "#d83333",
  },
} as const satisfies Record<string, { color: string }>;

export const LOGO_COLORS = {
  linkedinBlue: "#0072b1",
  linkedinBlueDark: "#00669f",
  githubGray: "#0d1117",
  githubGrayDark: "#090b10",
} as const;

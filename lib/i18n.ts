export const locales = ["en", "zh-CN"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export async function getMessages(locale: Locale) {
  // Merge namespaces; later you can split per page and lazy-load
  const [home, meta, about, projects, contact, common] = await Promise.all([
    import(`../messages/${locale}/home.json`).then((m) => m.default),
    import(`../messages/${locale}/meta.json`).then((m) => m.default),
    import(`../messages/${locale}/about.json`).then((m) => m.default),
    import(`../messages/${locale}/projects.json`).then((m) => m.default),
    import(`../messages/${locale}/contact.json`).then((m) => m.default),
    import(`../messages/${locale}/common.json`).then((m) => m.default),
  ]);

  return { home, meta, about, projects, contact, common } as const;
}

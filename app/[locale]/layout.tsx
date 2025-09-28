import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const locale = params.locale;
  const { meta } = await getMessages(locale);

  return {
    title: meta.title,
    description: meta.description,
    // You can extend keywords, openGraph, twitter, etc. as needed
    generator: meta.generator,
    alternates: {
      // hreflang: provide language links for main entry pages
      languages: {
        en: "/en",
        "zh-CN": "/zh-CN",
      },
    },
  };
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Keep provider at page level; this layout only handles metadata and structure
  return <>{children}</>;
}

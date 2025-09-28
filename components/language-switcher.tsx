"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { locales } from "@/lib/i18n";
import { useTranslations } from "next-intl";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("common");

  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = locales.includes(segments[0] as any)
    ? segments[0]
    : null;

  function buildPath(targetLocale: string) {
    const newSegments = [...segments];
    if (currentLocale) {
      newSegments[0] = targetLocale;
    } else {
      newSegments.unshift(targetLocale);
    }
    const newPath = "/" + newSegments.join("/");
    const qs = searchParams.toString();
    return qs ? `${newPath}?${qs}` : newPath;
  }

  function switchTo(targetLocale: string) {
    router.push(buildPath(targetLocale));
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchTo("en")}
        className={`px-2 py-1 rounded text-sm ${
          (currentLocale ?? "en") === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {t("language.en")}
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => switchTo("zh-CN")}
        className={`px-2 py-1 rounded text-sm ${
          currentLocale === "zh-CN"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {t("language.zhCN")}
      </button>
    </div>
  );
}

export default LanguageSwitcher;

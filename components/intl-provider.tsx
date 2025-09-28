"use client";

import type React from "react";
import { NextIntlClientProvider } from "next-intl";

export function IntlProvider({
  children,
  messages,
  locale,
}: {
  children: React.ReactNode;
  messages: Record<string, unknown>;
  locale: string;
}) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}

export default IntlProvider;

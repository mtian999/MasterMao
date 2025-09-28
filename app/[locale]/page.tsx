import { IntlProvider } from "@/components/intl-provider";
import { getMessages } from "@/lib/i18n";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default async function LocaleHome({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as "en" | "zh-CN";
  const messages = await getMessages(locale);

  return (
    <div className="min-h-screen bg-background">
      <IntlProvider messages={messages} locale={locale}>
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </IntlProvider>
    </div>
  );
}

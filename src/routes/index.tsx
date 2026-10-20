import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Video Speed Reader — Transcripts in three minutes" },
      {
        name: "description",
        content: "Upload your video, get a clean, accurate transcript in three minutes. Chinese and English.",
      },
      { property: "og:title", content: "Video Speed Reader — Transcripts in three minutes" },
      {
        property: "og:description",
        content: "Upload your video, get a clean, accurate transcript in three minutes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: FileText,
    title: "高準確度逐字稿",
    en: "High-accuracy transcripts",
    body: "Powered by OpenAI Whisper. Supports Chinese and English.",
  },
  {
    icon: Clock,
    title: "三分鐘交付",
    en: "Three-minute turnaround",
    body: "Processed in the background — you get an email when it's ready.",
  },
  {
    icon: ShieldCheck,
    title: "可商用授權",
    en: "Commercial-use ready",
    body: "You own the output. Use it however you like.",
  },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader
        right={
          <Button asChild variant="hero" size="sm">
            <Link to="/auth">Sign in / 登入</Link>
          </Button>
        }
      />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
          <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32">
            <p className="fade-up mb-6 inline-block rounded-full border border-border bg-card/60 px-4 py-1 text-xs font-medium text-muted-foreground">
              For creators, educators & engineers
            </p>
            <h1 className="fade-up text-5xl font-extrabold tracking-tight sm:text-7xl">
              Video <span className="text-gradient">Speed Reader</span>
            </h1>
            <p className="fade-up mt-6 text-xl font-medium sm:text-2xl [animation-delay:120ms]">
              上傳影片，三分鐘內拿到逐字稿。
            </p>
            <p className="fade-up mt-3 text-base text-muted-foreground sm:text-lg [animation-delay:200ms]">
              Upload your video, get a clean transcript in three minutes.
            </p>
            <div className="fade-up mt-10 [animation-delay:280ms]">
              <Button asChild variant="hero" size="lg">
                <Link to="/auth" search={{ mode: "signup" }}>
                  Get started free
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.en}
                className="fade-up rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
                style={{ animationDelay: `${300 + i * 100}ms` }}
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary-glow">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.en}</p>
                <p className="mt-3 text-sm leading-relaxed text-card-foreground/80">{f.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © 2026 Video Speed Reader
      </footer>
    </div>
  );
}

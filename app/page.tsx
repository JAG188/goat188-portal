import type { Metadata } from "next";
import { ArrowRight, ChevronDown, Flame, Gem, Shield, Zap } from "lucide-react";
import { NodeSimulator } from "@/components/node-simulator";
import { SiteHeader } from "@/components/site-header";
import {
  ALTERNATIVE_LINK_HREF,
  HERO_H1,
  INDEXED_DOMAINS,
  PAGE_DESCRIPTION,
  PAGE_KEYWORDS,
  PAGE_TITLE,
  SEO_H1,
  SITE_URL,
  VIP_REGISTER_HREF,
} from "@/lib/site";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "GOAT188",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: PAGE_TITLE,
      headline: SEO_H1,
      description: PAGE_DESCRIPTION,
      inLanguage: "id-ID",
      isPartOf: { "@id": `${SITE_URL}/#organization` },
      about: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "GOAT188",
      url: `${SITE_URL}/`,
      slogan: HERO_H1,
      sameAs: INDEXED_DOMAINS.map((domain) => domain.href),
    },
  ],
};

const features = [
  {
    icon: Zap,
    title: "Latensi < 3ms",
    copy: "Node Server Terdekat",
  },
  {
    icon: Shield,
    title: "Proteksi VIP 256-Bit",
    copy: "Keamanan Data Sempurna",
  },
  {
    icon: Gem,
    title: "Bonus Member VIP 2027",
    copy: "Akses Eksklusif",
  },
] as const;

const faqs = [
  {
    question: "Apa itu portal resmi GOAT188 Era 2027?",
    answer:
      "GOAT188 adalah gerbang pra-peluncuran untuk jaringan server node, pendaftaran ID VIP, dan pemantauan latensi sebelum platform gaming 2027 dibuka penuh.",
  },
  {
    question: "Bagaimana cara daftar ID VIP?",
    answer:
      "Gunakan tombol DAFTAR ID VIP pada halaman ini. Setelah ID VIP 2027 aktif, sesi Anda menerima prioritas antrean ke node dengan latensi terbaik.",
  },
  {
    question: "Apa arti latensi di bawah 3ms?",
    answer:
      "Latensi adalah waktu tempuh data menuju server node. Jalur prioritas di bawah 3ms masuk kategori Ultra Fast, sehingga perintah dan sinkronisasi sesi tetap responsif.",
  },
  {
    question: "Di mana link alternatif GOAT188?",
    answer:
      "Link alternatif utama tersedia pada tombol di hero dan pada domain terindeks di footer: goat188aktif.com, goat188vip.com, dan goat188rank.com.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <a
        href="#portal-vip"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-void"
      >
        Loncat ke konten
      </a>

      <SiteHeader />

      <main>
        <section
          id="portal-vip"
          aria-labelledby="hero-heading"
          className="relative overflow-hidden"
        >
          <div className="arena-grid pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -left-16 top-8 size-72 rounded-full bg-fire/25 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-24 size-80 rounded-full bg-gold/15 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
            <div className="mx-auto max-w-4xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-fire/40 bg-fire/10 px-3 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-gold shadow-[0_0_18px_rgba(239,68,68,0.25)] sm:text-xs">
                <Flame className="size-3.5 text-fire" aria-hidden="true" />
                OFFICIAL PRE-LAUNCH GATEWAY 2027
              </p>

              <h1
                id="hero-heading"
                className="mx-auto mt-6 max-w-5xl font-display text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
              >
                <span className="metal-text">GOAT188</span>
                {" - Portal Resmi & Server Node Latensi Rendah 2027"}
              </h1>

              <p className="mt-5 font-display text-lg text-gold sm:text-2xl">
                {HERO_H1}
              </p>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                Dapatkan prioritas koneksi server node tercepat tanpa hambatan
                dengan sistem keamanan terenkripsi 256-bit.
              </p>

              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <a
                  href={VIP_REGISTER_HREF}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fire-deep via-fire to-gold px-6 py-3 text-sm font-bold tracking-wide text-white shadow-[0_0_28px_rgba(239,68,68,0.45)] transition hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(245,158,11,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  DAFTAR ID VIP
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href={ALTERNATIVE_LINK_HREF}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold/40 bg-panel/80 px-6 py-3 text-sm font-semibold tracking-wide text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur transition hover:border-fire hover:text-white hover:shadow-[0_0_24px_rgba(239,68,68,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  LINK ALTERNATIF UTAMA
                </a>
              </div>
            </div>

            <div id="fitur-node" className="scroll-mt-32 mx-auto mt-14 max-w-5xl">
              <h2 className="text-center font-display text-sm tracking-[0.22em] text-gold">
                FITUR NODE 2027
              </h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-3">
                {features.map((feature) => (
                  <li
                    key={feature.title}
                    className="rounded-2xl border border-white/10 bg-panel/70 p-5 text-left shadow-[0_0_0_1px_rgba(245,158,11,0.05)] backdrop-blur-md transition hover:border-gold/40 hover:shadow-[0_0_28px_rgba(239,68,68,0.16)]"
                  >
                    <feature.icon
                      className="size-6 text-gold"
                      aria-hidden="true"
                    />
                    <h3 className="mt-4 font-display text-lg text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">{feature.copy}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="latensi-server"
          aria-labelledby="latency-heading"
          className="scroll-mt-32 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
        >
          <NodeSimulator />
        </section>

        <section
          id="panduan"
          aria-labelledby="guide-heading"
          className="scroll-mt-32 border-y border-white/10 bg-panel/40"
        >
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="font-display text-[11px] tracking-[0.22em] text-gold">
              INDEKS GATEWAY 2027
            </p>
            <h2
              id="guide-heading"
              className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl"
            >
              Jaringan Node, Uptime, dan Akses VIP
            </h2>

            <div className="mt-8 space-y-8 text-sm leading-relaxed text-zinc-300 sm:text-base">
              <div>
                <h3 className="font-display text-lg text-white">
                  Mengapa memilih jaringan server node GOAT188 di era 2027
                </h3>
                <p className="mt-3">
                  GOAT 188 menempatkan pemain pada server node GOAT188 2027 yang
                  paling dekat dengan lokasi mereka. Jalur prioritas menjaga
                  waktu respons di bawah 3 milidetik, sehingga sesi tetap stabil
                  saat trafik regional sedang padat. Arsitektur ini mengurangi
                  antrean, mempercepat sinkronisasi status, dan memberi GOAT188
                  VIP ruang koneksi yang tidak berebut dengan trafik umum.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg text-white">
                  Infrastruktur cloud dengan uptime 99,99%
                </h3>
                <p className="mt-3">
                  Infrastruktur cloud GOAT188 dirancang untuk uptime 99,99%.
                  Node di Jakarta, Surabaya, Medan, dan Bali saling mencadangkan
                  lalu lintas. Jika satu jalur mengalami lonjakan, sesi berpindah
                  ke node sehat tanpa memutus akses portal. Pemantauan berjalan
                  24/7, termasuk pada jam sibuk, agar gateway tetap terbuka.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg text-white">
                  Panduan akses cepat dan pendaftaran ID VIP GOAT188
                </h3>
                <p className="mt-3">
                  Pendaftaran ID VIP GOAT188 dimulai dari tombol DAFTAR ID VIP.
                  Setelah identitas aktif, anggota menerima prioritas antrean,
                  jalur node khusus, dan kanal bantuan yang siaga sepanjang
                  hari. Untuk akses cepat, simpan domain terindeks, buka Portal
                  VIP, lalu masuk agar sesi langsung memilih node dengan latensi
                  terbaik.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg text-white">
                  Proteksi terenkripsi dan link alternatif GOAT188
                </h3>
                <p className="mt-3">
                  Proteksi jaringan terenkripsi 256-bit menjaga data akun selama
                  berada di gateway. Link alternatif GOAT188 pada goat188aktif.com,
                  goat188vip.com, dan goat188rank.com mengarah ke infrastruktur
                  yang sama. Gunakan LINK ALTERNATIF UTAMA bila Anda membutuhkan
                  pintu masuk kedua tanpa kehilangan status VIP.
                </p>
              </div>
            </div>

            <a
              href={VIP_REGISTER_HREF}
              className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fire-deep via-fire to-gold px-6 py-3 text-sm font-bold tracking-wide text-white shadow-[0_0_24px_rgba(239,68,68,0.4)]"
            >
              DAFTAR ID VIP
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="scroll-mt-32 mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <h2
            id="faq-heading"
            className="font-display text-3xl text-white sm:text-4xl"
          >
            FAQ
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            Jawaban singkat seputar portal VIP, latensi node, dan akses
            alternatif GOAT188.
          </p>
          <div className="mt-8 space-y-3">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-white/10 bg-panel/80 backdrop-blur-md open:border-gold/40 open:shadow-[0_0_24px_rgba(245,158,11,0.12)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-white [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown
                    className="size-4 shrink-0 text-gold transition group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-300">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-panel">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="text-sm text-zinc-400">
            Copyright 2027 GOAT188. All rights reserved.
          </p>
          <nav aria-label="Domain terindeks">
            <ul className="flex flex-col gap-2 sm:flex-row sm:gap-5">
              {INDEXED_DOMAINS.map((domain) => (
                <li key={domain.href}>
                  <a
                    href={domain.href}
                    className="text-sm text-gold transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {domain.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

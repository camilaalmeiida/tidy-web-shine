import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-inove.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/localizacao")({
  head: () => ({
    meta: [
      { title: "Localização — Inove Max Facilities | Osasco/SP" },
      {
        name: "description",
        content:
          "Visite a Inove Max Facilities em Presidente Altino, Osasco/SP. Rua Rodolfo Zolli, 157. Contato: (11) 94777-5757.",
      },
    ],
    links: [{ rel: "canonical", href: "/localizacao" }],
  }),
  component: Localizacao,
});

const ADDRESS = "Rua Rodolfo Zolli, 157 - Presidente Altino, Osasco - SP";
const MAPS_QUERY = encodeURIComponent(ADDRESS);

function Localizacao() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Inove Max Facilities" className="h-14 w-auto" />
            <span className="text-base font-semibold tracking-tight leading-none">
              Inove Max
              <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Facilities
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <Link to="/" hash="servicos" className="transition-colors hover:text-foreground">Serviços</Link>
            <Link to="/" hash="porque" className="transition-colors hover:text-foreground">Por que nós</Link>
            <Link to="/" hash="clientes" className="transition-colors hover:text-foreground">Clientes</Link>
            <Link to="/localizacao" className="font-medium text-foreground transition-colors">Localização</Link>
            <Link to="/" hash="orcamento" className="transition-colors hover:text-foreground">Contato</Link>
          </nav>
          <Button asChild variant="hero" size="sm">
            <Link to="/" hash="orcamento">Orçamento grátis</Link>
          </Button>
        </div>
      </header>


      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-primary-foreground md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <MapPin className="h-3.5 w-3.5" />
            Nossa sede
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Onde nos encontrar
          </h1>
          <p className="mt-4 max-w-xl text-lg text-primary-foreground/85">
            Atendemos toda a Grande São Paulo a partir da nossa sede em Osasco. Visite-nos, ligue ou envie uma mensagem — respondemos rápido.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-6">
            <div
              className="rounded-2xl border border-border bg-card p-7"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Endereço</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Rua Rodolfo Zolli, 157
                    <br />
                    Presidente Altino — Osasco / SP
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    Abrir no Google Maps →
                  </a>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl border border-border bg-card p-7"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Telefone</h2>
                  <a href="tel:+5511947775757" className="mt-1 block text-sm text-muted-foreground hover:text-foreground">
                    (11) 94777-5757
                  </a>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl border border-border bg-card p-7"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">E-mail</h2>
                  <a
                    href="mailto:contato@inovemaxservicos.com.br"
                    className="mt-1 block break-all text-sm text-muted-foreground hover:text-foreground"
                  >
                    contato@inovemaxservicos.com.br
                  </a>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl border border-border bg-card p-7"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Horário de atendimento</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Segunda a sexta — 8h às 18h
                    <br />
                    Sábado — 8h às 12h
                    <br />
                    Emergências 24h via WhatsApp
                  </p>
                </div>
              </div>
            </div>

            <Button asChild variant="hero" size="lg" className="w-full">
              <a href="https://wa.me/5511947775757" target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          <div
            className="overflow-hidden rounded-2xl border border-border bg-card md:sticky md:top-24"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <iframe
              title="Localização Inove Max Facilities"
              src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
              width="100%"
              height="560"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[560px] w-full border-0"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Inove Max Facilities" className="h-8 w-auto" />
            <span className="font-semibold text-foreground">Inove Max Facilities</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <p>Osasco / SP</p>
        </div>
      </footer>
    </div>
  );
}

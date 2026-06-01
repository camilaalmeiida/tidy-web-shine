import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  Building2,
  Home,
  Hammer,
  Leaf,
  ShieldCheck,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Check,
  Star,
  Shield,
  TreePine,
  Wrench,
  Bug,
  Package,
} from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";
import detailImage from "@/assets/detail-clean.jpg";
import logo from "@/assets/logo-inove.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inove Max Facilities — Limpeza e facilities terceirizados" },
      {
        name: "description",
        content:
          "Empresa de limpeza terceirizada com equipe treinada, produtos sustentáveis e atendimento 24/7. Orçamento gratuito para escritórios, condomínios e pós-obra.",
      },
      { property: "og:title", content: "Inove Max — Limpeza terceirizada" },
      {
        property: "og:description",
        content:
          "Equipe treinada, produtos sustentáveis e atendimento 24/7. Orçamento gratuito em minutos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  {
    icon: Building2,
    title: "Empresas & Escritórios",
    desc: "Manutenção diária com equipe fixa ou rotativa, garantindo ambientes impecáveis para colaboradores e clientes.",
  },
  {
    icon: Home,
    title: "Condomínios",
    desc: "Áreas comuns, garagens, vidros e piscinas. Zeladoria completa com supervisão dedicada.",
  },
  {
    icon: Hammer,
    title: "Pós-obra & Reformas",
    desc: "Remoção de resíduos pesados, polimento de pisos e entrega do espaço pronto para uso imediato.",
  },
  {
    icon: Sparkles,
    title: "Limpeza Pesada",
    desc: "Higienização profunda com equipamentos profissionais para cozinhas industriais, hospitais e indústrias.",
  },
  {
    icon: Leaf,
    title: "Linha Sustentável",
    desc: "Produtos biodegradáveis e processos com baixo consumo de água, ideal para empresas com selo ESG.",
  },
  {
    icon: ShieldCheck,
    title: "Sanitização",
    desc: "Desinfecção hospitalar com produtos certificados pela Anvisa. Relatório técnico ao final.",
  },
  {
    icon: Shield,
    title: "Portaria & Controle de Acesso",
    desc: "Porteiros treinados, controle de visitantes e monitoramento 24h presencial ou remoto.",
  },
  {
    icon: TreePine,
    title: "Jardinagem & Paisagismo",
    desc: "Manutenção de áreas verdes, poda, plantio e projetos paisagísticos para empresas e condomínios.",
  },
  {
    icon: Wrench,
    title: "Manutenção Predial",
    desc: "Elétrica, hidráulica, pintura e pequenos reparos com equipe multidisciplinar sob demanda.",
  },
  {
    icon: Bug,
    title: "Controle de Pragas",
    desc: "Dedetização, desratização e descupinização com produtos certificados e garantia técnica.",
  },
  {
    icon: Package,
    title: "Copa & Suprimentos",
    desc: "Reposição de materiais de higiene, café, descartáveis e gestão de estoque sem você precisar acompanhar.",
  },
];

const benefits = [
  { icon: Users, label: "+250 clientes ativos" },
  { icon: Award, label: "12 anos de mercado" },
  { icon: Clock, label: "Atendimento 24/7" },
  { icon: ShieldCheck, label: "Equipe registrada CLT" },
];

const testimonials = [
  {
    name: "Marina Souza",
    role: "Gerente Predial — Edifício Cidade Jardim",
    quote:
      "Trocamos três terceirizadas até chegar na Inove Max. Em seis meses, zero reclamação dos moradores. Equipe pontual e supervisão presente toda semana.",
  },
  {
    name: "Rafael Lima",
    role: "Diretor de Operações — TechHub SP",
    quote:
      "Atendem nossos três escritórios com o mesmo padrão. O portal de chamados resolve qualquer ajuste no mesmo dia. Recomendo sem reservas.",
  },
  {
    name: "Construtora Vértice",
    role: "Limpeza pós-obra — 14 entregas",
    quote:
      "Entregam o canteiro no prazo combinado, sem surpresa. Viraram parceiros fixos das nossas obras residenciais de alto padrão.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Trust />
      <Services />
      <WhyUs />
      <Testimonials />
      <Quote />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="Inove Max Facilities" className="h-14 w-auto" />
          <span className="text-base font-semibold tracking-tight leading-none">
            Inove Max
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Facilities
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#servicos" className="transition-colors hover:text-foreground">Serviços</a>
          <a href="#porque" className="transition-colors hover:text-foreground">Por que nós</a>
          <a href="#clientes" className="transition-colors hover:text-foreground">Clientes</a>
          <Link to="/localizacao" className="transition-colors hover:text-foreground">Localização</Link>
          <a href="#orcamento" className="transition-colors hover:text-foreground">Contato</a>
        </nav>

        <Button asChild variant="hero" size="sm">
          <a href="#orcamento">Orçamento grátis</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_60%)]" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32 md:items-center">
        <div className="text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Limpeza profissional desde 2013
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Ambientes impecáveis,{" "}
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              equipe que cuida.
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-primary-foreground/85">
            Terceirização de limpeza para empresas, condomínios e obras. Equipe registrada, supervisão dedicada e produtos sustentáveis — com orçamento em até 24 horas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="#orcamento">Solicitar orçamento</a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href="https://wa.me/5511912345678" target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-primary-foreground/80">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white/30 bg-white/20 backdrop-blur"
                />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-1">4.9/5 — 380+ avaliações de clientes</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="overflow-hidden rounded-3xl border border-white/20"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <img
              src={heroImage}
              alt="Equipe Inove Max higienizando escritório corporativo"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/20 bg-card/90 p-4 backdrop-blur md:block"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">Equipe verificada</p>
                <p className="text-muted-foreground">CLT, treinada e uniformizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
        {benefits.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Serviços
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Facilities completo, um único fornecedor
        </h2>
        <p className="mt-4 text-muted-foreground">
          Limpeza, portaria, jardinagem, manutenção, controle de pragas e suprimentos — gestão integrada para você focar no seu negócio enquanto cuidamos da operação.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1"
            style={{ transition: "var(--transition-smooth)" }}
          >
            <div
              className="absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity group-hover:opacity-100"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    "Supervisor exclusivo com visita semanal e relatório fotográfico",
    "Equipe registrada CLT, com EPI e treinamento NR contínuo",
    "Produtos com certificação Anvisa e linha sustentável disponível",
    "Cobertura de feriados, plantão noturno e reposição imediata",
    "Portal online de chamados com SLA de resposta em 2 horas",
    "Apólice de responsabilidade civil para todos os contratos",
  ];

  return (
    <section id="porque" className="bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <div
            className="overflow-hidden rounded-3xl"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <img
              src={detailImage}
              alt="Detalhe de superfície sendo polida por profissional Inove Max"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Por que nós
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Terceirização sem dor de cabeça
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cuidamos de contratação, escala, reposição e fiscalização. Você recebe o resultado — limpeza impecável e custo previsível.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-sm leading-relaxed text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="clientes" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Clientes
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Quem confia, fica.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-7"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex gap-0.5 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Quote() {
  const [sent, setSent] = useState(false);

  return (
    <section id="orcamento" className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div className="text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Receba seu orçamento em até 24h
          </h2>
          <p className="mt-4 max-w-md text-primary-foreground/85">
            Conte um pouco sobre o seu espaço. Um especialista entra em contato, faz a visita técnica gratuita e monta a proposta sob medida.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4" />
              <a href="tel:+5511947775757" className="hover:underline">(11) 94777-5757</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4" />
              <a href="mailto:contato@inovemaxservicos.com.br" className="hover:underline">contato@inovemaxservicos.com.br</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4" />
              <span>Rua Rodolfo Zolli, 157 — Presidente Altino, Osasco/SP</span>
            </div>
          </div>

        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-3xl border border-white/20 bg-card p-8 backdrop-blur"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          {sent ? (
            <div className="flex flex-col items-center py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-7 w-7" strokeWidth={3} />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Solicitação enviada!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Nossa equipe entra em contato em até 24 horas úteis.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <Field label="Nome completo" id="nome" required />
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="E-mail" id="email" type="email" required />
                <Field label="WhatsApp" id="phone" type="tel" required />
              </div>
              <Field label="Empresa / Condomínio" id="empresa" />
              <div>
                <label htmlFor="tipo" className="text-sm font-medium text-foreground">
                  Tipo de serviço
                </label>
                <select
                  id="tipo"
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-ring"
                >
                  <option>Limpeza terceirizada</option>
                  <option>Portaria e controle de acesso</option>
                  <option>Jardinagem e paisagismo</option>
                  <option>Manutenção predial</option>
                  <option>Controle de pragas</option>
                  <option>Pós-obra</option>
                  <option>Facilities completo (multisserviços)</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label htmlFor="msg" className="text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <textarea
                  id="msg"
                  rows={3}
                  placeholder="Tamanho do espaço, frequência desejada..."
                  className="mt-1.5 w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-ring"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Solicitar orçamento gratuito
              </Button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-ring"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="Inove Max Facilities" className="h-8 w-auto" />
          <span className="font-semibold text-foreground">Inove Max Facilities</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <p>CNPJ 00.000.000/0001-00 · São Paulo / SP</p>
      </div>
    </footer>
  );
}

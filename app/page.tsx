const LINKS = {
  github: "https://github.com/basil-kawak",
  linkedin: "https://www.linkedin.com/in/basil-m-al-isa-815252199",
  email: "mailto:basilalisaa@gmail.com",
};

const SKILLS: [string, string][] = [
  [
    "Frontend",
    "React · Next.js · TypeScript · Redux · Material UI · Tailwind CSS",
  ],
  ["Backend", "Node.js · Express.js · REST APIs · Ruby on Rails"],
  ["Databases", "MongoDB · PostgreSQL · Redis · Firebase"],
  ["Testing & Tooling", "Jest · Playwright · Git · Agile/Scrum"],
  [
    "AI",
    "OpenAI API · Vercel AI SDK · structured outputs · multi-provider failover",
  ],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-sm font-semibold tracking-widest text-teal-700 uppercase dark:text-teal-400">
      {children}
    </h2>
  );
}

function ArchCard({
  tech,
  title,
  points,
}: {
  tech: string;
  title: string;
  points: string[];
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <p className="text-xs font-semibold tracking-wide text-teal-700 uppercase dark:text-teal-400">
        {tech}
      </p>
      <h4 className="mt-1 font-semibold text-zinc-900 dark:text-white">
        {title}
      </h4>
      <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      {/* Hero */}
      <header className="mb-20">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
          Basil M. Al-Isa
        </h1>
        <p className="mt-3 text-lg font-medium text-teal-700 dark:text-teal-400">
          Full-Stack Developer · Vancouver, BC
        </p>
        <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          I build and scale SaaS web applications with React, Next.js, Node.js,
          and TypeScript. At Meaningful Work, I own the CRM and dashboard
          modules of a platform that 100+ nonprofit associations use to manage
          members, sponsors, and events — shipping features end-to-end, from
          performant UIs to API design to AI features built on the OpenAI API.
        </p>
        <nav className="mt-8 flex flex-wrap gap-4">
          <a
            href={LINKS.email}
            className="rounded-lg bg-teal-700 px-5 py-2.5 font-medium text-white transition hover:bg-teal-800 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400"
          >
            Get in touch
          </a>
          <a
            href={LINKS.github}
            className="rounded-lg border border-zinc-300 px-5 py-2.5 font-medium transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:border-zinc-500 dark:hover:bg-zinc-900"
          >
            GitHub
          </a>
          <a
            href={LINKS.linkedin}
            className="rounded-lg border border-zinc-300 px-5 py-2.5 font-medium transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:border-zinc-500 dark:hover:bg-zinc-900"
          >
            LinkedIn
          </a>
        </nav>
      </header>

      {/* Experience */}
      <section className="mb-20">
        <SectionLabel>Experience</SectionLabel>

        <div className="space-y-12">
          <article>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                Meaningful Work
              </h3>
              <span className="text-sm text-zinc-500">
                2022 – Present · Vancouver, BC
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-zinc-500">
              Full-Stack Developer
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-zinc-600 dark:text-zinc-400">
              <li>
                Own the CRM and dashboard modules of a multi-tenant SaaS
                platform used by 100+ nonprofit associations — member journeys,
                deal pipelines, and engagement analytics (Next.js, Node.js,
                TypeScript, MongoDB).
              </li>
              <li>
                Cut load times of the platform&apos;s most-used views by ~50%
                through query optimization, caching, and code-splitting.
              </li>
              <li>
                Built AI features on the OpenAI API — auto-generated content and
                member-data summaries in daily use by association teams.
              </li>
              <li>
                Mentored developers and helped set the team&apos;s frontend
                standards across a ~20-person product team.
              </li>
            </ul>
          </article>

          <article>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                Redemptive
              </h3>
              <span className="text-sm text-zinc-500">
                2021 – 2022 · New York (Remote)
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-zinc-500">
              Full-Stack Developer
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Built a business-intelligence platform (Ruby on Rails) for a
              travel company client — consolidating booking, CRM, and accounting
              data into one source of truth with interactive revenue dashboards,
              producing the investor-ready reporting used in a successful $1M
              fundraise.
            </p>
          </article>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-20">
        <SectionLabel>Projects</SectionLabel>

        <article className="rounded-2xl border border-zinc-200 p-6 sm:p-8 dark:border-zinc-800">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              HireSignal
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="https://hiresignal-peach.vercel.app"
                className="text-sm font-medium text-teal-700 hover:underline dark:text-teal-400"
              >
                Live app
              </a>
              <a
                href="https://github.com/basil-kawak/hiresignal"
                className="text-sm font-medium text-teal-700 hover:underline dark:text-teal-400"
              >
                GitHub
              </a>
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            An LLM-powered job-fit engine: paste a resume and a job description
            and get an evidence-verified fit verdict — every claim is backed by
            verbatim quotes that are machine-checked against the source
            documents, so the model can&apos;t fabricate evidence. Includes
            ATS-style requirement coverage, a kanban application tracker with
            calibration stats, multi-job comparison, and evidence-grounded
            resume rewrites.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Next.js · TypeScript · PostgreSQL · Drizzle · Stripe Billing ·
            Vercel AI SDK · 61 tests · CI · Live in production
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <ArchCard
              tech="AI engine"
              title="Verified analysis"
              points={[
                "Structured outputs (Zod)",
                "Programmatic evidence checks",
                "4-provider LLM failover",
              ]}
            />
            <ArchCard
              tech="Product"
              title="Job-fit workflow"
              points={[
                "0–100 fit score & ATS lens",
                "Application tracker & stats",
                "Multi-job compare",
              ]}
            />
            <ArchCard
              tech="Platform"
              title="Full-stack SaaS"
              points={[
                "Auth.js Google sign-in",
                "Stripe subscriptions & portal",
                "Postgres/Drizzle · CI · tests",
              ]}
            />
          </div>
        </article>

        <article className="mt-6 rounded-2xl border border-zinc-200 p-6 sm:p-8 dark:border-zinc-800">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Wholesale Ordering Platform
            </h3>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-950 dark:text-teal-400">
              Live in production
            </span>
          </div>
          <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            A solo-built B2B ordering system in daily use by a wholesale
            business and its customers. Shop owners browse catalogs and place
            orders from a React Native mobile app instead of traveling to the
            warehouse; a companion admin web app handles order management,
            accounting, shop registrations, and automated notifications.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            React Native · Next.js · Node.js · Designed, built, deployed, and
            maintained end-to-end
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <ArchCard
              tech="React Native"
              title="Mobile app"
              points={[
                "Catalog browsing & search",
                "In-store order placement",
                "Order history & status",
              ]}
            />
            <ArchCard
              tech="Node.js"
              title="API & services"
              points={[
                "Orders, inventory, accounts",
                "Automated notifications",
                "Auth & shop registration",
              ]}
            />
            <ArchCard
              tech="Next.js"
              title="Admin dashboard"
              points={[
                "Order management",
                "Accounting & reporting",
                "Customer administration",
              ]}
            />
          </div>
        </article>

        <article className="mt-6 rounded-2xl border border-zinc-200 p-6 sm:p-8 dark:border-zinc-800">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Mental Health Awareness Platform
            </h3>
            <div className="flex gap-4 text-sm font-medium">
              <a
                href="https://suicide-detection-prevention.netlify.app"
                className="text-teal-700 hover:underline dark:text-teal-400"
              >
                Live demo
              </a>
              <a
                href="https://github.com/ReCoded-Org/istanbul-capstone-sdp"
                className="text-teal-700 hover:underline dark:text-teal-400"
              >
                GitHub
              </a>
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            A platform for suicide prevention and mental-health promotion, built
            with a team as a Re:Coded capstone. React UI with reusable
            components, Jest tests, and WordPress API for content management.
          </p>
        </article>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <SectionLabel>Skills</SectionLabel>
        <dl className="space-y-3">
          {SKILLS.map(([group, items]) => (
            <div key={group} className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="w-40 shrink-0 font-semibold text-zinc-900 dark:text-white">
                {group}
              </dt>
              <dd className="text-zinc-600 dark:text-zinc-400">{items}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 pt-10 dark:border-zinc-800">
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          Open to remote full-stack roles.{" "}
          <a
            href={LINKS.email}
            className="font-medium text-teal-700 hover:underline dark:text-teal-400"
          >
            basilalisaa@gmail.com
          </a>
        </p>
        <p className="mt-6 text-sm text-zinc-400 dark:text-zinc-600">
          © 2026 Basil M. Al-Isa · Built with Next.js and Tailwind CSS
        </p>
      </footer>
    </main>
  );
}

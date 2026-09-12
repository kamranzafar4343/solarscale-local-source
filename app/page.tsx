"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Minus,
  Plus,
  SunMedium,
  X,
} from "lucide-react";
const SolarScene = dynamic(() => import("@/components/3d/SolarScene"), {
  ssr: false,
  loading: () => <div className="scene-fallback" aria-hidden />,
});
const services = [
  ["01", "Brand", "Positioning and visual systems for solar businesses."],
  ["02", "Design", "Interfaces that make complex offers easy to understand."],
  ["03", "Development", "Fast Next.js websites, portals and custom web applications."],
  ["04", "SEO", "Technical, local and service-area search foundations."],
  ["05", "Integrations", "Websites connected to CRM, payments, analytics and operations."],
  ["06", "E-commerce", "Product, quote and payment experiences for modern solar teams."],
  ["07", "Automation", "Practical workflows that reduce repetitive manual work."],
  ["08", "Support", "Maintenance, performance improvements and ongoing guidance."],
];
const systems = [
  ["Website", "The digital experience customers see first."],
  ["Payments", "Payment links and checkout flows where appropriate."],
  ["Invoicing", "Invoice and customer-record workflows."],
  ["CRM", "Lead routing and handoff into the systems you use."],
  ["Analytics", "Measurement foundations for better decisions."],
  ["Customer", "A clearer journey from first visit to next step."],
];
const tools = ["Technical SEO", "Local SEO", "Structured data", "Solar calculators", "Quote forms", "Customer portals", "Dashboards", "Interactive maps"];
const insights = [
  ["01", "Why solar companies need better digital experiences", "How clarity, trust and useful journeys change the first conversation."],
  ["02", "What a solar calculator can do for your website", "Where estimates help visitors learn without pretending to guarantee outcomes."],
  ["03", "Connecting a solar website to business systems", "A practical look at payments, CRM, analytics and operational handoffs."],
];
const projects = [
  {
    no: "01",
    name: "Daniel's Solar",
    type: "Solar Engineering & Design",
    goal: "A permit-ready engineering site with a clear route from technical expertise to project enquiry.",
    tech: "Strategy · UX · Development",
    theme: "sunpeak",
    snapshot: "/p1.png",
  },
  {
    no: "02",
    name: "AD Solar",
    type: "Solar Installation & Storage",
    goal: "A conversion-focused solar experience built around property analysis and clear service pathways.",
    tech: "Brand system · UX · Development",
    theme: "voltera",
    snapshot: "/p2.png",
  },
  {
    no: "03",
    name: "Your Solar Permit",
    type: "Solar Permitting & Design",
    goal: "A clean product-led experience that makes residential and commercial permit services easy to understand.",
    tech: "UX · Content · Development",
    theme: "heliogrid",
    snapshot: "/p3.png",
  },
  {
    no: "04",
    name: "Northstar",
    type: "Regional Installer",
    goal: "Build a scalable service-area engine without losing local trust.",
    tech: "Content system · Local SEO · CRO",
    theme: "northstar",
    concept: true,
  },
];
const process = [
  ["01", "We map it", "We get clear on the offer, audience and one next move."],
  ["02", "We build it", "We handle the copy, design, development and details."],
  ["03", "We launch it", "We test the paths, make the handoff simple and get it live."],
];
const faqs = [
  [
    "How much does a SolarScale website cost?",
    "Every engagement is scoped around the system you need—not a page count. After a focused discovery call, we provide a clear range, timeline and deliverables.",
  ],
  [
    "Do you only work with solar companies?",
    "Solar is our focus. That specialization lets us move faster on the language, buyer journey and conversion challenges unique to the industry.",
  ],
  [
    "Can you redesign our existing website?",
    "Yes. We can reposition, redesign and rebuild an existing site while preserving valuable search equity.",
  ],
  [
    "Do you provide SEO?",
    "Yes. Our work can include technical SEO, information architecture, local and service-area strategy and content systems.",
  ],
  [
    "Can you build solar calculators?",
    "Yes. We design savings, production, financing and qualification experiences around your inputs and sales process.",
  ],
  [
    "Can you integrate our CRM?",
    "Yes. We can connect forms and conversion journeys to the CRM, scheduling and automation tools your team uses.",
  ],
  [
    "Can you integrate payment systems?",
    "We can scope payment links, checkout flows and transaction handoffs with appropriate platforms such as Stripe or PayPal. Specific implementation depends on the project.",
  ],
  [
    "Can you connect QuickBooks?",
    "QuickBooks connections can be explored where the workflow and API access fit the business need. We do not imply an official platform partnership.",
  ],
  [
    "Do you build e-commerce websites?",
    "Yes. We can design and develop product, quote and payment experiences when e-commerce is the right fit.",
  ],
  [
    "Can you build custom web applications?",
    "Yes. Portals, dashboards, calculators, quote tools and internal workflows can be scoped as custom applications.",
  ],
  [
    "Can you maintain the website after launch?",
    "Yes. Maintenance, performance improvements, content support and ongoing digital guidance can be included.",
  ],
  [
    "Can you work with companies outside the US?",
    "Yes. The US is our primary market, but we work with ambitious solar businesses in other regions when the fit is right.",
  ],
  [
    "How long does a project take?",
    "Most complete website systems take roughly 8–14 weeks. Scope, integrations and content readiness affect the schedule.",
  ],
];
const plans = [
  { no: "01", name: "Starter", price: "$1,500+", delivery: "Scoped", description: "A strong digital foundation for a focused solar offer.", includes: ["Strategy", "Custom responsive website", "Basic SEO + analytics", "Contact forms"] },
  { no: "02", name: "Growth", price: "$3,500+", delivery: "Scoped", description: "A stronger digital presence with advanced UX and functionality.", includes: ["Everything in Starter", "Advanced UX", "CMS + SEO foundation", "Interactive features"] },
  { no: "03", name: "Scale", price: "$7,500+", delivery: "Scoped", description: "Custom digital systems for businesses ready to connect and expand.", includes: ["Everything in Growth", "Custom applications", "Calculators + integrations", "Advanced SEO"] },
];
const trustPoints = [
  ["Solar-focused", "We work around the language, buying journey and operational reality of the solar industry."],
  ["Modern technology", "Next.js, accessible interfaces, integrations and performance-minded delivery."],
  ["Full-stack delivery", "Strategy, design, development, SEO and ongoing support in one focused partner."],
  ["Straightforward scope", "Clear starting points, honest assumptions and no invented outcomes."],
];
export default function Home() {
  const [scrolled, setScrolled] = useState(false),
    [menu, setMenu] = useState(false),
    [activeService, setActiveService] = useState(0),
    [openProject, setOpenProject] = useState<string | null>(null),
    [, setSystemSize] = useState(9.6);
  useEffect(() => {
    const fn = () => setScrolled(scrollY > 40);
    fn();
    addEventListener("scroll", fn, { passive: true });
    return () => removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    if (!openProject) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenProject(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      removeEventListener("keydown", handleKeyDown);
    };
  }, [openProject]);
  useEffect(() => {
    const context = (
      document as Document & {
        modelContext?: {
          registerTool: (
            tool: unknown,
            options?: { signal?: AbortSignal },
          ) => void | Promise<void>;
        };
      }
    ).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    void Promise.resolve(
      context.registerTool(
        {
          name: "set_solar_system_size",
          title: "Set solar system size",
          description:
            "Update the visible energy model to a solar system size between 4 and 20 kW.",
          inputSchema: {
            type: "object",
            properties: {
              kilowatts: { type: "number", minimum: 4, maximum: 20 },
            },
            required: ["kilowatts"],
            additionalProperties: false,
          },
          annotations: { readOnlyHint: false, untrustedContentHint: false },
          execute(input: unknown) {
            const value = (input as { kilowatts?: unknown })?.kilowatts;
            if (
              typeof value !== "number" ||
              !Number.isFinite(value) ||
              value < 4 ||
              value > 20
            )
              throw new Error("kilowatts must be a number from 4 to 20");
            setSystemSize(value);
            return {
              kilowatts: value,
              annualProductionKwh: Math.round(value * 1460),
            };
          },
        },
        { signal: lifecycle.signal },
      ),
    ).catch(() => {});
    return () => lifecycle.abort();
  }, []);
  return (
    <main>
      <header className={scrolled ? "site-nav scrolled" : "site-nav"}>
        <a className="brand-lockup" href="#top" aria-label="SolarScale home">
          <Image src="/favicon.svg" alt="" width={38} height={38} className="brand-mark" />
          <span className="wordmark">
            SOLAR<span>SCALE</span>
          </span>
          <span className="brand-signal">Digital growth systems</span>
        </a>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          {["About", "Services", "Systems", "Tools", "Work", "Plans", "Insights", "FAQ"].map((x) => (
            <a
              key={x}
              onClick={() => setMenu(false)}
              href={"#" + x.toLowerCase()}
            >
              {x}
            </a>
          ))}
        </nav>
        <a className="nav-cta magnetic" href="/start-a-project" target="_blank" rel="noreferrer">
          <span>Start a project</span> <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <Minus /> : <Plus />}
        </button>
      </header>
      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden />
        <div className="hero-scene">
          <SolarScene />
        </div>
        <div className="hero-content wrap">
          {/* <p className="eyebrow">Digital growth for solar</p> */}
          <h1>
            <span>We build the</span>
            <span>digital systems</span>
            <span>
              that <em>scale</em> solar.
            </span>
          </h1>
          <div className="hero-bottom">
            <p>
              Websites, digital products and technology systems built for modern
              solar businesses.
            </p>
            <div className="button-row">
              <a className="button button-accent" href="#work">
                See our work <ArrowDownRight size={19} />
              </a>
              <a className="button button-ghost" href="/start-a-project" target="_blank" rel="noreferrer">
                Start a project
              </a>
            </div>
          </div>
        </div>
        <div className="hero-index">
          SOL / 001 <span>Scroll to explore</span>
        </div>
      </section>
      <div className="marquee">
        <div>
          {[0, 1].map((i) => (
            <span key={i}>
              SOLAR <b>✦</b> DESIGN <b>✦</b> DEVELOPMENT <b>✦</b> SEO <b>✦</b>{" "}
              LEADS <b>✦</b> GROWTH <b>✦</b> CONVERSION <b>✦</b>{" "}
            </span>
          ))}
        </div>
      </div>
      <section className="intro light-section" id="about">
        <div className="wrap intro-layout">
          <p className="section-tag">01 / What we believe</p>
          <div>
            <h2>
              More than <span>a website.</span>
            </h2>
            <h2 className="engine-line">They need momentum.</h2>
            <div className="intro-copy">
              <p>
                Clear positioning, useful design and a site that helps people
                take the next step.
              </p>
              <p>
                SolarScale handles the digital footwork in one focused system.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="services dark-section" id="services">
        <div className="wrap service-layout">
          <div className="service-sticky">
            <p className="section-tag">02 / What we build</p>
            <h2>
              Digital systems for <em>solar businesses.</em>
            </h2>
            <div className="service-orbit" aria-hidden>
              <div>
                <SunMedium />
                <span>{services[activeService][1]}</span>
              </div>
            </div>
          </div>
          <div className="service-list">
            {services.map((s, i) => (
              <button
                className={activeService === i ? "service active" : "service"}
                key={s[0]}
                onMouseEnter={() => setActiveService(i)}
                onFocus={() => setActiveService(i)}
              >
                <span>{s[0]}</span>
                <div>
                  <h3>{s[1]}</h3>
                  <p>{s[2]}</p>
                </div>
                <ArrowDownRight />
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="systems light-section" id="systems">
        <div className="wrap systems-layout">
          <div className="systems-heading">
            <p className="section-tag">03 / Business systems</p>
            <h2>Your website shouldn&apos;t <span>live alone.</span></h2>
            <p>We can connect the digital experience to the tools your business already relies on. Capabilities are scoped per project; platform partnerships are not implied.</p>
          </div>
          <div className="system-flow">
            {systems.map(([name, description], index) => (
              <div className="system-node" key={name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{name}</strong><p>{description}</p></div>
                {index < systems.length - 1 && <ArrowDownRight className="system-arrow" />}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="tools dark-section" id="tools">
        <div className="wrap tools-layout">
          <div>
            <p className="section-tag">04 / SEO + solar tools</p>
            <h2>Build it. Then help people <em>find it.</em></h2>
          </div>
          <div className="tool-list">
            {tools.map((tool, index) => <span key={tool}><b>{String(index + 1).padStart(2, "0")}</b>{tool}</span>)}
          </div>
          <p className="tools-note">Technical SEO, local search, structured data, calculators, quote flows, dashboards and service-area tools can be scoped as part of the right project.</p>
        </div>
      </section>
      <section className="work dark-section" id="work">
        <div className="wrap">
          <div className="work-head">
            <p className="section-tag">05 / Our work</p>
            <h2>Our <em>work.</em></h2>
            <p>Selected website systems for solar teams.</p>
          </div>
          <div className="project-list">
            {projects.map((p, i) => (
              <article className={openProject === p.name ? "project is-open" : "project"} key={p.name}>
                <div
                  className={"project-visual " + p.theme}
                  role="button"
                  tabIndex={0}
                  aria-expanded={openProject === p.name}
                  onClick={() => setOpenProject(openProject === p.name ? null : p.name)}
                  onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setOpenProject(openProject === p.name ? null : p.name); } }}
                >
                  <div className="concept-label">{p.no} / {p.snapshot ? "Client website" : "SolarScale concept"}</div>
                  {p.snapshot ? <Image className="project-snapshot" src={p.snapshot} alt={`${p.name} website screenshot`} width={1600} height={2400} /> : <div className="browser-ui">
                    <div className="browser-nav">
                      <b>{p.name.toUpperCase()}</b>
                      <span>ENERGY / MADE CLEAR</span>
                    </div>
                    <div className="browser-title">
                      {i === 0
                        ? "OWN YOUR POWER."
                        : i === 1
                          ? "STORE THE SUN."
                          : i === 2
                            ? "ENERGY AT SCALE."
                            : "LOCAL POWER. BUILT HERE."}
                    </div>
                    <div className="browser-sun" />
                    <div className="browser-data">
                      <span>EST. OUTPUT</span>
                      <strong>
                        {[12840, 16420, 780000, 14190][i].toLocaleString()} kWh
                      </strong>
                    </div>
                  </div>}
                </div>
                <div className="project-info">
                  <span>{p.no}</span>
                  <div>
                    <p>{p.type}</p>
                    <h3>{p.name}</h3>
                  </div>
                  <p>{p.goal}</p>
                  <small>{p.tech}</small>
                  <ArrowUpRight />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {openProject && (() => {
        const modalProject = projects.find((project) => project.name === openProject);
        if (!modalProject) return null;
        const modalIndex = projects.findIndex((project) => project.name === openProject);
        return (
          <div className="project-modal" role="dialog" aria-modal="true" aria-label={`${modalProject.name} project preview`} onClick={() => setOpenProject(null)}>
            <div className="project-modal-panel" onClick={(event) => event.stopPropagation()}>
              <div className="project-modal-bar">
                <div><span>{modalProject.no} / {modalProject.concept ? "Concept project" : "Client website"}</span><strong>{modalProject.name}</strong></div>
                <button type="button" className="project-modal-close" onClick={() => setOpenProject(null)} aria-label="Close project preview"><X size={20} /></button>
              </div>
              <div className="project-modal-content">
                {modalProject.snapshot ? <Image className="full-project-snapshot" src={modalProject.snapshot} alt={`${modalProject.name} full website screenshot`} width={1600} height={2400} /> : <div className={"website-sheet " + modalProject.theme}>
                  <div className="sheet-nav"><b>{modalProject.name.toUpperCase()}</b><span>Menu <b>Get started ↗</b></span></div>
                  <div className="sheet-hero"><small>{modalProject.type}</small><h4>Solar, made simple.</h4><p>{modalProject.goal}</p><button>Explore the work ↗</button><div className="sheet-orb" /></div>
                  <div className="sheet-columns"><div><small>01 / Clarity</small><strong>Make the next step obvious.</strong></div><div><small>02 / System</small><strong>Turn interest into action.</strong></div><div><small>03 / Growth</small><strong>Build for what comes next.</strong></div></div>
                  <div className="sheet-footer"><span>{modalProject.tech}</span><b>SolarScale concept</b></div>
                </div>}
              </div>
              <div className="project-modal-foot"><span>{modalProject.type}</span><span>{modalIndex + 1} / {projects.length}</span></div>
            </div>
          </div>
        );
      })()}
      {/* <section className="case-study light-section">
        <div className="wrap case-intro">
            <p className="section-tag">05 / Featured case study</p>
          <div>
            <span className="concept-pill">Concept project</span>
            <h2>SunPeak Energy</h2>
            <p>
              A conversion-first residential solar platform built around
              clarity, confidence and a shorter path to the right conversation.
            </p>
          </div>
        </div>
        <div className="case-stage">
          <div className="case-desktop">
            <div className="mock-nav">
              SUNPEAK <span>Power your next chapter ↗</span>
            </div>
            <div className="mock-copy">
              <small>Residential energy, reimagined</small>
              <strong>
                THE FUTURE
                <br />
                LOOKS BRIGHT.
              </strong>
              <p>Clean power. Clear numbers. Total control.</p>
            </div>
            <div className="mock-orb" />
          </div>
          <div className="case-mobile">
            <div>SUNPEAK</div>
            <strong>
              YOUR ROOF.
              <br />
              YOUR POWER.
            </strong>
            <div className="mobile-panel">
              <SunMedium />
              <span>Estimated annual production</span>
              <b>12,840 kWh</b>
            </div>
          </div>
        </div>
        <div className="wrap case-notes">
          {[
            [
              "Design decision",
              "Replace industry clutter with one confident story and progressive disclosure.",
            ],
            [
              "Conversion strategy",
              "Lead with value, then earn the form through education and useful interaction.",
            ],
            [
              "Outcome goal",
              "Increase qualified consultation starts without inventing urgency or hiding complexity.",
            ],
          ].map((x) => (
            <div key={x[0]}>
              <span>{x[0]}</span>
              <p>{x[1]}</p>
            </div>
          ))}
        </div>
      </section> */}
      <section className="process dark-section" id="process">
        <div className="wrap">
          <div className="process-head">
            <p className="section-tag">06 / Process</p>
            <h2>We do the <em>footwork.</em></h2>
            <p className="process-intro">You bring the ambition. We take care of the moving parts from first conversation to live site.</p>
          </div>
          <div className="timeline">
            {process.map((p, i) => (
              <div className="process-step" key={p[0]}>
                <span>{p[0]}</span>
                <div className="process-line">
                  <i style={{ width: String(((i + 1) / process.length) * 100) + "%" }} />
                </div>
                <h3>{p[1]}</h3>
                <p>{p[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="difference light-section">
        <div className="wrap">
          <div className="difference-head">
            <p className="section-tag">06 / Why SolarScale</p>
            <h2>Built differently.</h2>
            <p>
              Specialization changes the work. We combine solar fluency with the
              standards of a premium digital product team.
            </p>
          </div>
          <div className="comparison">
            <div className="compare-label muted">Generic agency</div>
            <div className="compare-label">
              SolarScale <span>✦</span>
            </div>
            {[
              ["Generic templates", "Purpose-built experiences"],
              ["A pretty website", "A lead-generation system"],
              ["Generic SEO", "Solar-focused search strategy"],
              ["Launch and leave", "Measure and improve"],
            ].map((r, i) => (
              <div className="compare-row" key={i}>
                <span>{r[0]}</span>
                <ArrowUpRight />
                <strong>{r[1]}</strong>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="plans light-section" id="plans">
        <div className="wrap">
          <div className="plans-head">
            <p className="section-tag">07 / Clear starting points</p>
            <h2>Good work should be <span>easy to enter.</span></h2>
            <p>Choose the level that matches where your business is today. Every plan starts with a focused conversation.</p>
            <small className="payment-note">50% upfront to reserve your start date. The remaining 50% is due at delivery.</small>
          </div>
          <div className="plans-grid">
            {plans.map((plan) => (
              <article className={plan.name === "Grow" ? "plan featured" : "plan"} key={plan.name}>
                <div className="plan-top"><span>{plan.no}</span><span>{plan.delivery}</span></div>
                {plan.name === "Grow" && <span className="plan-badge">Most popular</span>}
                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
                <p>{plan.description}</p>
                <ul>{plan.includes.map((item) => <li key={item}>{item}</li>)}</ul>
                <a className="plan-link" href="/start-a-project" target="_blank" rel="noreferrer">Start here <ArrowUpRight size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="trust light-section" id="reviews">
        <div className="wrap trust-layout">
          <div><p className="section-tag">08 / Why SolarScale</p><h2>Built for the <span>digital side of solar.</span></h2></div>
          <div className="trust-list">{trustPoints.map(([title, description], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>
      <section className="insights dark-section" id="insights">
        <div className="wrap insights-layout">
          <div><p className="section-tag">09 / Insights</p><h2>Useful thinking for <em>solar teams.</em></h2></div>
          <div className="insight-list">{insights.map(([no, title, description]) => <article key={no}><span>{no}</span><div><h3>{title}</h3><p>{description}</p><a href="#contact">Read the idea <ArrowUpRight size={14} /></a></div></article>)}</div>
        </div>
      </section>
      <section className="faq dark-section">
        <div className="wrap faq-layout">
          <div>
            <p className="section-tag">10 / FAQ</p>
            <h2>
              Clear answers.
              <br />
              <em>No pitch deck.</em>
            </h2>
          </div>
          <div>
            {faqs.map((f, i) => (
              <details key={f[0]}>
                <summary>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {f[0]}
                  <Plus />
                </summary>
                <p>{f[1]}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="final-cta" id="contact">
        <div className="energy-sun" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div className="wrap cta-content">
          <p className="section-tag">A better digital future starts here</p>
          <h2>
            Ready to <em>scale?</em>
          </h2>
          <p>
            Let&apos;s build the digital experience your solar company deserves.
          </p>
          <a
            className="button button-dark magnetic"
            href="/start-a-project"
            target="_blank"
            rel="noreferrer"
          >
            Start a project <ArrowUpRight />
          </a>
        </div>
      </section>
      <footer className="footer dark-section">
        <div className="wrap">
          <div className="footer-links">
            <div>
              <span>Explore</span>
              {["About", "Services", "Systems", "Tools", "Work", "Plans", "Insights", "FAQ"].map((x) => (
                <a key={x} href={"#" + x.toLowerCase()}>
                  {x}
                </a>
              ))}
            </div>
            <div>
              <span>Start a conversation</span>
              <a href="/start-a-project" target="_blank" rel="noreferrer">Start a project</a>
              <a href="#contact">Contact us</a>
              <a href="mailto:hello@solarscale.co">hello@solarscale.co</a>
            </div>
            <div>
              <span>Follow along</span>
              <a href="https://www.linkedin.com/company/solarscale/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
              <a href="https://www.instagram.com/solarscale/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a>
              <a href="https://www.behance.net/" target="_blank" rel="noreferrer">Behance <ArrowUpRight size={13} /></a>
            </div>
          </div>
          <strong className="footer-corner-mark">SOLAR<span>SCALE</span></strong>
          {/* <div className="footer-slogan">
            <strong>Solar growth <span>taken care of.</span></strong>
          </div> */}
          <div className="footer-bottom">
            <span>© 2026 SolarScale</span>
            <span>Built for the energy transition.</span>
            <span>US / Worldwide</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

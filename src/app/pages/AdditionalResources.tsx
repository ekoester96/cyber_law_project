import { ExternalLink, Globe, Shield, Book, Video } from "lucide-react";

const categories = [
  {
    icon: Shield,
    label: "Privacy Rights & Advocacy",
    color: "var(--uark-red)",
    tone: "var(--uark-soft-red)",
    resources: [
      {
        title: "Electronic Frontier Foundation (EFF)",
        desc: "Leading digital rights organization. Provides guides on surveillance, location tracking, and how to protect your privacy.",
        url: "https://www.eff.org",
      },
      {
        title: "Privacy Rights Clearinghouse",
        desc: "Nonprofit organization focused on consumer privacy education and advocacy with factsheets on location data.",
        url: "https://privacyrights.org",
      },
      {
        title: "ACLU — Privacy & Technology",
        desc: "The ACLU's resources on surveillance, government tracking, and digital civil liberties.",
        url: "https://www.aclu.org/issues/privacy-technology",
      },
    ],
  },
  {
    icon: Book,
    label: "Legal & Regulatory Resources",
    color: "var(--uark-plum)",
    tone: "var(--uark-soft-plum)",
    resources: [
      {
        title: "FTC — Privacy & Security Resources",
        desc: "Official FTC resources on consumer data privacy enforcement actions, rules, and guidance for businesses.",
        url: "https://www.ftc.gov/business-guidance/privacy-security",
      },
      {
        title: "IAPP — International Association of Privacy Professionals",
        desc: "Professional resources on global privacy laws, regulations, and compliance frameworks.",
        url: "https://iapp.org",
      },
      {
        title: "EPIC — Electronic Privacy Information Center",
        desc: "Public interest research center focused on emerging privacy and civil liberties issues.",
        url: "https://epic.org",
      },
    ],
  },
  {
    icon: Globe,
    label: "Health Data & State Laws",
    color: "var(--uark-green)",
    tone: "var(--uark-soft-green)",
    resources: [
      {
        title: "California Privacy Protection Agency (CPPA)",
        desc: "Official California state agency enforcing the CPRA and AB 45. Resources on health and location data regulations.",
        url: "https://cppa.ca.gov",
      },
      {
        title: "Washington State Office of the Attorney General — Privacy",
        desc: "Official resource on the My Health My Data Act and other Washington state privacy laws.",
        url: "https://www.atg.wa.gov/consumer-protection/privacy",
      },
      {
        title: "Future of Privacy Forum",
        desc: "Think tank producing research on digital health privacy, location data, and emerging privacy legislation.",
        url: "https://fpf.org",
      },
    ],
  },
  {
    icon: Video,
    label: "Journalism & Investigative Reports",
    color: "var(--uark-gold)",
    tone: "var(--uark-soft-gold)",
    resources: [
      {
        title: "The Markup — Big Tech Coverage",
        desc: "Nonprofit news organization focused on tech accountability. Extensive coverage of location tracking and privacy.",
        url: "https://themarkup.org",
      },
      {
        title: "ProPublica — Data & Privacy",
        desc: "Investigative journalism on data brokers, surveillance capitalism, and the commercial surveillance industry.",
        url: "https://www.propublica.org/topics/privacy",
      },
      {
        title: "Consumer Watchdog — Privacy",
        desc: "Consumer advocacy organization with reports on surveillance pricing and location tracking abuses.",
        url: "https://consumerwatchdog.org/privacy",
      },
    ],
  },
];

export function AdditionalResources() {
  return (
    <div>
      <div className="border-b py-16" style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs px-3 py-1 rounded-full border" style={{ color: "var(--uark-green)", borderColor: "var(--uark-border)", background: "var(--uark-soft-green)" }}>
              Further Reading
            </span>
          </div>
          <h1 style={{ color: "var(--uark-ink)", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}>Additional Resources</h1>
          <p style={{ color: "var(--uark-muted)", marginTop: "0.5rem", maxWidth: "600px" }}>
            Related resources on location tracking, digital privacy, and surveillance law — not cited in the paper but
            valuable for deeper exploration.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="space-y-12">
          {categories.map((cat) => {
            const Icon = cat.icon;

            return (
              <div key={cat.label}>
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: cat.tone }}
                  >
                    <Icon size={18} color={cat.color} />
                  </div>
                  <h2 style={{ color: "var(--uark-ink)", fontWeight: 700, fontSize: "1.05rem" }}>{cat.label}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {cat.resources.map((res) => (
                    <a
                      key={res.title}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-xl p-5 border no-underline flex flex-col"
                      style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)", boxShadow: "var(--uark-shadow)" }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 style={{ color: "var(--uark-ink)", fontWeight: 600, fontSize: "0.9rem", lineHeight: 1.3 }}>{res.title}</h3>
                        <ExternalLink size={14} color="var(--uark-subtle)" className="flex-shrink-0 ml-2 mt-0.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <p style={{ color: "var(--uark-subtle)", fontSize: "0.8rem", lineHeight: 1.6, flexGrow: 1 }}>{res.desc}</p>
                      <div className="mt-3 pt-3 border-t" style={{ borderColor: "var(--uark-border)" }}>
                        <span style={{ color: "var(--uark-blue)", fontSize: "0.75rem" }}>{res.url.replace("https://", "").replace("www.", "")}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

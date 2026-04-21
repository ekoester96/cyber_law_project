import { BookOpen, ExternalLink } from "lucide-react";

const references = [
  {
    id: 1,
    citation: "Cohen, L., & Hongo, H. (2026, March 5). The government uses targeted advertising to track your location. Here's what we need to do.",
    source: "Electronic Frontier Foundation.",
    url: "https://www.eff.org/deeplinks/2026/03/targeted-advertising-gives-your-location-government-just-ask-cbp",
  },
  {
    id: 2,
    citation: "Electronic Frontier Foundation. (2024, November 5). Mobile phones: Location tracking.",
    source: "Surveillance Self-Defense.",
    url: "https://ssd.eff.org/module/mobile-phones-location-tracking",
  },
  {
    id: 3,
    citation: "Federal Trade Commission. (2024, May 1). FTC finalizes order with InMarket prohibiting it from selling or sharing precise location data.",
    source: "FTC.gov.",
    url: "https://www.ftc.gov/news-events/news/press-releases/2024/05/ftc-finalizes-order-inmarket-prohibiting-it-selling-or-sharing-precise-location-data",
  },
  {
    id: 4,
    citation: "Hunton Andrews Kurth LLP. (2025, October 10). California strengthens privacy protections for health and location data.",
    source: "Privacy & Cybersecurity Law Blog.",
    url: "https://www.hunton.com/privacy-and-cybersecurity-law-blog/california-strengthens-privacy-protections-for-health-and-location-data",
  },
  {
    id: 5,
    citation: "Klosek, J., Tene, O., Cohen, R. A., Charkoudian, S. G., & Maldoff, G. (2024, March 28). Washington's My Health My Data Act comes into force — What you need to know, and do.",
    source: "Goodwin.",
    url: "https://www.goodwinlaw.com/en/insights/publications/2024/03/alerts-technology-hltc-my-health-my-data-act-mhmda",
  },
  {
    id: 6,
    citation: "Stempel, J. (2022, August 23). Meta reaches $37.5 million settlement of Facebook location tracking lawsuit.",
    source: "Euronews.",
    url: "https://www.euronews.com/next/2022/08/23/meta-platforms-facebook-tracking-settlement",
  },
  {
    id: 7,
    citation: "Villa, S. (2025, April 22). Running into open secrets: How to investigate using the Strava fitness app.",
    source: "Global Investigative Journalism Network.",
    url: "https://gijn.org/stories/investigations-using-strava-fitness-app/",
  },
  {
    id: 8,
    citation: "VICE Staff. (2023, April 11). Uber accused of charging people more if their phone battery is low.",
    source: "VICE.",
    url: "https://www.vice.com/en/article/uber-surge-pricing-phone-battery/",
  },
  {
    id: 9,
    citation: "Valentino-DeVries, J., Singer-Vine, J., & Soltani, A. (2012). Websites vary prices, deals based on users' information.",
    source: "The Wall Street Journal.",
    url: "https://www.wsj.com/articles/SB10001424127887323777204578189391813881534",
  },
  {
    id: 10,
    citation: "Kloczko, J. (2024, December 17). New report details how companies use surveillance to change the price of an item.",
    source: "Consumer Watchdog.",
    url: "https://consumerwatchdog.org/privacy/new-report-details-how-companies-use-surveillance-to-charge-different-prices-for-the-same-item/",
  },
];

export function References() {
  return (
    <div>
      {/* Hero */}
      <div className="border-b py-16" style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs px-3 py-1 rounded-full border" style={{ color: "var(--uark-red)", borderColor: "var(--uark-border-strong)", background: "var(--uark-soft-red)" }}>
              Bibliography
            </span>
          </div>
          <h1 style={{ color: "var(--uark-ink)", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}>References</h1>
          <p style={{ color: "var(--uark-muted)", marginTop: "0.5rem" }}>All sources cited in the research paper, formatted in APA style.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="space-y-4">
          {references.map((ref) => (
            <div
              key={ref.id}
              className="rounded-xl border p-5 flex gap-4"
              style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}
            >
              <div
                className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "var(--uark-soft-red)", color: "var(--uark-red)", fontWeight: 700, fontSize: "0.82rem" }}
              >
                {ref.id}
              </div>
              <div className="flex-1">
                <p style={{ color: "var(--uark-muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "0.4rem" }}>
                  {ref.citation}{" "}
                  <em style={{ color: "var(--uark-subtle)" }}>{ref.source}</em>
                </p>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs no-underline hover:underline"
                  style={{ color: "var(--uark-blue)" }}
                >
                  <ExternalLink size={11} />
                  {ref.url.length > 70 ? ref.url.slice(0, 70) + "..." : ref.url}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl p-5 border" style={{ background: "var(--uark-soft-red)", borderColor: "var(--uark-border-strong)" }}>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen size={16} color="var(--uark-red)" />
            <span style={{ color: "var(--uark-red)", fontWeight: 700, fontSize: "0.85rem" }}>Citation Format</span>
          </div>
          <p style={{ color: "var(--uark-subtle)", fontSize: "0.82rem" }}>
            All references are formatted in APA 7th edition style, as used in the original research paper.
          </p>
        </div>
      </div>
    </div>
  );
}

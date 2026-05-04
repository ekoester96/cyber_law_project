import { BookOpen, ExternalLink } from "lucide-react";

const references = [
  {
    id: 1,
    citation:
      "Cohen, L., & Hongo, H. (2026, March 5). The government uses targeted advertising to track your location. Here's what we need to do. Electronic Frontier Foundation.",
    url: "https://www.eff.org/deeplinks/2026/03/targeted-advertising-gives-your-location-government-just-ask-cbp",
  },
  {
    id: 2,
    citation:
      "Geldenhuys, (2025, February 1). From Coordinates to Convictions GPS in forensic science. Sabinet African Journals.",
    url: "https://journals.co.za/doi/full/10.10520/ejc-servamus_v118_n2_a7",
  },
  {
    id: 3,
    citation:
      "Hart, C., & Chen, A. (2026, March). Eyes on the road: AI, privacy, and automated license plate readers. Boston Bar Journal.",
    url: "https://bostonbar.org/journal/eyes-on-the-road-ai-privacy-and-automated-license-plate-readers/",
  },
  {
    id: 4,
    citation:
      "Hartsfield, S. B., & Hinson-Greenspan, B. (2025, April 30). Religious institutions update: May 2025. Holland & Knight.",
    url: "https://www.hklaw.com/en/insights/publications/2025/05/religious-institutions-update-may-2025",
  },
  {
    id: 5,
    citation:
      "Hassan, M. (2026, February 26). Opt-out obstacles: Concerning practices by registered data brokers. Joint Economic Committee.",
    url: "https://www.jec.senate.gov/public/_cache/files/7f821956-d826-4241-8196-be987cc1f06c/2026-02-27-jec-data-brokers-report-final.pdf",
  },
  {
    id: 6,
    citation:
      "Karan, A., Balepur, N., & Sundaram, H. (2023). Your browsing history may cost you: A framework for discovering differential pricing in non-transparent markets. In Proceedings of the 2023 ACM Conference on Fairness, Accountability, and Transparency (FAccT '23). Association for Computing Machinery.",
    url: "https://doi.org/10.1145/3593013.3594038",
  },
  {
    id: 7,
    citation:
      "Kim, J., & Yoo, J. (2025, March 15). A study for learning anonymous multi-trajectory patterns and geographical anomaly detection. Journal of Positioning, Navigation, and Timing.",
    url: "https://www.jpnt.org/1401-01/#elementor-toc__heading-anchor-1",
  },
  {
    id: 8,
    citation:
      "Klosek, J., Tene, O., Cohen, R. A., Charkoudian, S. G., & Maldoff, G. (2024, March 28). Washington's My Health My Data Act comes into force - What you need to know, and do. Goodwin.",
    url: "https://www.goodwinlaw.com/en/insights/publications/2024/03/alerts-technology-hltc-my-health-my-data-act-mhmda",
  },
  {
    id: 9,
    citation:
      "Lazzarotti, J. (2025, October 1). Expert insights-California Assembly Bill 45: New privacy around healthcare facilities. VitalLaw.",
    url: "https://www.vitallaw.com/news/expert-insights-california-assembly-bill-45-new-privacy-around-healthcare-facilities/hld01edb44857360c4b3581d242aa29714f30",
  },
  {
    id: 10,
    citation:
      "Narang, U., & Luco, F. (2025). Privacy and prediction: How useful are geo-tracking data for predicting consumer visits? Quantitative Marketing and Economics, 23, 523-544.",
    url: "https://doi.org/10.1007/s11129-025-09299-2",
  },
  {
    id: 11,
    citation:
      "Skelton, S. K. (2024, February 19). Uber CEO denies pricing algorithm uses 'behavioural patterns'. Computer Weekly.",
    url: "https://www.computerweekly.com/news/366570421/Uber-CEO-admits-pricing-algorithm-uses-behavioural-patterns",
  },
  {
    id: 12,
    citation:
      "Stempel, J. (2022, August 23). Meta reaches $37.5 million settlement of Facebook location tracking lawsuit. Euronews.",
    url: "https://www.euronews.com/next/2022/08/23/meta-platforms-facebook-tracking-settlement",
  },
  {
    id: 13,
    citation:
      "Valentino-DeVries, J., Singer-Vine, J., & Soltani, A. (2012, December 24). Websites vary prices, deals based on users' information. The Wall Street Journal.",
    url: "https://www.wsj.com/articles/SB10001424127887323777204578189391813881534",
  },
  {
    id: 14,
    citation:
      "Villa, S. (2025, April 22). Running into open secrets: How to investigate using the Strava fitness app. Global Investigative Journalism Network.",
    url: "https://gijn.org/stories/investigations-using-strava-fitness-app/",
  },
];

export function References() {
  return (
    <div>
      <div className="border-b py-16" style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs px-3 py-1 rounded-full border" style={{ color: "var(--uark-red)", borderColor: "var(--uark-border-strong)", background: "var(--uark-soft-red)" }}>
              Bibliography
            </span>
          </div>
          <h1 style={{ color: "var(--uark-ink)", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}>References</h1>
          <p style={{ color: "var(--uark-muted)", marginTop: "0.5rem" }}>
            Final Spring 2026 bibliography in the order used by the attached paper.
          </p>
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
                  {ref.citation}
                </p>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs no-underline hover:underline"
                  style={{ color: "var(--uark-blue)" }}
                >
                  <ExternalLink size={11} />
                  {ref.url.length > 78 ? ref.url.slice(0, 78) + "..." : ref.url}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl p-5 border" style={{ background: "var(--uark-soft-red)", borderColor: "var(--uark-border-strong)" }}>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen size={16} color="var(--uark-red)" />
            <span style={{ color: "var(--uark-red)", fontWeight: 700, fontSize: "0.85rem" }}>Citation Note</span>
          </div>
          <p style={{ color: "var(--uark-subtle)", fontSize: "0.82rem", lineHeight: 1.65 }}>
            This page follows the final draft attachment as the source of truth for author order, source order, and
            citation content.
          </p>
        </div>
      </div>
    </div>
  );
}

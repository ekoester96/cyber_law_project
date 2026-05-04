import { PageHero } from "../components/PageHero";
import { Scale, FileText, DollarSign, AlertCircle } from "lucide-react";

export function LegalCases() {
  return (
    <div>
      <PageHero
        number="03"
        label="Legal Cases"
        title="Lundy v. Meta and Covert Location Tracking"
        subtitle="The final draft narrows this page around the Meta litigation and what it showed about IP-based location inference, platform promises, and the limits of settlement-based accountability."
        image="https://images.unsplash.com/photo-1774898988393-5c752e4d55e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydHJvb20lMjBsZWdhbCUyMGxhd3N1aXQlMjBqdXN0aWNlfGVufDF8fHx8MTc3NTY3MDczMnww&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-5xl mx-auto px-6 py-14" style={{ color: "var(--uark-ink)" }}>
        <div
          className="rounded-xl p-6 border mb-12"
          style={{ background: "var(--uark-soft-red)", borderColor: "var(--uark-border-strong)" }}
        >
          <p style={{ color: "var(--uark-muted)", lineHeight: 1.8 }}>
            <span style={{ color: "var(--uark-red)", fontWeight: 700 }}>Key Insight: </span>
            The Meta lawsuit showed that disabling visible location settings does not necessarily stop location
            inference when a company can pull the same answer from other signals, especially IP address data.
          </p>
        </div>

        <div
          className="rounded-xl border overflow-hidden mb-10"
          style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}
        >
          <div
            className="px-6 py-5 border-b flex items-center gap-3"
            style={{ borderColor: "var(--uark-border)", background: "var(--uark-soft-red)" }}
          >
            <Scale size={22} color="var(--uark-red)" />
            <div>
              <h2 style={{ color: "var(--uark-ink)", fontWeight: 700, fontSize: "1.1rem" }}>
                Lundy, et al. v. Meta Platforms Inc.
              </h2>
              <p style={{ color: "var(--uark-subtle)", fontSize: "0.8rem" }}>
                Case No. 3:18-cv-06793-JD · U.S. District Court, Northern District of California
              </p>
            </div>
          </div>

          <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-5">
              <div>
                <h3
                  style={{
                    color: "var(--uark-red)",
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: "0.6rem",
                  }}
                >
                  What Meta allegedly did
                </h3>
                <ul className="space-y-2">
                  {[
                    "The case centered on claims that Facebook and Meta continued to determine users' locations even after those users had explicitly turned off Location Services on their phones.",
                    "According to the final paper, Meta allegedly used IP addresses from users' internet connections to infer where they were.",
                    "That location data was still useful for targeted advertising even though the user believed collection had stopped.",
                    "The lawsuit framed the practice as both covert and inconsistent with the control Meta told users they had.",
                  ].map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--uark-muted)", lineHeight: 1.7 }}>
                      <span style={{ color: "var(--uark-red)", flexShrink: 0 }}>▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3
                  style={{
                    color: "var(--uark-blue)",
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: "0.6rem",
                  }}
                >
                  Why the final draft treats it as important
                </h3>
                <ul className="space-y-2">
                  {[
                    "The paper states that Meta was found to have violated both California privacy law and its own stated privacy policy.",
                    "That matters because the platform had assured users they could control location-data collection.",
                    "The case therefore becomes more than a technical dispute. It becomes a question of whether user-facing privacy controls mean what they appear to mean.",
                    "It also shows how companies can use alternative data sources to recreate information a user thought they had turned off.",
                  ].map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--uark-muted)", lineHeight: 1.7 }}>
                      <span style={{ color: "var(--uark-blue)", flexShrink: 0 }}>▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg p-4 border" style={{ background: "var(--uark-quartz)", borderColor: "var(--uark-border)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign size={16} color="var(--uark-green)" />
                  <span style={{ color: "var(--uark-green)", fontWeight: 700, fontSize: "0.85rem" }}>
                    Settlement
                  </span>
                </div>
                <p style={{ color: "var(--uark-ink)", fontWeight: 800, fontSize: "2rem", lineHeight: 1 }}>$37.5M</p>
                <p style={{ color: "var(--uark-subtle)", fontSize: "0.75rem", marginTop: "0.25rem" }}>
                  Meta agreed to a class action settlement.
                </p>
              </div>

              <div className="rounded-lg p-4 border" style={{ background: "var(--uark-quartz)", borderColor: "var(--uark-border)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <FileText size={16} color="var(--uark-gold)" />
                  <span style={{ color: "var(--uark-gold)", fontWeight: 700, fontSize: "0.85rem" }}>
                    Individual Payout
                  </span>
                </div>
                <p style={{ color: "var(--uark-muted)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                  Users who filed valid claims received up to about $30, which the paper contrasts with the scale of
                  Meta's overall business.
                </p>
              </div>

              <div className="rounded-lg p-4 border" style={{ background: "var(--uark-quartz)", borderColor: "var(--uark-border)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle size={16} color="var(--uark-red)" />
                  <span style={{ color: "var(--uark-red)", fontWeight: 700, fontSize: "0.85rem" }}>
                    Scale Comparison
                  </span>
                </div>
                <p style={{ color: "var(--uark-muted)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                  The final draft notes that Meta's annual revenue for the same year exceeded $116 billion.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: "IP addresses can still reveal place",
              desc: "Turning off visible app settings does not prevent a company from reconstructing location if it can draw from other network-level data.",
            },
            {
              title: "Privacy policy language matters",
              desc: "The final paper treats the case as a reminder that legal accountability can attach when a company's actual practices diverge from its stated privacy promises.",
            },
            {
              title: "Settlements do not erase the imbalance",
              desc: "The contrast between claimant payouts and Meta's revenue reinforces the paper's broader claim that reactive remedies often arrive after the harm and at a very different scale.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg p-5 border"
              style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}
            >
              <h4 style={{ color: "var(--uark-ink)", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.92rem" }}>
                {item.title}
              </h4>
              <p style={{ color: "var(--uark-subtle)", fontSize: "0.82rem", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

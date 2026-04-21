import { PageHero } from "../components/PageHero";
import { Shield, AlertTriangle, FileCheck, Gavel } from "lucide-react";

const cases = [
  {
    name: "FTC v. InMarket Media, LLC",
    year: "2024",
    color: "var(--uark-red)",
    tone: "var(--uark-soft-red)",
    summary: "The FTC finalized an order prohibiting InMarket from selling or sharing precise location data.",
    points: [
      "InMarket was collecting precise GPS location data from mobile users through partner apps.",
      "The data was being sold and shared with third parties without meaningful user consent.",
      "The FTC found that disclosures buried in lengthy privacy policies did not constitute informed consent.",
      "InMarket was permanently prohibited from selling or sharing precise location data.",
      "The case established that fine-print disclosures are legally insufficient for location data sharing.",
    ],
  },
  {
    name: "FTC v. Gravy Analytics & Venntel",
    year: "2025",
    color: "var(--uark-plum)",
    tone: "var(--uark-soft-plum)",
    summary: "The FTC's final order against two major data brokers redefined what constitutes meaningful consent.",
    points: [
      "Gravy Analytics and its subsidiary Venntel were major commercial location data aggregators.",
      "They collected location data from millions of devices and sold it to advertisers and government agencies.",
      "The FTC ruled that hiding data-sharing disclosures in fine print or lengthy privacy policies does NOT constitute meaningful consent.",
      "The 'Unfair Trade Practice' standard under Section 5 of the FTC Act was applied — a historic expansion of its use.",
      "A fine-print acknowledgment of data sharing is now deemed legally insufficient under U.S. consumer protection law.",
      "Sets a new precedent: companies must provide clear, prominent, and specific notification that location data is being shared.",
    ],
  },
];

export function FTCActions() {
  return (
    <div>
      <PageHero
        number="05"
        label="Regulatory Action"
        title="FTC Actions Against Data Brokers"
        subtitle="Federal enforcement actions in 2024–2025 redefined what informed consent means for location data collection."
        image="https://images.unsplash.com/photo-1558559383-8b3e3075397f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwcmVndWxhdGlvbiUyMGZlZGVyYWwlMjB0cmFkZSUyMGNvbW1pc3Npb258ZW58MXx8fHwxNzc1NjcwNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-5xl mx-auto px-6 py-14" style={{ color: "var(--uark-ink)" }}>
        <div
          className="rounded-xl p-6 border mb-12"
          style={{ background: "var(--uark-soft-red)", borderColor: "var(--uark-border-strong)" }}
        >
          <p style={{ color: "var(--uark-muted)", lineHeight: 1.8 }}>
            <span style={{ color: "var(--uark-red)", fontWeight: 700 }}>Key Insight: </span>
            The FTC&apos;s actions in 2024 and 2025 mark a significant shift in how informed consent is interpreted
            under U.S. consumer protection law. When users interact with health and social media applications, they
            need to be <em>reasonably notified</em> — not buried in fine print — that their precise location data is
            being shared and sold to third parties.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {cases.map((c) => (
            <div
              key={c.name}
              className="rounded-xl border overflow-hidden"
              style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}
            >
              <div
                className="flex flex-wrap items-center justify-between gap-3 px-6 py-5 border-b"
                style={{ borderColor: "var(--uark-border)", background: c.tone }}
              >
                <div className="flex items-center gap-3">
                  <Gavel size={20} color={c.color} />
                  <div>
                    <h2 style={{ color: "var(--uark-ink)", fontWeight: 700, fontSize: "1.05rem" }}>{c.name}</h2>
                    <p style={{ color: "var(--uark-subtle)", fontSize: "0.8rem" }}>{c.summary}</p>
                  </div>
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs"
                  style={{ background: "rgba(255,255,255,0.6)", color: c.color, fontWeight: 700 }}
                >
                  {c.year}
                </span>
              </div>
              <div className="px-6 py-5">
                <ul className="space-y-2">
                  {c.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--uark-muted)", lineHeight: 1.65 }}>
                      <span style={{ color: c.color, flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border p-7" style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}>
          <div className="flex items-center gap-2 mb-5">
            <FileCheck size={20} color="var(--uark-green)" />
            <h3 style={{ color: "var(--uark-green)", fontWeight: 700, fontSize: "1rem" }}>New Legal Standard Established</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: <Shield size={16} color="var(--uark-red)" />, title: "Section 5 of the FTC Act", desc: "The commission applied the 'Unfair Trade Practice' standard to hidden location data disclosures — a significant and historic expansion of this consumer protection provision." },
              { icon: <AlertTriangle size={16} color="var(--uark-gold)" />, title: "Fine Print ≠ Consent", desc: "Burying data-sharing disclosures in lengthy privacy policies or terms of service is now deemed legally insufficient to obtain user consent for location data sharing." },
              { icon: <Gavel size={16} color="var(--uark-plum)" />, title: "Precedent for Future Cases", desc: "This decision creates a new legal framework for future enforcement actions. Companies must now provide clear, specific, and prominent notification of data-sharing practices." },
              { icon: <FileCheck size={16} color="var(--uark-green)" />, title: "What's Still Missing", desc: "Despite these advances, the FTC is still acting reactively — responding after harms occur. There is no comprehensive federal privacy legislation to proactively prevent exploitation." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 style={{ color: "var(--uark-ink)", fontWeight: 600, fontSize: "0.88rem", marginBottom: "0.3rem" }}>{item.title}</h4>
                  <p style={{ color: "var(--uark-subtle)", fontSize: "0.81rem", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { PageHero } from "../components/PageHero";
import { Scale, FileText, DollarSign, AlertCircle } from "lucide-react";

export function LegalCases() {
  return (
    <div>
      <PageHero
        number="03"
        label="Legal Cases"
        title="Key Legal Cases in Location Tracking"
        subtitle="Court rulings and class action settlements are shaping how location data can be collected and monetized."
        image="https://images.unsplash.com/photo-1774898988393-5c752e4d55e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydHJvb20lMjBsZWdhbCUyMGxhd3N1aXQlMjBqdXN0aWNlfGVufDF8fHx8MTc3NTY3MDczMnww&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-5xl mx-auto px-6 py-14" style={{ color: "var(--uark-ink)" }}>
        {/* Intro */}
        <div
          className="rounded-xl p-6 border mb-12"
          style={{ background: "var(--uark-soft-red)", borderColor: "var(--uark-border-strong)" }}
        >
          <p style={{ color: "var(--uark-muted)", lineHeight: 1.8 }}>
            <span style={{ color: "var(--uark-red)", fontWeight: 700 }}>Key Insight: </span>
            Legal cases have caused growing unease about how location tracking data is gathered and used. These cases
            establish important precedents, but also reveal how slow the legal system is to keep pace with rapidly
            evolving technology.
          </p>
        </div>

        {/* Main Case */}
        <div className="rounded-xl border overflow-hidden mb-10" style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}>
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
                Case No. 3:18-cv-06793-JD · U.S. District Court, N.D. California
              </p>
            </div>
          </div>

          <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div>
                <h3 style={{ color: "var(--uark-red)", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.6rem" }}>
                  What Happened
                </h3>
                <ul className="space-y-2">
                  {[
                    "Meta (Facebook) was tracking users' precise locations even after users explicitly turned off location services in the app.",
                    "Meta used alternative data sources — primarily IP addresses — to continue determining user locations without permission.",
                    "This tracking continued covertly, violating Meta's own publicly stated terms of service and privacy policies.",
                    "Plaintiffs argued this constituted an unauthorized and deceptive collection of private data.",
                  ].map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--uark-muted)", lineHeight: 1.65 }}>
                      <span style={{ color: "var(--uark-red)", flexShrink: 0 }}>▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ color: "var(--uark-blue)", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.6rem" }}>
                  Legal Significance
                </h3>
                <ul className="space-y-2">
                  {[
                    "Established that disabling location services in an app does not guarantee that location data collection stops.",
                    "Demonstrated that IP-based location tracking is a meaningful form of surveillance that violates user expectations.",
                    "Reinforced that companies cannot contract away user privacy rights in their own terms of service.",
                    "Created a class action avenue for users whose location was covertly tracked.",
                  ].map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--uark-muted)", lineHeight: 1.65 }}>
                      <span style={{ color: "var(--uark-blue)", flexShrink: 0 }}>▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg p-4 border" style={{ background: "var(--uark-quartz)", borderColor: "var(--uark-border)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign size={16} color="var(--uark-green)" />
                  <span style={{ color: "var(--uark-green)", fontWeight: 700, fontSize: "0.85rem" }}>Settlement Amount</span>
                </div>
                <p style={{ color: "var(--uark-ink)", fontWeight: 800, fontSize: "2rem", lineHeight: 1 }}>$37.5M</p>
                <p style={{ color: "var(--uark-subtle)", fontSize: "0.75rem", marginTop: "0.25rem" }}>Class action settlement agreed by Meta</p>
              </div>
              <div className="rounded-lg p-4 border" style={{ background: "var(--uark-quartz)", borderColor: "var(--uark-border)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <FileText size={16} color="var(--uark-gold)" />
                  <span style={{ color: "var(--uark-gold)", fontWeight: 700, fontSize: "0.85rem" }}>Violation</span>
                </div>
                <p style={{ color: "var(--uark-muted)", fontSize: "0.82rem", lineHeight: 1.55 }}>
                  Meta's own Terms of Service and user-facing privacy controls
                </p>
              </div>
              <div className="rounded-lg p-4 border" style={{ background: "var(--uark-quartz)", borderColor: "var(--uark-border)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle size={16} color="var(--uark-red)" />
                  <span style={{ color: "var(--uark-red)", fontWeight: 700, fontSize: "0.85rem" }}>Method</span>
                </div>
                <p style={{ color: "var(--uark-muted)", fontSize: "0.82rem", lineHeight: 1.55 }}>
                  IP address tracking used to circumvent disabled location services
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Takeaways */}
        <h3 style={{ color: "var(--uark-ink)", fontWeight: 700, marginBottom: "1rem", fontSize: "1.1rem" }}>
          Broader Implications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Privacy Controls Are Not Absolute", desc: "Turning off location services in an app may not fully stop tracking — companies can use IP, Wi-Fi, and other signals." },
            { title: "Legal Accountability Is Possible", desc: "Class action lawsuits provide a mechanism for users to hold large tech companies accountable for privacy violations." },
            { title: "Terms of Service Violations", desc: "When companies violate their own stated privacy policies, they open themselves to significant legal liability." },
            { title: "Slow Legal Response", desc: "The lawsuit was filed in 2018 and settled years later — illustrating how slowly legal systems respond to digital privacy harms." },
          ].map((item) => (
            <div key={item.title} className="rounded-lg p-5 border" style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}>
              <h4 style={{ color: "var(--uark-ink)", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.92rem" }}>{item.title}</h4>
              <p style={{ color: "var(--uark-subtle)", fontSize: "0.82rem", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

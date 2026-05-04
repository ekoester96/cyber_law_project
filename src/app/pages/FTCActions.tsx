import { PageHero } from "../components/PageHero";
import { Shield, AlertTriangle, FileCheck, Gavel } from "lucide-react";

const orders = [
  {
    name: "FTC v. InMarket Media, LLC",
    year: "2024",
    accent: "var(--uark-red)",
    tone: "var(--uark-soft-red)",
    points: [
      "The final draft says InMarket collected precise location data from more than one hundred million devices without proper consumer notification.",
      "The FTC applied Section 5(a) of the FTC Act and treated the conduct as an unfair act or practice.",
      "The order also focused on how long the company retained that sensitive information, noting that it kept the data for five years.",
      "This case helps define what the paper means when it says enforcement actions, not statutes alone, often set the practical boundary for platform behavior.",
    ],
  },
  {
    name: "FTC v. Gravy Analytics and Venntel",
    year: "2025",
    accent: "var(--uark-plum)",
    tone: "var(--uark-soft-plum)",
    points: [
      "The final draft describes this order as involving the sale of precise geolocation data from more than one billion smartphones.",
      "That data was sold to government agencies without verifiable consumer consent.",
      "The same legal standard used in the InMarket context carried over here: burying disclosures in fine print does not produce meaningful consent.",
      "The paper highlights the government-agency buyer angle as especially important because it links broker markets directly to state surveillance.",
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
        subtitle="The final paper treats the January 2025 orders as a turning point in how meaningful consent and unfair practices are interpreted for precise location data."
        image="https://images.unsplash.com/photo-1558559383-8b3e3075397f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwcmVndWxhdGlvbiUyMGZlZGVyYWwlMjB0cmFkZSUyMGNvbW1pc3Npb258ZW58MXx8fHwxNzc1NjcwNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-5xl mx-auto px-6 py-14" style={{ color: "var(--uark-ink)" }}>
        <div
          className="rounded-xl p-6 border mb-12"
          style={{ background: "var(--uark-soft-red)", borderColor: "var(--uark-border-strong)" }}
        >
          <p style={{ color: "var(--uark-muted)", lineHeight: 1.8 }}>
            <span style={{ color: "var(--uark-red)", fontWeight: 700 }}>Key Insight: </span>
            The final draft argues that enforcement actions matter because they show how U.S. consumer protection law
            is applied in practice. In these cases, hidden disclosures were not enough to justify large-scale location
            collection and sale.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {orders.map((order) => (
            <div
              key={order.name}
              className="rounded-xl border overflow-hidden"
              style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}
            >
              <div
                className="flex flex-wrap items-center justify-between gap-3 px-6 py-5 border-b"
                style={{ borderColor: "var(--uark-border)", background: order.tone }}
              >
                <div className="flex items-center gap-3">
                  <Gavel size={20} color={order.accent} />
                  <div>
                    <h2 style={{ color: "var(--uark-ink)", fontWeight: 700, fontSize: "1.05rem" }}>{order.name}</h2>
                    <p style={{ color: "var(--uark-subtle)", fontSize: "0.8rem" }}>
                      Final paper emphasis on meaningful consent and undisclosed monetization
                    </p>
                  </div>
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs"
                  style={{ background: "rgba(255,255,255,0.65)", color: order.accent, fontWeight: 700 }}
                >
                  {order.year}
                </span>
              </div>
              <div className="px-6 py-5">
                <ul className="space-y-2">
                  {order.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--uark-muted)", lineHeight: 1.7 }}>
                      <span style={{ color: order.accent, flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
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
            <h3 style={{ color: "var(--uark-green)", fontWeight: 700, fontSize: "1rem" }}>
              What standard these actions establish
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: <Shield size={16} color="var(--uark-red)" />,
                title: "Section 5(a) has real force",
                desc: "The paper treats the InMarket order as proof that undisclosed location practices can be challenged as unfair acts or practices under federal consumer protection law.",
              },
              {
                icon: <AlertTriangle size={16} color="var(--uark-gold)" />,
                title: "Fine print is not meaningful consent",
                desc: "Lengthy privacy policies and buried disclosures do not reasonably notify users that precise location data is being shared or sold.",
              },
              {
                icon: <Gavel size={16} color="var(--uark-plum)" />,
                title: "Government buyers do not change the rule",
                desc: "The final draft stresses that the same consent standard applies whether the end buyer is a commercial advertiser or a government agency.",
              },
              {
                icon: <FileCheck size={16} color="var(--uark-green)" />,
                title: "Still reactive, not comprehensive",
                desc: "Even these stronger actions arrive after collection and sale have already happened, which reinforces the paper's broader criticism of the current legal landscape.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 style={{ color: "var(--uark-ink)", fontWeight: 600, fontSize: "0.88rem", marginBottom: "0.3rem" }}>
                    {item.title}
                  </h4>
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

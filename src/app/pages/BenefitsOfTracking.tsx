import { PageHero } from "../components/PageHero";
import { HeartPulse, Building2, Shield, FileText } from "lucide-react";

const benefitAreas = [
  {
    icon: <HeartPulse size={22} color="var(--uark-red)" />,
    title: "Emergency and Disaster Response",
    points: [
      "Location data can help emergency services and law enforcement find people faster during natural disasters and urgent public-safety events.",
      "In the strongest version of the counterargument, tracking is framed as a practical way to direct help to people who may not be able to communicate their location clearly.",
      "The paper acknowledges that location tools can provide real public-interest value when they are used narrowly and transparently.",
    ],
  },
  {
    icon: <Building2 size={22} color="var(--uark-blue)" />,
    title: "Business Forecasting and Resource Allocation",
    points: [
      "Narang and Luco argue that geo-tracking data can help businesses predict consumer demand and plan how to allocate resources.",
      "In that setting, movement patterns are treated as operational signals rather than as tools for manipulation or resale.",
      "This is the paper's clearest example of location data being used for planning rather than exploitation.",
    ],
  },
  {
    icon: <Shield size={22} color="var(--uark-green)" />,
    title: "IoT-Assisted Investigations",
    points: [
      "The final draft also notes that connected devices and shared location information can help law enforcement solve crimes faster.",
      "Geldenhuys is used to illustrate how GPS-linked devices can support investigation workflows and improve response time.",
      "Used responsibly, these systems can strengthen investigative capacity instead of simply feeding advertising or broker markets.",
    ],
  },
];

export function BenefitsOfTracking() {
  return (
    <div>
      <PageHero
        number="06"
        label="Counterargument"
        title="Benefits of Tracking"
        subtitle="The final paper recognizes that location data has legitimate public-safety, business, and investigative uses even while criticizing the current commercial tracking system."
        image="https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      />

      <div className="max-w-5xl mx-auto px-6 py-14" style={{ color: "var(--uark-ink)" }}>
        <div
          className="rounded-xl p-6 border mb-12"
          style={{ background: "var(--uark-soft-blue)", borderColor: "var(--uark-border)" }}
        >
          <p style={{ color: "var(--uark-muted)", lineHeight: 1.8 }}>
            <span style={{ color: "var(--uark-blue)", fontWeight: 700 }}>Key Insight: </span>
            At first, location tracking may not seem harmful. The final draft treats this as a serious counterargument:
            location data can support emergency response, business forecasting, and criminal investigations when used
            for clear public or operational goals.
          </p>
        </div>

        <h2 style={{ color: "var(--uark-ink)", fontWeight: 700, marginBottom: "1.5rem", fontSize: "1.3rem" }}>
          Where the paper sees legitimate value
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefitAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-xl p-6 border"
              style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}
            >
              <div className="mb-4">{area.icon}</div>
              <h3 style={{ color: "var(--uark-ink)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.7rem" }}>
                {area.title}
              </h3>
              <ul className="space-y-2">
                {area.points.map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--uark-muted)", lineHeight: 1.7 }}>
                    <span style={{ color: "var(--uark-red)", flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl border p-7"
          style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <FileText size={18} color="var(--uark-red)" />
            <h3 style={{ color: "var(--uark-red)", fontWeight: 700, fontSize: "1rem" }}>
              Why the paper still rejects the current system
            </h3>
          </div>
          <p style={{ color: "var(--uark-muted)", lineHeight: 1.85, marginBottom: "1rem" }}>
            The final draft does not argue that location data is always bad. Instead, it argues that the most common
            real-world uses are not limited to emergency response or narrowly tailored investigations. In practice,
            companies collect, combine, and sell location signals at scale with very little transparency.
          </p>
          <p style={{ color: "var(--uark-muted)", lineHeight: 1.85 }}>
            That is why this section functions as a counterargument rather than a reversal. Useful applications exist,
            but they do not justify an opaque commercial system that tracks people broadly and then turns that data
            against them through profiling, resale, or surveillance.
          </p>
        </div>
      </div>
    </div>
  );
}

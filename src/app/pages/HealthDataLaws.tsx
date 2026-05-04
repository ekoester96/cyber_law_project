import { PageHero } from "../components/PageHero";
import { HeartPulse, MapPin, Building2, FileText } from "lucide-react";

const laws = [
  {
    icon: <Building2 size={22} color="var(--uark-red)" />,
    state: "California",
    name: "AB 45",
    effectiveDate: "January 1, 2026",
    accent: "var(--uark-red)",
    tone: "var(--uark-soft-red)",
    points: [
      "AB 45 prohibits geofencing around in-person healthcare facilities for the purpose of tracking or targeting individuals.",
      "The paper emphasizes that this blocks businesses from using virtual perimeters around clinics to push ads or collect data on anyone entering the area.",
      "It is a direct response to fears that location data near reproductive health facilities could be used against patients after Dobbs.",
    ],
  },
  {
    icon: <HeartPulse size={22} color="var(--uark-plum)" />,
    state: "Washington State",
    name: "My Health My Data Act",
    effectiveDate: "Effective 2024",
    accent: "var(--uark-plum)",
    tone: "var(--uark-soft-plum)",
    points: [
      "Washington's law takes a broader approach and protects consumer health data that could reveal health-related location patterns.",
      "It is not limited to traditional healthcare providers, which means ordinary apps and services can also fall within its reach.",
      "The final draft treats it as a stronger answer to the data-broker problem because it focuses on how incidental collection can still expose people.",
    ],
  },
];

export function HealthDataLaws() {
  return (
    <div>
      <PageHero
        number="04"
        label="State Legislation"
        title="Health Data Privacy Laws"
        subtitle="The final draft ties Dobbs-era privacy law directly to the risks created when reproductive-health visits can be inferred from location data."
        image="https://images.unsplash.com/photo-1668282690278-8127bc0b9e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHByaXZhY3klMjBkYXRhJTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3NzU2NzA3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-5xl mx-auto px-6 py-14" style={{ color: "var(--uark-ink)" }}>
        <div
          className="rounded-xl p-6 border mb-12"
          style={{ background: "var(--uark-soft-red)", borderColor: "var(--uark-border-strong)" }}
        >
          <p style={{ color: "var(--uark-muted)", lineHeight: 1.8 }}>
            <span style={{ color: "var(--uark-red)", fontWeight: 700 }}>Key Insight: </span>
            After Dobbs, a visit to a reproductive healthcare clinic could become evidence in a criminal case. That is
            why the final paper treats location privacy near healthcare facilities as a direct safety issue rather than
            a narrow advertising issue.
          </p>
        </div>

        <div
          className="rounded-xl border overflow-hidden mb-12"
          style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}
        >
          <div
            className="px-6 py-5 border-b"
            style={{ borderColor: "var(--uark-border)", background: "var(--uark-soft-red)" }}
          >
            <h3 style={{ color: "var(--uark-ink)", fontWeight: 700, fontSize: "1.05rem" }}>
              Why clinic location data became more dangerous
            </h3>
          </div>
          <div className="px-6 py-5">
            <ul className="space-y-2">
              {[
                "In states where abortion is restricted or criminalized, location data showing a clinic visit could be used in a prosecution.",
                "The final draft notes that data brokers collect and sell location data without meaningful consent, making those visits available to outside buyers.",
                "Law enforcement, private investigators, or anti-abortion groups could all attempt to purchase or infer that information.",
                "That threat model is what makes state-level protection of healthcare-related location data so significant.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--uark-muted)", lineHeight: 1.7 }}>
                  <span style={{ color: "var(--uark-red)", flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8 mb-12">
          {laws.map((law) => (
            <div
              key={law.name}
              className="rounded-xl border overflow-hidden"
              style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}
            >
              <div
                className="flex flex-wrap items-center gap-3 px-6 py-5 border-b"
                style={{ borderColor: "var(--uark-border)", background: law.tone }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.6)" }}
                >
                  {law.icon}
                </div>
                <div>
                  <h2 style={{ color: "var(--uark-ink)", fontWeight: 700, fontSize: "1.05rem" }}>
                    {law.state} - {law.name}
                  </h2>
                  <span
                    className="text-xs px-2 py-0.5 rounded"
                    style={{ background: "rgba(255,255,255,0.7)", color: law.accent, fontWeight: 700 }}
                  >
                    Effective: {law.effectiveDate}
                  </span>
                </div>
              </div>
              <div className="px-6 py-5">
                <ul className="space-y-2">
                  {law.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--uark-muted)", lineHeight: 1.7 }}>
                      <span style={{ color: law.accent, flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border p-6" style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}>
          <div className="flex items-center gap-2 mb-4">
            <FileText size={18} color="var(--uark-gold)" />
            <h3 style={{ color: "var(--uark-gold)", fontWeight: 700, fontSize: "0.95rem" }}>
              Incidental collection still matters
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Weather, fitness, and social apps",
                desc: "The final draft highlights that ordinary apps can request or collect location information even when healthcare is not their primary purpose.",
              },
              {
                title: "Not just intentional misuse",
                desc: "The problem is not only malicious design. Sensitive health-related movement can be captured incidentally and then passed into the broker ecosystem anyway.",
              },
              {
                title: "Broker restrictions matter",
                desc: "These laws try to stop location data for health reasons from being shared or sold onward to third-party data brokers.",
              },
              {
                title: "State laws fill a gap",
                desc: "The paper treats AB 45 and MHMD as partial responses to a federal privacy gap rather than as complete solutions.",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={14} color="var(--uark-red)" />
                  <h4 style={{ color: "var(--uark-ink)", fontWeight: 600, fontSize: "0.88rem" }}>{item.title}</h4>
                </div>
                <p style={{ color: "var(--uark-subtle)", fontSize: "0.81rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { PageHero } from "../components/PageHero";
import { HeartPulse, MapPin, Building2, FileText } from "lucide-react";

const laws = [
  {
    icon: Building2,
    state: "California",
    name: "AB 45",
    effectiveDate: "January 1, 2026",
    color: "var(--uark-red)",
    tone: "var(--uark-soft-red)",
    points: [
      "Prohibits geofencing around in-person healthcare facilities for the purpose of tracking or targeting individuals.",
      "Businesses can no longer use proximity-based location data to identify and advertise to individuals who visit healthcare locations.",
      "Applies to mobile applications and ad tech platforms operating in California.",
      "Addresses the growing practice of using geofence data to target people based on where they seek medical care.",
      "Specifically designed to protect reproductive healthcare privacy in the post-Dobbs environment.",
    ],
  },
  {
    icon: HeartPulse,
    state: "Washington State",
    name: "My Health My Data Act (MHMD)",
    effectiveDate: "Effective 2024",
    color: "var(--uark-plum)",
    tone: "var(--uark-soft-plum)",
    points: [
      "Takes a broader approach — covers ANY consumer health data that could reveal health-related location patterns.",
      "Applies to data collected outside of traditional HIPAA-covered entities (expands beyond hospitals/doctors).",
      "Prohibits sharing health-related location data with third-party data brokers without explicit consent.",
      "Mobile applications can obtain this information incidentally — even unintentional collection is covered.",
      "Designed to prevent location data for health reasons from being collected or shared, regardless of app intent.",
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
        subtitle="The Dobbs decision triggered new state-level laws protecting location data near healthcare facilities."
        image="https://images.unsplash.com/photo-1668282690278-8127bc0b9e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHByaXZhY3klMjBkYXRhJTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3NzU2NzA3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-5xl mx-auto px-6 py-14" style={{ color: "var(--uark-ink)" }}>
        <div
          className="rounded-xl p-6 border mb-12"
          style={{ background: "var(--uark-soft-red)", borderColor: "var(--uark-border-strong)" }}
        >
          <h3 style={{ color: "var(--uark-red)", fontWeight: 700, marginBottom: "0.6rem", fontSize: "0.95rem" }}>
            The Dobbs Connection
          </h3>
          <p style={{ color: "var(--uark-muted)", lineHeight: 1.8, fontSize: "0.95rem" }}>
            The Supreme Court&apos;s <em>Dobbs v. Jackson Women&apos;s Health Organization</em> decision, which
            overruled <em>Roe v. Wade</em>, prompted states to enact laws specifically protecting location data
            collected near reproductive healthcare facilities. These decisions create new compliance obligations for
            companies operating mobile health and social media applications, where location data can be used to
            identify, target, or prosecute vulnerable individuals.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {laws.map((law) => {
            const Icon = law.icon;

            return (
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
                    style={{ background: "rgba(255,255,255,0.55)" }}
                  >
                    <Icon size={22} color={law.color} />
                  </div>
                  <div>
                    <h2 style={{ color: "var(--uark-ink)", fontWeight: 700, fontSize: "1.05rem" }}>
                      {law.state} — {law.name}
                    </h2>
                    <span
                      className="text-xs px-2 py-0.5 rounded"
                      style={{ background: "rgba(255,255,255,0.6)", color: law.color, fontWeight: 700 }}
                    >
                      Effective: {law.effectiveDate}
                    </span>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <ul className="space-y-2">
                    {law.points.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--uark-muted)", lineHeight: 1.65 }}>
                        <span style={{ color: law.color, flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-xl border p-6" style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}>
          <div className="flex items-center gap-2 mb-4">
            <FileText size={18} color="var(--uark-gold)" />
            <h3 style={{ color: "var(--uark-gold)", fontWeight: 700, fontSize: "0.95rem" }}>Shared Key Concern</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Incidental Collection",
                desc: "Mobile applications can obtain health-related location information incidentally. Even if an app is not intentionally targeting people, these laws ensure that such information cannot be shared freely with brokers.",
              },
              {
                title: "Beyond HIPAA",
                desc: "Traditional health privacy law focuses on healthcare providers. These state laws extend protections to apps and services that can reveal health-related movement patterns.",
              },
              {
                title: "Data Broker Restrictions",
                desc: "Both laws respond directly to the data broker ecosystem by limiting how sensitive location information can be sold, shared, and reassembled into consumer profiles.",
              },
              {
                title: "Advertising Restrictions",
                desc: "Proximity-based targeting around healthcare facilities is no longer treated as a normal ad-tech practice. These laws draw a much firmer line around sensitive location use.",
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

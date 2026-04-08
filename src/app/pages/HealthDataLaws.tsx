import { PageHero } from "../components/PageHero";
import { HeartPulse, MapPin, Building2, FileText } from "lucide-react";

const laws = [
  {
    icon: <Building2 size={22} color="#06b6d4" />,
    state: "California",
    name: "AB 45",
    effectiveDate: "January 1, 2026",
    color: "#06b6d4",
    points: [
      "Prohibits geofencing around in-person healthcare facilities for the purpose of tracking or targeting individuals.",
      "Businesses can no longer use proximity-based location data to identify and advertise to individuals who visit healthcare locations.",
      "Applies to mobile applications and ad tech platforms operating in California.",
      "Addresses the growing practice of using geofence data to target people based on where they seek medical care.",
      "Specifically designed to protect reproductive healthcare privacy in the post-Dobbs environment.",
    ],
  },
  {
    icon: <HeartPulse size={22} color="#8b5cf6" />,
    state: "Washington State",
    name: "My Health My Data Act (MHMD)",
    effectiveDate: "Effective 2024",
    color: "#8b5cf6",
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

      <div className="max-w-5xl mx-auto px-6 py-14" style={{ color: "#cbd5e1" }}>
        {/* Context */}
        <div
          className="rounded-xl p-6 border mb-12"
          style={{ background: "rgba(6,182,212,0.07)", borderColor: "rgba(6,182,212,0.3)" }}
        >
          <h3 style={{ color: "#06b6d4", fontWeight: 700, marginBottom: "0.6rem", fontSize: "0.95rem" }}>
            The Dobbs Connection
          </h3>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem" }}>
            The Supreme Court's <em>Dobbs v. Jackson Women's Health Organization</em> decision, which overruled{" "}
            <em>Roe v. Wade</em>, prompted many states to enact laws specifically protecting location data collected
            near reproductive healthcare facilities. These decisions create new compliance obligations for companies
            operating mobile health and social media applications, as location data could now be used to prosecute
            individuals or identify them for targeting.
          </p>
        </div>

        {/* Laws */}
        <div className="space-y-8 mb-12">
          {laws.map((law) => (
            <div key={law.name} className="rounded-xl border overflow-hidden" style={{ background: "#0d1530", borderColor: "#1e3a5f" }}>
              <div className="flex flex-wrap items-center gap-3 px-6 py-5 border-b" style={{ borderColor: "#1e3a5f", background: "rgba(255,255,255,0.02)" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `rgba(${law.color === '#06b6d4' ? '6,182,212' : '139,92,246'},0.12)` }}>
                  {law.icon}
                </div>
                <div>
                  <h2 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.05rem" }}>{law.state} — {law.name}</h2>
                  <span
                    className="text-xs px-2 py-0.5 rounded"
                    style={{ background: `rgba(${law.color === '#06b6d4' ? '6,182,212' : '139,92,246'},0.12)`, color: law.color }}
                  >
                    Effective: {law.effectiveDate}
                  </span>
                </div>
              </div>
              <div className="px-6 py-5">
                <ul className="space-y-2">
                  {law.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: "#94a3b8", lineHeight: 1.65 }}>
                      <span style={{ color: law.color, flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Shared Concern */}
        <div className="rounded-xl border p-6" style={{ background: "#0d1530", borderColor: "#1e3a5f" }}>
          <div className="flex items-center gap-2 mb-4">
            <FileText size={18} color="#f59e0b" />
            <h3 style={{ color: "#f59e0b", fontWeight: 700, fontSize: "0.95rem" }}>Shared Key Concern</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Incidental Collection",
                desc: "Mobile applications can obtain health-related location information incidentally. Even if an app isn't intending to do harm, these laws ensure that location data for health reasons cannot be shared or collected by third-party data brokers.",
              },
              {
                title: "Beyond HIPAA",
                desc: "Traditional health data laws like HIPAA only cover healthcare providers. These new state laws extend protections to any app or service that could capture location data near health facilities — filling a critical gap.",
              },
              {
                title: "Data Broker Restrictions",
                desc: "Both laws specifically address the data broker ecosystem — preventing location data from being sold or shared with companies that aggregate and resell personal information.",
              },
              {
                title: "Advertising Restrictions",
                desc: "Companies are prohibited from using proximity-based location data for advertising targeting — ending the practice of targeting people based on their healthcare visits.",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={14} color="#06b6d4" />
                  <h4 style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.88rem" }}>{item.title}</h4>
                </div>
                <p style={{ color: "#64748b", fontSize: "0.81rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { PageHero } from "../components/PageHero";
import { Flame, Map, Users, AlertTriangle } from "lucide-react";

export function NationalSecurity() {
  return (
    <div>
      <PageHero
        number="06"
        label="National Security"
        title="National Security Threats from Location Tracking"
        subtitle="Fitness apps and commercial tracking platforms have exposed military operations, personnel, and world leaders' security details."
        image="https://images.unsplash.com/photo-1722480417235-28299fbc4006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMGJhc2UlMjBzZWN1cml0eSUyMGRlZmVuc2V8ZW58MXx8fHwxNzc1NjcwNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-5xl mx-auto px-6 py-14" style={{ color: "#cbd5e1" }}>
        {/* Key Insight */}
        <div
          className="rounded-xl p-6 border mb-12"
          style={{ background: "rgba(239,68,68,0.07)", borderColor: "rgba(239,68,68,0.3)" }}
        >
          <p style={{ color: "#94a3b8", lineHeight: 1.8 }}>
            <span style={{ color: "#ef4444", fontWeight: 700 }}>Key Insight: </span>
            Tracking is not just a consumer issue — it is a national security and physical safety threat. The public
            availability of aggregated location data from commercial fitness and social apps has provided adversaries
            with intelligence about classified military installations and personnel.
          </p>
        </div>

        {/* Strava Case */}
        <div className="rounded-xl border overflow-hidden mb-10" style={{ background: "#0d1530", borderColor: "#1e3a5f" }}>
          <div className="flex items-center gap-3 px-6 py-5 border-b" style={{ borderColor: "#1e3a5f", background: "rgba(255,255,255,0.02)" }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(239,68,68,0.12)" }}>
              <Flame size={22} color="#ef4444" />
            </div>
            <div>
              <h2 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.1rem" }}>The Strava Heatmap Incident (2018)</h2>
              <p style={{ color: "#64748b", fontSize: "0.8rem" }}>Fitness App Exposes Military Secrets Globally</p>
            </div>
          </div>
          <div className="px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 style={{ color: "#ef4444", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.8rem" }}>
                  What Was Exposed
                </h3>
                <ul className="space-y-2">
                  {[
                    "Strava's global activity heatmap — aggregated from all users' GPS data — was made publicly available.",
                    "The heatmap revealed detailed movement patterns at military installations and remote outposts.",
                    "CIA compounds in Somalia, U.S. military bases in Iraq and Syria were highlighted by dense activity patterns.",
                    "World leaders' security detail movement patterns became visible.",
                    "Soldiers' individual patrol routes and base layouts could be inferred from the data.",
                  ].map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: "#94a3b8", lineHeight: 1.65 }}>
                      <span style={{ color: "#ef4444", flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ color: "#f59e0b", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.8rem" }}>
                  The Israeli Military Bases Incident
                </h3>
                <ul className="space-y-2">
                  {[
                    "A suspicious user appeared to have created fake running data around Israeli military base locations.",
                    "This allowed the user to view local profiles and activity of personnel stationed at the base.",
                    "Personnel movement patterns and their regular routes were mapped using this technique.",
                    "Demonstrated that adversaries could actively exploit fitness app data — not just passively observe it.",
                    "Could have had potentially devastating effects for service members both foreign and domestically.",
                  ].map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: "#94a3b8", lineHeight: 1.65 }}>
                      <span style={{ color: "#f59e0b", flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Threat Categories */}
        <h2 style={{ color: "#f1f5f9", fontWeight: 700, marginBottom: "1.2rem", fontSize: "1.15rem" }}>
          Security Threat Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {[
            {
              icon: <Map size={22} color="#ef4444" />,
              title: "Installation Mapping",
              desc: "Movement patterns reveal the layout of classified bases, patrol routes, and compound structures — intelligence that previously required physical surveillance to obtain.",
              color: "#ef4444",
            },
            {
              icon: <Users size={22} color="#f59e0b" />,
              title: "Personnel Identification",
              desc: "Individual soldiers and security staff can be identified and tracked, revealing who is stationed where — a major operational security risk.",
              color: "#f59e0b",
            },
            {
              icon: <AlertTriangle size={22} color="#8b5cf6" />,
              title: "Unintentional Participation",
              desc: "Service members using apps for fitness tracking may not realize they are contributing to a globally-viewable data aggregation that exposes classified operations.",
              color: "#8b5cf6",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl p-5 border" style={{ background: "#0d1530", borderColor: "#1e3a5f" }}>
              <div className="mb-3">{item.icon}</div>
              <h3 style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.4rem" }}>{item.title}</h3>
              <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* About Strava */}
        <div className="rounded-xl border p-5" style={{ background: "#0d1530", borderColor: "#1e3a5f" }}>
          <h4 style={{ color: "#94a3b8", fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.4rem" }}>About Strava</h4>
          <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.65 }}>
            Strava is a popular fitness application that utilizes GPS to track, record, and analyze athletic activity such
            as running, cycling, and swimming. Its "global heatmap" feature aggregated all user activity data into a
            publicly viewable map showing where people exercised most frequently — inadvertently revealing classified
            military operations in the process. The incident prompted the U.S. Department of Defense to issue new
            guidance on the use of fitness trackers and location-enabled apps by military personnel.
          </p>
        </div>
      </div>
    </div>
  );
}

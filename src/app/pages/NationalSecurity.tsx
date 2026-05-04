import { PageHero } from "../components/PageHero";
import { Flame, Map, Users, AlertTriangle } from "lucide-react";

export function NationalSecurity() {
  return (
    <div>
      <PageHero
        number="07"
        label="National Security"
        title="National Security Threats from Location Tracking"
        subtitle="The final draft keeps Strava at the center of this section, but sharpens the emphasis on exposed personnel movement, base layouts, and operational risk."
        image="https://images.unsplash.com/photo-1722480417235-28299fbc4006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMGJhc2UlMjBzZWN1cml0eSUyMGRlZmVuc2V8ZW58MXx8fHwxNzc1NjcwNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-5xl mx-auto px-6 py-14" style={{ color: "var(--uark-ink)" }}>
        <div
          className="rounded-xl p-6 border mb-12"
          style={{ background: "var(--uark-soft-red)", borderColor: "var(--uark-border-strong)" }}
        >
          <p style={{ color: "var(--uark-muted)", lineHeight: 1.8 }}>
            <span style={{ color: "var(--uark-red)", fontWeight: 700 }}>Key Insight: </span>
            Tracking is not just a consumer issue. The final draft frames publicly visible location data as a national
            security and physical-safety threat when it reveals military facilities, personnel movement, or security details.
          </p>
        </div>

        <div
          className="rounded-xl border overflow-hidden mb-10"
          style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}
        >
          <div className="flex items-center gap-3 px-6 py-5 border-b" style={{ borderColor: "var(--uark-border)", background: "var(--uark-soft-red)" }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--uark-soft-red-strong)" }}>
              <Flame size={22} color="var(--uark-red)" />
            </div>
            <div>
              <h2 style={{ color: "var(--uark-ink)", fontWeight: 700, fontSize: "1.1rem" }}>The Strava Heatmap Incident (2018)</h2>
              <p style={{ color: "var(--uark-subtle)", fontSize: "0.8rem" }}>Fitness data became military intelligence</p>
            </div>
          </div>
          <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 style={{ color: "var(--uark-red)", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.8rem" }}>
                What the heatmap exposed
              </h3>
              <ul className="space-y-2">
                {[
                  "Strava's global heatmap let the public pinpoint movements of soldiers, submarines, and world leaders' security details.",
                  "The heatmap exposed activity around CIA compounds in Somalia and U.S. bases in Iraq and Syria.",
                  "Those patterns made it possible to infer base layouts, patrol routes, and areas of repeated operational activity.",
                  "The final draft treats this as a vivid example of how aggregated consumer data can become a strategic vulnerability.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--uark-muted)", lineHeight: 1.7 }}>
                    <span style={{ color: "var(--uark-red)", flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ color: "var(--uark-gold)", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.8rem" }}>
                The Israeli base example
              </h3>
              <ul className="space-y-2">
                {[
                  "The paper also cites an investigation in which a suspicious user appeared to create fake running data around Israeli military bases.",
                  "That tactic let the user surface local profiles and map individuals' paths associated with the base.",
                  "The example matters because it shows that adversaries may not only observe public data passively. They may also try to manipulate platforms to expose more.",
                  "In both the Strava and Israeli examples, location systems intended for fitness and social visibility spilled into operational security.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--uark-muted)", lineHeight: 1.7 }}>
                    <span style={{ color: "var(--uark-gold)", flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {[
            {
              icon: <Map size={22} color="var(--uark-red)" />,
              title: "Installation mapping",
              desc: "Repeated movement data can reveal layout, patrol paths, and operational zones around sensitive facilities.",
            },
            {
              icon: <Users size={22} color="var(--uark-gold)" />,
              title: "Personnel exposure",
              desc: "Individual soldiers, security staff, or intelligence personnel may become identifiable through recurring route patterns.",
            },
            {
              icon: <AlertTriangle size={22} color="var(--uark-plum)" />,
              title: "Operational risk",
              desc: "The final draft stresses that the exposure of this data could compromise safety for both domestic and foreign service members.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl p-5 border"
              style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}
            >
              <div className="mb-3">{item.icon}</div>
              <h3 style={{ color: "var(--uark-ink)", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.4rem" }}>{item.title}</h3>
              <p style={{ color: "var(--uark-subtle)", fontSize: "0.82rem", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border p-5" style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}>
          <h4 style={{ color: "var(--uark-muted)", fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.4rem" }}>
            Why this section matters
          </h4>
          <p style={{ color: "var(--uark-subtle)", fontSize: "0.82rem", lineHeight: 1.7 }}>
            The paper uses national-security examples to show that location privacy is not only about personal
            inconvenience. Once movement data becomes public, aggregated, or commercially available, it can also expose
            critical infrastructure and high-risk personnel.
          </p>
        </div>
      </div>
    </div>
  );
}

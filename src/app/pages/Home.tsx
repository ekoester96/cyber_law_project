import { NavLink } from "react-router";
import { Shield, Users, BookOpen, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Kirsten Capangpangan",
    role: "Research Contributor",
    photo: "https://images.unsplash.com/photo-1605176647037-cb9e5e5dc87d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTY3MDczOHww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Ethan Koester-Schmidt",
    role: "Research Contributor",
    photo: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzU2NzA3Mzl8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Dawson Ulrich",
    role: "Research Contributor",
    photo: "https://images.unsplash.com/photo-1551706872-893907c44a3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwY29sbGVnZSUyMHN0dWRlbnQlMjBzbWlsaW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NTY3MDczOXww&ixlib=rb-4.1.0&q=80&w=400",
  },
];

const quickLinks = [
  { label: "How Location Tracking Works", path: "/how-it-works", desc: "GPS, cellular towers, and modern tracking methods" },
  { label: "Data Exploitation", path: "/data-exploitation", desc: "Price discrimination and consumer harm" },
  { label: "Legal Cases", path: "/legal-cases", desc: "Meta's $37.5M settlement and more" },
  { label: "Health Data Laws", path: "/health-data-laws", desc: "California AB 45 & Washington MHMD Act" },
  { label: "FTC Actions", path: "/ftc-actions", desc: "Regulatory crackdowns on data brokers" },
  { label: "National Security", path: "/national-security", desc: "Strava heatmap and military vulnerabilities" },
  { label: "Gov. Surveillance", path: "/gov-surveillance", desc: "Real-time bidding and government tracking" },
];

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "90vh" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1751448555253-f39c06e29d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGlnaXRhbCUyMHByaXZhY3klMjBzdXJ2ZWlsbGFuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NTY3MDcyOXww&ixlib=rb-4.1.0&q=80&w=1080)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.2)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center" style={{ minHeight: "90vh", justifyContent: "center" }}>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs mb-6 border"
            style={{ background: "rgba(6,182,212,0.1)", borderColor: "rgba(6,182,212,0.3)", color: "#06b6d4" }}
          >
            <Shield size={12} />
            Cybersecurity & Privacy Law · Spring 2026
          </div>
          <h1
            className="mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#f1f5f9",
              letterSpacing: "-0.02em",
            }}
          >
            Location Tracking and Privacy
          </h1>
          <p
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "#06b6d4",
              fontWeight: 600,
              marginBottom: "2rem",
            }}
          >
            Legal Protections in the Digital Age of Social Media
          </p>

          {/* Quick nav links */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <NavLink
              to="/how-it-works"
              className="px-5 py-2.5 rounded-lg text-sm no-underline transition-all"
              style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)", color: "white", fontWeight: 600 }}
            >
              Explore the Research
            </NavLink>
            <NavLink
              to="/full-report"
              className="px-5 py-2.5 rounded-lg text-sm no-underline border transition-all"
              style={{ borderColor: "#06b6d4", color: "#06b6d4", background: "rgba(6,182,212,0.08)" }}
            >
              Read Full Report
            </NavLink>
          </div>
        </div>
      </section>

      {/* Abstract */}
      <section className="py-16" style={{ background: "#0d1530" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={20} color="#06b6d4" />
            <h2 style={{ color: "#06b6d4", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>
              Abstract
            </h2>
          </div>
          <p style={{ color: "#cbd5e1", lineHeight: 1.85, fontSize: "1.05rem" }}>
            With features like Google Maps or Find My Phone, location tracking has become a core feature of everyday
            life. Social media apps like Snapchat let users see what is going on near them, while Facebook Marketplace
            lets users find nearby deals. Location tracking is vital to these services, but uses of this data are not
            all beneficial to users. This same data can lead to exposure to surveillance, data breaches, and misuse by
            businesses, hackers, and often even governments. Recent legislation has created meaningful progress in
            regulating location data collection; however, these protections are reactive and leave significant gaps that
            continue to expose users to exploitation, risks, and a constant online surveillance state. This portfolio
            examines how location tracking works, who benefits, who is harmed, and what legal frameworks exist — and
            where they fall short.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16" style={{ background: "#080d1a" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <Users size={20} color="#06b6d4" />
            <h2 style={{ color: "#06b6d4", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>
              Research Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-xl overflow-hidden border flex flex-col items-center text-center pb-6"
                style={{ background: "#0d1530", borderColor: "#1e3a5f" }}
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="pt-5 px-4">
                  <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>
                    {member.name}
                  </h3>
                  <p style={{ color: "#06b6d4", fontSize: "0.8rem", letterSpacing: "0.05em" }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topic Navigator */}
      <section className="py-16" style={{ background: "#0d1530" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 style={{ color: "#f1f5f9", fontWeight: 700, marginBottom: "2rem", fontSize: "1.4rem" }}>
            Explore Research Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, i) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="group rounded-xl p-5 border no-underline transition-all"
                style={{ background: "#080d1a", borderColor: "#1e3a5f" }}
              >
                <div className="flex items-start justify-between mb-2">
                  <span
                    className="w-7 h-7 rounded flex items-center justify-center text-xs"
                    style={{ background: "rgba(6,182,212,0.15)", color: "#06b6d4", fontWeight: 700 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowRight size={16} color="#3b82f6" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.4rem" }}>
                  {link.label}
                </h3>
                <p style={{ color: "#64748b", fontSize: "0.8rem" }}>{link.desc}</p>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

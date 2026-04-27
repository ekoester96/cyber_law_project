import { NavLink } from "react-router";
import { Shield, Users, BookOpen, ArrowRight, Scale, FileText } from "lucide-react";
import kirstenPhoto from "../../assets/kirsten-capangpangan.jpeg";
import ethanPhoto from "../../assets/ethan-koester-schmidt.jpeg";
import dawsonPhoto from "../../assets/dawson-ulrich.png";

const teamMembers = [
  {
    name: "Kirsten Capangpangan",
    role: "Research Contributor",
    photo: kirstenPhoto,
    imageStyle: {
      objectPosition: "center 30%",
      transform: "scale(1.35)",
      filter: "brightness(1.08) contrast(1.05) saturate(1.08)",
    },
  },
  {
    name: "Ethan Koester-Schmidt",
    role: "Research Contributor",
    photo: ethanPhoto,
    imageStyle: {
      objectPosition: "center 20%",
      filter: "brightness(1.04) contrast(1.04) saturate(1.03)",
    },
  },
  {
    name: "Dawson Ulrich",
    role: "Research Contributor",
    photo: dawsonPhoto,
    imageStyle: {
      objectPosition: "center 22%",
      transform: "scale(1.2)",
      filter: "brightness(1.06) contrast(1.08) saturate(1.04)",
    },
  },
];

const quickLinks = [
  { label: "How Location Tracking Works", path: "/how-it-works", desc: "GPS, cellular towers, and the technical systems that turn movement into data." },
  { label: "Data Exploitation", path: "/data-exploitation", desc: "How behavioral and location signals are monetized against consumers." },
  { label: "Legal Cases", path: "/legal-cases", desc: "Key litigation shaping how platforms can collect and use location data." },
  { label: "Health Data Laws", path: "/health-data-laws", desc: "State-level protections for sensitive location and health-related information." },
  { label: "FTC Actions", path: "/ftc-actions", desc: "Regulatory enforcement against brokers and hidden consent practices." },
  { label: "National Security", path: "/national-security", desc: "How publicly available location data can expose military and operational risk." },
  { label: "Gov. Surveillance", path: "/gov-surveillance", desc: "The commercial ad ecosystem as a pipeline into warrantless tracking." },
];

const researchSignals = [
  { label: "Research Topics", value: "07", detail: "From GPS methods to government surveillance." },
  { label: "Student Authors", value: "03", detail: "University of Arkansas contributors." },
  { label: "Final Paper", value: "01", detail: "A full portfolio tying law, technology, and harm together." },
];

export function Home() {
  return (
    <div>
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "calc(100svh - 126px)",
          background:
            "linear-gradient(135deg, var(--uark-red-dark) 0%, #7b182b 48%, var(--uark-red) 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgba(255,255,255,0.18), transparent 26%), linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "auto, 52px 52px, 52px 52px",
            opacity: 0.6,
          }}
        />
        <div
          className="absolute inset-y-0 right-0 hidden lg:block"
          style={{
            width: "42%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04))",
            clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-14 lg:py-20 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] items-end">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs uppercase tracking-[0.18em]"
              style={{
                borderColor: "rgba(255,255,255,0.22)",
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 800,
              }}
            >
              <Shield size={14} />
              Cybersecurity & Privacy Law · Spring 2026
            </div>

            <p
              className="mt-8"
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: "0.84rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 900,
              }}
            >
              University of Arkansas Student Research
            </p>

            <h1
              className="mt-4"
              style={{
                color: "white",
                fontSize: "clamp(2.8rem, 7vw, 6rem)",
                fontWeight: 800,
                lineHeight: 0.92,
                letterSpacing: "-0.05em",
                maxWidth: "12ch",
              }}
            >
              Location Tracking and Privacy
            </h1>

            <p
              className="mt-6 max-w-2xl"
              style={{
                color: "rgba(255,255,255,0.84)",
                fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
                lineHeight: 1.75,
              }}
            >
              An Arkansas-themed research portfolio on how location data powers convenience while also enabling
              exploitation, surveillance, and legal exposure across the modern digital ecosystem.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <NavLink
                to="/how-it-works"
                className="px-5 py-3 rounded-full text-sm no-underline"
                style={{
                  background: "white",
                  color: "var(--uark-red-dark)",
                  fontWeight: 800,
                  boxShadow: "0 20px 35px rgba(0,0,0,0.12)",
                }}
              >
                Explore the Research
              </NavLink>
              <NavLink
                to="/full-report"
                className="px-5 py-3 rounded-full text-sm no-underline border"
                style={{
                  borderColor: "rgba(255,255,255,0.24)",
                  color: "white",
                  background: "rgba(255,255,255,0.06)",
                  fontWeight: 700,
                }}
              >
                Read the Full Report
              </NavLink>
            </div>
          </div>

          <div className="self-stretch flex flex-col justify-end">
            <div
              className="pl-6 lg:pl-8"
              style={{
                borderLeft: "1px solid rgba(255,255,255,0.22)",
                color: "white",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: 900,
                }}
              >
                Portfolio Snapshot
              </p>
              <div className="mt-5 space-y-5">
                {researchSignals.map((signal) => (
                  <div key={signal.label}>
                    <div className="flex items-baseline gap-3">
                      <span style={{ fontSize: "2.2rem", fontWeight: 800, lineHeight: 1 }}>{signal.value}</span>
                      <span style={{ fontSize: "0.9rem", fontWeight: 700 }}>{signal.label}</span>
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7, marginTop: "0.3rem" }}>
                      {signal.detail}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8" style={{ color: "rgba(255,255,255,0.66)", lineHeight: 1.75 }}>
                A comprehensive research portfolio exploring the intersection of location tracking, privacy, and law.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,253,249,0.96), rgba(255,248,242,0.92))",
          borderBottom: "1px solid var(--uark-border)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] items-start">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <BookOpen size={18} color="var(--uark-red)" />
              <p
                style={{
                  color: "var(--uark-red)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 900,
                }}
              >
                Research Abstract
              </p>
            </div>
            <p
              style={{
                color: "var(--uark-red-dark)",
                fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                lineHeight: 1.45,
                fontWeight: 700,
              }}
            >
              Location data sits at the center of a tradeoff between utility, monetization, and personal autonomy.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <p style={{ color: "var(--uark-muted)", lineHeight: 1.95, fontSize: "1rem" }}>
              With features like Google Maps and Find My Phone, location tracking has become part of everyday life.
              Social platforms, marketplaces, and mobile services depend on it, but the same data can also fuel
              surveillance, data breaches, discriminatory pricing, and misuse by companies, brokers, hackers, and
              governments. This portfolio examines how tracking works, who benefits, who is harmed, and how current
              legal protections still leave serious gaps.
            </p>
            <div
              className="p-6"
              style={{
                background: "var(--uark-soft-red)",
                border: "1px solid var(--uark-border)",
                boxShadow: "var(--uark-shadow)",
              }}
            >
              <p
                style={{
                  color: "var(--uark-red)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 900,
                }}
              >
                Central Argument
              </p>
              <p className="mt-3" style={{ color: "var(--uark-ink)", lineHeight: 1.85 }}>
                Legislative and regulatory progress has been meaningful, but mostly reactive. Without stronger federal
                privacy protection, users remain exposed to exploitation on the very systems they rely on for work,
                school, and daily communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(221,220,197,0.34), rgba(255,252,248,0.96))",
          borderBottom: "1px solid var(--uark-border)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <Users size={18} color="var(--uark-red)" />
            <p
              style={{
                color: "var(--uark-red)",
                fontSize: "0.8rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 900,
              }}
            >
              Research Team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <figure key={member.name} className="group">
                <div
                  className="overflow-hidden"
                  style={{
                    background: "var(--uark-card-strong)",
                    border: "1px solid var(--uark-border)",
                    boxShadow: "var(--uark-shadow)",
                  }}
                >
                  <div className="h-72 overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      style={member.imageStyle}
                    />
                  </div>
                </div>
                <figcaption className="pt-4">
                  <p style={{ color: "var(--uark-ink)", fontWeight: 700, fontSize: "1.02rem" }}>{member.name}</p>
                  <p
                    style={{
                      color: "var(--uark-red)",
                      fontSize: "0.76rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontWeight: 800,
                      marginTop: "0.35rem",
                    }}
                  >
                    {member.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "rgba(255,252,248,0.92)" }}>
        <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Scale size={18} color="var(--uark-red)" />
              <p
                style={{
                  color: "var(--uark-red)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 900,
                }}
              >
                Explore the Portfolio
              </p>
            </div>
            <h2
              style={{
                color: "var(--uark-ink)",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                maxWidth: "12ch",
              }}
            >
              Seven sections tracking the law, the technology, and the harm.
            </h2>
            <p className="mt-5 max-w-md" style={{ color: "var(--uark-muted)", lineHeight: 1.85 }}>
              Each section focuses on one part of the location-data ecosystem, moving from technical foundations to
              legal responses and broader social consequences.
            </p>

            <NavLink
              to="/full-report"
              className="inline-flex items-center gap-2 mt-8 no-underline"
              style={{ color: "var(--uark-red-dark)", fontWeight: 800 }}
            >
              <FileText size={16} />
              Open the full written paper
            </NavLink>
          </div>

          <div
            style={{
              background: "var(--uark-card-strong)",
              border: "1px solid var(--uark-border)",
              boxShadow: "var(--uark-shadow)",
            }}
          >
            {quickLinks.map((link, i) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="group grid grid-cols-[auto_1fr_auto] gap-5 px-6 py-5 no-underline"
                style={{
                  borderTop: i === 0 ? "none" : "1px solid var(--uark-border)",
                }}
              >
                <span
                  style={{
                    color: "var(--uark-red)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: 900,
                    paddingTop: "0.15rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    style={{
                      color: "var(--uark-ink)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {link.label}
                  </h3>
                  <p style={{ color: "var(--uark-muted)", lineHeight: 1.75 }}>{link.desc}</p>
                </div>
                <ArrowRight
                  size={18}
                  color="var(--uark-red)"
                  className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all mt-1"
                />
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

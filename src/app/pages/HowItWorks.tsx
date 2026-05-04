import { PageHero } from "../components/PageHero";
import { Radio, Wifi, Satellite, MapPin } from "lucide-react";

const methods = [
  {
    icon: <Satellite size={24} color="var(--uark-red)" />,
    title: "GPS (Global Positioning System)",
    points: [
      "Modern phones use a constellation of roughly 30 satellites that continuously transmit radio signals to Earth.",
      "A receiving device calculates latitude and longitude by measuring the time delay between signal transmission and reception.",
      "This method is most accurate outdoors under open skies, where several satellites can be seen without obstruction.",
      "Dense urban environments reduce accuracy because buildings interrupt the device's line of sight.",
    ],
  },
  {
    icon: <Radio size={24} color="var(--uark-blue)" />,
    title: "Cell Tower Triangulation",
    points: [
      "When a mobile phone is powered on, it keeps communicating with nearby towers to stay connected to the network.",
      "By comparing signals from at least three towers, the network can estimate the device's position through geometric triangulation.",
      "Fourth-generation towers are often spaced one to two miles apart, while fifth-generation small cells can be only a few hundred feet apart.",
      "That tighter infrastructure can produce much finer location resolution than earlier generations.",
    ],
  },
  {
    icon: <Wifi size={24} color="var(--uark-plum)" />,
    title: "Wi-Fi and IP Address Tracking",
    points: [
      "Wi-Fi access points have known geographic positions, so connecting to them can help estimate a user's location indoors.",
      "IP addresses are less precise, but they can still be mapped to a city or regional level and used alongside other signals.",
      "These methods are often combined with GPS and cellular data to improve indoor accuracy.",
      "The paper notes that once this information is managed centrally across many users, the privacy risks escalate quickly.",
    ],
  },
  {
    icon: <MapPin size={24} color="var(--uark-gold)" />,
    title: "Objects, Infrastructure, and Logged Events",
    points: [
      "Location surveillance does not only target the phone in a person's pocket. It can also track the physical world around them.",
      "License plate readers, payment logs, app pings, and timestamped camera footage all create location evidence without requiring active user input.",
      "Individually these records may seem harmless, but linked together they reveal routines, destinations, and recurring movement patterns.",
      "This is the bridge from simple location tracking to full behavioral mapping.",
    ],
  },
];

export function HowItWorks() {
  return (
    <div>
      <PageHero
        number="01"
        label="Technology"
        title="How Location Tracking Works"
        subtitle="The final paper moves from GPS and tower triangulation to the broader systems that turn ordinary signals into long-term surveillance."
        image="https://images.unsplash.com/photo-1587937533522-b2294fd611f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHUFMlMjBsb2NhdGlvbiUyMHRyYWNraW5nJTIwc2F0ZWxsaXRlJTIwbWFwfGVufDF8fHx8MTc3NTY3MDcyOXww&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-5xl mx-auto px-6 py-14" style={{ color: "var(--uark-ink)" }}>
        <div
          className="rounded-xl p-6 border mb-12"
          style={{ background: "var(--uark-soft-red)", borderColor: "var(--uark-border-strong)" }}
        >
          <p style={{ color: "var(--uark-muted)", lineHeight: 1.8, fontSize: "0.98rem" }}>
            <span style={{ color: "var(--uark-red)", fontWeight: 700 }}>Key Insight: </span>
            Modern devices do not just determine where a person is once. They continuously combine multiple systems to
            log movement over time, which is why location tracking becomes so powerful once those records are stored and
            connected.
          </p>
        </div>

        <h2 style={{ color: "var(--uark-ink)", fontWeight: 700, marginBottom: "1.5rem", fontSize: "1.3rem" }}>
          Core tracking methods
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {methods.map((method) => (
            <div
              key={method.title}
              className="rounded-xl p-6 border"
              style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--uark-soft-red)" }}
                >
                  {method.icon}
                </div>
                <h3 style={{ color: "var(--uark-ink)", fontWeight: 600, fontSize: "1rem" }}>{method.title}</h3>
              </div>
              <ul className="space-y-2">
                {method.points.map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--uark-muted)", lineHeight: 1.65 }}>
                    <span style={{ color: "var(--uark-red)", flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl border overflow-hidden mb-12"
          style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}
        >
          <div
            className="px-6 py-5 border-b"
            style={{ borderColor: "var(--uark-border)", background: "var(--uark-soft-blue)" }}
          >
            <h3 style={{ color: "var(--uark-ink)", fontWeight: 700, fontSize: "1.1rem" }}>
              Pattern of life analysis
            </h3>
            <p className="mt-2" style={{ color: "var(--uark-muted)", lineHeight: 1.75 }}>
              The final paper expands beyond device tracking and explains how agencies can map behavior by linking
              ordinary records that already exist across daily life.
            </p>
          </div>
          <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4
                style={{
                  color: "var(--uark-blue)",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.7rem",
                }}
              >
                How the map forms
              </h4>
              <ul className="space-y-2">
                {[
                  "A typical week may include the same gym, gas station, workplace, and church or social stops.",
                  "Each visit becomes a data point when a system logs it.",
                  "License plate readers record vehicle location, payment processors log purchases, applications register pings, and cameras capture timestamps.",
                  "Once linked together, those ordinary events form a behavioral map rather than isolated records.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--uark-muted)", lineHeight: 1.7 }}>
                    <span style={{ color: "var(--uark-blue)", flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4
                style={{
                  color: "var(--uark-red)",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.7rem",
                }}
              >
                Why patterns matter
              </h4>
              <ul className="space-y-2">
                {[
                  "Patterns create predictive power rather than simple observation.",
                  "A system can infer where someone will go first after leaving home, which route they will likely take, and how long they may remain at a stop.",
                  "With enough linked records, surveillance begins to predict future movement instead of merely identifying current location.",
                  "The paper stresses that this does not require hacking a phone. It only requires connecting systems that already exist.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--uark-muted)", lineHeight: 1.7 }}>
                    <span style={{ color: "var(--uark-red)", flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="rounded-xl border p-6"
          style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}
        >
          <h3 style={{ color: "var(--uark-ink)", fontWeight: 700, marginBottom: "0.8rem", fontSize: "1rem" }}>
            Why this matters for the rest of the portfolio
          </h3>
          <p style={{ color: "var(--uark-muted)", lineHeight: 1.8 }}>
            Understanding this infrastructure is the first step toward personal agency. The rest of the site follows
            what happens after those signals are collected: how they are monetized, litigated, restricted, weaponized,
            and defended.
          </p>
        </div>
      </div>
    </div>
  );
}

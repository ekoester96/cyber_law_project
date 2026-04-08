import { PageHero } from "../components/PageHero";
import { Eye, Radio, ShoppingBag, Building } from "lucide-react";

export function GovSurveillance() {
  return (
    <div>
      <PageHero
        number="07"
        label="Government Surveillance"
        title="Government Surveillance via Advertising Data"
        subtitle="The same systems that serve you ads are being exploited by government agencies to track your location — without a warrant."
        image="https://images.unsplash.com/photo-1626277787166-ab47350c79bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwc3VydmVpbGxhbmNlJTIwdGFyZ2V0ZWQlMjBhZHZlcnRpc2luZyUyMGRpZ2l0YWx8ZW58MXx8fHwxNzc1NjcwNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-5xl mx-auto px-6 py-14" style={{ color: "#cbd5e1" }}>
        {/* Alert */}
        <div
          className="rounded-xl p-6 border mb-12"
          style={{ background: "rgba(239,68,68,0.07)", borderColor: "rgba(239,68,68,0.3)" }}
        >
          <p style={{ color: "#94a3b8", lineHeight: 1.8 }}>
            <span style={{ color: "#ef4444", fontWeight: 700 }}>Key Insight: </span>
            According to the Electronic Frontier Foundation, the systems that deliver targeted online advertising are
            being exploited for government surveillance. U.S. Customs and Border Protection has admitted to purchasing
            location data derived from advertising data to track individuals' locations{" "}
            <strong style={{ color: "#ef4444" }}>without a warrant</strong>.
          </p>
        </div>

        {/* RTB Explainer */}
        <div className="rounded-xl border overflow-hidden mb-10" style={{ background: "#0d1530", borderColor: "#1e3a5f" }}>
          <div className="flex items-center gap-3 px-6 py-5 border-b" style={{ borderColor: "#1e3a5f" }}>
            <Radio size={22} color="#06b6d4" />
            <h2 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.1rem" }}>How Real-Time Bidding (RTB) Works</h2>
          </div>
          <div className="px-6 py-6">
            <p style={{ color: "#94a3b8", lineHeight: 1.75, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Real-time bidding is the automated process by which digital advertising space is bought and sold in
              milliseconds — every time a webpage or app loads an ad.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[
                { step: "1", title: "Page/App Loads", desc: "A user opens a website or app containing advertising space." },
                { step: "2", title: "Data Broadcast", desc: "The ad system broadcasts the user's GPS coordinates, device ID, browsing history, and other data to hundreds of potential advertisers." },
                { step: "3", title: "Auction (Milliseconds)", desc: "Advertisers bid in real time to show their ad to this specific user. The winner pays and their ad displays." },
                { step: "4", title: "Data Retained & Sold", desc: "Losing bidders still receive the broadcast data — including precise location. This data is aggregated and sold to third parties, including government agencies." },
              ].map((s) => (
                <div key={s.step} className="rounded-lg p-4 border" style={{ background: "#080d1a", borderColor: "#1e3a5f" }}>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-2"
                    style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)", color: "white", fontWeight: 800, fontSize: "0.85rem" }}
                  >
                    {s.step}
                  </div>
                  <h4 style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.3rem" }}>{s.title}</h4>
                  <p style={{ color: "#64748b", fontSize: "0.78rem", lineHeight: 1.55 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What's Exposed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-xl border p-6" style={{ background: "#0d1530", borderColor: "#1e3a5f" }}>
            <h3 style={{ color: "#f59e0b", fontWeight: 700, marginBottom: "1rem", fontSize: "0.95rem" }}>
              Data Exposed in Every RTB Auction
            </h3>
            <ul className="space-y-2">
              {[
                "Precise GPS coordinates (latitude/longitude)",
                "Advertising ID unique to the device",
                "IP address and device type",
                "Browsing history and app usage data",
                "Time and frequency of location visits",
                "Cross-app behavioral profiles",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-sm" style={{ color: "#94a3b8", lineHeight: 1.6 }}>
                  <span style={{ color: "#f59e0b", flexShrink: 0 }}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border p-6" style={{ background: "#0d1530", borderColor: "#1e3a5f" }}>
            <h3 style={{ color: "#ef4444", fontWeight: 700, marginBottom: "1rem", fontSize: "0.95rem" }}>
              Government Exploitation
            </h3>
            <ul className="space-y-2">
              {[
                "U.S. Customs and Border Protection (CBP) admitted purchasing location data from advertising sources.",
                "Data was used to track individuals' movements without obtaining a warrant.",
                "Bypasses Fourth Amendment protections by purchasing commercially-available data.",
                "No judicial oversight or individualized probable cause required.",
                "Raises constitutional concerns about the boundary between commercial tracking and state surveillance.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-sm" style={{ color: "#94a3b8", lineHeight: 1.65 }}>
                  <span style={{ color: "#ef4444", flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Concerns */}
        <div className="rounded-xl border p-6" style={{ background: "#0d1530", borderColor: "#1e3a5f" }}>
          <div className="flex items-center gap-2 mb-4">
            <Eye size={18} color="#8b5cf6" />
            <h3 style={{ color: "#8b5cf6", fontWeight: 700, fontSize: "0.95rem" }}>Why This Matters</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: <Building size={16} color="#ef4444" />, title: "Constitutional Questions", desc: "The 4th Amendment protects against unreasonable searches. Purchasing commercial data to circumvent warrant requirements raises serious constitutional concerns." },
              { icon: <ShoppingBag size={16} color="#f59e0b" />, title: "Commercial-State Pipeline", desc: "A direct pipeline exists between consumer data collected for advertising and government surveillance infrastructure — with no public oversight or transparency." },
              { icon: <Radio size={16} color="#06b6d4" />, title: "Scale of Exposure", desc: "Every ad view broadcasts your location to hundreds of companies simultaneously. This creates a nearly unavoidable surveillance infrastructure embedded in everyday app use." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.3rem" }}>{item.title}</h4>
                  <p style={{ color: "#64748b", fontSize: "0.79rem", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

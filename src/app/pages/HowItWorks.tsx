import { PageHero } from "../components/PageHero";
import { Radio, Wifi, Satellite, MapPin } from "lucide-react";

const methods = [
  {
    icon: <Satellite size={24} color="#06b6d4" />,
    title: "GPS (Global Positioning System)",
    points: [
      "Consists of 30 satellites that constantly broadcast radio signals to devices on Earth.",
      "Devices receive signals from multiple satellites and calculate their exact position based on the time delay between signal transmission and reception.",
      "Provides highly accurate geographic coordinates (latitude & longitude).",
      "Works best outdoors with a clear line of sight to the sky.",
      "Used widely in navigation apps (Google Maps, Apple Maps), fitness trackers, and location-based services.",
    ],
  },
  {
    icon: <Radio size={24} color="#3b82f6" />,
    title: "Cellular Tower Triangulation",
    points: [
      "Uses signals between mobile devices and nearby cell towers to estimate location.",
      "Requires a powered-on device to communicate with at least 3 different cell towers for accuracy.",
      "Each tower measures the signal strength received from the device to estimate approximate distance.",
      "The overlap of coverage areas from multiple towers narrows down the device's location.",
      "Less precise than GPS but works indoors and in urban areas where GPS signals are weak.",
    ],
  },
  {
    icon: <Wifi size={24} color="#8b5cf6" />,
    title: "Wi-Fi & IP Address Tracking",
    points: [
      "Wi-Fi access points have known geographic positions; connecting to them reveals approximate location.",
      "IP addresses can be mapped to general geographic regions (city or region level).",
      "Meta was caught tracking users via IP addresses even after users turned off location services.",
      "Used in conjunction with GPS and cellular data to improve accuracy indoors.",
    ],
  },
  {
    icon: <MapPin size={24} color="#f59e0b" />,
    title: "Passive & Incidental Data Collection",
    points: [
      "Apps may collect location data incidentally — even if location tracking isn't the app's primary purpose.",
      "Check-ins, photo metadata (EXIF), and tagged posts on social media all reveal location.",
      "Accelerometers and gyroscopes can infer movement patterns, even without GPS.",
      "Bluetooth beacons in retail environments track movement through stores.",
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
        subtitle="Modern devices use a combination of satellites, cellular networks, and software to pinpoint and record your movements."
        image="https://images.unsplash.com/photo-1587937533522-b2294fd611f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHUFMlMjBsb2NhdGlvbiUyMHRyYWNraW5nJTIwc2F0ZWxsaXRlJTIwbWFwfGVufDF8fHx8MTc3NTY3MDcyOXww&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-5xl mx-auto px-6 py-14" style={{ color: "#cbd5e1" }}>
        {/* Key Takeaway */}
        <div
          className="rounded-xl p-6 border mb-12"
          style={{ background: "rgba(6,182,212,0.07)", borderColor: "rgba(6,182,212,0.3)" }}
        >
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.98rem" }}>
            <span style={{ color: "#06b6d4", fontWeight: 700 }}>Key Insight: </span>
            A combination of techniques and technologies enable modern devices to determine geographic location while
            recording movements and patterns over time. The biggest problem with location tracking is not how companies
            collect data, but bringing awareness and attention to everyday users.
          </p>
        </div>

        {/* Methods Grid */}
        <h2 style={{ color: "#f1f5f9", fontWeight: 700, marginBottom: "1.5rem", fontSize: "1.3rem" }}>
          Primary Tracking Methods
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {methods.map((method) => (
            <div
              key={method.title}
              className="rounded-xl p-6 border"
              style={{ background: "#0d1530", borderColor: "#1e3a5f" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(6,182,212,0.1)" }}
                >
                  {method.icon}
                </div>
                <h3 style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "1rem" }}>{method.title}</h3>
              </div>
              <ul className="space-y-2">
                {method.points.map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm" style={{ color: "#94a3b8", lineHeight: 1.6 }}>
                    <span style={{ color: "#06b6d4", flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Visual: GPS diagram description */}
        <div
          className="rounded-xl border p-8"
          style={{ background: "#0d1530", borderColor: "#1e3a5f" }}
        >
          <h3 style={{ color: "#f1f5f9", fontWeight: 700, marginBottom: "1rem", fontSize: "1.1rem" }}>
            How GPS Triangulation Works
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { step: "1", title: "Signal Broadcast", desc: "30+ satellites broadcast radio signals continuously from orbit" },
              { step: "2", title: "Delay Calculation", desc: "Your device receives signals and measures time delays from each satellite" },
              { step: "3", title: "Location Fix", desc: "Using geometry, your exact coordinates are calculated from 3+ satellites" },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg"
                  style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)", color: "white", fontWeight: 800 }}
                >
                  {s.step}
                </div>
                <h4 style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.9rem" }}>{s.title}</h4>
                <p style={{ color: "#64748b", fontSize: "0.8rem" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

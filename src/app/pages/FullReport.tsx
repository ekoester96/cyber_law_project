import { FileText, ChevronRight } from "lucide-react";
import { NavLink } from "react-router";

const sections = [
  { path: "/how-it-works", label: "Section 01", title: "How Location Tracking Works", desc: "GPS, cellular triangulation, Wi-Fi, and passive data collection methods." },
  { path: "/data-exploitation", label: "Section 02", title: "Data Exploitation & Price Discrimination", desc: "How consumer location data is monetized through pricing and behavioral targeting." },
  { path: "/legal-cases", label: "Section 03", title: "Key Legal Cases", desc: "Lundy v. Meta — the $37.5 million settlement over covert location tracking." },
  { path: "/health-data-laws", label: "Section 04", title: "Health Data Privacy Laws", desc: "California AB 45 and Washington's My Health My Data Act post-Dobbs." },
  { path: "/ftc-actions", label: "Section 05", title: "FTC Actions Against Data Brokers", desc: "InMarket and Gravy Analytics enforcement actions redefining informed consent." },
  { path: "/national-security", label: "Section 06", title: "National Security Threats", desc: "How Strava's heatmap exposed classified military installations worldwide." },
  { path: "/gov-surveillance", label: "Section 07", title: "Government Surveillance via Advertising", desc: "Real-time bidding and CBP's warrantless location tracking program." },
];

const fullPaperText = `Kirsten Capangpangan, Ethan Koester-Schmidt, Dawson Ulrich
Location Tracking and Privacy: Legal Protections in the Digital Age of Social Media
March 18, 2026

With features like Google Maps or Find My Phone, location tracking has become a core feature of everyday life. Social media apps like Snapchat lets users see what is going on near them, Facebook Marketplace lets users find deals nearby that would have never been discovered otherwise. Location tracking is vital to these services, but uses of location tracking data are not all beneficial to users. This same data can lead to exposure to surveillance, data breaches, and misuse by businesses, hackers, and often even governments. Recent legislation has created meaningful progress in regulating location data collection, however these protections are reactive and leave significant gaps that will continue to expose users to exploitation, risks, and a constant online surveillance state.

A combination of techniques and technologies enable modern devices to determine geographic location while recording movements and patterns over time. A common way this is done is through GPS (Global Positioning System). This system is made up of 30 satellites that constantly broadcast radio signals that devices receive. Through calculation of coordinates based on time delays from signal transmission, the device location is determined. Another method utilizes mobile signal tracking from cellular towers using triangulation to determine the location of a device. Triangulation requires a powered-on device to receive signals from at least 3 different cell towers for the most accurate reading. Each tower uses the signal strength received from the device to determine the approximate location (Electronic Frontier Foundation, 2024).

The biggest problem with location tracking is not how companies collect data but bringing awareness and attention to everyday users. Why should people care? Companies use data to charge more for products based on location and device data. Uber admitted studying whether to charge more when a user's phone battery is low, because when users are desperate, they are more likely to buy an expensive ride (VICE Staff, 2023). Another example is Staples charging different prices for the same products based on ZIP code proximity to competitors (Valentino-DeVries et al., 2012). If customers had no alternatives nearby, they would end up paying more. Data tracking is not only invasive in nature, but in some cases, users are exploited for profit.

Legal cases have caused growing unease about how location tracking data is gathered and used. Lundy, et al. v. Meta Platforms Inc., Case No. 3:18-cv-06793-JD, U.S. District Court for the Northern District of California, a class action lawsuit against Meta, details the company tracking users even after they turn off location services through data like IP addresses (Stempel, 2022). In doing this, Meta was violating their own terms of service. In the end, Meta agreed to a 37.5-million-dollar class action settlement for these actions.

Due to the Dobbs Supreme Court decision that overruled Roe v. Wade many states have moved to protect location data around reproductive health facilities. This creates new obligations for companies operating in the mobile health and media app space. California's AB 45 became effective on January 1st 2026 and prohibits geofencing around in person healthcare facilities for the purpose of tracking or targeting individuals (Hunton Andrews Kurth LLP, 2025). This means that businesses can no longer use proximity based location data to identify and advertise to individuals who visit those locations. Washington has instituted the My Health My Data Act that takes a much broader approach and covers any consumer health data that could reveal health related location patterns (Klosek et al., 2024). A key concern from both laws is that mobile applications can obtain this information incidentally. Even if the application isn't intending to do harm these laws were made to ensure that location data for health reasons can not be shared or collected by third party data brokers.

The FTC's actions against data brokers in 2024 and 2025 mark a significant shift in how informed consent is interpreted under US consumer protection laws. In FTC v. InMarketMedia, LLC (2024) and the FTC's final order against Gravy Analytics, and Venntel (2025), the commission established that hiding data sharing disclosures in the fine print or within lengthy privacy policies does not constitute meaningful consent (Federal Trade Commission, 2024). This means that when users are interacting with health and social media applications, they need to be reasonably notified that their precise location data is being shared and sold to third parties. Using the application of "Unfair Trade Practice" standard in section 5 of the FTC act, a fine print acknowledgment of data sharing is deemed legally insufficient for notifying its users. This decision sets out a new precedent for companies trying to secretly record a customer's location data without their awareness.

Tracking is not just a consumer issue, but a national security and physical safety threat. Strava, a popular fitness app that utilizes GPS to track, record, and analyze fitness activity, is an example of these military vulnerabilities. In 2018, the publication of Strava's global heatmap gave the public the means to pinpoint the movements of soldiers in military bases, submarines, and world leaders' security details (Villa, 2025). In one example a suspicious user seemed to have created fake running data around the locations of Israeli military bases that allowed them to view the local profiles of those in the base, allowing the mapping of personnel and their paths (Villa, 2025). Earlier investigations showed that Strava's heat map highlighted movement patterns around military installations, such as CIA compounds in Somalia, U.S bases in Iraq and Syria, among others (Villa, 2025). This could have potentially devastating effects for service members both foreign and domestically.

According to the Electronic Frontier Foundation, the systems that deliver targeted online advertising are being exploited for government surveillance. These ads broadcast detailed personal information such as location information to companies every time an ad is shown (Cohen & Hongo, 2026). The U.S customs and border protection has admitted to purchasing location data derived from said advertising data to track individual's location without a warrant through a process called real time bidding. Real time bidding happens when a website or app auctions off ad space in milliseconds, which leads to the exposure of GPS coordinates, advertising ID's and other sensitive information to advertisers and data brokers who can then sell the information to government agencies (Cohen & Hongo, 2026). This raises serious concerns about privacy and the unchecked intersection of commercial tracking and state surveillance (Cohen & Hongo, 2026).

In today's world, location tracking is deeply embedded into daily life. Due to the gaps in regulations, the United States can no longer protect consumers from harms such as price discrimination, national security breaches, and sensitive data monetization. The FTC and state legislature are responding when events occur but have yet to be proactive in protecting consumers. Without comprehensive federal privacy legislation to protect consumers from location tracking, people will remain vulnerable on the systems they depend on for work, school, and entertainment.`;

export function FullReport() {
  return (
    <div>
      {/* Hero */}
      <div className="border-b py-16" style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs px-3 py-1 rounded-full border" style={{ color: "var(--uark-blue)", borderColor: "var(--uark-border)", background: "var(--uark-soft-blue)" }}>
              Written Report
            </span>
          </div>
          <h1 style={{ color: "var(--uark-ink)", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}>Full Research Paper</h1>
          <p style={{ color: "var(--uark-muted)", marginTop: "0.5rem" }}>
            Location Tracking and Privacy: Legal Protections in the Digital Age of Social Media
          </p>
          <p style={{ color: "var(--uark-subtle)", fontSize: "0.85rem", marginTop: "0.3rem" }}>
            Kirsten Capangpangan · Ethan Koester-Schmidt · Dawson Ulrich · March 18, 2026
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar: Table of Contents */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border p-5 sticky top-24" style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}>
              <div className="flex items-center gap-2 mb-4">
                <FileText size={16} color="var(--uark-red)" />
                <h3 style={{ color: "var(--uark-red)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Table of Contents
                </h3>
              </div>
              <div className="space-y-2">
                {sections.map((s) => (
                  <NavLink
                    key={s.path}
                    to={s.path}
                    className="flex items-center gap-2 py-2 px-3 rounded-lg no-underline text-sm transition-all group"
                    style={{ color: "var(--uark-muted)" }}
                  >
                    <ChevronRight size={12} color="var(--uark-subtle)" className="flex-shrink-0 opacity-70 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    <div>
                      <div style={{ color: "var(--uark-subtle)", fontSize: "0.7rem" }}>{s.label}</div>
                      <div style={{ color: "var(--uark-ink)", fontSize: "0.82rem" }}>{s.title}</div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Main Paper */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border overflow-hidden" style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}>
              <div className="px-8 py-6 border-b flex items-center justify-between" style={{ borderColor: "var(--uark-border)" }}>
                <div className="flex items-center gap-2">
                  <FileText size={18} color="var(--uark-red)" />
                  <span style={{ color: "var(--uark-ink)", fontWeight: 600 }}>Written Report</span>
                </div>
                <span
                  className="text-xs px-2 py-1 rounded"
                  style={{ background: "var(--uark-soft-red)", color: "var(--uark-red)" }}
                >
                  Second Draft
                </span>
              </div>
              <div className="px-8 py-8">
                {fullPaperText.split("\n\n").map((paragraph, i) => {
                  if (i === 0) {
                    // Header block
                    return (
                      <div key={i} className="text-center mb-10 pb-8 border-b" style={{ borderColor: "var(--uark-border)" }}>
                        {paragraph.split("\n").map((line, j) => (
                          <p key={j} style={{ color: j === 1 ? "var(--uark-ink)" : "var(--uark-muted)", fontWeight: j === 1 ? 700 : 400, fontSize: j === 1 ? "1.1rem" : "0.9rem", lineHeight: 1.7 }}>
                            {line}
                          </p>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <p key={i} style={{ color: "var(--uark-muted)", lineHeight: 1.9, marginBottom: "1.4rem", fontSize: "0.95rem", textIndent: "2rem" }}>
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

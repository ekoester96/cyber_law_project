import { FileText, ChevronRight } from "lucide-react";
import { NavLink } from "react-router";

const sections = [
  { path: "/how-it-works", label: "Section 01", title: "How Location Tracking Works", desc: "GPS, triangulation, Wi-Fi, IP tracking, and pattern-of-life analysis." },
  { path: "/data-exploitation", label: "Section 02", title: "Data Exploitation and Price Discrimination", desc: "How companies turn location and behavior into leverage, wages, and pricing outcomes." },
  { path: "/legal-cases", label: "Section 03", title: "Lundy v. Meta", desc: "A class action case about IP-based location inference after users disabled visible controls." },
  { path: "/health-data-laws", label: "Section 04", title: "Health Data Privacy Laws", desc: "Dobbs-era state responses to healthcare-related location tracking." },
  { path: "/ftc-actions", label: "Section 05", title: "FTC Actions Against Data Brokers", desc: "How federal enforcement changed the legal meaning of meaningful consent." },
  { path: "/benefits-of-tracking", label: "Section 06", title: "Benefits of Tracking", desc: "The paper's counterargument on emergency response, planning, and investigations." },
  { path: "/national-security", label: "Section 07", title: "National Security Threats", desc: "Strava, exposed installations, and operational security risk." },
  { path: "/gov-surveillance", label: "Section 08", title: "Government Surveillance via Advertising", desc: "Real-time bidding as a pipeline into warrantless tracking." },
];

const paperHeader = [
  "Capangpangan, Koester-Schmidt, Ulrich",
  "Location Tracking and Privacy: Legal Protections in the Digital Age of Social Media",
  "Spring 2026",
];

const fullPaperParagraphs = [
  "With features like Google Maps or Find My Phone, location tracking has become a core feature of everyday life. Social media apps can be used to explore the world from the comfort of one's own home. Snapchat allows users to view nearby events and see where friends are in real time, while Facebook Marketplace surfaces local deals that might otherwise go unnoticed. Location tracking is essential to these services; however, its uses are not always beneficial to users. Data collection can lead to data breaches, exposure to surveillance, and misuse by businesses, hackers, and often governments. Recent legislation has created meaningful progress in regulating location data collection; however, these protections are reactive and leave significant gaps that will continue to expose users to exploitation and risks, creating a constant online surveillance state.",
  "Modern mobile devices continuously determine geographic location through a collection of underlying technologies that also log movement and behavioral patterns over time. One of the most widely used methods is the Global Positioning System (GPS), a constellation of approximately 30 satellites that persistently transmit radio signals to Earth. A receiving device calculates its precise longitude and latitude by measuring the time delay between signal transmission and reception. This approach performs best outdoors under open skies, where signals from multiple satellites arrive without obstruction. Accuracy diminishes in urban environments where tall buildings block the line of sight. In those situations, cellular networks provide an alternative positioning method. When a mobile phone is powered on, it continuously communicates with nearby cell towers to maintain network connectivity. By measuring the signal strength and angle of arrival from at least three separate towers, the network can calculate the device's approximate position through geometric triangulation. Tower density varies by network generation: fourth-generation infrastructure typically spaces towers one to two miles apart, while fifth-generation networks deploy small cells as close as a few hundred feet from one another, resulting in significantly finer location resolution. In addition to these two methods, Wi-Fi and IP address tracking are sometimes used in conjunction to improve accuracy indoors. Wi-Fi access points have known geographic positions and connecting to them enables mapping to general geographic regions, at either the city or region level. Analysis of movement patterns based on location data plays a significant role in various fields, including security, logistics, and location-based services. However, there are concerns regarding privacy infringement when data containing information on multiple users is managed by a central system (Kim & Yoo, 2025).",
  "GPS, cell tower triangulation, and Wi-Fi or IP address tracking all strictly track the device in an individual's pocket, but a different category of location surveillance targets the physical world directly. By tracking objects, markers, or features, a complete map of an individual's daily routine can be created with no user action needed. The term 'surveillance' often suggests spyware or malicious hacking, but most modern monitoring does not function this way. Instead, agencies construct what is known as a pattern of life analysis, a process of mapping behavior over time by connecting ordinary data points already available through existing infrastructure. Consider a typical week: an individual visits the same gym every morning, stops at the same gas station, drives to work, and perhaps attends church on Sundays. Individually, each event carries little significance. However, each time a system logs one of these events, it becomes a data point. When license plate readers record vehicle locations, payment processors log purchases, applications register location pings, and cameras capture timestamps, eventually a behavioral map of the individual is formed (Hart & Chen, 2026). These are not shots in the dark; they are patterns. Patterns carry predictive power. Where will the individual go first upon leaving the house? What route will likely be taken? Where will stops occur, and for how long? With enough data, the system not only identifies current location, it begins to predict future ones. This level of surveillance does not require hacking a device; it requires only connecting systems that already exist. Understanding the infrastructure of these surveillance systems is the first step toward personal agency.",
  "Companies can also use location data to charge more or negatively impact users through algorithmic systems. Uber's upfront pricing model has been shown to algorithmically set driver pay based on personal behavioral patterns. The company's CEO admitted in 2024 that they target drivers with specific jobs based on their 'behavioral patterns,' a practice critics label algorithmic wage discrimination (Skelton, 2024). A driver's regular schedule and time and location of work may be used to predict behavior. For example, if a driver consistently works in a specific suburb and is about to end their shift, the algorithm might offer them a trip that takes them back toward home, potentially at a lower rate. It is important to note that Uber officially denies using personal behavioral data to set individual pay levels; however, this case illustrates how the exploitation of location data can be transformed into something used against an individual. The office superstore Staples was found using location data to charge different prices for the same products based on user ZIP code proximity to competitors (Valentino-DeVries et al., 2012). If customers had no alternatives nearby, they would end up paying more. In a final example, Karan et al. (2023) developed a framework to detect differential pricing in non-transparent online markets and applied it to travel booking platforms. The researchers created fake browsing profiles that differed in behavioral signals, such as whether the user had previously searched for the same flight or hotel, then simultaneously queried platforms like Kayak.com to compare offered flight prices. The study found a causal relationship between browsing history and price outcomes. Some browsing profiles were up to ninety percent more likely to be offered a higher price than other profiles viewing the exact same flights at the same time; this is fifteen times higher than a random price difference. Data tracking is not only invasive in nature, but in some cases, users are exploited for profit.",
  "Legal cases have caused growing unease about how location tracking data is gathered and used. Lundy, et al. v. Meta Platforms Inc., Case No. 3:18-cv-06793-JD, U.S. District Court for the Northern District of California, centered on claims that Facebook and Meta continued to determine users' locations even after those users had explicitly turned off Location Services on their mobile devices (Stempel, 2022). Meta allegedly did this by using IP addresses from users' internet connections to infer their whereabouts, while also using the data to enable targeted advertising. In the end, Meta was found to have violated both California privacy law and its own stated privacy policy, which had assured users they could control their location-data collection. Meta agreed to a 37.5-million-dollar class action settlement for these actions, so users who submitted valid claims received up to thirty dollars, enough to fill roughly half of a standard vehicle gas tank, while Meta's annual revenue for the same year exceeded 116 billion dollars (Stempel, 2022).",
  "Due to the Dobbs Supreme Court decision that overruled Roe v. Wade, many states have moved to protect location data around reproductive health facilities. In states where abortion is now restricted or criminalized, location data showing a visit to a reproductive health clinic could be used as evidence in a criminal prosecution against the person who sought care. Data brokers collect and sell location data without meaningful consent (Hassan, 2026). A person's presence at a clinic could be purchased by law enforcement, private investigators, or anti-abortion groups. To counteract this, California's AB 45 became effective on January 1, 2026, and prohibits geofencing around in-person healthcare facilities for the purpose of tracking or targeting individuals (Lazzarotti, 2025). This means that businesses can no longer use proximity-based location data, typically using virtual perimeters around clinics, to push advertisements or collect data on anyone entering that zone. Washington has instituted the My Health My Data Act, which takes a much broader approach and protects any consumer health data that could reveal health-related location patterns (Klosek et al., 2024). A key concern from both laws is that mobile applications can obtain this information incidentally, such as weather apps, fitness trackers, or social media requesting location permissions. Even if the application is not intending to do harm, these laws were made to ensure that location data for health reasons cannot be shared or collected by third-party data brokers.",
  "Understanding how U.S. consumer protection laws are interpreted in practice is essential because enforcement actions, not legislative statutes alone, define the legal boundaries that companies must follow when handling location data. The two separate orders finalized in January 2025 illustrate this directly. In FTC v. InMarket Media, LLC (2024) and the FTC's final order against Gravy Analytics and Venntel (2025), the Commission established that hiding data-sharing disclosures in the fine print or within lengthy privacy policies does not constitute meaningful consent (Hartsfield & Hinson-Greenspan, 2025). In the former, Section 5(a) of the FTC Act was applied. The Commission determined that InMarket's practices, including collecting precise location data from over one hundred million devices without proper consumer notification and retaining that sensitive information for five years, constituted an unfair act or practice. This means that when users are interacting with health and social media applications, companies must reasonably notify users that their precise location data is being shared and sold to third parties. The latter order against Gravy Analytics and Venntel applied the same legal standard to a different context: the sale of precise geolocation data from over one billion smartphones to government agencies without verifiable consumer consent. Both enforcement actions signal that the FTC considers undisclosed collection and monetization of location data a violation regardless of whether the end buyer is a commercial advertiser or a government agency.",
  "At first location tracking might not seem like a bad thing. There are many ways it can be useful, such as helping law enforcement and emergency services locate people during a natural disaster. In a peer-reviewed journal, Unnati Narang and Fernando Luco argue that location tracking and GPS data are also useful to businesses because geolocation data can help plan resource allocation and predict consumer demand (Narang & Luco, 2025). Location tracking can also help law enforcement solve crimes. In another peer-reviewed journal, IoT devices using location data and information sharing were found to help officers catch criminals faster (Geldenhuys, 2025). While location data can have good implementations, the paper argues that most companies are not trying to use it for those good reasons. They can and will use location data to track everything they can about a person and use it against them.",
  "Tracking is not just a consumer issue; it is also a national security and physical safety threat. Strava, a popular fitness app that utilizes GPS to track, record, and analyze fitness activity, illustrates these military vulnerabilities. In 2018, the publication of Strava's global heatmap allowed the public to pinpoint the movements of soldiers in military bases, submarines, and world leaders' security details (Villa, 2025). One investigation revealed that a suspicious user appeared to have created fake running data around Israeli military bases, allowing them to view the local profiles of those in the base and map individuals' paths (Villa, 2025). The heatmap also exposed movement patterns around military installations, such as CIA compounds in Somalia and U.S. bases in Iraq and Syria (Villa, 2025). The exposure of this data could have potentially compromised the safety of service members and intelligence personnel, both foreign and domestic.",
  "According to the Electronic Frontier Foundation, the systems that deliver targeted online advertising are being exploited for government surveillance. These ads broadcast detailed personal information, including precise location data, to a wide network of companies every time an ad loads on a user's screen (Cohen & Hongo, 2026). U.S. Customs and Border Protection has admitted to purchasing this location data to track individuals' movements without obtaining a warrant. The mechanism that enables this surveillance is called real-time bidding. In this process, a website or app auctions off ad space in milliseconds, and during that auction GPS coordinates, advertising identifiers, and other sensitive information are exposed to advertisers and data brokers. Those brokers can then sell the information to government agencies (Cohen & Hongo, 2026). This pipeline raises serious concerns about individual privacy and the unchecked intersection of commercial tracking and state surveillance.",
  "In today's world, location tracking is deeply embedded into daily life. Due to persistent gaps in regulation, the United States can no longer fully protect consumers from harms such as price discrimination, national security breaches, and the monetization of sensitive data. The FTC and state legislatures have responded to individual incidents, but their actions remain reactive rather than proactive. Without comprehensive federal privacy legislation governing location tracking, individuals will remain vulnerable on the systems they depend on for work, school, and entertainment.",
];

export function FullReport() {
  return (
    <div>
      <div className="border-b py-16" style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs px-3 py-1 rounded-full border" style={{ color: "var(--uark-blue)", borderColor: "var(--uark-border)", background: "var(--uark-soft-blue)" }}>
              Final Draft
            </span>
          </div>
          <h1 style={{ color: "var(--uark-ink)", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}>Full Research Paper</h1>
          <p style={{ color: "var(--uark-muted)", marginTop: "0.5rem" }}>
            Location Tracking and Privacy: Legal Protections in the Digital Age of Social Media
          </p>
          <p style={{ color: "var(--uark-subtle)", fontSize: "0.85rem", marginTop: "0.3rem" }}>
            Capangpangan, Koester-Schmidt, Ulrich · Spring 2026
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="rounded-xl border p-5 sticky top-24" style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}>
              <div className="flex items-center gap-2 mb-4">
                <FileText size={16} color="var(--uark-red)" />
                <h3 style={{ color: "var(--uark-red)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Table of Contents
                </h3>
              </div>
              <div className="space-y-2">
                {sections.map((section) => (
                  <NavLink
                    key={section.path}
                    to={section.path}
                    className="flex items-center gap-2 py-2 px-3 rounded-lg no-underline text-sm transition-all group"
                    style={{ color: "var(--uark-muted)" }}
                  >
                    <ChevronRight size={12} color="var(--uark-subtle)" className="flex-shrink-0 opacity-70 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    <div>
                      <div style={{ color: "var(--uark-subtle)", fontSize: "0.7rem" }}>{section.label}</div>
                      <div style={{ color: "var(--uark-ink)", fontSize: "0.82rem" }}>{section.title}</div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl border overflow-hidden" style={{ background: "var(--uark-card-strong)", borderColor: "var(--uark-border)" }}>
              <div className="px-8 py-6 border-b flex items-center justify-between" style={{ borderColor: "var(--uark-border)" }}>
                <div className="flex items-center gap-2">
                  <FileText size={18} color="var(--uark-red)" />
                  <span style={{ color: "var(--uark-ink)", fontWeight: 600 }}>Written Report</span>
                </div>
                <span className="text-xs px-2 py-1 rounded" style={{ background: "var(--uark-soft-red)", color: "var(--uark-red)" }}>
                  Final Draft
                </span>
              </div>
              <div className="px-8 py-8">
                <div className="text-center mb-10 pb-8 border-b" style={{ borderColor: "var(--uark-border)" }}>
                  {paperHeader.map((line, i) => (
                    <p
                      key={i}
                      style={{
                        color: i === 1 ? "var(--uark-ink)" : "var(--uark-muted)",
                        fontWeight: i === 1 ? 700 : 400,
                        fontSize: i === 1 ? "1.1rem" : "0.9rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {fullPaperParagraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    style={{
                      color: "var(--uark-muted)",
                      lineHeight: 1.9,
                      marginBottom: "1.4rem",
                      fontSize: "0.95rem",
                      textIndent: "2rem",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

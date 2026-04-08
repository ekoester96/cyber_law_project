interface PageHeroProps {
  number: string;
  label: string;
  title: string;
  subtitle?: string;
  image: string;
}

export function PageHero({ number, label, title, subtitle, image }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden" style={{ minHeight: "320px" }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.2)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(8,13,26,0.9) 40%, transparent)",
        }}
      />
      <div className="relative max-w-5xl mx-auto px-6 py-20 flex flex-col justify-end" style={{ minHeight: "320px" }}>
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-xs px-3 py-1 rounded-full border"
            style={{ color: "#06b6d4", borderColor: "rgba(6,182,212,0.4)", background: "rgba(6,182,212,0.1)" }}
          >
            {label}
          </span>
          <span style={{ color: "#475569", fontSize: "0.8rem" }}>Section {number}</span>
        </div>
        <h1 style={{ color: "#f1f5f9", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.6rem)", lineHeight: 1.15, maxWidth: "700px" }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ color: "#94a3b8", marginTop: "0.75rem", maxWidth: "600px", fontSize: "1rem" }}>{subtitle}</p>
        )}
      </div>
    </div>
  );
}

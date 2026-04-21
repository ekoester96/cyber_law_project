interface PageHeroProps {
  number: string;
  label: string;
  title: string;
  subtitle?: string;
  image: string;
}

export function PageHero({ number, label, title, subtitle, image }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden" style={{ minHeight: "360px" }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(0.85) brightness(0.6)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(97, 19, 39, 0.96) 0%, rgba(97, 19, 39, 0.88) 34%, rgba(97, 19, 39, 0.55) 58%, rgba(97, 19, 39, 0.22) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(90deg, rgba(0,0,0,0.8), transparent 80%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col justify-end" style={{ minHeight: "360px" }}>
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span
            className="text-xs px-3 py-1 rounded-full border"
            style={{
              color: "white",
              borderColor: "rgba(255,255,255,0.24)",
              background: "rgba(255,255,255,0.08)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 800,
            }}
          >
            {label}
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Section {number}
          </span>
        </div>
        <h1
          style={{
            color: "white",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 4vw, 3.1rem)",
            lineHeight: 1.08,
            maxWidth: "780px",
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              marginTop: "0.95rem",
              maxWidth: "660px",
              fontSize: "1.02rem",
              lineHeight: 1.75,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

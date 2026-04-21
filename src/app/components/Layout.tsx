import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router";
import { Menu, X, Landmark, ChevronDown, ChevronUp } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Research Topics",
    children: [
      { label: "How Location Tracking Works", path: "/how-it-works" },
      { label: "Data Exploitation", path: "/data-exploitation" },
      { label: "Legal Cases", path: "/legal-cases" },
      { label: "Health Data Laws", path: "/health-data-laws" },
      { label: "FTC Actions", path: "/ftc-actions" },
      { label: "National Security", path: "/national-security" },
      { label: "Gov. Surveillance", path: "/gov-surveillance" },
    ],
  },
  { label: "References", path: "/references" },
  { label: "More Resources", path: "/additional-resources" },
  { label: "Full Report", path: "/full-report" },
];

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileTopicsOpen, setMobileTopicsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileTopicsOpen(false);
  }, [location.pathname]);

  const isTopicActive = navItems[1].children?.some((c) => location.pathname === c.path);

  return (
    <div className="min-h-screen flex flex-col" style={{ color: "var(--uark-ink)" }}>
      <div
        className="border-b"
        style={{
          background: "linear-gradient(90deg, var(--uark-red-dark), var(--uark-red))",
          borderColor: "rgba(255,255,255,0.14)",
          color: "rgba(255,255,255,0.88)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-[0.72rem] uppercase tracking-[0.18em]">
          Fayetteville, Arkansas · Student Research Portfolio
        </div>
      </div>

      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(255, 252, 248, 0.94)",
          borderColor: "var(--uark-border)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 8px 30px rgba(97, 19, 39, 0.05)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 gap-6">
            <NavLink to="/" className="flex items-center gap-3 no-underline min-w-0">
              <div
                className="w-11 h-11 rounded-sm flex items-center justify-center shrink-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(157,34,53,0.95), rgba(97,19,39,1))",
                  color: "white",
                  boxShadow: "var(--uark-shadow)",
                }}
              >
                <Landmark size={18} />
              </div>
              <div className="min-w-0">
                <div
                  className="text-[0.68rem] uppercase tracking-[0.24em]"
                  style={{ color: "var(--uark-red)", fontWeight: 900 }}
                >
                  University of Arkansas
                </div>
                <div
                  className="truncate"
                  style={{
                    color: "var(--uark-ink)",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Location Tracking & Privacy Law
                </div>
              </div>
            </NavLink>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key="topics" className="relative">
                    <button
                      onClick={() => setDropdownOpen((p) => !p)}
                      className="flex items-center gap-1 px-3 py-2 rounded text-sm transition-colors cursor-pointer"
                      style={{
                        color: isTopicActive ? "var(--uark-red-dark)" : "var(--uark-muted)",
                        background: isTopicActive ? "var(--uark-soft-red)" : "transparent",
                        fontWeight: isTopicActive ? 700 : 600,
                      }}
                    >
                      {item.label}
                      {dropdownOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    {dropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-64 rounded-2xl border py-2 z-50"
                        style={{
                          background: "rgba(255, 252, 248, 0.98)",
                          borderColor: "var(--uark-border)",
                          boxShadow: "var(--uark-shadow)",
                        }}
                      >
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2 text-sm no-underline transition-colors"
                            style={({ isActive }) => ({
                              color: isActive ? "var(--uark-red-dark)" : "var(--uark-muted)",
                              background: isActive ? "var(--uark-soft-red)" : "transparent",
                              fontWeight: isActive ? 700 : 600,
                            })}
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path!}
                    end={item.path === "/"}
                    className="px-3 py-2 rounded text-sm no-underline transition-colors"
                    style={({ isActive }) => ({
                      color: isActive ? "var(--uark-red-dark)" : "var(--uark-muted)",
                      background: isActive ? "var(--uark-soft-red)" : "transparent",
                      fontWeight: isActive ? 700 : 600,
                    })}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>

            <button
              className="md:hidden p-2 rounded"
              onClick={() => setMobileOpen((p) => !p)}
              style={{
                color: "var(--uark-red-dark)",
                background: "rgba(157,34,53,0.06)",
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            className="md:hidden border-t py-2"
            style={{
              borderColor: "var(--uark-border)",
              background: "rgba(255, 250, 245, 0.98)",
            }}
          >
            <NavLink
              to="/"
              end
              className="block px-6 py-2 text-sm no-underline"
              style={({ isActive }) => ({
                color: isActive ? "var(--uark-red-dark)" : "var(--uark-muted)",
                fontWeight: isActive ? 700 : 600,
              })}
            >
              Home
            </NavLink>
            <button
              className="w-full text-left flex items-center justify-between px-6 py-2 text-sm"
              onClick={() => setMobileTopicsOpen((p) => !p)}
              style={{
                color: isTopicActive ? "var(--uark-red-dark)" : "var(--uark-muted)",
                fontWeight: isTopicActive ? 700 : 600,
              }}
            >
              Research Topics
              {mobileTopicsOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {mobileTopicsOpen &&
              navItems[1].children?.map((child) => (
                <NavLink
                key={child.path}
                to={child.path}
                className="block pl-10 pr-6 py-2 text-sm no-underline"
                style={({ isActive }) => ({
                  color: isActive ? "var(--uark-red-dark)" : "var(--uark-muted)",
                  fontWeight: isActive ? 700 : 600,
                })}
              >
                {child.label}
              </NavLink>
              ))}
            <NavLink
              to="/references"
              className="block px-6 py-2 text-sm no-underline"
              style={({ isActive }) => ({
                color: isActive ? "var(--uark-red-dark)" : "var(--uark-muted)",
                fontWeight: isActive ? 700 : 600,
              })}
            >
              References
            </NavLink>
            <NavLink
              to="/additional-resources"
              className="block px-6 py-2 text-sm no-underline"
              style={({ isActive }) => ({
                color: isActive ? "var(--uark-red-dark)" : "var(--uark-muted)",
                fontWeight: isActive ? 700 : 600,
              })}
            >
              More Resources
            </NavLink>
            <NavLink
              to="/full-report"
              className="block px-6 py-2 text-sm no-underline"
              style={({ isActive }) => ({
                color: isActive ? "var(--uark-red-dark)" : "var(--uark-muted)",
                fontWeight: isActive ? 700 : 600,
              })}
            >
              Full Report
            </NavLink>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer
        className="border-t mt-10"
        style={{
          borderColor: "var(--uark-border)",
          background:
            "linear-gradient(180deg, rgba(221,220,197,0.45), rgba(255,252,248,0.95))",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div
              className="text-[0.72rem] uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--uark-red)", fontWeight: 900 }}
            >
              Cybersecurity & Privacy Law
            </div>
            <p style={{ color: "var(--uark-ink)", fontSize: "1.05rem", fontWeight: 700 }}>
              Location Tracking and Privacy in the Digital Age
            </p>
            <p className="mt-2 max-w-2xl" style={{ color: "var(--uark-muted)", lineHeight: 1.75 }}>
              A University of Arkansas student research project examining how location data moves through platforms,
              markets, and legal systems.
            </p>
          </div>
          <div className="md:text-right">
            <p style={{ color: "var(--uark-red-dark)", fontWeight: 700 }}>Spring 2026</p>
            <p className="mt-2" style={{ color: "var(--uark-muted)" }}>
              Kirsten Capangpangan · Ethan Koester-Schmidt · Dawson Ulrich
            </p>
            <p className="mt-2 text-sm" style={{ color: "var(--uark-subtle)" }}>
              Designed with University of Arkansas-inspired colors and typography.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

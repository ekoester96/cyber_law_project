import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router";
import { Menu, X, Shield, ChevronDown, ChevronUp } from "lucide-react";

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
  }, [location.pathname]);

  const isTopicActive = navItems[1].children?.some((c) => location.pathname === c.path);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#080d1a", color: "#e2e8f0" }}>
      {/* Top Bar */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ background: "rgba(8,13,26,0.95)", borderColor: "#1e3a5f", backdropFilter: "blur(10px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 no-underline">
              <div
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)" }}
              >
                <Shield size={16} color="white" />
              </div>
              <span style={{ color: "#06b6d4", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                PRIVACY<span style={{ color: "#3b82f6" }}>&</span>LAW
              </span>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key="topics" className="relative">
                    <button
                      onClick={() => setDropdownOpen((p) => !p)}
                      className="flex items-center gap-1 px-3 py-2 rounded text-sm transition-colors cursor-pointer"
                      style={{
                        color: isTopicActive ? "#06b6d4" : "#94a3b8",
                        background: isTopicActive ? "rgba(6,182,212,0.1)" : "transparent",
                      }}
                    >
                      {item.label}
                      {dropdownOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    {dropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-1 w-56 rounded-lg border py-1 z-50"
                        style={{ background: "#0d1530", borderColor: "#1e3a5f" }}
                      >
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2 text-sm no-underline transition-colors"
                            style={({ isActive }) => ({
                              color: isActive ? "#06b6d4" : "#94a3b8",
                              background: isActive ? "rgba(6,182,212,0.1)" : "transparent",
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
                      color: isActive ? "#06b6d4" : "#94a3b8",
                      background: isActive ? "rgba(6,182,212,0.1)" : "transparent",
                    })}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 rounded"
              onClick={() => setMobileOpen((p) => !p)}
              style={{ color: "#94a3b8" }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t py-2" style={{ borderColor: "#1e3a5f", background: "#0d1530" }}>
            <NavLink
              to="/"
              end
              className="block px-6 py-2 text-sm no-underline"
              style={({ isActive }) => ({ color: isActive ? "#06b6d4" : "#94a3b8" })}
            >
              Home
            </NavLink>
            <button
              className="w-full text-left flex items-center justify-between px-6 py-2 text-sm"
              onClick={() => setMobileTopicsOpen((p) => !p)}
              style={{ color: isTopicActive ? "#06b6d4" : "#94a3b8" }}
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
                  style={({ isActive }) => ({ color: isActive ? "#06b6d4" : "#94a3b8" })}
                >
                  {child.label}
                </NavLink>
              ))}
            <NavLink
              to="/references"
              className="block px-6 py-2 text-sm no-underline"
              style={({ isActive }) => ({ color: isActive ? "#06b6d4" : "#94a3b8" })}
            >
              References
            </NavLink>
            <NavLink
              to="/additional-resources"
              className="block px-6 py-2 text-sm no-underline"
              style={({ isActive }) => ({ color: isActive ? "#06b6d4" : "#94a3b8" })}
            >
              More Resources
            </NavLink>
            <NavLink
              to="/full-report"
              className="block px-6 py-2 text-sm no-underline"
              style={({ isActive }) => ({ color: isActive ? "#06b6d4" : "#94a3b8" })}
            >
              Full Report
            </NavLink>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        className="border-t py-6 text-center text-sm"
        style={{ borderColor: "#1e3a5f", color: "#475569", background: "#080d1a" }}
      >
        <p>Cybersecurity & Privacy Law Portfolio · Spring 2026</p>
        <p className="mt-1">Kirsten Capangpangan · Ethan Koester-Schmidt · Dawson Ulrich</p>
      </footer>
    </div>
  );
}

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function StickySidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/docs/glasscard", label: "🧊 Glass Cards" },
    { to: "/docs/hero", label: "🚀 Hero Section", disabled: true },
    { to: "/docs/cards", label: "🃏 Cards", disabled: true },
    { to: "/docs/forms", label: "📝 Forms", disabled: true },
    { to: "/docs/tables", label: "📊 Tables", disabled: true },
    { to: "/docs/buttons", label: "🔘 Buttons", disabled: true },
    { to: "/docs/modals", label: "📦 Modals", disabled: true },
    { to: "/docs/sliders", label: "🎚 Sliders", disabled: true },
    { to: "/docs/alerts", label: "⚠️ Alerts", disabled: true },
    { to: "/docs/footers", label: "🦶 Footers", disabled: true },
    { to: "/docs/navbars", label: "🧭 Navbars", disabled: true },
    { to: "/docs/gallery", label: "🖼 Gallery", disabled: true },
    { to: "/docs/loaders", label: "⏳ Loaders", disabled: true },
    { to: "/docs/tabs", label: "📑 Tabs", disabled: true },
    { to: "/docs/timeline", label: "📅 Timeline", disabled: true },
  ];

  const handleLinkClick = (e, link) => {
    if (link.disabled) {
      e.preventDefault();
      toast.info("🚧 This section is under construction!");
    } 
  };

  return (
    <>
      {/* Sidebar */}
      <div
        style={{ zIndex: 667 }}
        className={`fixed top-0 left-0 h-full w-64 bg-[#171717] border-r border-gray-500 text-white p-4 transition-transform duration-300 custom-scroll ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <Link to={"/"}>
            <img
              src="/logorb.png"
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
          </Link>
        </div>

        <h2 className="text-4xl font-bold mb-4 ">Components</h2>

        <ul className="space-y-2 overflow-y-auto max-h-[80vh] pr-2">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                onClick={(e) => handleLinkClick(e, link)}
                className={`block px-2 py-1 rounded transition duration-200 ${
                  link.disabled
                    ? "text-gray-400 cursor-not-allowed"
                    : "hover:underline hover:scale-105"
                }`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-1/2 -translate-y-1/2 z-[668] p-2 rounded-r-md bg-[#45454590] text-white border-l border-gray-500 transition-all duration-300 ${
          isOpen ? "left-64" : "-left-2.5"
        }`}
      >
        {isOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>
    </>
  );
}

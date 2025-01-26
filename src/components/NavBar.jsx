import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.jpg";

const MenuIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "/", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#programs", label: "Programs", id: "programs" },
    { href: "#donate", label: "Donate", id: "donate" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.id);
      const currentSection = sections.find((section) => {
        if (section === "home") return window.scrollY < 100;
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/home" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                className="h-12 w-12 rounded-sm transition-transform duration-300 group-hover:scale-110"
                src={Logo}
                alt="Logo"
              />
              <div className="absolute inset-0 bg-emerald-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
            </div>
            <span
              className={`font-bold text-lg ${
                scrolled ? "text-emerald-800" : "text-white"
              }`}
            >
              Green Janitors
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${
                  scrolled
                    ? "text-gray-600 hover:text-emerald-600"
                    : "text-white hover:text-emerald-400"
                } ${activeSection === item.id ? "font-semibold" : ""}`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    scrolled ? "bg-emerald-600" : "bg-emerald-400"
                  }`}
                />
              </a>
            ))}
            <button
              href="#donate"
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "bg-white text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              <a href="#donate">Volunteer</a>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled
                ? "text-gray-600 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white/90 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`block px-4 py-2 rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors duration-300 ${
                activeSection === item.id
                  ? "bg-emerald-50 text-emerald-600 font-semibold"
                  : ""
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            href="#donate"
            className="w-full mt-4 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300"
          >
            Volunteer
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

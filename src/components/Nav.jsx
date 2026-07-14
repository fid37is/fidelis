import { useEffect, useState } from "react";
import { Sun, Moon, Linkedin, Github } from "lucide-react";
import { profile } from "../data";
import useTheme from "../hooks/useTheme";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#blog", label: "Blog" },
  { href: "#approach", label: "Approach" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <a className="nav-mark" href="#top">
        FA<span className="nav-mark-dot">.</span>
      </a>
      <nav className="nav-links">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <a
          className="icon-btn"
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn - @fid37is"
          title="LinkedIn - @fid37is"
        >
          <Linkedin size={16} />
        </a>
        <a
          className="icon-btn"
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub - @fid37is"
          title="GitHub - @fid37is"
        >
          <Github size={16} />
        </a>
        <button
          type="button"
          className="icon-btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <a className="btn btn-ghost nav-cta" href={`mailto:${profile.email}`}>
          Say hello
        </a>
      </div>
    </header>
  );
}

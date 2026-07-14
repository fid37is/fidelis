import {
  ArrowUpRight,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Facebook,
  Rss,
} from "lucide-react";
import { profile, socials } from "../data";
import Reveal from "./Reveal";

const ICON_MAP = { Linkedin, Github, Twitter, Instagram, Facebook, Rss };

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <Reveal as="p" className="eyebrow">
        Get in touch
      </Reveal>
      <Reveal as="h2" className="section-title" delay={40}>
        Open to product roles &amp; conversations
      </Reveal>
      <Reveal as="p" className="section-lede" delay={80}>
        The fastest way to reach me is email. I read everything. Or find me
        anywhere below - same handle everywhere.
      </Reveal>

      <Reveal as="div" className="contact-actions" delay={120}>
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
          {profile.phone}
        </a>
      </Reveal>

      <Reveal as="div" className="linktree" delay={160}>
        {socials.map((s, i) => {
          const Icon = ICON_MAP[s.icon];
          return (
            <Reveal
              key={s.key}
              as="a"
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="glass-card linktree-row"
              delay={i * 50}
            >
              <span className="linktree-icon">
                {Icon && <Icon size={17} />}
              </span>
              <span className="linktree-text">
                <span className="linktree-label">{s.label}</span>
                <span className="linktree-handle mono">{s.handle}</span>
              </span>
              <ArrowUpRight size={16} className="linktree-arrow" />
            </Reveal>
          );
        })}
      </Reveal>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="mono">Built with React · Vite</span>
      </footer>
    </section>
  );
}

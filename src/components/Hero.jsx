import { profile } from "../data";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <Reveal className="hero-status" as="div" delay={0}>
        <span className="dot" />
        Available for new roles · {profile.location}
      </Reveal>

      <Reveal as="h1" className="hero-title" delay={80}>
        {profile.name}
      </Reveal>

      <Reveal as="p" className="hero-role" delay={140}>
        {profile.role} <span className="hero-role-tag">{profile.tagline}</span>
      </Reveal>

      <Reveal as="p" className="hero-subline" delay={200}>
        {profile.subline}
      </Reveal>

      <Reveal as="div" className="hero-actions" delay={260}>
        <a className="btn btn-primary" href="#work">
          View the work
        </a>
        <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </Reveal>

      <Reveal as="div" className="hero-meta" delay={320}>
        <div className="hero-meta-item">
          <span className="hero-meta-label">Experience</span>
          <span className="hero-meta-value">{profile.years}</span>
        </div>
        <div className="hero-meta-item">
          <span className="hero-meta-label">Base</span>
          <span className="hero-meta-value">{profile.location}</span>
        </div>
        <div className="hero-meta-item">
          <span className="hero-meta-label">Focus</span>
          <span className="hero-meta-value">Product · AI · Strategy</span>
        </div>
      </Reveal>
    </section>
  );
}

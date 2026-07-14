import { experience, certifications, education } from "../data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <Reveal as="p" className="eyebrow">
        Track record
      </Reveal>
      <Reveal as="h2" className="section-title" delay={40}>
        Experience
      </Reveal>

      <div className="timeline">
        {experience.map((role, i) => (
          <Reveal
            key={role.role + role.period}
            as="div"
            className="timeline-item"
            delay={i * 70}
          >
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content glass-card">
              <div className="timeline-head">
                <h3>{role.role}</h3>
                <span className="mono timeline-period">{role.period}</span>
              </div>
              <p className="timeline-org mono">{role.org}</p>
              <ul>
                {role.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="credentials-grid">
        <Reveal as="div" className="certs" delay={120}>
          <span className="eyebrow">Certifications</span>
          <div className="certs-list">
            {certifications.map((c) => (
              <span key={c} className="stack-chip">
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal as="div" className="certs" delay={160}>
          <span className="eyebrow">Education</span>
          <div className="certs-list">
            {education.map((e) => (
              <span key={e} className="stack-chip">
                {e}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

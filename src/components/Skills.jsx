import { skills } from "../data";
import Reveal from "./Reveal";

export default function Skills() {
  const groups = Object.entries(skills);

  return (
    <section className="section" id="skills">
      <Reveal as="p" className="eyebrow">
        Toolkit
      </Reveal>
      <Reveal as="h2" className="section-title" delay={40}>
        Skills
      </Reveal>

      <div className="skills-grid">
        {groups.map(([group, items], i) => (
          <Reveal
            key={group}
            as="div"
            className="glass-card skills-card"
            delay={i * 60}
          >
            <h3 className="mono skills-group">{group}</h3>
            <div className="skills-chips">
              {items.map((s) => (
                <span key={s} className="stack-chip">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

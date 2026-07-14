import { approach } from "../data";
import Reveal from "./Reveal";

export default function Approach() {
  return (
    <section className="section" id="approach">
      <Reveal as="p" className="eyebrow">
        How I work
      </Reveal>
      <Reveal as="h2" className="section-title" delay={40}>
        AI instincts, founder discipline
      </Reveal>
      <Reveal as="p" className="section-lede" delay={80}>
        A decade in QA and product delivery before founding three SaaS
        platforms. That combination shapes how I work - validate with data,
        ship in small increments, stay close to what's actually being built.
      </Reveal>

      <div className="approach-grid">
        {approach.map((item, i) => (
          <Reveal
            key={item.title}
            as="div"
            className="glass-card approach-card"
            delay={120 + i * 80}
          >
            <span className="approach-index">{String(i + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

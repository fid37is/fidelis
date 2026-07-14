import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { work, categories } from "../data";
import SegmentedSlider from "./SegmentedSlider";
import Reveal from "./Reveal";

export default function Work() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? work : work.filter((w) => w.category === active);

  return (
    <section className="section" id="work">
      <Reveal as="p" className="eyebrow">
        Selected work
      </Reveal>
      <Reveal as="h2" className="section-title" delay={40}>
        Product work, case studies &amp; teardowns
      </Reveal>
      <Reveal as="p" className="section-lede" delay={80}>
        Filter by type. Ordered roughly from work done inside a team to work
        published independently.
      </Reveal>

      <Reveal delay={120}>
        <SegmentedSlider options={categories} active={active} onChange={setActive} />
      </Reveal>

      <div className="work-grid">
        {filtered.map((item, i) => (
          <Reveal
            key={item.id}
            as={item.link ? "a" : "article"}
            href={item.link || undefined}
            target={item.link ? "_blank" : undefined}
            rel={item.link ? "noreferrer" : undefined}
            className="glass-card work-card"
            delay={i * 70}
          >
            <div className="work-card-top">
              <span className="pill">{item.tag}</span>
              <span className="mono work-period">{item.period}</span>
            </div>

            <h3>{item.title}</h3>
            <p className="work-org mono">{item.org}</p>
            <p className="work-summary">{item.summary}</p>

            <div className="work-metrics">
              {item.metrics.map((m) => (
                <span key={m} className="metric">
                  {m}
                </span>
              ))}
            </div>

            <div className="work-stack">
              {item.stack.map((s) => (
                <span key={s} className="stack-chip">
                  {s}
                </span>
              ))}
            </div>

            {item.link && (
              <span className="blog-read-more">
                Visit live site <ArrowUpRight size={14} />
              </span>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

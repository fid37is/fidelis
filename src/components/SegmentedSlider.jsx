import { useEffect, useRef, useState } from "react";

export default function SegmentedSlider({ options, active, onChange }) {
  const trackRef = useRef(null);
  const btnRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const measure = () => {
    const track = trackRef.current;
    const btn = btnRefs.current[active];
    if (!track || !btn) return;
    const trackBox = track.getBoundingClientRect();
    const btnBox = btn.getBoundingClientRect();
    setIndicator({
      left: btnBox.left - trackBox.left,
      width: btnBox.width,
    });
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div className="segmented" ref={trackRef} role="tablist" aria-label="Filter work by type">
      <span
        className="segmented-indicator"
        style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width }}
        aria-hidden="true"
      />
      {options.map((opt) => (
        <button
          key={opt.key}
          ref={(el) => (btnRefs.current[opt.key] = el)}
          role="tab"
          aria-selected={active === opt.key}
          className={`segmented-btn ${active === opt.key ? "is-active" : ""}`}
          onClick={(e) => {
            onChange(opt.key);
            e.currentTarget.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest",
            });
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

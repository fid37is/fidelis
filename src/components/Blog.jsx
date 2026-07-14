import { ArrowUpRight, Rss } from "lucide-react";
import { profile } from "../data";
import useMediumPosts from "../hooks/useMediumPosts";
import Reveal from "./Reveal";

function BlogSkeleton() {
  return (
    <div className="work-grid">
      {[0, 1, 2].map((i) => (
        <div key={i} className="glass-card blog-card blog-skeleton" aria-hidden="true">
          <div className="skeleton-line skeleton-date" />
          <div className="skeleton-line skeleton-title" />
          <div className="skeleton-line skeleton-title short" />
          <div className="skeleton-line skeleton-body" />
          <div className="skeleton-line skeleton-body" />
        </div>
      ))}
    </div>
  );
}

function BlogEmpty() {
  return (
    <div className="glass-card blog-empty">
      <Rss size={20} className="blog-empty-icon" />
      <p>
        Couldn't load posts right now - Medium's feed may be rate-limiting or
        temporarily unavailable. You can still read everything directly on
        Medium.
      </p>
      <a
        className="btn btn-ghost"
        href={profile.links.medium}
        target="_blank"
        rel="noreferrer"
      >
        Visit @{profile.username} on Medium
        <ArrowUpRight size={15} />
      </a>
    </div>
  );
}

export default function Blog() {
  const { status, posts } = useMediumPosts(profile.username, 6);

  return (
    <section className="section" id="blog">
      <Reveal as="p" className="eyebrow">
        Writing
      </Reveal>
      <Reveal as="h2" className="section-title" delay={40}>
        Latest from Medium
      </Reveal>
      <Reveal as="p" className="section-lede" delay={80}>
        Pulled live from @{profile.username} on Medium.
      </Reveal>

      {status === "loading" && <BlogSkeleton />}

      {status === "error" && <BlogEmpty />}

      {status === "ok" && posts.length === 0 && <BlogEmpty />}

      {status === "ok" && posts.length > 0 && (
        <div className="work-grid">
          {posts.map((post, i) => (
            <Reveal
              key={post.link}
              as="a"
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="glass-card blog-card"
              delay={i * 70}
            >
              <div className="blog-card-top">
                <span className="mono work-period">{post.date}</span>
                <span className="mono work-period">{post.readTime} min read</span>
              </div>
              <h3>{post.title}</h3>
              <p className="work-summary">{post.snippet}</p>
              {post.categories.length > 0 && (
                <div className="work-stack">
                  {post.categories.map((c) => (
                    <span key={c} className="stack-chip">
                      {c}
                    </span>
                  ))}
                </div>
              )}
              <span className="blog-read-more">
                Read on Medium <ArrowUpRight size={14} />
              </span>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}

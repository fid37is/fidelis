import { useEffect, useState } from "react";

const RSS2JSON_ENDPOINT = "https://api.rss2json.com/v1/api.json";

// Strips HTML tags and trims a Medium RSS <description> down to a short
// plain-text snippet for the card preview.
function toSnippet(html, maxLength = 160) {
  if (!html) return "";
  const text = html
    .replace(/<figure[\s\S]*?<\/figure>/gi, "") // Medium embeds a leading image in <figure>
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;|&rsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&#8211;|&ndash;/g, "–")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, "") + "…";
}

function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

// Rough words-per-minute estimate since Medium's RSS doesn't include one.
function estimateReadTime(html) {
  const words = (html || "").replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export default function useMediumPosts(username, limit = 6) {
  const [state, setState] = useState({ status: "loading", posts: [] });

  useEffect(() => {
    if (!username) {
      setState({ status: "error", posts: [] });
      return;
    }

    let cancelled = false;
    const feedUrl = `https://medium.com/feed/@${username}`;
    const url = `${RSS2JSON_ENDPOINT}?rss_url=${encodeURIComponent(feedUrl)}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`rss2json responded ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        if (data.status !== "ok" || !Array.isArray(data.items)) {
          throw new Error("Unexpected feed response");
        }
        const posts = data.items.slice(0, limit).map((item) => ({
          title: item.title,
          link: item.link,
          date: formatDate(item.pubDate),
          snippet: toSnippet(item.description || item.content),
          categories: (item.categories || []).slice(0, 3),
          readTime: estimateReadTime(item.description || item.content),
        }));
        setState({ status: "ok", posts });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error", posts: [] });
      });

    return () => {
      cancelled = true;
    };
  }, [username, limit]);

  return state;
}

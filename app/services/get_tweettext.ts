import * as cheerio from "cheerio";

export default async function getTweet(tweetUrl: string) {
  try {
    const apiUrl = `https://publish.twitter.com/oembed?url=${encodeURIComponent(
      tweetUrl
    )}`;

    const r = await fetch(apiUrl);
    const d = await r.json();

    if (d.html) {
      const $ = cheerio.load(d.html);

      const tweet = $("blockquote p").text()?.trim() || null;
      const usernameRaw = $("blockquote")
        .text()
        .split("@")[1]
        ?.split(")")[0]
        ?.trim();

      const username = usernameRaw || null;

      return { tweet, username };
    }

    // fallback (if oEmbed fails)
    const pageRes = await fetch(tweetUrl, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    const html = await pageRes.text();
    const $ = cheerio.load(html);

    const tweet =
      $('meta[property="og:description"]').attr("content")?.trim() || null;
    const username =
      $('meta[property="og:title"]').attr("content")?.split("(")[1]?.split(")")[0] || null;

    return { tweet, username };
  } catch (err) {
    console.error("Tweet fetch error:", err);
    return { tweet: null, username: null };
  }
}

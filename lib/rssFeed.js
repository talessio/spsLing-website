import parse from "rss-to-json";

export async function rss() {
  const rss = await parse("https://anchor.fm/s/6580bb68/podcast/rss");
  return rss;
}

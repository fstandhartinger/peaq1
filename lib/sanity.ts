import { createClient } from "@sanity/client";
import { home, ioportal, nav, popularPosts, posts, sam4h, site } from "../data/content";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION || "2024-01-01";
const token = process.env.SANITY_TOKEN;

export const sanityClient = projectId && dataset
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      token
    })
  : null;

const siteQuery = `{
  "site": *[_type == "siteSettings"][0],
  "home": *[_type == "home"][0],
  "sam4h": *[_type == "solution" && slug.current == "sam4h"][0],
  "ioportal": *[_type == "solution" && slug.current == "ioportal"][0],
  "posts": *[_type == "post"]|order(publishedAt desc),
  "nav": *[_type == "navigation"][0].items,
  "popularPosts": *[_type == "post" && featured == true]|order(publishedAt desc)[0...3]
}`;

export async function fetchFromSanity<T>(query: string, params: Record<string, unknown> = {}) {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<T>(query, params);
  } catch {
    return null;
  }
}

export async function getSiteContent() {
  const remote = await fetchFromSanity<{
    site?: typeof site;
    home?: typeof home;
    sam4h?: typeof sam4h;
    ioportal?: typeof ioportal;
    posts?: typeof posts;
    nav?: typeof nav;
    popularPosts?: typeof popularPosts;
  }>(siteQuery);

  return {
    site: remote?.site ?? site,
    home: remote?.home ?? home,
    sam4h: remote?.sam4h ?? sam4h,
    ioportal: remote?.ioportal ?? ioportal,
    posts: remote?.posts ?? posts,
    nav: remote?.nav ?? nav,
    popularPosts: remote?.popularPosts ?? popularPosts
  };
}

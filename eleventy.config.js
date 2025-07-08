export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addPassthroughCopy("favicon.png");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addFilter('normalizedUrl', url => {
    return url.replace("sinara-web", "")
  })
};
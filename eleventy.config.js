export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./assets/images");
  eleventyConfig.addPassthroughCopy("favicon.png");
};
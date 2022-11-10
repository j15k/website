const eleventySass = require("eleventy-sass");

module.exports = (eleventyConfig) => {

  eleventyConfig.addPassthroughCopy("_src/assets/fonts");
  eleventyConfig.addPassthroughCopy("_src/assets/graphics");
  eleventyConfig.addPassthroughCopy("_src/assets/scripts");

  eleventyConfig.addPlugin(eleventySass);

  return  {
    dir: {
      input: "_src",
      output: "_site",
      data: "_data"
    }
  };

};
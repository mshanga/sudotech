module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/vendor");
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
  };
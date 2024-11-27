import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function (eleventyConfig) {
  eleventyConfig.ignores.add("./README.md");
  eleventyConfig.addWatchTarget("src/_components/**/*.css");
  eleventyConfig.addPlugin(pluginWebc, {
    components: ["src/_components/**/*.webc"],
  });
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });

  return {
    markdownTemplateEngine: "webc",
    htmlTemplateEngine: "webc",
    dir: {
      input: 'src',
    },
  };
};
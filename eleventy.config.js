import pluginWebc from "@11ty/eleventy-plugin-webc";
import MarkdownIt from "markdown-it";
import DOMPurify from "isomorphic-dompurify";
import 'dotenv/config'
import Stripe from 'stripe';

export default function (eleventyConfig) {
  eleventyConfig.ignores.add("./README.md");
  eleventyConfig.addWatchTarget("src/_components/**/*.css");
  eleventyConfig.addPlugin(pluginWebc, {
    components: ["src/_components/**/*.webc"],
  });
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });

  eleventyConfig.addFilter("markdown", function (content, allowedTags = []) {
    const unsafeHtml = new MarkdownIt({ html: true }).render(content || "");
    return DOMPurify.sanitize(unsafeHtml, { ALLOWED_TAGS: ['span', 'strong', 'em', ...allowedTags] });
  });
  eleventyConfig.addFilter("stripe", function () {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    return stripe;
  });

  return {
    markdownTemplateEngine: "webc",
    htmlTemplateEngine: "webc",
    dir: {
      input: 'src',
    },
  };
};
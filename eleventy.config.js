
import pluginWebc from "@11ty/eleventy-plugin-webc";
import MarkdownIt from "markdown-it";
import DOMPurify from "isomorphic-dompurify";
import 'dotenv/config'
import Stripe from 'stripe';
import fs from 'fs';
import path from 'path';

export default function (eleventyConfig) {
  eleventyConfig.ignores.add("./README.md");
  eleventyConfig.addWatchTarget(
    "src/_components/**/*.css",
    "src/_models/**/*.ts",
  );
  eleventyConfig.addPlugin(pluginWebc, {
    components: ["src/_components/**/*.webc"],
  });
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addFilter("markdown", function (content, allowedTags = []) {
    const unsafeHtml = new MarkdownIt({ html: true }).render(content || "");
    return DOMPurify.sanitize(unsafeHtml, { ALLOWED_TAGS: ['span', 'strong', 'em', ...allowedTags] });
  });
  eleventyConfig.addFilter("stripe", function () {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    return stripe;
  });

  eleventyConfig.addJavaScriptFunction("read", function (name) {
    const dataPath = path.join(process.cwd(), 'data', `${name}.json`);
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  });

  eleventyConfig.addJavaScriptFunction("anchor_id_for", function (object) {
    return object?.heading?.toLowerCase()?.replace(/ /g, '-') || '';;
  });

  eleventyConfig.addJavaScriptFunction("forObservabilityWorkshop", function (p) {
    return p.product_line.id === 'observability_workshop_1';
  });
  eleventyConfig.addJavaScriptFunction("priceAscending", function (a, b) {
    return a.price - b.price;
  });
  eleventyConfig.addJavaScriptFunction("priceDescending", function (a, b) {
    return b.price - a.price;
  });


  return {
    markdownTemplateEngine: "webc",
    htmlTemplateEngine: "webc",
    dir: {
      input: 'src',
    },
  };
};
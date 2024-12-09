var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.ts
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_types = require("@stackbit/types");
var import_cms_git = require("@stackbit/cms-git");

// src/_models/page.ts
var Page = {
  name: "Page",
  type: "page",
  urlPath: "/{slug}",
  filePath: "src/{slug}.md",
  hideContent: false,
  fields: [
    {
      type: "list",
      name: "blocks",
      label: "Blocks",
      description: "The blocks to be arranged in the page",
      items: {
        type: "model",
        models: ["MarketingHeroCoverImageWithCtas"]
      }
    }
  ]
};

// src/_models/MarketingHeroCoverImageWithCtas.ts
var MarketingHeroCoverImageWithCtas = {
  type: "object",
  name: "MarketingHeroCoverImageWithCtas",
  fields: [
    {
      type: "boolean",
      name: "hide_from_nav",
      label: "Hide From Navigation",
      default: true
    },
    {
      type: "string",
      name: "heading",
      label: "Heading",
      required: true
    },
    {
      type: "string",
      name: "subheading",
      label: "Subheading",
      required: true
    },
    {
      type: "object",
      name: "left",
      required: true,
      fields: [
        {
          type: "string",
          name: "heading",
          label: "Heading",
          required: true
        },
        {
          type: "string",
          name: "subheading",
          label: "Subheading",
          required: true
        },
        {
          type: "object",
          name: "cta",
          fields: [
            {
              type: "string",
              name: "text",
              label: "Button Text",
              required: true
            },
            {
              type: "string",
              name: "url",
              label: "Button URL",
              required: true
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "right",
      required: true,
      fields: [
        {
          type: "string",
          name: "heading",
          label: "Heading",
          required: true
        },
        {
          type: "string",
          name: "subheading",
          label: "Subheading",
          required: true
        },
        {
          type: "object",
          name: "cta",
          fields: [
            {
              type: "string",
              name: "text",
              label: "Button Text",
              required: true
            },
            {
              type: "string",
              name: "url",
              label: "Button URL",
              required: true
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "image",
      fields: [
        {
          type: "string",
          name: "url",
          label: "Image URL",
          required: true
        }
      ]
    }
  ]
};

// stackbit.config.ts
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  devCommand: "./node_modules/.bin/eleventy && ./node_modules/.bin/tailwindcss -i src/tailwind.css -c tailwind.config.js -o _site/styles.css && ./node_modules/.bin/eleventy --serve --port {PORT} --incremental",
  experimental: {
    ssg: {
      name: "eleventy",
      logPatterns: {
        up: ["Server at"]
      }
    }
  },
  nodeVersion: "20",
  contentSources: [
    new import_cms_git.GitContentSource({
      rootPath: "/Users/johngallagher/Documents/Projects/modular_cms",
      contentDirs: ["src"],
      models: [
        Page,
        MarketingHeroCoverImageWithCtas
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/"
      }
    })
  ],
  modelExtensions: [
    { name: "Page", type: "page", urlPath: "/{slug}" }
  ],
  pagesDir: "src",
  sidebarButtons: []
});
//# sourceMappingURL=stackbit.config.VFPX6XG4.cjs.map

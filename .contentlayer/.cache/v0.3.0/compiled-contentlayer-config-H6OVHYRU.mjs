// contentlayer.config.js
import path2 from "path";
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";
import remarkGfm from "remark-gfm";
import { getHighlighter, loadTheme } from "shiki";
import { visit as visit3 } from "unist-util-visit";

// lib/rehype-component.ts
import fs from "fs";
import path from "path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";
function rehypeComponent() {
  return async (tree) => {
    visit(tree, (node) => {
      const { value: src } = getNodeAttributeByName(node, "src") || {};
      if (node.name === "ComponentExample") {
        const source = getComponentSourceFileContent(node);
        if (!source) {
          return;
        }
        node.children?.push(
          u("element", {
            tagName: "pre",
            properties: {
              __src__: src
            },
            children: [
              u("element", {
                tagName: "code",
                properties: {
                  className: ["language-tsx"]
                },
                children: [
                  {
                    type: "text",
                    value: source
                  }
                ]
              })
            ]
          })
        );
        const extractClassname = getNodeAttributeByName(
          node,
          "extractClassname"
        );
        if (extractClassname && typeof extractClassname.value !== "undefined" && extractClassname.value !== "false") {
          const values = source.match(/className="(.*)"/);
          const className = values ? values[1] : "";
          node.attributes?.push({
            name: "extractedClassNames",
            type: "mdxJsxAttribute",
            value: className
          });
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {},
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"]
                  },
                  children: [
                    {
                      type: "text",
                      value: className
                    }
                  ]
                })
              ]
            })
          );
        }
      }
      if (node.name === "ComponentSource") {
        const source = getComponentSourceFileContent(node);
        if (!source) {
          return;
        }
        node.children?.push(
          u("element", {
            tagName: "pre",
            properties: {
              __src__: src
            },
            children: [
              u("element", {
                tagName: "code",
                properties: {
                  className: ["language-tsx"]
                },
                children: [
                  {
                    type: "text",
                    value: source
                  }
                ]
              })
            ]
          })
        );
      }
    });
  };
}
function getNodeAttributeByName(node, name) {
  return node.attributes?.find((attribute) => attribute.name === name);
}
function getComponentSourceFileContent(node) {
  const src = getNodeAttributeByName(node, "src")?.value;
  if (!src) {
    return null;
  }
  const filePath = path.join(process.cwd(), src);
  const source = fs.readFileSync(filePath, "utf8");
  return source;
}

// lib/rehype-npm-command.ts
import { visit as visit2 } from "unist-util-visit";
function rehypeNpmCommand() {
  return (tree) => {
    visit2(tree, (node) => {
      if (node.type !== "element" || node?.tagName !== "pre") {
        return;
      }
      if (node.properties?.["__rawString__"]?.startsWith("npm install")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npm install",
          "yarn add"
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npm install",
          "pnpm add"
        );
      }
    });
  };
}

// contentlayer.config.js
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var RadixProperties = defineNestedType(() => ({
  name: "RadixProperties",
  fields: {
    link: {
      type: "string"
    },
    api: {
      type: "string"
    }
  }
}));
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    published: {
      type: "boolean",
      default: true
    },
    radix: {
      type: "nested",
      of: RadixProperties
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug,
      rehypeComponent,
      () => (tree) => {
        visit3(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;
            if (codeEl.tagName !== "code") {
              return;
            }
            node.__rawString__ = codeEl.children?.[0].value;
            node.__src__ = node.properties?.__src__;
          }
        });
      },
      [
        rehypePrettyCode,
        {
          getHighlighter: async () => {
            const theme = await loadTheme(
              path2.join(process.cwd(), "lib/vscode-theme.json")
            );
            return await getHighlighter({ theme });
          },
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      () => (tree) => {
        visit3(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "div") {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
              return;
            }
            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
              return;
            }
            preElement.properties["__withMeta__"] = node.children.at(0).tagName === "div";
            preElement.properties["__rawString__"] = node.__rawString__;
            if (node.__src__) {
              preElement.properties["__src__"] = node.__src__;
            }
          }
        });
      },
      rehypeNpmCommand,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-H6OVHYRU.mjs.map

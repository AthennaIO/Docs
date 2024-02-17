/**
 * Built on top of the original theme
 *
 * https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/prism-react-renderer/src/themes/dracula.ts
 * 
 * Guides for changing this theme could be found at:
 * 
 * https://github.com/PrismJS/prism/blob/master/components/prism-bash.js
 */

export default [
  {
    types: ["function", "builtin"],
    style: {
        color: "hsl(115, 100%, 75%)"
    },
    languages: ["bash"]
  },
  {
    types: ["punctuation"],
      style: {
          color: "rgb(248, 248, 242)"
      },
      languages: ["bash"]
  },
  {
    types: ["boolean", "null"],
    style: {
      color: "hsl(330, 100%, 75%)"
    },
    languages: ["bash"]
  },
  {
    types: ["number"],
      style: {
          color: "hsl(250, 100%, 75%)"
      },
      languages: ["bash"]
  },
  {
    types: ["variable", "operator", "assign-left", "parameter", "string", "keyword", "file-descriptor", "artisan"],
    style: {
      color: "hsl(170, 100%, 75%)"
    },
    languages: ["bash"]
  },
  {
    types: ["shebang", "comment"],
    style: {
      color: "hsl(250, 25%, 55%)"
    },
    languages: ["bash"]
  }
]

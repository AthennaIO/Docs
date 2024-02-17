/**
 * Built on top of the original theme
 *
 * https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/prism-react-renderer/src/themes/dracula.ts
 * 
 * Guides for changing this theme could be found at:
 * 
 * https://github.com/PrismJS/prism/blob/master/components/prism-typescript.js
 */

export default [
  {
      types: ["prolog", "constant", "builtin", "number"],
      style: {
          color: "hsl(250, 100%, 75%)"
      },
      languages: ["typescript", "javascript"]
  },
  {
      types: ["inserted", "function"],
      style: {
          color: "hsl(115, 100%, 75%)"
      },
      languages: ["typescript", "javascript"]
  },
  {
      types: ["deleted"],
      style: {
          color: "hsl(10, 100%, 75%)"
      },
      languages: ["typescript", "javascript"]
  },
  {
      types: ["changed"],
      style: {
          color: "hsl(35, 100%, 75%)"
      },
      languages: ["typescript", "javascript"]
  },
  {
      types: ["punctuation", "symbol"],
      style: {
          color: "rgb(248, 248, 242)"
      },
      languages: ["typescript", "javascript"]
  },
  {
      types: ["string", "char", "selector", "attr-value"],
      style: {
          color: "hsl(60, 100%, 75%)"
      },
      languages: ["typescript", "javascript"]
  },
  {
      types: ["keyword", "variable", "tag"],
      style: {
          color: "hsl(330, 100%, 75%)"
      },
      languages: ["typescript", "javascript"]
  },
  {
      types: ["comment"],
      style: {
          color: "hsl(250, 25%, 55%)"
      },
      languages: ["typescript", "javascript"]
  },
  {
      types: ["attr-name"],
      style: {
          color: "hsl(115, 100%, 75%)"
      },
      languages: ["typescript", "javascript"]
  },
  {
      types: ["atrule"],
      hello: null,
      style: {
          color: "hsl(170, 100%, 75%)"
      },
      languages: ["typescript", "javascript"]
  },
]

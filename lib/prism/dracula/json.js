/**
 * Built on top of the original theme
 *
 * https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/prism-react-renderer/src/themes/dracula.ts
 * 
 * Guides for changing this theme could be found at:
 * 
 * https://github.com/PrismJS/prism/blob/master/components/prism-json.js
 */

export default [
  {
    types: ["punctuation", "operator"],
      style: {
          color: "rgb(248, 248, 242)"
      },
      languages: ["json"]
  },
  {
    types: ["boolean", "null"],
    style: {
      color: "hsl(330, 100%, 75%)"
    },
    languages: ["json"]
  },
  {
    types: ["number"],
      style: {
          color: "hsl(250, 100%, 75%)"
      },
      languages: ["json"]
  },
  {
    types: ["property", "string"],
      style: {
          color: "hsl(60, 100%, 75%)"
      },
      languages: ["json"]
  }
]

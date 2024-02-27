export default [
  {
    types: ["string", "attr-value"],
    style: {
        color: "hsl(60, 100%, 75%)"
    },
    languages: ["html"]
  },
  {
      types: ["tag"],
      style: {
          color: "hsl(330, 100%, 75%)"
      },
      languages: ["html"]
  }, 
  {
      types: ["attr-name", "decorator", "closed-decorator"],
      style: {
          color: "hsl(115, 100%, 75%)"
      },
      languages: ["html"]
  },
  {
    types: ["keyword", "variable", "char", "selector"],
    style: {
        color: "rgb(248, 248, 242)"
    },
    languages: ["html"]
  },
]

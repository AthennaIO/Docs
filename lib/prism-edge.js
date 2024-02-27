module.exports = (Prism) => {
  Prism.languages.edge = {
    'comment': /\{\{![\s\S]*?\}\}/,
    // 'delimiter': {
    //   pattern: /^\{\{\{?|\}\}\}?$/,
    //   alias: 'punctuation'
    // },
    'html': {
      pattern: /\<![\s\S]*?\>/
    },
    'string': /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    'boolean': /\b(?:false|true)\b/,
    'block': {
      pattern: /^(\s*(?:~\s*)?)[@\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
      lookbehind: true,
      alias: 'keyword'
    },
    'brackets': {
      pattern: /\{[^\]]+\}/,
      inside: {
        punctuation: /\{|\}/,
        variable: /[\s\S]+/
      }
    },
    // 'punctuation': /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    // 'variable': /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
  }
  
  // Prism.hooks.add('before-tokenize', function (env) {
  //   var edgePattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
  //   Prism.languages['markup-templating'].buildPlaceholders(env, 'edge', edgePattern)
  // })
  
  // Prism.hooks.add('after-tokenize', function (env) {
  //   Prism.languages['markup-templating'].tokenizePlaceholders(env, 'edge')
  // })  
}

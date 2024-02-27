import siteConfig from '@generated/docusaurus.config'

export default function prismIncludeLanguages(PrismObject) {
  const { themeConfig: {prism} } = siteConfig
  const { additionalLanguages } = prism
  
  globalThis.Prism = PrismObject

  additionalLanguages.forEach((lang) => {
    require(`prismjs/components/prism-${lang}`)
  })

  Prism.languages.html.decorator = {
    pattern: /@[$\w\xA0-\uFFFF]+/
  } 

  Prism.languages.html['closed-decorator'] = {
    pattern: /@![$\w\xA0-\uFFFF]+/
  }

  Prism.languages.html.brackets = {
    pattern: /\{[^\]]+\}/,
    inside: {
      punctuation: /\{|\}/,
      variable: /[\s\S]+/
    }
  }

  Prism.languages.bash.function.pattern = /(^|[\s;|&]|[<>]\()(?:npx|node|yourCliCommand|.greet|npm|nvm|athenna)(?=$|[)\s;|&])/

  delete globalThis.Prism
}

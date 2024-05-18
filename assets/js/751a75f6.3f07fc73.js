"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[8849],{526:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var a=i(4848),s=i(8453);const t={title:"Annotations",sidebar_position:5,toc_max_heading_level:2,description:"Check all available Artisan annotations and it options."},o="Annotations",l={id:"cli-application/annotations",title:"Annotations",description:"Check all available Artisan annotations and it options.",source:"@site/docs/cli-application/annotations.mdx",sourceDirName:"cli-application",slug:"/cli-application/annotations",permalink:"/docs/cli-application/annotations",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/cli-application/annotations.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Annotations",sidebar_position:5,toc_max_heading_level:2,description:"Check all available Artisan annotations and it options."},sidebar:"tutorialSidebar",previous:{title:"Error Handling",permalink:"/docs/cli-application/error-handling"},next:{title:"Getting Started",permalink:"/docs/database/getting-started"}},r={},c=[{value:"<code>@Argument()</code>",id:"argument",level:2},{value:"<code>signature</code>",id:"signature",level:3},{value:"<code>default</code>",id:"default",level:3},{value:"<code>required</code>",id:"required",level:3},{value:"<code>description</code>",id:"description",level:3},{value:"<code>@Option()</code>",id:"option",level:2},{value:"<code>signature</code>",id:"signature-1",level:3},{value:"<code>default</code>",id:"default-1",level:3},{value:"<code>description</code>",id:"description-1",level:3},{value:"<code>isFromGlobal</code>",id:"isfromglobal",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"annotations",children:"Annotations"}),"\n",(0,a.jsx)(n.p,{children:"Check all available Artisan annotations and it options."}),"\n",(0,a.jsx)(n.h2,{id:"argument",children:(0,a.jsx)(n.code,{children:"@Argument()"})}),"\n",(0,a.jsx)(n.p,{children:"Define an argument for an Artisan command class:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Argument, BaseCommand } from '@athenna/artisan'\n\nexport class Greet extends BaseCommand {\n  @Argument()\n  public name: string\n\n  public static signature(): string {\n    return 'greet'\n  }\n\n  public async handle(): Promise<void> {\n    this.logger.simple(`Hello ${this.name}!`)\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can also define any of the following optional properties:"}),"\n",(0,a.jsx)(n.h3,{id:"signature",children:(0,a.jsx)(n.code,{children:"signature"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Default: the name of your class property (e.g ",(0,a.jsx)(n.code,{children:"name"}),")"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The signature defines how the argument will be displayed in ",(0,a.jsx)(n.code,{children:"help"}),"\ncommands of Artisan and also how it's going to be parsed:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"@Argument({ signature: 'myName' })\npublic name: string\n"})}),"\n",(0,a.jsxs)(n.p,{children:["By default the signature of an argument will be set as required (",(0,a.jsx)(n.code,{children:"<myName>"}),"),\nthe define that an argument is optional use the following syntax:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"@Argument({ signature: '[myName]' })\npublic name: string\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["To avoid using the syntax above to define your argument as optional\nor not we recommend you to use the ",(0,a.jsx)(n.a,{href:"/docs/cli-application/annotations#required",children:(0,a.jsx)(n.code,{children:"required"})})]})}),"\n",(0,a.jsxs)(n.p,{children:["You can also define a catch-all argument, we call it spread/variadic\narguments. It works exactly like rest parameters of arrays in JavaScript,\nand it ",(0,a.jsx)(n.strong,{children:"must always be the last argument of your command class"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"@Argument({ signature: 'myNames...' })\npublic myNames: string[]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"default",children:(0,a.jsx)(n.code,{children:"default"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Default: ",(0,a.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Set a default value for your argument:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"@Argument({ default: 'Lenon' })\npublic: name: string\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Defining a value to ",(0,a.jsx)(n.code,{children:"default"})," option automatically set the ",(0,a.jsx)(n.code,{children:"required"}),"\noption to ",(0,a.jsx)(n.code,{children:"false"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"required",children:(0,a.jsx)(n.code,{children:"required"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Default: ",(0,a.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Define that argument is an optional field or not:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"@Argument({ required: false })\npublic name?: string\n"})}),"\n",(0,a.jsx)(n.h3,{id:"description",children:(0,a.jsx)(n.code,{children:"description"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Default: ",(0,a.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Define what description will be displayed in commands like ",(0,a.jsx)(n.code,{children:"help"})," of\nArtisan:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"@Argument({ description: 'The name that Athenna should greet' })\npublic name: string\n"})}),"\n",(0,a.jsx)(n.h2,{id:"option",children:(0,a.jsx)(n.code,{children:"@Option()"})}),"\n",(0,a.jsx)(n.p,{children:"Define an option for an Artisan command class:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Option, BaseCommand } from '@athenna/artisan'\n\nexport class Greet extends BaseCommand {\n  @Option({ signature: '-n, --name <name>' })\n  public name: string\n\n  public static signature(): string {\n    return 'greet'\n  }\n\n  public async handle(): Promise<void> {\n    this.logger.simple(`Hello ${this.name}!`)\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can also define any of the following optional properties:"}),"\n",(0,a.jsx)(n.h3,{id:"signature-1",children:(0,a.jsx)(n.code,{children:"signature"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Default: the name of your class property with ",(0,a.jsx)(n.code,{children:"--"})," in the\nbeggining (e.g ",(0,a.jsx)(n.code,{children:"--name"}),")"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The signature defines how the option will be displayed in ",(0,a.jsx)(n.code,{children:"help"}),"\ncommands of Artisan, how it's going to be parsed and also how\nthe user that will be using the CLI will set the option:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"@Option({ signature: '-n, --name' })\npublic name: boolean \n"})}),"\n",(0,a.jsxs)(n.p,{children:["Calling ",(0,a.jsx)(n.code,{children:"greet"})," command setting the ",(0,a.jsx)(n.code,{children:"name"})," option:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"node artisan greet -n\n\n// Or\n\nnode artisan greet --name\n"})}),"\n",(0,a.jsxs)(n.p,{children:["As you can see the type of the ",(0,a.jsx)(n.code,{children:"name"})," property is a ",(0,a.jsx)(n.code,{children:"boolean"}),". If you\nwant to define that your option will receive a value string you can\nuse the following signature:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"@Option({ signature: '-n, --name <name>' })\npublic name: string\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Calling ",(0,a.jsx)(n.code,{children:"greet"})," command setting the ",(0,a.jsx)(n.code,{children:"name"})," option:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"node artisan greet -n Lenon\n\n// Or\n\nnode artisan greet --name Lenon\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes you might need to add more than one ",(0,a.jsx)(n.code,{children:"name"})," option. For this\nkind of situation, just like arguments, you can define a spread option:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"@Option({ signature: '-n, --name <name...>' })\npublic names: string[]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Calling ",(0,a.jsx)(n.code,{children:"greet"})," command setting multiple ",(0,a.jsx)(n.code,{children:"name"})," options:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"node artisan greet -n Lenon -n Txsoura\n\n// or\n\nnode artisan greet --name Lenon --name Txsoura\n"})}),"\n",(0,a.jsx)(n.p,{children:"Is possible to create a signature with a negate value, check the example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"@Option({ signature: '--no-name' })\npublic hasName: boolean\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you call ",(0,a.jsx)(n.code,{children:"greet"})," command passing the ",(0,a.jsx)(n.code,{children:"--no-name"})," option, the value\nof the ",(0,a.jsx)(n.code,{children:"hasName"})," property will be ",(0,a.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"default-1",children:(0,a.jsx)(n.code,{children:"default"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Default: ",(0,a.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Set a default value for your option:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"@Option({ \n  signature: '-n, --name <name>', \n  default: 'Lenon' \n})\npublic: name: string\n"})}),"\n",(0,a.jsx)(n.h3,{id:"description-1",children:(0,a.jsx)(n.code,{children:"description"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Default: ",(0,a.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Define what description will be displayed in commands like ",(0,a.jsx)(n.code,{children:"help"})," of\nArtisan:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"@Option({ \n  signature: '-n, --name <name>'\n  description: 'The name that Athenna should greet' \n})\npublic name: string\n"})}),"\n",(0,a.jsx)(n.h3,{id:"isfromglobal",children:(0,a.jsx)(n.code,{children:"isFromGlobal"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Default: ",(0,a.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Is possible to define global options to Artisan to be used in all\ncommands. To be able to catch the value of a global one, you must\ndefine the ",(0,a.jsx)(n.code,{children:"isFromGlobal"})," as true and set the exactly ",(0,a.jsx)(n.code,{children:"signature"}),"\nthat you see when running ",(0,a.jsx)(n.code,{children:"node artisan --help"}),". By default, Athenna\ncomes with ",(0,a.jsx)(n.code,{children:"--env"})," global option, let's use it as example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"@Option({\n  isFromGlobal: true,\n  signature: '--env <name>'\n})\npublic env: string\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"default"})," and ",(0,a.jsx)(n.code,{children:"description"})," options are ignored when ",(0,a.jsx)(n.code,{children:"isFromGlobal"}),"\nis true, since Athenna will use the values set for the global option."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var a=i(6540);const s={},t=a.createContext(s);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);
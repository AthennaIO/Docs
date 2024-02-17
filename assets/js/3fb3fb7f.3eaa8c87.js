"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[8794],{6760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(5893),a=n(1151);const r={title:"Facades",sidebar_position:4,description:"Understand the purpose and how to use the Athenna facades."},i="Facades",c={id:"architecture-concepts/facades",title:"Facades",description:"Understand the purpose and how to use the Athenna facades.",source:"@site/docs/architecture-concepts/facades.mdx",sourceDirName:"architecture-concepts",slug:"/architecture-concepts/facades",permalink:"/docs/architecture-concepts/facades",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/architecture-concepts/facades.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Facades",sidebar_position:4,description:"Understand the purpose and how to use the Athenna facades."},sidebar:"tutorialSidebar",previous:{title:"Service Providers",permalink:"/docs/architecture-concepts/service-providers"},next:{title:"Logging",permalink:"/docs/the-basics/logging"}},o={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Helpers",id:"helpers",level:2},{value:"When to use facades",id:"when-to-use-facades",level:2},{value:"How facades work",id:"how-facades-work",level:2},{value:"Facades class reference",id:"facades-class-reference",level:2},{value:"Writing facades",id:"writing-facades",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"facades",children:"Facades"}),"\n",(0,s.jsx)(t.p,{children:"Understand the purpose and how to use the Athenna facades."}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:['Throughout the Athenna documentation, you will see examples of code that\ninteracts with Athenna features via "facades". Facades provide a "static"\ninterface to class that are available in the application\'s ',(0,s.jsx)(t.a,{href:"/docs/architecture-concepts/service-container",children:"service container"}),".\nAthenna ships with many facades which provide access to almost all the Athenna\nfeatures."]}),"\n",(0,s.jsx)(t.p,{children:"Athenna facades serve as \"static proxies\" to underlying classes in the service\ncontainer, providing the benefit of a terse, expressive syntax while maintaining\nmore testability and flexibility than traditional static methods. It's perfectly\nfine if you don't totally understand how facades work under the hood\u2014just go\nwith the flow and continue learning about Athenna."}),"\n",(0,s.jsx)(t.p,{children:"All Athenna facades are defined in their own packages. So, we can easily access\na facade like so:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { Log } from '@athenna/logger' // Log Facade\nimport { Route } from '@athenna/http' // Route Facade\n\nRoute.get('/welcome', ({ response }) => {\n  Log.channel('simple').success('New request received \ud83d\ude1d')\n\n  return response.status(200).send({ message: 'ok' })\n})\n"})}),"\n",(0,s.jsx)(t.p,{children:"Throughout the Athenna documentation, many of the examples will use facades to\ndemonstrate various features of the framework."}),"\n",(0,s.jsx)(t.h2,{id:"helpers",children:"Helpers"}),"\n",(0,s.jsxs)(t.p,{children:['To complement facades, Athenna offers a variety of "helper classes" that make it\neven easier to interact with common Athenna features. Some common helper\nfunctions you may interact with are ',(0,s.jsx)(t.code,{children:"Env"}),", ",(0,s.jsx)(t.code,{children:"Config"}),", ",(0,s.jsx)(t.code,{children:"Path"}),", and more. Each helper\nfunction offered by Athenna is documented with their corresponding feature;\nhowever, a complete list is available within ",(0,s.jsx)(t.a,{href:"/docs/digging-deeper/helpers",children:"the dedicated helpers' documentation"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"when-to-use-facades",children:"When to use facades"}),"\n",(0,s.jsx)(t.p,{children:"Facades have many benefits. They provide a terse, memorable syntax that allows\nyou to use Athenna features without remembering long class names that must be\ninjected or configured manually."}),"\n",(0,s.jsx)(t.p,{children:'However, some care must be taken when using facades. The primary danger of\nfacades is class "scope creep". Since facades are so easy to use and do not\nrequire injection, it can be easy to let your classes continue to grow and use\nmany facades in a single class. Using dependency injection, this potential is\nmitigated by the visual feedback a large constructor gives you that your class\nis growing too large. So, when using facades, pay special attention to the size\nof your class so that its scope of responsibility stays narrow. If your class\nis getting too large, consider splitting it into multiple smaller classes.'}),"\n",(0,s.jsx)(t.h2,{id:"how-facades-work",children:"How facades work"}),"\n",(0,s.jsxs)(t.p,{children:["In an Athenna application, a facade is a class that provides access to an\nobject from the container. The machinery that makes this work is in the ",(0,s.jsx)(t.code,{children:"Facade"}),"\nclass. Athenna facades, and any custom facades you create, will be created\nusing the ",(0,s.jsx)(t.code,{children:"Facade"})," class."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Facade"})," class makes use of the ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy",children:"Proxy API"}),"\nto defer calls from your facade to an object resolved from the container. In the\nexample below, a call is made to the Athenna log system. By glancing at this\ncode, one might assume that the static ",(0,s.jsx)(t.code,{children:"success()"})," method is being called on the\n",(0,s.jsx)(t.code,{children:"Log"})," class:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { Log } from '@athenna/logger'\nimport { Context, Controller } from '@athenna/http'\n\n@Controller()\nexport class AppController {\n  public async show({ response }: Context) {\n    Log.success('Welcome to Athenna \ud83d\ude1d')\n\n    return response.status(200).send({ hello: 'world' })\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Notice that near the top of the file we are importing the ",(0,s.jsx)(t.code,{children:"Log"})," facade. This\nfacade serves as a proxy for accessing the underlying implementation of the\n",(0,s.jsx)(t.code,{children:"Logger"})," class from Athenna service container. Any calls we make using the\nfacade will be passed to the underlying instance of Athenna logger class."]}),"\n",(0,s.jsxs)(t.p,{children:["If we look at the Log facade file implementation, you'll see that ",(0,s.jsx)(t.code,{children:"Log"})," is\njust a constant that points to the alias ",(0,s.jsx)(t.code,{children:"Athenna/Core/Logger"})," that is\nregistered inside the service container:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { Facade } from '@athenna/ioc'\nimport { Logger } from '#src/logger/Logger'\n\nexport const Log = Facade.createFor<Logger>('Athenna/Core/Logger')\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The job of the ",(0,s.jsx)(t.code,{children:"createFor()"})," method is to create a new proxy object that will\nhave the same methods as the ",(0,s.jsx)(t.code,{children:"Logger"})," class. So, when the user references any\nstatic method on the ",(0,s.jsx)(t.code,{children:"Log"})," facade, Athenna will first resolve the\n",(0,s.jsx)(t.code,{children:"Athenna/Core/Logger"})," binding from the ",(0,s.jsx)(t.a,{href:"/docs/architecture-concepts/service-container",children:"service container"}),"\nand them runs the requested method, (in the example above, the ",(0,s.jsx)(t.code,{children:"success()"}),"\nmethod) against that object."]}),"\n",(0,s.jsx)(t.h2,{id:"facades-class-reference",children:"Facades class reference"}),"\n",(0,s.jsx)(t.p,{children:"Below you will find every facade and its underlying class. This is a useful\ntool for quickly digging into the API documentation for a given facade root.\nThe service container binding key is also included where applicable."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Facade"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Reference class"}),(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Binding alias"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://github.com/AthennaIO/Logger/blob/develop/src/facades/Log.ts",children:"Log"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/AthennaIO/Logger/blob/develop/src/logger/Logger.ts",children:"Logger"})}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Athenna/Core/Logger"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://github.com/AthennaIO/Http/blob/develop/src/facades/Route.ts",children:"Route"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/AthennaIO/Http/blob/develop/src/router/Router.ts",children:"Router"})}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Athenna/Core/HttpRoute"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://github.com/AthennaIO/Http/blob/develop/src/facades/Server.ts",children:"Server"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/AthennaIO/Http/blob/develop/src/server/ServerImpl.ts",children:"ServerImpl"})}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Athenna/Core/HttpServer"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://github.com/AthennaIO/Mail/blob/develop/src/facades/Mail.ts",children:"Mail"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/AthennaIO/Mail/blob/develop/src/mail/MailImpl.ts",children:"MailImpl"})}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Athenna/Core/Mail"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://github.com/AthennaIO/View/blob/develop/src/facades/View.ts",children:"View"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/AthennaIO/View/blob/develop/src/views/ViewImpl.ts",children:"ViewImpl"})}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Athenna/Core/View"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://github.com/AthennaIO/Artisan/blob/develop/src/facades/Artisan.ts",children:"Artisan"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/AthennaIO/Artisan/blob/develop/src/artisan/ArtisanImpl.ts",children:"ArtisanImpl"})}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Athenna/Core/Artisan"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://github.com/AthennaIO/Database/blob/develop/src/facades/Database.ts",children:"Database"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/AthennaIO/Database/blob/develop/src/database/DatabaseImpl.ts",children:"DatabaseImpl"})}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Athenna/Core/Database"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"writing-facades",children:"Writing facades"}),"\n",(0,s.jsxs)(t.p,{children:["First, let's use the following command to create a new ",(0,s.jsx)(t.a,{href:"/docs/architecture-concepts/service-providers",children:"service provider"}),"\nto resolve our dependency inside the ",(0,s.jsx)(t.a,{href:"/docs/architecture-concepts/service-container",children:"service container"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"node artisan make:provider HelperProvider\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now let's register all of our helpers inside the ",(0,s.jsx)(t.code,{children:"register()"})," method:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { File } from '#app/helpers/File'\nimport { String } from '#app/helpers/String'\nimport { ServiceProvider } from '@athenna/ioc'\n\nexport class HelperProvider extends ServiceProvider {\n  public register() {\n    this.container.singleton('App/Helpers/File', File)\n    this.container.transient('App/Helpers/String', String)\n  }\n}\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["If you have not used ",(0,s.jsx)(t.code,{children:"make:provider"})," command to create the provider, you\nwill need to register it inside the ",(0,s.jsx)(t.code,{children:".athennarc.json"})," file, inside the\n",(0,s.jsx)(t.code,{children:"providers"})," array."]})}),"\n",(0,s.jsxs)(t.p,{children:["Artisan can generate a new facade via the ",(0,s.jsx)(t.code,{children:"make:facade"})," command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"node artisan make:facade String\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The facade file will be generated inside the ",(0,s.jsx)(t.code,{children:"providers/facades"})," directory.\nOpen this file and change the alias to your provider alias and set up the\ngeneric type:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { Facade } from '@athenna/ioc'\nimport { String as StringImpl } from '#app/helpers/String'\n\nexport const String = Facade.createFor<StringImpl>('App/Helpers/String')\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now we can start using our new ",(0,s.jsx)(t.code,{children:"String"})," facade:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { Route } from '@athenna/http' // Route Facade\nimport { String } from '#providers/facades/String' // String Facade\n\nRoute.get('/welcome', ({ response }) => {\n  return response\n    .status(200)\n    .send({ hello: String.toPascalCase('world') })\n})\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var s=n(7294);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
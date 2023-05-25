"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[8794],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,u=d["".concat(c,".").concat(m)]||d[m]||h[m]||o;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5286:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={title:"Facades",sidebar_position:4,description:"Understand the purpose and how to use the Athenna facades.",tags:["Architecture Concepts","Facades"]},i="Facades",s={unversionedId:"architecture-concepts/facades",id:"architecture-concepts/facades",title:"Facades",description:"Understand the purpose and how to use the Athenna facades.",source:"@site/docs/architecture-concepts/facades.mdx",sourceDirName:"architecture-concepts",slug:"/architecture-concepts/facades",permalink:"/docs/architecture-concepts/facades",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/architecture-concepts/facades.mdx",tags:[{label:"Architecture Concepts",permalink:"/docs/tags/architecture-concepts"},{label:"Facades",permalink:"/docs/tags/facades"}],version:"current",sidebarPosition:4,frontMatter:{title:"Facades",sidebar_position:4,description:"Understand the purpose and how to use the Athenna facades.",tags:["Architecture Concepts","Facades"]},sidebar:"tutorialSidebar",previous:{title:"Service Providers",permalink:"/docs/architecture-concepts/service-providers"},next:{title:"The Basics",permalink:"/docs/the-basics"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Helpers",id:"helpers",level:2},{value:"When to use facades",id:"when-to-use-facades",level:2},{value:"How facades work",id:"how-facades-work",level:2},{value:"Facades class reference",id:"facades-class-reference",level:2},{value:"Writing facades",id:"writing-facades",level:2}],p={toc:l},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"facades"},"Facades"),(0,r.kt)("p",null,"Understand the purpose and how to use the Athenna facades."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,'Throughout the Athenna documentation, you will see examples of code that\ninteracts with Athenna features via "facades". Facades provide a "static"\ninterface to class that are available in the application\'s ',(0,r.kt)("a",{parentName:"p",href:"/docs/architecture-concepts/service-container"},"service container"),".\nAthenna ships with many facades which provide access to almost all the Athenna\nfeatures."),(0,r.kt)("p",null,"Athenna facades serve as \"static proxies\" to underlying classes in the service\ncontainer, providing the benefit of a terse, expressive syntax while maintaining\nmore testability and flexibility than traditional static methods. It's perfectly\nfine if you don't totally understand how facades work under the hood\u2014just go\nwith the flow and continue learning about Athenna."),(0,r.kt)("p",null,"All Athenna facades are defined in their own packages. So, we can easily access\na facade like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Log } from '@athenna/logger' // Log Facade\nimport { Route } from '@athenna/http' // Route Facade\n\nRoute.get('/welcome', ({ response }) => {\n  Log.channel('simple').success('New request received \ud83d\ude1d')\n\n  return response.status(200).send({ message: 'ok' })\n})\n")),(0,r.kt)("p",null,"Throughout the Athenna documentation, many of the examples will use facades to\ndemonstrate various features of the framework."),(0,r.kt)("h2",{id:"helpers"},"Helpers"),(0,r.kt)("p",null,'To complement facades, Athenna offers a variety of "helper classes" that make it\neven easier to interact with common Athenna features. Some common helper\nfunctions you may interact with are ',(0,r.kt)("inlineCode",{parentName:"p"},"Env"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Config"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Path"),", and more. Each helper\nfunction offered by Athenna is documented with their corresponding feature;\nhowever, a complete list is available within ",(0,r.kt)("a",{parentName:"p",href:"/docs/digging-deeper/helpers"},"the dedicated helpers' documentation"),"."),(0,r.kt)("h2",{id:"when-to-use-facades"},"When to use facades"),(0,r.kt)("p",null,"Facades have many benefits. They provide a terse, memorable syntax that allows\nyou to use Athenna features without remembering long class names that must be\ninjected or configured manually."),(0,r.kt)("p",null,'However, some care must be taken when using facades. The primary danger of\nfacades is class "scope creep". Since facades are so easy to use and do not\nrequire injection, it can be easy to let your classes continue to grow and use\nmany facades in a single class. Using dependency injection, this potential is\nmitigated by the visual feedback a large constructor gives you that your class\nis growing too large. So, when using facades, pay special attention to the size\nof your class so that its scope of responsibility stays narrow. If your class\nis getting too large, consider splitting it into multiple smaller classes.'),(0,r.kt)("h2",{id:"how-facades-work"},"How facades work"),(0,r.kt)("p",null,"In an Athenna application, a facade is a class that provides access to an\nobject from the container. The machinery that makes this work is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Facade"),"\nclass. Athenna facades, and any custom facades you create, will be created\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Facade")," class."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Facade")," class makes use of the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"},"Proxy API"),"\nto defer calls from your facade to an object resolved from the container. In the\nexample below, a call is made to the Athenna log system. By glancing at this\ncode, one might assume that the static ",(0,r.kt)("inlineCode",{parentName:"p"},"success()")," method is being called on the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Log")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Log } from '@athenna/logger'\nimport { Context, Controller } from '@athenna/http'\n\n@Controller()\nexport class AppController {\n  public async show({ response }: Context) {\n    Log.success('Welcome to Athenna \ud83d\ude1d')\n\n    return response.status(200).send({ hello: 'world' })\n  }\n}\n")),(0,r.kt)("p",null,"Notice that near the top of the file we are importing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Log")," facade. This\nfacade serves as a proxy for accessing the underlying implementation of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Logger")," class from Athenna service container. Any calls we make using the\nfacade will be passed to the underlying instance of Athenna logger class."),(0,r.kt)("p",null,"If we look at the Log facade file implementation, you'll see that ",(0,r.kt)("inlineCode",{parentName:"p"},"Log")," is\njust a constant that points to the alias ",(0,r.kt)("inlineCode",{parentName:"p"},"Athenna/Core/Logger")," that is\nregistered inside the service container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Facade } from '@athenna/ioc'\nimport { Logger } from '#src/Logger/Logger'\n\nexport const Log = Facade.createFor<Logger>('Athenna/Core/Logger')\n")),(0,r.kt)("p",null,"The job of the ",(0,r.kt)("inlineCode",{parentName:"p"},"createFor()")," method is to create a new proxy object that will\nhave the same methods as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Logger")," class. So, when the user references any\nstatic method on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Log")," facade, Athenna will first resolve the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Athenna/Core/Logger")," binding from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/architecture-concepts/service-container"},"service container"),"\nand them runs the requested method, (in the example above, the ",(0,r.kt)("inlineCode",{parentName:"p"},"success()"),"\nmethod) against that object."),(0,r.kt)("h2",{id:"facades-class-reference"},"Facades class reference"),(0,r.kt)("p",null,"Below you will find every facade and its underlying class. This is a useful\ntool for quickly digging into the API documentation for a given facade root.\nThe service container binding key is also included where applicable."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Facade"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Reference class"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Binding alias"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AthennaIO/Logger/blob/develop/src/Facades/Log.ts"},"Log")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AthennaIO/Logger/blob/develop/src/Logger/Logger.ts"},"Logger")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Athenna/Core/Logger")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AthennaIO/Http/blob/develop/src/Facades/Route.ts"},"Route")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AthennaIO/Http/blob/develop/src/Router/Router.ts"},"Router")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Athenna/Core/HttpRoute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AthennaIO/Http/blob/develop/src/Facades/Server.ts"},"Server")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AthennaIO/Http/blob/develop/src/Server/ServerImpl.ts"},"ServerImpl")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Athenna/Core/HttpServer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AthennaIO/Mail/blob/develop/src/Facades/Mail.ts"},"Mail")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AthennaIO/Mail/blob/develop/src/Mail/MailImpl.ts"},"MailImpl")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Athenna/Core/Mail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AthennaIO/View/blob/develop/src/Facades/View.ts"},"View")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AthennaIO/View/blob/develop/src/Views/ViewImpl.ts"},"ViewImpl")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Athenna/Core/View")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AthennaIO/Artisan/blob/develop/src/Facades/Artisan.ts"},"Artisan")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AthennaIO/Artisan/blob/develop/src/Artisan/ArtisanImpl.ts"},"ArtisanImpl")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Athenna/Core/Artisan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AthennaIO/Artisan/blob/develop/src/Facades/Artisan.ts"},"Database")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/AthennaIO/Database/blob/develop/src/Database/DatabaseImpl.ts"},"DatabaseImpl")),(0,r.kt)("td",{parentName:"tr",align:"right"},"Athenna/Core/Database")))),(0,r.kt)("h2",{id:"writing-facades"},"Writing facades"),(0,r.kt)("p",null,"First, let's use the following command to create a new ",(0,r.kt)("a",{parentName:"p",href:"/docs/architecture-concepts/service-providers"},"service provider"),"\nto resolve our dependency inside the ",(0,r.kt)("a",{parentName:"p",href:"/docs/architecture-concepts/service-container"},"service container"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./node artisan make:provider HelperProvider\n")),(0,r.kt)("p",null,"Now let's register all of our helpers inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"register()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '#app/Helpers/File'\nimport { String } from '#app/Helpers/String'\nimport { ServiceProvider } from '@athenna/ioc'\n\nexport class HelperProvider extends ServiceProvider {\n  public register() {\n    this.container.singleton('App/Helpers/File', File)\n    this.container.transient('App/Helpers/String', String)\n  }\n}\n")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you have not used ",(0,r.kt)("inlineCode",{parentName:"p"},"make:provider")," command to create the provider, you\nwill need to register it inside the ",(0,r.kt)("inlineCode",{parentName:"p"},".athennarc.json")," file, inside the\n",(0,r.kt)("inlineCode",{parentName:"p"},"providers")," array.")),(0,r.kt)("p",null,"Artisan can generate a new facade via the ",(0,r.kt)("inlineCode",{parentName:"p"},"make:facade")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./node artisan make:facade String\n")),(0,r.kt)("p",null,"The facade file will be generated inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"providers/facades")," directory.\nOpen this file and change the alias to your provider alias and set up the\ngeneric type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Facade } from '@athenna/ioc'\nimport { String as StringImpl } from '#app/Helpers/String'\n\nexport const String = Facade.createFor<StringImpl>('App/Helpers/String')\n")),(0,r.kt)("p",null,"Now we can start using our new ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," facade:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Route } from '@athenna/http' // Route Facade\nimport { String } from '#providers/facades/String' // String Facade\n\nRoute.get('/welcome', ({ response }) => {\n  return response\n    .status(200)\n    .send({ hello: String.toPascalCase('world') })\n})\n")))}h.isMDXComponent=!0}}]);
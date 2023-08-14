"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[3902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,m=c["".concat(p,".").concat(u)]||c[u]||h[u]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"AthennaRC File",sidebar_position:3,description:"Understand what is the purpose of the .athennarc.json file.",tags:["Getting Started","AthennaRC File"]},i="AthennaRC File",s={unversionedId:"getting-started/athennarc-file",id:"getting-started/athennarc-file",title:"AthennaRC File",description:"Understand what is the purpose of the .athennarc.json file.",source:"@site/docs/getting-started/athennarc-file.mdx",sourceDirName:"getting-started",slug:"/getting-started/athennarc-file",permalink:"/docs/getting-started/athennarc-file",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/getting-started/athennarc-file.mdx",tags:[{label:"Getting Started",permalink:"/docs/tags/getting-started"},{label:"AthennaRC File",permalink:"/docs/tags/athenna-rc-file"}],version:"current",sidebarPosition:3,frontMatter:{title:"AthennaRC File",sidebar_position:3,description:"Understand what is the purpose of the .athennarc.json file.",tags:["Getting Started","AthennaRC File"]},sidebar:"tutorialSidebar",previous:{title:"Node Script File",permalink:"/docs/getting-started/node-script-file"},next:{title:"Configuration",permalink:"/docs/getting-started/configuration"}},p={},l=[{value:"Introduction",id:"introduction",level:2},{value:"RC file vs Configurations",id:"rc-file-vs-configurations",level:2},{value:"Custom RC file path",id:"custom-rc-file-path",level:2},{value:"Using RC file in <code>package.json</code>",id:"using-rc-file-in-packagejson",level:2},{value:"The <code>preloads</code> property",id:"the-preloads-property",level:2},{value:"The <code>providers</code> property",id:"the-providers-property",level:2},{value:"The <code>services</code> property",id:"the-services-property",level:2},{value:"The <code>commands</code> property",id:"the-commands-property",level:2},{value:"The <code>templates</code> property",id:"the-templates-property",level:2},{value:"The <code>directories</code> property",id:"the-directories-property",level:2},{value:"The <code>controllers</code> property",id:"the-controllers-property",level:2},{value:"The <code>middlewares</code> property",id:"the-middlewares-property",level:2},{value:"The <code>namedMiddlewares</code> property",id:"the-namedmiddlewares-property",level:2},{value:"The <code>globalMiddlewares</code> property",id:"the-globalmiddlewares-property",level:2}],d={toc:l},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"athennarc-file"},"AthennaRC File"),(0,r.kt)("p",null,"Understand what is the purpose of the .athennarc.json file."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Inside the root directory of your project, there is a file\ncalled ",(0,r.kt)("inlineCode",{parentName:"p"},".athennarc.json")," which is responsible for configuring\nthe workspace and certain runtime settings of your Athenna\napplication."),(0,r.kt)("h2",{id:"rc-file-vs-configurations"},"RC file vs Configurations"),(0,r.kt)("p",null,"The responsible for the RC file is configuring the workspace\nand certain runtime settings to bootstrap your Athenna\napplication properly. Also, when working with ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," files is\nvery easy to manipulate the values of it, making it possible\nto make changes on the file in runtime. Let's see an example\nwhere Athenna manipulates your RC file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./node artisan make:service UserService\n")),(0,r.kt)("p",null,"Athenna will create the service file in your project but\nalso register it inside your ",(0,r.kt)("inlineCode",{parentName:"p"},".athennarc.json")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "services": [\n    "#app/services/UserService"\n  ]\n}\n')),(0,r.kt)("h2",{id:"custom-rc-file-path"},"Custom RC file path"),(0,r.kt)("p",null,"You can change the name and the path of your RC file or even\ncreate customized ones for each environement (",(0,r.kt)("inlineCode",{parentName:"p"},".athennarc.dev.json"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},".athennarc.prod.json"),"). To do that you need to set the new\npath to ",(0,r.kt)("inlineCode",{parentName:"p"},"Ignite::load()")," static method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=\"Path.bootstrap('dev.ts')\"",title:"\"Path.bootstrap('dev.ts')\""},"import { Ignite } from '@athenna/core'\n\nconst ignite = await new Ignite().load(import.meta.url, {\n  athennaRcPath: './bootstrap/athennadevrc.json' \ud83d\udc48\n})\n\nawait ignite.httpServer()\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Always remember that when using relative paths to set something\nin Athenna, you need to use your project root path as reference,\njust like in the example above.")),(0,r.kt)("h2",{id:"using-rc-file-in-packagejson"},"Using RC file in ",(0,r.kt)("inlineCode",{parentName:"h2"},"package.json")),(0,r.kt)("p",null,"You can also use the RC file inside ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". By default,\nIf you don't specify the path of your RC file, and the default\n",(0,r.kt)("inlineCode",{parentName:"p"},".athennarc.json")," cannot be found in the root path of your application,\nAthenna will check if the ",(0,r.kt)("inlineCode",{parentName:"p"},"athenna")," property exists in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "athenna": {\n    "providers": [\n      "@athenna/core/providers/CoreProvider",\n      "@athenna/http/providers/HttpRouteProvider",\n      "@athenna/http/providers/HttpServerProvider"\n    ],\n    "directories": {\n      "bootstrap": "bin"\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"the-preloads-property"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"preloads")," property"),(0,r.kt)("p",null,"An array of files that will be loaded when your application\nis bootstrapping. The files are loaded after booting the\nservice providers. You can do anything you want in preload\nfiles. Check the example bellow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="say-hello.js"',title:'"say-hello.js"'},"import { Log } from '@athenna/logger'\nimport { Config } from '@athenna/core'\n\nLog.info(`Hello from ${Config.get('app.name')} application!`)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "preloads": [\n    "./bootstrap/preloads/say-hello.js"\n  ]\n}\n')),(0,r.kt)("h2",{id:"the-providers-property"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"providers")," property"),(0,r.kt)("p",null,"An array of service providers to load when the application\nis bootstrapping:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "providers": [\n    "@athenna/core/providers/CoreProvider",\n    "@athenna/http/providers/HttpRouteProvider",\n    "@athenna/http/providers/HttpServerProvider"\n  ]\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"More information about service providers could be found at\n",(0,r.kt)("a",{parentName:"p",href:"https://athenna.io/docs/the-basics/http/controllers"},"service providers documentation section"),".")),(0,r.kt)("h2",{id:"the-services-property"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"services")," property"),(0,r.kt)("p",null,"This property is responsible to register your application\nservices or from some library inside the service container.\nIn most cases, it is better to simply instantiate your services,\nbut in others you might have different implementations for\nsome interface, using ",(0,r.kt)("a",{parentName:"p",href:"https://www.educative.io/answers/what-is-inversion-of-control"},"inversion of control"),"\nin these cases could be an exceptional idea to register your\nservices in the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "services": [\n    "#app/services/AppService",\n    "./app/services/OtherService.js"\n  ]\n}\n')),(0,r.kt)("h2",{id:"the-commands-property"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"commands")," property"),(0,r.kt)("p",null,'An object that is responsible to register your application\ncommands and their respective settings. The key of the\ncommands object needs to be exactly your command signature\nwithout any arguments, flags or spaces. Also, the value\nof it could be the command path or an object with the\n"path" key inside:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "commands": {\n    "make:exception": "@athenna/core/commands/MakeExceptionCommand",\n    "make:facade": {\n      "path": "@athenna/core/commands/MakeFacadeCommand",\n      "destination": "./src/providers/facades",\n      "loadApp": false,\n      "stayAlive": false,\n      "environments": ["console"]\n    }\n  }\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"More information about commands could be found at\n",(0,r.kt)("a",{parentName:"p",href:"https://athenna.io/docs/the-basics/cli/commands"},"cli commands documentation section"),".")),(0,r.kt)("h2",{id:"the-templates-property"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"templates")," property"),(0,r.kt)("p",null,"Map your application commands templates with their respective\npath. The templates mapped in this object will be used by your\n",(0,r.kt)("inlineCode",{parentName:"p"},"make")," commands to generate the resource with some specific\ncode template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "templates": {\n    "exception": "node_modules/@athenna/core/templates/exception.edge",\n    "facade": "node_modules/@athenna/core/templates/facade.edge",\n  }\n}\n')),(0,r.kt)("h2",{id:"the-directories-property"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"directories")," property"),(0,r.kt)("p",null,"Map your application directories with their respective\nbase path. The ",(0,r.kt)("a",{parentName:"p",href:"https://athenna.io/docs/digging-deeper/helpers#path"},(0,r.kt)("inlineCode",{parentName:"a"},"Path")),"\nclass will use the directories mapped in this object to\nresolve the paths of your application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "directories": {\n    "bin": "bin",\n    "src": "src",\n    "app": "app",\n    "services": "app/services",\n    "exceptions": "app/exceptions",\n    "repositories": "app/repositories",\n    "console": "app/console",\n    "commands": "app/console/commands",\n    "http": "app/http",\n    "controllers": "app/http/controllers",\n    "middlewares": "app/http/middlewares",\n    "interceptors": "app/http/interceptors",\n    "terminators": "app/http/terminators",\n    "bootstrap": "bootstrap",\n    "config": "config",\n    "database": "database",\n    "seeders": "database/seeders",\n    "migrations": "database/migrations",\n    "lang": "lang",\n    "resources": "resources",\n    "views": "resources/views",\n    "locales": "resources/locales",\n    "nodeModules": "node_modules",\n    "nodeModulesBin": "node_modules/.bin",\n    "providers": "providers",\n    "facades": "providers/facades",\n    "public": "public",\n    "static": "public/static",\n    "assets": "public/assets",\n    "routes": "routes",\n    "storage": "storage",\n    "logs": "storage/logs",\n    "tests": "tests",\n    "stubs": "tests/stubs",\n  }\n}\n')),(0,r.kt)("p",null,"The paths above are the default ones used by Athenna to resolve\nyour application paths. You can change one of then or many\nif you want, your directories defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"directories")," property\nwill always be merged with the defaults."),(0,r.kt)("p",null,"Athenna always rely on ",(0,r.kt)("a",{parentName:"p",href:"https://athenna.io/docs/digging-deeper/helpers#path"},(0,r.kt)("inlineCode",{parentName:"a"},"Path")),"\nclass methods to find files and directories that are used\ninternally by the framework, like configuration file, route\nfiles, entry points and many others. Changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"directories")," property\ncould be very useful when you are building your own project structure."),(0,r.kt)("h2",{id:"the-controllers-property"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"controllers")," property"),(0,r.kt)("p",null,"An array with the controllers of your application. The\ncontrollers registered in this array will be registered\nin the service container to be accessed easily by your\nRoute facade:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "controllers": [\n    "#app/http/controllers/AppController",\n    "./app/http/controllers/OtherController.js"\n  ]\n}\n')),(0,r.kt)("h2",{id:"the-middlewares-property"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"middlewares")," property"),(0,r.kt)("p",null,"An array with the middlewares of your application. The\nmiddlewares registered in this array will be registered\nin the service container to be accessed easily by your\nRoute facade:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "middlewares": [\n    "#app/http/middlewares/AppMiddleware",\n    "./app/http/interceptors/AppInterceptor.js"\n  ]\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"More information about commands could be found at\n",(0,r.kt)("a",{parentName:"p",href:"https://athenna.io/docs/rest-api-application/middlewares"},"http middlewares documentation section"),".")),(0,r.kt)("h2",{id:"the-namedmiddlewares-property"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"namedMiddlewares")," property"),(0,r.kt)("p",null,"Map the named middlewares of your application. Named\nmiddlewares could be configured using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Middleware"),"\nannotation, but if you are not using TypeScript in your\napplication, you can use this object to map your named\nmiddlewares. Named middlewares are very useful to be used\nin your route declaration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "namedMiddlewares": {\n    "app": "#app/http/middlewares/AppMiddleware",\n    "intercept": "./app/http/interceptors/AppInterceptor.js"\n  }\n}\n')),(0,r.kt)("h2",{id:"the-globalmiddlewares-property"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"globalMiddlewares")," property"),(0,r.kt)("p",null,"An array with the global middlewares of your application.\nGlobal middlewares could be configured using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Middleware"),"\nannotation, but if you are not using TypeScript in your\napplication, you can use this object to map your named\nmiddlewares. Global middlewares are executed every time\nin any request of your application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "globalMiddlewares": [\n    "#app/http/middlewares/AppMiddleware",\n    "./app/http/interceptors/AppInterceptor.js"\n  ]\n}\n')))}h.isMDXComponent=!0}}]);
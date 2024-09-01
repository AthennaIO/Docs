"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[6427],{6557:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=r(4848),s=r(8453);const o={title:"AthennaRC File",sidebar_position:3,description:"Understand what is the purpose of the .athennarc.json file."},i="AthennaRC File",a={id:"getting-started/athennarc-file",title:"AthennaRC File",description:"Understand what is the purpose of the .athennarc.json file.",source:"@site/docs/getting-started/athennarc-file.mdx",sourceDirName:"getting-started",slug:"/getting-started/athennarc-file",permalink:"/docs/getting-started/athennarc-file",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/getting-started/athennarc-file.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"AthennaRC File",sidebar_position:3,description:"Understand what is the purpose of the .athennarc.json file."},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Configuration",permalink:"/docs/getting-started/configuration"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"RC file vs Configurations",id:"rc-file-vs-configurations",level:2},{value:"Custom RC file path",id:"custom-rc-file-path",level:2},{value:"Using RC file in <code>package.json</code>",id:"using-rc-file-in-packagejson",level:2},{value:"The <code>preloads</code> property",id:"the-preloads-property",level:2},{value:"The <code>providers</code> property",id:"the-providers-property",level:2},{value:"The <code>services</code> property",id:"the-services-property",level:2},{value:"The <code>commands</code> property",id:"the-commands-property",level:2},{value:"The <code>templates</code> property",id:"the-templates-property",level:2},{value:"The <code>directories</code> property",id:"the-directories-property",level:2},{value:"The <code>controllers</code> property",id:"the-controllers-property",level:2},{value:"The <code>middlewares</code> property",id:"the-middlewares-property",level:2},{value:"The <code>namedMiddlewares</code> property",id:"the-namedmiddlewares-property",level:2},{value:"The <code>globalMiddlewares</code> property",id:"the-globalmiddlewares-property",level:2},{value:"The <code>artisan</code> property",id:"the-artisan-property",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"athennarc-file",children:"AthennaRC File"})}),"\n",(0,t.jsx)(n.p,{children:"Understand what is the purpose of the .athennarc.json file."}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["Inside the root directory of your project, there is a file\ncalled ",(0,t.jsx)(n.code,{children:".athennarc.json"})," which is responsible for configuring\nthe workspace and certain runtime settings of your Athenna\napplication."]}),"\n",(0,t.jsx)(n.h2,{id:"rc-file-vs-configurations",children:"RC file vs Configurations"}),"\n",(0,t.jsxs)(n.p,{children:["The responsible for the RC file is configuring the workspace\nand certain runtime settings to bootstrap your Athenna\napplication properly. Also, when working with ",(0,t.jsx)(n.code,{children:".json"})," files is\nvery easy to manipulate the values of it, making it possible\nto make changes on the file in runtime. Let's see an example\nwhere Athenna manipulates your RC file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node artisan make:service UserService\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Athenna will create the service file in your project but\nalso register it inside your ",(0,t.jsx)(n.code,{children:".athennarc.json"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "services": [\n    "#src/services/UserService"\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"custom-rc-file-path",children:"Custom RC file path"}),"\n",(0,t.jsxs)(n.p,{children:["You can change the name and the path of your RC file or even\ncreate customized ones for each environement (",(0,t.jsx)(n.code,{children:".athennarc.dev.json"}),",\n",(0,t.jsx)(n.code,{children:".athennarc.prod.json"}),"). To do that you need to set the new\npath to ",(0,t.jsx)(n.code,{children:"Ignite::load()"})," static method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"title=\"Path.bin('dev.ts')\"",children:"import { Ignite } from '@athenna/core'\n\nconst ignite = await new Ignite().load(import.meta.url, {\n  athennaRcPath: './bin/athennadevrc.json' \ud83d\udc48\n})\n\nawait ignite.httpServer()\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Always remember that when using relative paths to set something\nin Athenna, you need to use your project root path as reference,\njust like in the example above."})}),"\n",(0,t.jsxs)(n.h2,{id:"using-rc-file-in-packagejson",children:["Using RC file in ",(0,t.jsx)(n.code,{children:"package.json"})]}),"\n",(0,t.jsxs)(n.p,{children:["You can also use the RC file inside ",(0,t.jsx)(n.code,{children:"package.json"}),". By default,\nIf you don't specify the path of your RC file, and the default\n",(0,t.jsx)(n.code,{children:".athennarc.json"})," cannot be found in the root path of your application,\nAthenna will check if the ",(0,t.jsx)(n.code,{children:"athenna"})," property exists in your ",(0,t.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "athenna": {\n    "providers": [\n      "@athenna/core/providers/CoreProvider",\n      "@athenna/http/providers/HttpRouteProvider",\n      "@athenna/http/providers/HttpServerProvider"\n    ],\n    "directories": {\n      "bin": "bootstrap"\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"the-preloads-property",children:["The ",(0,t.jsx)(n.code,{children:"preloads"})," property"]}),"\n",(0,t.jsx)(n.p,{children:"An array of files that will be loaded when your application\nis bootstrapping. The files are loaded after booting the\nservice providers. You can do anything you want in preload\nfiles. Check the example bellow:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="say-hello.ts"',children:"import { Log } from '@athenna/logger'\nimport { Config } from '@athenna/core'\n\nLog.info(`Hello from ${Config.get('app.name')} application!`)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "preloads": [\n    "./bin/preloads/say-hello.js"\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"the-providers-property",children:["The ",(0,t.jsx)(n.code,{children:"providers"})," property"]}),"\n",(0,t.jsx)(n.p,{children:"An array of service providers to load when the application\nis bootstrapping:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "providers": [\n    "@athenna/core/providers/CoreProvider",\n    "@athenna/http/providers/HttpRouteProvider",\n    "@athenna/http/providers/HttpServerProvider"\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["More information about service providers could be found at\n",(0,t.jsx)(n.a,{href:"https://athenna.io/docs/the-basics/http/controllers",children:"service providers documentation section"}),"."]})}),"\n",(0,t.jsxs)(n.h2,{id:"the-services-property",children:["The ",(0,t.jsx)(n.code,{children:"services"})," property"]}),"\n",(0,t.jsxs)(n.p,{children:["This property is responsible to register your application\nservices or from some library inside the service container.\nIn most cases, it is better to simply instantiate your services,\nbut in others you might have different implementations for\nsome interface, using ",(0,t.jsx)(n.a,{href:"https://www.educative.io/answers/what-is-inversion-of-control",children:"inversion of control"}),"\nin these cases could be an exceptional idea to register your\nservices in the container:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "services": [\n    "#src/services/AppService",\n    "./src/services/OtherService.js"\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"the-commands-property",children:["The ",(0,t.jsx)(n.code,{children:"commands"})," property"]}),"\n",(0,t.jsx)(n.p,{children:'An object that is responsible to register your application\ncommands and their respective settings. The key of the\ncommands object needs to be exactly your command signature\nwithout any arguments, flags or spaces. Also, the value\nof it could be the command path or an object with the\n"path" key inside:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "commands": {\n    "make:exception": "@athenna/core/commands/MakeExceptionCommand",\n    "make:facade": {\n      "path": "@athenna/core/commands/MakeFacadeCommand",\n      "env": "local",\n      "destination": "./src/providers/facades",\n      "loadApp": false,\n      "stayAlive": false,\n      "loadAllCommands": false,\n      "environments": ["console"]\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Depending on the command you are running, it got their\nown configurations. Commands like ",(0,t.jsx)(n.code,{children:"make:..."})," for example,\nreads the ",(0,t.jsx)(n.code,{children:"destination"})," property to the file generated\nfor a different path from it default."]}),"\n",(0,t.jsx)(n.p,{children:"There are properties that you can define whatever your\ncommand. Let's see who they are and what they do:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"path"})})," - Defines the path to your command, this field is mandatory\nif you are using an object to define your command."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"loadApp"})})," - If ",(0,t.jsx)(n.code,{children:"true"}),", the ",(0,t.jsx)(n.code,{children:"Ignite.fire()"})," method will be called\nuntil running your command. The ",(0,t.jsx)(n.code,{children:"Ignite.fire()"})," method is responsible\nto load your env file and configuration files and also boot your\nservice providers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"env"})})," - Defines which env file will be used to run your command.\nThis field is not required and it will only be relevant when the\n",(0,t.jsx)(n.code,{children:"loadApp"})," property is ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"stayAlive"})})," - If ",(0,t.jsx)(n.code,{children:"true"}),", your command will stay running until the\nevent loop is not in use anymore. Very useful for keep running\nbackground tasks from commands."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"loadAllCommands"})})," - If ",(0,t.jsx)(n.code,{children:"true"}),", all the commands inside the ",(0,t.jsx)(n.code,{children:"commands"}),"\nproperty will be loaded. Useful when you command needs to call other command\nprogrammatically."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"environments"})})," - Only relevant when ",(0,t.jsx)(n.code,{children:"loadApp"})," is ",(0,t.jsx)(n.code,{children:"true"}),". The environments\nset will be used as parameter for ",(0,t.jsx)(n.code,{children:"Ignite.fire()"})," method and will help\nAthenna to select the service providers that should or shouldn't be booted."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["More information about commands could be found at\n",(0,t.jsx)(n.a,{href:"https://athenna.io/docs/the-basics/cli/commands",children:"cli commands documentation section"}),"."]})}),"\n",(0,t.jsxs)(n.h2,{id:"the-templates-property",children:["The ",(0,t.jsx)(n.code,{children:"templates"})," property"]}),"\n",(0,t.jsxs)(n.p,{children:["Map your application commands templates with their respective\npath. The templates mapped in this object will be used by your\n",(0,t.jsx)(n.code,{children:"make"})," commands to generate the resource with some specific\ncode template:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "templates": {\n    "exception": "node_modules/@athenna/core/templates/exception.edge",\n    "facade": "node_modules/@athenna/core/templates/facade.edge"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"the-directories-property",children:["The ",(0,t.jsx)(n.code,{children:"directories"})," property"]}),"\n",(0,t.jsxs)(n.p,{children:["Map your application directories with their respective\nbase path. The ",(0,t.jsx)(n.a,{href:"https://athenna.io/docs/digging-deeper/helpers#path",children:(0,t.jsx)(n.code,{children:"Path"})}),"\nclass will use the directories mapped in this object to\nresolve the paths of your application:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "directories": {\n    "bin": "bin",\n    "src": "src",\n    "app": "app",\n    "bootstrap": "bootstrap",\n    "public": "public",\n    "static": "public/static",\n    "assets": "public/assets",\n    "nodeModules": "node_modules",\n    "nodeModulesBin": "node_modules/.bin",\n    "tests": "tests",\n    "stubs": "tests/stubs",\n    "fixtures": "tests/fixtures",\n    "models": "src/models",\n    "services": "src/services",\n    "jobs": "src/jobs",\n    "workers": "src/workers",\n    "exceptions": "src/exceptions",\n    "repositories": "src/repositories",\n    "console": "src/console",\n    "commands": "src/console/commands",\n    "http": "src/http",\n    "guards": "src/http/guards",\n    "controllers": "src/http/controllers",\n    "middlewares": "src/http/middlewares",\n    "interceptors": "src/http/interceptors",\n    "terminators": "src/http/terminators",\n    "validators": "src/validators",\n    "cron": "src/cron",\n    "schedulers": "src/cron/schedulers",\n    "config": "src/config",\n    "database": "src/database",\n    "seeders": "src/database/seeders",\n    "migrations": "src/database/migrations",\n    "lang": "src/lang",\n    "resources": "src/resources",\n    "views": "src/resources/views",\n    "locales": "src/resources/locales", \n    "providers": "src/providers",\n    "facades": "src/facades", \n    "routes": "src/routes",\n    "storage": "src/storage",\n    "logs": "src/storage/logs"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The paths above are the default ones used by Athenna to resolve\nyour application paths. You can change one of them or many\nif you want, your directories defined in ",(0,t.jsx)(n.code,{children:"directories"})," property\nwill always be merged with the defaults."]}),"\n",(0,t.jsxs)(n.p,{children:["Athenna always rely on ",(0,t.jsx)(n.a,{href:"https://athenna.io/docs/digging-deeper/helpers#path",children:(0,t.jsx)(n.code,{children:"Path"})}),"\nclass methods to find files and directories that are used\ninternally by the framework, like configuration file, route\nfiles, entry points and many others. Changing the ",(0,t.jsx)(n.code,{children:"directories"})," property\ncould be very useful when you are building your own project structure."]}),"\n",(0,t.jsxs)(n.h2,{id:"the-controllers-property",children:["The ",(0,t.jsx)(n.code,{children:"controllers"})," property"]}),"\n",(0,t.jsx)(n.p,{children:"An array with the controllers of your application. The\ncontrollers registered in this array will be registered\nin the service container to be accessed easily by your\nRoute facade:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "controllers": [\n    "#src/http/controllers/AppController",\n    "./src/http/controllers/OtherController.js"\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"the-middlewares-property",children:["The ",(0,t.jsx)(n.code,{children:"middlewares"})," property"]}),"\n",(0,t.jsxs)(n.p,{children:["An array with the middlewares of your application. The\nmiddlewares registered in this array will be registered\nin the service container to be accessed easily by your\n",(0,t.jsx)(n.code,{children:"Route"})," facade:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "middlewares": [\n    "#src/http/middlewares/AppMiddleware",\n    "./src/http/interceptors/AppInterceptor.js"\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Athenna expects that the middlewares set in this property\nto be annotated with ",(0,t.jsx)(n.code,{children:"@Middleware()"}),", ",(0,t.jsx)(n.code,{children:"@Interceptor()"})," or ",(0,t.jsx)(n.code,{children:"@Terminator()"}),"\nannotations, this is not mandatory, but you will only\nbe able to set the name of the middleware or if it is global or not using\nthe annotations."]}),"\n",(0,t.jsxs)(n.p,{children:["If you are not using TypeScript in your application, you can use the\n",(0,t.jsx)(n.a,{href:"/docs/getting-started/athennarc-file#the-namedmiddlewares-property",children:(0,t.jsx)(n.code,{children:"namedMiddlewares"})}),"\nproperty to register named middlewares and the\n",(0,t.jsx)(n.a,{href:"/docs/getting-started/athennarc-file#the-globalmiddlewares-property",children:(0,t.jsx)(n.code,{children:"globalMiddlewares"})}),"\nproperty to register global middlewares."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["More information about middlewares could be found at\n",(0,t.jsx)(n.a,{href:"https://athenna.io/docs/rest-api-application/middlewares",children:"http middlewares documentation section"}),"."]})}),"\n",(0,t.jsxs)(n.h2,{id:"the-namedmiddlewares-property",children:["The ",(0,t.jsx)(n.code,{children:"namedMiddlewares"})," property"]}),"\n",(0,t.jsxs)(n.p,{children:["Map the named middlewares of your application. Named\nmiddlewares could be configured using the ",(0,t.jsx)(n.code,{children:"@Middleware"}),"\nannotation, but if you are not using TypeScript in your\napplication, you can use this object to map your named\nmiddlewares. Named middlewares are very useful to be used\nin your route declaration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "namedMiddlewares": {\n    "app": "#src/http/middlewares/AppMiddleware",\n    "intercept": "./src/http/interceptors/AppInterceptor.js"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"the-globalmiddlewares-property",children:["The ",(0,t.jsx)(n.code,{children:"globalMiddlewares"})," property"]}),"\n",(0,t.jsxs)(n.p,{children:["An array with the global middlewares of your application.\nGlobal middlewares could be configured using the ",(0,t.jsx)(n.code,{children:"@Middleware"}),"\nannotation, but if you are not using TypeScript in your\napplication, you can use this object to map your named\nmiddlewares. Global middlewares are executed every time\nin any request of your application:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "globalMiddlewares": [\n    "#src/http/middlewares/AppMiddleware",\n    "./src/http/interceptors/AppInterceptor.js"\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"the-artisan-property",children:["The ",(0,t.jsx)(n.code,{children:"artisan"})," property"]}),"\n",(0,t.jsxs)(n.p,{children:["An object with a variety of Artisan configurations.\nAt this point the only configurations accepted are ",(0,t.jsx)(n.code,{children:"artisan.child.executor"}),"\nand ",(0,t.jsx)(n.code,{children:"artisan.child.path"}),". Both configurations are used to define\nhow the ",(0,t.jsx)(n.code,{children:"Artisan.callInChild()"})," method will behave when no options\nare set to it as second argument:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "artisan": {\n    "child": {\n      "executor": "node --inspect",\n      "path": "./bin/artisan.ts"\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Athenna will automatically parse the ",(0,t.jsx)(n.code,{children:"artisan.child.path"})," using\nthe ",(0,t.jsx)(n.code,{children:"Path.ext()"})," method, so you don't need to worry about if the\nextension is ",(0,t.jsx)(n.code,{children:".js"})," or ",(0,t.jsx)(n.code,{children:".ts"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(6540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
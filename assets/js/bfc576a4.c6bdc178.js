"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[6619],{4199:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=t(4848),r=t(8453),a=t(7049);const o={title:"Swagger Documentation",sidebar_position:10,description:"See how to create the Swagger documentation for Athenna REST API application."},i="Swagger Documentation",c={id:"rest-api-application/swagger-documentation",title:"Swagger Documentation",description:"See how to create the Swagger documentation for Athenna REST API application.",source:"@site/docs/rest-api-application/swagger-documentation.mdx",sourceDirName:"rest-api-application",slug:"/rest-api-application/swagger-documentation",permalink:"/docs/rest-api-application/swagger-documentation",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/rest-api-application/swagger-documentation.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Swagger Documentation",sidebar_position:10,description:"See how to create the Swagger documentation for Athenna REST API application."},sidebar:"tutorialSidebar",previous:{title:"Security with Helmet",permalink:"/docs/rest-api-application/security-with-helmet"},next:{title:"Views",permalink:"/docs/rest-api-application/views"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Basic usage",id:"basic-usage",level:2},{value:"Usage in route groups",id:"usage-in-route-groups",level:3},{value:"Usage in route resources",id:"usage-in-route-resources",level:3},{value:"Disabling Swagger",id:"disabling-swagger",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"swagger-documentation",children:"Swagger Documentation"})}),"\n",(0,n.jsx)(s.p,{children:"See how to create the Swagger documentation for Athenna REST API application."}),"\n",(0,n.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(s.p,{children:"Swagger allows you to describe the structure of\nyour APIs so that machines can read them. The\nability of APIs to describe their own structure\nis the root of all awesomeness in Swagger."}),"\n",(0,n.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(s.p,{children:["Athenna uses the ",(0,n.jsx)(s.a,{href:"https://github.com/fastify/fastify-swagger",children:(0,n.jsx)(s.code,{children:"@fastify/swagger"})}),"\nand ",(0,n.jsx)(s.a,{href:"https://github.com/fastify/fastify-swagger-ui",children:(0,n.jsx)(s.code,{children:"@fastify/swagger-ui"})}),"\nplugins inside ",(0,n.jsx)(s.code,{children:"HttpKernel"}),". All the configurations that ",(0,n.jsx)(s.code,{children:"@fastify/swagger"}),"\nsupports can be set inside  ",(0,n.jsx)(a.A,{father:"config",child:"http.ts"})," file in the ",(0,n.jsx)(s.code,{children:"swagger.configurations"}),"\nobject. And all the configurations that ",(0,n.jsx)(s.code,{children:"@fastify/swagger-ui"}),"\nsupports can be set inside  ",(0,n.jsx)(a.A,{father:"config",child:"http.ts"})," file in the ",(0,n.jsx)(s.code,{children:"swagger.ui"})," object:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.config('http.ts')\"",children:"export default {\n  swagger: {\n    enabled: true,\n    ui: {\n      staticCSP: true,\n      routePrefix: '/docs'\n    },\n    configurations: {\n      mode: 'dynamic',\n      swagger: {\n        basePath: '/',\n        consumes: ['application/json'],\n        produces: ['application/json'],\n        info: {\n          title: Config.get('app.name'),\n          version: Config.get('app.version'),\n          description: Config.get('app.description')\n        },\n        externalDocs: {\n          url: 'https://athenna.io',\n          description: 'Find more info about Athenna here'\n        },\n      },\n    },\n  }\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,n.jsxs)(s.p,{children:["You can set your Swagger configurations using\nthe ",(0,n.jsx)(s.code,{children:"Route"})," facade in ",(0,n.jsx)(s.code,{children:"routes/http.ts"})," file:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.route('http.ts')\"",children:"Route.get('/hello', 'WelcomeController.show')\n    .summary('Hello route')\n    .tags('hello', 'world')\n    .description('Hello route used to say hello to the user')\n    .queryString('name', 'string', 'Name to say hello')\n    .response(200, {\n        description: 'Successful response',\n        schema: {\n            type: 'object',\n            properties: {\n                name: { type: 'string' }\n            },\n        }\n    })\n"})}),"\n",(0,n.jsxs)(s.p,{children:["You can also use the ",(0,n.jsx)(s.code,{children:"swagger()"})," method and use\nthe same configurations of ",(0,n.jsx)(s.code,{children:"@fastify/swagger"})," plugin:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.route('http.ts')\"",children:"Route.get('/hello', 'WelcomeController.show').swagger({\n    summary: 'Hello route',\n    tags: ['hello', 'world'],\n    description: 'Hello route used to say hello to the user',\n    querystring: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string',\n          description: 'Name to say hello'\n        }\n      }\n    },\n    response: {\n        200: {\n            description: 'Successful response',\n            properties: {\n                name: { type: 'string' }\n            }\n        }\n    }\n})\n"})}),"\n",(0,n.jsx)(s.h3,{id:"usage-in-route-groups",children:"Usage in route groups"}),"\n",(0,n.jsx)(s.p,{children:"You can also use all the swagger methods in route groups.\nThis will set the same configuration for all routes inside\nthe group:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.route('http.ts')\"",children:"Route.group(() => {\n    Route.get('/hello', 'WelcomeController.show').summary('Hello route')\n}).swagger({...})\n"})}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsxs)(s.p,{children:['The swagger methods of route groups will never overwrite\nthe already set methods of routes. Use them to create\n"defaults" configurations for all routes such as ',(0,n.jsx)(s.code,{children:"security"}),"."]})}),"\n",(0,n.jsx)(s.h3,{id:"usage-in-route-resources",children:"Usage in route resources"}),"\n",(0,n.jsx)(s.p,{children:"Same behavior as route groups, but for resources:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.route('http.ts')\"",children:"// Set the same configurations for all routes of resource\nRoute.resource('/tests', 'WelcomeController').swagger({...})\n\n// Set configuration only for that specific action of resource\nRoute.resource('/tests', 'WelcomeController').swagger('index', {...})\nRoute.resource('/tests', 'WelcomeController').swagger('store', {...})\n"})}),"\n",(0,n.jsx)(s.h2,{id:"disabling-swagger",children:"Disabling Swagger"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"HttpKernel"})," class will automatically disable the\nplugin registration if the package does not exist, so\nto disable Swagger in Athenna you need to remove the\n",(0,n.jsx)(s.code,{children:"@fastify/swagger"})," and ",(0,n.jsx)(s.code,{children:"@fastify/swagger-ui"})," packages from your\napplication:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm remove @fastify/swagger @fastify/swagger-ui\n"})}),"\n",(0,n.jsxs)(s.p,{children:["You can also disable by setting ",(0,n.jsx)(s.code,{children:"http.swagger.enabled"})," to ",(0,n.jsx)(s.code,{children:"false"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.config('http.ts')\"",children:"export default {\n  swagger: {\n    enabled: false\n  }\n}\n"})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7049:(e,s,t)=>{t.d(s,{A:()=>a});t(6540);const n={hoverCardContainer:"hoverCardContainer_jqUQ",hoverCardLink:"hoverCardLink_oDZU",hoverCard:"hoverCard_qTDS"};var r=t(4848);function a(e){let s=e.father;switch(e.father){case"storage":s="src/storage";break;case"logs":s="src/storage/logs";break;case"views":s="src/resources/views";break;case"locales":s="src/resources/locales";break;case"static":s="src/resources/static";break;case"config":s="src/config";break;case"database":s="src/database";break;case"seeders":s="src/database/seeders";break;case"migrations":s="src/database/migrations";break;case"console":s="src/console";break;case"commands":s="src/console/commands";break;case"cron":s="src/cron";break;case"schedulers":s="src/cron/schedulers";break;case"models":s="src/models";break;case"services":s="src/services";break;case"repositories":s="src/repositories";break;case"http":s="src/http";break;case"controllers":s="src/http/controllers";break;case"middlewares":s="src/http/middlewares";break;case"interceptors":s="src/http/interceptors";break;case"terminators":s="src/http/terminators";break;case"stubs":s="tests/stubs";break;case"fixtures":s="tests/fixtures";break;case"providers":s="src/providers";break;case"facades":s="src/facades"}return(0,r.jsxs)("div",{className:n.hoverCardContainer,children:[(0,r.jsx)("a",{className:n.hoverCardLink,href:`/docs/the-basics/helpers#path${e.father}`,children:(0,r.jsxs)("code",{children:["Path.",e.father,"(",e.child?`'${e.child}'`:"",")"]})}),(0,r.jsx)("div",{className:n.hoverCard,children:(0,r.jsxs)("p",{style:{margin:0},children:["./",s,e.child?`/${e.child}`:""]})})]})}},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>i});var n=t(6540);const r={},a=n.createContext(r);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);
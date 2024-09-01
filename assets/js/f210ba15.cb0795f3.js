"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[7345],{6474:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=i(4848),s=i(8453),n=i(7049);const a={title:"Rate Limiting",sidebar_position:7,description:"See how to create rate limiting rules for Athenna REST API application."},o="Rate Limiting",c={id:"rest-api-application/rate-limiting",title:"Rate Limiting",description:"See how to create rate limiting rules for Athenna REST API application.",source:"@site/docs/rest-api-application/rate-limiting.mdx",sourceDirName:"rest-api-application",slug:"/rest-api-application/rate-limiting",permalink:"/docs/rest-api-application/rate-limiting",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/rest-api-application/rate-limiting.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Rate Limiting",sidebar_position:7,description:"See how to create rate limiting rules for Athenna REST API application."},sidebar:"tutorialSidebar",previous:{title:"Annotations",permalink:"/docs/rest-api-application/annotations"},next:{title:"Tracing Requests",permalink:"/docs/rest-api-application/tracing-requests"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Basic usage",id:"basic-usage",level:2},{value:"Configuring for specific routes",id:"configuring-for-specific-routes",level:2},{value:"Usage in route groups",id:"usage-in-route-groups",level:3},{value:"Usage in route resources",id:"usage-in-route-resources",level:3},{value:"Rate limit headers",id:"rate-limit-headers",level:2},{value:"Disabling rate limiting",id:"disabling-rate-limiting",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"rate-limiting",children:"Rate Limiting"})}),"\n",(0,r.jsx)(t.p,{children:"See how to create rate-limiting rules for Athenna REST API application."}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"Rate limiters ensure the fair usage of your http\nserver by clients. It regulates the number of times\na user can request your application in a given time-frame."}),"\n",(0,r.jsx)(t.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,r.jsxs)(t.p,{children:["Athenna uses the ",(0,r.jsx)(t.a,{href:"https://github.com/fastify/fastify-rate-limit",children:(0,r.jsx)(t.code,{children:"@fastify/rate-limit"})}),"\nplugin inside ",(0,r.jsx)(t.code,{children:"HttpKernel"}),". All the configurations that\n",(0,r.jsx)(t.code,{children:"@fastify/rate-limit"})," supports can be set inside ",(0,r.jsx)(n.A,{father:"config",child:"http.ts"}),"\nfile in the ",(0,r.jsx)(t.code,{children:"rateLimit"})," object:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"title=\"Path.config('http.ts')\"",children:"export default {\n  rateLimit: {\n    global: true,\n    max: 1000,\n    ban: null,\n    timeWindow: 1000 * 60,\n    cache: 5000,\n    allowList: [],\n    continueExceeding: false,\n    enableDraftSpec: false\n  }\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"configuring-for-specific-routes",children:"Configuring for specific routes"}),"\n",(0,r.jsxs)(t.p,{children:["In Athenna you can set specific options of rate limit\nfor specific routes. You can also disable the ",(0,r.jsx)(t.code,{children:"global"}),"\noption of your ",(0,r.jsx)(t.code,{children:"rateLimit"})," configuration in ",(0,r.jsx)(n.A,{father:"config",child:"http.ts"}),"\nand set different rules in your routes:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"title=\"Path.route('http.ts')\"",children:"Route\n  .get('/hello', 'WelcomeController.show')\n  .rateLimit({ max: 1, timeWindow: '1 minute' }) \ud83d\udc48\n"})}),"\n",(0,r.jsx)(t.h3,{id:"usage-in-route-groups",children:"Usage in route groups"}),"\n",(0,r.jsxs)(t.p,{children:["You can also use the ",(0,r.jsx)(t.code,{children:"rateLimit()"})," method in route groups.\nThis will set the same configuration for all routes inside\nthe group:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"title=\"Path.route('http.ts')\"",children:"Route.group(() => {\n    Route.get('/hello', 'WelcomeController.show')\n}).rateLimit({ max: 1, timeWindow: '1 minute' }) \ud83d\udc48\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"rateLimit()"}),' method of route groups will never\noverwrite the already set methods of routes. Use it\nto create "defaults" configurations for all routes.']})}),"\n",(0,r.jsx)(t.h3,{id:"usage-in-route-resources",children:"Usage in route resources"}),"\n",(0,r.jsx)(t.p,{children:"Same behavior as route groups, but for resources:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"title=\"Path.route('http.ts')\"",children:"// Set the same configurations for all routes of resource\nRoute.resource('/tests', 'WelcomeController').rateLimit({...})\n\n// Set configuration only for that specific action of resource\nRoute.resource('/tests', 'WelcomeController').rateLimit('index', {...})\nRoute.resource('/tests', 'WelcomeController').rateLimit('store', {...})\n"})}),"\n",(0,r.jsx)(t.h2,{id:"rate-limit-headers",children:"Rate limit headers"}),"\n",(0,r.jsxs)(t.p,{children:["The response will have the following headers\nif ",(0,r.jsx)(t.code,{children:"enableDraftSpec"})," is true in ",(0,r.jsx)(t.code,{children:"rateLimit"})," config or route:"]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Header"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"ratelimit-limit"})}),(0,r.jsx)("td",{children:"How many requests the client can make"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"ratelimit-remaining"})}),(0,r.jsx)("td",{children:"How many requests remain to the client in the timewindow"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"ratelimit-reset"})}),(0,r.jsx)("td",{children:"How many seconds must pass before the rate limit resets"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"retry-after"})}),(0,r.jsxs)("td",{children:["Contains the same value in time as ",(0,r.jsx)("code",{children:"ratelimit-reset"})]})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["For more information on Rate limit headers, please\nconsult the ",(0,r.jsx)(t.a,{href:"https://developers.facebook.com/docs/graph-api/overview/rate-limiting/",children:"Meta article about rate limiters"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"disabling-rate-limiting",children:"Disabling rate limiting"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"HttpKernel"})," class will automatically disable the\nplugin registration if the package does not exist, so\nto disable rate-limiting in Athenna you need to remove the\n",(0,r.jsx)(t.code,{children:"@fastify/rate-limit"})," package from your application:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm remove @fastify/rate-limit\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can also disable by setting ",(0,r.jsx)(t.code,{children:"http.rateLimit.enabled"})," to ",(0,r.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"title=\"Path.config('http.ts')\"",children:"export default {\n  rateLimit: {\n    enabled: false\n  }\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7049:(e,t,i)=>{i.d(t,{A:()=>n});i(6540);const r={hoverCardContainer:"hoverCardContainer_jqUQ",hoverCardLink:"hoverCardLink_oDZU",hoverCard:"hoverCard_qTDS"};var s=i(4848);function n(e){let t=e.father;switch(e.father){case"storage":t="src/storage";break;case"logs":t="src/storage/logs";break;case"views":t="src/resources/views";break;case"locales":t="src/resources/locales";break;case"static":t="src/resources/static";break;case"config":t="src/config";break;case"database":t="src/database";break;case"seeders":t="src/database/seeders";break;case"migrations":t="src/database/migrations";break;case"console":t="src/console";break;case"commands":t="src/console/commands";break;case"cron":t="src/cron";break;case"schedulers":t="src/cron/schedulers";break;case"models":t="src/models";break;case"services":t="src/services";break;case"repositories":t="src/repositories";break;case"http":t="src/http";break;case"controllers":t="src/http/controllers";break;case"middlewares":t="src/http/middlewares";break;case"interceptors":t="src/http/interceptors";break;case"terminators":t="src/http/terminators";break;case"stubs":t="tests/stubs";break;case"fixtures":t="tests/fixtures";break;case"providers":t="src/providers";break;case"facades":t="src/facades"}return(0,s.jsxs)("div",{className:r.hoverCardContainer,children:[(0,s.jsx)("a",{className:r.hoverCardLink,href:`/docs/the-basics/helpers#path${e.father}`,children:(0,s.jsxs)("code",{children:["Path.",e.father,"(",e.child?`'${e.child}'`:"",")"]})}),(0,s.jsx)("div",{className:r.hoverCard,children:(0,s.jsxs)("p",{style:{margin:0},children:["./",t,e.child?`/${e.child}`:""]})})]})}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var r=i(6540);const s={},n=r.createContext(s);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[8475],{4203:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var r=t(4848),i=t(8453),n=t(7049);const o={title:"Security with Helmet",sidebar_position:9,description:"See how to improve the security of your REST API with Helmet in Athenna."},c="Security with Helmet",a={id:"rest-api-application/security-with-helmet",title:"Security with Helmet",description:"See how to improve the security of your REST API with Helmet in Athenna.",source:"@site/docs/rest-api-application/security-with-helmet.mdx",sourceDirName:"rest-api-application",slug:"/rest-api-application/security-with-helmet",permalink:"/docs/rest-api-application/security-with-helmet",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/rest-api-application/security-with-helmet.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Security with Helmet",sidebar_position:9,description:"See how to improve the security of your REST API with Helmet in Athenna."},sidebar:"tutorialSidebar",previous:{title:"Tracing Requests",permalink:"/docs/rest-api-application/tracing-requests"},next:{title:"Swagger Documentation",permalink:"/docs/rest-api-application/swagger-documentation"}},l={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Basic usage",id:"basic-usage",level:2},{value:"Configuring for specific routes",id:"configuring-for-specific-routes",level:2},{value:"Usage in route groups",id:"usage-in-route-groups",level:3},{value:"Usage in route resources",id:"usage-in-route-resources",level:3},{value:"Disabling Helmet",id:"disabling-helmet",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"security-with-helmet",children:"Security with Helmet"})}),"\n",(0,r.jsx)(s.p,{children:"See how to improve the security of your REST API with Helmet in Athenna."}),"\n",(0,r.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://www.npmjs.com/package/helmet",children:(0,r.jsx)(s.code,{children:"Helmet"})})," helps secure\napplications by setting HTTP response headers. By default,\nHelmet sets the following headers:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Content-Security-Policy"}),": A powerful allow-list of what can\nhappen on your page which mitigates many attacks."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Cross-Origin-Opener-Policy"}),": Helps process-isolate your\npage."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Cross-Origin-Resource-Policy"}),": Blocks others from loading\nyour resources cross-origin."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Origin-Agent-Cluster"}),": Changes process isolation to be\norigin-based."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Referrer-Policy"}),": Controls the Referer header."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Strict-Transport-Security"}),": Tells browsers to prefer\nHTTPS."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"X-Content-Type-Options"}),": Avoids MIME sniffing."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"X-DNS-Prefetch-Control"}),": Controls DNS prefetching."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"X-Download-Options"}),": Forces downloads to be saved\n(Internet Explorer only)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"X-Frame-Options"}),": Legacy header that mitigates clickjacking\nattacks."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"X-Permitted-Cross-Domain-Policies"}),": Controls cross-domain\nbehavior for Adobe products, like Acrobat."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"X-Powered-By"}),": Info about the web server. Removed because\nit could be used in simple attacks."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"X-XSS-Protection"}),": Legacy header that tries to mitigate XSS\nattacks, but makes things worse, so Helmet disables it."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,r.jsxs)(s.p,{children:["Athenna uses the ",(0,r.jsx)(s.a,{href:"https://github.com/fastify/helmet",children:(0,r.jsx)(s.code,{children:"@fastify/helmet"})}),"\nplugin inside ",(0,r.jsx)(s.code,{children:"HttpKernel"}),". All the configurations that\n",(0,r.jsx)(s.code,{children:"@fastify/helmet"})," supports can be set inside ",(0,r.jsx)(n.A,{father:"config",child:"http.ts"}),"\nfile in the ",(0,r.jsx)(s.code,{children:"helmet"})," object:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"export default {\n  helmet: {\n    enabled: true,\n    global: true\n  }\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"configuring-for-specific-routes",children:"Configuring for specific routes"}),"\n",(0,r.jsxs)(s.p,{children:["In Athenna you can set specific options of helmet\nfor specific routes. You can also disable the ",(0,r.jsx)(s.code,{children:"global"}),"\noption of your ",(0,r.jsx)(s.code,{children:"helmet"})," configuration in  ",(0,r.jsx)(n.A,{father:"config",child:"http.ts"}),"\nand set different rules in your routes:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.route('http.ts')\"",children:"Route\n  .get('/hello', 'WelcomeController.show')\n  .helmet({ frameguard: { action: 'foo' } }) \ud83d\udc48\n"})}),"\n",(0,r.jsx)(s.h3,{id:"usage-in-route-groups",children:"Usage in route groups"}),"\n",(0,r.jsxs)(s.p,{children:["You can also use the ",(0,r.jsx)(s.code,{children:"helmet()"})," method in route groups.\nThis will set the same configuration for all routes inside\nthe group:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.route('http.ts')\"",children:"Route.group(() => {\n    Route.get('/hello', 'WelcomeController.show')\n}).helmet({ frameguard: { action: 'foo' } }) \ud83d\udc48\n"})}),"\n",(0,r.jsx)(s.admonition,{type:"warning",children:(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"helmet()"}),' method of route groups will never\noverwrite the already set methods of routes. Use it\nto create "defaults" configurations for all routes.']})}),"\n",(0,r.jsx)(s.h3,{id:"usage-in-route-resources",children:"Usage in route resources"}),"\n",(0,r.jsx)(s.p,{children:"Same behavior as route groups, but for resources:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.route('http.ts')\"",children:"// Set the same configurations for all routes of resource\nRoute.resource('/tests', 'WelcomeController').helmet({...})\n\n// Set configuration only for that specific action of resource\nRoute.resource('/tests', 'WelcomeController').helmet('index', {...})\nRoute.resource('/tests', 'WelcomeController').helmet('store', {...})\n"})}),"\n",(0,r.jsx)(s.h2,{id:"disabling-helmet",children:"Disabling Helmet"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"HttpKernel"})," class will automatically disable the\nplugin registration if the package does not exist, so\nto disable helmet in Athenna you need to\nremove the ",(0,r.jsx)(s.code,{children:"@fastify/helmet"})," package from your\napplication:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"npm remove @fastify/helmet\n"})}),"\n",(0,r.jsxs)(s.p,{children:["You can also disable by setting ",(0,r.jsx)(s.code,{children:"http.helmet.enabled"})," to ",(0,r.jsx)(s.code,{children:"false"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.config('http.ts')\"",children:"export default {\n  helmet: {\n    enabled: false\n  }\n}\n"})})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7049:(e,s,t)=>{t.d(s,{A:()=>n});t(6540);const r={hoverCardContainer:"hoverCardContainer_jqUQ",hoverCardLink:"hoverCardLink_oDZU",hoverCard:"hoverCard_qTDS"};var i=t(4848);function n(e){let s=e.father;switch(e.father){case"storage":s="src/storage";break;case"logs":s="src/storage/logs";break;case"views":s="src/resources/views";break;case"locales":s="src/resources/locales";break;case"static":s="src/resources/static";break;case"config":s="src/config";break;case"database":s="src/database";break;case"seeders":s="src/database/seeders";break;case"migrations":s="src/database/migrations";break;case"console":s="src/console";break;case"commands":s="src/console/commands";break;case"cron":s="src/cron";break;case"schedulers":s="src/cron/schedulers";break;case"models":s="src/models";break;case"services":s="src/services";break;case"repositories":s="src/repositories";break;case"http":s="src/http";break;case"controllers":s="src/http/controllers";break;case"middlewares":s="src/http/middlewares";break;case"interceptors":s="src/http/interceptors";break;case"terminators":s="src/http/terminators";break;case"stubs":s="tests/stubs";break;case"fixtures":s="tests/fixtures";break;case"providers":s="src/providers";break;case"facades":s="src/facades"}return(0,i.jsxs)("div",{className:r.hoverCardContainer,children:[(0,i.jsx)("a",{className:r.hoverCardLink,href:`/docs/the-basics/helpers#path${e.father}`,children:(0,i.jsxs)("code",{children:["Path.",e.father,"(",e.child?`'${e.child}'`:"",")"]})}),(0,i.jsx)("div",{className:r.hoverCard,children:(0,i.jsxs)("p",{style:{margin:0},children:["./",s,e.child?`/${e.child}`:""]})})]})}},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>c});var r=t(6540);const i={},n=r.createContext(i);function o(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);
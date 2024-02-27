"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[1002],{5234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(5893),i=n(1151);const a={title:"Tracing Requests",sidebar_position:8,description:"Understand how to trace requests in your REST API application of Athenna."},s="Tracing Requests",c={id:"rest-api-application/tracing-requests",title:"Tracing Requests",description:"Understand how to trace requests in your REST API application of Athenna.",source:"@site/docs/rest-api-application/tracing-requests.mdx",sourceDirName:"rest-api-application",slug:"/rest-api-application/tracing-requests",permalink:"/docs/rest-api-application/tracing-requests",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/rest-api-application/tracing-requests.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Tracing Requests",sidebar_position:8,description:"Understand how to trace requests in your REST API application of Athenna."},sidebar:"tutorialSidebar",previous:{title:"Rate Limiting",permalink:"/docs/rest-api-application/rate-limiting"},next:{title:"Security with Helmet",permalink:"/docs/rest-api-application/security-with-helmet"}},o={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Basic usage",id:"basic-usage",level:2},{value:"Disabling tracer",id:"disabling-tracer",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"tracing-requests",children:"Tracing Requests"}),"\n",(0,r.jsx)(t.p,{children:"Understand how to trace requests in your REST API application of Athenna."}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"Briefly, tracing represents a single user's\njourney through an entire app stack. By\ntracing through a stack, developers can identify\nwhat happened with determined request and also\nidentify bottlenecks and focus on improving performance."}),"\n",(0,r.jsx)(t.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,r.jsxs)(t.p,{children:["Athenna uses the ",(0,r.jsx)(t.a,{href:"https://github.com/puzpuzpuz/cls-rtracer",children:(0,r.jsx)(t.code,{children:"cls-rtracer"})}),"\nplugin inside ",(0,r.jsx)(t.code,{children:"HttpKernel"}),". All the configurations\nthat ",(0,r.jsx)(t.code,{children:"cls-rtracer"})," supports can be set inside\n",(0,r.jsx)(t.code,{children:"Path.config('http.ts')"})," file in the ",(0,r.jsx)(t.code,{children:"rTracer"})," object:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"title=\"Path.config('http.ts')\"",children:"export default {\n  rTracer: {\n    enabled: true,\n    echoHeader: false,\n    useHeader: false,\n    headerName: 'X-Request-Id',\n    useFastifyRequestId: false\n  }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["When ",(0,r.jsx)(t.code,{children:"trace"})," is set to ",(0,r.jsx)(t.code,{children:"true"}),", the ",(0,r.jsx)(t.code,{children:"cls-rtracer"}),"\nplugin will be enabled and a UUID will be generated\nfor each request. This UUID will be available in\n",(0,r.jsx)(t.code,{children:"request.id"})," property of your routes:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"title=\"Path.routes('http.ts')\"",children:"import { Log } from '@athenna/logger'\nimport { Route } from '@athenna/http'\n\nRoute.get('/', ({ request }) => {\n  Log.info(request.id) // 123e4567-e89b-12d3-a456-426614174000\n\n  return 'Hello World!'\n})\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Athenna request logger enabled by ",(0,r.jsx)(t.code,{children:"http.logger"}),"\nconfiguration will automatically log the request\nID for you depending on the formatter your are using."]})}),"\n",(0,r.jsx)(t.h2,{id:"disabling-tracer",children:"Disabling tracer"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"HttpKernel"})," class will automatically disable the\nplugin registration if the package does not exist, so\nto disable tracer in Athenna you need to remove the\n",(0,r.jsx)(t.code,{children:"cls-rtracer"})," package from your application:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm remove cls-rtracer\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can also disable by setting ",(0,r.jsx)(t.code,{children:"http.rTracer.enabled"})," to ",(0,r.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"title=\"Path.config('http.ts')\"",children:"export default {\n  rTracer: {\n    enabled: false\n  }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Or by setting the ",(0,r.jsx)(t.code,{children:"trace"})," option as ",(0,r.jsx)(t.code,{children:"false"})," when booting the\nserver in ",(0,r.jsx)(t.code,{children:"Ignite.httpServer()"})," method:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"title=\"Path.bootstrap('main.ts')\"",children:"import { Ignite } from '@athenna/core'\n\nconst ignite = await new Ignite().load(import.meta.url)\n\nawait ignite.httpServer({\n  trace: false \ud83d\udc48\n})\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(7294);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
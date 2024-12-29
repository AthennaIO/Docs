"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[217],{5867:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"rest-api-application/static-files","title":"Static Files","description":"See how to serve static files in Athenna REST API application.","source":"@site/docs/rest-api-application/static-files.mdx","sourceDirName":"rest-api-application","slug":"/rest-api-application/static-files","permalink":"/docs/rest-api-application/static-files","draft":false,"unlisted":false,"editUrl":"https://github.com/AthennaIO/Docs/tree/main/docs/rest-api-application/static-files.mdx","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Static Files","sidebar_position":12,"description":"See how to serve static files in Athenna REST API application."},"sidebar":"tutorialSidebar","previous":{"title":"Views","permalink":"/docs/rest-api-application/views"},"next":{"title":"Commands","permalink":"/docs/cli-application/commands"}}');var a=t(4848),i=t(8453),r=t(7049);const c={title:"Static Files",sidebar_position:12,description:"See how to serve static files in Athenna REST API application."},o="Static Files",l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Basic usage",id:"basic-usage",level:2},{value:"Custom file name",id:"custom-file-name",level:3},{value:"Disabling static file server",id:"disabling-static-file-server",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"static-files",children:"Static Files"})}),"\n",(0,a.jsx)(s.p,{children:"See how to serve static files in Athenna REST API application."}),"\n",(0,a.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(s.p,{children:["In Athenna you can use the ",(0,a.jsx)(s.code,{children:"response"})," object to serve static\nfiles from a given directory."]}),"\n",(0,a.jsx)(s.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,a.jsxs)(s.p,{children:["Athenna uses the ",(0,a.jsx)(s.a,{href:"https://github.com/fastify/fastify-static",children:(0,a.jsx)(s.code,{children:"@fastify/static"})}),"\nplugins inside ",(0,a.jsx)(s.code,{children:"HttpKernel"}),". All the configurations that ",(0,a.jsx)(s.code,{children:"@fastify/static"}),"\nsupports can be set inside  ",(0,a.jsx)(r.A,{father:"config",child:"http.ts"})," file in the ",(0,a.jsx)(s.code,{children:"static"}),"\nobject."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.config('http.ts')\"",children:"import { Path } from '@athenna/common'\n\nexport default {\n  static: {\n    enabled: true,\n    root: Path.public(),\n    prefix: '/public/'\n  }\n}\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Now you can use the ",(0,a.jsx)(s.code,{children:"response.sendFile()"})," methods to serve\nfiles from ",(0,a.jsx)(r.A,{father:"public"})," directory:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.route('http.ts')\"",children:"Route.get('/hello', ({ response }) => {\n  // Serve Path.public('image.png') directly\n  return response.sendFile('image.png') \ud83d\udc48\n})\n"})}),"\n",(0,a.jsx)(s.p,{children:"To serve a file from a different root location add the\nroot path as second parameter:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.route('http.ts')\"",children:"Route.get('/hello', ({ response }) => {\n  return response.sendFile('image.png', Path.build()) \ud83d\udc48\n})\n"})}),"\n",(0,a.jsx)(s.p,{children:"You could also add options directly in the response:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.route('http.ts')\"",children:"Route.get('/hello', ({ response }) => {\n  return response.sendFile('image.png', {\n    cacheControl: false,\n    etag: true,\n    dotfiles: 'ignore',\n    lastModified: true\n  })\n})\n"})}),"\n",(0,a.jsx)(s.h3,{id:"custom-file-name",children:"Custom file name"}),"\n",(0,a.jsxs)(s.p,{children:["You can use the ",(0,a.jsx)(s.code,{children:"response.download()"})," to set a custom file name\nby changing the ",(0,a.jsx)(s.code,{children:"content-disposition"})," header:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.route('http.ts')\"",children:"Route.get('/hello', ({ response }) => {\n  return response.download('image.png', 'custom-image.png') \ud83d\udc48\n})\n"})}),"\n",(0,a.jsx)(s.p,{children:"You could also add options directly in the response:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.route('http.ts')\"",children:"Route.get('/hello', ({ response }) => {\n  return response.download('image.png', 'custom-image.png', {\n    cacheControl: false,\n    etag: true,\n    dotfiles: 'ignore',\n    lastModified: true\n  })\n})\n"})}),"\n",(0,a.jsx)(s.h2,{id:"disabling-static-file-server",children:"Disabling static file server"}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"HttpKernel"})," class will automatically disable the\nplugin registration if the package does not exist, so\nto disable static file server in Athenna you need to\nremove the ",(0,a.jsx)(s.code,{children:"@fastify/static"})," package from your\napplication:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"npm remove @fastify/static\n"})}),"\n",(0,a.jsxs)(s.p,{children:["You can also disable by setting ",(0,a.jsx)(s.code,{children:"http.static.enabled"})," to ",(0,a.jsx)(s.code,{children:"false"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.config('http.ts')\"",children:"export default {\n  static: {\n    enabled: false\n  }\n}\n"})})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},7049:(e,s,t)=>{t.d(s,{A:()=>i});t(6540);const n={hoverCardContainer:"hoverCardContainer_jqUQ",hoverCardLink:"hoverCardLink_oDZU",hoverCard:"hoverCard_qTDS"};var a=t(4848);function i(e){let s=e.father;switch(e.father){case"storage":s="src/storage";break;case"logs":s="src/storage/logs";break;case"views":s="src/resources/views";break;case"locales":s="src/resources/locales";break;case"static":s="src/resources/static";break;case"config":s="src/config";break;case"database":s="src/database";break;case"seeders":s="src/database/seeders";break;case"migrations":s="src/database/migrations";break;case"console":s="src/console";break;case"commands":s="src/console/commands";break;case"cron":s="src/cron";break;case"schedulers":s="src/cron/schedulers";break;case"models":s="src/models";break;case"services":s="src/services";break;case"repositories":s="src/repositories";break;case"http":s="src/http";break;case"controllers":s="src/http/controllers";break;case"middlewares":s="src/http/middlewares";break;case"interceptors":s="src/http/interceptors";break;case"terminators":s="src/http/terminators";break;case"stubs":s="tests/stubs";break;case"fixtures":s="tests/fixtures";break;case"providers":s="src/providers";break;case"facades":s="src/facades";break;case"routes":s="src/routes"}return(0,a.jsxs)("div",{className:n.hoverCardContainer,children:[(0,a.jsx)("a",{className:n.hoverCardLink,href:`/docs/the-basics/helpers#path${e.father}`,children:(0,a.jsxs)("code",{children:["Path.",e.father,"(",e.child?`'${e.child}'`:"",")"]})}),(0,a.jsx)("div",{className:n.hoverCard,children:(0,a.jsxs)("p",{style:{margin:0},children:["./",s,e.child?`/${e.child}`:""]})})]})}},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var n=t(6540);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);
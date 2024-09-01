"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[6701],{1968:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=s(4848),t=s(8453),o=s(7049);const i={title:"Graceful Shutdown",sidebar_position:2,description:"See how to graceful shutdown any kind of Athenna application."},a="Graceful Shutdown",c={id:"digging-deeper/graceful-shutdown",title:"Graceful Shutdown",description:"See how to graceful shutdown any kind of Athenna application.",source:"@site/docs/digging-deeper/graceful-shutdown.mdx",sourceDirName:"digging-deeper",slug:"/digging-deeper/graceful-shutdown",permalink:"/docs/digging-deeper/graceful-shutdown",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/digging-deeper/graceful-shutdown.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Graceful Shutdown",sidebar_position:2,description:"See how to graceful shutdown any kind of Athenna application."},sidebar:"tutorialSidebar",previous:{title:"REPL",permalink:"/docs/digging-deeper/repl"},next:{title:"Collections",permalink:"/docs/digging-deeper/collections"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Default behavior",id:"default-behavior",level:2},{value:"The <code>LoadHelper.shutdownProviders()</code> method",id:"the-loadhelpershutdownproviders-method",level:2},{value:"Customizing",id:"customizing",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"graceful-shutdown",children:"Graceful Shutdown"})}),"\n",(0,r.jsx)(n.p,{children:"See how to graceful shutdown any kind of Athenna application."}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["Graceful shutdown means that the OS (operating system)\ncan safely shutdown its processes and close all connections,\nhowever long that takes. This helps to prevent accidental\ndata loss or other unexpected problems if the shutdown is\nperformed intentionally by the user. To understand how\ngraceful shutdown works, you need to have a little bit of\nknowledge about how the ",(0,r.jsx)(n.a,{href:"https://nodejs.org/api/process.html#signal-events",children:"signal events"}),"\nworks and when they trigger."]}),"\n",(0,r.jsx)(n.p,{children:"Athenna already comes with a graceful shutdown mechanism\nconfigured for you out of the box. However, just like\nany other thing in this framework, you can customize it\nto your needs. We will see further in this documentation\nhow to operate with this mechanism and also how to customize\nit."}),"\n",(0,r.jsx)(n.h2,{id:"default-behavior",children:"Default behavior"}),"\n",(0,r.jsxs)(n.p,{children:["Athenna only listen to ",(0,r.jsx)(n.code,{children:"SIGINT"})," and ",(0,r.jsx)(n.code,{children:"SIGTERM"})," signal events\nby default, this is what is executed when they are triggered:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"process.on('SIGINT', () => {\n  process.exit()\n})\n\nprocess.on('SIGTERM', async () => {\n  await LoadHelper.shutdownProviders()\n\n  process.kill(process.pid, signal)\n})\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"SIGINT"})})," - Triggered when the user presses ",(0,r.jsx)(n.code,{children:"CTRL + C"})," in the terminal."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"SIGTERM"})})," - Triggered when the machine sends a ",(0,r.jsx)(n.code,{children:"SIGTERM"})," signal to the\nprocess, this is the default signal created by ",(0,r.jsx)(n.code,{children:"kill"})," or ",(0,r.jsx)(n.code,{children:"killall"})," commands."]}),"\n"]})}),"\n",(0,r.jsxs)(n.h2,{id:"the-loadhelpershutdownproviders-method",children:["The ",(0,r.jsx)(n.code,{children:"LoadHelper.shutdownProviders()"})," method"]}),"\n",(0,r.jsxs)(n.p,{children:["This method is responsible for calling the ",(0,r.jsx)(n.code,{children:"shutdown()"}),"\nmethod of all your service providers. Let's see the implementation\nof ",(0,r.jsx)(n.code,{children:"HttpServerProvider"})," to understand how it works:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { ServiceProvider } from '@athenna/ioc'\nimport { ServerImpl } from '#src/server/ServerImpl'\n\nexport class HttpServerProvider extends ServiceProvider {\n  public register() {\n    this.container.instance('Athenna/Core/HttpServer', new ServerImpl(), false)\n  }\n\n  public async shutdown() {\n    const Server = this.container.use<ServerImpl>('Athenna/Core/HttpServer')\n\n    if (!Server) {\n      return\n    }\n\n    if (!Server.isListening) {\n      return\n    }\n\n    await Server.close()\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["As you can see, the ",(0,r.jsx)(n.code,{children:"shutdown()"})," method of this\nprovider first verifies if the ",(0,r.jsx)(n.code,{children:"Server"})," instance\nexists in the service container and if it's listening\nand them close it."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["If you wish to implement your own ",(0,r.jsx)(n.code,{children:"SIGTERM"})," event, always\nremember that is your responsibility to call the\n",(0,r.jsx)(n.code,{children:"LoadHelper.shutdownProviders()"})," method, if you don't call it\nAthenna will never graceful shutdown."]})}),"\n",(0,r.jsx)(n.h2,{id:"customizing",children:"Customizing"}),"\n",(0,r.jsxs)(n.p,{children:["Node.js supports registering as many as signals event\nlisteners you want, this means that you can use the default\n",(0,r.jsx)(n.code,{children:"SIGINT"})," and ",(0,r.jsx)(n.code,{children:"SIGTERM"})," listeners of Athenna and also create\nyour own. We recommend doing this implementation in the bootstrap\nfile of your like application:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:"title=\"Path.bin('main.ts')\"",children:"import { Ignite } from '@athenna/core'\n\nconst ignite = await new Ignite().load(import.meta.url)\n\nawait ignite.httpServer()\n\nprocess.on('SIGINT', () => {\n  console.log('executing SIGINT')\n})\n\nprocess.on('SIGTERM', () => {\n  console.log('executing SIGTERM')\n})\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you wish to remove or change the default listeners of\nAthenna, or also listen to new signals, you can create\nthe ",(0,r.jsx)(n.code,{children:"signals"})," property in the  ",(0,r.jsx)(o.A,{father:"config",child:"app.ts"}),"\nfile:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { LoadHelper } from '@athenna/ioc'\n\nexport default {\n  signals: {\n    SIGINT: () => {\n      console.log('executing SIGINT')\n\n      process.exit()\n    },\n    SIGTERM: async () => {\n      console.log('executing SIGTERM')\n\n      await LoadHelper.shutdownProviders()\n\n      process.kill(process.pid, signal)\n    },\n    // NEW SIGNAL\n    SIGKILL: async () => {\n      console.log('executing SIGKILL')\n    }\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:['To "remove" the default listeners, just implement a NOOP\nfunction in ',(0,r.jsx)(n.code,{children:"SIGINT"})," and ",(0,r.jsx)(n.code,{children:"SIGTERM"}),", because if you remove\nthe key or let it ",(0,r.jsx)(n.code,{children:"undefined"}),", Athenna will use the default:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export default {\n  signals: {\n    SIGINT: () => {},\n    SIGTERM: () => {},\n  }\n}\n"})})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7049:(e,n,s)=>{s.d(n,{A:()=>o});s(6540);const r={hoverCardContainer:"hoverCardContainer_jqUQ",hoverCardLink:"hoverCardLink_oDZU",hoverCard:"hoverCard_qTDS"};var t=s(4848);function o(e){let n=e.father;switch(e.father){case"storage":n="src/storage";break;case"logs":n="src/storage/logs";break;case"views":n="src/resources/views";break;case"locales":n="src/resources/locales";break;case"static":n="src/resources/static";break;case"config":n="src/config";break;case"database":n="src/database";break;case"seeders":n="src/database/seeders";break;case"migrations":n="src/database/migrations";break;case"console":n="src/console";break;case"commands":n="src/console/commands";break;case"cron":n="src/cron";break;case"schedulers":n="src/cron/schedulers";break;case"models":n="src/models";break;case"services":n="src/services";break;case"repositories":n="src/repositories";break;case"http":n="src/http";break;case"controllers":n="src/http/controllers";break;case"middlewares":n="src/http/middlewares";break;case"interceptors":n="src/http/interceptors";break;case"terminators":n="src/http/terminators";break;case"stubs":n="tests/stubs";break;case"fixtures":n="tests/fixtures";break;case"providers":n="src/providers";break;case"facades":n="src/facades"}return(0,t.jsxs)("div",{className:r.hoverCardContainer,children:[(0,t.jsx)("a",{className:r.hoverCardLink,href:`/docs/the-basics/helpers#path${e.father}`,children:(0,t.jsxs)("code",{children:["Path.",e.father,"(",e.child?`'${e.child}'`:"",")"]})}),(0,t.jsx)("div",{className:r.hoverCard,children:(0,t.jsxs)("p",{style:{margin:0},children:["./",n,e.child?`/${e.child}`:""]})})]})}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var r=s(6540);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
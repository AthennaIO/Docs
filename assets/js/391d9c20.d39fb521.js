"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[1746],{8283:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var o=i(4848),t=i(8453);const s={title:"Compilation",sidebar_position:4,description:"Understand the TypeScript compilation process of Athenna."},r="Compilation",d={id:"the-basics/compilation",title:"Compilation",description:"Understand the TypeScript compilation process of Athenna.",source:"@site/docs/the-basics/compilation.mdx",sourceDirName:"the-basics",slug:"/the-basics/compilation",permalink:"/docs/the-basics/compilation",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/the-basics/compilation.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Compilation",sidebar_position:4,description:"Understand the TypeScript compilation process of Athenna."},sidebar:"tutorialSidebar",previous:{title:"Helpers",permalink:"/docs/the-basics/helpers"},next:{title:"Deployment",permalink:"/docs/the-basics/deployment"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Compiling for development",id:"compiling-for-development",level:2},{value:"Compiling for production",id:"compiling-for-production",level:2},{value:"Points to keep in mind",id:"points-to-keep-in-mind",level:3}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"compilation",children:"Compilation"}),"\n",(0,o.jsx)(n.p,{children:"Understand the TypeScript compilation process of Athenna."}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"One of the main objectives of the framework is to offer\nexceptional assistance for TypeScript. This extends beyond\nthe benefits of static types and IntelliSense that enhance\nyour coding experience. Furthermore, we make certain that\nthere is no need for you to install extra build utilities\nfor code compilation, both during the development phase and\nfor production purposes."}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"This documentation assumes that you have basic knowledge\nabout TypeScript and the build tools available for it."})}),"\n",(0,o.jsx)(n.h2,{id:"compiling-for-development",children:"Compiling for development"}),"\n",(0,o.jsxs)(n.p,{children:["If you are using ",(0,o.jsx)(n.code,{children:"artisan"})," to run your application,\nit will already compile the code for you in run time,\nthanks to the ",(0,o.jsx)(n.code,{children:"ts-node/esm"})," loader."]}),"\n",(0,o.jsxs)(n.p,{children:["However, you may want to run a different TypeScript\nfile using ",(0,o.jsx)(n.code,{children:"node"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"For Node.js v20.x or higher:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"node --import=@athenna/tsconfig index.ts\n"})}),"\n",(0,o.jsx)(n.p,{children:"For Node.js v19.x or lower:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"node --loader=ts-node/esm index.ts\n"})}),"\n",(0,o.jsx)(n.h2,{id:"compiling-for-production",children:"Compiling for production"}),"\n",(0,o.jsx)(n.p,{children:"When you are ready to deploy your application to\nproduction, you can use the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"node artisan build\n"})}),"\n",(0,o.jsx)(n.p,{children:"It performs the following operations:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Clean the existing build directory (if any). The build\ndirectory that will he cleaned is defined inside the ",(0,o.jsx)(n.code,{children:".athennarc.json"}),"\nfile under the ",(0,o.jsx)(n.code,{children:"commands.build.outDir"})," property."]}),"\n",(0,o.jsxs)(n.li,{children:["Type check and compile the code using ",(0,o.jsx)(n.code,{children:"tsc"}),". The tsconfig\nfile path that will be used is defined inside the\n",(0,o.jsx)(n.code,{children:".athennarc.json"})," file under the ",(0,o.jsx)(n.code,{children:"commands.build.tsconfig"}),"\nproperty."]}),"\n",(0,o.jsxs)(n.li,{children:["Copy all the static files to the build folder. The\nstatic files are registered inside the ",(0,o.jsx)(n.code,{children:".athennarc.json"}),"\nfile under the ",(0,o.jsx)(n.code,{children:"commands.build.include"})," array. This property\nneeds to always be used to copy ",(0,o.jsx)(n.code,{children:"package.json"})," and ",(0,o.jsx)(n.code,{children:"package-lock.json"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"points-to-keep-in-mind",children:"Points to keep in mind"}),"\n",(0,o.jsx)(n.p,{children:"After building your code, the output folder becomes\nthe root of your JavaScript application, this means two things:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["You must ",(0,o.jsx)(n.code,{children:"cd"})," into the build folder and install production\nonly dependencies:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd build\nnpm ci --omit=dev\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["You must always ",(0,o.jsx)(n.code,{children:"cd"})," into the build folder and then\nrun your app:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd build\nnode bootstrap/main.js\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["We do not copy the ",(0,o.jsx)(n.code,{children:".env"})," file to the output folder\n(even if you add it to ",(0,o.jsx)(n.code,{children:"commands.build.include"})," array) to\nprevent issues for you. The environment variables are not\ntransferable, you must define environment variables for\nproduction separately."]})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var o=i(6540);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[30],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Benchmarks",sidebar_position:2,description:"See how Athenna performs in comparison to other frameworks."},i="Benchmarks",s={unversionedId:"introduction/benchmarks",id:"introduction/benchmarks",title:"Benchmarks",description:"See how Athenna performs in comparison to other frameworks.",source:"@site/docs/introduction/benchmarks.mdx",sourceDirName:"introduction",slug:"/introduction/benchmarks",permalink:"/docs/introduction/benchmarks",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/introduction/benchmarks.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Benchmarks",sidebar_position:2,description:"See how Athenna performs in comparison to other frameworks."},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/docs/introduction/welcome"},next:{title:"Getting Started",permalink:"/docs/getting-started"}},l={},c=[{value:"Code",id:"code",level:2},{value:"Environment",id:"environment",level:2},{value:"Results",id:"results",level:2}],m={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"benchmarks"},"Benchmarks"),(0,a.kt)("p",null,"See how Athenna performs in comparison to other frameworks."),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("p",null,"All the code used in this benchmark is available in the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AthennaIO/Benchmarks"},"AthennaIO/Benchmarks")," repository."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"The environment used to run the benchmarks:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="npx envinfo --system --binaries"',title:'"npx',envinfo:!0,"--system":!0,'--binaries"':!0},"  System:\n    OS: macOS 13.3.1\n    CPU: (8) arm64 Apple M1 Pro\n    Memory: 107.38 MB / 16.00 GB\n    Shell: 5.9 - /opt/homebrew/bin/zsh\n  Binaries:    Node: 18.14.2 - ~/.nvm/versions/node/v18.14.2/bin/node\n    npm: 9.5.0 - ~/.nvm/versions/node/v18.14.2/bin/npm\n")),(0,a.kt)("h2",{id:"results"},"Results"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Framework"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Requests/sec"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Fastify"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4.15.0"),(0,a.kt)("td",{parentName:"tr",align:"right"},"89974.4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Athenna"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4.4.0"),(0,a.kt)("td",{parentName:"tr",align:"right"},"83897.4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"AdonisJS"),(0,a.kt)("td",{parentName:"tr",align:"center"},"5.0.0"),(0,a.kt)("td",{parentName:"tr",align:"right"},"67953.6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Express"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4.18.2"),(0,a.kt)("td",{parentName:"tr",align:"right"},"21850.2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"NestJS"),(0,a.kt)("td",{parentName:"tr",align:"center"},"9.0.0"),(0,a.kt)("td",{parentName:"tr",align:"right"},"20019.6")))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[8334],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),h=o,d=s["".concat(p,".").concat(h)]||s[h]||g[h]||r;return t?i.createElement(d,a(a({ref:n},u),{},{components:t})):i.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=h;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(7462),o=(t(7294),t(3905));const r={title:"Publishing",sidebar_position:3,description:"Check how you can publish a global CLI application."},a="Publishing",l={unversionedId:"cli-application/publishing",id:"cli-application/publishing",title:"Publishing",description:"Check how you can publish a global CLI application.",source:"@site/docs/cli-application/publishing.mdx",sourceDirName:"cli-application",slug:"/cli-application/publishing",permalink:"/docs/cli-application/publishing",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/cli-application/publishing.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Publishing",sidebar_position:3,description:"Check how you can publish a global CLI application."},sidebar:"tutorialSidebar",previous:{title:"Running",permalink:"/docs/cli-application/running"},next:{title:"Error Handling",permalink:"/docs/cli-application/error-handling"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Logging in to NPM",id:"logging-in-to-npm",level:2},{value:"Publishing",id:"publishing-1",level:2}],u={toc:c},s="wrapper";function g(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"publishing"},"Publishing"),(0,o.kt)("p",null,"Check how you can publish a global CLI application."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this documentation section we are going to cover how\nyou can publish a global CLI application in NPM registry."),(0,o.kt)("h2",{id:"logging-in-to-npm"},"Logging in to NPM"),(0,o.kt)("p",null,"To publish your package on the NPM registry, you need to\nhave an account at NPM. If you don't have an account,\nvisit the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/signup"},"NPM sign up page"),"\nto create one."),(0,o.kt)("p",null,"After creating the account, open your terminal and run the\nfollowing command in the root of your package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm login\n")),(0,o.kt)("p",null,"You will get a prompt to enter your ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"password"),".\nIf login is successful, you should see a message like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Logged in as <your-username-here> on https://registry.npmjs.org/.\n")),(0,o.kt)("h2",{id:"publishing-1"},"Publishing"),(0,o.kt)("p",null,"Now that you are authenticated, to publish a package to NPM\nis very simple, just run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm publish --access public\n")),(0,o.kt)("p",null,"If you have been following along, then congratulations! You\njust published your first NPM package."),(0,o.kt)("p",null,"You can visit the NPM website and run a search for your\npackage. You should see your package show up in the search results."))}g.isMDXComponent=!0}}]);
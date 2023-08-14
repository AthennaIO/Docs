"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[4677],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>g});var i=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var p=i.createContext({}),s=function(n){var e=i.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=s(n.components);return i.createElement(p.Provider,{value:e},n.children)},m="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,p=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),m=s(t),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return t?i.createElement(g,o(o({ref:e},c),{},{components:t})):i.createElement(g,o({ref:e},c))}));function g(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=n,l[m]="string"==typeof n?n:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1090:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=t(7462),a=(t(7294),t(3905));const r={title:"Running",sidebar_position:2,description:"Check how to run your CLI commands in different scenarios.",tags:["CLI Application","Running"]},o="Running",l={unversionedId:"cli-application/running",id:"cli-application/running",title:"Running",description:"Check how to run your CLI commands in different scenarios.",source:"@site/docs/cli-application/running.mdx",sourceDirName:"cli-application",slug:"/cli-application/running",permalink:"/docs/cli-application/running",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/cli-application/running.mdx",tags:[{label:"CLI Application",permalink:"/docs/tags/cli-application"},{label:"Running",permalink:"/docs/tags/running"}],version:"current",sidebarPosition:2,frontMatter:{title:"Running",sidebar_position:2,description:"Check how to run your CLI commands in different scenarios.",tags:["CLI Application","Running"]},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/docs/cli-application/commands"},next:{title:"Publishing",permalink:"/docs/cli-application/publishing"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Registering your CLI command name",id:"registering-your-cli-command-name",level:2},{value:"Entrypoint file",id:"entrypoint-file",level:2},{value:"Linking the CLI",id:"linking-the-cli",level:2},{value:"Display CLI name",id:"display-cli-name",level:2}],c={toc:s},m="wrapper";function u(n){let{components:e,...t}=n;return(0,a.kt)(m,(0,i.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running"},"Running"),(0,a.kt)("p",null,"Check how to run your CLI commands in different scenarios."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The CLI application of Athenna can run in three ways.\nUsing the ",(0,a.kt)("inlineCode",{parentName:"p"},"./node artisan"),", the npm scripts inside\n",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file or linking the CLI using ",(0,a.kt)("inlineCode",{parentName:"p"},"npm link"),",\nthis way you can execute your CLI anywhere from your\nterminal. As Artisan and npm scripts comes configured by\ndefault in your application, we are going to focus in\n",(0,a.kt)("inlineCode",{parentName:"p"},"npm link")," in this documentation."),(0,a.kt)("h2",{id:"registering-your-cli-command-name"},"Registering your CLI command name"),(0,a.kt)("p",null,"To register your CLI command name you need to add the\n",(0,a.kt)("inlineCode",{parentName:"p"},"bin")," object inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file and set the\npath to the entry point file of your CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"bin": {\n  "yourCliCommand": "./bootstrap/main.js"\n}\n')),(0,a.kt)("h2",{id:"entrypoint-file"},"Entrypoint file"),(0,a.kt)("p",null,"In our example we defined the ",(0,a.kt)("inlineCode",{parentName:"p"},"./bootstrap/main.js"),"\nfile as the entrypoint file of our CLI. By default, this\nfile comes with the shebang line\n",(0,a.kt)("inlineCode",{parentName:"p"},"#!/usr/bin/env -S node --experimental-import-meta-resolve"),"\nin the top of the file. Without this line the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm link"),"\ncommand will not work. So just in case you want to define a\ndifferent entrypoint file, remember that\n",(0,a.kt)("inlineCode",{parentName:"p"},"#!/usr/bin/env -S node --experimental-import-meta-resolve"),"\nshould be on the top of this file."),(0,a.kt)("h2",{id:"linking-the-cli"},"Linking the CLI"),(0,a.kt)("p",null,"Now you just need to run the following command in your project root:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm link\n")),(0,a.kt)("p",null,"And now the ",(0,a.kt)("inlineCode",{parentName:"p"},"yourCliCommand")," will exist in your actual Node.js version:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yourCliCommand --help\n")),(0,a.kt)("h2",{id:"display-cli-name"},"Display CLI name"),(0,a.kt)("p",null,"When running your CLI without any option and command, the display\nname will be rendered in the terminal using\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/chalk-rainbow"},(0,a.kt)("inlineCode",{parentName:"a"},"chalk-rainbow")),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/figlet"},(0,a.kt)("inlineCode",{parentName:"a"},"figlet")),"."),(0,a.kt)("p",null,"By default Artisan always display the ",(0,a.kt)("inlineCode",{parentName:"p"},"Artisan")," name, but you can\nchange it for your own display name by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"displayName"),"\nproperty in ",(0,a.kt)("inlineCode",{parentName:"p"},"Ignite.artisan()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=\"Path.bootstrap('main.ts')\"",title:"\"Path.bootstrap('main.ts')\""},"import { Ignite } from '@athenna/core'\n\nconst ignite = await new Ignite().load(import.meta.url)\n\nawait ignite.artisan({\n  displayName: 'Your CLI Command', \ud83d\udc48\n})\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you wish to disable the display name, just set the ",(0,a.kt)("inlineCode",{parentName:"p"},"displayName"),"\nas ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=\"Path.bootstrap('main.ts')\"",title:"\"Path.bootstrap('main.ts')\""},"import { Ignite } from '@athenna/core'\n\nconst ignite = await new Ignite().load(import.meta.url)\n\nawait ignite.artisan({\n  displayName: null, \ud83d\udc48\n})\n"))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[7868],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:e},c),{},{components:n})):a.createElement(g,o({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2424:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Installation",sidebar_position:1,description:"How to install and set up your first Athenna project.",tags:["Getting Started","Installation"]},o="Installation",l={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"How to install and set up your first Athenna project.",source:"@site/docs/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/getting-started/installation.mdx",tags:[{label:"Getting Started",permalink:"/docs/tags/getting-started"},{label:"Installation",permalink:"/docs/tags/installation"}],version:"current",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1,description:"How to install and set up your first Athenna project.",tags:["Getting Started","Installation"]},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Node Script File",permalink:"/docs/getting-started/node-script-file"}},s={},p=[{value:"Your first Athenna project",id:"your-first-athenna-project",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing via package manager",id:"installing-via-package-manager",level:3},{value:"Application type",id:"application-type",level:4},{value:"Laravel project structure",id:"laravel-project-structure",level:4},{value:"Running your application",id:"running-your-application",level:2}],c={toc:p},u="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"How to install and set up your first Athenna project."),(0,r.kt)("h2",{id:"your-first-athenna-project"},"Your first Athenna project"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"First, you need to install ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js"),". We\nrecommend using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," to do\nthat."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#installing-and-updating"},"Click here to install nvm and get npm and Node.js\nrunning on your machine."))),(0,r.kt)("h3",{id:"installing-via-package-manager"},"Installing via package manager"),(0,r.kt)("p",null,"We want it to be as easy as possible to get started with\nAthenna. With that in mind, we developed a CLI to assist\nin the creation of a new project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @athenna/cli -g\n")),(0,r.kt)("p",null,"Then you can run this command to generate your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"athenna new my-project-name\n")),(0,r.kt)("p",null,"The installation process prompts for the following selections:"),(0,r.kt)("h4",{id:"application-type"},"Application type"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"REST Api")," application is ideal for creating a Http server\nusing REST architecture."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CLI")," application is ideal for creating global CLI's to publish\nin some registry like npm.")),(0,r.kt)("h4",{id:"laravel-project-structure"},"Laravel project structure"),(0,r.kt)("p",null,"The installation process will ask if you want to create your\nproject following Laravel project structure. All the Athenna\npackages implementation assumes that you are using this project\nstructure, but you will always be able to use your own project\nstructure and configure the packages to work with it. If you\nset that you don't want to use Laravel project structure,\nAthenna will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"slim")," project version from the application\ntype that you have selected."),(0,r.kt)("h2",{id:"running-your-application"},"Running your application"),(0,r.kt)("p",null,"To run your application you can simply use the node script in\nyour project root. Don't worry about this file for now, we'll\ntalk about it later."),(0,r.kt)("p",null,"In your project root, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./node --watch artisan serve\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"watch")," flag is meant to watch the file system for\nchanges and restart your application automatically when\ndoing some change on it."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"serve")," command will look up for your ",(0,r.kt)("inlineCode",{parentName:"li"},"bootstrap/main.js"),"\nfile to bootstrap your application with predefined configurations.")))}d.isMDXComponent=!0}}]);
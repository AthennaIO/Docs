"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[9080],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,y=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return r?n.createElement(y,a(a({ref:t},d),{},{components:r})):n.createElement(y,a({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1319:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={title:"Directory Structure",sidebar_position:5,description:"Understand the directory structure of your project."},a="Directory Structure",l={unversionedId:"getting-started/directory-structure",id:"getting-started/directory-structure",title:"Directory Structure",description:"Understand the directory structure of your project.",source:"@site/docs/getting-started/directory-structure.mdx",sourceDirName:"getting-started",slug:"/getting-started/directory-structure",permalink:"/docs/getting-started/directory-structure",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/getting-started/directory-structure.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Directory Structure",sidebar_position:5,description:"Understand the directory structure of your project."},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/getting-started/configuration"},next:{title:"Architecture Concepts",permalink:"/docs/architecture-concepts"}},s={},c=[{value:"Default structure",id:"default-structure",level:2},{value:"The app directory",id:"the-app-directory",level:3},{value:"The bootstrap directory",id:"the-bootstrap-directory",level:3},{value:"The config directory",id:"the-config-directory",level:3},{value:"The database directory",id:"the-database-directory",level:3},{value:"The providers directory",id:"the-providers-directory",level:3},{value:"The routes directory",id:"the-routes-directory",level:3},{value:"The storage directory",id:"the-storage-directory",level:3},{value:"The tests directory",id:"the-tests-directory",level:3},{value:"Slim structure",id:"slim-structure",level:2},{value:"Do your own structure",id:"do-your-own-structure",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"directory-structure"},"Directory Structure"),(0,o.kt)("p",null,"Understand the directory structure of your project."),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"We highly recommend you to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"node artisan make"),"\ncommand to generate the files of your application. If\nusing this command, it will automatically generate the\nfile and register it wherever it is needed. Take as an example\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"node artisan make:command command"),". First it will\ngenerate the file and then will register the command inside\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"commands")," map property of ",(0,o.kt)("inlineCode",{parentName:"p"},".athennarc.json")," file.")),(0,o.kt)("h2",{id:"default-structure"},"Default structure"),(0,o.kt)("h3",{id:"the-app-directory"},"The app directory"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," directory contains the core code of your application.\nWe'll explore this directory in more detail soon. Almost all\nthe classes in your application will be in this directory."),(0,o.kt)("h3",{id:"the-bootstrap-directory"},"The bootstrap directory"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap")," directory contains all of your application's\nbootstrap files. It's here that Athenna holds the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.ts"),"\nfile that bootstrap the application using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ignite")," class."),(0,o.kt)("h3",{id:"the-config-directory"},"The config directory"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," directory contains all of your application's\nconfiguration files. It's a great idea to read through all\nof these files and familiarize yourself with all the options\navailable to you."),(0,o.kt)("h3",{id:"the-database-directory"},"The database directory"),(0,o.kt)("p",null,"This directory does not exist by default, but will be created\nfor you if you execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node artisan configure @athenna/database\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"database")," directory contains your database migrations,\nmodel factories, and seeds. If you wish, you may also use\nthis directory to hold an SQLite database."),(0,o.kt)("h3",{id:"the-providers-directory"},"The providers directory"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"providers")," directory contains all the service providers\nfor your application. Service providers bootstrap your\napplication by binding services in the service container,\nregistering events, or performing any other tasks to prepare\nyour application to run."),(0,o.kt)("h3",{id:"the-routes-directory"},"The routes directory"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"routes")," directory contains all the route definitions\nfor your application. By default, several route files are\nincluded with Athenna:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"http.ts")," file is where you will define the entry\npoint of your api using the Route facade that is provided\nby the HttpRouteProvider."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"console.ts")," file is where you will define the entry\npoint of your commands using the Artisan facade that is\nprovided by the ArtisanProvider.")),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"As you may have noticed your project does not have the\n",(0,o.kt)("inlineCode",{parentName:"p"},"console.ts")," file. We only recommend using this file when\nyou don't want to use TypeScript in your application or\nwhen you want to add some personalized option of ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/commander"},"commander"),"\nto your command. Check the example:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Artisan } from '@athenna/artisan'\n\nArtisan.route('hello', function (helloArg: string, options: { hello: string }) {\n    console.log(helloArg)\n    console.log(options.hello)\n}) // \ud83d\udc48 Artisan.route return an instance of Commander\n.argument('<hello>', 'Description for hello argument.')\n.option('--hello', 'Description for hello flag.')\n"))),(0,o.kt)("h3",{id:"the-storage-directory"},"The storage directory"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"storage")," directory contains your logs, file caches,\nfiles uploaded locally and other files generated by the\nframework. This directory is segregated into the following\ndirectories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"app")," directory may be used to store any files\ngenerated by your application."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"framework")," directory is used to store framework\ngenerated files and caches."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"logs")," directory contains your application's log\nfiles.")),(0,o.kt)("h3",{id:"the-tests-directory"},"The tests directory"),(0,o.kt)("p",null,"You can create a test executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"node artisan make:test"),"\ncommand. The ",(0,o.kt)("inlineCode",{parentName:"p"},"tests")," directory contains your unitary and E2E\ntests. Each test file name should always end with the word\nTest at the end. You may run your tests using the ",(0,o.kt)("inlineCode",{parentName:"p"},"node artisan test"),"\ncommand."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"If your test file name does not end with ",(0,o.kt)("inlineCode",{parentName:"p"},"Test"),", it will\nbe ignored and the test class will not run. But, you can\ncustomize this behavior in the configure function of ",(0,o.kt)("a",{parentName:"p",href:"https://japa.dev/docs"},"Japa"),"\ninside your ",(0,o.kt)("inlineCode",{parentName:"p"},"Path.bootstrap('test.ts')")," file.")),(0,o.kt)("h2",{id:"slim-structure"},"Slim structure"),(0,o.kt)("p",null,"The slim project structure has only three folders when you\ncreate the project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"bin")," directory is the same as ",(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/directory-structure#bootstrap"},"bootstrap"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," directory is used to store all the source code files of your applications."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"tests")," directory is the same as ",(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/directory-structure#tests"},"tests"),".")),(0,o.kt)("h2",{id:"do-your-own-structure"},"Do your own structure"),(0,o.kt)("p",null,"There are some files in your project that are crucial to\nkeep in certain places. Let's analyze some of them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Path.bootstrap('main.ts')")," file is the entry point of the\n",(0,o.kt)("inlineCode",{parentName:"li"},"node artisan serve")," command. Every time that you run this\ncommand, Athenna will use this file to run your application."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Path.bootstrap('artisan.ts')")," file is the entry point of the\n",(0,o.kt)("inlineCode",{parentName:"li"},"artisan.js")," script."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"config")," path is where you are going to set up your\nconfiguration files. You can learn more about configuration\nfiles at ",(0,o.kt)("a",{parentName:"li",href:"https://athenna.io/docs/getting-started/configuration"},"the configuration documentation section"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Path.routes('http.ts')")," file is where you are going to register\nyour Http server routes.")),(0,o.kt)("p",null,"Athenna is a framework with a lot of opinions, with predefined\nproject structures; it was built that way to make your life easier.\nBut speaking from developer to developer, we know how much fun it\nis to be able to have control over everything in your application,\nespecially the structure of your project \ud83d\ude0e."),(0,o.kt)("p",null,"With that in mind, Athenna was built in a fully configurable\nway. You can create your files and folders anywhere, even the\none that are crucial to keep in certain places."))}p.isMDXComponent=!0}}]);
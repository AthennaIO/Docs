"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[7439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={title:"Views",sidebar_position:2,description:"Understand how you can use the Athenna view API.",tags:["The Basics","Views"]},o="Views",s={unversionedId:"the-basics/views",id:"the-basics/views",title:"Views",description:"Understand how you can use the Athenna view API.",source:"@site/docs/the-basics/views.mdx",sourceDirName:"the-basics",slug:"/the-basics/views",permalink:"/docs/the-basics/views",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/the-basics/views.mdx",tags:[{label:"The Basics",permalink:"/docs/tags/the-basics"},{label:"Views",permalink:"/docs/tags/views"}],version:"current",sidebarPosition:2,frontMatter:{title:"Views",sidebar_position:2,description:"Understand how you can use the Athenna view API.",tags:["The Basics","Views"]},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/docs/the-basics/logging"},next:{title:"Helpers",permalink:"/docs/the-basics/helpers"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Creating &amp; rendering views",id:"creating--rendering-views",level:2},{value:"Nested view disks",id:"nested-view-disks",level:3},{value:"Rendering raw string",id:"rendering-raw-string",level:3},{value:"In-memory views",id:"in-memory-views",level:3},{value:"Passing data to views",id:"passing-data-to-views",level:2},{value:"Sharing data with all views",id:"sharing-data-with-all-views",level:3},{value:"Optimizing views",id:"optimizing-views",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"views"},"Views"),(0,a.kt)("p",null,"Understand how you can use the Athenna view API."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Athenna's view API is specifically for email templates and\ntemplates used by Artisan commands to generate your\napplication files. Our focus at the moment is to be a focused\nframework for development of backend applications, using\nmicroservices or not. You can still use this API for creating\nmonolith application in Athenna, but it will require a little\nbit more of configuration. Nothing prevents us from adding\nsupport for writing monolithic applications in the future,\nadding useful methods for working with views in your REST API\nfor example."),(0,a.kt)("p",null,"If you think this is an interesting feature, and think you\ncan contribute to the project with it, feel free to open a\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/AthennaIO/discussions"},"discussion"),"\nat Athenna organization, any contribution is welcome!"),(0,a.kt)("h2",{id:"creating--rendering-views"},"Creating & rendering views"),(0,a.kt)("p",null,"You may create a view by placing a file with the ",(0,a.kt)("inlineCode",{parentName:"p"},".edge"),"\nextension in any directory of your application's, we recommend\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"resources/views")," directory.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},".edge")," extension informs the framework that the file\ncontains an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/edge-js/edge"},"Edge template"),'.\nEdge templates contain HTML as well as Edge directives that\nallow you to easily log values, create "if" statements,\niterate over data, and more.'),(0,a.kt)("p",null,"Once you have created a view file, eg: ",(0,a.kt)("inlineCode",{parentName:"p"},"resources/views/welcome.edge"),",\nyou may register your view disk inside ",(0,a.kt)("inlineCode",{parentName:"p"},"config/view.ts")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Path } from '@athenna/common'\n\nexport default {\n  disks: {\n    disk: Path.views(),\n  },\n}\n")),(0,a.kt)("p",null,"Now you may render it using the ",(0,a.kt)("inlineCode",{parentName:"p"},"View.render()")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"View.renderSync()")," methods from ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," facade:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { View } from '@athenna/view'\n\nawait View.render('disk::welcome', { greeting: 'Hello world' })\n")),(0,a.kt)("p",null,"As you can see, the first argument passed to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"View.render()")," method corresponds to the name of the view\ndisk following the name of the file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources/views"),"\ndirectory. The second argument is an object of data that\nshould be made available to the view. In this case, we are\npassing the ",(0,a.kt)("inlineCode",{parentName:"p"},"greeting")," variable, which is displayed in the\nview using Edge syntax."),(0,a.kt)("h3",{id:"nested-view-disks"},"Nested view disks"),(0,a.kt)("p",null,'View disks may also be nested within subdirectories. "Slash"\nnotation may be used to reference nested view disks. For\nexample, if your view is stored at\n',(0,a.kt)("inlineCode",{parentName:"p"},"resources/views/admin/profile.edge"),", you may like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { View } from '@athenna/view'\n\nawait View.render('disk::admin/profile', { name: 'Jacob Smith' })\n")),(0,a.kt)("h3",{id:"rendering-raw-string"},"Rendering raw string"),(0,a.kt)("p",null,"You can render raw template string values using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"View.renderRaw()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"View.renderRawSync()")," methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await View.renderRaw('<p>Hello {{ name }}</p>', {\n    name: 'Jacob Smith'\n})\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Raw strings do not enjoy the benefits of ",(0,a.kt)("a",{parentName:"p",href:"/docs/the-basics/views#optimizing-views"},"template caching"),"\nas there are not associated with a unique path.")),(0,a.kt)("h3",{id:"in-memory-views"},"In-memory views"),(0,a.kt)("p",null,"You can register in-memory views without creating any file\non the disk. You can find it useful whenever you want\nto split a large template file into several smaller ones\nor also if you want to provide some templates as part of\na npm package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { View } from '@athenna/view'\n\nView.createComponent('myuikit/button', '<button {{ $props.serializeExcept([\"title\"]) }}>{{ title }}</button>')\n")),(0,a.kt)("p",null,"You can render the template directly or use it as a\ncomponent with the exact name given to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"View.createComponent()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-edge"},"@!component('myuikit/button', {\n  title: 'Signup',\n  class: ['btn', 'btn-primary'],\n  id: 'signup'\n})\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"View.createTemplate()")," method to\nregister templates. The only difference between them is\nthat ",(0,a.kt)("inlineCode",{parentName:"p"},"View.createTemplate()")," does not throws errors if\nsome template name already exists, instead the old template\nwill be replaced.")),(0,a.kt)("h2",{id:"passing-data-to-views"},"Passing data to views"),(0,a.kt)("p",null,"As you saw in the previous examples, you may pass an object of\ndata to views to make that data available to the view:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { View } from '@athenna/view'\n\nawait View.render('disk::welcome', { name: 'Jacob Smith' })\n")),(0,a.kt)("p",null,"When passing information in this manner, the data should be\nan object with key / value pairs. After providing data to a\nview, you can then access each value within your view like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-edge"},"<p>Welcome {{ name }}!</p>\n")),(0,a.kt)("h3",{id:"sharing-data-with-all-views"},"Sharing data with all views"),(0,a.kt)("p",null,"Occasionally, you may need to share data with all views that\nare rendered by your application. You may do so using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"View")," facade's ",(0,a.kt)("inlineCode",{parentName:"p"},"addProperty()")," method. Typically, you should\nplace calls to the ",(0,a.kt)("inlineCode",{parentName:"p"},"View.addProperty()")," method within a\nservice provider's ",(0,a.kt)("inlineCode",{parentName:"p"},"boot()")," method. You are free to add them\nto the ",(0,a.kt)("inlineCode",{parentName:"p"},"providers/AppProvider")," class or generate a separate\nservice provider to house them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { View } from '@athenna/view'\nimport { ServiceProvider } from '@athenna/ioc'\n\nexport default class AppProvider extends ServiceProvider {\n    public async boot() {\n        View.addProperty('key', 'value')\n    }\n}\n")),(0,a.kt)("h2",{id:"optimizing-views"},"Optimizing views"),(0,a.kt)("p",null,"Compiling a template to a JavaScript function is a\ntime-consuming process, and hence it is recommended to cache\nthe compiled templates in production."),(0,a.kt)("p",null,"You can control the template caching using the ",(0,a.kt)("inlineCode",{parentName:"p"},"edge.cache"),"\nproperty inside ",(0,a.kt)("inlineCode",{parentName:"p"},"config/view.ts")," file. Just make sure to set\nthe value to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," in the production environment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Path } from '@athenna/common'\n\nexport default {\n  disks: {\n    disk: Path.views(),\n  },\n\n  edge: {\n    // Set to `true` in production only\n    cache: true \ud83d\udc48\n  }\n}\n")),(0,a.kt)("p",null,"All the templates are cached within the memory. Currently,\nwe do not have any plans to support on-disk caching since\nthe value provided for the efforts is too low."),(0,a.kt)("p",null,"The raw text does not take up too much space, and even\nkeeping thousands of pre-compiled templates in memory should\nnot be a problem."))}m.isMDXComponent=!0}}]);
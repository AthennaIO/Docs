"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[1294],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8697:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:4,id:"errors",title:"Error Handling",hide_title:!0,hide_table_of_contents:!0,tags:["Getting Started","Architecture Concepts","The Basics","Errors"]},s=void 0,p={unversionedId:"the-basics/errors",id:"the-basics/errors",title:"Error Handling",description:"\ud83c\udfe0",source:"@site/docs/the-basics/errors.mdx",sourceDirName:"the-basics",slug:"/the-basics/errors",permalink:"/docs/the-basics/errors",editUrl:"https://github.com/AthennaIO/Docs/docs/the-basics/errors.mdx",tags:[{label:"Getting Started",permalink:"/docs/tags/getting-started"},{label:"Architecture Concepts",permalink:"/docs/tags/architecture-concepts"},{label:"The Basics",permalink:"/docs/tags/the-basics"},{label:"Errors",permalink:"/docs/tags/errors"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"errors",title:"Error Handling",hide_title:!0,hide_table_of_contents:!0,tags:["Getting Started","Architecture Concepts","The Basics","Errors"]},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/docs/the-basics/logging"},next:{title:"REPL",permalink:"/docs/digging-deeper/repl"}},c=[{value:"Introduction",id:"id-introduction",children:[],level:2},{value:"Configuration",id:"id-configuration",children:[],level:2},{value:"The cli exception handler",id:"id-the-cli-exception-handler",children:[],level:2},{value:"The http exception handler",id:"id-the-http-exception-handler",children:[{value:"Ignoring logs",id:"id-ignoring-logs",children:[],level:3}],level:2},{value:"Custom exceptions",id:"id-custom-exceptions",children:[],level:2}],d={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("nav",{"aria-label":"breadcrumbs"},(0,o.kt)("ul",{class:"breadcrumbs"},(0,o.kt)("li",{class:"breadcrumbs__item"},(0,o.kt)("a",{class:"breadcrumbs__link",href:"/"},"\ud83c\udfe0")),(0,o.kt)("li",{class:"breadcrumbs__item"},(0,o.kt)("a",{class:"breadcrumbs__link"},"The Basics")),(0,o.kt)("li",{class:"breadcrumbs__item"},(0,o.kt)("a",{class:"breadcrumbs__link",href:"/docs/the-basics/errors"},"Error Handling")))),(0,o.kt)("span",{class:"badge badge--secondary margin-top-bot"},"version 1.0.0"),(0,o.kt)("h1",{id:"error-handling"},"Error Handling"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"introduction"},(0,o.kt)("a",{parentName:"h4",href:"#id-introduction"},"Introduction"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"configuration"},(0,o.kt)("a",{parentName:"h4",href:"#id-configuration"},"Configuration"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"the-cli-exception-handler"},(0,o.kt)("a",{parentName:"h4",href:"#id-the-cli-exception-handler"},"The cli exception handler"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"the-http-exception-handler"},(0,o.kt)("a",{parentName:"h4",href:"#id-the-http-exception-handler"},"The http exception handler")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"ignoring-logs"},(0,o.kt)("a",{parentName:"h4",href:"#id-ignoring-logs"},"Ignoring logs"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"custom-exceptions"},(0,o.kt)("a",{parentName:"h4",href:"#id-custom-exceptions"},"Custom exceptions")))),(0,o.kt)("h2",{id:"id-introduction"},"Introduction"),(0,o.kt)("p",null,"When you start a new Athenna project, error and exception handling is already\nconfigured for you. The ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Http/Exceptions/Handler")," class is where all exceptions\nthrown by your http server are logged and then rendered to the user. And the\n",(0,o.kt)("inlineCode",{parentName:"p"},"app/Console/Exceptions/Handler")," is where all exceptions thrown by your Artisan commands.\nWe'll dive deeper into both classes throughout this documentation."),(0,o.kt)("h2",{id:"id-configuration"},"Configuration"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"debug")," option in your ",(0,o.kt)("inlineCode",{parentName:"p"},"config/app.js")," configuration file determines how much\ninformation about an error is actually displayed to the user. By default, this\noption is set to respect the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"APP_DEBUG")," environment variable, which\nis stored in your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("p",null,"During local development, you should set the ",(0,o.kt)("inlineCode",{parentName:"p"},"APP_DEBUG")," environment variable\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". In your production environment, this value should always be ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".\nIf the value is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in production, you risk exposing sensitive\nconfiguration values to your application's end users."),(0,o.kt)("p",null,"Every error will be logged by default using the ",(0,o.kt)("inlineCode",{parentName:"p"},"console")," driver from ",(0,o.kt)("inlineCode",{parentName:"p"},"@athenna/logger"),".\nBy default, Athenna uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"exception")," channel of your ",(0,o.kt)("inlineCode",{parentName:"p"},"config/logging.js")," file to log all\nexceptions that happens in your application."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can change the driver and formatter of ",(0,o.kt)("inlineCode",{parentName:"p"},"exception")," channel inside ",(0,o.kt)("inlineCode",{parentName:"p"},"config/logging.js"),"\nfile. This way you can send all your errors to other driver and using a different formatter."))),(0,o.kt)("h2",{id:"id-the-cli-exception-handler"},"The cli exception handler"),(0,o.kt)("p",null,"Athenna will forward all exceptions occurred during a command execution\nto the ",(0,o.kt)("inlineCode",{parentName:"p"},"handle")," method of ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Console/Exceptions/Handler.js")," class. By default,\nAthenna forward the error to the ",(0,o.kt)("inlineCode",{parentName:"p"},"handle")," method of ",(0,o.kt)("inlineCode",{parentName:"p"},"ConsoleExceptionHandler")," from Artisan\nusing super."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * The global exception handler of all Artisan commands.\n *\n * @param {any} error\n */\nasync handle(error) {\n  return super.handle(error)\n}\n")),(0,o.kt)("h2",{id:"id-the-http-exception-handler"},"The http exception handler"),(0,o.kt)("p",null,"Athenna will forward all exceptions occurred during an HTTP request execution\nto the ",(0,o.kt)("inlineCode",{parentName:"p"},"handle")," method of ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Http/Exceptions/Handler.js")," class. By default,\nAthenna forward the error to the ",(0,o.kt)("inlineCode",{parentName:"p"},"handle")," method of ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpExceptionHandler")," from Http\nusing super."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * The global exception handler of all Http requests.\n *\n * @param {any} error\n */\nasync handle(error) {\n  return super.handle(error)\n}\n")),(0,o.kt)("p",null,"You can change all the behavior of the ",(0,o.kt)("inlineCode",{parentName:"p"},"handle")," method according to your business rules,\nbut we recommend using the ",(0,o.kt)("inlineCode",{parentName:"p"},"handle")," method from ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpExceptionHandler")," to validate the\n",(0,o.kt)("inlineCode",{parentName:"p"},"APP_DEBUG")," environment variable and configure a pretty error log for you."),(0,o.kt)("h3",{id:"id-ignoring-logs"},"Ignoring logs"),(0,o.kt)("p",null,"You can simply ignore the exceptions from being logged in your exception handler\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"ignoreCodes")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ignoreStatuses")," properties of your ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Http/Exceptions/Handler.js"),"\nclass."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Error codes that should be ignored by Log.\n *\n * @type {string[]}\n */\nget ignoreCodes() {\n    return ['E_RUNTIME']\n}\n\n/**\n * Error statuses that should be ignored by Log.\n *\n * @type {number[]}\n */\nget ignoreStatuses() {\n    return [400, 401, 403]\n}\n")),(0,o.kt)("h2",{id:"id-custom-exceptions"},"Custom exceptions"),(0,o.kt)("p",null,"You can create custom exceptions by executing the following Artisan command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"node artisan make:exception NotFoundException\n")),(0,o.kt)("p",null,"Next, import and raise the exception as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { NotFoundException } from '#app/Exceptions/NotFoundException'\n\nconst message = 'Your resource has not been found.'\nconst status = 404\nconst code = 'E_NOT_FOUND'\nconst help = 'Restart your computer. Always works.'\n\nthrow new NotFoundException(message, status, code, help)\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Always try to use a custom exception to throw your errors inside Athenna. If you use\n",(0,o.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeError")," and other classes, it will not be treated by the handlers and will always\nbe considered as a not treated exception."))))}u.isMDXComponent=!0}}]);
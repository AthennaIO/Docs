"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[4180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Error Handling",sidebar_position:5,description:"Understand how you can handle the errors of the REST API application.",tags:["REST API Application","Error Handling"]},i="Error Handling",p={unversionedId:"rest-api-application/error-handling",id:"rest-api-application/error-handling",title:"Error Handling",description:"Understand how you can handle the errors of the REST API application.",source:"@site/docs/rest-api-application/error-handling.mdx",sourceDirName:"rest-api-application",slug:"/rest-api-application/error-handling",permalink:"/docs/rest-api-application/error-handling",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/rest-api-application/error-handling.mdx",tags:[{label:"REST API Application",permalink:"/docs/tags/rest-api-application"},{label:"Error Handling",permalink:"/docs/tags/error-handling"}],version:"current",sidebarPosition:5,frontMatter:{title:"Error Handling",sidebar_position:5,description:"Understand how you can handle the errors of the REST API application.",tags:["REST API Application","Error Handling"]},sidebar:"tutorialSidebar",previous:{title:"Request Context",permalink:"/docs/rest-api-application/request-context"},next:{title:"Rate Limiting",permalink:"/docs/rest-api-application/rate-limiting"}},l={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Http exceptions",id:"http-exceptions",level:2},{value:"The <code>HttpException</code> class",id:"the-httpexception-class",level:3},{value:"Ignore exceptions by status and code",id:"ignore-exceptions-by-status-and-code",level:3},{value:"Custom exceptions",id:"custom-exceptions",level:2},{value:"Implementing your own exception handler",id:"implementing-your-own-exception-handler",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"Understand how you can handle the errors of the REST API application."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"When you start a new Athenna project, error and exception\nhandling is already configured for you. But you can configure\nyour own extending the Athenna error handler. We'll dive deeper\ninto how to do that throughout this documentation."),(0,r.kt)("p",null,"This documentation will cover about error handling in the ",(0,r.kt)("strong",{parentName:"p"},"REST API"),"\napplication, which means that only errors that happens inside\nroutes and bellow that will be handled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=\"Path.routes('http.ts')\"",title:"\"Path.routes('http.ts')\""},"import { Route } from '@athenna/http'\n\n// If AppController.show throws, HttpExceptionHandler will handle it \ud83d\udc48\nRoute.get('/', 'AppController.show')\n\nRoute.get('/users', () => {\n  throw new Error('HttpExceptionHandler will handle this.') \ud83d\udc48\n})\n\nthrow new Error('This error will be handled by @athenna/core.') \ud83d\udc48\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Errors handled by ",(0,r.kt)("inlineCode",{parentName:"p"},"@athenna/core")," usually means that a\nbootstrap failure has been found in your application.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," option in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Path.config('app.ts')")," configuration\nfile determines how much information about an error is\nactually displayed to the user. By default, this option is\nset to respect the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"APP_DEBUG")," environment\nvariable, which is stored in your ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("p",null,"During local development, you should set the ",(0,r.kt)("inlineCode",{parentName:"p"},"APP_DEBUG"),"\nenvironment variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". In your production\nenvironment, this value should always be ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". If the\nvalue is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in production, you risk exposing\nsensitive configuration values to your application's end\nusers."),(0,r.kt)("p",null,"Every error will be logged by default using the ",(0,r.kt)("inlineCode",{parentName:"p"},"console"),"\ndriver from ",(0,r.kt)("inlineCode",{parentName:"p"},"@athenna/logger"),". By default, Athenna uses the\n",(0,r.kt)("inlineCode",{parentName:"p"},"exception")," channel of your ",(0,r.kt)("inlineCode",{parentName:"p"},"Path.config('logging.ts')")," file to log\nall exceptions that happens in your application."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can change the driver and formatter of ",(0,r.kt)("inlineCode",{parentName:"p"},"exception"),"\nchannel inside ",(0,r.kt)("inlineCode",{parentName:"p"},"Path.config('logging.ts')")," file. This way you can\nsend all your error logs to another provider and with\na different formatter.")),(0,r.kt)("h2",{id:"http-exceptions"},"Http exceptions"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"@athenna/http")," package there are exported the most\ncommon exception that a http application might throw when\nbuilding one. These exceptions were created based on its\nstatus code and the meaning of it:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Status code"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Exception Class"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"400"),(0,r.kt)("td",{parentName:"tr",align:"right"},"BadRequestException")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"401"),(0,r.kt)("td",{parentName:"tr",align:"right"},"UnauthorizedException")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"403"),(0,r.kt)("td",{parentName:"tr",align:"right"},"ForbiddenException")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"404"),(0,r.kt)("td",{parentName:"tr",align:"right"},"NotFoundException")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"405"),(0,r.kt)("td",{parentName:"tr",align:"right"},"MethodNotAllowedException")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"406"),(0,r.kt)("td",{parentName:"tr",align:"right"},"NotAcceptableException")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"408"),(0,r.kt)("td",{parentName:"tr",align:"right"},"RequestTimeoutException")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"413"),(0,r.kt)("td",{parentName:"tr",align:"right"},"PayloadTooLargeException")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"422"),(0,r.kt)("td",{parentName:"tr",align:"right"},"UnprocessableEntityException")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"500"),(0,r.kt)("td",{parentName:"tr",align:"right"},"InternalServerException")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"501"),(0,r.kt)("td",{parentName:"tr",align:"right"},"NotImplementedException")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"502"),(0,r.kt)("td",{parentName:"tr",align:"right"},"BadGatewayException")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"503"),(0,r.kt)("td",{parentName:"tr",align:"right"},"ServiceUnavailableException")))),(0,r.kt)("h3",{id:"the-httpexception-class"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"HttpException")," class"),(0,r.kt)("p",null,"All of the above exceptions where created from\n",(0,r.kt)("inlineCode",{parentName:"p"},"HttpException")," class, which is the base class to create\ncustom http exceptions. If you need to create some http\nexception from a status code that is not present above,\ncreate it extending ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpException"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpException } from '@athenna/http'\n\nexport class PaymentRequiredException extends HttpException {\n  public constructor(message = 'Payment required.') {\n    const status = 402\n    const help = undefined\n    const code = 'E_PAYMENT_REQUIRED_ERROR'\n\n    super({ code, help, status, message })\n  }\n}\n")),(0,r.kt)("h3",{id:"ignore-exceptions-by-status-and-code"},"Ignore exceptions by status and code"),(0,r.kt)("p",null,"You can ignore an exception from being logged if its status\ncode or the code does not match your requirements. To do so\nyou can add the following configurations to the ",(0,r.kt)("inlineCode",{parentName:"p"},"logger"),"\nproperty in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Path.config('http.ts')")," configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  logger: {\n    enabled: Env('LOG_HTTP', true),\n    ignoreStatuses: [404],\n    ignoreCodes: ['E_NOT_FOUND_ERROR']\n  }\n}\n")),(0,r.kt)("p",null,"From now on, all the exceptions thrown in your http\napplication will not be logged if its status is equal\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"404")," or the code is ",(0,r.kt)("inlineCode",{parentName:"p"},"E_NOT_FOUND_ERROR"),"."),(0,r.kt)("h2",{id:"custom-exceptions"},"Custom exceptions"),(0,r.kt)("p",null,"You can create custom exception by executing the following\nArtisan command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./node artisan make:exception NotFoundResourceException\n")),(0,r.kt)("p",null,"Next, import and raise the exception as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { NotFoundResourceException } from '#app/exceptions/NotFoundResourceException'\n\nthrow new NotFoundResourceException('Your resource has not been found.')\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Always try to use a custom exception to throw your errors\ninside Athenna. If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeError")," and other\nclasses, it will not be treated by the handlers and will\nalways be considered as a not treated exception.")),(0,r.kt)("h2",{id:"implementing-your-own-exception-handler"},"Implementing your own exception handler"),(0,r.kt)("p",null,"Let's suppose you want to write a custom logic for handling\nyour exceptions. You can do so by creating your own\nexception handler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="app/http/exceptions/Handler.js"',title:'"app/http/exceptions/Handler.js"'},"import { type ErrorContext, HttpExceptionHandler } from '@athenna/http'\n\nexport class Handler extends HttpExceptionHandler {\n  public async handle(ctx: ErrorContext) {\n      // Implement your own logic\n  }\n}\n")),(0,r.kt)("p",null,"Now you need to register your exception handler when\nbootstrapping your application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=\"Path.bootstrap('main.ts')\"",title:"\"Path.bootstrap('main.ts')\""},"await ignite.httpServer({\n  exceptionHandlerPath: '#app/http/exceptions/Handler', \ud83d\udc48\n})\n")))}u.isMDXComponent=!0}}]);
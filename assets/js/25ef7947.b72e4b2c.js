"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[4180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,h=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Error Handling",sidebar_position:5,description:"Understand how you can handle the errors of the REST API application.",tags:["REST API Application","Error Handling"]},i="Error Handling",p={unversionedId:"rest-api-application/error-handling",id:"rest-api-application/error-handling",title:"Error Handling",description:"Understand how you can handle the errors of the REST API application.",source:"@site/docs/rest-api-application/error-handling.mdx",sourceDirName:"rest-api-application",slug:"/rest-api-application/error-handling",permalink:"/docs/rest-api-application/error-handling",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/rest-api-application/error-handling.mdx",tags:[{label:"REST API Application",permalink:"/docs/tags/rest-api-application"},{label:"Error Handling",permalink:"/docs/tags/error-handling"}],version:"current",sidebarPosition:5,frontMatter:{title:"Error Handling",sidebar_position:5,description:"Understand how you can handle the errors of the REST API application.",tags:["REST API Application","Error Handling"]},sidebar:"tutorialSidebar",previous:{title:"Request Context",permalink:"/docs/rest-api-application/request-context"},next:{title:"CLI Application",permalink:"/docs/cli-application"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Http exceptions",id:"http-exceptions",level:2},{value:"The <code>HttpException</code> class",id:"the-httpexception-class",level:3},{value:"Ignore exceptions by status and code",id:"ignore-exceptions-by-status-and-code",level:3},{value:"Custom exceptions",id:"custom-exceptions",level:2},{value:"Implementing your own exception handler",id:"implementing-your-own-exception-handler",level:2}],d={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,"Understand how you can handle the errors of the REST API application."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"When you start a new Athenna project, error and exception\nhandling is already configured for you. But you can configure\nyour own extending the Athenna error handler. We'll dive\ndeeper into how to do that throughout this documentation."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," option in your ",(0,a.kt)("inlineCode",{parentName:"p"},"config/app.ts")," configuration\nfile determines how much information about an error is\nactually displayed to the user. By default, this option is\nset to respect the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"APP_DEBUG")," environment\nvariable, which is stored in your ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,a.kt)("p",null,"During local development, you should set the ",(0,a.kt)("inlineCode",{parentName:"p"},"APP_DEBUG"),"\nenvironment variable to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". In your production\nenvironment, this value should always be ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". If the\nvalue is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," in production, you risk exposing\nsensitive configuration values to your application's end\nusers."),(0,a.kt)("p",null,"Every error will be logged by default using the ",(0,a.kt)("inlineCode",{parentName:"p"},"console"),"\ndriver from ",(0,a.kt)("inlineCode",{parentName:"p"},"@athenna/logger"),". By default, Athenna uses the\n",(0,a.kt)("inlineCode",{parentName:"p"},"exception")," channel of your ",(0,a.kt)("inlineCode",{parentName:"p"},"config/logging.ts")," file to log\nall exceptions that happens in your application."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can change the driver and formatter of ",(0,a.kt)("inlineCode",{parentName:"p"},"exception"),"\nchannel inside ",(0,a.kt)("inlineCode",{parentName:"p"},"config/logging.ts")," file. This way you can\nsend all your error logs to another provider and with\na different formatter.")),(0,a.kt)("h2",{id:"http-exceptions"},"Http exceptions"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"@athenna/http")," package there are exported the most\ncommon exception that a http application might throw when\nbuilding one. These exceptions were created based on its\nstatus code and the meaning of it:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Status code"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Exception Class"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"400"),(0,a.kt)("td",{parentName:"tr",align:"right"},"BadRequestException")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"401"),(0,a.kt)("td",{parentName:"tr",align:"right"},"UnauthorizedException")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"403"),(0,a.kt)("td",{parentName:"tr",align:"right"},"ForbiddenException")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"404"),(0,a.kt)("td",{parentName:"tr",align:"right"},"NotFoundException")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"405"),(0,a.kt)("td",{parentName:"tr",align:"right"},"MethodNotAllowedException")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"406"),(0,a.kt)("td",{parentName:"tr",align:"right"},"NotAcceptableException")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"408"),(0,a.kt)("td",{parentName:"tr",align:"right"},"RequestTimeoutException")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"413"),(0,a.kt)("td",{parentName:"tr",align:"right"},"PayloadTooLargeException")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"422"),(0,a.kt)("td",{parentName:"tr",align:"right"},"UnprocessableEntityException")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"500"),(0,a.kt)("td",{parentName:"tr",align:"right"},"InternalServerException")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"501"),(0,a.kt)("td",{parentName:"tr",align:"right"},"NotImplementedException")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"502"),(0,a.kt)("td",{parentName:"tr",align:"right"},"BadGatewayException")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"503"),(0,a.kt)("td",{parentName:"tr",align:"right"},"ServiceUnavailableException")))),(0,a.kt)("h3",{id:"the-httpexception-class"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"HttpException")," class"),(0,a.kt)("p",null,"All of the above exceptions where created from\n",(0,a.kt)("inlineCode",{parentName:"p"},"HttpException")," class, which is the base class to create\ncustom http exceptions. If you need to create some http\nexception from a status code that is not present above,\ncreate it extending ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpException"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpException } from '@athenna/http'\n\nexport class PaymentRequiredException extends HttpException {\n  public constructor(message = 'Payment required.') {\n    const status = 402\n    const help = undefined\n    const code = 'E_PAYMENT_REQUIRED_ERROR'\n\n    super({ code, help, status, message })\n  }\n}\n")),(0,a.kt)("h3",{id:"ignore-exceptions-by-status-and-code"},"Ignore exceptions by status and code"),(0,a.kt)("p",null,"You can ignore an exception from being logged if its status\ncode or the code does not match your requirements. To do so\nyou can add the following configurations to the ",(0,a.kt)("inlineCode",{parentName:"p"},"logger"),"\nproperty in your ",(0,a.kt)("inlineCode",{parentName:"p"},"config/http.ts")," configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  logger: {\n    enabled: Env('LOG_HTTP', true),\n    ignoreStatuses: [404],\n    ignoreCodes: ['E_NOT_FOUND_ERROR']\n  }\n}\n")),(0,a.kt)("p",null,"From now on, all the exceptions thrown in your http\napplication will not be logged if its status is equal\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"404")," or the code is ",(0,a.kt)("inlineCode",{parentName:"p"},"E_NOT_FOUND_ERROR"),"."),(0,a.kt)("h2",{id:"custom-exceptions"},"Custom exceptions"),(0,a.kt)("p",null,"You can create custom exception by executing the following\nArtisan command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./node artisan make:exception NotFoundResourceException\n")),(0,a.kt)("p",null,"Next, import and raise the exception as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { NotFoundResourceException } from '#app/Exceptions/NotFoundResourceException'\n\nthrow new NotFoundResourceException('Your resource has not been found.')\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Always try to use a custom exception to throw your errors\ninside Athenna. If you use ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TypeError")," and other\nclasses, it will not be treated by the handlers and will\nalways be considered as a not treated exception.")),(0,a.kt)("h2",{id:"implementing-your-own-exception-handler"},"Implementing your own exception handler"),(0,a.kt)("p",null,"Let's suppose you want to write a custom logic for handling\nyour exceptions. You can do so by creating your own\nexception handler:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="app/Http/Exceptions/Handler.ts"',title:'"app/Http/Exceptions/Handler.ts"'},"import { ErrorContext, HttpExceptionHandler } from '@athenna/http'\n\nexport class Handler extends HttpExceptionHandler {\n  public async handle(ctx: ErrorContext) {\n      // Implement your own logic\n  }\n}\n")))}u.isMDXComponent=!0}}]);
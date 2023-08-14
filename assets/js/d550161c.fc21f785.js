"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[8578],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(h,i(i({ref:n},c),{},{components:t})):o.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9043:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=t(7462),a=(t(7294),t(3905));const r={title:"Error Handling",sidebar_position:4,description:"Understand how you can handle the errors of the CLI Application.",tags:["CLI Application","Error Handling"]},i="Error Handling",l={unversionedId:"cli-application/error-handling",id:"cli-application/error-handling",title:"Error Handling",description:"Understand how you can handle the errors of the CLI Application.",source:"@site/docs/cli-application/error-handling.mdx",sourceDirName:"cli-application",slug:"/cli-application/error-handling",permalink:"/docs/cli-application/error-handling",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/cli-application/error-handling.mdx",tags:[{label:"CLI Application",permalink:"/docs/tags/cli-application"},{label:"Error Handling",permalink:"/docs/tags/error-handling"}],version:"current",sidebarPosition:4,frontMatter:{title:"Error Handling",sidebar_position:4,description:"Understand how you can handle the errors of the CLI Application.",tags:["CLI Application","Error Handling"]},sidebar:"tutorialSidebar",previous:{title:"Publishing",permalink:"/docs/cli-application/publishing"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Custom exceptions",id:"custom-exceptions",level:2},{value:"Simple exceptions",id:"simple-exceptions",level:2},{value:"Implementing your own exception handler",id:"implementing-your-own-exception-handler",level:2}],c={toc:s},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,"Understand how you can handle the errors of the CLI Application."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"When you start a new Athenna project, error and exception\nhandling is already configured for you. But you can configure\nyour own extending the Athenna error handler. We'll dive\ndeeper into how to do that throughout this documentation."),(0,a.kt)("p",null,"When you start a new Athenna project, error and exception\nhandling is already configured for you. But you can configure\nyour own extending the Athenna error handler. We'll dive deeper\ninto how to do that throughout this documentation."),(0,a.kt)("p",null,"This documentation will cover about error handling in the ",(0,a.kt)("strong",{parentName:"p"},"CLI"),"\napplication, which means that only errors that happens inside\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"handle()")," method of commands and bellow that will be handled:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="app/console/commands/AppCommand.js"',title:'"app/console/commands/AppCommand.js"'},"import { BaseCommand } from '@athenna/artisan'\nimport { AppService } from '#app/services/AppService'\n\nexport class AppCommand extends BaseCommand {\n  public static signature(): string {\n    return 'app'\n  }\n\n  public static description(): string {\n    throw new Error('This error will be handled by @athenna/core.') \ud83d\udc48\n\n    return `Get some information's about the application.`\n  }\n\n  public async handle(): Promise<void> {\n    const appService = ioc.safeUse<AppService>('App/Services/AppService')\n    const json = JSON.stringify(appService.findOne(), null, 2)\n\n    throw new Error('ConsoleExceptionHandler will handle this error.') \ud83d\udc48\n\n    this.logger.info(`Application information's: ${json}`)\n  }\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Errors handled by ",(0,a.kt)("inlineCode",{parentName:"p"},"@athenna/core")," usually means that a\nbootstrap failure has been found in your application.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," option in your ",(0,a.kt)("inlineCode",{parentName:"p"},"Path.config('app.ts')")," configuration\nfile determines how much information about an error is\nactually displayed to the user. By default, this option is\nset to respect the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"APP_DEBUG")," environment\nvariable, which is stored in your ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,a.kt)("p",null,"During local development, you should set the ",(0,a.kt)("inlineCode",{parentName:"p"},"APP_DEBUG"),"\nenvironment variable to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". In your production\nenvironment, this value should always be ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". If the\nvalue is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," in production, you risk exposing\nsensitive configuration values to your application's end\nusers."),(0,a.kt)("p",null,"Every error will be logged by default using the ",(0,a.kt)("inlineCode",{parentName:"p"},"console"),"\ndriver from ",(0,a.kt)("inlineCode",{parentName:"p"},"@athenna/logger"),". By default, Athenna uses the\n",(0,a.kt)("inlineCode",{parentName:"p"},"exception")," channel of your ",(0,a.kt)("inlineCode",{parentName:"p"},"Path.config('logging.ts')")," file to log\nall exceptions that happens in your application."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can change the driver and formatter of ",(0,a.kt)("inlineCode",{parentName:"p"},"exception"),"\nchannel inside ",(0,a.kt)("inlineCode",{parentName:"p"},"Path.config('logging.ts')")," file. This way you can\nsend all your error logs to another provider and with\na different formatter.")),(0,a.kt)("h2",{id:"custom-exceptions"},"Custom exceptions"),(0,a.kt)("p",null,"You can create custom exception by executing the following\nArtisan command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./node artisan make:exception BadCommandException\n")),(0,a.kt)("p",null,"Next, import and raise the exception as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BadCommandException } from '#app/exceptions/BadCommandException'\n\nthrow new BadCommandException('Your command is bad.')\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Always try to use a custom exception to throw your errors\ninside Athenna. If you use ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TypeError")," and other\nclasses, it will not be treated by the handlers and will\nalways be considered as a not treated exception.")),(0,a.kt)("h2",{id:"simple-exceptions"},"Simple exceptions"),(0,a.kt)("p",null,"When talking about exceptions in Artisan and CLI applications,\nwe can divide them into two categories: simple exceptions and\nthe more complex ones. Simple exceptions are exceptions that\nwhen handled by the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsoleExceptionHandler")," will only log the\nexception ",(0,a.kt)("strong",{parentName:"p"},"message"),". The more complex will log the entire exception\nincluding ",(0,a.kt)("strong",{parentName:"p"},"code, message, help and stack trace"),"."),(0,a.kt)("p",null,"Simple exceptions are recognized by ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsoleExceptionHandler")," by\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"code"),". If the code is ",(0,a.kt)("inlineCode",{parentName:"p"},"E_SIMPLE_CLI"),", it will be considered\nas a simple exception:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="app/console/exceptions/NotFoundDatabaseException.js"',title:'"app/console/exceptions/NotFoundDatabaseException.js"'},"import { Exception } from '@athenna/common'\n\nexport class NotFoundDatabaseException extends Exception {\n  public constructor(databaseName: string) {\n    const code = 'E_SIMPLE_CLI' \ud83d\udc48\n\n    super({ code, message: `Database ${databaseName} not found.` })\n  }\n}\n")),(0,a.kt)("h2",{id:"implementing-your-own-exception-handler"},"Implementing your own exception handler"),(0,a.kt)("p",null,"Let's suppose you want to write a custom logic for handling\nyour exceptions. You can do so by creating your own\nexception handler:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="app/console/exceptions/Handler.js"',title:'"app/console/exceptions/Handler.js"'},"import { ConsoleExceptionHandler } from '@athenna/artisan'\n\nexport class Handler extends ConsoleExceptionHandler {\n  public async handle(error: any) {\n      // Implement your own logic\n  }\n}\n")),(0,a.kt)("p",null,"Now you need to register your exception handler when\nbootstrapping your application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=\"Path.bootstrap('main.ts')\"",title:"\"Path.bootstrap('main.ts')\""},"await ignite.artisan(process.argv, { \n  displayName: 'Athenna',\n  exceptionHandlerPath: '#app/console/exceptions/Handler', \ud83d\udc48\n})\n")))}u.isMDXComponent=!0}}]);
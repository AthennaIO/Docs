"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[8578],{5699:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=o(5893),i=o(1151);const r={title:"Error Handling",sidebar_position:4,description:"Understand how you can handle the errors of the CLI Application."},a="Error Handling",s={id:"cli-application/error-handling",title:"Error Handling",description:"Understand how you can handle the errors of the CLI Application.",source:"@site/docs/cli-application/error-handling.mdx",sourceDirName:"cli-application",slug:"/cli-application/error-handling",permalink:"/docs/cli-application/error-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/cli-application/error-handling.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Error Handling",sidebar_position:4,description:"Understand how you can handle the errors of the CLI Application."},sidebar:"tutorialSidebar",previous:{title:"Publishing",permalink:"/docs/cli-application/publishing"},next:{title:"Annotations",permalink:"/docs/cli-application/annotations"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Custom exceptions",id:"custom-exceptions",level:2},{value:"Simple exceptions",id:"simple-exceptions",level:2},{value:"Implementing your own exception handler",id:"implementing-your-own-exception-handler",level:2}];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"error-handling",children:"Error Handling"}),"\n",(0,t.jsx)(e.p,{children:"Understand how you can handle the errors of the CLI Application."}),"\n",(0,t.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(e.p,{children:"When you start a new Athenna project, error and exception\nhandling is already configured for you. But you can configure\nyour own extending the Athenna error handler. We'll dive\ndeeper into how to do that throughout this documentation."}),"\n",(0,t.jsx)(e.p,{children:"When you start a new Athenna project, error and exception\nhandling is already configured for you. But you can configure\nyour own extending the Athenna error handler. We'll dive deeper\ninto how to do that throughout this documentation."}),"\n",(0,t.jsxs)(e.p,{children:["This documentation will cover about error handling in the ",(0,t.jsx)(e.strong,{children:"CLI"}),"\napplication, which means that only errors that happens inside\nthe ",(0,t.jsx)(e.code,{children:"handle()"})," method of commands and bellow that will be handled:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",metastring:'title="app/console/commands/AppCommand.ts"',children:"import { BaseCommand } from '@athenna/artisan'\nimport { AppService } from '#app/services/AppService'\n\nexport class AppCommand extends BaseCommand {\n  public static signature(): string {\n    return 'app'\n  }\n\n  public static description(): string {\n    throw new Error('This error will be handled by @athenna/core.') \ud83d\udc48\n\n    return `Get some information's about the application.`\n  }\n\n  public async handle(): Promise<void> {\n    const appService = ioc.safeUse<AppService>('App/Services/AppService')\n    const json = JSON.stringify(appService.findOne(), null, 2)\n\n    throw new Error('ConsoleExceptionHandler will handle this error.') \ud83d\udc48\n\n    this.logger.info(`Application information's: ${json}`)\n  }\n}\n"})}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsxs)(e.p,{children:["Errors handled by ",(0,t.jsx)(e.code,{children:"@athenna/core"})," usually means that a\nbootstrap failure has been found in your application."]})}),"\n",(0,t.jsx)(e.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.code,{children:"debug"})," option in your ",(0,t.jsx)(e.code,{children:"Path.config('app.ts')"})," configuration\nfile determines how much information about an error is\nactually displayed to the user. By default, this option is\nset to respect the value of the ",(0,t.jsx)(e.code,{children:"APP_DEBUG"})," environment\nvariable, which is stored in your ",(0,t.jsx)(e.code,{children:".env"})," file."]}),"\n",(0,t.jsxs)(e.p,{children:["During local development, you should set the ",(0,t.jsx)(e.code,{children:"APP_DEBUG"}),"\nenvironment variable to ",(0,t.jsx)(e.code,{children:"true"}),". In your production\nenvironment, this value should always be ",(0,t.jsx)(e.code,{children:"false"}),". If the\nvalue is set to ",(0,t.jsx)(e.code,{children:"true"})," in production, you risk exposing\nsensitive configuration values to your application's end\nusers."]}),"\n",(0,t.jsxs)(e.p,{children:["Every error will be logged by default using the ",(0,t.jsx)(e.code,{children:"console"}),"\ndriver from ",(0,t.jsx)(e.code,{children:"@athenna/logger"}),". By default, Athenna uses the\n",(0,t.jsx)(e.code,{children:"exception"})," channel of your ",(0,t.jsx)(e.code,{children:"Path.config('logging.ts')"})," file to log\nall exceptions that happens in your application."]}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsxs)(e.p,{children:["You can change the driver and formatter of ",(0,t.jsx)(e.code,{children:"exception"}),"\nchannel inside ",(0,t.jsx)(e.code,{children:"Path.config('logging.ts')"})," file. This way you can\nsend all your error logs to another provider and with\na different formatter."]})}),"\n",(0,t.jsx)(e.h2,{id:"custom-exceptions",children:"Custom exceptions"}),"\n",(0,t.jsx)(e.p,{children:"You can create custom exception by executing the following\nArtisan command:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"node artisan make:exception BadCommandException\n"})}),"\n",(0,t.jsx)(e.p,{children:"Next, import and raise the exception as follows."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"import { BadCommandException } from '#app/exceptions/BadCommandException'\n\nthrow new BadCommandException('Your command is bad.')\n"})}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsxs)(e.p,{children:["Always try to use a custom exception to throw your errors\ninside Athenna. If you use ",(0,t.jsx)(e.code,{children:"Error"}),", ",(0,t.jsx)(e.code,{children:"TypeError"})," and other\nclasses, it will not be treated by the handlers and will\nalways be considered as a not treated exception."]})}),"\n",(0,t.jsx)(e.h2,{id:"simple-exceptions",children:"Simple exceptions"}),"\n",(0,t.jsxs)(e.p,{children:["When talking about exceptions in Artisan and CLI applications,\nwe can divide them into two categories: simple exceptions and\nthe more complex ones. Simple exceptions are exceptions that\nwhen handled by the ",(0,t.jsx)(e.code,{children:"ConsoleExceptionHandler"})," will only log the\nexception ",(0,t.jsx)(e.strong,{children:"message"}),". The more complex will log the entire exception\nincluding ",(0,t.jsx)(e.strong,{children:"code, message, help and stack trace"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Simple exceptions are recognized by ",(0,t.jsx)(e.code,{children:"ConsoleExceptionHandler"})," by\nthe ",(0,t.jsx)(e.code,{children:"code"}),". If the code is ",(0,t.jsx)(e.code,{children:"E_SIMPLE_CLI"}),", it will be considered\nas a simple exception:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",metastring:'title="app/console/exceptions/NotFoundDatabaseExceptio.ts"',children:"import { Exception } from '@athenna/common'\n\nexport class NotFoundDatabaseException extends Exception {\n  public constructor(databaseName: string) {\n    const code = 'E_SIMPLE_CLI' \ud83d\udc48\n\n    super({ code, message: `Database ${databaseName} not found.` })\n  }\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"implementing-your-own-exception-handler",children:"Implementing your own exception handler"}),"\n",(0,t.jsx)(e.p,{children:"Let's suppose you want to write a custom logic for handling\nyour exceptions. You can do so by creating your own\nexception handler:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",metastring:'title="app/console/exceptions/Handler.ts"',children:"import { ConsoleExceptionHandler } from '@athenna/artisan'\n\nexport class Handler extends ConsoleExceptionHandler {\n  public async handle(error: any) {\n      // Implement your own logic\n  }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"Now you need to register your exception handler when\nbootstrapping your application:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",metastring:"title=\"Path.bootstrap('main.ts')\"",children:"await ignite.console(process.argv, {\n  displayName: 'Athenna',\n  exceptionHandlerPath: '#app/console/exceptions/Handler', \ud83d\udc48\n})\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,e,o)=>{o.d(e,{Z:()=>s,a:()=>a});var t=o(7294);const i={},r=t.createContext(i);function a(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);
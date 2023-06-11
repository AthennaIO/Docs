"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[8043],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return t?i.createElement(m,r(r({ref:n},c),{},{components:t})):i.createElement(m,r({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=t(7462),o=(t(7294),t(3905));t(941);const a={title:"Application Lifecycle",sidebar_position:1,description:"Understand each one of the Athenna applications lifecycles.",tags:["Architecture Concepts","Application Lifecycle"]},r="Application Lifecycle",l={unversionedId:"architecture-concepts/application-lifecycle",id:"architecture-concepts/application-lifecycle",title:"Application Lifecycle",description:"Understand each one of the Athenna applications lifecycles.",source:"@site/docs/architecture-concepts/application-lifecycle.mdx",sourceDirName:"architecture-concepts",slug:"/architecture-concepts/application-lifecycle",permalink:"/docs/architecture-concepts/application-lifecycle",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/architecture-concepts/application-lifecycle.mdx",tags:[{label:"Architecture Concepts",permalink:"/docs/tags/architecture-concepts"},{label:"Application Lifecycle",permalink:"/docs/tags/application-lifecycle"}],version:"current",sidebarPosition:1,frontMatter:{title:"Application Lifecycle",sidebar_position:1,description:"Understand each one of the Athenna applications lifecycles.",tags:["Architecture Concepts","Application Lifecycle"]},sidebar:"tutorialSidebar",previous:{title:"Architecture Concepts",permalink:"/docs/architecture-concepts"},next:{title:"Service Container",permalink:"/docs/architecture-concepts/service-container"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Athenna foundation lifecycle",id:"athenna-foundation-lifecycle",level:2},{value:"Loading the foundation",id:"loading-the-foundation",level:2},{value:"Rc file",id:"rc-file",level:3},{value:"Other operations",id:"other-operations",level:3},{value:"Firing the foundation",id:"firing-the-foundation",level:3},{value:"Environment variables",id:"environment-variables",level:4},{value:"Configuration files",id:"configuration-files",level:4},{value:"Service providers",id:"service-providers",level:4},{value:"Preloads",id:"preloads",level:4},{value:"REST API lifecycle",id:"rest-api-lifecycle",level:2},{value:"Kernel",id:"kernel",level:3},{value:"Routes",id:"routes",level:3},{value:"Finish up",id:"finish-up",level:3},{value:"Cli and Commands lifecycle",id:"cli-and-commands-lifecycle",level:2},{value:"Kernel",id:"kernel-1",level:3},{value:"Execution",id:"execution",level:3},{value:"Finish up",id:"finish-up-1",level:3},{value:"Focus on service providers",id:"focus-on-service-providers",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"application-lifecycle"},"Application Lifecycle"),(0,o.kt)("p",null,"Understand each one of the Athenna applications lifecycle."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,'When using any tool in the "real world", you feel more confident if\nyou understand how that tool works. Application development is no\ndifferent. When you understand how your development tools function,\nyou feel more comfortable and confident using them.'),(0,o.kt)("p",null,"The goal of this document is to give you a good, high-level overview\nof how the Athenna framework works. By getting to know the overall\nframework better, everything feels less \"magical\" and you will be more\nconfident building your applications. If you don't understand all the\nterms right away, don't lose heart! Just try to get a basic grasp of\nwhat is going on, and your knowledge will grow as you explore other\nsections of the documentation."),(0,o.kt)("h2",{id:"athenna-foundation-lifecycle"},"Athenna foundation lifecycle"),(0,o.kt)("p",null,"The Athenna foundation is everything that is not coupled to the type of\napplication you are using. Meaning that no matter what is the type of\napplication you are using to build your solution, the explanation bellow\nis valid for all of them."),(0,o.kt)("p",null,"The entry point of an Athenna application is the ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap/main.ts"),"\nfile in Laravel project structure and ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/main.ts")," in slim project\nstructure. The first action taken by Athenna itself is to create an\ninstance of the application and then boot it."),(0,o.kt)("h2",{id:"loading-the-foundation"},"Loading the foundation"),(0,o.kt)("h3",{id:"rc-file"},"Rc file"),(0,o.kt)("p",null,"The RC file is the first thing Athenna will do when booting the\napplication. The RC file is responsible to configure your entire\nworkspace and certain runtime settings of your application."),(0,o.kt)("h3",{id:"other-operations"},"Other operations"),(0,o.kt)("p",null,"Some other operation will be done when loading the foundation, such as:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Verify if your ",(0,o.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines"},"engines in ",(0,o.kt)("inlineCode",{parentName:"a"},"package.json"))," is supported."),(0,o.kt)("li",{parentName:"ol"},"Register the Athenna logger provider."),(0,o.kt)("li",{parentName:"ol"},"Register an uncaught exception handler."),(0,o.kt)("li",{parentName:"ol"},"Define your application root path."),(0,o.kt)("li",{parentName:"ol"},"Register ",(0,o.kt)("inlineCode",{parentName:"li"},"Ignite")," class in the service container."),(0,o.kt)("li",{parentName:"ol"},"Define application signals for graceful shutdown.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The process of loading the Athenna foundation is triggered by the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Ignite.load")," method.")),(0,o.kt)("h3",{id:"firing-the-foundation"},"Firing the foundation"),(0,o.kt)("p",null,"The Athenna foundation will automatically be fired internally depending\non the type of application you are using, let's see all the operations\nexecuted in order to get Athenna foundation done:"),(0,o.kt)("h4",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"The first thing Athenna will do when firing the foundation is to load\nyour environment variables files. You can learn more about what is and\nhow to configure your environment variables in ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/configuration#environment-configuration"},"the environment\nconfiguration documentation section"),"."),(0,o.kt)("h4",{id:"configuration-files"},"Configuration files"),(0,o.kt)("p",null,"Afterwards Athenna will load all the configuration files found inside\nthe path returned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Path.config")," method. You can learn more about\nwhat is and how to configure your configuration files in\n",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/configuration#configuration-files"},"the configuration files documentation section"),"."),(0,o.kt)("h4",{id:"service-providers"},"Service providers"),(0,o.kt)("p",null,"One of the most important kernel bootstrapping actions is loading the\nservice providers for your application. All the service providers for\nthe application are configured in the ",(0,o.kt)("inlineCode",{parentName:"p"},".athennarc.json")," in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"providers")," array."),(0,o.kt)("p",null,"Athenna will iterate through this list of providers and instantiate each\nof them. After instantiating the providers, the ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," method will\nbe called on all the providers. Then, once all the providers have been\nregistered, the ",(0,o.kt)("inlineCode",{parentName:"p"},"boot")," method will be called on each provider. This is\nso service providers may depend on every container binding being\nregistered and available by the time their boot method is executed."),(0,o.kt)("p",null,"Service providers are responsible for bootstrapping all the frameworks\nvarious components, such as the database, http server, validation,\nservices and routing components. Essentially, every major feature\noffered by Athenna is bootstrapped and configured by a service\nprovider. Since they bootstrap and configure so many features offered\nby the framework, service providers are the most important aspect of\nthe entire Athenna bootstrap process."),(0,o.kt)("h4",{id:"preloads"},"Preloads"),(0,o.kt)("p",null,"Preload files are loaded at the time of booting the application. The\nfiles are loaded right after booting the service providers. A preload\nfile could be useful to execute some operation before bootstrapping\nthe application. All the preloads for the application are configured\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},".athennarc.json")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"preloads")," array."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The process of firing the Athenna foundation is triggered by the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Ignite.fire")," method. But if you check your ",(0,o.kt)("inlineCode",{parentName:"p"},"main.ts")," entrypoint file,\nyou will see that this method is not called directly. The reason for\nthis is that this method is called internally depending on the type of\napplication you are using. Let's cover some examples bellow:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"REST API")," application needs to fire the foundation first because\nit depends on service providers to register your controllers, services,\nmiddlewares, routes, etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cli")," application and Artisan commands does not fire the foundation\nbecause commands do not depends on registering providers, loading\nenvironment variables and configuration files, for example. But, if your\ncommand got the ",(0,o.kt)("inlineCode",{parentName:"p"},"loadApp")," equals true in ",(0,o.kt)("inlineCode",{parentName:"p"},".athennarc.json"),", the foundation\nwill be fired before executing your command.")))),(0,o.kt)("h2",{id:"rest-api-lifecycle"},"REST API lifecycle"),(0,o.kt)("h3",{id:"kernel"},"Kernel"),(0,o.kt)("p",null,"The Kernel class is responsible by defining some bootstraps that will\nbe run before reading your ",(0,o.kt)("inlineCode",{parentName:"p"},"routes/http.ts")," file. These bootstraps\nconfigure error handling for requests, tracing and logging, detect the\napplication environment, and perform other tasks that need to be done\nbefore the request is actually handled. Typically, these classes handle\ninternal Athenna configuration that you do not need to worry about."),(0,o.kt)("p",null,"The Kernel is also responsible by registering your middlewares and\ncontrollers defined in your ",(0,o.kt)("inlineCode",{parentName:"p"},".athennarc.json")," file. By default, Athenna\nwill always use the default implementation ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpKernel")," class imported\nfrom ",(0,o.kt)("inlineCode",{parentName:"p"},"@athenna/http")," package. If you prefer, you can create your custom\nKernel implementation, extending the default ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpKernel")," class and\nregistering it in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Ignite.httpServer")," method call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpKernel } from '@athenna/http'\n\nexport class CustomKernel extends HttpKernel {\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can check all the methods available for you to override in your\ncustom kernel implementation taking a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AthennaIO/Http/blob/develop/src/Kernels/HttpKernel.ts"},"HttpKernel"),"\nimplementation code.")),(0,o.kt)("p",null,"Then, you can register your ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomKernel")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap/main.ts"),"\nfile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Ignite } from '@athenna/core'\n\nconst ignite = await new Ignite().load(import.meta.url)\n\nawait ignite.httpServer({ kernelPath: '#app/Http/CustomKernel' })'\n")),(0,o.kt)("h3",{id:"routes"},"Routes"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"routes/http.ts")," file is the entrypoint for all your http requests.\nThis file is responsible to create a contract between your client and\nyour application. It Is in here that we define all our routes and the\nhandlers/controllers who will handle the client request."),(0,o.kt)("p",null,"One of the most important service providers in your application is the\n",(0,o.kt)("inlineCode",{parentName:"p"},"HttpRouteProvider"),". This service provider adds in the container the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Route")," class instance used inside ",(0,o.kt)("inlineCode",{parentName:"p"},"routes/http.ts")," file."),(0,o.kt)("p",null,"When the client request arrives, the server first executes all your\nglobal middlewares, then it will execute all your route middlewares.\nOnce it finishes, it goes for your handler/controller. See the example:"),(0,o.kt)("mermaid",{value:'flowchart LR\n    clientRequest(("Client Request"))\n    globalMiddlewares{"Global Middlewares"}\n    routeMiddlewares{"Route Middlewares"}\n    controller("Controller")\n\n    clientRequest --\x3e globalMiddlewares\n    globalMiddlewares --\x3e routeMiddlewares\n    routeMiddlewares --\x3e controller'}),(0,o.kt)("h3",{id:"finish-up"},"Finish up"),(0,o.kt)("p",null,"Once the controller/handler function returns a response, the response will\ntravel back outward through each global interceptor, and then route's\ninterceptor, giving the application a chance to modify or examine the\noutgoing response. See the example:"),(0,o.kt)("mermaid",{value:'flowchart LR\n    clientRequest(("Client Request"))\n    globalInterceptors{"Global Interceptors"}\n    routeInterceptors{"Route Interceptors"}\n    controller("Controller")\n\n    controller --\x3e globalInterceptors\n    globalInterceptors --\x3e routeInterceptors\n    routeInterceptors --\x3e clientRequest'}),(0,o.kt)("p",null,"As you can see in the example, the response content is sent to the client. The\nrequest finishes for the client but not for the server. Now it's time to\nexecute the global and route terminators. The terminators are executed when a\nresponse has been sent, so you will not be able to send more data to the\nclient. It can, however, be useful for sending data to external services, for\nexample, create metrics of the entire request. See the example:"),(0,o.kt)("mermaid",{value:'flowchart LR\n    globalTerminators{"Global Terminators"}\n    routeTerminators{"Route Terminators"}\n\n    globalTerminators --\x3e routeTerminators'}),(0,o.kt)("p",null,"Finally, once all terminators are executed, the request finishes in the\nserver. We've finished our journey through the entire REST API lifecycle \ud83e\udd73."),(0,o.kt)("h2",{id:"cli-and-commands-lifecycle"},"Cli and Commands lifecycle"),(0,o.kt)("h3",{id:"kernel-1"},"Kernel"),(0,o.kt)("p",null,"The Kernel class is responsible for defining some bootstraps that will be run\nbefore registering your commands. These bootstraps configure error handling\nfor commands, detect the application environment, and perform other tasks that\nneed to be done before the command is actually handled. Typically, these\nclasses handle internal Athenna configuration that you do not need to worry\nabout."),(0,o.kt)("p",null,"The Kernel is also responsible for registering your commands defined in your\n",(0,o.kt)("inlineCode",{parentName:"p"},".athennarc.json")," file. By default, Athenna will always use the default\nimplementation ",(0,o.kt)("inlineCode",{parentName:"p"},"ConsoleKernel")," class imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@athenna/http")," package. If\nyou prefer, you can create your custom Kernel implementation, extending the\ndefault ConsoleKernel class and registering it in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Ignite.artisan")," method\ncall:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ConsoleKernel } from '@athenna/http'\n\nexport class CustomKernel extends ConsoleKernel {\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can check all the methods available for you to override in your custom\nkernel implementation taking a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AthennaIO/Artisan/blob/develop/src/Kernels/ConsoleKernel.ts"},"ConsoleKernel")," implementation code.")),(0,o.kt)("p",null,"Then, you can register your ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomKernel")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap/main.ts")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap/artisan.ts")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Ignite } from '@athenna/core'\n\nconst ignite = await new Ignite().load(import.meta.url, {\n  bootLogs: false\n})\n\nawait ignite.artisan({ kernelPath: '#app/Http/CustomKernel' })\n")),(0,o.kt)("h3",{id:"execution"},"Execution"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"routes/console.ts")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"commands")," property of ",(0,o.kt)("inlineCode",{parentName:"p"},".athennarc.json")," file\nis where that we define all ours commands and the handlers who will handle\nthe terminal arguments."),(0,o.kt)("p",null,"When the terminal arguments arrive, the application will be bootstrapped\nbased on the command that you are asking to execute. Let's suppose we have\nexecuted the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello")," command defined in our ",(0,o.kt)("inlineCode",{parentName:"p"},".athennarc.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "commands": {\n    "hello": {\n      "path": "#app/Console/Commands/HelloCommand",\n      "loadApp": false,\n      "stayAlive": false,\n      "loadAllCommands": false,\n      "environments": ["console"]\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"loadAllCommands")," is set to false, the Kernel will load only the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello"),"\ncommand and execute it:"),(0,o.kt)("mermaid",{value:'flowchart LR\n    terminalCommand(("Terminal Command"))\n    igniteLoad{"Ignite.load()"}\n    consoleKernel{"ConsoleKernel"}\n    loadAppEqualsTrue{"loadApp === true"}\n    igniteFire{"Ignite.fire()"}\n    defineArgsAndFlags{"Define arguments and flags"}\n    commandHandler("Command Handler")\n\n    terminalCommand --\x3e igniteLoad\n    igniteLoad --\x3e consoleKernel\n    consoleKernel --\x3e loadAppEqualsTrue\n    loadAppEqualsTrue -- true --\x3e igniteFire\n    loadAppEqualsTrue --\x3e defineArgsAndFlags\n    defineArgsAndFlags --\x3e commandHandler'}),(0,o.kt)("h3",{id:"finish-up-1"},"Finish up"),(0,o.kt)("p",null,"Once the command handler function finish, Athenna will verify if the ",(0,o.kt)("inlineCode",{parentName:"p"},"stayAlive"),"\nsetting is set to true, if so, the application will not be terminated, very\nuseful when running command like ",(0,o.kt)("inlineCode",{parentName:"p"},"repl")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"serve"),"."),(0,o.kt)("mermaid",{value:'flowchart LR\n    commandHandler("Command Handler")\n    stayAliveEqualsTrue{"stayAlive === true"}\n    leaveAppRunning("Leave application running")\n    processExit("process.exit()")\n\n    commandHandler --\x3e stayAliveEqualsTrue\n    stayAliveEqualsTrue -- true --\x3e leaveAppRunning\n    stayAliveEqualsTrue -- false --\x3e processExit'}),(0,o.kt)("p",null,"We've finished our journey through the entire command lifecycle \ud83e\udd73."),(0,o.kt)("h2",{id:"focus-on-service-providers"},"Focus on service providers"),(0,o.kt)("p",null,"Service providers are truly the key to bootstrapping an Athenna application.\nThe application instance is created, the service providers are registered, and\nthe request is handed to the bootstrapped application. It's really that simple!"),(0,o.kt)("p",null,"Having a firm grasp of how an Athenna application is built and bootstrapped via\nservice providers is very valuable. Your application's default service providers\nare stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"providers")," directory, and you can create your own provider\nwith the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./node artisan make:provider AppProvider\n")),(0,o.kt)("p",null,"With this new provider you can add your application's own bootstrapping and\nservice container bindings. For large applications, you may wish to create\nseveral service providers, each with more granular bootstrapping for specific\nservices used by your application."))}u.isMDXComponent=!0}}]);
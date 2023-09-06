"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[8943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,v=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return n?r.createElement(v,a(a({ref:t},c),{},{components:n})):r.createElement(v,a({ref:t},c))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={title:"Service Providers",sidebar_position:3,description:"Understand the purpose and how to use the Athenna service providers."},a="Service Providers",p={unversionedId:"architecture-concepts/service-providers",id:"architecture-concepts/service-providers",title:"Service Providers",description:"Understand the purpose and how to use the Athenna service providers.",source:"@site/docs/architecture-concepts/service-providers.mdx",sourceDirName:"architecture-concepts",slug:"/architecture-concepts/service-providers",permalink:"/docs/architecture-concepts/service-providers",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/architecture-concepts/service-providers.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Service Providers",sidebar_position:3,description:"Understand the purpose and how to use the Athenna service providers."},sidebar:"tutorialSidebar",previous:{title:"Service Container",permalink:"/docs/architecture-concepts/service-container"},next:{title:"Facades",permalink:"/docs/architecture-concepts/facades"}},s={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Writing service providers",id:"writing-service-providers",level:2},{value:"The <code>register</code> method",id:"the-register-method",level:3},{value:"The <code>boot</code> method",id:"the-boot-method",level:3},{value:"The <code>shutdown</code> method",id:"the-shutdown-method",level:3},{value:"Registering providers",id:"registering-providers",level:2},{value:"Choosing applications",id:"choosing-applications",level:2}],c={toc:l},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"service-providers"},"Service Providers"),(0,i.kt)("p",null,"Understand the purpose and how to use the Athenna service providers."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Service providers are the central place of all Athenna application bootstrapping.\nYour own application, as well as all of Athenna core services, are bootstrapped\nvia service providers."),(0,i.kt)("p",null,'But what do we mean by "bootstrapped"? In general, we mean registering things,\nincluding registering service container bindings, retry strategies for your http\nrequests, booting your FakeApi. Service providers are the central place to\nconfigure your application.'),(0,i.kt)("p",null,"If you open the ",(0,i.kt)("inlineCode",{parentName:"p"},".athennarc.json")," file included with Athenna, you will see a\n",(0,i.kt)("inlineCode",{parentName:"p"},"providers")," array. These are all the service provider classes that will be\nloaded for your application. By default, a set of Athenna core service\nproviders are listed in this array. These providers bootstrap the core\nAthenna components, such as the http, route, controllers and others."),(0,i.kt)("p",null,"In this overview, you will learn how to write your own service providers and\nregister them with your Athenna application."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you would like to learn more about how Athenna works internally, check\nout the ",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture-concepts/application-lifecycle"},"application lifecycle documentation section"),".")),(0,i.kt)("h2",{id:"writing-service-providers"},"Writing service providers"),(0,i.kt)("p",null,"All service providers extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceProvider")," class. Most service providers\ncontain a ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"boot")," method. Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," method, you should\nonly bind things into the service container. We will check lately why this\nbehavior. To create a new provider, use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./node artisan make:provider AppProvider\n")),(0,i.kt)("h3",{id:"the-register-method"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"register")," method"),(0,i.kt)("p",null,"As mentioned previously, within the ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," method, you should only bind\nthings into the service container. You should never attempt to register any\npiece of functionality within the ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," method. Otherwise, you may\naccidentally use a service that is provided by a service provider which has\nnot loaded yet."),(0,i.kt)("p",null,"Let's take a look at a basic service provider. Within any of your service\nprovider methods, you always have access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"this.container")," property\nwhich provides access to the service container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ServiceProvider } from '@athenna/ioc'\nimport { AppHelper } from '#app/helpers/AppHelper'\n\nexport default class AppProvider extends ServiceProvider {\n   public register() {\n     this.container.singleton('App/Helpers/AppHelper', AppHelper)\n   }\n}\n")),(0,i.kt)("p",null,"This service provider only defines a ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," method, and uses that method to\ndefine an implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"AppHelper")," in the service container. If you're\nnot yet familiar with Athenna service container, ",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture-concepts/service-container"},"check out its documentation"),"."),(0,i.kt)("h3",{id:"the-boot-method"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"boot")," method"),(0,i.kt)("p",null,"So, what if we need to register a dependency that needs another dependency\nwithin our service provider? This should be done within the ",(0,i.kt)("inlineCode",{parentName:"p"},"boot")," method.\nThis method is called after all other service providers have been registered,\nmeaning you have access to all other services that have been registered by\nthe framework:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ServiceProvider } from '@athenna/ioc'\nimport { AppHelper } from '#app/helpers/AppHelper'\n\nexport default class AppProvider extends ServiceProvider {\n   public boot() {\n     const appService = this.container.safeUse('App/Services/AppService')\n     const appHelper = new AppHelper(appService)\n\n     this.container.instance('App/Helpers/AppHelper', appHelper)\n   }\n}\n")),(0,i.kt)("h3",{id:"the-shutdown-method"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"shutdown")," method"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"shutdown")," method will be called when the application is going down for\nsome reason. This method is extremely useful for gracefully shutdown the\napplication, and it's used in providers such as ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpServerProvider")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"DatabaseProvider"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ServiceProvider } from '@athenna/ioc'\n\nexport default class AppProvider extends ServiceProvider {\n   public async shutdown() {\n     const appHelper = this.container.use('App/Helpers/AppHelper')\n\n     if (!appHelper) {\n       return\n     }\n\n     await appHelper.close()\n   }\n}\n")),(0,i.kt)("h2",{id:"registering-providers"},"Registering providers"),(0,i.kt)("p",null,"All service providers are registered in the ",(0,i.kt)("inlineCode",{parentName:"p"},".athennarc.json file"),". This file\ncontains a ",(0,i.kt)("inlineCode",{parentName:"p"},"providers")," array where you can list the class names of your service\nproviders. By default, a set of Athenna core service providers are listed in\nthis array. These providers bootstrap the core Athenna components, such as\nthe http, route, services and others."),(0,i.kt)("p",null,"If you are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"make:provider")," command to create providers, Athenna\nwill automatically register the provider for you in this array, but if you\nmight need to register it manually, just add the path to it to the array:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "providers": [\n    // Other service providers...\n\n    "#providers/AppProvider"\n  ]\n}\n')),(0,i.kt)("h2",{id:"choosing-applications"},"Choosing applications"),(0,i.kt)("p",null,"In some cases you want that your provider only runs for a determined type of\nAthenna applications. For example, I have a ",(0,i.kt)("inlineCode",{parentName:"p"},"MockedDbProvider")," that connects\nwith some database if I don't have an Artisan command that do some work\ninside this database, why I would need to run this ",(0,i.kt)("inlineCode",{parentName:"p"},"MockedDbProvider")," when\nrunning Artisan application and commands?"),(0,i.kt)("p",null,"To solve this problem you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"environment")," getter to choose the\napplications that could run this provider:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ServiceProvider } from '@athenna/ioc'\n\nexport default class MockedDbProvider extends ServiceProvider {\n   public get environment() {\n     return ['http', 'repl']\n   }\n}\n")),(0,i.kt)("p",null,"Now when running Artisan application and commands, ",(0,i.kt)("inlineCode",{parentName:"p"},"MockedDbProvider")," will be\nignored."),(0,i.kt)("p",null,"The following environments are available by default in Athenna at this moment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"http"),(0,i.kt)("li",{parentName:"ul"},"repl"),(0,i.kt)("li",{parentName:"ul"},"console")),(0,i.kt)("p",null,"You could also create your own environments. In your ",(0,i.kt)("inlineCode",{parentName:"p"},"Path.bootstrap('main.ts')")," file\nyou can add an ",(0,i.kt)("inlineCode",{parentName:"p"},"environments")," option when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"Ignite.load")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Ignite } from '@athenna/core'\n\nconst ignite = await new Ignite().load(import.meta.url, {\n  environments: ['myEnv']\n})\n\nawait ignite.httpServer()\n")),(0,i.kt)("p",null,"All of your environments will be merged with Athenna default ones when running\nyour application. This means that in the example above, when running your\nhttp server, the providers bootstrapped will be only the ones that got the\nenvironments getter returning ",(0,i.kt)("inlineCode",{parentName:"p"},"['*']")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"['myEnv', 'http']"),"."))}h.isMDXComponent=!0}}]);
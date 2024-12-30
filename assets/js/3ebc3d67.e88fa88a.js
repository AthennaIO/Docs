"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[1438],{3954:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"architecture-concepts/service-container","title":"Service Container","description":"Understand the purpose and how to use the Athenna service container.","source":"@site/docs/architecture-concepts/service-container.mdx","sourceDirName":"architecture-concepts","slug":"/architecture-concepts/service-container","permalink":"/docs/architecture-concepts/service-container","draft":false,"unlisted":false,"editUrl":"https://github.com/AthennaIO/Docs/tree/main/docs/architecture-concepts/service-container.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Service Container","sidebar_position":2,"description":"Understand the purpose and how to use the Athenna service container."},"sidebar":"tutorialSidebar","previous":{"title":"Application Lifecycle","permalink":"/docs/architecture-concepts/application-lifecycle"},"next":{"title":"Service Providers","permalink":"/docs/architecture-concepts/service-providers"}}');var r=t(4848),s=t(8453),o=t(7049);const a={title:"Service Container",sidebar_position:2,description:"Understand the purpose and how to use the Athenna service container."},c="Service Container",l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Simple resolution",id:"simple-resolution",level:2},{value:"When to use the container",id:"when-to-use-the-container",level:2},{value:"Binding",id:"binding",level:2},{value:"Binding transients",id:"binding-transients",level:3},{value:"Binding a singleton",id:"binding-a-singleton",level:3},{value:"Binding instances",id:"binding-instances",level:3},{value:"The <code>@Service()</code> annotation",id:"the-service-annotation",level:3},{value:"Resolving",id:"resolving",level:2},{value:"Automatic constructor injection",id:"automatic-constructor-injection",level:3},{value:"Using <code>@Inject()</code> annotation",id:"using-inject-annotation",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"service-container",children:"Service Container"})}),"\n",(0,r.jsx)(n.p,{children:"Understand the purpose and how to use the Athenna service container."}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:'The Athenna service container is a powerful tool for managing class dependencies\nand performing dependency injection. Dependency injection is a fancy phrase that\nessentially means this: class dependencies are "injected" into the class via the\nconstructor or, in some cases, "setter" methods.'}),"\n",(0,r.jsx)(n.p,{children:"Let's look at a simple example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { Controller, type Context } from '@athenna/http'\nimport { WelcomeService } from '#src/services/WelcomeService'\n\n@Controller()\nexport class WelcomeController {\n  private welcomeService: WelcomeService\n\n  public constructor(welcomeService) {\n    this.welcomeService = welcomeService\n  }\n\n  public async show({ response }: Context) {\n    const data = await this.welcomeService.getWelcomeData()\n\n    return response.status(200).send(data)\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, the ",(0,r.jsx)(n.code,{children:"WelcomeController"})," needs to retrieve the welcome payload\nfrom a data source. So, we will inject a service that is able to retrieve the\npayload. In this context, our ",(0,r.jsx)(n.code,{children:"WelcomeService"}),". Since the ",(0,r.jsx)(n.code,{children:"WelcomeService"})," is\ninjected, we are able to easily swap it out with another implementation. We are\nalso able to easily 'mock', or create a dummy implementation of the\n",(0,r.jsx)(n.code,{children:"WelcomeService"})," when testing our application."]}),"\n",(0,r.jsx)(n.p,{children:"A deep understanding of the Athenna service container is essential to building a\npowerful, large application, as well as for contributing to the Athenna core\nitself."}),"\n",(0,r.jsx)(n.h2,{id:"simple-resolution",children:"Simple resolution"}),"\n",(0,r.jsxs)(n.p,{children:["You may place the following code in your ",(0,r.jsx)(o.A,{father:"routes",child:"http.ts"}),"\nfile:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { Route } from '@athenna/http'\n\nexport class AppService {\n  public ok() {\n    return { message: 'ok' }\n  }\n}\n\nioc.bind('appService', AppService)\n\nRoute.get('/', ({ response }) => {\n  const appService = ioc.use<AppService>('appService')\n  const body = appService.ok()\n\n  return response.status(200).send(body)\n})\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, when bootstrapping your application, Athenna will bind the\n",(0,r.jsx)(n.code,{children:"AppService"})," class inside the container. When hitting your application's / route,\nit will be resolved by using the ",(0,r.jsx)(n.code,{children:"ioc"})," global variable. This is game changing. It\nmeans you can develop your application and take advantage of dependency\ninjection without worrying about bloated configuration files."]}),"\n",(0,r.jsxs)(n.p,{children:["Thankfully, many of the classes you will be writing when building an Athenna\napplication automatically receive their dependencies via the container,\nincluding ",(0,r.jsx)(n.a,{href:"/docs/rest-api-application/controllers",children:"controllers"})," and\n",(0,r.jsx)(n.a,{href:"/docs/rest-api-application/middlewares",children:"middlewares"}),". Once you taste the power of\nautomatic and zero configuration dependency injection, it feels impossible to\ndevelop without it."]}),"\n",(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsxs)(n.p,{children:["The example above is just to show that we can place our services anywhere in our\napplication, without depending on configuration files or any other kind of\nsetup. We recommend you placing your services in specifics directory and not\ninside your route file. A good place to put your services is ",(0,r.jsx)(n.code,{children:"src/services"}),"\ndirectory, since ",(0,r.jsx)(n.code,{children:"make:service"})," command will save your services there.\nBut remember that this is only a tip, at the end of the day you can do\nwhatever you want with Athenna \ud83d\ude0e."]})}),"\n",(0,r.jsx)(n.h2,{id:"when-to-use-the-container",children:"When to use the container"}),"\n",(0,r.jsxs)(n.p,{children:["Thanks to this simple configuration resolution, you will often just import your\ndependency on your routes, controllers, and elsewhere without ever manually\ninteracting with the container. For example, you might just import your\n",(0,r.jsx)(n.code,{children:"AppService"})," in your controller so that you can easily access the business\nlogic wrote in the service class. Even though we never have to interact with\nthe container to write this code, it is managing the injection of their\ndependencies behind the scenes."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { AppService } from '#src/services/AppService'\nimport { Controller, type Context } from '@athenna/http'\n\n@Controller()\nexport class AppController {\n  public constructor(private appService: AppService) {}\n\n  public async show({ response }: Context) {\n    const data = await this.appService.getDate()\n\n    return response.status(200).send(data)\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In many cases, thanks to automatic dependency injection and\n",(0,r.jsx)(n.a,{href:"/docs/architecture-concepts/facades",children:"facades"}),", you can build Athenna applications\nwithout ever manually binding or resolving anything from the container. ",(0,r.jsx)(n.strong,{children:"So,\nwhen would you ever manually interact with the container?"})]}),"\n",(0,r.jsx)(n.p,{children:"If you are writing an Athenna package that you plan to share with other Athenna\ndevelopers, you may need to bind your package's services into the container."}),"\n",(0,r.jsx)(n.h2,{id:"binding",children:"Binding"}),"\n",(0,r.jsx)(n.p,{children:"Almost all of your service container bindings will be registered within\nservice providers, so most of these examples will demonstrate using the\ncontainer in that context."}),"\n",(0,r.jsxs)(n.p,{children:["In your application you will always have access to the container via the ",(0,r.jsx)(n.code,{children:"ioc"}),"\nglobal property. We can register a binding using the ",(0,r.jsx)(n.code,{children:"bind"})," method, passing the\nalias name that we wish to register along with our dependency:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { StringNormalizer } from '#src/helpers/StringNormalizer'\n\nioc.bind('App/Helpers/StringNormalizer', StringNormalizer)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"binding-transients",children:"Binding transients"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"transient"})," method binds a class into the container that will resolve\ndifferent instances of it each time. Meaning that once a transient binding is\nresolved, a new object instance will be returned on subsequent calls into the\ncontainer:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { StringNormalizer } from '#src/helpers/StringNormalizer'\n\nioc.transient('App/Helpers/StringNormalizer', StringNormalizer)\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["By default, the ",(0,r.jsx)(n.code,{children:"bind"})," method will always register your dependencies as\n",(0,r.jsx)(n.code,{children:"transient"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"binding-a-singleton",children:"Binding a singleton"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"singleton"})," method binds a class into the container that should only be\nresolved one time. Once a singleton binding is resolved, the same object\ninstance will be returned on subsequent calls into the container:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { StringNormalizer } from '#src/helpers/StringNormalizer'\n\nioc.singleton('App/Helpers/StringNormalizer', StringNormalizer)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"binding-instances",children:"Binding instances"}),"\n",(0,r.jsxs)(n.p,{children:["You may also bind an existing object instance into the container using the\n",(0,r.jsx)(n.code,{children:"instance"})," method. The given instance will always be returned on subsequent\ncalls into the container:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { StringNormalizer } from '#src/helpers/StringNormalizer'\n\nioc.instance('App/Helpers/StringNormalizer', new StringNormalizer())\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"the-service-annotation",children:["The ",(0,r.jsx)(n.code,{children:"@Service()"})," annotation"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"@Service()"})," annotation is just a helper that will map all the\nconfigurations that a service needs to be registered in the container,\nthis means that this annotation does not have the responsibility to\nbind your service in the container."]}),"\n",(0,r.jsx)(n.p,{children:"Let's create a simple service to understand how this annotation works:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"node artisan make:service StringNormalizer\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The command above will create the ",(0,r.jsx)(o.A,{father:"services",child:"StringNormalizer.ts"}),"\nfile and will automatically register the service in the ",(0,r.jsx)(n.code,{children:"services"})," property\nof the ",(0,r.jsx)(n.code,{children:".athennarc.json"})," file."]}),"\n",(0,r.jsx)(n.p,{children:"Let's add some configuration to it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:"title=\"Path.services('StringNormalizer.ts')\"",children:"import { Service } from '@athenna/ioc'\n\n@Service({\n  type: 'singleton',\n  camelAlias: 'stringNormalizer',\n  alias: 'App/Services/StringNormalizer',\n})\nexport class StringNormalizer {\n  public run(value: string) {\n    return value.trim().toLowerCase()\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The following operations will be done in ",(0,r.jsx)(n.code,{children:"StringNormalizer"})," class\nwhen bootstrapping the Athenna application:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The class will be registered in the container with the\nalias ",(0,r.jsx)(n.code,{children:"App/Services/StringNormalizer"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The registration type will be ",(0,r.jsx)(n.a,{href:"/docs/architecture-concepts/service-container#binding-a-singleton",children:"singleton"}),", meaning\nthat the same instance of the class will be resolved from\nthe container everytime it is requested."]}),"\n",(0,r.jsxs)(n.li,{children:["The camel alias of the class will be ",(0,r.jsx)(n.code,{children:"stringNormalizer"}),",\nthat is typically used in ",(0,r.jsx)(n.a,{href:"/docs/architecture-concepts/service-container#automatic-constructor-injection",children:"automatic constructor injections"}),"\nand also by ",(0,r.jsxs)(n.a,{href:"/docs/architecture-concepts/service-container#using-inject-annotation",children:["the ",(0,r.jsx)(n.code,{children:"@Inject()"})," annotation"]}),"\nto resolve the class from the container."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["By default, the ",(0,r.jsx)(n.code,{children:"@Service()"})," annotation will always register\nyour services as ",(0,r.jsx)(n.a,{href:"/docs/architecture-concepts/service-container#binding-transients",children:"transient"}),",\nmeaning that a new instance of your class will be resolved from the container\neverytime."]})}),"\n",(0,r.jsx)(n.h2,{id:"resolving",children:"Resolving"}),"\n",(0,r.jsxs)(n.p,{children:["You may use the ",(0,r.jsx)(n.code,{children:"use"})," or ",(0,r.jsx)(n.code,{children:"safeUse"})," methods from the ioc global property to\nresolve a class instance from the container. The use method accepts the alias\nof the dependency you wish to resolve:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { StringNormalizer } from '#src/helpers/StringNormalizer'\n\nconst sn = ioc.use<StringNormalizer>('App/Helpers/StringNormalizer')\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If the dependency alias cannot be found in the container, ",(0,r.jsx)(n.code,{children:"sn"})," const will be\nset as ",(0,r.jsx)(n.code,{children:"undefined"}),". To throw errors when the dependency does not exist, use\nthe ",(0,r.jsx)(n.code,{children:"safeUse"})," method."]}),"\n",(0,r.jsx)(n.h3,{id:"automatic-constructor-injection",children:"Automatic constructor injection"}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, and importantly, you can use the constructor of a class that is\nresolved by the container, including\n",(0,r.jsx)(n.a,{href:"/docs/rest-api-application/controllers",children:"controllers"}),", ",(0,r.jsx)(n.a,{href:"/docs/rest-api-application/middlewares",children:"middlewares"}),",\nand more."]}),"\n",(0,r.jsx)(n.p,{children:"For example, you may add your provider name in camelCase in the controller's\nconstructor. The service will automatically be resolved and injected into the\nclass:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { AppService } from '#src/services/AppService'\nimport { Controller, type Context } from '@athenna/http'\n\n@Controller()\nexport class AppController {\n  public constructor(private appService: AppService) {}\n\n  public async show({ response }: Context) {\n    const data = await this.appService.getData()\n\n    return response.status(200).send(data)\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"using-inject-annotation",children:["Using ",(0,r.jsx)(n.code,{children:"@Inject()"})," annotation"]}),"\n",(0,r.jsxs)(n.p,{children:["You can also use the ",(0,r.jsx)(n.code,{children:"@Inject()"})," annotation instead of the constructor. The\nannotation follows the same logic of the constructor, you need to use the\ncamelCase name of your dependency as the property name to be resolved properly:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { Inject } from '@athenna/ioc'\nimport { AppService } from '#src/services/AppService'\nimport { Controller, type Context } from '@athenna/http'\n\n@Controller()\nexport class AppController {\n  @Inject()\n  private appService: AppService\n\n  public async show({ response }: Context) {\n    const data = await this.appService.getData()\n\n    return response.status(200).send(data)\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When using the ",(0,r.jsx)(n.code,{children:"@Inject()"})," annotation you could also pass as argument a\nspecific alias to be resolved in the container:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { Inject } from '@athenna/ioc'\nimport { AppService } from '#src/services/AppService'\nimport { Controller, type Context } from '@athenna/http'\n\n@Controller()\nexport class AppController {\n  @Inject('App/Services/AppService')\n  private appService: AppService\n\n  public async show({ response }: Context) {\n    const data = await this.appService.getData()\n\n    return response.status(200).send(data)\n  }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7049:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);const i={hoverCardContainer:"hoverCardContainer_jqUQ",hoverCardLink:"hoverCardLink_oDZU",hoverCard:"hoverCard_qTDS"};var r=t(4848);function s(e){let n=e.father;switch(e.father){case"storage":n="src/storage";break;case"logs":n="src/storage/logs";break;case"views":n="src/resources/views";break;case"locales":n="src/resources/locales";break;case"static":n="src/resources/static";break;case"config":n="src/config";break;case"database":n="src/database";break;case"seeders":n="src/database/seeders";break;case"migrations":n="src/database/migrations";break;case"console":n="src/console";break;case"commands":n="src/console/commands";break;case"cron":n="src/cron";break;case"schedulers":n="src/cron/schedulers";break;case"models":n="src/models";break;case"services":n="src/services";break;case"repositories":n="src/repositories";break;case"http":n="src/http";break;case"controllers":n="src/http/controllers";break;case"middlewares":n="src/http/middlewares";break;case"interceptors":n="src/http/interceptors";break;case"terminators":n="src/http/terminators";break;case"stubs":n="tests/stubs";break;case"fixtures":n="tests/fixtures";break;case"providers":n="src/providers";break;case"facades":n="src/facades";break;case"routes":n="src/routes";break;case"validators":n="src/validators"}return(0,r.jsxs)("div",{className:i.hoverCardContainer,children:[(0,r.jsx)("a",{className:i.hoverCardLink,href:`/docs/the-basics/helpers#path${e.father}`,children:(0,r.jsxs)("code",{children:["Path.",e.father,"(",e.child?`'${e.child}'`:"",")"]})}),(0,r.jsx)("div",{className:i.hoverCard,children:(0,r.jsxs)("p",{style:{margin:0},children:["./",n,e.child?`/${e.child}`:""]})})]})}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
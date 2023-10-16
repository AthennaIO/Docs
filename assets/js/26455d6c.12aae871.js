"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[5691],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=i.createContext({}),l=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return i.createElement(a.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),g=o,m=u["".concat(a,".").concat(g)]||u[g]||d[g]||r;return t?i.createElement(m,s(s({ref:n},p),{},{components:t})):i.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=g;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<r;l++)s[l]=t[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6063:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(7462),o=(t(7294),t(3905));const r={title:"Mocking",sidebar_position:4,description:"Understand how to mock dependencies and functions in Athenna."},s="Mocking",c={unversionedId:"testing/mocking",id:"testing/mocking",title:"Mocking",description:"Understand how to mock dependencies and functions in Athenna.",source:"@site/docs/testing/mocking.mdx",sourceDirName:"testing",slug:"/testing/mocking",permalink:"/docs/testing/mocking",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/testing/mocking.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Mocking",sidebar_position:4,description:"Understand how to mock dependencies and functions in Athenna."},sidebar:"tutorialSidebar",previous:{title:"CLI Testing",permalink:"/docs/testing/cli-tests"}},a={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Mocking objects",id:"mocking-objects",level:2},{value:"Mocking services",id:"mocking-services",level:2},{value:"Replacing the entire service",id:"replacing-the-entire-service",level:3},{value:"Using the <code>@InjectMock()</code> annotation",id:"using-the-injectmock-annotation",level:3},{value:"Mocking facades",id:"mocking-facades",level:2},{value:"Assertions in mocks",id:"assertions-in-mocks",level:2},{value:"Mocking inside Artisan child processes",id:"mocking-inside-artisan-child-processes",level:2}],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mocking"},"Mocking"),(0,o.kt)("p",null,"Understand how to mock dependencies and functions in Athenna."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,'When testing Athenna applications, you may wish to "mock"\ncertain aspects of your application, so they are not actually\nexecuted during a given test. For example, when testing a\ncontroller that calls a service, you may wish to mock the\nservice, so they are not actually executed during the test.\nThis allows you to only test the controller\'s HTTP response\nwithout worrying about the execution of the service since\nthe service can be tested in their own test case.'),(0,o.kt)("h2",{id:"mocking-objects"},"Mocking objects"),(0,o.kt)("p",null,"Coming soon..."),(0,o.kt)("h2",{id:"mocking-services"},"Mocking services"),(0,o.kt)("p",null,"Mocking a single service method could be a difficult thing to do\nif your service is not going to be registered as a singleton in your\napplication. The best way to mock a service is by instantiating\na new instance of the service, registering it in the container\nand then mocking the method you want in each test case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AppService } from '#app/services/AppService'\nimport { BaseHttpTest } from '@athenna/core/testing/BaseHttpTest'\nimport { Test, type Context, BeforeAll, Mock, AfterEach } from '@athenna/test'\n\nexport default class AppControllerTest extends BaseHttpTest {\n  public appService = new AppService()\n\n  @BeforeAll()\n  public async beforeAll() {\n    ioc.instance('App/Services/AppService', this.appService)\n  }\n\n  @AfterEach()\n  public async afterEach() {\n    Mock.restoreAll()\n  }\n\n  @Test()\n  public async shouldBeAbleToMock({ assert, request }: Context) {\n    Mock.when(this.appService, 'findOne').return({ fake: true })\n\n    const response = await request.get('/api/v1')\n\n    response.assertStatusCode(200)\n    response.assertBodyContains({ fake: true })\n    assert.calledOnce(this.appService.findOne)\n  }\n}\n")),(0,o.kt)("h3",{id:"replacing-the-entire-service"},"Replacing the entire service"),(0,o.kt)("p",null,"If you prefer you can also replace the entire service with\na mocked version of your service using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ioc.fake()")," method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Test, BeforeAll, type Context } from '@athenna/test'\nimport { AppServiceMock } from '#tests/fixtures/AppServiceMock'\nimport { BaseHttpTest } from '@athenna/core/testing/BaseHttpTest'\n\nexport default class AppControllerTest extends BaseHttpTest {\n  @BeforeAll()\n  public beforeAll() {\n    ioc\n      .fake('App/Services/AppService', AppServiceMock)\n      .alias('appService', 'App/Services/AppService')\n  }\n\n  @Test()\n  public async shouldBeAbleToMock({ request }: Context) {\n    const response = await request.get('/api/v1')\n\n    response.assertStatusCode(200)\n    response.assertBodyContains({ fake: true })\n  }\n}\n")),(0,o.kt)("h3",{id:"using-the-injectmock-annotation"},"Using the ",(0,o.kt)("inlineCode",{parentName:"h3"},"@InjectMock()")," annotation"),(0,o.kt)("p",null,"Coming soon..."),(0,o.kt)("h2",{id:"mocking-facades"},"Mocking facades"),(0,o.kt)("p",null,"Coming soon..."),(0,o.kt)("h2",{id:"assertions-in-mocks"},"Assertions in mocks"),(0,o.kt)("p",null,"Coming soon..."),(0,o.kt)("h2",{id:"mocking-inside-artisan-child-processes"},"Mocking inside Artisan child processes"),(0,o.kt)("p",null,"Coming soon..."))}d.isMDXComponent=!0}}]);
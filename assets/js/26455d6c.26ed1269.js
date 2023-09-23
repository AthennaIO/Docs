"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[5691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),l=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,m=u["".concat(a,".").concat(g)]||u[g]||d[g]||i;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=g;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={title:"Mocking",sidebar_position:4,description:"Understand how to mock dependencies and functions in Athenna."},s="Mocking",c={unversionedId:"testing/mocking",id:"testing/mocking",title:"Mocking",description:"Understand how to mock dependencies and functions in Athenna.",source:"@site/docs/testing/mocking.mdx",sourceDirName:"testing",slug:"/testing/mocking",permalink:"/docs/testing/mocking",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/testing/mocking.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Mocking",sidebar_position:4,description:"Understand how to mock dependencies and functions in Athenna."},sidebar:"tutorialSidebar",previous:{title:"CLI Testing",permalink:"/docs/testing/cli-tests"}},a={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Mocking objects",id:"mocking-objects",level:2},{value:"Mocking services",id:"mocking-services",level:2},{value:"Replacing the entire service",id:"replacing-the-entire-service",level:3},{value:"Using the <code>@InjectMock()</code> annotation",id:"using-the-injectmock-annotation",level:3},{value:"Mocking facades",id:"mocking-facades",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mocking"},"Mocking"),(0,r.kt)("p",null,"Understand how to mock dependencies and functions in Athenna."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,'When testing Athenna applications, you may wish to "mock"\ncertain aspects of your application so they are not actually\nexecuted during a given test. For example, when testing a\ncontroller that calls a service, you may wish to mock the\nservice, so they are not actually executed during the test.\nThis allows you to only test the controller\'s HTTP response\nwithout worrying about the execution of the service since\nthe service can be tested in their own test case.'),(0,r.kt)("h2",{id:"mocking-objects"},"Mocking objects"),(0,r.kt)("p",null,"Coming soon..."),(0,r.kt)("h2",{id:"mocking-services"},"Mocking services"),(0,r.kt)("p",null,"Mocking a single service method could be a difficult thing to do\nif your service is not going to be registered as a singleton in your\napplication. The best way to mock a service is by instantiating\na new instance of the service, registering it in the container\nand then mocking the method you want in each test case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AppService } from '#app/services/AppService'\nimport { BaseRestTest } from '@athenna/core/testing/BaseRestTest'\nimport { Test, type Context, BeforeAll, Mock, AfterEach } from '@athenna/test'\n\nexport default class AppControllerTest extends BaseRestTest {\n  public appService = new AppService()\n\n  @BeforeAll()\n  public async beforeAll() {\n    ioc.instance('App/Services/AppService', this.appService)\n  }\n\n  @AfterEach()\n  public async afterEach() {\n    Mock.restoreAll()\n  }\n\n  @Test()\n  public async shouldBeAbleToMock({ request }: Context) {\n    const mock = Mock.when(this.appService, 'findOne').return({ fake: true })\n\n    const response = await request.get('/api/v1')\n\n    response.assertStatusCode(200)\n    response.assertBodyContains({ fake: true })\n    assert.called(mock)\n  }\n}\n")),(0,r.kt)("h3",{id:"replacing-the-entire-service"},"Replacing the entire service"),(0,r.kt)("p",null,"If you prefer you can also replace the entire service with\na mocked version of your service using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ioc.fake()")," method"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Test, BeforeAll, type Context } from '@athenna/test'\nimport { AppServiceMock } from '#tests/fixtures/AppServiceMock'\nimport { BaseRestTest } from '@athenna/core/testing/BaseRestTest'\n\nexport default class AppControllerTest extends BaseRestTest {\n  @BeforeAll()\n  public beforeAll() {\n    ioc\n      .fake('App/Services/AppService', AppServiceMock)\n      .alias('appService', 'App/Services/AppService')\n  }\n\n  @Test()\n  public async shouldBeAbleToMock({ request }: Context) {\n    const response = await request.get('/api/v1')\n\n    response.assertStatusCode(200)\n    response.assertBodyContains({ fake: true })\n  }\n}\n")),(0,r.kt)("h3",{id:"using-the-injectmock-annotation"},"Using the ",(0,r.kt)("inlineCode",{parentName:"h3"},"@InjectMock()")," annotation"),(0,r.kt)("p",null,"Coming soon..."),(0,r.kt)("h2",{id:"mocking-facades"},"Mocking facades"),(0,r.kt)("p",null,"Coming soon..."))}d.isMDXComponent=!0}}]);
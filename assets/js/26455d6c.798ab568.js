"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[5691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(n),u=s,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||a;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[h]="string"==typeof e?e:s,r[1]=i;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(7462),s=(n(7294),n(3905));const a={title:"Mocking",sidebar_position:4,description:"Understand how to mock dependencies and functions in Athenna."},r="Mocking",i={unversionedId:"testing/mocking",id:"testing/mocking",title:"Mocking",description:"Understand how to mock dependencies and functions in Athenna.",source:"@site/docs/testing/mocking.mdx",sourceDirName:"testing",slug:"/testing/mocking",permalink:"/docs/testing/mocking",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/testing/mocking.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Mocking",sidebar_position:4,description:"Understand how to mock dependencies and functions in Athenna."},sidebar:"tutorialSidebar",previous:{title:"CLI Testing",permalink:"/docs/testing/cli-tests"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"The <code>Mock</code> class",id:"the-mock-class",level:2},{value:"The <code>Mock::when()</code> method",id:"the-mockwhen-method",level:3},{value:"Mocking a class method",id:"mocking-a-class-method",level:4},{value:"The <code>Mock::spy()</code> method",id:"the-mockspy-method",level:3},{value:"The <code>Mock::fake()</code> method",id:"the-mockfake-method",level:3},{value:"The <code>Mock::stub()</code> method",id:"the-mockstub-method",level:3},{value:"Mocking services",id:"mocking-services",level:2},{value:"Replacing the entire service",id:"replacing-the-entire-service",level:3},{value:"Using the <code>@InjectMock()</code> annotation",id:"using-the-injectmock-annotation",level:3},{value:"Mocking facades",id:"mocking-facades",level:2},{value:"Assertions in mocks",id:"assertions-in-mocks",level:2},{value:"Mocking commands",id:"mocking-commands",level:2}],p={toc:l},h="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(h,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"mocking"},"Mocking"),(0,s.kt)("p",null,"Understand how to mock dependencies and functions in Athenna."),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,'When testing Athenna applications, you may wish to "mock"\ncertain aspects of your application, so they are not actually\nexecuted during a given test. For example, when testing a\ncontroller that calls a service, you may wish to mock the\nservice, so they are not actually executed during the test.\nThis allows you to only test the controller\'s HTTP response\nwithout worrying about the execution of the service since\nthe service can be tested in their own test case.'),(0,s.kt)("h2",{id:"the-mock-class"},"The ",(0,s.kt)("inlineCode",{parentName:"h2"},"Mock")," class"),(0,s.kt)("h3",{id:"the-mockwhen-method"},"The ",(0,s.kt)("inlineCode",{parentName:"h3"},"Mock::when()")," method"),(0,s.kt)("p",null,"This method is responsible for mocking the return\nvalue of a given object method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Test, Mock, type Context, AfterEach } from '@athenna/test'\n\nexport default class MockTest {\n  public object = {\n    hello: () => undefined\n  }\n\n  @AfterEach()\n  public afterEach() {\n    Mock.restoreAll()\n  }\n\n  @Test()\n  public async shouldBeAbleToMockAnObjectMethod({ assert }: Context) {\n    Mock.when(this.object, 'hello').return('hello world')\n\n    assert.equal(this.object.hello(), 'hello world')\n  }\n}\n")),(0,s.kt)("p",null,"You can also use this method to throw an error when the\ngiven method is called:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"@Test()\npublic async shouldBeAbleToMockAnObjectMethod({ assert }: Context) {\n  Mock.when(this.object, 'hello').throw(new Error('hello world'))\n\n  assert.throw(() => this.object.hello(), 'hello world')\n}\n")),(0,s.kt)("p",null,"For promises, you can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"resolve()")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"reject()")," methods:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"@Test()\npublic async shouldBeAbleToMockAnObjectMethod({ assert }: Context) {\n  // Resolving a promise\n  Mock.when(this.object, 'hello').resolve('hello world')\n  assert.equal(await this.object.hello(), 'hello world')\n\n  // Rejecting a promise\n  Mock.when(this.object, 'hello').reject(new Error('hello world'))\n  await assert.rejects(() => this.object.hello(), 'hello world')\n}\n")),(0,s.kt)("p",null,"If you don't have access to the method you want to mock, you can\nsave the return of ",(0,s.kt)("inlineCode",{parentName:"p"},"Mock::when()")," method and use it to make your\nassertions:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"@Test()\npublic async shouldBeAbleToMockAnObjectMethod({ assert }: Context) {\n  const helloMock = Mock.when(this.object, 'hello').resolve('hello world')\n\n  await this.someMethodThatCallsHelloMethod()\n\n  assert.isTrue(helloMock.called)\n}\n")),(0,s.kt)("h4",{id:"mocking-a-class-method"},"Mocking a class method"),(0,s.kt)("p",null,"There are two ways to mock a class method. The first one is\nmocking the class instance directly:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AppService } from '#app/services/AppService'\nimport { Test, Mock, type Context, AfterEach } from '@athenna/test'\n\nexport default class MockTest {\n  public appService = new AppService()\n\n  @AfterEach()\n  public afterEach() {\n    Mock.restoreAll()\n  }\n\n  @Test()\n  public async shouldBeAbleToMockAClassMethod({ assert }: Context) {\n    Mock.when(this.appService, 'findOne').return({ fake: true })\n\n    assert.equal(this.appService.findOne(), { fake: true })\n  }\n}\n")),(0,s.kt)("p",null,"With this approach, you can only mock the method for the current\ninstance. If another instance of ",(0,s.kt)("inlineCode",{parentName:"p"},"AppService")," is created, that\none will not be mocked."),(0,s.kt)("p",null,"To mock a class method for all instances of a given class, you\nneed to mock the class ",(0,s.kt)("inlineCode",{parentName:"p"},"prototype"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AppService } from '#app/services/AppService'\nimport { Test, Mock, type Context, AfterEach } from '@athenna/test'\n\nexport default class MockTest {\n  @AfterEach()\n  public afterEach() {\n    Mock.restoreAll()\n  }\n\n  @Test()\n  public async shouldBeAbleToMockAClassMethod({ assert }: Context) {\n    Mock.when(AppService.prototype, 'findOne').return({ fake: true })\n\n    assert.equal(new AppService().findOne(), { fake: true })\n  }\n}\n")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Never forget to restore all mocks after each test case. If you don't\nrestore it, the mock will be kept in memory and will affect your other\ntests. Test cases should be isolated from each other, so always try to\ncreate your mocks inside your test cases to avoid problems when your\napplication gets bigger.")),(0,s.kt)("h3",{id:"the-mockspy-method"},"The ",(0,s.kt)("inlineCode",{parentName:"h3"},"Mock::spy()")," method"),(0,s.kt)("p",null,"This method is responsible for spying on a given object method.\nDifferent from ",(0,s.kt)("inlineCode",{parentName:"p"},"Mock::when()"),", this method will not change the\nbehavior of the method, it will only spy it and allow you to verify\nif the given method was called, how many times, and with which params:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AppService } from '#app/services/AppService'\nimport { Test, Mock, type Context, AfterEach } from '@athenna/test'\n\nexport default class MockTest {\n  @AfterEach()\n  public afterEach() {\n    Mock.restoreAll()\n  }\n\n  @Test()\n  public async shouldBeAbleToSpyAClassMethod({ assert }: Context) {\n    Mock.spy(AppService.prototype, 'findOne')\n\n    const appService = new AppService()\n\n    appService.findOne()\n\n    assert.calledOnce(appService.findOne)\n  }\n}\n")),(0,s.kt)("p",null,"Just like ",(0,s.kt)("inlineCode",{parentName:"p"},"Mock::when()"),", if you don't have access to the method\nyou want to spy, you can save the return of ",(0,s.kt)("inlineCode",{parentName:"p"},"Mock::spy()")," method\nand use it to make your assertions:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"@Test()\npublic async shouldBeAbleToSpyAClassMethod({ assert }: Context) {\n  const findOneSpy = Mock.spy(AppService.prototype, 'findOne')\n\n  await this.someMethodThatCallsAppServiceFindOne()\n\n  assert.calledOnce(findOneSpy)\n}\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"For more assertions like ",(0,s.kt)("inlineCode",{parentName:"p"},"assert.calledOnce()")," method, check the\n",(0,s.kt)("a",{parentName:"p",href:"/docs/testing/mocking#assertion-in-mocks"},"assertion in mocks"),"\ndocumentation section.")),(0,s.kt)("p",null,"Since ",(0,s.kt)("inlineCode",{parentName:"p"},"Mock::spy()")," does not change the behavior of the method,\nbut only spies it, you can use it to spy all the methods of a\ngiven object:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"@Test()\npublic async shouldBeAbleToSpyAnEntireClass({ assert }: Context) {\n  Mock.spy(AppService.prototype)\n\n  const appService = new AppService()\n\n  appService.findOne()\n\n  assert.calledOnce(appService.findOne)\n}\n")),(0,s.kt)("h3",{id:"the-mockfake-method"},"The ",(0,s.kt)("inlineCode",{parentName:"h3"},"Mock::fake()")," method"),(0,s.kt)("p",null,"Coming soon..."),(0,s.kt)("h3",{id:"the-mockstub-method"},"The ",(0,s.kt)("inlineCode",{parentName:"h3"},"Mock::stub()")," method"),(0,s.kt)("p",null,"Coming soon..."),(0,s.kt)("h2",{id:"mocking-services"},"Mocking services"),(0,s.kt)("p",null,"Mocking a single service method could be a difficult thing to do\nif your service is not going to be registered as a singleton in your\napplication. The best way to mock a service is by instantiating\na new instance of the service, registering it in the container\nand then mocking the method you want in each test case:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AppService } from '#app/services/AppService'\nimport { BaseHttpTest } from '@athenna/core/testing/BaseHttpTest'\nimport { Test, type Context, BeforeAll, Mock, AfterEach } from '@athenna/test'\n\nexport default class AppControllerTest extends BaseHttpTest {\n  public appService = new AppService()\n\n  @BeforeAll()\n  public async beforeAll() {\n    ioc.instance('App/Services/AppService', this.appService)\n  }\n\n  @AfterEach()\n  public async afterEach() {\n    Mock.restoreAll()\n  }\n\n  @Test()\n  public async shouldBeAbleToMock({ assert, request }: Context) {\n    Mock.when(this.appService, 'findOne').return({ fake: true })\n\n    const response = await request.get('/api/v1')\n\n    response.assertStatusCode(200)\n    response.assertBodyContains({ fake: true })\n    assert.calledOnce(this.appService.findOne)\n  }\n}\n")),(0,s.kt)("h3",{id:"replacing-the-entire-service"},"Replacing the entire service"),(0,s.kt)("p",null,"If you prefer you can also replace the entire service with\na mocked version of your service using the ",(0,s.kt)("inlineCode",{parentName:"p"},"ioc.fake()")," method"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Test, BeforeAll, type Context } from '@athenna/test'\nimport { AppServiceMock } from '#tests/fixtures/AppServiceMock'\nimport { BaseHttpTest } from '@athenna/core/testing/BaseHttpTest'\n\nexport default class AppControllerTest extends BaseHttpTest {\n  @BeforeAll()\n  public beforeAll() {\n    ioc\n      .fake('App/Services/AppService', AppServiceMock)\n      .alias('appService', 'App/Services/AppService')\n  }\n\n  @Test()\n  public async shouldBeAbleToMock({ request }: Context) {\n    const response = await request.get('/api/v1')\n\n    response.assertStatusCode(200)\n    response.assertBodyContains({ fake: true })\n  }\n}\n")),(0,s.kt)("h3",{id:"using-the-injectmock-annotation"},"Using the ",(0,s.kt)("inlineCode",{parentName:"h3"},"@InjectMock()")," annotation"),(0,s.kt)("p",null,"Coming soon..."),(0,s.kt)("h2",{id:"mocking-facades"},"Mocking facades"),(0,s.kt)("p",null,"Coming soon..."),(0,s.kt)("h2",{id:"assertions-in-mocks"},"Assertions in mocks"),(0,s.kt)("p",null,"Coming soon..."),(0,s.kt)("h2",{id:"mocking-commands"},"Mocking commands"),(0,s.kt)("p",null,"Coming soon..."))}d.isMDXComponent=!0}}]);
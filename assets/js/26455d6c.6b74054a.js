"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[5691],{5224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var s=t(5893),o=t(1151);const c={title:"Mocking",sidebar_position:5,description:"Understand how to mock dependencies and functions in Athenna."},a="Mocking",i={id:"testing/mocking",title:"Mocking",description:"Understand how to mock dependencies and functions in Athenna.",source:"@site/docs/testing/mocking.mdx",sourceDirName:"testing",slug:"/testing/mocking",permalink:"/docs/testing/mocking",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/testing/mocking.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Mocking",sidebar_position:5,description:"Understand how to mock dependencies and functions in Athenna."},sidebar:"tutorialSidebar",previous:{title:"CLI Testing",permalink:"/docs/testing/cli-tests"}},r={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Mocking objects",id:"mocking-objects",level:2},{value:"Restoring mocks",id:"restoring-mocks",level:3},{value:"Spying objects",id:"spying-objects",level:3},{value:"Mocking classes",id:"mocking-classes",level:2},{value:"Mocking services",id:"mocking-services",level:3},{value:"Inversion of control",id:"inversion-of-control",level:3},{value:"Mocking facades",id:"mocking-facades",level:2},{value:"Restoring facades",id:"restoring-facades",level:3},{value:"Spying facades",id:"spying-facades",level:3},{value:"Assertions in mocks",id:"assertions-in-mocks",level:2},{value:"<code>assert.called()</code>",id:"assertcalled",level:4},{value:"<code>assert.calledOnce()</code>",id:"assertcalledonce",level:4},{value:"<code>assert.calledTimes()</code>",id:"assertcalledtimes",level:4},{value:"<code>assert.calledWith()</code>",id:"assertcalledwith",level:4},{value:"<code>assert.calledOnceWith()</code>",id:"assertcalledoncewith",level:4},{value:"<code>assert.calledTimesWith()</code>",id:"assertcalledtimeswith",level:4},{value:"<code>assert.calledWithMatch()</code>",id:"assertcalledwithmatch",level:4},{value:"<code>assert.calledBefore()</code>",id:"assertcalledbefore",level:4},{value:"<code>assert.calledAfter()</code>",id:"assertcalledafter",level:4},{value:"Mocking commands",id:"mocking-commands",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"mocking",children:"Mocking"}),"\n",(0,s.jsx)(n.p,{children:"Understand how to mock dependencies and functions in Athenna."}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:'When testing Athenna applications, you may wish to "mock"\ncertain aspects of your application, so they are not actually\nexecuted during a given test. For example, when testing a\ncontroller that calls a service, you may wish to mock the\nservice, so they are not actually executed during the test.\nThis allows you to only test the controller\'s HTTP response\nwithout worrying about the execution of the service since\nthe service can be tested in their own test case.'}),"\n",(0,s.jsxs)(n.p,{children:["This API uses ",(0,s.jsx)(n.a,{href:"https://sinonjs.org/",children:"sinon"})," library under\nthe hood to integrate with the Athenna ecosystem. If you need\nto create more complex mocks, we recommend you to check their\ndocumentation."]}),"\n",(0,s.jsx)(n.h2,{id:"mocking-objects",children:"Mocking objects"}),"\n",(0,s.jsxs)(n.p,{children:["The most convenient way to mock an object and change\nit behavior is by using the ",(0,s.jsx)(n.code,{children:"Mock::when()"})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, Mock, type Context } from '@athenna/test'\n\nexport default class MockTest {\n  public object = {\n    foo: () => undefined\n  }\n\n  @Test()\n  public async mockAnObjectMethod({ assert }: Context) {\n    Mock.when(this.object, 'foo').return('bar') \ud83d\udc48\n\n    assert.equal(this.object.foo(), 'bar')\n  }\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Mock::when()"})," method is a shorthand for ",(0,s.jsx)(n.code,{children:"Mock::stub()"}),".\nIf you want to learn more about stubs and their API, check\n",(0,s.jsx)(n.a,{href:"https://sinonjs.org/releases/latest/stubs/",children:"the stub documentation"}),"\nfrom sinon."]})}),"\n",(0,s.jsx)(n.p,{children:"You can also use this method to throw an error when the\ngiven method is called:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Test()\npublic async mockAnObjectMethod({ assert }: Context) {\n  Mock.when(this.object, 'foo').throw(new Error()) \ud83d\udc48\n\n  assert.throw(() => this.object.foo(), Error)\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For promises, you can use the ",(0,s.jsx)(n.code,{children:"resolve()"})," or ",(0,s.jsx)(n.code,{children:"reject()"})," methods:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Test()\npublic async mockAnObjectMethod({ assert }: Context) {\n  // Resolving a promise\n  Mock.when(this.object, 'foo').resolve('bar')\n  assert.equal(await this.object.bar(), 'bar')\n\n  // Rejecting a promise\n  Mock.when(this.object, 'foo').reject(new Error())\n  await assert.rejects(() => this.object.foo(), Error)\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you don't have access to the method you are mocking, you can\nsave the return of ",(0,s.jsx)(n.code,{children:"Mock::when()"})," method and use it to make your\nassertions:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Test()\npublic async mockAnObjectMethod({ assert }: Context) {\n  const fooMock = Mock.when(this.object, 'foo').resolve('bar')\n\n  await this.someMethodThatCallsFooMethod()\n\n  assert.isTrue(fooMock.called)\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To deal with more complex objects while using\n",(0,s.jsx)(n.code,{children:"Mock::when()"}),", you can use the ",(0,s.jsx)(n.code,{children:"Mock::fake()"}),"\nmethod that creates a fake method that you can\nreplace by the original one:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, Mock, type Context } from '@athenna/test'\n\nexport default class MockTest {\n  public object = {\n    foo: () => ({ bar: () => undefined })\n  }\n\n  @Test()\n  public async fakeAnObjectMethod({ assert }: Context) {\n    const barFake = Mock.fake()\n    Mock.when(this.object, 'foo').return({ bar: barFake }) \ud83d\udc48\n\n    this.object.foo().bar()\n\n    assert.calledOnce(barFake)\n  }\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["For more assertions like ",(0,s.jsx)(n.code,{children:"assert.calledOnce()"})," method, check the\n",(0,s.jsx)(n.a,{href:"/docs/testing/mocking#assertion-in-mocks",children:"assertion in mocks"}),"\ndocumentation section."]})}),"\n",(0,s.jsx)(n.h3,{id:"restoring-mocks",children:"Restoring mocks"}),"\n",(0,s.jsx)(n.p,{children:"When you mock a method, you are changing its behavior, so\nis important to restore the default behavior of the method\nand also reset the mock history after your test finishes."}),"\n",(0,s.jsxs)(n.p,{children:["To do so you can use the ",(0,s.jsx)(n.code,{children:"Mock::restore()"})," method within\n",(0,s.jsx)(n.code,{children:"@AfterEach()"})," hook:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, Mock, AfterEach, type Context } from '@athenna/test'\n\nexport default class MockTest {\n  public object = {\n    foo: () => undefined\n  }\n\n  @AfterEach()\n  public afterEach() {\n    Mock.restore(this.object.foo) \ud83d\udc48\n  }\n\n  @Test()\n  public async mockAnObjectMethod({ assert }: Context) {\n    Mock.when(this.object, 'foo').return('bar')\n\n    assert.equal(this.object.foo(), 'bar')\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Restoring each mock individually can be a tedious task, so\nto be more convenient for you, use the ",(0,s.jsx)(n.code,{children:"Mock::restoreAll()"}),"\nmethod to restore all everything that has been mocked using\n",(0,s.jsx)(n.code,{children:"Mock"})," class to default:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@AfterEach()\npublic afterEach() {\n Mock.restoreAll()\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"spying-objects",children:"Spying objects"}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes you might need to only spy a given method\nwithout changing its behavior. For this scenario, you\ncan use the ",(0,s.jsx)(n.code,{children:"Mock::spy()"})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, Mock, type Context } from '@athenna/test'\n\nexport default class MockTest {\n  public object = {\n    foo: () => 'bar'\n  }\n\n  @Test()\n  public async spyAnObjectMethod({ assert }: Context) {\n    const spy = Mock.spy(this.object, 'foo') \ud83d\udc48\n\n    assert.equal(this.object.foo(), 'bar')\n    assert.isTrue(spy.called) \ud83d\udc48\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also spy an entire object using ",(0,s.jsx)(n.code,{children:"Mock::spy()"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Test()\npublic async spyAnObjectMethod({ assert }: Context) {\n  Mock.spy(this.object) \ud83d\udc48\n\n  assert.equal(this.object.foo(), 'bar')\n  assert.isTrue(this.object.foo.called) \ud83d\udc48\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Just like ",(0,s.jsx)(n.code,{children:"Mock::when()"}),", if you don't have access to the method\nyou want to spy, you can save the return of ",(0,s.jsx)(n.code,{children:"Mock::spy()"})," method\nand use it to make your assertions:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Test()\npublic async spyAnObjectMethod({ assert }: Context) {\n  Mock.spy(this.object) \ud83d\udc48\n\n  await this.someMethodThatCallsObjectFoo()\n\n  assert.calledOnce(this.object.foo) \ud83d\udc48\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"mocking-classes",children:"Mocking classes"}),"\n",(0,s.jsxs)(n.p,{children:["Mocking classes is the same of mocking objects. But you need\nto be aware when you are mocking a class instance or all instances\nof it (",(0,s.jsx)(n.code,{children:"prototype"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"Let's see how to mock a single class instance:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { ApiHelper } from '#app/helpers/ApiHelper'\nimport { Test, Mock, type Context  } from '@athenna/test'\n\nexport default class MockTest {\n  public apiHelper = new ApiHelper()\n\n  @Test()\n  public async mockAClassMethod({ assert }: Context) {\n    Mock.when(this.apiHelper, 'findOne').return({ fake: true })\n\n    assert.deepEqual(this.apiHelper.findOne(), { fake: true })\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As mentioned before, with this approach, you can only mock\nthe method for the current instance. If another instance of\n",(0,s.jsx)(n.code,{children:"ApiHelper"})," is created, that one will not be mocked."]}),"\n",(0,s.jsxs)(n.p,{children:["To mock a class method for all instances of a given class, you\nneed to mock the class ",(0,s.jsx)(n.code,{children:"prototype"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { ApiHelper } from '#app/helpers/ApiHelper'\nimport { Test, Mock, type Context } from '@athenna/test'\n\nexport default class MockTest {\n  @Test()\n  public async mockAClassMethod({ assert }: Context) {\n    Mock.when(ApiHelper.prototype, 'findOne').return({ fake: true })\n\n    assert.deepEqual(new ApiHelper().findOne(), { fake: true })\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"mocking-services",children:"Mocking services"}),"\n",(0,s.jsxs)(n.p,{children:["Since the default registration type of services is ",(0,s.jsx)(n.a,{href:"/docs/architecture-concepts/service-container#binding-transients",children:"transient"}),",\nmocking a service from the ",(0,s.jsx)(n.a,{href:"/docs/architecture-concepts/service-container",children:"service container"}),"\nis the same process of mocking a simple class\nusing the ",(0,s.jsx)(n.code,{children:"prototype"})," property:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { AppService } from '#app/services/AppService'\nimport { Test, Mock, type Context } from '@athenna/test'\n\nexport default class MockTest {\n  @Test()\n  public async mockServiceMethod({ assert }: Context) {\n    Mock.when(AppService.prototype, 'findOne').return({ fake: true }) \ud83d\udc48\n\n    assert.deepEqual(new AppService().findOne(), { fake: true })\n  }\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If your service is registered as a ",(0,s.jsx)(n.a,{href:"/docs/architecture-concepts/service-container#binding-singletons",children:"singleton"}),"\ncheck the ",(0,s.jsx)(n.a,{href:"/docs/architecture-concepts/service-container#inversion-of-control",children:"inversion of control"}),"\ndocumentation section."]})}),"\n",(0,s.jsx)(n.h3,{id:"inversion-of-control",children:"Inversion of control"}),"\n",(0,s.jsx)(n.p,{children:"Sometimes you may want to have more control over the service\ninstance; for this scenario, we recommend you to create a new instance\nof the service within your test class, registering it in the service\ncontainer and then mocking the method you want in each test case:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { AppService } from '#app/services/AppService'\nimport { BaseHttpTest } from '@athenna/core/testing/BaseHttpTest'\nimport { Test, type Context, BeforeAll, Mock } from '@athenna/test'\n\nexport default class AppControllerTest extends BaseHttpTest {\n  public appService = new AppService()\n\n  @BeforeAll()\n  public async beforeAll() {\n    ioc.instance('App/Services/AppService', this.appService) \ud83d\udc48\n  }\n\n  @Test()\n  public async mockServiceMethod({ assert, request }: Context) {\n    Mock.when(this.appService, 'findOne').return({ fake: true }) \ud83d\udc48\n\n    const response = await request.get('/api/v1')\n\n    response.assertStatusCode(200)\n    response.assertBodyContains({ fake: true })\n    assert.calledOnce(this.appService.findOne) \ud83d\udc48\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["Keep in mind that if you change your service alias in the\n",(0,s.jsx)(n.code,{children:"@Service()"})," annotation, you will also need to use the same\nvalue in the ",(0,s.jsx)(n.code,{children:"ioc.instance()"})," method."]}),(0,s.jsxs)(n.p,{children:["For more information, check the ",(0,s.jsx)(n.a,{href:"/docs/architecture-concepts/service-container#the-service-annotation",children:(0,s.jsx)(n.code,{children:"@Service()"})}),"\nannotation documentation section."]})]}),"\n",(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(n.code,{children:"ioc.instance()"})," method, you can also create an entire different\nimplementation of your service that will be used only for testing:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"title=\"Path.fixtures('services/FakeAppService.ts')\"",children:"import { AppServiceInterface } from '#app/interfaces/AppServiceInterface'\n\nexport class FakeAppService implements AppServiceInterface {\n  public findOne() {\n    return { fake: true }\n  }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"And now let's use it in our test class:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, BeforeAll, type Context } from '@athenna/test'\nimport { BaseHttpTest } from '@athenna/core/testing/BaseHttpTest'\nimport { FakeAppService } from '#tests/fixtures/services/FakeAppService'\n\nexport default class AppControllerTest extends BaseHttpTest {\n  @BeforeAll()\n  public async beforeAll() {\n    ioc.instance('App/Services/AppService', new FakeAppService()) \ud83d\udc48\n  }\n\n  @Test()\n  public async mockServiceMethod({ request }: Context) {\n    const response = await request.get('/api/v1')\n\n    response.assertStatusCode(200)\n    response.assertBodyContains({ fake: true }) \ud83d\udc48\n  }\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Taste the power of dependency injection! \ud83d\ude80\ud83e\uddd9\u200d\u2642\ufe0f"})}),"\n",(0,s.jsx)(n.h2,{id:"mocking-facades",children:"Mocking facades"}),"\n",(0,s.jsx)(n.p,{children:"When testing, you may often want to mock a call to\nan Athenna facade that occurs in your code logic.\nFor example, consider the following controller action:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Mail } from '@athenna/mail'\nimport { Controller, type Context } from '@athenna/http'\n\n@Controller()\nexport class UserController {\n  public async store({ response }: Context) {\n    const user = {\n      name: 'Antoine Du Hamel',\n      email: 'duhamelantoine1995@gmail.com'\n    }\n\n    await Mail.from('lenon@athenna.io')\n        .to(user.email)\n        .subject(`Welcome ${user.name} to Athenna!`)\n        .html('<h1>Welcome to Athenna!</h1>')\n        .send()\n\n    return response.status(200).send(user)\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We can mock the call to the ",(0,s.jsx)(n.code,{children:"Mail"})," facade by using the\n",(0,s.jsx)(n.code,{children:"when()"})," method, check the example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Mail } from '@athenna/mail'\nimport { Test, type Context } from '@athenna/test'\nimport { BaseHttpTest } from '@athenna/core/testing/BaseHttpTest'\n\nexport default class AppControllerTest extends BaseHttpTest {\n  @Test()\n  public async mockMailSendMethod({ assert, request }: Context) {\n    Mail.when('send').resolve(undefined) \ud83d\udc48\n\n    const response = await request.post('/api/v1/users')\n\n    assert.calledOnce(Mail.send) \ud83d\udc48\n    response.assertStatusCode(200)\n    response.assertBodyContains([\n        // ...\n    ])\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"restoring-facades",children:"Restoring facades"}),"\n",(0,s.jsxs)(n.p,{children:["To restore a mocked facade to it default behavior, you\ncan use the ",(0,s.jsx)(n.code,{children:"restore()"})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@AfterEach()\npublic afterEach() {\n  Mail.restore()\n}\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["When mocking facades, calling ",(0,s.jsx)(n.code,{children:"Mock::restoreAll()"})," method\nwill restore the facade to its default behavior, but it\nwill leave the facade using the same instance for all calls. IOW,\nthe facade is converted to a ",(0,s.jsx)(n.a,{href:"/docs/architecture-concepts/service-container#binding-singleton",children:"singleton"}),"."]}),(0,s.jsx)(n.p,{children:"This could lead to unexpected behavior in your tests, so it is recommended\nto restore each facade individually:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@AfterEach()\npublic afterEach() {\n  Mail.restore()\n  Mock.restoreAll()\n}\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"spying-facades",children:"Spying facades"}),"\n",(0,s.jsxs)(n.p,{children:["If you would like to spy on a facade, you may call\nthe ",(0,s.jsx)(n.code,{children:"spy()"})," method on the corresponding facade:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Mail } from '@athenna/mail'\nimport { Test, type Context } from '@athenna/test'\nimport { BaseHttpTest } from '@athenna/core/testing/BaseHttpTest'\n\nexport default class AppControllerTest extends BaseHttpTest {\n  @Test()\n  public async spyMailSendMethod({ assert, request }: Context) {\n    Mail.spy('send') \ud83d\udc48\n\n    const response = await request.post('/api/v1/users')\n\n    assert.calledOnce(Mail.send) \ud83d\udc48\n    response.assertStatusCode(200)\n    response.assertBodyContains([\n        // ...\n    ])\n  }\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Remember that the code above will effectively try to send\nthe email since spies does not change the behavior of the\nmethod."})}),"\n",(0,s.jsx)(n.h2,{id:"assertions-in-mocks",children:"Assertions in mocks"}),"\n",(0,s.jsxs)(n.p,{children:["Athenna's ",(0,s.jsx)(n.code,{children:"assert"})," helper provides a variety of extended\nassertion methods that you may utilize when testing your\nmocks:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/mocking/assertions-in-mocks#assertcalled",children:(0,s.jsx)(n.code,{children:"assert.called()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/mocking/assertions-in-mocks#assertcalledonce",children:(0,s.jsx)(n.code,{children:"assert.calledOnce()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/mocking/assertions-in-mocks#assertcalledtimes",children:(0,s.jsx)(n.code,{children:"assert.calledTimes()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/mocking/assertions-in-mocks#assertcalledwith",children:(0,s.jsx)(n.code,{children:"assert.calledWith()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/mocking/assertions-in-mocks#assertcalledoncewith",children:(0,s.jsx)(n.code,{children:"assert.calledOnceWith()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/mocking/assertions-in-mocks#assertcalledtimeswith",children:(0,s.jsx)(n.code,{children:"assert.calledTimesWith()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/mocking/assertions-in-mocks#assertcalledwithmatch",children:(0,s.jsx)(n.code,{children:"assert.calledWithMatch()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/mocking/assertions-in-mocks#assertcalledbefore",children:(0,s.jsx)(n.code,{children:"assert.calledBefore()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/mocking/assertions-in-mocks#assertcalledafter",children:(0,s.jsx)(n.code,{children:"assert.calledAfter()"})})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"assertcalled",children:(0,s.jsx)(n.code,{children:"assert.called()"})}),"\n",(0,s.jsx)(n.p,{children:"Assert the mock was called at least once:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"assert.called(this.object.foo)\nassert.notCalled(this.object.foo)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"assertcalledonce",children:(0,s.jsx)(n.code,{children:"assert.calledOnce()"})}),"\n",(0,s.jsx)(n.p,{children:"Assert the mock was called only once:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"assert.calledOnce(this.object.foo)\nassert.notCalledOnce(this.object.foo)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"assertcalledtimes",children:(0,s.jsx)(n.code,{children:"assert.calledTimes()"})}),"\n",(0,s.jsx)(n.p,{children:"Assert the mock was called the given number of times:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"assert.calledTimes(this.object.foo, 1)\nassert.notCalledTimes(this.object.foo, 1)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"assertcalledwith",children:(0,s.jsx)(n.code,{children:"assert.calledWith()"})}),"\n",(0,s.jsx)(n.p,{children:"Assert the mock was called with the given arguments:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"assert.calledWith(this.object.foo, 'bar')\nassert.notCalledWith(this.object.foo, 'bar')\n"})}),"\n",(0,s.jsx)(n.h4,{id:"assertcalledoncewith",children:(0,s.jsx)(n.code,{children:"assert.calledOnceWith()"})}),"\n",(0,s.jsx)(n.p,{children:"Assert the mock was called only once with the given arguments:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"assert.calledOnceWith(this.object.foo, 'bar')\nassert.notCalledOnceWith(this.object.foo, 'bar')\n"})}),"\n",(0,s.jsx)(n.h4,{id:"assertcalledtimeswith",children:(0,s.jsx)(n.code,{children:"assert.calledTimesWith()"})}),"\n",(0,s.jsx)(n.p,{children:"Assert the mock was called the given times with the given arguments:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"assert.calledTimesWith(this.object.foo, 1, 'bar')\nassert.notCalledTimesWith(this.object.foo, 1, 'bar')\n"})}),"\n",(0,s.jsx)(n.h4,{id:"assertcalledwithmatch",children:(0,s.jsx)(n.code,{children:"assert.calledWithMatch()"})}),"\n",(0,s.jsx)(n.p,{children:"Assert the mock was called with the given arguments\nmatching some of the given arguments."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"assert.calledWithMatch(this.object.foo, 'bar')\nassert.notCalledWithMatch(this.object.foo, 'bar')\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"This is an alias for the following:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"assert.calledWith(this.object.foo, Mock.match('bar'))\n"})})]}),"\n",(0,s.jsx)(n.h4,{id:"assertcalledbefore",children:(0,s.jsx)(n.code,{children:"assert.calledBefore()"})}),"\n",(0,s.jsx)(n.p,{children:"Assert the mock was called before another mock:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"assert.calledBefore(this.object.foo, this.object.bar)\nassert.notCalledBefore(this.object.foo, this.object.bar)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"assertcalledafter",children:(0,s.jsx)(n.code,{children:"assert.calledAfter()"})}),"\n",(0,s.jsx)(n.p,{children:"Assert the mock was called after another mock:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"assert.calledAfter(this.object.foo, this.object.bar)\nassert.notCalledAfter(this.object.foo, this.object.bar)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"mocking-commands",children:"Mocking commands"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Before checking how to mock commands, we recommend you\nto check the ",(0,s.jsx)(n.a,{href:"/docs/testing/cli-tests#changing-artisan-file-path-per-command",children:"changing Artisan file path per command\ndocumentation section"}),"\nto understand how you can create an isolated test case\nfor the command you wish to test."]})}),"\n",(0,s.jsx)(n.p,{children:"When testing commands, you may often want to mock some\nlogic that happens inside the child process that Athenna\ncreates to run your command."}),"\n",(0,s.jsxs)(n.p,{children:["Let's suppose we have created a command called ",(0,s.jsx)(n.code,{children:"greet"}),"\nwhich prompts the user his name to say hy:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"title=\"Path.commands('Greet.ts')\"",children:"import { BaseCommand } from '@athenna/artisan'\n\nexport class Greet extends BaseCommand {\n  public static signature(): string {\n      return 'greet'\n  }\n\n  public async handle(): Promise<void> {\n    const name = await this.prompt.input('What is your name?')\n\n    this.logger.info(`Hello ${name}!`)\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you try to run ",(0,s.jsx)(n.code,{children:"greet"})," command in your tests it will\nexceed the timeout since the command will be waiting for\nthe user input name."]}),"\n",(0,s.jsxs)(n.p,{children:["To solve this kind of situation and others, you can create\nyour own Artisan console that will first mock the ",(0,s.jsx)(n.code,{children:"this.prompt.input()"}),"\nmethod and then boot Artisan:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"title=\"Path.fixtures('consoles/mock-greet-input.ts')\"",children:"import { Mock } from '@athenna/test'\nimport { Ignite } from '@athenna/core'\nimport { Prompt } from '@athenna/artisan'\n\nconst ignite = await new Ignite().load(import.meta.url, { bootLogs: false })\n\nMock.when(Prompt.prototype, 'input').resolve('Valmir Barbosa')\n\nawait ignite.console(process.argv, { displayName: 'Artisan' })\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now, we can use this new Artisan console file to run the command\nin our test cases:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Path } from '@athenna/common'\nimport { Test, type Context } from '@athenna/test'\n\nexport default class GreetTest {\n  @Test()\n  public async testGreet({ command }: Context) {\n    const output = await command.run('greet', {\n      path: Path.fixtures('consoles/mock-greet-input.ts') \ud83d\udc48\n    })\n\n    output.assertLogged('Hello Valmir Barbosa!') \u2705\n  }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var s=t(7294);const o={},c=s.createContext(o);function a(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);
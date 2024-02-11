"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[4085],{3418:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(5893),a=t(1151);const r={title:"REST API Testing",sidebar_position:3,description:"See how to create tests for REST APIs applications in Athenna."},i="REST API Testing",o={id:"testing/rest-api-testing",title:"REST API Testing",description:"See how to create tests for REST APIs applications in Athenna.",source:"@site/docs/testing/rest-api-testing.mdx",sourceDirName:"testing",slug:"/testing/rest-api-testing",permalink:"/docs/testing/rest-api-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/testing/rest-api-testing.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"REST API Testing",sidebar_position:3,description:"See how to create tests for REST APIs applications in Athenna."},sidebar:"tutorialSidebar",previous:{title:"Annotations",permalink:"/docs/testing/annotations"},next:{title:"CLI Testing",permalink:"/docs/testing/cli-tests"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Registering <code>request</code> plugin",id:"registering-request-plugin",level:2},{value:"Making Requests",id:"making-requests",level:2},{value:"Customizing request",id:"customizing-request",level:3},{value:"Debugging responses",id:"debugging-responses",level:3},{value:"Testing file uploads",id:"testing-file-uploads",level:2},{value:"Response assertions",id:"response-assertions",level:2},{value:"<code>assertStatusCode()</code>",id:"assertstatuscode",level:4},{value:"<code>assertBodyContains()</code>",id:"assertbodycontains",level:4},{value:"<code>assertBodyContainsKey()</code>",id:"assertbodycontainskey",level:4},{value:"<code>assertBodyContainsAllKeys()</code>",id:"assertbodycontainsallkeys",level:4},{value:"<code>assertBodyDeepEqual()</code>",id:"assertbodydeepequal",level:4},{value:"<code>assertBodyIsArray()</code>",id:"assertbodyisarray",level:4},{value:"<code>assertBodyIsObject()</code>",id:"assertbodyisobject",level:4},{value:"<code>assertHeaderContains()</code>",id:"assertheadercontains",level:4},{value:"<code>assertHeaderContainsKey()</code>",id:"assertheadercontainskey",level:4},{value:"<code>assertHeaderContainsAllKeys()</code>",id:"assertheadercontainsallkeys",level:4},{value:"<code>assertHeaderDeepEqual()</code>",id:"assertheaderdeepequal",level:4},{value:"The <code>BaseHttpTest</code> class",id:"the-basehttptest-class",level:2},{value:"Accessing <code>Ignite</code> and <code>Http</code> instance",id:"accessing-ignite-and-http-instance",level:3}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"rest-api-testing",children:"REST API Testing"}),"\n",(0,n.jsx)(s.p,{children:"See how to create tests for REST APIs applications in Athenna."}),"\n",(0,n.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(s.p,{children:"Athenna provides a very fluent API for making HTTP\nrequests to your application and examining the responses.\nFor example, take a look at the e2e test defined below:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"import { Test, type Context } from '@athenna/test'\nimport { BaseHttpTest } from '@athenna/core/testing/BaseHttpTest'\n\nexport default class ExampleTest extends BaseHttpTest {\n  @Test()\n  public async 'test successful response'({ request }: Context) {\n    const response = await request.get('/')\n\n    response.assertStatusCode(200)\n  }\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"request.get()"})," method makes a ",(0,n.jsx)(s.code,{children:"GET"})," request into the application,\nwhile the ",(0,n.jsx)(s.code,{children:"assertStatusCode()"})," method asserts that the returned\nresponse should have the given HTTP status code. In addition\nto this simple assertion, Athenna also contains a variety of\nassertions for inspecting the response headers, content,\nJSON structure, and more."]}),"\n",(0,n.jsxs)(s.p,{children:["You might have noticed that the ",(0,n.jsx)(s.code,{children:"ExampleTest"})," is extending the\n",(0,n.jsx)(s.code,{children:"BaseHttpTest"})," class. We gonna see later on this documentation\nwhat is the purpose of this class, and how to configure it for your\nneeds."]}),"\n",(0,n.jsxs)(s.h2,{id:"registering-request-plugin",children:["Registering ",(0,n.jsx)(s.code,{children:"request"})," plugin"]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"request"})," property in your test context will only be\navailable if you register the request plugin within the\n",(0,n.jsx)(s.code,{children:"Runner"})," class. By default, your Athenna application already\ncomes with the request plugin registered. But we are going\nto cover how to register it manually if needed."]}),"\n",(0,n.jsxs)(s.p,{children:["Just call the ",(0,n.jsx)(s.code,{children:"Runner.addPlugin()"})," static method to setup\nthe request plugin imported from ",(0,n.jsx)(s.code,{children:"@athenna/http/testing/plugins"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",metastring:"title=\"Path.bootstrap('test.ts')\"",children:"import { Runner } from '@athenna/test'\nimport { request } from '@athenna/http/testing/plugins'\nimport { command } from '@athenna/artisan/testing/plugins'\n\nawait Runner.setTsEnv()\n  .setAppEnv('test')\n  .addAssertPlugin()\n  .addPlugin(request()) \ud83d\udc48\n  .addPlugin(command())\n  .addPath('tests/e2e/**/*.ts')\n  .addPath('tests/unit/**/*.ts')\n  .setCliArgs(process.argv.slice(2))\n  .setGlobalTimeout(5000)\n  .run()\n"})}),"\n",(0,n.jsx)(s.h2,{id:"making-requests",children:"Making Requests"}),"\n",(0,n.jsxs)(s.p,{children:["To make a request to your application, you may invoke the\n",(0,n.jsx)(s.code,{children:"request.get()"}),", ",(0,n.jsx)(s.code,{children:"request.post()"}),", ",(0,n.jsx)(s.code,{children:"request.put()"}),",\n",(0,n.jsx)(s.code,{children:"request.patch()"}),", or ",(0,n.jsx)(s.code,{children:"request.delete()"}),' methods\nwithin your test. These methods do not actually issue a "real"\nHTTP request to your application. Instead, the entire network\nrequest is simulated internally.']}),"\n",(0,n.jsxs)(s.p,{children:["Instead of returning a response instance, test request methods\nreturn an instance of ",(0,n.jsx)(s.code,{children:"TestResponse"}),", which provides a ",(0,n.jsx)(s.a,{href:"/docs/testing/rest-api-testing#response-assertions",children:"variety\nof helpful assertions"}),"\nthat allow you to inspect your application's\nresponses:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"import { Test, type Context } from '@athenna/test'\nimport { BaseHttpTest } from '@athenna/core/testing/BaseHttpTest'\n\nexport default class ExampleTest extends BaseHttpTest {\n  @Test()\n  public async testBasicRequest({ request }: Context) {\n    const response = await request.get('/')\n\n    response.assertStatusCode(200)\n  }\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"customizing-request",children:"Customizing request"}),"\n",(0,n.jsx)(s.p,{children:"All the request methods accept a second argument where you can\nsetup the request options:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"import { type InjectOptions } from '@athenna/http'\nimport { Test, type Context } from '@athenna/test'\nimport { BaseHttpTest } from '@athenna/core/testing/BaseHttpTest'\n\nexport default class ExampleTest extends BaseHttpTest {\n  @Test()\n  public async testBasicRequest({ request }: Context) {\n    const options: InjectOptions = {\n      headers: {\n        'X-Header': 'value'\n      },\n      body: {\n        foo: 'bar'\n      }\n    }\n\n    const response = await request.get('/', options)\n\n    response.assertStatusCode(200)\n  }\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"debugging-responses",children:"Debugging responses"}),"\n",(0,n.jsxs)(s.p,{children:["After making a test request to your application, the ",(0,n.jsx)(s.code,{children:"response"}),"\nreturned will contain the ",(0,n.jsx)(s.code,{children:"response"})," property inside with all the\nresponse data:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"import { Test, type Context } from '@athenna/test'\nimport { BaseHttpTest } from '@athenna/core/testing/BaseHttpTest'\n\nexport default class ExampleTest extends BaseHttpTest {\n  @Test()\n  public async testBasicRequest({ request }: Context) {\n    const response = await request.get('/')\n\n    console.log(response.response.status)\n\n    response.assertStatusCode(200)\n  }\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"testing-file-uploads",children:"Testing file uploads"}),"\n",(0,n.jsxs)(s.p,{children:["Coming soon with ",(0,n.jsx)(s.code,{children:"@athenna/storage"})," package!"]}),"\n",(0,n.jsx)(s.h2,{id:"response-assertions",children:"Response assertions"}),"\n",(0,n.jsxs)(s.p,{children:["Athenna's ",(0,n.jsx)(s.code,{children:"TestResponse"})," class provides a variety of custom\nassertion methods that you may utilize when testing your\napplication. These assertions may be accessed on the\nresponse that is returned by the ",(0,n.jsx)(s.code,{children:"request.get()"}),", ",(0,n.jsx)(s.code,{children:"request.post()"}),",\n",(0,n.jsx)(s.code,{children:"request.put()"}),", ",(0,n.jsx)(s.code,{children:"request.patch()"}),", or ",(0,n.jsx)(s.code,{children:"request.delete()"})," test methods:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/testing/rest-api-testing#assertstatuscode",children:(0,n.jsx)(s.code,{children:"assertStatusCode()"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/testing/rest-api-testing#assertbodycontains",children:(0,n.jsx)(s.code,{children:"assertBodyContains()"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/testing/rest-api-testing#assertbodycontainskey",children:(0,n.jsx)(s.code,{children:"assertBodyContainsKey()"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/testing/rest-api-testing#assertbodycontainsallkeys",children:(0,n.jsx)(s.code,{children:"assertBodyContainsAllKeys()"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/testing/rest-api-testing#assertbodydeepequal",children:(0,n.jsx)(s.code,{children:"assertBodyDeepEqual()"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/testing/rest-api-testing#assertbodyisarray",children:(0,n.jsx)(s.code,{children:"assertBodyIsArray()"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/testing/rest-api-testing#assertbodyisobject",children:(0,n.jsx)(s.code,{children:"assertBodyIsObject()"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/testing/rest-api-testing#assertheadercontains",children:(0,n.jsx)(s.code,{children:"assertHeaderContains()"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/testing/rest-api-testing#assertheadercontainskey",children:(0,n.jsx)(s.code,{children:"assertHeaderContainsKey()"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/testing/rest-api-testing#assertheadercontainsallkeys",children:(0,n.jsx)(s.code,{children:"assertHeaderContainsAllKeys()"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/testing/rest-api-testing#assertheaderdeepequal",children:(0,n.jsx)(s.code,{children:"assertHeaderDeepEqual()"})})}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"assertstatuscode",children:(0,n.jsx)(s.code,{children:"assertStatusCode()"})}),"\n",(0,n.jsx)(s.p,{children:"Assert that the response has a given HTTP status code:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"const statusCode = 200\n\nresponse.assertStatusCode(statusCode)\nresponse.assertIsNotStatusCode(statusCode)\n"})}),"\n",(0,n.jsx)(s.h4,{id:"assertbodycontains",children:(0,n.jsx)(s.code,{children:"assertBodyContains()"})}),"\n",(0,n.jsx)(s.p,{children:"Assert that the response body contains some of\nthe given values:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"const partialBody = { hello: 'world' } \n\nresponse.assertBodyContains(partialBody)\nresponse.assertBodyNotContains(partialBody)\n"})}),"\n",(0,n.jsx)(s.h4,{id:"assertbodycontainskey",children:(0,n.jsx)(s.code,{children:"assertBodyContainsKey()"})}),"\n",(0,n.jsx)(s.p,{children:"Assert that the response body contains a key with\nthe given name:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"const key = 'hello'\n\nresponse.assertBodyContainsKey(key)\nresponse.assertBodyNotContainsKey(key)\n"})}),"\n",(0,n.jsx)(s.h4,{id:"assertbodycontainsallkeys",children:(0,n.jsx)(s.code,{children:"assertBodyContainsAllKeys()"})}),"\n",(0,n.jsx)(s.p,{children:"Assert that the response body contains all the keys\nwith given names:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"const keys = ['hello']\n\nresponse.assertBodyContainsAllKeys(keys)\nresponse.assertBodyNotContainsAllKeys(keys)\n"})}),"\n",(0,n.jsx)(s.h4,{id:"assertbodydeepequal",children:(0,n.jsx)(s.code,{children:"assertBodyDeepEqual()"})}),"\n",(0,n.jsx)(s.p,{children:"Assert that the response body is deep equal and\nexactly like the given value:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"const fullBody = [{ hello: 'world' }]\n\nresponse.assertBodyDeepEqual(fullBody)\nresponse.assertBodyNotDeepEqual(fullBody)\n"})}),"\n",(0,n.jsx)(s.h4,{id:"assertbodyisarray",children:(0,n.jsx)(s.code,{children:"assertBodyIsArray()"})}),"\n",(0,n.jsx)(s.p,{children:"Assert that the response body is an array:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"response.assertBodyIsArray()\nresponse.assertBodyIsNotArray()\n"})}),"\n",(0,n.jsx)(s.h4,{id:"assertbodyisobject",children:(0,n.jsx)(s.code,{children:"assertBodyIsObject()"})}),"\n",(0,n.jsx)(s.p,{children:"Assert that the response body is an object:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"response.assertBodyIsObject()\nresponse.assertBodyIsNotObject()\n"})}),"\n",(0,n.jsx)(s.h4,{id:"assertheadercontains",children:(0,n.jsx)(s.code,{children:"assertHeaderContains()"})}),"\n",(0,n.jsx)(s.p,{children:"Assert that the response header contains some of\nthe given values:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"const partialHeader = { hello: 'world' } \n\nresponse.assertHeaderContains(partialHeader)\nresponse.assertHeaderNotContains(partialHeader)\n"})}),"\n",(0,n.jsx)(s.h4,{id:"assertheadercontainskey",children:(0,n.jsx)(s.code,{children:"assertHeaderContainsKey()"})}),"\n",(0,n.jsx)(s.p,{children:"Assert that the response header contains a key with\nthe given name:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"const key = 'hello'\n\nresponse.assertHeaderContainsKey(key)\nresponse.assertHeaderNotContainsKey(key)\n"})}),"\n",(0,n.jsx)(s.h4,{id:"assertheadercontainsallkeys",children:(0,n.jsx)(s.code,{children:"assertHeaderContainsAllKeys()"})}),"\n",(0,n.jsx)(s.p,{children:"Assert that the response header contains all the keys\nwith given names:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"const keys = ['hello']\n\nresponse.assertHeaderContainsAllKeys(keys)\nresponse.assertHeaderNotContainsAllKeys(keys)\n"})}),"\n",(0,n.jsx)(s.h4,{id:"assertheaderdeepequal",children:(0,n.jsx)(s.code,{children:"assertHeaderDeepEqual()"})}),"\n",(0,n.jsx)(s.p,{children:"Assert that the response header is deep equal and\nexactly like the given value:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"const fullHeader = [{ hello: 'world' }]\n\nresponse.assertHeaderDeepEqual(fullHeader)\nresponse.assertHeaderNotDeepEqual(fullHeader)\n"})}),"\n",(0,n.jsxs)(s.h2,{id:"the-basehttptest-class",children:["The ",(0,n.jsx)(s.code,{children:"BaseHttpTest"})," class"]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"BaseHttpTest"})," class is responsible to bootstrap your Athenna\napplication ",(0,n.jsx)(s.strong,{children:"before running all"})," tests and also to kill the\napplication ",(0,n.jsx)(s.strong,{children:"after running all"})," tests, meaning that is not possible\nto use the ",(0,n.jsx)(s.code,{children:"request"})," property without extending this class or at least\nsetting up your own Athenna application using ",(0,n.jsx)(s.code,{children:"Ignite"})," class."]}),"\n",(0,n.jsxs)(s.p,{children:["If for some reason you need to change the options set when\ncalling the ",(0,n.jsx)(s.code,{children:"Ignite.load()"})," or ",(0,n.jsx)(s.code,{children:"Ignite.httpServer()"})," methods,\nyou can set the ",(0,n.jsx)(s.code,{children:"igniteOptions"})," and ",(0,n.jsx)(s.code,{children:"httpOptions"})," properties\nin your test class:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"import { Path } from '@athenna/common'\nimport { Test, type Context } from '@athenna/test'\nimport { BaseHttpTest } from '@athenna/core/testing/BaseHttpTest'\nimport { type HttpOptions, type IgniteOptions } from '@athenna/core'\n\nexport default class ExampleTest extends BaseHttpTest {\n  public httpOptions: HttpOptions = {\n    host: '0.0.0.0',\n    port: 9999,\n    trace: true,\n    routePath: Path.fixtures('routes/routes.ts'),\n    kernelPath: Path.fixtures('kernels/Kernel.ts'),\n    exceptionHandlerPath: Path.fixtures('handlers/Handler.ts')\n  }\n\n  public igniteOptions: IgniteOptions = {\n    bootLogs: true,\n    shutdownLogs: true,\n    envPath: Path.fixtures('envs/.env'),\n    athennaRcPath: Path.fixtures('rcs/.athennarc.json'),\n    environments: ['http', 'test']\n  }\n\n  @Test()\n  public async 'test successful response'({ request }: Context) {\n    const response = await request.get('/')\n\n    response.assertStatusCode(200)\n  }\n}\n"})}),"\n",(0,n.jsxs)(s.h3,{id:"accessing-ignite-and-http-instance",children:["Accessing ",(0,n.jsx)(s.code,{children:"Ignite"})," and ",(0,n.jsx)(s.code,{children:"Http"})," instance"]}),"\n",(0,n.jsxs)(s.p,{children:["You are able to access the ",(0,n.jsx)(s.code,{children:"Ignite"})," and ",(0,n.jsx)(s.code,{children:"Http"})," instances by\nusing the ",(0,n.jsx)(s.code,{children:"ignite"})," and ",(0,n.jsx)(s.code,{children:"httpServer"})," properties:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"import { Test, type Context } from '@athenna/test'\nimport { BaseHttpTest } from '@athenna/core/testing/BaseHttpTest'\n\nexport default class ExampleTest extends BaseHttpTest { \n  @Test()\n  public async 'test successful response'({ request }: Context) {\n    this.ignite \ud83d\udc48\n    this.httpServer \ud83d\udc48\n  }\n}\n"})})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>i});var n=t(7294);const a={},r=n.createContext(a);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);
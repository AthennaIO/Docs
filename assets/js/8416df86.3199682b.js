"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[110],{5537:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var s=t(5893),a=t(1151);const i={title:"Annotations",sidebar_position:2,description:"Check all available testing annotations and it options."},o="Annotations",l={id:"testing/annotations",title:"Annotations",description:"Check all available testing annotations and it options.",source:"@site/docs/testing/annotations.mdx",sourceDirName:"testing",slug:"/testing/annotations",permalink:"/docs/testing/annotations",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/testing/annotations.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Annotations",sidebar_position:2,description:"Check all available testing annotations and it options."},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/testing/getting-started"},next:{title:"REST API Testing",permalink:"/docs/testing/rest-api-testing"}},c={},r=[{value:"<code>@Test()</code>",id:"test",level:2},{value:"<code>@BeforeAll()</code>",id:"beforeall",level:2},{value:"<code>@BeforeEach()</code>",id:"beforeeach",level:2},{value:"<code>@AfterAll()</code>",id:"afterall",level:2},{value:"<code>@AfterEach()</code>",id:"aftereach",level:2},{value:"<code>@Retry()</code>",id:"retry",level:2},{value:"<code>@Skip()</code>",id:"skip",level:2},{value:"<code>@Pin()</code>",id:"pin",level:2},{value:"<code>@Fails()</code>",id:"fails",level:2},{value:"<code>@TestCase()</code>",id:"testcase",level:2},{value:"<code>@Timeout()</code>",id:"timeout",level:2},{value:"<code>@DisableTimeout()</code>",id:"disabletimeout",level:2},{value:"<code>@Tags()</code>",id:"tags",level:2},{value:"<code>@Cleanup()</code>",id:"cleanup",level:2},{value:"<code>@Setup()</code>",id:"setup",level:2},{value:"<code>@Teardown()</code>",id:"teardown",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"annotations",children:"Annotations"}),"\n",(0,s.jsx)(n.p,{children:"Check all available testing annotations and it options."}),"\n",(0,s.jsx)(n.h2,{id:"test",children:(0,s.jsx)(n.code,{children:"@Test()"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@Test()"})," annotation is used to define a method\nas a test:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Test()\npublic async testMethod({ assert }: Context) {\n  assert.equal(1 + 1, 2)\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also define the test name by passing a string\nto the ",(0,s.jsx)(n.code,{children:"@Test()"})," annotation:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Test('test method!')\npublic async testMethod({ assert }: Context) {\n  assert.equal(1 + 1, 2)\n}\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"This could also be done in class defining the\nmethod name as string:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Test()\npublic async 'test method!' ({ assert }: Context) {\n  assert.equal(1 + 1, 2)\n}\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"beforeall",children:(0,s.jsx)(n.code,{children:"@BeforeAll()"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@BeforeAll()"})," annotation is used to define that a\nmethod should be executed ",(0,s.jsx)(n.strong,{children:"before all"})," tests of that class\n",(0,s.jsx)(n.strong,{children:"starts running"}),". You can define as many as you want in the\nsame class:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@BeforeAll()\npublic async doSomeOp() {\n  //\n}\n\n@BeforeAll()\npublic async doOtherOp() {\n  //\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"beforeeach",children:(0,s.jsx)(n.code,{children:"@BeforeEach()"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@BeforeEach()"})," annotation is used to define that a\nmethod should be executed ",(0,s.jsx)(n.strong,{children:"before each"})," tests of that class\n",(0,s.jsx)(n.strong,{children:"starts running"}),". You can define as many as you want in the\nsame class:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@BeforeEach()\npublic async doSomeOp() {\n  //\n}\n\n@BeforeEach()\npublic async doOtherOp() {\n  //\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"afterall",children:(0,s.jsx)(n.code,{children:"@AfterAll()"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@AfterAll()"})," annotation is used to define that a\nmethod should be executed ",(0,s.jsx)(n.strong,{children:"after all"})," tests of that class\n",(0,s.jsx)(n.strong,{children:"ends running"}),". You can define as many as you want in the\nsame class:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@AfterAll()\npublic async doSomeOp() {\n  //\n}\n\n@AfterAll()\npublic async doOtherOp() {\n  //\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"aftereach",children:(0,s.jsx)(n.code,{children:"@AfterEach()"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@AfterEach()"})," annotation is used to define that a\nmethod should be executed ",(0,s.jsx)(n.strong,{children:"after each"})," tests of that class\n",(0,s.jsx)(n.strong,{children:"ends running"}),". You can define as many as you want in the\nsame class:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@AfterEach()\npublic async doSomeOp() {\n  //\n}\n\n@AfterEach()\npublic async doOtherOp() {\n  //\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"retry",children:(0,s.jsx)(n.code,{children:"@Retry()"})}),"\n",(0,s.jsx)(n.p,{children:"Define that a test should be retried if it fails:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, Retry, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  @Retry(2) \ud83d\udc48 // Retry the test 2 times\n  public async test({ assert }: Context) {\n    assert.equal(1 + 1, 2)\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["You can get the number of retries and in which retry\nattempt you are by the ",(0,s.jsx)(n.code,{children:"test.options.retries"})," and\n",(0,s.jsx)(n.code,{children:"test.options.retryAttempt"})," properties"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Log } from '@athenna/logger'\nimport { Test, TestCase, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  @Retry(2)\n  public async test({ test, assert }: Context) {\n    Log.info('Retrying attempt:', test.options.retryAttempt)\n\n    assert.equal(1 + 1, 2)\n    assert.equal(test.options.retries, 2)\n  }\n}\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"skip",children:(0,s.jsx)(n.code,{children:"@Skip()"})}),"\n",(0,s.jsxs)(n.p,{children:["Skip the test when executing ",(0,s.jsx)(n.code,{children:"test"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, Skip, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  @Skip()\n  public async willNotRun({ assert }: Context) {\n    assert.equal(1 + 1, 2)\n  }\n\n  @Test()\n  @Skip('Skipped because of some reason')\n  public async willNotRunAlso({ assert }: Context) {\n    assert.equal(1 + 1, 2)\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pin",children:(0,s.jsx)(n.code,{children:"@Pin()"})}),"\n",(0,s.jsxs)(n.p,{children:["When running ",(0,s.jsx)(n.code,{children:"test"})," command, only pinned tests will run\nif at least one test is pinned:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, Pin, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  @Pin()\n  public async willRun({ assert }: Context) {\n    assert.equal(1 + 1, 2)\n  }\n\n  @Test()\n  @Pin()\n  public async willRunAlso({ assert }: Context) {\n    assert.equal(1 + 1, 2)\n  }\n\n  @Test()\n  public async willNotRun({ assert }: Context) {\n    assert.equal(1 + 1, 2)\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["If you want to run specific tests you can also use the\n",(0,s.jsx)(n.code,{children:"--tests"})," option of ",(0,s.jsx)(n.code,{children:"test"})," command:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"node artisan test --tests willRun --tests willRunAlso\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"fails",children:(0,s.jsx)(n.code,{children:"@Fails()"})}),"\n",(0,s.jsx)(n.p,{children:"Define that a test is expected to fail:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, Fails, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  @Fails()\n  public async test({ assert }: Context) {\n    assert.equal(1 + 1, 1) \ud83d\udc48 // Fail\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"testcase",children:(0,s.jsx)(n.code,{children:"@TestCase()"})}),"\n",(0,s.jsx)(n.p,{children:"Define the dataset for the test case. Your test will be\ninvoked for each test case defined:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, TestCase, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  @TestCase('lenon@athenna.io')\n  @TestCase('txsoura@athenna.io')\n  public async test({ assert }: Context, email: string) {\n    assert.isTrue(email.includes('@athenna.io'))\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["You can get all the test cases defined by the ",(0,s.jsx)(n.code,{children:"test.dataset"}),"\nproperty:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, TestCase, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  @TestCase('lenon@athenna.io')\n  @TestCase('txsoura@athenna.io')\n  public async test({ test, assert }: Context, email: string) {\n    assert.isTrue(email.includes('@athenna.io'))\n    assert.deepEqual(test.dataset, [\n      'txsoura@athenna.io', \n      'lenon@athenna.io'\n    ])\n  }\n}\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"timeout",children:(0,s.jsx)(n.code,{children:"@Timeout()"})}),"\n",(0,s.jsx)(n.p,{children:"Set a timeout in MS for that specific test only:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, Timeout, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  @Timeout(10000) \ud83d\udc48 // 10 seconds\n  public async test({ assert }: Context) {\n    assert.equal(1 + 1, 2)\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"disabletimeout",children:(0,s.jsx)(n.code,{children:"@DisableTimeout()"})}),"\n",(0,s.jsx)(n.p,{children:"Disable the timeout for a specific test:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, DisableTimeout, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  @DisableTimeout(10000) \ud83d\udc48 // 10 seconds\n  public async test({ assert }: Context) {\n    assert.equal(1 + 1, 2)\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"tags",children:(0,s.jsx)(n.code,{children:"@Tags()"})}),"\n",(0,s.jsxs)(n.p,{children:["Add tags to a test. Tags can be used to filter tests\nwhen running ",(0,s.jsx)(n.code,{children:"test"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, Tags, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  @Tags(['run'])\n  public async willRun({ assert }: Context) {\n    assert.equal(1 + 1, 2)\n  }\n\n  @Test()\n  @Tags(['run'])\n  public async willRunAlso({ assert }: Context) {\n    assert.equal(1 + 1, 2)\n  }\n\n  @Test()\n  @Tags(['dont-run'])\n  public async willNotRun({ assert }: Context) {\n    assert.equal(1 + 1, 2)\n  }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now you can select which tests to run by the tags:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"node artisan test --tags run\n"})}),"\n",(0,s.jsx)(n.h2,{id:"cleanup",children:(0,s.jsx)(n.code,{children:"@Cleanup()"})}),"\n",(0,s.jsx)(n.p,{children:"Create a cleanup function with the purpose to\nclean the state created by your test. This function\nwill always be executed, even if your test fails:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, Cleanup, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  @Cleanup(() => Config.set('app.name', 'Athenna'))\n  public async test({ assert }: Context) {\n    Config.set('app.name', 'MyApp')\n\n    assert.equal(Config.get('app.name'), 'MyApp')\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:(0,s.jsx)(n.code,{children:"@Setup()"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@Setup()"})," annotation works like ",(0,s.jsx)(n.code,{children:"@BeforeEach()"}),"\nbut for a specific test. The function you define\ninside will be called before the test starts running:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, Setup, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  @Setup(() => Config.set('app.name', 'MyApp'))\n  public async test({ assert }: Context) {\n    assert.equal(Config.get('app.name'), 'MyApp')\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"teardown",children:(0,s.jsx)(n.code,{children:"@Teardown()"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@Teardown()"})," annotation works like ",(0,s.jsx)(n.code,{children:"@AfterEach()"}),"\nbut for a specific test. The function you define\ninside will be called after the test finish running:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, Setup, Teardown, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  @Setup(() => Config.set('app.name', 'MyApp'))\n  @Teardown(() => Config.set('app.name', 'Athenna'))\n  public async test({ assert }: Context) {\n    assert.equal(Config.get('app.name'), 'MyApp')\n  }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(7294);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
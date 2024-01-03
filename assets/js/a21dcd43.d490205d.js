"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[8813],{2550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(5893),a=t(1151);const i={title:"Getting Started",sidebar_position:1,description:"See how to create tests in an Athenna application."},o="Getting Started",r={id:"testing/getting-started",title:"Getting Started",description:"See how to create tests in an Athenna application.",source:"@site/docs/testing/getting-started.mdx",sourceDirName:"testing",slug:"/testing/getting-started",permalink:"/docs/testing/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/testing/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1,description:"See how to create tests in an Athenna application."},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/docs/testing"},next:{title:"REST API Testing",permalink:"/docs/testing/rest-api-testing"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Environment",id:"environment",level:2},{value:"Writing tests",id:"writing-tests",level:2},{value:"Tests structure",id:"tests-structure",level:2},{value:"<code>@Test()</code>",id:"test",level:3},{value:"<code>@BeforeAll()</code>",id:"beforeall",level:3},{value:"<code>@BeforeEach()</code>",id:"beforeeach",level:3},{value:"<code>@AfterAll()</code>",id:"afterall",level:3},{value:"<code>@AfterEach()</code>",id:"aftereach",level:3},{value:"Running tests",id:"running-tests",level:2},{value:"Assertions",id:"assertions",level:2},{value:"Other useful annotations",id:"other-useful-annotations",level:2},{value:"Reporting test coverage",id:"reporting-test-coverage",level:2},{value:"Creating base test classes",id:"creating-base-test-classes",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(n.p,{children:"See how to create tests in an Athenna application."}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["Athenna is built with testing in mind. In fact,\nsupport for testing with ",(0,s.jsx)(n.a,{href:"https://japa.dev",children:"Japa"})," is included out\nof the box. The framework also ships with convenient\nhelper methods that allow you to expressively test\nyour applications."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, your application's ",(0,s.jsx)(n.code,{children:"tests"})," directory\ncontains two directories:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"e2e"})," - Should contains the tests responsible to test\na larger portion of your code, including how several\nobject interact with each other or even a full HTTP\nrequest to a JSON endpoint."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"unit"})," - Should contains the tests responsible to test\nisolated portion of your code, focusing on a single method.\nTests within your ",(0,s.jsx)(n.strong,{children:"unit"})," test directory should not boot\nyour Athenna application, meaning that they should be unable\nto access your application's database or other framework\nservices."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"e2e/AppControllerTest.ts"})," and\n",(0,s.jsx)(n.code,{children:"unit/AppServiceTest.ts"})," files are provided for you\nto use as an example to start writing your own tests. After\ninstalling a new Athenna application, execute the following\nto run your tests:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"node artisan test\n"})}),"\n",(0,s.jsx)(n.h2,{id:"environment",children:"Environment"}),"\n",(0,s.jsxs)(n.p,{children:["When running tests, Athenna will automatically set the\n",(0,s.jsx)(n.a,{href:"/docs/getting-started/configuration",children:"configuration environment"}),"\nto ",(0,s.jsx)(n.code,{children:"test"}),", meaning that the ",(0,s.jsx)(n.code,{children:".env.test"})," file will be used when\nrunning your tests."]}),"\n",(0,s.jsxs)(n.p,{children:["You are free to define other testing environment value. To do\nthat you can use the ",(0,s.jsx)(n.code,{children:"setNodeEnv()"})," method of ",(0,s.jsx)(n.code,{children:"Runner"})," class\nin your ",(0,s.jsx)(n.code,{children:"Path.bootstrap('test.ts')"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Runner } from '@athenna/test'\nimport { request } from '@athenna/http/testing/plugins'\nimport { command } from '@athenna/artisan/testing/plugins'\n\nawait Runner.setTsEnv()\n  .addPlugin(assert())\n  .addPlugin(request())\n  .addPlugin(command())\n  .setNodeEnv('testing') \ud83d\udc48\n  .addReporter(specReporter())\n  .addPath('tests/e2e/**/*.ts')\n  .addPath('tests/unit/**/*.ts')\n  .setCliArgs(process.argv.slice(2))\n  .setGlobalTimeout(5000)\n  .run()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"writing-tests",children:"Writing tests"}),"\n",(0,s.jsxs)(n.p,{children:["To create a new test case, use the ",(0,s.jsx)(n.code,{children:"make:test"})," Artisan\ncommand. By default, tests will be placed in the ",(0,s.jsx)(n.code,{children:"tests/e2e"}),"\ndirectory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"node artisan make:test UserTest\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you would like to create a test within the ",(0,s.jsx)(n.code,{children:"tests/unit"}),"\ndirectory, you may use the ",(0,s.jsx)(n.code,{children:"--unit"})," option when executing\nthe ",(0,s.jsx)(n.code,{children:"make:test"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"node artisan make:test UserTest --unit\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"You can also create a custom test for each specific\nAthenna application:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:'title="For REST API"',children:"node artisan make:test UserTest --rest\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:'title="For CLI"',children:"node artisan make:test UserTest --console\n"})}),(0,s.jsxs)(n.p,{children:["To customize the test templates check the\n",(0,s.jsx)(n.a,{href:"/docs/the-basics/views#customizing-make-commands-templates",children:(0,s.jsx)(n.code,{children:"template:customize"})}),"\ncommand."]})]}),"\n",(0,s.jsxs)(n.p,{children:["Once the test has been generated, you may define your\ntest methods and annotate them with the ",(0,s.jsx)(n.code,{children:"@Test()"})," annotation:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Test, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  public async testBasicExample({ assert }: Context) {\n    assert.equal(1 + 1, 2)\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"tests-structure",children:"Tests structure"}),"\n",(0,s.jsx)(n.p,{children:"Athenna tests are represented as classes. Your class name will\nbe used as the test suite name, while the test methods will be\nconsidered the test names. All the methods of the class are\ncustomizable, what defines if that method is a test, test hook\nor even a helper method is the annotation used:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { \n  Test, \n  BeforeAll, \n  BeforeEach, \n  AfterAll, \n  AfterEach, \n  type Context \n} from '@athenna/test'\n\nexport default class SumTest {\n  public sum(a: number, b: number): number {\n    return a + b\n  }\n\n  @BeforeAll()\n  public async beforeAll() {\n    //\n  }\n\n  @AfterAll()\n  public async afterAll() {\n    //\n  }\n\n  @BeforeEach()\n  public async beforeEach() {\n    //\n  }\n\n  @AfterEach()\n  public async afterEach() {\n    //\n  }\n\n  @Test()\n  public async 'should be considered a test!' ({ assert }: Context) {\n    assert.equal(this.sum(1, 1), 2)\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"test",children:(0,s.jsx)(n.code,{children:"@Test()"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@Test()"})," annotation is used to define a method\nas a test:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Test()\npublic async testMethod({ assert }: Context) {\n  assert.equal(1 + 1, 2)\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also define the test name by passing a string\nto the ",(0,s.jsx)(n.code,{children:"@Test()"})," annotation:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Test('test method!')\npublic async testMethod({ assert }: Context) {\n  assert.equal(1 + 1, 2)\n}\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"This could also be done in class defining the\nmethod name as string:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Test()\npublic async 'test method!' ({ assert }: Context) {\n  assert.equal(1 + 1, 2)\n}\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"beforeall",children:(0,s.jsx)(n.code,{children:"@BeforeAll()"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@BeforeAll()"})," annotation is used to define that a\nmethod should be executed ",(0,s.jsx)(n.strong,{children:"before all"})," tests of that class\n",(0,s.jsx)(n.strong,{children:"starts running"}),". You can define as many as you want in the\nsame class:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@BeforeAll()\npublic async doSomeOp() {\n  //\n}\n\n@BeforeAll()\npublic async doOtherOp() {\n  //\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"beforeeach",children:(0,s.jsx)(n.code,{children:"@BeforeEach()"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@BeforeEach()"})," annotation is used to define that a\nmethod should be executed ",(0,s.jsx)(n.strong,{children:"before each"})," tests of that class\n",(0,s.jsx)(n.strong,{children:"starts running"}),". You can define as many as you want in the\nsame class:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@BeforeEach()\npublic async doSomeOp() {\n  //\n}\n\n@BeforeEach()\npublic async doOtherOp() {\n  //\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"afterall",children:(0,s.jsx)(n.code,{children:"@AfterAll()"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@AfterAll()"})," annotation is used to define that a\nmethod should be executed ",(0,s.jsx)(n.strong,{children:"after all"})," tests of that class\n",(0,s.jsx)(n.strong,{children:"ends running"}),". You can define as many as you want in the\nsame class:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@AfterAll()\npublic async doSomeOp() {\n  //\n}\n\n@AfterAll()\npublic async doOtherOp() {\n  //\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"aftereach",children:(0,s.jsx)(n.code,{children:"@AfterEach()"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@AfterEach()"})," annotation is used to define that a\nmethod should be executed ",(0,s.jsx)(n.strong,{children:"after each"})," tests of that class\n",(0,s.jsx)(n.strong,{children:"ends running"}),". You can define as many as you want in the\nsame class:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@AfterEach()\npublic async doSomeOp() {\n  //\n}\n\n@AfterEach()\npublic async doOtherOp() {\n  //\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"running-tests",children:"Running tests"}),"\n",(0,s.jsxs)(n.p,{children:["To run your tests you can use the ",(0,s.jsx)(n.code,{children:"test"})," Artisan command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"node artisan test\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Any arguments that can be passed to ",(0,s.jsx)(n.a,{href:"https://japa.dev",children:"Japa"}),",\nmay also be passed to the Artisan ",(0,s.jsx)(n.code,{children:"test"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'node artisan test --groups="MyClassTest" --force-exit\n'})}),"\n",(0,s.jsx)(n.h2,{id:"assertions",children:"Assertions"}),"\n",(0,s.jsxs)(n.p,{children:["Athenna ships with a variety of helpful assertions with the\nhelp of the ",(0,s.jsx)(n.a,{href:"https://japa.dev/docs/plugins/assert",children:(0,s.jsx)(n.code,{children:"@japa/assert"})}),"\nplugin. We are not going to cover\nthe assertions here, but you can check the ",(0,s.jsx)(n.a,{href:"https://japa.dev/docs/plugins/assert#assert-1",children:"assert documentation\nsection"})," of Japa to\nsee all the available methods for you."]}),"\n",(0,s.jsx)(n.p,{children:"Their documentation is beautiful, small and precise. I swear it\nwill be worth your time \ud83d\ude0e."}),"\n",(0,s.jsx)(n.h2,{id:"other-useful-annotations",children:"Other useful annotations"}),"\n",(0,s.jsxs)(n.p,{children:["Along with the annotations seen above, Athenna ships with\nother useful annotations that can be used to customize how\nyour test is going to behave. You can check all of them and\nit options in the ",(0,s.jsx)(n.a,{href:"/docs/testing/annotations",children:"testing annotations documentation section"})]}),"\n",(0,s.jsx)(n.h2,{id:"reporting-test-coverage",children:"Reporting test coverage"}),"\n",(0,s.jsx)(n.p,{children:"When running your application tests, you may want to\ndetermine whether your test cases are actually covering\nthe application code and how much application code is\nused when running your tests."}),"\n",(0,s.jsxs)(n.p,{children:["To accomplish this, you may use the ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/c8",children:(0,s.jsx)(n.code,{children:"c8"})}),"\ntool that already comes installed and configured for\nyou in your application. To use it, you just need to\ncall it before invoking the ",(0,s.jsx)(n.code,{children:"test"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npx c8 node artisan test\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["By default, Athenna already comes with the ",(0,s.jsx)(n.code,{children:"test:coverage"}),"\nnpm script defined that already does this job for you:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npm run test:coverage\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"creating-base-test-classes",children:"Creating base test classes"}),"\n",(0,s.jsx)(n.p,{children:"If you would like to define some helper methods to be defined\nin all your test classes, you can create a base test class and extend\nit in your tests:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="tests/helpers/BaseTest.ts"',children:"import { BeforeAll } from '@athenna/test'\n\nexport class BaseTest {\n  @BeforeAll()\n  public async beforeAll() {\n    console.log('Executed before all tests that extends BaseTest!')\n  }\n\n  public getMockedData() {\n    return {\n      name: 'Lenon'\n    }\n  }\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="tests/e2e/UserTest.ts"',children:"import { Test, type Context } from '@athenna/test'\nimport { BaseTest } from '#tests/helpers/BaseTest'\n\nexport default class UserTest extends BaseTest {\n  @Test()\n  public async test({ assert }: Context) {\n    const data = this.getMockedData()\n\n    assert.equal(data.name, 'Lenon')\n  }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(7294);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
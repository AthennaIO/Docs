"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[3082],{4597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"testing/cli-tests","title":"CLI Testing","description":"See how to create tests for CLI applications in Athenna.","source":"@site/docs/testing/cli-tests.mdx","sourceDirName":"testing","slug":"/testing/cli-tests","permalink":"/docs/testing/cli-tests","draft":false,"unlisted":false,"editUrl":"https://github.com/AthennaIO/Docs/tree/main/docs/testing/cli-tests.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"CLI Testing","sidebar_position":4,"description":"See how to create tests for CLI applications in Athenna."},"sidebar":"tutorialSidebar","previous":{"title":"REST API Testing","permalink":"/docs/testing/rest-api-testing"},"next":{"title":"Mocking","permalink":"/docs/testing/mocking"}}');var a=n(4848),o=n(8453),i=n(7049);const r={title:"CLI Testing",sidebar_position:4,description:"See how to create tests for CLI applications in Athenna."},c="CLI Testing",d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Registering <code>command</code> plugin",id:"registering-command-plugin",level:2},{value:"Running commands",id:"running-commands",level:2},{value:"Changing Artisan file path",id:"changing-artisan-file-path",level:2},{value:"Changing the default Artisan file path",id:"changing-the-default-artisan-file-path",level:3},{value:"Changing Artisan file path per command",id:"changing-artisan-file-path-per-command",level:3},{value:"Changing Artisan file path for the test group",id:"changing-artisan-file-path-for-the-test-group",level:3},{value:"Debugging outputs",id:"debugging-outputs",level:2},{value:"Output assertions",id:"output-assertions",level:2},{value:"<code>assertExitCode()</code>",id:"assertexitcode",level:4},{value:"<code>assertSucceeded()</code>",id:"assertsucceeded",level:4},{value:"<code>assertFailed()</code>",id:"assertfailed",level:4},{value:"<code>assertLogged()</code>",id:"assertlogged",level:4},{value:"<code>assertLogMatches()</code>",id:"assertlogmatches",level:4},{value:"The <code>BaseConsoleTest</code> class",id:"the-baseconsoletest-class",level:2},{value:"Accessing <code>Ignite</code> instance",id:"accessing-ignite-instance",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"cli-testing",children:"CLI Testing"})}),"\n",(0,a.jsx)(t.p,{children:"See how to create tests for CLI applications in Athenna."}),"\n",(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"Athenna provides a very fluent API for running CLI\ncommands of your application and examining the output.\nFor example, take a look at the e2e test defined below:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"import { Test, type Context } from '@athenna/test'\nimport { BaseConsoleTest } from '@athenna/core/testing/BaseConsoleTest'\n\nexport default class ExampleTest extends BaseConsoleTest {\n  @Test()\n  public async 'test successful output'({ command }: Context) {\n    const output = await command.run('app')\n\n    output.assertSucceeded()\n  }\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"command.run()"})," method will run a child process using the\n",(0,a.jsx)(i.A,{father:"bin",child:"artisan.ts"})," file to execute the ",(0,a.jsx)(t.code,{children:"app"})," command\nand get the ",(0,a.jsx)(t.code,{children:"stdout"}),", ",(0,a.jsx)(t.code,{children:"stderr"})," and ",(0,a.jsx)(t.code,{children:"exitCode"})," outputs,\nwhile the ",(0,a.jsx)(t.code,{children:"assertSucceeded()"})," method asserts that the returned\noutput should have a successful exit code (",(0,a.jsx)(t.code,{children:"0"}),"). In addition\nto this simple assertion, Athenna also contains a variety of\nassertions for inspecting the output."]}),"\n",(0,a.jsxs)(t.p,{children:["You might have noticed that the ",(0,a.jsx)(t.code,{children:"ExampleTest"})," is extending the\n",(0,a.jsx)(t.code,{children:"BaseConsoleTest"})," class. We gonna see later on this documentation\nwhat is the purpose of this class, and how to configure it for your\nneeds."]}),"\n",(0,a.jsxs)(t.h2,{id:"registering-command-plugin",children:["Registering ",(0,a.jsx)(t.code,{children:"command"})," plugin"]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"command"})," property in your test context will only be\navailable if you register the command plugin within the\n",(0,a.jsx)(t.code,{children:"Runner"})," class. By default, your Athenna application already\ncomes with the command plugin registered. But we are\ngoing to cover how to register it manually if needed."]}),"\n",(0,a.jsxs)(t.p,{children:["Just call the ",(0,a.jsx)(t.code,{children:"Runner.addPlugin()"})," static method to set up\nthe request plugin imported from ",(0,a.jsx)(t.code,{children:"@athenna/artisan/testing/plugins"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",metastring:"title=\"Path.bin('test.ts')\"",children:"import { Runner } from '@athenna/test'\nimport { request } from '@athenna/http/testing/plugins'\nimport { command } from '@athenna/artisan/testing/plugins'\n\nawait Runner.setTsEnv()\n  .addAssertPlugin()\n  .addPlugin(request())\n  .addPlugin(command()) \ud83d\udc48\n  .addPath('tests/e2e/**/*.ts')\n  .addPath('tests/unit/**/*.ts')\n  .setCliArgs(process.argv.slice(2))\n  .setGlobalTimeout(5000)\n  .run()\n"})}),"\n",(0,a.jsx)(t.h2,{id:"running-commands",children:"Running commands"}),"\n",(0,a.jsxs)(t.p,{children:["To run a command to your application, you may invoke the\n",(0,a.jsx)(t.code,{children:"command.run()"})," method within your test."]}),"\n",(0,a.jsxs)(t.p,{children:["This method will return a ",(0,a.jsx)(t.code,{children:"TestOutput"})," instance, which\nprovides a\n",(0,a.jsx)(t.a,{href:"/docs/testing/cli-tests#output-assertions",children:"variety of helpful assertions"}),"\nthat allow you to inspect your application's CLI output:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"import { Test, type Context } from '@athenna/test'\nimport { BaseConsoleTest } from '@athenna/core/testing/BaseConsoleTest'\n\nexport default class ExampleTest extends BaseConsoleTest {\n  @Test()\n  public async testBasicCommand({ command }: Context) {\n    const output = await command.run('greet')\n\n    output.assertExitCode(0)\n  }\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"changing-artisan-file-path",children:"Changing Artisan file path"}),"\n",(0,a.jsx)(t.h3,{id:"changing-the-default-artisan-file-path",children:"Changing the default Artisan file path"}),"\n",(0,a.jsxs)(t.p,{children:["As mentioned previously, the ",(0,a.jsx)(t.code,{children:"command.run()"})," method invokes\na child process using the ",(0,a.jsx)(i.A,{father:"bin",child:"artisan.ts"})," file.\nBut for some reason, you may want to change which file should be\nused to test your commands. To do so, you can call the\n",(0,a.jsx)(t.code,{children:"TestCommand.setArtisanPath()"})," static method before running\nyour tests:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",metastring:"title=\"Path.bin('test.ts')\"",children:"import { Runner } from '@athenna/test'\nimport { request } from '@athenna/http/testing/plugins'\nimport { command, TestCommand } from '@athenna/artisan/testing/plugins'\n\nTestCommand.setArtisanPath(Path.fixtures('artisan.ts')) \ud83d\udc48\n\nawait Runner.setTsEnv()\n  .addAssertPlugin()\n  .addPlugin(request())\n  .addPlugin(command())\n  .addPath('tests/e2e/**/*.ts')\n  .addPath('tests/unit/**/*.ts')\n  .setCliArgs(process.argv.slice(2))\n  .setGlobalTimeout(5000)\n  .run()\n"})}),"\n",(0,a.jsx)(t.h3,{id:"changing-artisan-file-path-per-command",children:"Changing Artisan file path per command"}),"\n",(0,a.jsxs)(t.p,{children:["When running your tests, you may want to create a different behavior\nfor a specific command, like mocking the prompts to not block your test\nexecution or adding some different value for an ",(0,a.jsx)(t.code,{children:"Env"})," or ",(0,a.jsx)(t.code,{children:"Config"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Since the ",(0,a.jsx)(t.code,{children:"command.run()"})," method invokes a child process, you can't do\nthis kind of customization in your tests:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"import { Config } from '@athenna/config'\nimport { Test, type Context } from '@athenna/test'\nimport { BaseConsoleTest } from '@athenna/core/testing/BaseConsoleTest'\n\nexport default class ExampleTest extends BaseConsoleTest {\n  @Test()\n  public async testConfigCommand({ command }: Context) {\n    Config.set('app.name', 'MyAppName')\n\n    const output = await command.run('greet')\n\n    output.assertLogged('Hello from MyAppName!') \u274c\n  }\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["To solve this problem, you can use a different ",(0,a.jsx)(t.code,{children:"artisan"})," file\nfor each ",(0,a.jsx)(t.code,{children:"command.run()"})," call. Let's first create a new ",(0,a.jsx)(t.code,{children:"artisan"}),"\nfile and save it in our ",(0,a.jsx)(t.code,{children:"fixtures"})," path:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",metastring:"title=\"Path.fixtures('consoles/artisan-set-app-name.ts')\"",children:"import { Ignite } from '@athenna/core'\nimport { Config } from '@athenna/config'\n\nconst ignite = await new Ignite().load(import.meta.url, { bootLogs: false })\n\nConfig.set('app.name', 'MyAppName')\n\nawait ignite.console(process.argv, { displayName: 'Artisan' })\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Now, we can use this new ",(0,a.jsx)(t.code,{children:"artisan"})," file to run our command:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"import { Path } from '@athenna/common'\nimport { Test, type Context } from '@athenna/test'\nimport { BaseConsoleTest } from '@athenna/core/testing/BaseConsoleTest'\n\nexport default class ExampleTest extends BaseConsoleTest {\n  @Test()\n  public async testConfigCommand({ command }: Context) {\n    const output = await command.run('greet', {\n      path: Path.fixtures('consoles/artisan-set-app-name.ts') \ud83d\udc48\n    })\n\n    output.assertLogged('Hello from MyAppName!') \u2705\n  }\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"changing-artisan-file-path-for-the-test-group",children:"Changing Artisan file path for the test group"}),"\n",(0,a.jsxs)(t.p,{children:["If you need to use the same Artisan file for all the tests inside\nof your class, but you don't want to change it globally for all\nthe rest of your classes using ",(0,a.jsx)(t.code,{children:"TestCommand.setArtisanPath()"})," method,\nyou can set the ",(0,a.jsx)(t.code,{children:"artisanPath"})," property in your test class that\n",(0,a.jsx)(t.code,{children:"BaseConsoleTest"})," will automatically change it when bootstraping\nyour app:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"import { Path } from '@athenna/common'\nimport { Test, type Context } from '@athenna/test'\nimport { BaseConsoleTest } from '@athenna/core/testing/BaseConsoleTest'\n\nexport default class ExampleTest extends BaseConsoleTest {\n  public artisanPath = Path.fixtures('consoles/artisan-set-app-name.ts') \ud83d\udc48\n\n  @Test()\n  public async testConfigCommand({ command }: Context) {\n    const output = await command.run('greet')\n\n    output.assertLogged('Hello from MyAppName!') \u2705\n  }\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"debugging-outputs",children:"Debugging outputs"}),"\n",(0,a.jsxs)(t.p,{children:["After executing a test command to your application,\nthe output returned will contain the ",(0,a.jsx)(t.code,{children:"output"})," property\ninside with all the ",(0,a.jsx)(t.code,{children:"output"})," data:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"import { Test, type Context } from '@athenna/test'\nimport { BaseConsoleTest } from '@athenna/core/testing/BaseConsoleTest'\n\nexport default class ExampleTest BaseConsoleTest {\n  @Test()\n  public async testBasicCommand({ command }: Context) {\n    const output = await command.run('basic')\n\n    console.log(output.output.stdout)\n    console.log(output.output.stderr)\n    console.log(output.output.exitCode)\n\n    output.assertExitCode(0)\n  }\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"output-assertions",children:"Output assertions"}),"\n",(0,a.jsxs)(t.p,{children:["Athenna's ",(0,a.jsx)(t.code,{children:"TestOutput"})," class provides a variety of custom\nassertion methods that you may utilize when testing your\napplication. These assertions may be accessed on the\noutput that is returned by the ",(0,a.jsx)(t.code,{children:"command.run()"})," test method:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/testing/cli-tests#assertexitcode",children:(0,a.jsx)(t.code,{children:"assertExitCode()"})})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/testing/cli-tests#assertsucceeded",children:(0,a.jsx)(t.code,{children:"assertSucceeded()"})})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/testing/cli-tests#assertfailed",children:(0,a.jsx)(t.code,{children:"assertFailed()"})})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/testing/cli-tests#assertlogged",children:(0,a.jsx)(t.code,{children:"assertLogged()"})})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/testing/cli-tests#assertlogmatches",children:(0,a.jsx)(t.code,{children:"assertLogMatches()"})})}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"assertexitcode",children:(0,a.jsx)(t.code,{children:"assertExitCode()"})}),"\n",(0,a.jsx)(t.p,{children:"Assert the exit code of the output:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"output.assertExitCode(0)\noutput.assertIsNotExitCode(1)\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"0"})," exit code means a successful exit of the command,\nanything different from ",(0,a.jsx)(t.code,{children:"0"})," means an error."]})}),"\n",(0,a.jsx)(t.h4,{id:"assertsucceeded",children:(0,a.jsx)(t.code,{children:"assertSucceeded()"})}),"\n",(0,a.jsxs)(t.p,{children:["Assert the command exits with ",(0,a.jsx)(t.code,{children:"0"})," exit code:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"output.assertSucceeded()\n"})}),"\n",(0,a.jsx)(t.h4,{id:"assertfailed",children:(0,a.jsx)(t.code,{children:"assertFailed()"})}),"\n",(0,a.jsxs)(t.p,{children:["Assert the command exits with anything different\nfrom ",(0,a.jsx)(t.code,{children:"0"})," exit code:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"output.assertFailed()\n"})}),"\n",(0,a.jsx)(t.h4,{id:"assertlogged",children:(0,a.jsx)(t.code,{children:"assertLogged()"})}),"\n",(0,a.jsx)(t.p,{children:"Assert the command has logged the expected message:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"output.assertLogged('Hello World!')\noutput.assertNotLogged('Hello World!')\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This method validates that the log message will be\nprinted in ",(0,a.jsx)(t.code,{children:"stdout"})," or ",(0,a.jsx)(t.code,{children:"stderr"}),". To force the stream type\nwhere this log should appear, you can set it as second\nargument:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"output.assertLogged('Hello World!', 'stdout') // or stderr\noutput.assertNotLogged('Hello World!', 'stdout') // or stderr\n"})}),"\n",(0,a.jsx)(t.h4,{id:"assertlogmatches",children:(0,a.jsx)(t.code,{children:"assertLogMatches()"})}),"\n",(0,a.jsxs)(t.p,{children:["Assert the command has logged a message that matches\nthe ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",children:(0,a.jsx)(t.code,{children:"RegExp"})}),"\nprovided:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"output.assertLogMatches(/Hello World/)\noutput.assertLogNotMatches(/Hello World/)\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This method validates that the regex will match in ",(0,a.jsx)(t.code,{children:"stdout"}),"\nor ",(0,a.jsx)(t.code,{children:"stderr"}),". To force the stream type\nwhere this log should match, you can set it as second\nargument:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"output.assertLogMatches(/Hello World/, 'stdout') // or stderr\noutput.assertLogNotMatches(/Hello World/, 'stdout') // or stderr\n"})}),"\n",(0,a.jsxs)(t.h2,{id:"the-baseconsoletest-class",children:["The ",(0,a.jsx)(t.code,{children:"BaseConsoleTest"})," class"]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"BaseConsoleTest"})," class is responsible to bootstrap your Athenna\napplication ",(0,a.jsx)(t.strong,{children:"before running all"})," tests and also to kill the\napplication ",(0,a.jsx)(t.strong,{children:"after running all"})," tests, meaning that is not possible\nto use the ",(0,a.jsx)(t.code,{children:"command"})," property without extending this class or at least\nsetting up your own Athenna application using ",(0,a.jsx)(t.code,{children:"Ignite"})," class."]}),"\n",(0,a.jsxs)(t.p,{children:["If for some reason you need to change the options set when\ncalling the ",(0,a.jsx)(t.code,{children:"Ignite.load()"})," or ",(0,a.jsx)(t.code,{children:"Ignite.artisan()"})," methods,\nyou can set the ",(0,a.jsx)(t.code,{children:"igniteOptions"})," and ",(0,a.jsx)(t.code,{children:"artisanOptions"})," properties\nin your test class:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"import { Path } from '@athenna/common'\nimport { type IgniteOptions } from '@athenna/core'\nimport { Test, type Context } from '@athenna/test'\nimport { BaseConsoleTest } from '@athenna/core/testing/BaseConsoleTest'\n\nexport default class ExampleTest extends BaseConsoleTest {\n  public igniteOptions: IgniteOptions = {\n    bootLogs: true,\n    shutdownLogs: true,\n    envPath: Path.fixtures('envs/.env'),\n    athennaRcPath: Path.fixtures('rcs/.athennarc.json'),\n    environments: ['http', 'test']\n  }\n\n  @Test()\n  public async 'test successful output'({ command }: Context) {\n    const output = await command.run('app')\n\n    output.assertSucceeded()\n  }\n}\n"})}),"\n",(0,a.jsxs)(t.admonition,{type:"warning",children:[(0,a.jsxs)(t.p,{children:["Remember that changes done to the options of ",(0,a.jsx)(t.code,{children:"Ignite"})," class will only\nbe relevant when running commands outside of the child process. Meaning\nthat if you call ",(0,a.jsx)(t.code,{children:"command.run()"}),", the options used to ignite Artisan will\nbe from your Artisan file, and not from the ones you set in your test class."]}),(0,a.jsxs)(t.p,{children:["To solve this, check how to change the ",(0,a.jsx)(t.a,{href:"/docs/testing/cli-tests#changing-artisan-file-path-for-the-test-group",children:"Artisan file path of your\ntest group"}),"."]})]}),"\n",(0,a.jsxs)(t.h3,{id:"accessing-ignite-instance",children:["Accessing ",(0,a.jsx)(t.code,{children:"Ignite"})," instance"]}),"\n",(0,a.jsxs)(t.p,{children:["You are able to access the ",(0,a.jsx)(t.code,{children:"Ignite"})," instance by using the ",(0,a.jsx)(t.code,{children:"ignite"}),"\nproperty:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"import { Test, type Context } from '@athenna/test'\nimport { BaseConsoleTest } from '@athenna/core/testing/BaseConsoleTest'\n\nexport default class ExampleTest extends BaseConsoleTest { \n  @Test()\n  public async 'test successful output'({ command }: Context) {\n    this.ignite \ud83d\udc48\n  }\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},7049:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);const s={hoverCardContainer:"hoverCardContainer_jqUQ",hoverCardLink:"hoverCardLink_oDZU",hoverCard:"hoverCard_qTDS"};var a=n(4848);function o(e){let t=e.father;switch(e.father){case"storage":t="src/storage";break;case"logs":t="src/storage/logs";break;case"views":t="src/resources/views";break;case"locales":t="src/resources/locales";break;case"static":t="src/resources/static";break;case"config":t="src/config";break;case"database":t="src/database";break;case"seeders":t="src/database/seeders";break;case"migrations":t="src/database/migrations";break;case"console":t="src/console";break;case"commands":t="src/console/commands";break;case"cron":t="src/cron";break;case"schedulers":t="src/cron/schedulers";break;case"models":t="src/models";break;case"services":t="src/services";break;case"repositories":t="src/repositories";break;case"http":t="src/http";break;case"controllers":t="src/http/controllers";break;case"middlewares":t="src/http/middlewares";break;case"interceptors":t="src/http/interceptors";break;case"terminators":t="src/http/terminators";break;case"stubs":t="tests/stubs";break;case"fixtures":t="tests/fixtures";break;case"providers":t="src/providers";break;case"facades":t="src/facades";break;case"routes":t="src/routes"}return(0,a.jsxs)("div",{className:s.hoverCardContainer,children:[(0,a.jsx)("a",{className:s.hoverCardLink,href:`/docs/the-basics/helpers#path${e.father}`,children:(0,a.jsxs)("code",{children:["Path.",e.father,"(",e.child?`'${e.child}'`:"",")"]})}),(0,a.jsx)("div",{className:s.hoverCard,children:(0,a.jsxs)("p",{style:{margin:0},children:["./",t,e.child?`/${e.child}`:""]})})]})}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(6540);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
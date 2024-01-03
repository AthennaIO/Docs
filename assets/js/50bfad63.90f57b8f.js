"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[8223],{4057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=n(5893),o=n(1151);const a={title:"CLI Testing",sidebar_position:3,description:"See how to create tests for CLI applications in Athenna."},i="CLI Testing",r={id:"testing/cli-tests",title:"CLI Testing",description:"See how to create tests for CLI applications in Athenna.",source:"@site/docs/testing/cli-tests.mdx",sourceDirName:"testing",slug:"/testing/cli-tests",permalink:"/docs/testing/cli-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/testing/cli-tests.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"CLI Testing",sidebar_position:3,description:"See how to create tests for CLI applications in Athenna."},sidebar:"tutorialSidebar",previous:{title:"REST API Testing",permalink:"/docs/testing/rest-api-testing"},next:{title:"Annotations",permalink:"/docs/testing/annotations"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Registering <code>command</code> plugin",id:"registering-command-plugin",level:2},{value:"Running commands",id:"running-commands",level:2},{value:"Changing Artisan file path",id:"changing-artisan-file-path",level:2},{value:"Changing the default Artisan file path",id:"changing-the-default-artisan-file-path",level:3},{value:"Changing Artisan file path per command",id:"changing-artisan-file-path-per-command",level:3},{value:"Debugging outputs",id:"debugging-outputs",level:2},{value:"Output assertions",id:"output-assertions",level:2},{value:"<code>assertExitCode()</code>",id:"assertexitcode",level:4},{value:"<code>assertSucceeded()</code>",id:"assertsucceeded",level:4},{value:"<code>assertFailed()</code>",id:"assertfailed",level:4},{value:"<code>assertLogged()</code>",id:"assertlogged",level:4},{value:"<code>assertLogMatches()</code>",id:"assertlogmatches",level:4}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"cli-testing",children:"CLI Testing"}),"\n",(0,s.jsx)(t.p,{children:"See how to create tests for CLI applications in Athenna."}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"Athenna provides a very fluent API for running CLI\ncommands of your application and examining the output.\nFor example, take a look at the e2e test defined below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { Test, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  public async 'test successful output'({ command }: Context) {\n    const output = await command.run('app')\n\n    output.assertSucceeded()\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"command.run()"})," method will run a child process using the\n",(0,s.jsx)(t.code,{children:"Path.bootstrap('artisan.ts')"})," file to execute the ",(0,s.jsx)(t.code,{children:"app"})," command\nand get the ",(0,s.jsx)(t.code,{children:"stdout"}),", ",(0,s.jsx)(t.code,{children:"stderr"})," and ",(0,s.jsx)(t.code,{children:"exitCode"})," outputs,\nwhile the ",(0,s.jsx)(t.code,{children:"assertSucceeded()"})," method asserts that the returned\noutput should have a successful exit code (",(0,s.jsx)(t.code,{children:"0"}),"). In addition\nto this simple assertion, Athenna also contains a variety of\nassertions for inspecting the output."]}),"\n",(0,s.jsxs)(t.h2,{id:"registering-command-plugin",children:["Registering ",(0,s.jsx)(t.code,{children:"command"})," plugin"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"command"})," property in your test context will only be\navailable if you register the command plugin within the\n",(0,s.jsx)(t.code,{children:"Runner"})," class. By default, your Athenna application already\ncomes with the command plugin registered. But we are\ngoing to cover how to register it manually if needed."]}),"\n",(0,s.jsxs)(t.p,{children:["Just call the ",(0,s.jsx)(t.code,{children:"Runner.addPlugin()"})," static method to set up\nthe request plugin imported from ",(0,s.jsx)(t.code,{children:"@athenna/artisan/testing/plugins"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:"title=\"Path.bootstrap('test.ts')\"",children:"import { request } from '@athenna/http/testing/plugins'\nimport { command } from '@athenna/artisan/testing/plugins'\nimport { Runner, assert, specReporter } from '@athenna/test'\n\nawait Runner.setTsEnv()\n  .addPlugin(assert())\n  .addPlugin(request())\n  .addPlugin(command()) \ud83d\udc48\n  .addReporter(specReporter())\n  .addPath('tests/e2e/**/*.ts')\n  .addPath('tests/unit/**/*.ts')\n  .setCliArgs(process.argv.slice(2))\n  .setGlobalTimeout(5000)\n  .run()\n"})}),"\n",(0,s.jsx)(t.h2,{id:"running-commands",children:"Running commands"}),"\n",(0,s.jsxs)(t.p,{children:["To run a command to your application, you may invoke the\n",(0,s.jsx)(t.code,{children:"command.run()"})," method within your test."]}),"\n",(0,s.jsxs)(t.p,{children:["This method will return a ",(0,s.jsx)(t.code,{children:"TestOutput"})," instance, which\nprovides a\n",(0,s.jsx)(t.a,{href:"/docs/testing/cli-tests#output-assertions",children:"variety of helpful assertions"}),"\nthat allow you to inspect your application's CLI output:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { Test, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  public async testBasicCommand({ command }: Context) {\n    const output = await command.run('greet')\n\n    output.assertExitCode(0)\n  }\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"changing-artisan-file-path",children:"Changing Artisan file path"}),"\n",(0,s.jsx)(t.h3,{id:"changing-the-default-artisan-file-path",children:"Changing the default Artisan file path"}),"\n",(0,s.jsxs)(t.p,{children:["As mentioned previously, the ",(0,s.jsx)(t.code,{children:"command.run()"})," method invokes\na child process using the ",(0,s.jsx)(t.code,{children:"Path.bootstrap('artisan.ts')"})," file.\nBut for some reason, you may want to change which file should be\nused to test your commands. To do so, you can call the\n",(0,s.jsx)(t.code,{children:"TestCommand.setArtisanPath()"})," static method before running\nyour tests:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:"title=\"Path.bootstrap('test.ts')\"",children:"import { request } from '@athenna/http/testing/plugins'\nimport { command, TestCommand } from '@athenna/artisan/testing/plugins'\nimport { Runner, assert, specReporter } from '@athenna/test'\n\nTestCommand.setArtisanPath(Path.fixtures('artisan.ts')) \ud83d\udc48\n\nawait Runner.setTsEnv()\n  .addPlugin(assert())\n  .addPlugin(request())\n  .addPlugin(command())\n  .addReporter(specReporter())\n  .addPath('tests/e2e/**/*.ts')\n  .addPath('tests/unit/**/*.ts')\n  .setCliArgs(process.argv.slice(2))\n  .setGlobalTimeout(5000)\n  .run()\n"})}),"\n",(0,s.jsx)(t.h3,{id:"changing-artisan-file-path-per-command",children:"Changing Artisan file path per command"}),"\n",(0,s.jsxs)(t.p,{children:["When running your tests, you may want to create a different behavior\nfor a specific command, like mocking the prompts to not block your test\nexecution or adding some different value for an ",(0,s.jsx)(t.code,{children:"Env"})," or ",(0,s.jsx)(t.code,{children:"Config"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Since the ",(0,s.jsx)(t.code,{children:"command.run()"})," method invokes a child process, you can't do\nthis kind of customization in your tests:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { Config } from '@athenna/config'\nimport { Test, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  public async testConfigCommand({ command }: Context) {\n    Config.set('app.name', 'MyAppName')\n\n    const output = await command.run('greet')\n\n    output.assertLogged('Hello from MyAppName!') \u274c\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To solve this problem, you can use a different ",(0,s.jsx)(t.code,{children:"artisan"})," file\nfor each ",(0,s.jsx)(t.code,{children:"command.run()"})," call. Let's first create a new ",(0,s.jsx)(t.code,{children:"artisan"}),"\nfile and save it in our ",(0,s.jsx)(t.code,{children:"fixtures"})," path:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:"title=\"Path.fixtures('consoles/artisan-set-app-name.ts')\"",children:"import { Ignite } from '@athenna/core'\nimport { Config } from '@athenna/config'\n\nconst ignite = await new Ignite().load(import.meta.url, { bootLogs: false })\n\nConfig.set('app.name', 'MyAppName')\n\nawait ignite.console(process.argv, { displayName: 'Artisan' })\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now, we can use this new ",(0,s.jsx)(t.code,{children:"artisan"})," file to run our command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { Path } from '@athenna/common'\nimport { Test, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  public async testConfigCommand({ command }: Context) {\n    const output = await command.run('greet', {\n      path: Path.fixtures('consoles/artisan-set-app-name.ts') \ud83d\udc48\n    })\n\n    output.assertLogged('Hello from MyAppName!') \u2705\n  }\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"debugging-outputs",children:"Debugging outputs"}),"\n",(0,s.jsxs)(t.p,{children:["After executing a test command to your application,\nthe output returned will contain the ",(0,s.jsx)(t.code,{children:"output"})," property\ninside with all the ",(0,s.jsx)(t.code,{children:"output"})," data:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { Test, type Context } from '@athenna/test'\n\nexport default class ExampleTest {\n  @Test()\n  public async testBasicCommand({ command }: Context) {\n    const output = await command.run('basic')\n\n    console.log(output.output.stdout)\n    console.log(output.output.stderr)\n    console.log(output.output.exitCode)\n\n    output.assertExitCode(0)\n  }\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"output-assertions",children:"Output assertions"}),"\n",(0,s.jsxs)(t.p,{children:["Athenna's ",(0,s.jsx)(t.code,{children:"TestOutput"})," class provides a variety of custom\nassertion methods that you may utilize when testing your\napplication. These assertions may be accessed on the\noutput that is returned by the ",(0,s.jsx)(t.code,{children:"command.run()"})," test method:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/testing/cli-tests#assertexitcode",children:(0,s.jsx)(t.code,{children:"assertExitCode()"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/testing/cli-tests#assertsucceeded",children:(0,s.jsx)(t.code,{children:"assertSucceeded()"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/testing/cli-tests#assertfailed",children:(0,s.jsx)(t.code,{children:"assertFailed()"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/testing/cli-tests#assertlogged",children:(0,s.jsx)(t.code,{children:"assertLogged()"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/testing/cli-tests#assertlogmatches",children:(0,s.jsx)(t.code,{children:"assertLogMatches()"})})}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"assertexitcode",children:(0,s.jsx)(t.code,{children:"assertExitCode()"})}),"\n",(0,s.jsx)(t.p,{children:"Assert the exit code of the output:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"output.assertExitCode(0)\noutput.assertIsNotExitCode(1)\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"0"})," exit code means a successful exit of the command,\nanything different from ",(0,s.jsx)(t.code,{children:"0"})," means an error."]})}),"\n",(0,s.jsx)(t.h4,{id:"assertsucceeded",children:(0,s.jsx)(t.code,{children:"assertSucceeded()"})}),"\n",(0,s.jsxs)(t.p,{children:["Assert the command exits with ",(0,s.jsx)(t.code,{children:"0"})," exit code:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"output.assertSucceeded()\n"})}),"\n",(0,s.jsx)(t.h4,{id:"assertfailed",children:(0,s.jsx)(t.code,{children:"assertFailed()"})}),"\n",(0,s.jsxs)(t.p,{children:["Assert the command exits with anything different\nfrom ",(0,s.jsx)(t.code,{children:"0"})," exit code:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"output.assertFailed()\n"})}),"\n",(0,s.jsx)(t.h4,{id:"assertlogged",children:(0,s.jsx)(t.code,{children:"assertLogged()"})}),"\n",(0,s.jsx)(t.p,{children:"Assert the command has logged the expected message:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"output.assertLogged('Hello World!')\noutput.assertNotLogged('Hello World!')\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This method validates that the log message will be\nprinted in ",(0,s.jsx)(t.code,{children:"stdout"})," or ",(0,s.jsx)(t.code,{children:"stderr"}),". To force the stream type\nwhere this log should appear, you can set it as second\nargument:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"output.assertLogged('Hello World!', 'stdout') // or stderr\noutput.assertNotLogged('Hello World!', 'stdout') // or stderr\n"})}),"\n",(0,s.jsx)(t.h4,{id:"assertlogmatches",children:(0,s.jsx)(t.code,{children:"assertLogMatches()"})}),"\n",(0,s.jsxs)(t.p,{children:["Assert the command has logged a message that matches\nthe ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",children:(0,s.jsx)(t.code,{children:"RegExp"})}),"\nprovided:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"output.assertLogMatches(/Hello World/)\noutput.assertLogNotMatches(/Hello World/)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This method validates that the regex will match in ",(0,s.jsx)(t.code,{children:"stdout"}),"\nor ",(0,s.jsx)(t.code,{children:"stderr"}),". To force the stream type\nwhere this log should match, you can set it as second\nargument:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"output.assertLogMatches(/Hello World/, 'stdout') // or stderr\noutput.assertLogNotMatches(/Hello World/, 'stdout') // or stderr\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var s=n(7294);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
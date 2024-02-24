"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[3650],{3944:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(5893),o=t(1151);const r={title:"Configuration",sidebar_position:4,description:"Understand the initial configurations of your project."},a="Configuration",s={id:"getting-started/configuration",title:"Configuration",description:"Understand the initial configurations of your project.",source:"@site/docs/getting-started/configuration.mdx",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/docs/getting-started/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/getting-started/configuration.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Configuration",sidebar_position:4,description:"Understand the initial configurations of your project."},sidebar:"tutorialSidebar",previous:{title:"AthennaRC File",permalink:"/docs/getting-started/athennarc-file"},next:{title:"Directory Structure",permalink:"/docs/getting-started/directory-structure"}},l={},c=[{value:"Environment configuration",id:"environment-configuration",level:2},{value:"Determining the current environment",id:"determining-the-current-environment",level:3},{value:"Get an environment variable value",id:"get-an-environment-variable-value",level:3},{value:"Custom environment file path",id:"custom-environment-file-path",level:2},{value:"Configuration files",id:"configuration-files",level:2},{value:"Manipulating configuration values",id:"manipulating-configuration-values",level:3},{value:"<code>Config.get()</code>",id:"configget",level:4},{value:"<code>Config.set()</code>",id:"configset",level:4},{value:"<code>Config.safeSet()</code>",id:"configsafeset",level:4},{value:"<code>Config.delete()</code>",id:"configdelete",level:4},{value:"<code>Config.rewrite()</code>",id:"configrewrite",level:4},{value:"<code>Config.is()</code>",id:"configis",level:4},{value:"<code>Config.existsAll()</code>",id:"configexistsall",level:4},{value:"<code>Config.clear()</code>",id:"configclear",level:4},{value:"<code>Config.load()</code>",id:"configload",level:4},{value:"<code>Config.safeLoad()</code>",id:"configsafeload",level:4},{value:"<code>Config.loadAll()</code>",id:"configloadall",level:4},{value:"Get configuration with <code>@Value()</code> decorator",id:"get-configuration-with-value-decorator",level:3},{value:"Define my own configuration path",id:"define-my-own-configuration-path",level:3},{value:"Safe loading configuration files",id:"safe-loading-configuration-files",level:2},{value:"Debug mode",id:"debug-mode",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Understand the initial configurations of your project."}),"\n",(0,i.jsx)(n.h2,{id:"environment-configuration",children:"Environment configuration"}),"\n",(0,i.jsx)(n.p,{children:"It is often helpful to have different configuration values\nbased on the environment where the application is running.\nFor example, you may wish to use a different storage driver\nlocally than you do on your production server."}),"\n",(0,i.jsxs)(n.p,{children:["To make this a cinch, Athenna utilizes the ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/dotenv",children:"dotenv"}),"\nNode.js library. In a fresh Athenna installation, the root\ndirectory of your application will contain a ",(0,i.jsx)(n.code,{children:".env.example"})," file\nthat defines many common environment variables. During the\nAthenna installation process, this file will automatically\nbe copied to ",(0,i.jsx)(n.code,{children:".env"})," and ",(0,i.jsx)(n.code,{children:".env.test"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you are not using the slim project structure, you can\ncreate a ",(0,i.jsx)(n.code,{children:".env"})," file in the root path of your application\nand Athenna will automatically resolve it for you."]})}),"\n",(0,i.jsxs)(n.p,{children:["Athenna default ",(0,i.jsx)(n.code,{children:".env"})," file contains some common configuration\nvalues that may differ based on whether your application is\nrunning locally or on a production. These values are then\nretrieved from various Athenna configuration files within the\n",(0,i.jsx)(n.code,{children:"config"})," directory using Athenna ",(0,i.jsx)(n.code,{children:"Env()"})," function."]}),"\n",(0,i.jsxs)(n.p,{children:["If you are developing with a team, you may wish to continue\nincluding a ",(0,i.jsx)(n.code,{children:".env.example"})," file with your application. By\nputting placeholder values in the example configuration file,\nother developers on your team can clearly see which environment\nvariables are needed to run your application."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Any variable in your ",(0,i.jsx)(n.code,{children:".env"})," file can be overridden by\nexternal environment variables such as server-level or\nsystem-level environment variables. But off course you\ncan turn off this behavior setting the ",(0,i.jsx)(n.code,{children:"OVERRIDE_ENV=true"}),"\nvariable before running your application, if this variable\nis set to true, all environment variables set in ",(0,i.jsx)(n.code,{children:".env"}),"\nwill override the externals."]})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Your ",(0,i.jsx)(n.code,{children:".env"})," file should not be committed to your application\nsource control, since each developer/server using your\napplication could require a different environment configuration.\nFurthermore, this would be a security risk in the event an\nintruder gains access to your source control repository,\nsince any sensitive credentials would get exposed."]})}),"\n",(0,i.jsx)(n.h3,{id:"determining-the-current-environment",children:"Determining the current environment"}),"\n",(0,i.jsxs)(n.p,{children:["Before loading your application's environment variables,\nAthenna determines if either the ",(0,i.jsx)(n.code,{children:"--env"})," Artisan flag has\nbeen specified or if the ",(0,i.jsx)(n.code,{children:"APP_ENV"})," environment variable has\nbeen externally provided."]}),"\n",(0,i.jsxs)(n.p,{children:["If so, Athenna will attempt to load the ",(0,i.jsx)(n.code,{children:".env.${env}"})," or\n",(0,i.jsx)(n.code,{children:".env.${APP_ENV}"})," file if it exists. If the file cannot be\nfound, Athenna will try to find the ",(0,i.jsx)(n.code,{children:"APP_ENV"})," variable inside\nthe ",(0,i.jsx)(n.code,{children:".env"})," file and again try to find the ",(0,i.jsx)(n.code,{children:".env.${APP_ENV}"}),"\nfile to load. Finally, if the ",(0,i.jsx)(n.code,{children:"APP_ENV"})," is not present in ",(0,i.jsx)(n.code,{children:".env"})," file,\nAthenna will end up loading the ",(0,i.jsx)(n.code,{children:".env"})," file by default."]}),"\n",(0,i.jsxs)(n.p,{children:["Running providing ",(0,i.jsx)(n.code,{children:"--env"})," flag in Artisan:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"node artisan serve --env=local\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Running providing ",(0,i.jsx)(n.code,{children:"APP_ENV"})," externally:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"APP_ENV=local node artisan serve\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Let's check some practical examples. This is the default\n",(0,i.jsx)(n.code,{children:".env"})," file that comes in Athenna project:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dotenv",children:"HOST=localhost\nPORT=3000\n\nAPP_NAME=Athenna\nAPP_ENV=local\nAPP_DEBUG=true\nAPP_URL=http://${HOST}:${PORT}\nAPP_DOMAIN=${HOST}\nAPP_DOCUMENTATION=${APP_URL}\nAPP_SOURCE=https://github.com/AthennaIO\n\nLOG_HTTP=true\nLOG_CHANNEL=application\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:".env"})," file above, you can see that we have the\n",(0,i.jsx)(n.code,{children:"APP_ENV=local"}),". This means that if you create a new\n",(0,i.jsx)(n.code,{children:".env.local"})," file in your project root path, Athenna\nwill load it instead of ",(0,i.jsx)(n.code,{children:".env"})," if running your application\nwithout a predefined environment."]}),"\n",(0,i.jsx)(n.h3,{id:"get-an-environment-variable-value",children:"Get an environment variable value"}),"\n",(0,i.jsxs)(n.p,{children:["You can get environment variables using the ",(0,i.jsx)(n.code,{children:"Env()"})," function:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Env } from '@athenna/config'\n\nconst defaultValue = 'Athenna'\n\nconst appName = Env('APP_NAME', defaultValue)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["All environment variables in your .env file and inside\n",(0,i.jsx)(n.code,{children:"process.env"})," object are always interpreted as strings.\nBut when using the ",(0,i.jsx)(n.code,{children:"Env()"})," function, it will auto cast the\nvalue for you. Check the comparison:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Value in .env"}),(0,i.jsx)(n.th,{style:{textAlign:"right"},children:"Value returned by Env function"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["true ",(0,i.jsx)(n.strong,{children:"(boolean)"})]}),(0,i.jsxs)(n.td,{style:{textAlign:"right"},children:["true ",(0,i.jsx)(n.strong,{children:"(boolean)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:['"true" ',(0,i.jsx)(n.strong,{children:"(string)"})]}),(0,i.jsxs)(n.td,{style:{textAlign:"right"},children:["true ",(0,i.jsx)(n.strong,{children:"(boolean)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["10 ",(0,i.jsx)(n.strong,{children:"(number)"})]}),(0,i.jsxs)(n.td,{style:{textAlign:"right"},children:["10 ",(0,i.jsx)(n.strong,{children:"(number)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:['"10" ',(0,i.jsx)(n.strong,{children:"(string)"})]}),(0,i.jsxs)(n.td,{style:{textAlign:"right"},children:["10 ",(0,i.jsx)(n.strong,{children:"(number)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["10.090909 ",(0,i.jsx)(n.strong,{children:"(float)"})]}),(0,i.jsxs)(n.td,{style:{textAlign:"right"},children:["10.090909 ",(0,i.jsx)(n.strong,{children:"(float)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:['"10.090909" ',(0,i.jsx)(n.strong,{children:"(string)"})]}),(0,i.jsxs)(n.td,{style:{textAlign:"right"},children:["10.090909 ",(0,i.jsx)(n.strong,{children:"(float)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:['{"name":"Paulo"} ',(0,i.jsx)(n.strong,{children:"(json)"})]}),(0,i.jsxs)(n.td,{style:{textAlign:"right"},children:['{ name: "Paulo" } ',(0,i.jsx)(n.strong,{children:"(Object)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:['"{"name":"Paulo"}" ',(0,i.jsx)(n.strong,{children:"(json string)"})]}),(0,i.jsxs)(n.td,{style:{textAlign:"right"},children:['{ name: "Paulo" } ',(0,i.jsx)(n.strong,{children:"(Object)"})]})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Let's see a more practical example of it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"process.env.PORT = '3000'\nprocess.env.APP_DEBUG = 'true'\nprocess.env.APP_JSON = '{\"name\":\"Paulo\"}'\n\nconsole.log(Env('PORT')) // 3000 <- number\nconsole.log(Env('APP_DEBUG')) // true <- boolean\nconsole.log(Env('APP_JSON')) // { name: \"Paulo\" } <- object\n"})}),"\n",(0,i.jsxs)(n.p,{children:["There will certainly have scenarios in your business rule\nwhere you explicitly need an environment variable with value\n",(0,i.jsx)(n.code,{children:"true"}),", ",(0,i.jsx)(n.code,{children:"10"})," or ",(0,i.jsx)(n.code,{children:'{"name":"Paulo"}'})," to be a string. To solve\nthis, you can turn off the auto cast when using the ",(0,i.jsx)(n.code,{children:"Env()"}),"\nfunction:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"process.env.PORT = '3000'\nprocess.env.APP_DEBUG = 'true'\nprocess.env.APP_JSON = '{\"name\":\"Paulo\"}'\n\nconst autoCast = false\nconst defaultValue = undefined\n\nconsole.log(Env('PORT', defaultValue, autoCast)) // 3000 <- string\nconsole.log(Env('APP_DEBUG', defaultValue, autoCast)) // true <- string\nconsole.log(Env('APP_JSON', defaultValue, autoCast)) // {\"name\":\"Paulo\"} <- string\n"})}),"\n",(0,i.jsx)(n.p,{children:"Environment variables can parse other environment variables\ntoo. See the example above:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dotenv",children:"HOST=localhost\nPORT=3000\n\nAPP_URL=http://${HOST}:${PORT}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"console.log(Env('APP_URL')) // \"http://localhost:3000\"\n"})}),"\n",(0,i.jsx)(n.h2,{id:"custom-environment-file-path",children:"Custom environment file path"}),"\n",(0,i.jsxs)(n.p,{children:["You can also change the name and the path of your ",(0,i.jsx)(n.code,{children:".env"})," file.\nTo do that you need to set the new path to ",(0,i.jsx)(n.code,{children:"Ignite::load()"})," static method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"title=\"Path.bootstrap('dev.ts')\"",children:"import { Ignite } from '@athenna/core'\n\nconst ignite = await new Ignite().load(import.meta.url, {\n  envPath: './bootstrap/.env.dev' \ud83d\udc48\n})\n\nawait ignite.httpServer()\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Always remember that when using relative paths to set something\nin Athenna, you need to use your project root path as reference,\njust like in the example above."})}),"\n",(0,i.jsx)(n.h2,{id:"configuration-files",children:"Configuration files"}),"\n",(0,i.jsxs)(n.p,{children:["All the configuration files for the Athenna framework are\nstored in the ",(0,i.jsx)(n.code,{children:"config"})," directory if you are using the\ndefault project template. Each option is documented, so\nfeel free to look through the files and get familiar with\nthe options available to you."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The slim template is configured to use ",(0,i.jsx)(n.code,{children:"src/config"})," path\ninstead. But the folder does not exist in the project by\ndefault. You can check how to change this path ",(0,i.jsx)(n.a,{href:"/docs/getting-started/configuration#define-my-own-configuration-path",children:"in here"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Athenna needs almost no additional configuration out of\nthe box. You are free to get started developing! Each\noption is documented, so feel free to look through the\nfiles and get familiar with the options available to you.\nIt contains several options such as locale that you may\nwish to change, according to your application."}),"\n",(0,i.jsx)(n.h3,{id:"manipulating-configuration-values",children:"Manipulating configuration values"}),"\n",(0,i.jsxs)(n.p,{children:["You may easily access your configuration values using the\nglobal ",(0,i.jsx)(n.code,{children:"Config"})," helper class. The configuration values may\nbe accessed using ",(0,i.jsx)(n.code,{children:'"dot (.)"'})," syntax, which includes the\nname of the file and option you wish to access. Let's cover\nsome methods bellow:"]}),"\n",(0,i.jsx)(n.h4,{id:"configget",children:(0,i.jsx)(n.code,{children:"Config.get()"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"get()"})," method will return the value of your configuration.\nYou can also set a default value as second parameter that will\nbe returned if the configuration option does not exist:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Config } from '@athenna/config'\n\nconst defaultValue = 'Athenna'\nconst name = Config.get('app.name', defaultValue)\n\nconsole.log(name) // MyAppName\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["You can get all the configuration values using ",(0,i.jsx)(n.code,{children:"get()"})," method\nwithout any key:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"console.log(Config.get()) // { app: {...}, http: {...}, ... }\n"})})]}),"\n",(0,i.jsx)(n.h4,{id:"configset",children:(0,i.jsx)(n.code,{children:"Config.set()"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"set()"})," method is very useful to set or change the value\nof some configuration in runtime:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Config } from '@athenna/config'\n\nConfig.set('app.name', 'Athenna Framework')\n\nconsole.log(Config.get('app.name')) // Athenna Framework\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Config.set()"})," method does not change the values in\nthe configuration file, only in runtime. To do that, you\nwill need to use the ",(0,i.jsx)(n.a,{href:"https://athenna.io/docs/getting-started/configuration#configrewrite",children:"Config.rewrite()"}),"\nmethod."]})}),"\n",(0,i.jsx)(n.h4,{id:"configsafeset",children:(0,i.jsx)(n.code,{children:"Config.safeSet()"})}),"\n",(0,i.jsxs)(n.p,{children:["If you are not sure if some configuration value is already\nset of not, you can use the ",(0,i.jsx)(n.code,{children:"safeSet()"})," method instead to\nnot overwrite something that was already defined:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Config } from '@athenna/config'\n\nconsole.log(Config.get('app.name')) // MyAppName\n\nConfig.safeSet('app.name', 'Athenna Framework')\n\nconsole.log(Config.get('app.name')) // MyAppName\n"})}),"\n",(0,i.jsx)(n.h4,{id:"configdelete",children:(0,i.jsx)(n.code,{children:"Config.delete()"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"delete()"})," method could be used to delete some configuration\nvalue:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Config } from '@athenna/config'\n\nConfig.delete('app.name')\n\nconsole.log(Config.get('app.name')) // undefined\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Just like ",(0,i.jsx)(n.code,{children:"Config.set()"})," method, ",(0,i.jsx)(n.code,{children:"Config.delete()"})," does\nnot change the values in the configuration file, only\nin runtime. To do that you will need to use the\n",(0,i.jsx)(n.code,{children:"Config.rewrite()"})," method."]})}),"\n",(0,i.jsx)(n.h4,{id:"configrewrite",children:(0,i.jsx)(n.code,{children:"Config.rewrite()"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"rewrite()"})," method is very useful for rewriting the\nconfiguration file. Very useful when you want to\nprogrammatically modify the configuration file source code.\nThis method uses the ",(0,i.jsx)(n.a,{href:"https://github.com/unjs/magicast",children:"magicast"}),"\nlibrary under the hood to do that:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Config } from '@athenna/config'\n\nConfig.set('app.name', 'Athenna Framework')\n\nawait Config.rewrite('app')\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["Let's suppose that you want to set a function as a value,\nyou can use builders.functionCall function of ",(0,i.jsx)(n.a,{href:"https://github.com/unjs/magicast",children:"magicast"}),"\nlibrary to do that:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { builders } from 'magicast'\nimport { Config } from '@athenna/config'\n\nConfig.set('app.name', builders.functionCall('Env', ['MY_APP_NAME']))\n\nawait Config.rewrite('app')\n"})}),(0,i.jsxs)(n.p,{children:["The example above will produce the following code in ",(0,i.jsx)(n.code,{children:"Path.config('app.ts')"}),":"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export default {\n    name: Env('MY_APP_NAME')\n    ...\n}\n"})})]}),"\n",(0,i.jsx)(n.h4,{id:"configis",children:(0,i.jsx)(n.code,{children:"Config.is()"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"is()"})," method could be used to validate if your\nconfiguration value matches some other value:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Config } from '@athenna/config'\n\nif (Config.is('app.name', 'Athenna')) {\n  // do something\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can set an array as second parameter to ",(0,i.jsx)(n.code,{children:"is()"})," method.\nIf any value in the array matches the configuration value,\nthe method will return true:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Config } from '@athenna/config'\n\nif (Config.is('app.name', ['Athenna', 'MyAppName'])) {\n  // do something\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"isNot()"})," method to do the negated validation."]})}),"\n",(0,i.jsx)(n.h4,{id:"configexistsall",children:(0,i.jsx)(n.code,{children:"Config.existsAll()"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"existsAll()"})," method could be used to validate if an\narray of configuration keys exists or not:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Config } from '@athenna/config'\n\nif (Config.existsAll(['app.name', 'app.version'])) {\n  // do something\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"notExistsAll()"})," method to do the negate\nvalidation."]})}),"\n",(0,i.jsx)(n.h4,{id:"configclear",children:(0,i.jsx)(n.code,{children:"Config.clear()"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"clear()"})," method could be used to clear all the configuration\nvalues:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Config } from '@athenna/config'\n\nConfig.clear()\n\nconsole.log(Config.get()) // {}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"configload",children:(0,i.jsx)(n.code,{children:"Config.load()"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"load()"})," method could be used to load some configuration\nfile path:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Path } from '@athenna/common'\nimport { Config } from '@athenna/config'\n\nawait Config.load(Path.stubs('config/test.ts'))\n\nconsole.log(Config.get('test')) // { ... }\n"})}),"\n",(0,i.jsx)(n.h4,{id:"configsafeload",children:(0,i.jsx)(n.code,{children:"Config.safeLoad()"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"safeLoad()"})," method will only load the file path if it\nis not defined:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Path } from '@athenna/common'\nimport { Config } from '@athenna/config'\n\nawait Config.safeLoad(Path.stubs('config/app.js'))\n"})}),"\n",(0,i.jsx)(n.h4,{id:"configloadall",children:(0,i.jsx)(n.code,{children:"Config.loadAll()"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"loadAll"})," method will load all files found inside some\nconfiguration path:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Path } from '@athenna/common'\nimport { Config } from '@athenna/config'\n\nawait Config.loadAll(Path.stubs('config'))\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"get-configuration-with-value-decorator",children:["Get configuration with ",(0,i.jsx)(n.code,{children:"@Value()"})," decorator"]}),"\n",(0,i.jsxs)(n.p,{children:["Instead of using the ",(0,i.jsx)(n.code,{children:"Config.get()"})," method to get a configuration\nvalue, you can use the ",(0,i.jsx)(n.code,{children:"@Value()"})," annotation in your classes to\nautomatically add it value to a class property:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Value } from '@athenna/config'\n\nexport class UserService {\n  @Value('api.users') \ud83d\udc48\n  public api: string\n}\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["Just like ",(0,i.jsx)(n.code,{children:"Config.get()"})," method, you can set a default value\nwhen using the ",(0,i.jsx)(n.code,{children:"@Value()"})," annotation:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"@Value('api.users', 'http://localhost:3000/users') \ud83d\udc48\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"define-my-own-configuration-path",children:"Define my own configuration path"}),"\n",(0,i.jsxs)(n.p,{children:["If you are using the ",(0,i.jsx)(n.a,{href:"https://athenna.io/docs/getting-started/installation#project-structure",children:"slim"}),"\nproject structure, or you are building your own project\nstructure, you are not going to have the ",(0,i.jsx)(n.code,{children:"config"})," directory\nin your project root path."]}),"\n",(0,i.jsx)(n.p,{children:"You will have two options now:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["If you are using the ",(0,i.jsx)(n.a,{href:"https://athenna.io/docs/getting-started/installation#project-structure",children:"slim"}),"\nproject structure, you can create the ",(0,i.jsx)(n.code,{children:"config"})," directory inside your ",(0,i.jsx)(n.code,{children:"src"})," folder."]}),"\n",(0,i.jsxs)(n.li,{children:["Specify to Athenna a different path to your ",(0,i.jsx)(n.code,{children:"config"})," directory."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://athenna.io/docs/getting-started/installation#project-structure",children:"slim"}),"\nproject structure is using the second option above to\nspecify to Athenna that the configuration files will\nbe inside of ",(0,i.jsx)(n.code,{children:"src/config"})," directory. Check the examples\nbellow to see how this implementation works."]})}),"\n",(0,i.jsxs)(n.p,{children:["To specify your application directories to Athenna, you can\nopen the ",(0,i.jsx)(n.code,{children:".athennarc.json"})," file and add the ",(0,i.jsx)(n.code,{children:"directories"}),"\nproperty to it. If you are using ",(0,i.jsx)(n.a,{href:"https://athenna.io/docs/getting-started/installation#project-structure",children:"slim"}),"\nproject structure, you will already have this property\ndefined."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"directories"})," property is an object that maps the directory\nbase path that the ",(0,i.jsx)(n.a,{href:"https://athenna.io/docs/digging-deeper/helpers#path",children:(0,i.jsx)(n.code,{children:"Path"})}),"\nhelper will use to resolve your application paths:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Path } from '@athenna/common'\n\nconsole.log(Path.config()) // /path/to/your/project/config\n"})}),"\n",(0,i.jsxs)(n.p,{children:["All the ",(0,i.jsx)(n.code,{children:"directories"})," key names follow the ",(0,i.jsx)(n.a,{href:"https://athenna.io/docs/digging-deeper/helpers#path",children:(0,i.jsx)(n.code,{children:"Path"})}),"\nclass methods names. This means that if you want to change\nwhat is returned by the ",(0,i.jsx)(n.code,{children:"Path.config()"})," method, you will\nneed to add the ",(0,i.jsx)(n.code,{children:"config"})," key to the ",(0,i.jsx)(n.code,{children:"directories"})," object:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "directories": {\n    "config": "src/config"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now when calling the ",(0,i.jsx)(n.code,{children:"Path.config()"})," method, it will return\na different path:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Path } from '@athenna/common'\n\nconsole.log(Path.config()) // /path/to/your/project/src/config \ud83d\udc48\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Athenna always rely on ",(0,i.jsx)(n.a,{href:"https://athenna.io/docs/digging-deeper/helpers#path",children:(0,i.jsx)(n.code,{children:"Path"})}),"\nclass methods to find files and directories that are used\ninternally by the framework, like configuration file, route\nfiles, entry points and many others."]}),"\n",(0,i.jsxs)(n.p,{children:["Check ",(0,i.jsx)(n.a,{href:"https://athenna.io/docs/getting-started/athennarc-file#the-directories-property",children:"the directories property documentation section"}),"\nfor more information about the ",(0,i.jsx)(n.code,{children:"directories"})," property. And\ncheck ",(0,i.jsx)(n.a,{href:"https://athenna.io/docs/getting-started/directory-structure#do-your-own-structure",children:"the do your own structure documentation section"}),"\nfor more information about how to create your own project\nstructure."]}),"\n",(0,i.jsx)(n.h2,{id:"safe-loading-configuration-files",children:"Safe loading configuration files"}),"\n",(0,i.jsxs)(n.p,{children:["Athenna got multiple types of applications, while using the framework\nyou will notice that some times you could end up igniting your application\ntwice. Let's suppose you are using ",(0,i.jsx)(n.code,{children:"node artisan serve"})," command to start\nyour application, this command will first ignite your application by Artisan\nand them by the HTTP server."]}),"\n",(0,i.jsxs)(n.p,{children:["This is usually not a problem at all, but depending on how you have created\nyour environment it could become one. To avoid reloading configuration\nfiles in these situations, you can set the ",(0,i.jsx)(n.code,{children:"loadConfigSafe"})," option as ",(0,i.jsx)(n.code,{children:"true"}),"\nin ",(0,i.jsx)(n.code,{children:"Ignite::load()"})," static method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"title=\"Path.bootstrap('main.ts')\"",children:"import { Ignite } from '@athenna/core'\n\nconst ignite = await new Ignite().load(import.meta.url, {\n  loadConfigSafe: true, \ud83d\udc48\n})\n\nawait ignite.httpServer()\n"})}),"\n",(0,i.jsx)(n.h2,{id:"debug-mode",children:"Debug mode"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"debug"})," option in your ",(0,i.jsx)(n.code,{children:"Path.config('app.ts')"})," configuration\nfile determines how much information about your application\nis actually displayed to you and for who is going to consume\nyour application. By default, this option is set to respect\nthe value of the ",(0,i.jsx)(n.code,{children:"APP_DEBUG"})," environment variable, which is\nstored in your ",(0,i.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,i.jsxs)(n.p,{children:["For local development, you should set the ",(0,i.jsx)(n.code,{children:"APP_DEBUG"}),"\nenvironment variable to ",(0,i.jsx)(n.code,{children:"true"}),". In your production environment,\nthis value should always be ",(0,i.jsx)(n.code,{children:"false"}),", if the variable is\nset to ",(0,i.jsx)(n.code,{children:"true"})," in production, you risk exposing sensitive\nconfiguration values to your application's end users."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(7294);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
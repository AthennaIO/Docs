"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[3650],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return t?a.createElement(h,r(r({ref:n},d),{},{components:t})):a.createElement(h,r({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6107:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(7462),o=(t(7294),t(3905));const i={title:"Configuration",sidebar_position:4,description:"Understand the initial configurations of your project."},r="Configuration",l={unversionedId:"getting-started/configuration",id:"getting-started/configuration",title:"Configuration",description:"Understand the initial configurations of your project.",source:"@site/docs/getting-started/configuration.mdx",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/docs/getting-started/configuration",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/getting-started/configuration.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Configuration",sidebar_position:4,description:"Understand the initial configurations of your project."},sidebar:"tutorialSidebar",previous:{title:"AthennaRC File",permalink:"/docs/getting-started/athennarc-file"},next:{title:"Directory Structure",permalink:"/docs/getting-started/directory-structure"}},p={},s=[{value:"Environment configuration",id:"environment-configuration",level:2},{value:"Determining the current environment",id:"determining-the-current-environment",level:3},{value:"Get an environment variable value",id:"get-an-environment-variable-value",level:3},{value:"Custom environment file path",id:"custom-environment-file-path",level:2},{value:"Configuration files",id:"configuration-files",level:2},{value:"Manipulating configuration values",id:"manipulating-configuration-values",level:3},{value:"<code>Config.get()</code>",id:"configget",level:4},{value:"<code>Config.set()</code>",id:"configset",level:4},{value:"<code>Config.safeSet()</code>",id:"configsafeset",level:4},{value:"<code>Config.delete()</code>",id:"configdelete",level:4},{value:"<code>Config.rewrite()</code>",id:"configrewrite",level:4},{value:"<code>Config.is()</code>",id:"configis",level:4},{value:"<code>Config.existsAll()</code>",id:"configexistsall",level:4},{value:"<code>Config.clear()</code>",id:"configclear",level:4},{value:"<code>Config.load()</code>",id:"configload",level:4},{value:"<code>Config.safeLoad()</code>",id:"configsafeload",level:4},{value:"<code>Config.loadAll()</code>",id:"configloadall",level:4},{value:"Define my own configuration path",id:"define-my-own-configuration-path",level:3},{value:"Safe loading configuration files",id:"safe-loading-configuration-files",level:2},{value:"Debug mode",id:"debug-mode",level:2}],d={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Understand the initial configurations of your project."),(0,o.kt)("h2",{id:"environment-configuration"},"Environment configuration"),(0,o.kt)("p",null,"It is often helpful to have different configuration values\nbased on the environment where the application is running.\nFor example, you may wish to use a different storage driver\nlocally than you do on your production server."),(0,o.kt)("p",null,"To make this a cinch, Athenna utilizes the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},"dotenv"),"\nNode.js library. In a fresh Athenna installation, the root\ndirectory of your application will contain a ",(0,o.kt)("inlineCode",{parentName:"p"},".env.example")," file\nthat defines many common environment variables. During the\nAthenna installation process, this file will automatically\nbe copied to ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".env.test"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are not using the slim project structure, you can\ncreate a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in the root path of your application\nand Athenna will automatically resolve it for you.")),(0,o.kt)("p",null,"Athenna default ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file contains some common configuration\nvalues that may differ based on whether your application is\nrunning locally or on a production. These values are then\nretrieved from various Athenna configuration files within the\n",(0,o.kt)("inlineCode",{parentName:"p"},"config")," directory using Athenna ",(0,o.kt)("inlineCode",{parentName:"p"},"Env()")," function."),(0,o.kt)("p",null,"If you are developing with a team, you may wish to continue\nincluding a ",(0,o.kt)("inlineCode",{parentName:"p"},".env.example")," file with your application. By\nputting placeholder values in the example configuration file,\nother developers on your team can clearly see which environment\nvariables are needed to run your application."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Any variable in your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file can be overridden by\nexternal environment variables such as server-level or\nsystem-level environment variables. But off course you\ncan turn off this behavior setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"OVERRIDE_ENV=true"),"\nvariable before running your application, if this variable\nis set to true, all environment variables set in ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),"\nwill override the externals.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file should not be committed to your application\nsource control, since each developer/server using your\napplication could require a different environment configuration.\nFurthermore, this would be a security risk in the event an\nintruder gains access to your source control repository,\nsince any sensitive credentials would get exposed.")),(0,o.kt)("h3",{id:"determining-the-current-environment"},"Determining the current environment"),(0,o.kt)("p",null,"Before loading your application's environment variables,\nAthenna determines if either the ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," environment\nvariable has been externally provided or if the ",(0,o.kt)("inlineCode",{parentName:"p"},"--env")," Artisan\nflag has been specified. If so, Athenna will attempt to load\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},".env.${NODE_ENV}")," file if it exists. If it does not exist,\nAthenna will try to find the ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," value inside the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file,\nif it exists, Athenna will save its value and repeat the process\nabove. Finally, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," is not present in the file,\nAthenna will load the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file by default if it exists."),(0,o.kt)("p",null,"Running providing ",(0,o.kt)("inlineCode",{parentName:"p"},"--env")," flag in Artisan:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./node artisan serve --env=local\n")),(0,o.kt)("p",null,"Running providing ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," externally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NODE_ENV=local ./node artisan serve\n")),(0,o.kt)("p",null,"Let's check some practical examples. This is the default\n",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file that comes in Athenna project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dotenv"},"HOST=localhost\nPORT=3000\nNODE_ENV=local\n\nAPP_NAME=Athenna\nAPP_DEBUG=true\nAPP_URL=http://${HOST}:${PORT}\nAPP_DOMAIN=${HOST}\nAPP_DOCUMENTATION=${APP_URL}\nAPP_SOURCE=https://github.com/AthennaIO\n\nLOG_HTTP=true\nLOG_CHANNEL=application\n")),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file above, you can see that we have the\n",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV=local"),". This means that if you create a new\n",(0,o.kt)("inlineCode",{parentName:"p"},".env.local")," file in your project root path, Athenna\nwill load it instead of ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," if running your application\nwithout a predefined environment."),(0,o.kt)("h3",{id:"get-an-environment-variable-value"},"Get an environment variable value"),(0,o.kt)("p",null,"You can get environment variables using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Env()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Env } from '@athenna/config'\n\nconst defaultValue = 'Athenna'\n\nconst appName = Env('APP_NAME', defaultValue)\n")),(0,o.kt)("p",null,"All environment variables in your .env file and inside\n",(0,o.kt)("inlineCode",{parentName:"p"},"process.env")," object are always interpreted as strings.\nBut when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Env()")," function, it will auto cast the\nvalue for you. Check the comparison:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Value in .env"),(0,o.kt)("th",{parentName:"tr",align:"right"},"Value returned by Env function"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"true ",(0,o.kt)("strong",{parentName:"td"},"(boolean)")),(0,o.kt)("td",{parentName:"tr",align:"right"},"true ",(0,o.kt)("strong",{parentName:"td"},"(boolean)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},'"true" ',(0,o.kt)("strong",{parentName:"td"},"(string)")),(0,o.kt)("td",{parentName:"tr",align:"right"},"true ",(0,o.kt)("strong",{parentName:"td"},"(boolean)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"10 ",(0,o.kt)("strong",{parentName:"td"},"(number)")),(0,o.kt)("td",{parentName:"tr",align:"right"},"10 ",(0,o.kt)("strong",{parentName:"td"},"(number)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},'"10" ',(0,o.kt)("strong",{parentName:"td"},"(string)")),(0,o.kt)("td",{parentName:"tr",align:"right"},"10 ",(0,o.kt)("strong",{parentName:"td"},"(number)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"10.090909 ",(0,o.kt)("strong",{parentName:"td"},"(float)")),(0,o.kt)("td",{parentName:"tr",align:"right"},"10.090909 ",(0,o.kt)("strong",{parentName:"td"},"(float)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},'"10.090909" ',(0,o.kt)("strong",{parentName:"td"},"(string)")),(0,o.kt)("td",{parentName:"tr",align:"right"},"10.090909 ",(0,o.kt)("strong",{parentName:"td"},"(float)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},'{"name":"Paulo"} ',(0,o.kt)("strong",{parentName:"td"},"(json)")),(0,o.kt)("td",{parentName:"tr",align:"right"},'{ name: "Paulo" } ',(0,o.kt)("strong",{parentName:"td"},"(Object)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},'"{"name":"Paulo"}" ',(0,o.kt)("strong",{parentName:"td"},"(string)")),(0,o.kt)("td",{parentName:"tr",align:"right"},'{ name: "Paulo" } ',(0,o.kt)("strong",{parentName:"td"},"(Object)"))))),(0,o.kt)("p",null,"Let's see a more practical example of it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"process.env.PORT = '3000'\nprocess.env.APP_DEBUG = 'true'\nprocess.env.APP_JSON = '{\"name\":\"Paulo\"}'\n\nconsole.log(Env('PORT')) // 3000 <- number\nconsole.log(Env('APP_DEBUG')) // true <- boolean\nconsole.log(Env('APP_JSON')) // { name: \"Paulo\" } <- object\n")),(0,o.kt)("p",null,"There will certainly have scenarios in your business rule\nwhere you explicitly need an environment variable with value\n",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"10")," or ",(0,o.kt)("inlineCode",{parentName:"p"},'{"name":"Paulo"}')," to be a string. To solve\nthis, you can turn off the auto cast when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Env()"),"\nfunction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"process.env.PORT = '3000'\nprocess.env.APP_DEBUG = 'true'\nprocess.env.APP_JSON = '{\"name\":\"Paulo\"}'\n\nconst autoCast = false\nconst defaultValue = undefined\n\nconsole.log(Env('PORT', defaultValue, autoCast)) // 3000 <- string\nconsole.log(Env('APP_DEBUG', defaultValue, autoCast)) // true <- string\nconsole.log(Env('APP_JSON', defaultValue, autoCast)) // {\"name\":\"Paulo\"} <- string\n")),(0,o.kt)("p",null,"Environment variables can parse other environment variables\ntoo. See the example above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dotenv"},"HOST=localhost\nPORT=3000\n\nAPP_URL=http://${HOST}:${PORT}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(Env('APP_URL')) // \"http://localhost:3000\"\n")),(0,o.kt)("h2",{id:"custom-environment-file-path"},"Custom environment file path"),(0,o.kt)("p",null,"You can also change the name and the path of your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file.\nTo do that you need to set the new path to ",(0,o.kt)("inlineCode",{parentName:"p"},"Ignite::load()")," static method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=\"Path.bootstrap('dev.ts')\"",title:"\"Path.bootstrap('dev.ts')\""},"import { Ignite } from '@athenna/core'\n\nconst ignite = await new Ignite().load(import.meta.url, {\n  envPath: './bootstrap/.env.dev' \ud83d\udc48\n})\n\nawait ignite.httpServer()\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Always remember that when using relative paths to set something\nin Athenna, you need to use your project root path as reference,\njust like in the example above.")),(0,o.kt)("h2",{id:"configuration-files"},"Configuration files"),(0,o.kt)("p",null,"All the configuration files for the Athenna framework are\nstored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," directory if you are using the\ndefault project template. Each option is documented, so\nfeel free to look through the files and get familiar with\nthe options available to you."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The slim template is configured to use ",(0,o.kt)("inlineCode",{parentName:"p"},"src/config")," path\ninstead. But the folder does not exist in the project by\ndefault. You can check how to change this path ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/configuration#define-my-own-configuration-path"},"in here"),".")),(0,o.kt)("p",null,"Athenna needs almost no additional configuration out of\nthe box. You are free to get started developing! Each\noption is documented, so feel free to look through the\nfiles and get familiar with the options available to you.\nIt contains several options such as debug, environment and\nlocale that you may wish to change, according to your\napplication."),(0,o.kt)("h3",{id:"manipulating-configuration-values"},"Manipulating configuration values"),(0,o.kt)("p",null,"You may easily access your configuration values using the\nglobal ",(0,o.kt)("inlineCode",{parentName:"p"},"Config")," helper class. The configuration values may\nbe accessed using ",(0,o.kt)("inlineCode",{parentName:"p"},'"dot (.)"')," syntax, which includes the\nname of the file and option you wish to access. Let's cover\nsome methods bellow:"),(0,o.kt)("h4",{id:"configget"},(0,o.kt)("inlineCode",{parentName:"h4"},"Config.get()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"get()")," method will return the value of your configuration.\nYou can also set a default value as second parameter that will\nbe returned if the configuration option does not exist:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config } from '@athenna/config'\n\nconst defaultValue = 'Athenna'\nconst name = Config.get('app.name', defaultValue)\n\nconsole.log(name) // MyAppName\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can get all the configuration values using ",(0,o.kt)("inlineCode",{parentName:"p"},"get()")," method\nwithout any key:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(Config.get()) // { app: {...}, http: {...}, ... }\n"))),(0,o.kt)("h4",{id:"configset"},(0,o.kt)("inlineCode",{parentName:"h4"},"Config.set()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"set()")," method is very useful to set or change the value\nof some configuration in runtime:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config } from '@athenna/config'\n\nConfig.set('app.name', 'Athenna Framework')\n\nconsole.log(Config.get('app.name')) // Athenna Framework\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Config.set()")," method does not change the values in\nthe configuration file, only in runtime. To do that, you\nwill need to use the ",(0,o.kt)("a",{parentName:"p",href:"https://athenna.io/docs/getting-started/configuration#configrewrite"},"Config.rewrite()"),"\nmethod.")),(0,o.kt)("h4",{id:"configsafeset"},(0,o.kt)("inlineCode",{parentName:"h4"},"Config.safeSet()")),(0,o.kt)("p",null,"If you are not sure if some configuration value is already\nset of not, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"safeSet()")," method instead to\nnot overwrite something that was already defined:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config } from '@athenna/config'\n\nconsole.log(Config.get('app.name')) // MyAppName\n\nConfig.safeSet('app.name', 'Athenna Framework')\n\nconsole.log(Config.get('app.name')) // MyAppName\n")),(0,o.kt)("h4",{id:"configdelete"},(0,o.kt)("inlineCode",{parentName:"h4"},"Config.delete()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"delete()")," method could be used to delete some configuration\nvalue:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config } from '@athenna/config'\n\nConfig.delete('app.name')\n\nconsole.log(Config.get('app.name')) // undefined\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Just like ",(0,o.kt)("inlineCode",{parentName:"p"},"Config.set()")," method, ",(0,o.kt)("inlineCode",{parentName:"p"},"Config.delete()")," does\nnot change the values in the configuration file, only\nin runtime. To do that you will need to use the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Config.rewrite()")," method.")),(0,o.kt)("h4",{id:"configrewrite"},(0,o.kt)("inlineCode",{parentName:"h4"},"Config.rewrite()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rewrite()")," method is very useful for rewriting the\nconfiguration file. Very useful when you want to\nprogrammatically modify the configuration file source code.\nThis method uses the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/unjs/magicast"},"magicast"),"\nlibrary under the hood to do that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config } from '@athenna/config'\n\nConfig.set('app.name', 'Athenna Framework')\n\nawait Config.rewrite('app')\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Let's suppose that you want to set a function as a value,\nyou can use builders.functionCall function of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/unjs/magicast"},"magicast"),"\nlibrary to do that:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { builders } from 'magicast'\nimport { Config } from '@athenna/config'\n\nConfig.set('app.name', builders.functionCall('Env', ['MY_APP_NAME']))\n\nawait Config.rewrite('app')\n")),(0,o.kt)("p",{parentName:"admonition"},"The example above will produce the following code in ",(0,o.kt)("inlineCode",{parentName:"p"},"Path.config('app.ts')"),":"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n    name: Env('MY_APP_NAME')\n    ...\n}\n"))),(0,o.kt)("h4",{id:"configis"},(0,o.kt)("inlineCode",{parentName:"h4"},"Config.is()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"is()")," method could be used to validate if your\nconfiguration value matches some other value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config } from '@athenna/config'\n\nif (Config.is('app.name', 'Athenna')) {\n  // do something\n}\n")),(0,o.kt)("p",null,"You can set an array as second parameter to ",(0,o.kt)("inlineCode",{parentName:"p"},"is()")," method.\nIf any value in the array matches the configuration value,\nthe method will return true:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config } from '@athenna/config'\n\nif (Config.is('app.name', ['Athenna', 'MyAppName'])) {\n  // do something\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"isNot()")," method to do the negated validation.")),(0,o.kt)("h4",{id:"configexistsall"},(0,o.kt)("inlineCode",{parentName:"h4"},"Config.existsAll()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"existsAll()")," method could be used to validate if an\narray of configuration keys exists or not:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config } from '@athenna/config'\n\nif (Config.existsAll(['app.name', 'app.version'])) {\n  // do something\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"notExistsAll()")," method to do the negate\nvalidation.")),(0,o.kt)("h4",{id:"configclear"},(0,o.kt)("inlineCode",{parentName:"h4"},"Config.clear()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"clear()")," method could be used to clear all the configuration\nvalues:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config } from '@athenna/config'\n\nConfig.clear()\n\nconsole.log(Config.get()) // {}\n")),(0,o.kt)("h4",{id:"configload"},(0,o.kt)("inlineCode",{parentName:"h4"},"Config.load()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"load()")," method could be used to load some configuration\nfile path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Path } from '@athenna/common'\nimport { Config } from '@athenna/config'\n\nawait Config.load(Path.stubs('config/test.ts'))\n\nconsole.log(Config.get('test')) // { ... }\n")),(0,o.kt)("h4",{id:"configsafeload"},(0,o.kt)("inlineCode",{parentName:"h4"},"Config.safeLoad()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"safeLoad()")," method will only load the file path if it\nis not defined:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Path } from '@athenna/common'\nimport { Config } from '@athenna/config'\n\nawait Config.safeLoad(Path.stubs('config/app.js'))\n")),(0,o.kt)("h4",{id:"configloadall"},(0,o.kt)("inlineCode",{parentName:"h4"},"Config.loadAll()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"loadAll")," method will load all files found inside some\nconfiguration path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Path } from '@athenna/common'\nimport { Config } from '@athenna/config'\n\nawait Config.loadAll(Path.stubs('config'))\n")),(0,o.kt)("h3",{id:"define-my-own-configuration-path"},"Define my own configuration path"),(0,o.kt)("p",null,"If you are using the ",(0,o.kt)("a",{parentName:"p",href:"https://athenna.io/docs/getting-started/installation#project-structure"},"slim"),"\nproject structure, or you are building your own project\nstructure, you are not going to have the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," directory\nin your project root path."),(0,o.kt)("p",null,"You will have two options now:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If you are using the ",(0,o.kt)("a",{parentName:"li",href:"https://athenna.io/docs/getting-started/installation#project-structure"},"slim"),"\nproject structure, you can create the ",(0,o.kt)("inlineCode",{parentName:"li"},"config")," directory inside your ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," folder."),(0,o.kt)("li",{parentName:"ol"},"Specify to Athenna a different path to your ",(0,o.kt)("inlineCode",{parentName:"li"},"config")," directory.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://athenna.io/docs/getting-started/installation#project-structure"},"slim"),"\nproject structure is using the second option above to\nspecify to Athenna that the configuration files will\nbe inside of ",(0,o.kt)("inlineCode",{parentName:"p"},"src/config")," directory. Check the examples\nbellow to see how this implementation works.")),(0,o.kt)("p",null,"To specify your application directories to Athenna, you can\nopen the ",(0,o.kt)("inlineCode",{parentName:"p"},".athennarc.json")," file and add the ",(0,o.kt)("inlineCode",{parentName:"p"},"directories"),"\nproperty to it. If you are using ",(0,o.kt)("a",{parentName:"p",href:"https://athenna.io/docs/getting-started/installation#project-structure"},"slim"),"\nproject structure, you will already have this property\ndefined."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"directories")," property is an object that maps the directory\nbase path that the ",(0,o.kt)("a",{parentName:"p",href:"https://athenna.io/docs/digging-deeper/helpers#path"},(0,o.kt)("inlineCode",{parentName:"a"},"Path")),"\nhelper will use to resolve your application paths:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Path } from '@athenna/common'\n\nconsole.log(Path.config()) // /path/to/your/project/config\n")),(0,o.kt)("p",null,"All the ",(0,o.kt)("inlineCode",{parentName:"p"},"directories")," key names follow the ",(0,o.kt)("a",{parentName:"p",href:"https://athenna.io/docs/digging-deeper/helpers#path"},(0,o.kt)("inlineCode",{parentName:"a"},"Path")),"\nclass methods names. This means that if you want to change\nwhat is returned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Path.config()")," method, you will\nneed to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," key to the ",(0,o.kt)("inlineCode",{parentName:"p"},"directories")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "directories": {\n    "config": "src/config"\n  }\n}\n')),(0,o.kt)("p",null,"Now when calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Path.config()")," method, it will return\na different path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Path } from '@athenna/common'\n\nconsole.log(Path.config()) // /path/to/your/project/src/config \ud83d\udc48\n")),(0,o.kt)("p",null,"Athenna always rely on ",(0,o.kt)("a",{parentName:"p",href:"https://athenna.io/docs/digging-deeper/helpers#path"},(0,o.kt)("inlineCode",{parentName:"a"},"Path")),"\nclass methods to find files and directories that are used\ninternally by the framework, like configuration file, route\nfiles, entry points and many others."),(0,o.kt)("p",null,"Check ",(0,o.kt)("a",{parentName:"p",href:"https://athenna.io/docs/getting-started/athennarc-file#the-directories-property"},"the directories property documentation section"),"\nfor more information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"directories")," property. And\ncheck ",(0,o.kt)("a",{parentName:"p",href:"https://athenna.io/docs/getting-started/directory-structure#do-your-own-structure"},"the do your own structure documentation section"),"\nfor more information about how to create your own project\nstructure."),(0,o.kt)("h2",{id:"safe-loading-configuration-files"},"Safe loading configuration files"),(0,o.kt)("p",null,"Athenna got multiple types of applications, while using the framework\nyou will notice that some times you could end up igniting your application\ntwice. Let's suppose you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"./node artisan serve")," command to start\nyour application, this command will first ignite your application by Artisan\nand them by the HTTP server."),(0,o.kt)("p",null,"This is usually not a problem at all, but depending on how you have created\nyour environment it could become one. To avoid reloading configuration\nfiles in these situations, you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"loadConfigSafe")," option as ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\nin ",(0,o.kt)("inlineCode",{parentName:"p"},"Ignite::load()")," static method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=\"Path.bootstrap('main.ts')\"",title:"\"Path.bootstrap('main.ts')\""},"import { Ignite } from '@athenna/core'\n\nconst ignite = await new Ignite().load(import.meta.url, {\n  loadConfigSafe: true, \ud83d\udc48\n})\n\nawait ignite.httpServer()\n")),(0,o.kt)("h2",{id:"debug-mode"},"Debug mode"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"debug")," option in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Path.config('app.ts')")," configuration\nfile determines how much information about your application\nis actually displayed to you and for who is going to consume\nyour application. By default, this option is set to respect\nthe value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"APP_DEBUG")," environment variable, which is\nstored in your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("p",null,"For local development, you should set the ",(0,o.kt)("inlineCode",{parentName:"p"},"APP_DEBUG"),"\nenvironment variable to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". In your production environment,\nthis value should always be ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", if the variable is\nset to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in production, you risk exposing sensitive\nconfiguration values to your application's end users."))}c.isMDXComponent=!0}}]);
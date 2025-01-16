"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[6459],{6355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"getting-started/installation","title":"Installation","description":"How to install and set up your first Athenna project.","source":"@site/docs/getting-started/installation.mdx","sourceDirName":"getting-started","slug":"/getting-started/installation","permalink":"/docs/getting-started/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/AthennaIO/Docs/tree/main/docs/getting-started/installation.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Installation","sidebar_position":1,"description":"How to install and set up your first Athenna project."},"sidebar":"tutorialSidebar","next":{"title":"Athenna RC File","permalink":"/docs/getting-started/athennarc-file"}}');var i=t(4848),o=t(8453),r=t(7049);const s={title:"Installation",sidebar_position:1,description:"How to install and set up your first Athenna project."},c="Installation",l={},h=[{value:"Meet Athenna",id:"meet-athenna",level:2},{value:"Why Athenna?",id:"why-athenna",level:2},{value:"A progressive framework",id:"a-progressive-framework",level:3},{value:"A scalable framework",id:"a-scalable-framework",level:3},{value:"An agnostic framework",id:"an-agnostic-framework",level:3},{value:"A community framework",id:"a-community-framework",level:3},{value:"Your first Athenna project",id:"your-first-athenna-project",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing via package manager",id:"installing-via-package-manager",level:3},{value:"Application type",id:"application-type",level:4},{value:"Running your application",id:"running-your-application",level:2},{value:"What the \ud83e\udd2c is <code>Path.bin(&#39;main.ts&#39;)</code>?",id:"what-the--is-pathbinmaints",level:3},{value:"Initial configuration",id:"initial-configuration",level:2},{value:"Environment based configuration",id:"environment-based-configuration",level:2},{value:"Workspace and runtime configurations",id:"workspace-and-runtime-configurations",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"REST API application",id:"rest-api-application",level:3},{value:"Command Line Interface (CLI) application",id:"command-line-interface-cli-application",level:3},{value:"CRON Job application",id:"cron-job-application",level:3},{value:"Web application",id:"web-application",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,i.jsx)(n.p,{children:"How to install and set up your first Athenna project."}),"\n",(0,i.jsx)(n.h2,{id:"meet-athenna",children:"Meet Athenna"}),"\n",(0,i.jsx)(n.p,{children:"Athenna is a framework written specially for the Node.js runtime\nwith expressive and elegant syntax. The framework provides a reliable\ncode foundation and starting point for creating your application,\nallowing you to focus on creating something amazing while we sweat the\ndetails."}),"\n",(0,i.jsx)(n.p,{children:"Athenna strives to provide an amazing developer experience while\nproviding powerful features such as thorough dependency injection,\nan expressive database abstraction layer, unit and e2e testing,\nand more."}),"\n",(0,i.jsxs)(n.p,{children:["Whether you are new to Node.js ecosystem or have years of experience,\nAthenna is a framework that can grow with you. We'll help you take\nyour first steps as a developer or give you a boost as you take your\nexpertise to the next level. We can't wait to see what you build, make\nsure to share it with us in our ",(0,i.jsx)(n.a,{href:"https://discord.gg/JdEbBAKw6X",children:"Discord community"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["New to Athenna? Check out the ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/@athennaio",children:"Athenna YouTube channel"}),"\nfor an infinity of hands-on videos!"]})}),"\n",(0,i.jsx)(n.h2,{id:"why-athenna",children:"Why Athenna?"}),"\n",(0,i.jsx)(n.p,{children:"There are a variety of tools and frameworks available to you when building\na software using Node.js. However, we believe Athenna is the best choice for\nbuilding modern microservices."}),"\n",(0,i.jsx)(n.h3,{id:"a-progressive-framework",children:"A progressive framework"}),"\n",(0,i.jsx)(n.p,{children:"We like to call Athenna a \"progressive\" framework. By that, we mean that\nAthenna grows with you. If you're just taking your first steps into backend\ndevelopment, Athenna's vast library of documentation, guides, and video\ntutorials will help you learn the ropes without becoming overwhelmed."}),"\n",(0,i.jsx)(n.p,{children:"If you're a senior developer, Athenna gives you robust tools for dependency\ninjection, unit and e2e testing, database abstracted layer and more.\nAthenna is fine-tuned for building professional applications and ready to\nhandle enterprise work loads."}),"\n",(0,i.jsx)(n.h3,{id:"a-scalable-framework",children:"A scalable framework"}),"\n",(0,i.jsxs)(n.p,{children:["Athenna is incredibly scalable. Thanks to the scaling-friendly nature of\nNode.js and great libraries like ",(0,i.jsx)(n.a,{href:"https://fastify.dev/",children:"Fastify"}),", horizontal\nscaling with Athenna is a breeze. In fact, Athenna REST API's have been\neasily scaled to handle hundreds of millions of requests per month."]}),"\n",(0,i.jsx)(n.h3,{id:"an-agnostic-framework",children:"An agnostic framework"}),"\n",(0,i.jsx)(n.p,{children:"Athenna is perfect for building modern software using microservices architecture.\nNo matter what type of application you are creating, be it a REST API, a CLI, a CRON Job,\nAthenna has a reliable solution foundation for each occasion, the only thing you will\nneed to take care is how your application will communicate with the external world."}),"\n",(0,i.jsx)(n.h3,{id:"a-community-framework",children:"A community framework"}),"\n",(0,i.jsxs)(n.p,{children:["Athenna is not reinventing the wheel, the framework combines the best packages\nin the Node.js ecosystem to offer the most robust and developer friendly\nframework. We are always seeking for talented developers like you to\nhelp us by ",(0,i.jsx)(n.a,{href:"https://github.com/athennaio",children:"contributing to the framework"})," and\nmake it even better."]}),"\n",(0,i.jsx)(n.h2,{id:"your-first-athenna-project",children:"Your first Athenna project"}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.p,{children:["First, you need to install ",(0,i.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"}),".\nWe recommend using ",(0,i.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",children:"nvm"})," to do that."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm#installing-and-updating",children:"Click here to install nvm and get npm and Node.js\nrunning on your machine."})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["After you install ",(0,i.jsx)(n.code,{children:"nvm"}),", we recommend you to install\nNode.js v20.x or above, but you can still use\nNode.js v16.x and above. Install Node.js v20.x by running:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nvm install 20\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We recommend setting Node.js v20.x as the default version, to do\nso with ",(0,i.jsx)(n.code,{children:"nvm"})," run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nvm alias default 20.8.1\n"})}),"\n",(0,i.jsx)(n.h3,{id:"installing-via-package-manager",children:"Installing via package manager"}),"\n",(0,i.jsx)(n.p,{children:"We want it to be as easy as possible to get started with\nAthenna. With that in mind, we developed a CLI to assist\nin the creation of a new project."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install -g @athenna/cli\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then you can run this command to generate your project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"athenna new my-project-name\n"})}),"\n",(0,i.jsx)(n.p,{children:"The installation process prompts for the following selections:"}),"\n",(0,i.jsx)(n.h4,{id:"application-type",children:"Application type"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"REST Api"})," application is ideal for creating a Http server\nusing REST architecture."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CLI"})," application is ideal for creating global CLI's to publish\nin some registry like npm."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CRON"})," application is ideal for creating schedulers that will run\nperiodic jobs, such as for maintenance or calling third-party APIs\nto collect up-to-date data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"WEB EDGE"})," application is ideal for creating full-stack applications\nusing ",(0,i.jsx)(n.a,{href:"https://edgejs.dev/docs/introduction",children:"Edge.js"})," as template engine\nto serve static HTML from the server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"WEB REACT"})," application is ideal for creating full-stack applications using\n",(0,i.jsx)(n.a,{href:"https://react.dev/",children:"React"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"WEB REACT SSR"})," application is ideal for creating full-stack applications using\n",(0,i.jsx)(n.a,{href:"https://react.dev/",children:"React"})," applying ",(0,i.jsx)(n.a,{href:"https://www.sanity.io/glossary/server-side-rendering",children:"SSR (Server Side Rendering)"}),"\ntechniques for faster page loads and to allow search engines to crawl your\npages for [SEO (Search Engine Optimization)(",(0,i.jsx)(n.a,{href:"https://searchengineland.com/guide/what-is-seo",children:"https://searchengineland.com/guide/what-is-seo"}),")","\npurposes."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"running-your-application",children:"Running your application"}),"\n",(0,i.jsx)(n.p,{children:"To run your application in development mode, run the following\ncommand:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"node artisan serve --watch\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"serve"})," command will look up for your ",(0,i.jsx)(r.A,{father:"bin",child:"main.ts"}),"\nfile to bootstrap your application with predefined configurations."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"watch"})," flag is meant to watch the file system for\nchanges and restart your application automatically when\ndoing some change on it."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"what-the--is-pathbinmaints",children:["What the \ud83e\udd2c is ",(0,i.jsx)(n.code,{children:"Path.bin('main.ts')"}),"?"]}),"\n",(0,i.jsx)(n.p,{children:"Well, Athenna tries a lot to be a framework without opinion, one thing\nthat some frameworks do that makes them to have a lot of opinion is defining\ncrucial file paths where you can't touch that file without breaking everything."}),"\n",(0,i.jsxs)(n.p,{children:["Athenna is not totally different from them in this aspect, as you can see,\nthe ",(0,i.jsx)(n.code,{children:"node artisan serve"})," command depends on the existence of the ",(0,i.jsx)(n.code,{children:"./bin/main.ts"}),'\nfile. To be able to be "opinion less" without losing DX (Developer Experience)\nwe ensure that you can easily configure this path the way you want by doing two\nthings:']}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In all places of our documentation you will see that we always use the\n",(0,i.jsx)(n.a,{href:"/docs/the-basics/helpers#path",children:(0,i.jsx)(n.code,{children:"Path"})})," helper to reference file paths, this\nway is easier for you to understand that the path directory you just see is\nconfigurable."]}),"\n",(0,i.jsxs)(n.li,{children:["Inside ",(0,i.jsx)(n.code,{children:".athennarc.json"})," file or the ",(0,i.jsx)(n.code,{children:"athenna"})," property of your ",(0,i.jsx)(n.code,{children:"package.json"})," you\nhave the ",(0,i.jsxs)(n.a,{href:"/docs/getting-started/athennarc-file#the-directories-property",children:[(0,i.jsx)(n.code,{children:"directories"})," property"]}),"\nwhere you can modify any path supported by the ",(0,i.jsx)(n.a,{href:"/docs/the-basics/helpers#path",children:(0,i.jsx)(n.code,{children:"Path"})})," helper."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Ok, now you might be asking yourself: what the \ud83e\udd2c is ",(0,i.jsx)(n.code,{children:".athennarc.json"}),"? Be patient, we\ngonna see later on this documentation page \ud83d\ude06."]}),"\n",(0,i.jsx)(n.h2,{id:"initial-configuration",children:"Initial configuration"}),"\n",(0,i.jsxs)(n.p,{children:["All of the configuration files for the Athenna framework are stored\nin the ",(0,i.jsx)(r.A,{father:"config"})," directory. Each option is documented, so feel\nfree to look through the files and get familiar with the options available\nto you."]}),"\n",(0,i.jsxs)(n.p,{children:["Athenna needs almost no additional configuration out of the box. You are\nfree to get started developing! However, you may wish to review the\n",(0,i.jsx)(r.A,{father:"config",child:"app.ts"})," file and its documentation. It contains several\noptions such as locale that you may wish to change according to your\napplication."]}),"\n",(0,i.jsx)(n.h2,{id:"environment-based-configuration",children:"Environment based configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Since many of Athenna's configuration option values may vary depending on\nwhether your application is running on your local machine or in production,\nmany important configuration values are defined using the ",(0,i.jsx)(n.code,{children:".env"})," file that\nexists at the root of your application."]}),"\n",(0,i.jsxs)(n.p,{children:["Your ",(0,i.jsx)(n.code,{children:".env"})," file should not be committed to your application's source control,\nsince each developer / server using your application could require a different\nenvironment configuration. Furthermore, this would be a security risk in the\nevent an intruder gains access to your source control repository, since any\nsensitive credentials would get exposed."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["For more information about the ",(0,i.jsx)(n.code,{children:".env"})," file and environment based configuration,\ncheck out the full ",(0,i.jsx)(n.a,{href:"/docs/getting-started/configuration",children:"configuration documentation"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"workspace-and-runtime-configurations",children:"Workspace and runtime configurations"}),"\n",(0,i.jsxs)(n.p,{children:["Inside the root directory of your project, there is a file\ncalled ",(0,i.jsx)(n.code,{children:".athennarc.json"})," or the ",(0,i.jsx)(n.code,{children:"athenna"})," property of your\n",(0,i.jsx)(n.code,{children:"package.json"}),". These configurations are used by Athenna\nfor configuring the workspace and certain runtime\nsettings of your Athenna application. Basically any configuration\nrelated to how the framework will bootstrap and behave should be\ndefined in these configuration."]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["Always remember that if you can't find the ",(0,i.jsx)(n.code,{children:".athennarc.json"})," file\nin the root path of you project, it will be defined inside of your\n",(0,i.jsx)(n.code,{children:"package.json"})," in the ",(0,i.jsx)(n.code,{children:"athenna"})," property."]}),(0,i.jsxs)(n.p,{children:["For more information about the RC file, more details about each one\nof its options and also how to define your own properties inside of it\ncheck out the full ",(0,i.jsx)(n.a,{href:"/docs/getting-started/athennarc-file",children:"Athenna RC file documentation"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsx)(n.p,{children:"Now that you have created your Athenna project, you may be\nwondering what to learn next. First, we strongly recommend\nbecoming familiar with how Athenna works by reading the\nfollowing documentation:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/architecture-concepts/application-lifecycle",children:"Application lifecycle"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/getting-started/configuration",children:"Configuration"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/getting-started/directory-structure",children:"Directory structure"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/architecture-concepts/service-container",children:"Service container"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/architecture-concepts/facades",children:"Facades"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"How you want to use Athenna will also dictate the next steps\non your journey. Since Athenna has different kind of applications,\nthere are a variety of ways to use Athenna, and we'll explore\nthe available ones bellow."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["New to Athenna? Check out the ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/@athennaio",children:"Athenna YouTube channel"}),"\nfor an infinity of hands-on videos!"]})}),"\n",(0,i.jsx)(n.h3,{id:"rest-api-application",children:"REST API application"}),"\n",(0,i.jsx)(n.p,{children:"Use the REST API Application to serve as an API backend to single page application\nor mobile apps. In this context you may use Athenna for data storage / retrieval\nfor your REST API, while also taking advantage of Athenna's powerful services such\nas database, emails, notifications, and more."}),"\n",(0,i.jsxs)(n.p,{children:["If this is how you plan to use Athenna, you may want to check out our documentation\non ",(0,i.jsx)(n.a,{href:"/docs/rest-api-application/routing",children:"routing"})," and the ",(0,i.jsx)(n.a,{href:"/docs/orm/getting-started",children:"ORM"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"command-line-interface-cli-application",children:"Command Line Interface (CLI) application"}),"\n",(0,i.jsxs)(n.p,{children:["Use the command line interface (CLI) application to create libraries like ",(0,i.jsx)(n.code,{children:"athenna"}),"\nfor NPM where other developers could install it in their terminal. In this context\nyou may use Athenna for automating process or generating files, while also taking\nadvantage of all Athenna's powerful foundation."]}),"\n",(0,i.jsxs)(n.p,{children:["If this is how you plan to use Athenna, you may want to check out our documentation\non ",(0,i.jsx)(n.a,{href:"/docs/cli-application/commands",children:"commands"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"cron-job-application",children:"CRON Job application"}),"\n",(0,i.jsx)(n.p,{children:"Use the CRON Job application to create schedulers for running periodic jobs, such\nas for maintenance or calling third-party APIs to collect up-to-date data."}),"\n",(0,i.jsxs)(n.p,{children:["If this is how you plan to use Athenna, you may want to check out our documentation\non ",(0,i.jsx)(n.a,{href:"/docs/cron-application/schedulers",children:"schedulers"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"web-application",children:"Web application"}),"\n",(0,i.jsx)(n.p,{children:"Create full-stack web applications powered by Vite. You can choose to use a simple\ntemplate engine to generate static HTML on the server or use the right plugins to\nuse frameworks like React."}),"\n",(0,i.jsxs)(n.p,{children:["If this is how you plan to use Athenna, you may want to check out our documentation\non ",(0,i.jsx)(n.a,{href:"/docs/rest-api-application/web-application",children:"web application"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7049:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);const a={hoverCardContainer:"hoverCardContainer_jqUQ",hoverCardLink:"hoverCardLink_oDZU",hoverCard:"hoverCard_qTDS"};var i=t(4848);function o(e){let n=e.father;switch(e.father){case"storage":n="src/storage";break;case"logs":n="src/storage/logs";break;case"views":n="src/resources/views";break;case"locales":n="src/resources/locales";break;case"static":n="src/resources/static";break;case"config":n="src/config";break;case"database":n="src/database";break;case"seeders":n="src/database/seeders";break;case"migrations":n="src/database/migrations";break;case"console":n="src/console";break;case"commands":n="src/console/commands";break;case"cron":n="src/cron";break;case"schedulers":n="src/cron/schedulers";break;case"models":n="src/models";break;case"services":n="src/services";break;case"repositories":n="src/repositories";break;case"http":n="src/http";break;case"controllers":n="src/http/controllers";break;case"middlewares":n="src/http/middlewares";break;case"interceptors":n="src/http/interceptors";break;case"terminators":n="src/http/terminators";break;case"stubs":n="tests/stubs";break;case"fixtures":n="tests/fixtures";break;case"providers":n="src/providers";break;case"facades":n="src/facades";break;case"routes":n="src/routes";break;case"validators":n="src/validators"}return(0,i.jsxs)("div",{className:a.hoverCardContainer,children:[(0,i.jsx)("a",{className:a.hoverCardLink,href:`/docs/the-basics/helpers#path${e.father}`,children:(0,i.jsxs)("code",{children:["Path.",e.father,"(",e.child?`'${e.child}'`:"",")"]})}),(0,i.jsx)("div",{className:a.hoverCard,children:(0,i.jsxs)("p",{style:{margin:0},children:["./",n,e.child?`/${e.child}`:""]})})]})}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var a=t(6540);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);
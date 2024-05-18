"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[9257],{259:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(4848),s=i(8453);const o={title:"Views",sidebar_position:11,description:"Understand how you can use the Athenna view API for rendering HTML pages."},a="Views",r={id:"rest-api-application/views",title:"Views",description:"Understand how you can use the Athenna view API for rendering HTML pages.",source:"@site/docs/rest-api-application/views.mdx",sourceDirName:"rest-api-application",slug:"/rest-api-application/views",permalink:"/docs/rest-api-application/views",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/rest-api-application/views.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Views",sidebar_position:11,description:"Understand how you can use the Athenna view API for rendering HTML pages."},sidebar:"tutorialSidebar",previous:{title:"Swagger Documentation",permalink:"/docs/rest-api-application/swagger-documentation"},next:{title:"Static Files",permalink:"/docs/rest-api-application/static-files"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Views support",id:"views-support",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Defining &amp; rendering views",id:"defining--rendering-views",level:2},{value:"Nested view directories",id:"nested-view-directories",level:3},{value:"Rendering raw string",id:"rendering-raw-string",level:3},{value:"Defining &amp; rendering named disks",id:"defining--rendering-named-disks",level:2},{value:"Sharing data with all views",id:"sharing-data-with-all-views",level:2},{value:"View components",id:"view-components",level:2},{value:"Using components",id:"using-components",level:3},{value:"In-memory components",id:"in-memory-components",level:3},{value:"Optimizing views",id:"optimizing-views",level:2},{value:"More details about views syntax",id:"more-details-about-views-syntax",level:2},{value:"Customizing <code>make</code> commands templates",id:"customizing-make-commands-templates",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"views",children:"Views"}),"\n",(0,t.jsx)(n.p,{children:"Understand how you can use the Athenna view API for rendering HTML pages."}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Of course, it's not practical to return entire HTML documents\nstrings directly from your routes and controllers. Thankfully,\nviews provide a convenient way to place all of our HTML in\nseparate files."}),"\n",(0,t.jsxs)(n.p,{children:["Views separate your controller / application logic from your\npresentation logic. When using Athenna, view templates are\nusually written using the ",(0,t.jsx)(n.a,{href:"https://edgejs.dev/docs/introduction",children:"Edge templating language"}),".\nA simple view might look something like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:"title=\"Path.views('greeting.edge')\"",children:"<html>\n    <body>\n        <h1>Hello, {{ name }}</h1>\n    </body>\n</html>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["And we may return it in our routes using the ",(0,t.jsx)(n.code,{children:"response.view()"})," method\nlike so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"Route.get('/', ({ response }) => {\n  return response.view('greeting', { name: 'Lenon' })\n})\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Looking for more information on how to write Edge templates?\nCheck out the full ",(0,t.jsx)(n.a,{href:"https://edgejs.dev/docs/introduction",children:"Edge documentation"}),"\nto get started."]})}),"\n",(0,t.jsx)(n.h2,{id:"views-support",children:"Views support"}),"\n",(0,t.jsxs)(n.p,{children:["Our focus at the moment is to be a framework for backend\napplications development. But since the ",(0,t.jsx)(n.code,{children:"View"})," API exists in\nAthenna ecosystem for creating template files for ",(0,t.jsx)(n.code,{children:"make"})," commands\nof Artisan, providing this feature for you to create monolith\napplications with Athenna is possible, but remember that\nsupporting this kind of application is not our focus right\nnow."]}),"\n",(0,t.jsxs)(n.p,{children:["If you think this is an interesting feature to improve, feel\nfree to open a ",(0,t.jsx)(n.a,{href:"https://github.com/orgs/AthennaIO/discussions",children:"discussion"}),"\nat Athenna organization, any contribution is welcome!"]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.code,{children:"@athenna/view"})," package will already be installed\nin your Athenna project. But you still need to configure it\nto be able to use all of it features."]}),"\n",(0,t.jsx)(n.p,{children:"Artisan provides a very simple command to configure the view\nlibrary in your project. Simply run the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node artisan configure @athenna/view\n"})}),"\n",(0,t.jsx)(n.p,{children:"The view configurer will do the following operations in\nyour project:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create the ",(0,t.jsx)(n.code,{children:"view.ts"})," configuration file."]}),"\n",(0,t.jsxs)(n.li,{children:["Add all view providers in your ",(0,t.jsx)(n.code,{children:".athennarc.json"})," file."]}),"\n",(0,t.jsxs)(n.li,{children:["Add all view commands in your ",(0,t.jsx)(n.code,{children:".athennarc.json"})," file."]}),"\n",(0,t.jsxs)(n.li,{children:["Add all view template files in your ",(0,t.jsx)(n.code,{children:".athennarc.json"})," file."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["All the configuration options for your application's views\nbehavior is housed in the ",(0,t.jsx)(n.code,{children:"Path.config('view.ts')"}),"\nconfiguration file. We will see later on this documentation\nthe purpose of each option:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Path } from '@athenna/common'\nimport { Env, Config } from '@athenna/config'\n\nexport default {\n  disk: Path.views(),\n  namedDisks: {},\n  components: {},\n  properties: {\n    env: Env,\n    config: Config\n  },\n  edge: {\n    cache: Env('APP_ENV') === 'production'\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"defining--rendering-views",children:"Defining & rendering views"}),"\n",(0,t.jsxs)(n.p,{children:["To create a new view, use the ",(0,t.jsx)(n.code,{children:"make:view"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node artisan make:view greeting \n"})}),"\n",(0,t.jsxs)(n.p,{children:["This command will place a new ",(0,t.jsx)(n.code,{children:"greeting.edge"})," template\nwithin your ",(0,t.jsx)(n.code,{children:"Path.views()"})," directory. In this view we\nwill render a simple profile with an avatar and the user name:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:"title=\"Path.views('greeting.edge')",children:'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n  </head>\n  <body>\n    <h1>{{ name }}</h1> \n  </body>\n</html>\n'})}),"\n",(0,t.jsxs)(n.p,{children:['Edge templates contain HTML as well as Edge directives that\nallow you to easily log values, create "if" statements,\niterate over data, and more. Check ',(0,t.jsx)(n.a,{href:"https://edgejs.dev/docs/introduction",children:"Edge documentation"}),"\nfor more details around the syntax of Edge templates."]}),"\n",(0,t.jsxs)(n.p,{children:["Once you have created a view, you may return it from one of your application's\nroutes or controllers using the ",(0,t.jsx)(n.code,{children:"response.view()"})," method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"title=\"Path.routes('http.ts')\"",children:"import { Route } from '@athenna/view'\n\nRoute.get('greeting', ({ request, response }) => {\n  // Render the Path.views('greeting.edge') template\n  return response.view('greeting', { name: 'Lenon' }) \ud83d\udc48\n})\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Views may also be rendered using the ",(0,t.jsx)(n.code,{children:"View"})," facade:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { View } from '@athenna/view'\n\nawait View.render('greeting')\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As you can see, the first argument passed to the method corresponds\nto the name of the view file in the ",(0,t.jsx)(n.code,{children:"Path.views()"})," directory as defined\nin the ",(0,t.jsx)(n.code,{children:"disk"})," options of the ",(0,t.jsx)(n.a,{href:"/docs/rest-api-application/views#configuration",children:"configuration file"}),"\nof the view package. The second argument is an object of data that\nshould be made available to the view. In this case, we are passing\nthe ",(0,t.jsx)(n.code,{children:"name"})," variable, which is displayed in the view using ",(0,t.jsx)(n.a,{href:"https://edgejs.dev/docs/syntax_specification",children:"Edge syntax"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"nested-view-directories",children:"Nested view directories"}),"\n",(0,t.jsxs)(n.p,{children:['Views may also be nested within subdirectories of your views\ndirectory. "Slash" notation may be used to reference nested views.\nFor example, if your view is stored at ',(0,t.jsx)(n.code,{children:"Path.views('admin/profile.edge')"}),",\nyou may return it from one of your application's routes / controllers\nlike so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"return response.view('admin/profile', data) \ud83d\udc48\n"})}),"\n",(0,t.jsx)(n.h3,{id:"rendering-raw-string",children:"Rendering raw string"}),"\n",(0,t.jsxs)(n.p,{children:["You can render raw template string values using the\n",(0,t.jsx)(n.code,{children:"View.renderRaw()"})," or ",(0,t.jsx)(n.code,{children:"View.renderRawSync()"})," methods:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"await View.renderRaw('<p>Hello {{ name }}</p>', {\n    name: 'Lenon'\n})\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Raw strings do not enjoy the benefits of ",(0,t.jsx)(n.a,{href:"/docs/rest-api-application/views#optimizing-views",children:"template caching"}),"\nas there are not associated with a unique path."]})}),"\n",(0,t.jsx)(n.h2,{id:"defining--rendering-named-disks",children:"Defining & rendering named disks"}),"\n",(0,t.jsxs)(n.p,{children:["Named disks could be defined inside ",(0,t.jsx)(n.code,{children:"Path.config('view.ts')"}),"\nfile, in the ",(0,t.jsx)(n.code,{children:"namedDisks"})," configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export default {\n  namedDisks: {\n    admin: Path.views('admin')\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now you can render templates by prefixing the disk name\nbefore the template path:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"return response.view('admin::profile', user) \ud83d\udc48\n"})}),"\n",(0,t.jsx)(n.p,{children:'For rendering nested views inside named disks you can use "slash"\nsyntax:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"return response.view('admin::dashboard/home', user) \ud83d\udc48\n"})}),"\n",(0,t.jsx)(n.h2,{id:"sharing-data-with-all-views",children:"Sharing data with all views"}),"\n",(0,t.jsx)(n.p,{children:"As you saw in the previous examples, you may pass an object of data\nto views to make that data available to the view:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"return response.view('greeting', { name: 'Lenon' })\n"})}),"\n",(0,t.jsxs)(n.p,{children:["But sometimes you may need to share data with all views that are\nrendered by your application. You may do so by using the ",(0,t.jsx)(n.code,{children:"properties"}),"\noption inside of the ",(0,t.jsx)(n.code,{children:"Path.config('view.ts')"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export default {\n  properties: {\n    env: Env,\n    config: Config,\n    key: 'value',\n    appName: Env('APP_NAME', '@athenna/athenna')\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also use ",(0,t.jsx)(n.code,{children:"View.addProperty()"})," method for registering your global\nproperties:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { View } from '@athenna/view'\n\nView.addProperty('hello', )\n"})}),"\n",(0,t.jsx)(n.h2,{id:"view-components",children:"View components"}),"\n",(0,t.jsxs)(n.p,{children:["Components are regular views created with the purpose of reuse.\nComponents can access additional runtime properties like ",(0,t.jsx)(n.code,{children:"$props"}),"\nand ",(0,t.jsx)(n.code,{children:"$slots"}),", which are unavailable to other views."]}),"\n",(0,t.jsxs)(n.p,{children:["We recommend you create components inside the components directory\nof your ",(0,t.jsx)(n.code,{children:"disk"})," root path. This helps create a visual boundary between\nthe components and the rest of the templates used by your application."]}),"\n",(0,t.jsxs)(n.p,{children:["Let's start by creating a button component. We will store it inside\nthe ",(0,t.jsx)(n.code,{children:"Path.views('components/button.edge')"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<button type=\"{{ type || 'submit' }}\">{{ text }}</button>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-components",children:"Using components"}),"\n",(0,t.jsxs)(n.p,{children:["You must use the ",(0,t.jsx)(n.code,{children:"@component"})," tag to render a component inside your\ntemplates. The component tag accepts the template path as the first\nparameter and props as the second parameter:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<form>\n  @!component('components/button', { text: 'Login' })\n  @!component('components/button', { text: 'Cancel', type: 'reset' })\n</form>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<form>\n  <button type="submit">Login</button>\n  <button type="reset">Cancel</button>\n</form>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Components from named disks can be referenced by prefixing the disk name:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"@!component('uikit::components/button', { text: 'Login' })\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For more information about components, check ",(0,t.jsx)(n.a,{href:"https://edgejs.dev/docs/components/introduction#components",children:"Edge component documentation\npage"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"in-memory-components",children:"In-memory components"}),"\n",(0,t.jsxs)(n.p,{children:["You can register in-memory views components by defining them\nin the ",(0,t.jsx)(n.code,{children:"components"})," property of you ",(0,t.jsx)(n.code,{children:"Path.config('view.ts')"}),"\nfile. You can find it useful whenever you want to split a large\ntemplate file into several smaller ones or also if you want to\nprovide some templates as part of a npm package:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export default {\n  components: {\n    'myuikit/button': Path.node_modules('myuikit/button.edge') \n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also create in-memory components without defining any file\nusing the ",(0,t.jsx)(n.code,{children:"View"})," facade directly:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { View } from '@athenna/view'\n\nView.createComponent('myuikit/button', '<button {{ $props.serializeExcept([\"title\"]) }}>{{ title }}</button>')\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can also use the ",(0,t.jsx)(n.code,{children:"View.createTemplate()"})," method to\nregister templates. The only difference between them is\nthat ",(0,t.jsx)(n.code,{children:"View.createTemplate()"})," does not throws errors if\nsome template name already exists, instead the old template\nwill be replaced."]})}),"\n",(0,t.jsx)(n.p,{children:"You can render the template directly or use it as a component in\nother views:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"@!component('myuikit/button', {\n  title: 'Signup',\n  class: ['btn', 'btn-primary'],\n  id: 'signup'\n})\n"})}),"\n",(0,t.jsx)(n.h2,{id:"optimizing-views",children:"Optimizing views"}),"\n",(0,t.jsx)(n.p,{children:"Compiling a template to a JavaScript function is a\ntime-consuming process, and hence it is recommended to cache\nthe compiled templates in production."}),"\n",(0,t.jsxs)(n.p,{children:["You can control the template caching using the ",(0,t.jsx)(n.code,{children:"edge.cache"}),"\nproperty inside ",(0,t.jsx)(n.code,{children:"Path.config('view.ts')"})," file. Just make sure to set\nthe value to ",(0,t.jsx)(n.code,{children:"true"})," in the production environment:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export default { \n  edge: {\n    // Set to `true` in production only\n    cache: Env('APP_ENV') === 'production' \ud83d\udc48\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"All the templates are cached within the memory. Currently,\nwe do not have any plans to support on-disk caching since\nthe value provided for the efforts is too low."}),"\n",(0,t.jsx)(n.p,{children:"The raw text does not take up too much space, and even\nkeeping thousands of pre-compiled templates in memory should\nnot be a problem."}),"\n",(0,t.jsx)(n.h2,{id:"more-details-about-views-syntax",children:"More details about views syntax"}),"\n",(0,t.jsxs)(n.p,{children:['If you want to know more informations about the views syntax like loops,\n"if" statements and declaring properties, check out the full ',(0,t.jsx)(n.a,{href:"https://edgejs.dev/docs/introduction",children:"Edge documentation"}),"\nfor all the details around it syntax."]}),"\n",(0,t.jsxs)(n.h2,{id:"customizing-make-commands-templates",children:["Customizing ",(0,t.jsx)(n.code,{children:"make"})," commands templates"]}),"\n",(0,t.jsxs)(n.p,{children:["The Artisan console's ",(0,t.jsx)(n.code,{children:"make"})," commands are used to create\na variety of classes, such as controllers, services,\ncommands, and tests. These classes are generated using\n",(0,t.jsx)(n.code,{children:".edge"})," files that are populated with values based on\nyour input. However, you may want to make small changes\nto files generated by Artisan. To accomplish this, you\nmay use the ",(0,t.jsx)(n.code,{children:"template:customize"})," command to publish the\nmost common stubs to your application so that you can\ncustomize them:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node artisan template:customize\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The customized templates will be located in the\n",(0,t.jsx)(n.code,{children:"Path.resources('templates')"})," directory. Any change\nyou make to these files will be reflected when you\ngenerate their correspoding files using Artisan's\n",(0,t.jsx)(n.code,{children:"make"})," commands."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(6540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
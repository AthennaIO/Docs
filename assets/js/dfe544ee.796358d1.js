"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[4673],{9394:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"the-basics/validation","title":"Validation","description":"Understand how you can use the Athenna validation API.","source":"@site/docs/the-basics/validation.mdx","sourceDirName":"the-basics","slug":"/the-basics/validation","permalink":"/docs/the-basics/validation","draft":false,"unlisted":false,"editUrl":"https://github.com/AthennaIO/Docs/tree/main/docs/the-basics/validation.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Validation","sidebar_position":5,"description":"Understand how you can use the Athenna validation API."},"sidebar":"tutorialSidebar","previous":{"title":"Deployment","permalink":"/docs/the-basics/deployment"},"next":{"title":"REPL","permalink":"/docs/digging-deeper/repl"}}');var i=t(4848),s=t(8453),r=t(7049);const o={title:"Validation",sidebar_position:5,description:"Understand how you can use the Athenna validation API."},l="Validation",d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Validation quickstart",id:"validation-quickstart",level:2},{value:"Defining routes",id:"defining-routes",level:3},{value:"Creating the controller",id:"creating-the-controller",level:3},{value:"Writing the validation class",id:"writing-the-validation-class",level:3},{value:"Validating REST API components",id:"validating-rest-api-components",level:3},{value:"Validation outside of REST API&#39;s",id:"validation-outside-of-rest-apis",level:2},{value:"Available validation rules",id:"available-validation-rules",level:2},{value:"Custom validation rules",id:"custom-validation-rules",level:2},{value:"Custom validation messages",id:"custom-validation-messages",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"validation",children:"Validation"})}),"\n",(0,i.jsx)(n.p,{children:"Understand how you can use the Athenna validation API."}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["Athenna provides several different approaches to validate your\napplication's incoming data by using ",(0,i.jsx)(n.a,{href:"https://vinejs.dev/docs/introduction",children:"VineJS"}),"\nunder the hood. It is most common to create a validation\nclass extending the ",(0,i.jsx)(n.code,{children:"BaseValidator"})," class available after installing\nthe ",(0,i.jsx)(n.code,{children:"@athenna/validator"})," package. However, we will discuss other approaches\nto validation as well."]}),"\n",(0,i.jsx)(n.p,{children:"Athenna includes a wide variety of convenient validation rules that you may\napply to data, even providing the ability to validate if values are unique\nin a given database table. We'll cover each of these validation rules in\ndetail so that you are familiar with all of Athenna's validation features."}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["First of all you need to install ",(0,i.jsx)(n.code,{children:"@athenna/validator"})," package\nand configure it. Artisan provides a very simple command to\ninstall and configure the validator library in your project.\nSimply run the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"node artisan install @athenna/validator\n"})}),"\n",(0,i.jsx)(n.p,{children:"The validator configurer will do the following operations in\nyour project:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add all database commands in your ",(0,i.jsx)(n.code,{children:".athennarc.json"})," file."]}),"\n",(0,i.jsxs)(n.li,{children:["Add all database templates files in your ",(0,i.jsx)(n.code,{children:".athennarc.json"})," file."]}),"\n",(0,i.jsxs)(n.li,{children:["Add all validator providers in your ",(0,i.jsx)(n.code,{children:".athennarc.json"})," file."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"validation-quickstart",children:"Validation quickstart"}),"\n",(0,i.jsx)(n.p,{children:"To learn about Athenna's powerful validation features, let's look at a\ncomplete example of validating a form and displaying the error messages\nback to the user. By reading this high-level overview, you'll be able to\ngain a good general understanding of how to validate incoming request data\nusing Athenna:"}),"\n",(0,i.jsx)(n.h3,{id:"defining-routes",children:"Defining routes"}),"\n",(0,i.jsxs)(n.p,{children:["First, let's assume we have the following routes defined in our\n",(0,i.jsx)(r.A,{father:"routes",child:"http.ts"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"title=\"Path.routes('http.ts')\"",children:"import { Route } from '@athenna/http'\n\nRoute.post('/articles', 'ArticleController.store')\n"})}),"\n",(0,i.jsx)(n.h3,{id:"creating-the-controller",children:"Creating the controller"}),"\n",(0,i.jsxs)(n.p,{children:["Next, let's take a look at a simple controller that handles incoming\nrequests to this route. We'll leave the ",(0,i.jsx)(n.code,{children:"store()"})," method empty for now:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"title=\"Path.controllers('article.controller.ts')\"",children:"import { Context, Controller } from '@athenna/http'\n\n@Controller()\nexport class ArticleController {\n  public async store({ response }: Context) {\n    // Validator and store the article\n    const article = /** ... */\n\n    return response.status(200).send(article)\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"writing-the-validation-class",children:"Writing the validation class"}),"\n",(0,i.jsxs)(n.p,{children:["To get started, let's create a validator. Validators typically live in the\n",(0,i.jsx)(r.A,{father:"validators"})," and extend the ",(0,i.jsx)(n.a,{href:"https://github.com/AthennaIO/Validator/blob/develop/src/validator/BaseValidator.ts",children:(0,i.jsx)(n.code,{children:"BaseValidator"})}),"\nclass. You may use the ",(0,i.jsx)(n.code,{children:"make:validator"})," Artisan command to generate a\nnew validator:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"node artisan make:validator article.validator \n"})}),"\n",(0,i.jsx)(n.p,{children:"Now we just need to create the validation schema and gave a name to\nour validation class:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"title=\"Path.validators('article.validator.ts')\"",children:"import { type Context } from '@athenna/http'\nimport { v, Validator, BaseValidator } from '@athenna/validator'\n\n@Validator({ name: 'article:create' }) \ud83d\udc48\nexport class ArticleValidator extends BaseValidator {\n  public schema = v.object({\n    title: v.string()\n      .unique({ table: 'articles' })\n      .maxLength(255),\n    body: v.string()\n  })\n\n  public async handle({ request }: Context) {\n    const data = request.only(['title', 'body'])\n\n    await v.validate(data)\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"With our schema and name defined in our validation class, it's time to define\nit in our route:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"title=\"Path.routes('http.ts')\"",children:"import { Route } from '@athenna/http'\n\nRoute.post('/articles', 'ArticleController.store').validator('article:create')\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now every time that a request to create an article comes, if the validation rule pass,\nyour code will keep executing normally; however, if validation fails, a ",(0,i.jsx)(n.code,{children:"ValidationException"}),"\nexception will be thrown and the proper error response will automatically be sent back to\nthe user."]}),"\n",(0,i.jsx)(n.p,{children:"Voil\xe0! You have defined you first validator using Athenna \ud83e\udd73"}),"\n",(0,i.jsx)(n.h3,{id:"validating-rest-api-components",children:"Validating REST API components"}),"\n",(0,i.jsxs)(n.p,{children:["When using validator classes for ",(0,i.jsx)(n.a,{href:"docs/rest-api-application/routing",children:"REST API"}),",\nkeep in mind that they are just ",(0,i.jsx)(n.a,{href:"docs/rest-api-application/middlewares",children:"middlewares"}),"\nwith some helpers to make validation easier. So you are free to define multiple\nvalidation classes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Route } from '@athenna/http'\n\nRoute.post('/articles', 'ArticleController.store')\n  .validator('article:create') \ud83d\udc48\n  .validator('article:update') \ud83d\udc48\n"})}),"\n",(0,i.jsxs)(n.p,{children:["There might be some cases where you need to validate fields inside request params or query\nparams. Since validators are just like ",(0,i.jsx)(n.a,{href:"docs/rest-api-application/middlewares",children:"middlewares"}),",\nYou have access to all that information through the ",(0,i.jsx)(n.code,{children:"ctx.request"})," object:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"title=\"Path.validators('article.validator.ts')\"",children:"import { type Context } from '@athenna/http'\nimport { v, Validator, BaseValidator } from '@athenna/validator'\n\n@Validator({ name: 'article:create' })\nexport class ArticleValidator extends BaseValidator {\n  public schema = v.object({\n    title: v.string()\n      .unique({ table: 'articles' })\n      .maxLength(255),\n    body: v.string(),\n    created_by: v.string()\n  })\n\n  public async handle({ request }: Context) {\n    const data = {\n      ...request.only(['title', 'body']),\n      created_by: request.query('created_by') \ud83d\udc48\n    }\n\n    await v.validate(data)\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"validation-outside-of-rest-apis",children:"Validation outside of REST API's"}),"\n",(0,i.jsxs)(n.p,{children:["For applications where you don't have an easy integration with a validator class or if\nyou simply want to have control over the validation flow you can use the ",(0,i.jsx)(n.code,{children:"v"})," object\ndirectly, ",(0,i.jsx)(n.code,{children:"v"})," object is the same as ",(0,i.jsx)(n.code,{children:"vite"})," but smaller to write smaller schemas:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"title=\"Path.controllers('article.controller.ts')\"",children:"import { v } from '@athenna/validator'\nimport { type Context, Controller } from '@athenna/http'\n\n@Controller()\nexport class ArticleController {\n  public async store({ request, response }: Context) {\n    const data = request.only(['title', 'body'])\n\n    const schema = v.object({\n      title: v.string()\n        .unique({ table: 'articles' })\n        .maxLength(255),\n      body: v.string()\n    })\n\n    const article = await v.validate({ schema, data })\n\n    return response.status(200).send(article)\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Just like the validation class, if the validation rule pass, your code will keep\nexecuting normally; however, if validation fails, a ",(0,i.jsx)(n.code,{children:"ValidationException"})," exception\nwill be thrown and the proper error response will automatically be sent back to the user."]}),"\n",(0,i.jsx)(n.h2,{id:"available-validation-rules",children:"Available validation rules"}),"\n",(0,i.jsxs)(n.p,{children:["All the of the native validation rules can be found in ",(0,i.jsx)(n.a,{href:"https://vinejs.dev/docs/introduction",children:"VineJS"}),"\ndocumentation. Athenna supports all schema types of VineJS, you can find the documentation for each one here:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://vinejs.dev/docs/types/string",children:(0,i.jsx)(n.code,{children:"v.string()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://vinejs.dev/docs/types/boolean",children:(0,i.jsx)(n.code,{children:"v.boolean()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://vinejs.dev/docs/types/number",children:(0,i.jsx)(n.code,{children:"v.number()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://vinejs.dev/docs/types/date",children:(0,i.jsx)(n.code,{children:"v.date()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://vinejs.dev/docs/types/accepted",children:(0,i.jsx)(n.code,{children:"v.accepted()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://vinejs.dev/docs/types/enum",children:(0,i.jsx)(n.code,{children:"v.enum()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://vinejs.dev/docs/types/literal",children:(0,i.jsx)(n.code,{children:"v.literal()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://vinejs.dev/docs/types/object",children:(0,i.jsx)(n.code,{children:"v.object()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://vinejs.dev/docs/types/record",children:(0,i.jsx)(n.code,{children:"v.record()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://vinejs.dev/docs/types/array",children:(0,i.jsx)(n.code,{children:"v.array()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://vinejs.dev/docs/types/tuple",children:(0,i.jsx)(n.code,{children:"v.tuple()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://vinejs.dev/docs/types/union",children:(0,i.jsx)(n.code,{children:"v.union()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://vinejs.dev/docs/types/any",children:(0,i.jsx)(n.code,{children:"v.any()"})})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"custom-validation-rules",children:"Custom validation rules"}),"\n",(0,i.jsxs)(n.p,{children:["To create custom validations we just need to create a provider where we will\nuse the ",(0,i.jsx)(n.code,{children:"Validate"})," facade to extend some of the schema types. Let's check in\nthe example bellow a simpler version of the ",(0,i.jsx)(n.code,{children:"unique"})," custom validation rule\nof Athenna, let's start by creating a validation provider:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"node artisan make:provider customvalidation.provider\n"})}),"\n",(0,i.jsxs)(n.p,{children:["With our provider created and registered in ",(0,i.jsx)(n.code,{children:".athennarc.json"}),", we just need\nto make use of the ",(0,i.jsx)(n.code,{children:"Validate.extend()"})," method inside the ",(0,i.jsx)(n.code,{children:"boot()"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Database } from '@athenna/database'\nimport { Validate } from '@athenna/validator'\nimport { ServiceProvider } from '@athenna/ioc'\n\ntype UniqueOptions = {\n  table: string\n}\n\ndeclare module '@vinejs/vine' {\n  interface VineString {\n    unique(options: UniqueOptions): this\n  }\n}\n\nexport default class CustomValidationProvider extends ServiceProvider {\n    public async boot() {\n      Validate.extend().string('unique', async (value, options, field) => { \n        /**\n         * Don't validate non string values, let `string` \n         * validation rule throw the error.\n         */\n        if (!Is.String(value)) {\n          return\n        }\n\n        const existsRow = await Database.table(options.table)\n          .select(options.column)\n          .where(options.column, value)\n          .exists()\n\n        if (existsRow) {\n          field.report('The {{ field }} field is not unique', 'unique', field)\n        }\n      })\n    }\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For more information around how to create custom rules for your schemas\nplease rely on ",(0,i.jsx)(n.a,{href:"https://vinejs.dev/docs/extend/custom_rules",children:"VineJS custom rules documentation"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"custom-validation-messages",children:"Custom validation messages"}),"\n",(0,i.jsxs)(n.p,{children:["For custom validation messages you can use the ",(0,i.jsx)(n.code,{children:"Validate.extend().messages()"})," method.\nSo following the same approach of creating ",(0,i.jsx)(n.a,{href:"#custom-validation-rules",children:"custom validation rules"}),", we\nneed to create a service provider to call this method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { Validate } from '@athenna/validator'\nimport { ServiceProvider } from '@athenna/ioc'\n\nexport default class CustomValidationProvider extends ServiceProvider {\n    public async boot() {\n      Validate.extend().messages({\n        // Applicable for all fields\n        'required': 'The {{ field }} field is required',\n        'string': 'The value of {{ field }} field must be a string',\n        'email': 'The value is not a valid email address',\n   \n         // Error message only for the username field\n        'username.required': 'Please choose a username for your account'\n\n        // For arrays\n        'contacts.0.email.required': 'The primary email of the contact is required',\n        'contacts.*.email.required': 'Contact email is required'\n      })\n    }\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For more information around syntaxes you can use whe creating custom error messages\nplease rely on ",(0,i.jsx)(n.a,{href:"https://vinejs.dev/docs/custom_error_messages",children:"VineJS custom error messages documentation"}),"."]})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7049:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);const a={hoverCardContainer:"hoverCardContainer_jqUQ",hoverCardLink:"hoverCardLink_oDZU",hoverCard:"hoverCard_qTDS"};var i=t(4848);function s(e){let n=e.father;switch(e.father){case"storage":n="src/storage";break;case"logs":n="src/storage/logs";break;case"views":n="src/resources/views";break;case"locales":n="src/resources/locales";break;case"static":n="src/resources/static";break;case"config":n="src/config";break;case"database":n="src/database";break;case"seeders":n="src/database/seeders";break;case"migrations":n="src/database/migrations";break;case"console":n="src/console";break;case"commands":n="src/console/commands";break;case"cron":n="src/cron";break;case"schedulers":n="src/cron/schedulers";break;case"models":n="src/models";break;case"services":n="src/services";break;case"repositories":n="src/repositories";break;case"http":n="src/http";break;case"controllers":n="src/http/controllers";break;case"middlewares":n="src/http/middlewares";break;case"interceptors":n="src/http/interceptors";break;case"terminators":n="src/http/terminators";break;case"stubs":n="tests/stubs";break;case"fixtures":n="tests/fixtures";break;case"providers":n="src/providers";break;case"facades":n="src/facades";break;case"routes":n="src/routes";break;case"validators":n="src/validators"}return(0,i.jsxs)("div",{className:a.hoverCardContainer,children:[(0,i.jsx)("a",{className:a.hoverCardLink,href:`/docs/the-basics/helpers#path${e.father}`,children:(0,i.jsxs)("code",{children:["Path.",e.father,"(",e.child?`'${e.child}'`:"",")"]})}),(0,i.jsx)("div",{className:a.hoverCard,children:(0,i.jsxs)("p",{style:{margin:0},children:["./",n,e.child?`/${e.child}`:""]})})]})}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(6540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);
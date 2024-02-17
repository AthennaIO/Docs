"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[6805],{5099:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=t(5893),i=t(1151);const o={title:"Getting Started",sidebar_position:1,description:"See how to create models in Athenna Framework."},s="ORM: Getting Started",r={id:"orm/getting-started",title:"Getting Started",description:"See how to create models in Athenna Framework.",source:"@site/docs/orm/getting-started.mdx",sourceDirName:"orm",slug:"/orm/getting-started",permalink:"/docs/orm/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/orm/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1,description:"See how to create models in Athenna Framework."},sidebar:"tutorialSidebar",previous:{title:"ORM",permalink:"/docs/orm"},next:{title:"Query Builder",permalink:"/docs/orm/query-builder"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Generating models",id:"generating-models",level:2},{value:"Columns",id:"columns",level:2},{value:"Model conventions",id:"model-conventions",level:2},{value:"Table names",id:"table-names",level:3},{value:"Primary keys",id:"primary-keys",level:3},{value:"Default attributes values",id:"default-attributes-values",level:3},{value:"Database connections",id:"database-connections",level:3},{value:"Factory definition",id:"factory-definition",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"orm-getting-started",children:"ORM: Getting Started"}),"\n",(0,a.jsx)(n.p,{children:"See how to create models in Athenna Framework."}),"\n",(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.p,{children:'Athenna has an object-relational mapper (ORM) that makes it enjoyable\nto interact with your database. When using the Athenna ORM, each database\ntable has a corresponding "Model" that is used to interact with that\ntable. In addition to retrieving records from the database table, the\nmodels allow you to insert, update, and delete records from the table\nas well.'}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Before getting started, be sure to configure a database connection in\nyour application's ",(0,a.jsx)(n.code,{children:"Path.config('database.ts')"})," configuration file.\nFor more information on configuring your database, check out\n",(0,a.jsx)(n.a,{href:"/docs/database/getting-started",children:(0,a.jsx)(n.code,{children:"the database configuration documentation."})})]})}),"\n",(0,a.jsx)(n.h2,{id:"generating-models",children:"Generating models"}),"\n",(0,a.jsxs)(n.p,{children:["To get started, let's create a model. Models typically live in the\n",(0,a.jsx)(n.code,{children:"app/models"})," directory (",(0,a.jsx)(n.code,{children:"Path.models()"}),") and extend the ",(0,a.jsx)(n.a,{href:"https://github.com/AthennaIO/Database/blob/develop/src/models/BaseModel.ts",children:(0,a.jsx)(n.code,{children:"BaseModel"})}),"\nclass. You may use the ",(0,a.jsx)(n.code,{children:"make:model"})," Artisan command to generate a\nnew model:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"node artisan make:model Flight\n"})}),"\n",(0,a.jsx)(n.h2,{id:"columns",children:"Columns"}),"\n",(0,a.jsxs)(n.p,{children:["You will have to define your database columns as properties on the\nclass and annotate them using the ",(0,a.jsx)(n.code,{children:"@Column()"})," annotation. Any property\nannotate with it could be distinguished between standard class properties\nand database columns. Let's see an example of defining the flight table\ncolumns as properties on the ",(0,a.jsx)(n.code,{children:"Flight"})," model:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Column, BaseModel } from '@athenna/database'\n\nexport class Flight extends BaseModel { \n  @Column()\n  public id: number\n\n  @Column()\n  public from: string\n\n  @Column()\n  public to: string\n\n  @Column({ isCreateDate: true })\n  public createdAt: Date\n\n  @Column({ isUpdateDate: true })\n  public updatedAt: Date\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For more information about model options visit the ",(0,a.jsxs)(n.a,{href:"/docs/orm/annotations/#column",children:[(0,a.jsx)(n.code,{children:"@Column()"}),"\nannotation documentation section"]}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"model-conventions",children:"Model conventions"}),"\n",(0,a.jsxs)(n.p,{children:["Models generated by the ",(0,a.jsx)(n.code,{children:"make:model"})," command will be placed in the\n",(0,a.jsx)(n.code,{children:"Path.models()"})," directory. Let's examine a basic model class and\ndiscuss some of Model's key conventions:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { BaseModel } from '@athenna/database'\n\nexport class Flight extends BaseModel {\n  @Column()\n  public id: number\n\n  public static attributes(): Partial<Flight> {\n    return {}\n  }\n\n  public static async definition(): Promise<Partial<Flight>> {\n    return {\n      id: this.faker.number.int()\n    }\n  }\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"table-names",children:"Table names"}),"\n",(0,a.jsxs)(n.p,{children:["After glancing at the example above, you may have noticed that we\ndid not tell the model which database table corresponds to our ",(0,a.jsx)(n.code,{children:"Flight"}),'\nmodel. By convention, the "snake_case", plural name of the class will\nbe used as the table name unless another name is explicitly specified.\nSo, in this case, the model will assume the ',(0,a.jsx)(n.code,{children:"Flight"})," model stores records\nin the ",(0,a.jsx)(n.code,{children:"flights"})," table, while an ",(0,a.jsx)(n.code,{children:"AirTrafficController"})," model would store\nrecords in an ",(0,a.jsx)(n.code,{children:"air_traffic_controllers"})," table."]}),"\n",(0,a.jsxs)(n.p,{children:["If your model's corresponding database table does not fit this convention, you may manually specify the model's table name by\ndefining a static getter ",(0,a.jsx)(n.code,{children:"table"})," on the model:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { BaseModel } from '@athenna/database'\n\nexport class Flight extends BaseModel {\n  public static table() {\n    return 'my_flights'\n  }\n\n  /*...*/\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"primary-keys",children:"Primary keys"}),"\n",(0,a.jsxs)(n.p,{children:["The model will also assume that each model's corresponding database\ntable has a primary key column named ",(0,a.jsx)(n.code,{children:"id"})," if using a SQL driver and\n",(0,a.jsx)(n.code,{children:"_id"})," if using mongo driver. If necessary, you may define\na property ",(0,a.jsx)(n.code,{children:"isMainPrimary"})," as true in one of your model columns to\nspecify a different column that serves as your model's main primary\nkey:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Column, BaseModel } from '@athenna/database'\n\nexport class Flight extends BaseModel {\n  @Column({ isMainPrimary: true })\n  public id: number\n\n  /*...*/\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"default-attributes-values",children:"Default attributes values"}),"\n",(0,a.jsxs)(n.p,{children:["By default, a newly instantiated model instance will not contain any\nattribute values. If you would like to define the default values\nfor some of your model's attributes, you may define a static method\n",(0,a.jsx)(n.code,{children:"attributes()"})," on your model:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Uuid } from '@athenna/common'\nimport { BaseModel } from '@athenna/database'\n\nexport class Flight extends BaseModel {\n  public static attributes(): Partial<Flight> {\n    return {\n      id: Uuid.generate() \n    }\n  }\n\n  /*...*/\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["As you can see we are defining an ",(0,a.jsx)(n.code,{children:"id"})," property in our static method\n",(0,a.jsx)(n.code,{children:"attributes()"}),". This property will have the value of a generated\nuuid randomly everytime that Athenna calls the ",(0,a.jsx)(n.code,{children:"attributes()"})," method.\nAthenna will call the ",(0,a.jsx)(n.code,{children:"attributes()"})," method everytime that ",(0,a.jsx)(n.code,{children:"create()"}),",\n",(0,a.jsx)(n.code,{children:"createMany()"}),", ",(0,a.jsx)(n.code,{children:"update()"})," and ",(0,a.jsx)(n.code,{children:"createOrUpdate()"})," methods are called,\nthis means that a new uuid will be generated for each call:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Flight } from '#app/models/Flight'\n\nconst flight1 = await Flight.create()\nconst flight2 = await Flight.query().create()\n\nconsole.log(flight1.id) // 43bf66ec-658a-4f59-8f89-2aac5ae96e6a\nconsole.log(flight2.id) // cbe35c9c-60f3-11ed-9b6a-0242ac120002\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["But always remember that if you have already set the property in\none of these methods, the ",(0,a.jsx)(n.code,{children:"attributes()"})," method will not overwrite\nthem:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Flight } from '#app/models/Flight'\n\n// Setting my own id attribute\nconst flight = await Flight.create({ \n  id: '299dabf8-60f4-11ed-9b6a-0242ac120002' \n})\n\nconsole.log(flight.id) // 299dabf8-60f4-11ed-9b6a-0242ac120002\n"})})]}),"\n",(0,a.jsx)(n.h3,{id:"database-connections",children:"Database connections"}),"\n",(0,a.jsxs)(n.p,{children:["By default, all models will use the default database connection\nconfigured for your application. If you would like to specify a\ndifferent connection that should be used when interacting with a\nparticular model, you should define a static ",(0,a.jsx)(n.code,{children:"connection()"})," method on\nthe model:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { BaseModel } from '@athenna/database'\n\nexport class Article extends BaseModel {\n  public static connection() {\n    return 'mysql'\n  }\n\n  /*...*/\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"factory-definition",children:"Factory definition"}),"\n",(0,a.jsxs)(n.p,{children:["The static method ",(0,a.jsx)(n.code,{children:"definition()"})," of your model is used when calling\nthe ",(0,a.jsx)(n.code,{children:"factory()"})," method. As the name says, this method is used to define\na blueprint of your model to be used when fabricating fake records of your\nmodel using ",(0,a.jsx)(n.a,{href:"/docs/orm/factories",children:"factories"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(7294);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);
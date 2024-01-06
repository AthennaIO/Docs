"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[7806],{4662:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(5893),s=t(1151);const r={title:"Factories",sidebar_position:6,description:"See how to factory fake models in Athenna Framework."},a="ORM: Factories",o={id:"orm/factories",title:"Factories",description:"See how to factory fake models in Athenna Framework.",source:"@site/docs/orm/factories.mdx",sourceDirName:"orm",slug:"/orm/factories",permalink:"/docs/orm/factories",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/orm/factories.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Factories",sidebar_position:6,description:"See how to factory fake models in Athenna Framework."},sidebar:"tutorialSidebar",previous:{title:"Annotations",permalink:"/docs/orm/annotations"},next:{title:"Testing",permalink:"/docs/testing"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Defining model factories",id:"defining-model-factories",level:2},{value:"Creating models using factories",id:"creating-models-using-factories",level:2},{value:"Creating trashed models",id:"creating-trashed-models",level:3},{value:"Overriding attributes",id:"overriding-attributes",level:3},{value:"Returning specific fields",id:"returning-specific-fields",level:3},{value:"Persisting models",id:"persisting-models",level:2},{value:"Defining relationships within factories",id:"defining-relationships-within-factories",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"orm-factories",children:"ORM: Factories"}),"\n",(0,i.jsx)(n.p,{children:"See how to factory fake models in Athenna Framework."}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"When testing your application or seeding your database, you may need to insert a\nfew records into your database. Instead of manually specifying the value of each\ncolumn, Athenna allows you to define a set of default attributes for each of your\nmodels using model factories."}),"\n",(0,i.jsx)(n.h2,{id:"defining-model-factories",children:"Defining model factories"}),"\n",(0,i.jsxs)(n.p,{children:["First thing you need to do before start using your factories is to define the\nreturn value of the static ",(0,i.jsx)(n.code,{children:"definition()"})," method of your model:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { BaseModel } from '@athenna/database'\n\nexport class User extends BaseModel {\n  @Column()\n  public id: number\n\n  @Column()\n  public name: string\n\n  @Column({ isUnique: true })\n  public email: string\n\n  @Column({ isCreateDate: true })\n  public createdAt: Date \n\n  @Column({ isUpdateDate: true })\n  public updatedAt: Date\n\n  @Column({ isDeleteDate: true })\n  public deletedAt: Date\n\n  public async static definition(): Promise<Partial<User>> {\n    return {\n      id: this.faker.number.int({ max: 100000 }),\n      name: this.faker.person.firstName(),\n      email: this.faker.internet.email(),\n      createdAt: this.faker.date.anytime(),\n      updatedAt: this.faker.date.anytime()\n    }\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The definition method returns the default set of attribute values that should\nbe applied when creating a model using the factory."}),"\n",(0,i.jsxs)(n.p,{children:["Via the ",(0,i.jsx)(n.code,{children:"faker"})," helper, models have access to the ",(0,i.jsx)(n.a,{href:"https://fakerjs.dev/",children:(0,i.jsx)(n.code,{children:"@faker-js/faker"})}),",\nwhich allows you to conveniently generate various kinds of random data for testing\nand seeding."]}),"\n",(0,i.jsx)(n.h2,{id:"creating-models-using-factories",children:"Creating models using factories"}),"\n",(0,i.jsxs)(n.p,{children:["Once you have defined the ",(0,i.jsx)(n.code,{children:"definition()"})," method of your model, you may use the\nstatic factory method in order to instantiate a factory instance for that model.\nLet's take a look at a few examples of creating models. First, we'll use the\n",(0,i.jsx)(n.code,{children:"make()"})," method to create models without persisting them to the database:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const user = await User.factory().make()\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You may create a collection of many models using the ",(0,i.jsx)(n.code,{children:"count()"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const users = await User.factory()\n  .count(3)\n  .make()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"creating-trashed-models",children:"Creating trashed models"}),"\n",(0,i.jsxs)(n.p,{children:["If your model is using ",(0,i.jsx)(n.a,{href:"/docs/orm/query-builder#soft-deleting",children:"soft delete"}),"\napproach you can apply the trashed state to your model by calling the ",(0,i.jsx)(n.code,{children:"trashed()"}),"\nmethod:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const users = await User.factory()\n  .count(3)\n  .trashed()\n  .make()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"overriding-attributes",children:"Overriding attributes"}),"\n",(0,i.jsxs)(n.p,{children:["If you would like to override some of the default values of your ",(0,i.jsx)(n.code,{children:"definition()"}),"\nmethod, you may pass an array of values to the ",(0,i.jsx)(n.code,{children:"make()"})," method. Only the\nspecified attributes will be replaced while the rest of the attributes remain\nset to their default values as specified by the ",(0,i.jsx)(n.code,{children:"definiton()"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const user = await User.factory().make({ name: 'Thais Gabriela' })\n"})}),"\n",(0,i.jsx)(n.h3,{id:"returning-specific-fields",children:"Returning specific fields"}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes you may need to return only a specific field from your fabricated data.\nTo do so, you can use the ",(0,i.jsx)(n.code,{children:"returning()"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Make one User and return it email\nconst email = await User.factory()\n  .returning('email')\n  .make()\n\n// Make three Users and return an array with three emails\nconst emails = await User.factory()\n  .count(3)\n  .returning('email')\n  .make()\n"})}),"\n",(0,i.jsx)(n.h2,{id:"persisting-models",children:"Persisting models"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"create()"})," method instantiates model instances and persists them to the\ndatabase:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Create a single User\nconst user = await User.factory().create()\n \n// Create three Users\nconst users = await User.factory()\n  .count(3)\n  .create()\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You may override the factory's default model attributes by passing an object\nof attributes to the ",(0,i.jsx)(n.code,{children:"create()"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const user = await User.factory().create({ name: 'Thais' })\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/orm/query-builder#mass-assignment",children:"Mass assignment protection"})," is\nautomatically disabled when creating models using factories."]})}),"\n",(0,i.jsx)(n.h2,{id:"defining-relationships-within-factories",children:"Defining relationships within factories"}),"\n",(0,i.jsxs)(n.p,{children:['To define a relationship within your model factory, you will typically assign a\nnew factory instance to the foreign key of the relationship. This is normally\ndone for the "inverse" relationships such as ',(0,i.jsx)(n.code,{children:"@BelongsTo()"})," relationships."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you would like to create a new user when creating a post,\nyou may use the ",(0,i.jsx)(n.code,{children:"returningAs()"})," method that works exactly like the ",(0,i.jsx)(n.a,{href:"/docs/orm/factories#returning-specific-fields",children:(0,i.jsx)(n.code,{children:"returning()"})}),"\nmethod, the only difference is that ",(0,i.jsx)(n.code,{children:"returningAs()"})," forces the TypeScript return type\nto be the same of the field you are returning:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { User } from '#app/models/User'\nimport { BaseModel } from '@athenna/database'\n\nexport class Post extends Model {\n  public static definition(): Promise<Partial<Post>> {\n    return {\n      title: this.faker.commerce.productName(),\n      userId: User.factory().returningAs('id')\n    }\n  }\n\n  /*...*/\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(7294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
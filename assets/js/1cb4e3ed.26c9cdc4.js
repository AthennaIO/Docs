"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[6805],{5099:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>r});var a=t(5893),s=t(1151);const i={title:"Getting Started",sidebar_position:1,description:"See how to create models in Athenna Framework."},l="ORM: Getting Started",d={id:"orm/getting-started",title:"Getting Started",description:"See how to create models in Athenna Framework.",source:"@site/docs/orm/getting-started.mdx",sourceDirName:"orm",slug:"/orm/getting-started",permalink:"/docs/orm/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/orm/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1,description:"See how to create models in Athenna Framework."},sidebar:"tutorialSidebar",previous:{title:"ORM",permalink:"/docs/orm"},next:{title:"Query Builder",permalink:"/docs/orm/query-builder"}},o={},r=[{value:"Introduction",id:"introduction",level:2},{value:"Generating models",id:"generating-models",level:2},{value:"Columns",id:"columns",level:2},{value:"Model conventions",id:"model-conventions",level:2},{value:"Table names",id:"table-names",level:3},{value:"Primary keys",id:"primary-keys",level:3},{value:"Default attributes values",id:"default-attributes-values",level:3},{value:"Database connections",id:"database-connections",level:3},{value:"Retrieving models",id:"retrieving-models",level:2},{value:"Building queries",id:"building-queries",level:3},{value:"Hidding fields",id:"hidding-fields",level:3},{value:"Retrieve hidden fields",id:"retrieve-hidden-fields",level:4},{value:"Pagination",id:"pagination",level:2},{value:"Collections",id:"collections",level:2},{value:"Retrieve single models &amp; Aggregates",id:"retrieve-single-models--aggregates",level:2},{value:"Not found exceptions",id:"not-found-exceptions",level:3},{value:"Retrieving aggregates",id:"retrieving-aggregates",level:3},{value:"Inserting &amp; Updating models",id:"inserting--updating-models",level:2},{value:"Inserts",id:"inserts",level:3},{value:"Updates",id:"updates",level:3},{value:"Mass updates",id:"mass-updates",level:4},{value:"Mass assignment",id:"mass-assignment",level:3},{value:"Allowing mass assignment for some calls",id:"allowing-mass-assignment-for-some-calls",level:4},{value:"Insert or update (Upserts)",id:"insert-or-update-upserts",level:3},{value:"Deleting models",id:"deleting-models",level:2},{value:"Soft deleting",id:"soft-deleting",level:2},{value:"Restoring soft delete models",id:"restoring-soft-delete-models",level:3},{value:"Permanently deleting a model",id:"permanently-deleting-a-model",level:3},{value:"Querying soft delete models",id:"querying-soft-delete-models",level:3},{value:"Retrieving only soft deleted models",id:"retrieving-only-soft-deleted-models",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"orm-getting-started",children:"ORM: Getting Started"}),"\n",(0,a.jsx)(n.p,{children:"See how to create models in Athenna Framework."}),"\n",(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.p,{children:'Athenna has an object-relational mapper (ORM) that makes it enjoyable\nto interact with your database. When using the Athenna ORM, each database\ntable has a corresponding "Model" that is used to interact with that\ntable. In addition to retrieving records from the database table, the\nmodels allow you to insert, update, and delete records from the table\nas well.'}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Before getting started, be sure to configure a database connection in\nyour application's ",(0,a.jsx)(n.code,{children:"Path.config('database.ts')"})," configuration file.\nFor more information on configuring your database, check out\n",(0,a.jsx)(n.a,{href:"/docs/database/getting-started",children:(0,a.jsx)(n.code,{children:"the database configuration documentation."})})]})}),"\n",(0,a.jsx)(n.h2,{id:"generating-models",children:"Generating models"}),"\n",(0,a.jsxs)(n.p,{children:["To get started, let's create a model. Models typically live in the\n",(0,a.jsx)(n.code,{children:"app/models"})," directory (",(0,a.jsx)(n.code,{children:"Path.models()"}),") and extend the ",(0,a.jsx)(n.a,{href:"https://github.com/AthennaIO/Database/blob/develop/src/models/BaseModel.ts",children:(0,a.jsx)(n.code,{children:"BaseModel"})}),"\nclass. You may use the ",(0,a.jsx)(n.code,{children:"make:model"})," Artisan command to generate a\nnew model:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"node artisan make:model Flight\n"})}),"\n",(0,a.jsx)(n.h2,{id:"columns",children:"Columns"}),"\n",(0,a.jsxs)(n.p,{children:["You will have to define your database columns as properties on the\nclass and annotate them using the ",(0,a.jsx)(n.code,{children:"@Column()"})," annotation. Any property\nannotate with it could be distinguished between standard class properties\nand database columns. Let's see an example of defining the flight table\ncolumns as properties on the ",(0,a.jsx)(n.code,{children:"Flight"})," model:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Column, BaseModel } from '@athenna/database'\n\nexport class Flight extends BaseModel { \n  @Column()\n  public id: number\n\n  @Column()\n  public from: string\n\n  @Column()\n  public to: string\n\n  @Column({ isCreateDate: true })\n  public createdAt: Date\n\n  @Column({ isUpdateDate: true })\n  public updatedAt: Date\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For more information about model options visit the ",(0,a.jsxs)(n.a,{href:"/docs/orm/annotations/#column",children:[(0,a.jsx)(n.code,{children:"@Column()"}),"\nannotation documentation section"]}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"model-conventions",children:"Model conventions"}),"\n",(0,a.jsxs)(n.p,{children:["Models generated by the ",(0,a.jsx)(n.code,{children:"make:model"})," command will be placed in the\n",(0,a.jsx)(n.code,{children:"Path.models()"})," directory. Let's examine a basic model class and\ndiscuss some of Model's key conventions:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { BaseModel } from '@athenna/database'\n\nexport class Flight extends BaseModel {\n  @Column()\n  public id: number\n\n  public static attributes(): Partial<Flight> {\n    return {}\n  }\n\n  public static async definition(): Promise<Partial<Flight>> {\n    return {\n      id: this.faker.number.int()\n    }\n  }\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"table-names",children:"Table names"}),"\n",(0,a.jsxs)(n.p,{children:["After glancing at the example above, you may have noticed that we\ndid not tell the model which database table corresponds to our ",(0,a.jsx)(n.code,{children:"Flight"}),'\nmodel. By convention, the "snake_case", plural name of the class will\nbe used as the table name unless another name is explicitly specified.\nSo, in this case, the model will assume the ',(0,a.jsx)(n.code,{children:"Flight"})," model stores records\nin the ",(0,a.jsx)(n.code,{children:"flights"})," table, while an ",(0,a.jsx)(n.code,{children:"AirTrafficController"})," model would store\nrecords in an ",(0,a.jsx)(n.code,{children:"air_traffic_controllers"})," table."]}),"\n",(0,a.jsxs)(n.p,{children:["If your model's corresponding database table does not fit this convention, you may manually specify the model's table name by\ndefining a static getter ",(0,a.jsx)(n.code,{children:"table"})," on the model:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { BaseModel } from '@athenna/database'\n\nexport class Flight extends BaseModel {\n  public static table() {\n    return 'my_flights'\n  }\n\n  /*...*/\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"primary-keys",children:"Primary keys"}),"\n",(0,a.jsxs)(n.p,{children:["The model will also assume that each model's corresponding database\ntable has a primary key column named ",(0,a.jsx)(n.code,{children:"id"})," if using a SQL driver and\n",(0,a.jsx)(n.code,{children:"_id"})," if using mongo driver. If necessary, you may define\na property ",(0,a.jsx)(n.code,{children:"isMainPrimary"})," as true in one of your model columns to\nspecify a different column that serves as your model's main primary\nkey:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Column, BaseModel } from '@athenna/database'\n\nexport class Flight extends BaseModel {\n  @Column({ isMainPrimary: true })\n  public id: number\n\n  /*...*/\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"default-attributes-values",children:"Default attributes values"}),"\n",(0,a.jsxs)(n.p,{children:["By default, a newly instantiated model instance will not contain any\nattribute values. If you would like to define the default values\nfor some of your model's attributes, you may define a static method\n",(0,a.jsx)(n.code,{children:"attributes()"})," on your model:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Uuid } from '@athenna/common'\nimport { BaseModel } from '@athenna/database'\n\nexport class Flight extends BaseModel {\n  public static attributes(): Partial<Flight> {\n    return {\n      id: Uuid.generate() \n    }\n  }\n\n  /*...*/\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["As you can see we are defining an ",(0,a.jsx)(n.code,{children:"id"})," property in our static method\n",(0,a.jsx)(n.code,{children:"attributes()"}),". This property will have the value of a generated\nuuid randomly everytime that Athenna calls the ",(0,a.jsx)(n.code,{children:"attributes()"})," method.\nAthenna will call the ",(0,a.jsx)(n.code,{children:"attributes()"})," method everytime that ",(0,a.jsx)(n.code,{children:"create()"}),",\n",(0,a.jsx)(n.code,{children:"createMany()"}),", ",(0,a.jsx)(n.code,{children:"update()"})," and ",(0,a.jsx)(n.code,{children:"createOrUpdate()"})," methods are called,\nthis means that a new uuid will be generated for each call:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Flight } from '#app/models/Flight'\n\nconst flight1 = await Flight.create()\nconst flight2 = await Flight.query().create()\n\nconsole.log(flight1.id) // 43bf66ec-658a-4f59-8f89-2aac5ae96e6a\nconsole.log(flight2.id) // cbe35c9c-60f3-11ed-9b6a-0242ac120002\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["But always remember that if you have already set the property in\none of these methods, the ",(0,a.jsx)(n.code,{children:"attributes()"})," method will not overwrite\nthem:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Flight } from '#app/models/Flight'\n\n// Setting my own id attribute\nconst flight = await Flight.create({ \n  id: '299dabf8-60f4-11ed-9b6a-0242ac120002' \n})\n\nconsole.log(flight.id) // 299dabf8-60f4-11ed-9b6a-0242ac120002\n"})})]}),"\n",(0,a.jsx)(n.h3,{id:"database-connections",children:"Database connections"}),"\n",(0,a.jsxs)(n.p,{children:["By default, all models will use the default database connection that\nis configured for your application. If you would like to specify a\ndifferent connection that should be used when interacting with a\nparticular model, you should define a static ",(0,a.jsx)(n.code,{children:"connection()"})," method on\nthe model:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { BaseModel } from '@athenna/database'\n\nexport class Article extends BaseModel {\n  public static connection() {\n    return 'mysql'\n  }\n\n  /*...*/\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"retrieving-models",children:"Retrieving models"}),"\n",(0,a.jsxs)(n.p,{children:["Once you have created a model and its associated database table, you\nare ready to start retrieving data from your database. You can think\nof each model as a powerful query builder allowing you to fluently\nquery the database table associated with the model. The model's\n",(0,a.jsx)(n.code,{children:"findMany()"})," method will retrieve all the records from the model's\nassociated database table:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Flight } from '#app/models/Flight'\n\nconst flights = await Flight.findMany()\n\nflights.forEach(flight => console.log(flight.name))\n"})}),"\n",(0,a.jsx)(n.h3,{id:"building-queries",children:"Building queries"}),"\n",(0,a.jsxs)(n.p,{children:["The model ",(0,a.jsx)(n.code,{children:"findMany()"})," method will return all the results in the model's\ntable. However, since each model serves as a query builder, you may\ninvoke the ",(0,a.jsx)(n.code,{children:"query()"})," method first and add additional constraints to\nqueries and then invoke the ",(0,a.jsx)(n.code,{children:"findMany()"})," method to retrieve the results:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const flights = await Flight.query()\n  .where('active', 1)\n  .orderBy('name')\n  .limit(10)\n  .findMany()\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Since models are query builders, you should review all the methods\nprovided by ",(0,a.jsx)(n.a,{href:"https://athenna.io/docs/database/query-builder",children:(0,a.jsx)(n.code,{children:"Athenna's query builder"})}),".\nYou may use any of these methods when writing your model queries."]})}),"\n",(0,a.jsx)(n.h3,{id:"hidding-fields",children:"Hidding fields"}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes you might need to hide some sensitive field from your model\nqueries, to do so, you can set the ",(0,a.jsx)(n.code,{children:"isHidden"})," property to true in your\n",(0,a.jsx)(n.code,{children:"@Column()"})," annotation:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { BaseModel } from '@athenna/database'\n\nexport class User extends BaseModel {\n  @Column({ isHidden: true })\n  public password: string\n\n  /*...*/\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Everytime you call the ",(0,a.jsx)(n.code,{children:"query()"})," method of your models, Athenna will\nautomatically select all the columns from your model but never the\nones where the ",(0,a.jsx)(n.code,{children:"isHidden"})," property is true."]}),"\n",(0,a.jsx)(n.h4,{id:"retrieve-hidden-fields",children:"Retrieve hidden fields"}),"\n",(0,a.jsxs)(n.p,{children:["If you wish to get all the hidden fields for a specify use case you\ncan use the ",(0,a.jsx)(n.code,{children:"withHidden()"})," method of the query builder:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const { password } = await User.query()\n  .withHidden()\n  .find()\n"})}),"\n",(0,a.jsx)(n.h2,{id:"pagination",children:"Pagination"}),"\n",(0,a.jsxs)(n.p,{children:["The Athenna models also has a ",(0,a.jsx)(n.code,{children:"paginate()"})," method that works exact like\nthe ",(0,a.jsx)(n.a,{href:"/docs/database/query-builder#id-pagination",children:(0,a.jsx)(n.code,{children:"paginate method from the query builder:"})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const page = 0\nconst limit = 10\nconst resourceUrl = '/flights'\nconst where = { active: 1 }\n\nconst {\n  data,\n  meta,\n  links \n} = await Flight.paginate(page, limit, resourceUrl, where)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can also use the ",(0,a.jsx)(n.code,{children:"paginate()"})," method when working with the\n",(0,a.jsx)(n.code,{children:"query()"})," method:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const page = 0\nconst limit = 10\nconst resourceUrl = '/flights'\n\nconst { data, meta, links } = await Flight.query()\n  .where({ active: 1 })\n  .paginate(page, limit, resourceUrl)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"collections",children:"Collections"}),"\n",(0,a.jsxs)(n.p,{children:["As we have seen, the models method ",(0,a.jsx)(n.code,{children:"findMany()"})," retrieve multiple\nrecords from the database. However, the Athenna model has a\n",(0,a.jsx)(n.code,{children:"collection()"})," method that will also retrieve multiple records from\nthe database but return it as an instance of the\n",(0,a.jsx)(n.a,{href:"/docs/digging-deeper/collections",children:(0,a.jsx)(n.code,{children:"Collection"})})," class."]}),"\n",(0,a.jsxs)(n.p,{children:["The Collection class provides a variety of helpful methods for\ninteracting with data collections. For example, the ",(0,a.jsx)(n.code,{children:"reject()"})," method\nmay be used to remove models from a collection based on the results\nof an invoked closure:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const flights = await Flight.collection({ destination: 'Paris' })\n\nconst availableFlights = flights.reject(flight => flight.cancelled)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"retrieve-single-models--aggregates",children:"Retrieve single models & Aggregates"}),"\n",(0,a.jsxs)(n.p,{children:["In addition to retrieving all the records matching a given query, you\nmay also retrieve single records using the ",(0,a.jsx)(n.code,{children:"find()"})," method. Instead of\nreturning an array or collection of models, this method return a single\nmodel instance:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const flight = await Flight.find({ id: 1 })\n\nconst flight = await Flight.find({ active: 1 })\n\nconst flight = await Flight.query().where('active', 1).find()\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes you may wish to perform some other action if no results are\nfound. The ",(0,a.jsx)(n.code,{children:"findOr()"})," method will return a single model instance or,\nif no results are found, execute the given closure. The value returned\nby the closure ",(0,a.jsx)(n.strong,{children:"will be considered the result of the method:"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const flight = await Flight.findOr({ id: 1 }, async () => {\n    // ...\n})\n\nconst flight = await Flight.query()\n  .where('legs', '>', 3)\n  .findOr(async () => {\n    // ...\n  })\n"})}),"\n",(0,a.jsx)(n.h3,{id:"not-found-exceptions",children:"Not found exceptions"}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes you may wish to throw an exception if a model is not found.\nThis is particularly useful in routes or controllers. The ",(0,a.jsx)(n.code,{children:"findOrFail()"}),"\nmethod will retrieve the first result of the query; however, if no\nresult is found, an ",(0,a.jsx)(n.code,{children:"NotFoundDataException"})," will be thrown:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const flight = await Flight.findOrFail({ id: 1 })\n\nconst flight = await Flight.query().where('legs', '>', 3).findOrFail()\n"})}),"\n",(0,a.jsx)(n.h3,{id:"retrieving-aggregates",children:"Retrieving aggregates"}),"\n",(0,a.jsxs)(n.p,{children:["When interacting with models, you may also use the ",(0,a.jsx)(n.code,{children:"count()"}),", ",(0,a.jsx)(n.code,{children:"sum()"}),",\n",(0,a.jsx)(n.code,{children:"max()"}),", and other aggregate methods provided by the\n",(0,a.jsx)(n.a,{href:"/docs/database/query-builder",children:(0,a.jsx)(n.code,{children:"Athenna query builder"})}),".\nAs you might expect, these methods return a scalar value instead of\na model instance:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const count = await Flight.query().where('active', 1).count()\n\nconst max = await Flight.query().where('active', 1).max('price')\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["Aggregate methods will not exist directly in your models, you will\nalways need to call the ",(0,a.jsx)(n.code,{children:"query()"})," method first and then execute it\nusing one of then."]})}),"\n",(0,a.jsx)(n.h2,{id:"inserting--updating-models",children:"Inserting & Updating models"}),"\n",(0,a.jsx)(n.h3,{id:"inserts",children:"Inserts"}),"\n",(0,a.jsxs)(n.p,{children:["Of course, when using the models, we don't only need to retrieve then\nfrom the database. We also need to insert new records. Thankfully, the\nmodels makes it simple. To insert a new record into the database, you\nshould instantiate a new model instance and set attributes on the model.\nThen, call the ",(0,a.jsx)(n.code,{children:"save()"})," method on the model instance:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const flight = new Flight()\n\nflight.name = 'Brazil to Ukraine'\n\nawait flight.save()\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, we assign the ",(0,a.jsx)(n.code,{children:"name"})," field to the name attribute of\nthe ",(0,a.jsx)(n.code,{children:"#app/models/Flight"})," model instance. When we call the ",(0,a.jsx)(n.code,{children:"save()"}),"\nmethod, a record will be inserted into the database. The model's\n",(0,a.jsx)(n.code,{children:"createdAt"})," and ",(0,a.jsx)(n.code,{children:"updatedAt"})," timestamps will automatically be set\nwhen the ",(0,a.jsx)(n.code,{children:"save()"})," method is called, so there is no need to set them\nmanually."]}),"\n",(0,a.jsxs)(n.p,{children:["Alternatively, you may use the ",(0,a.jsx)(n.code,{children:"create()"}),' method to "save" a new model\nusing a single statement. The inserted model instance will be returned\nto you by the ',(0,a.jsx)(n.code,{children:"create()"})," method:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const flight = await Flight.create({ name: 'Brazil to Angola' })\n"})}),"\n",(0,a.jsxs)(n.p,{children:["However, we highly recommend that before using the ",(0,a.jsx)(n.code,{children:"create()"})," method,\nyou specify the ",(0,a.jsx)(n.code,{children:"persist"})," field as ",(0,a.jsx)(n.code,{children:"false"})," in fields you dont want to\nbe persisted. This property will help your models to get protected against mass assignment\nvulnerabilities. To learn more about mass assignment, please consult\nthe ",(0,a.jsx)(n.a,{href:"/docs/orm/getting-started#mass-assignment",children:(0,a.jsx)(n.code,{children:"mass assignment documentation."})})]}),"\n",(0,a.jsx)(n.h3,{id:"updates",children:"Updates"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"save()"})," method may also be used to update models that already exist\nin the database. To update a model, you should retrieve it and set any\nattributes you wish to update. Then, you should call the model's ",(0,a.jsx)(n.code,{children:"save()"}),"\nmethod. Again, the ",(0,a.jsx)(n.code,{children:"updatedAt"})," timestamp will automatically be updated,\nso there is no need to manually set its value:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const flight = await Flight.query()\n  .where({ id: 1 })\n  .find()\n\nflight.name = 'Paris to London'\n\nawait flight.save()\n"})}),"\n",(0,a.jsx)(n.h4,{id:"mass-updates",children:"Mass updates"}),"\n",(0,a.jsxs)(n.p,{children:["Updates can also be performed against models that match a given query.\nIn this example, all flights that are ",(0,a.jsx)(n.code,{children:"active"})," and have a ",(0,a.jsx)(n.code,{children:"destination"}),"\nof ",(0,a.jsx)(n.code,{children:"San Diego"})," will be marked as delayed:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"await Flight.query()\n  .where('active', 1)\n  .where('destination', 'San Diego')\n  .update({ delayed: 1 })\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"update()"})," method expects a record of columns and value pairs\nrepresenting the columns that should be updated. The ",(0,a.jsx)(n.code,{children:"update()"})," method\nwill always return one instance of your model if your query only modifies\none value. If you query modifies more than one the ",(0,a.jsx)(n.code,{children:"update()"})," method will\nreturn an array of your models instance."]}),"\n",(0,a.jsx)(n.h3,{id:"mass-assignment",children:"Mass assignment"}),"\n",(0,a.jsxs)(n.p,{children:["You may use the ",(0,a.jsx)(n.code,{children:"create()"}),' method to "save" a new model using a single\nstatement. The inserted model instance will be returned to you by the\nmethod:']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const flight = await Flight.create({\n  name: 'London to Korea',\n})\n"})}),"\n",(0,a.jsxs)(n.p,{children:["However, before using the ",(0,a.jsx)(n.code,{children:"create()"})," method, we extremely recommend\nyou to specify which fields on your model class should not be persisted\nin database. This property are will help you to stay protected against\nmass assignment vulnerabilities."]}),"\n",(0,a.jsxs)(n.p,{children:["A mass assignment vulnerability occurs when a user passes an unexpected\nfield using some object and that field changes a column in your\ndatabase that you did not expect. For example, a malicious user might\nsend an ",(0,a.jsx)(n.code,{children:"isAdmin"})," parameter through an HTTP request, which is then passed\nto your model's ",(0,a.jsx)(n.code,{children:"create()"})," method, allowing the user to escalate\nthemselves to an administrator."]}),"\n",(0,a.jsxs)(n.p,{children:["So, to get started, you should define which model properties you dont\nwant to be persisted in database. You may do this using by setting the\n",(0,a.jsx)(n.code,{children:"persist"})," property to false in your ",(0,a.jsx)(n.code,{children:"@Column()"})," annotation. For example,\nlet's make the ",(0,a.jsx)(n.code,{children:"isAdmin"})," attribute a filed that could not be persisted:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { BaseModel } from '@athenna/database'\n\nexport class Flight extends BaseModel {\n  @Column() // By default persist is already `true`\n  public name: string\n\n  @Colum({ persist: false })\n  public isAdmin: boolean\n\n  /*...*/\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Once you have specified which attributes are mass assignable or not,\nyou may  use the ",(0,a.jsx)(n.code,{children:"create()"})," method to insert a new record in the database. The\n",(0,a.jsx)(n.code,{children:"create()"})," method returns the newly created model instance:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const flight = await Flight.create({ name: 'London to Paris' })\n"})}),"\n",(0,a.jsx)(n.h4,{id:"allowing-mass-assignment-for-some-calls",children:"Allowing mass assignment for some calls"}),"\n",(0,a.jsxs)(n.p,{children:["You can also allow mass assignment when calling your ",(0,a.jsx)(n.code,{children:"create()"}),",\n",(0,a.jsx)(n.code,{children:"createMany()"}),", ",(0,a.jsx)(n.code,{children:"createOrUpdate()"})," and ",(0,a.jsx)(n.code,{children:"update()"})," methods:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const data = { name: 'Brazil to Mexico' }\nconst where = { active: 1 }\nconst cleanPersist = false \n\nawait Flight.create(data, cleanPersist)\nawait Flight.query().create(data, cleanPersist)\n\nawait Flight.createMany([data], cleanPersist)\nawait Flight.query().createMany([data], cleanPersist)\n\nawait Flight.createOrUpdate(where, data, cleanPersist)\nawait Flight.query().createOrUpdate(where, data, cleanPersist)\n\nawait Flight.update(where, data, cleanPersist)\nawait Flight.query().update(where, data, cleanPersist)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"insert-or-update-upserts",children:"Insert or update (Upserts)"}),"\n",(0,a.jsxs)(n.p,{children:["Occasionally, you may need to update an existing model or create a\nnew model if no matching model exists. The ",(0,a.jsx)(n.code,{children:"createOrUpdate()"})," method\nwill update the model if some record is found by the query that you\nhave built, otherwise the record will be created."]}),"\n",(0,a.jsxs)(n.p,{children:["In the example below, if a flight exists with a ",(0,a.jsx)(n.code,{children:"departure"})," location\nof ",(0,a.jsx)(n.code,{children:"Oakland"})," and a ",(0,a.jsx)(n.code,{children:"destination"})," location of ",(0,a.jsx)(n.code,{children:"San Diego"}),", its ",(0,a.jsx)(n.code,{children:"price"}),"\nand ",(0,a.jsx)(n.code,{children:"discounted"})," columns will be updated. If no such flight exists,\na new flight will be created:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const where = {\n  departure: 'Oakland',\n  destination: 'San Diego'\n}\nconst data = {\n  price: 99,\n  discounted: 1,\n  departure: 'Oakland',\n  destination: 'San Diego'\n}\n\nawait Flight.createOrUpdate(where, data)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Or you can use the query builder instead:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"await Flight.query()\n  .where('departure', 'Oakland')\n  .where('destination', 'San Diego')\n  .createOrUpdate({\n    price: 99,\n    discounted: 1,\n    departure: 'Oakland',\n    destination: 'San Diego'\n  })\n"})}),"\n",(0,a.jsx)(n.h2,{id:"deleting-models",children:"Deleting models"}),"\n",(0,a.jsxs)(n.p,{children:["To delete a model, you may call the ",(0,a.jsx)(n.code,{children:"delete()"})," method on the model\ninstance:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Flight } from '#app/models/Flight'\n\nconst where = { id: 1 }\nawait Flight.delete(where)\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can also delete an instance directly:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Flight } from '#app/models/Flight'\n\nconst where = { id: 1 }\nconst flight = await Flight.find(where)\n\nawait flight.delete()\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You may call the ",(0,a.jsx)(n.code,{children:"truncate()"})," method to delete all the model's associated\ndatabase records. The ",(0,a.jsx)(n.code,{children:"truncate"})," operation will also reset any\nauto-incrementing IDs on the model's associated table:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"await Flight.truncate()\n"})}),"\n",(0,a.jsx)(n.h2,{id:"soft-deleting",children:"Soft deleting"}),"\n",(0,a.jsxs)(n.p,{children:['In addition to actually removing records from your database, the ORM\ncan also "soft delete" models. When models are soft deleted, they are\nnot actually removed from your database. Instead, a ',(0,a.jsx)(n.code,{children:"deletedAt"}),'\nattribute is set on the model indicating the date and time at which\nthe model was "deleted". To enable soft deletes for a model, you just\nneed to set up one column with ',(0,a.jsx)(n.code,{children:"isDeleteDate"})," as true:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"export class Flight extends BaseModel {\n  @Column({ isDeleteDate: true }) \n  public deletedAt: Date\n\n  /*...*/\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Now, when you call the ",(0,a.jsx)(n.code,{children:"delete()"})," method on the model, Athenna will\nupdate your model with the current date and time in your ",(0,a.jsx)(n.code,{children:"deletedAt"}),"\ncolumn. However, the model's database record will be left in the table.\nWhen querying a model that uses soft deletes, the soft deleted models\nwill automatically be excluded from all query results:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const where = { id: 1 }\nconst flight = await Flight.find(where)\n\nawait flight.delete()\n\n// The flight with id = 1 will not be inside the above array.\nconst flights = await Flight.findMany()\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To determine if a given model instance has been soft deleted, you may\nuse the ",(0,a.jsx)(n.code,{children:"isTrashed()"})," method:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"if (flight.isTrashed()) {\n    //\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"restoring-soft-delete-models",children:"Restoring soft delete models"}),"\n",(0,a.jsxs)(n.p,{children:['Sometimes you may wish to "un-delete" a soft deleted model. To restore\na soft deleted model, you may call the ',(0,a.jsx)(n.code,{children:"restore()"})," method on a model\ninstance. The ",(0,a.jsx)(n.code,{children:"restore()"})," method will set the model's ",(0,a.jsx)(n.code,{children:"deletedAt"})," column\nto ",(0,a.jsx)(n.code,{children:"null"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"await flight.restore()\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You may also use the ",(0,a.jsx)(n.code,{children:"restore()"})," method in a query to restore multiple\nmodels:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const flights = await Flight.query()\n  .where('airlineId', 1)\n  .restore()\n"})}),"\n",(0,a.jsx)(n.h3,{id:"permanently-deleting-a-model",children:"Permanently deleting a model"}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes you may need to truly remove a model from your database. You\nmay use the ",(0,a.jsx)(n.code,{children:"delete()"})," method with a ",(0,a.jsx)(n.code,{children:"true"})," value in the first argument\nto permanently remove a soft deleted model from the database table:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const force = true\nawait flight.delete(force)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"querying-soft-delete-models",children:"Querying soft delete models"}),"\n",(0,a.jsxs)(n.p,{children:["As noted above, soft deleted models will automatically be excluded from\nquery results. However, you may force soft deleted models to be included\nin a query's results by calling the ",(0,a.jsx)(n.code,{children:"withTrashed()"})," method on the query:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const flights = await Flight.query()\n  .withTrashed()\n  .where('airlineId', 1)\n  .findMany()\n"})}),"\n",(0,a.jsx)(n.h4,{id:"retrieving-only-soft-deleted-models",children:"Retrieving only soft deleted models"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"onlyTrashed()"})," method will retrieve only soft deleted models:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const flights = await Flight.query()\n  .onlyTrashed()\n  .where('airlineId', 1)\n  .findMany()\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>l});var a=t(7294);const s={},i=a.createContext(s);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);
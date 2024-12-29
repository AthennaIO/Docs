"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[177],{4618:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"orm/annotations","title":"Annotations","description":"Check all available ORM annotations and it options.","source":"@site/docs/orm/annotations.mdx","sourceDirName":"orm","slug":"/orm/annotations","permalink":"/docs/orm/annotations","draft":false,"unlisted":false,"editUrl":"https://github.com/AthennaIO/Docs/tree/main/docs/orm/annotations.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Annotations","sidebar_position":5,"toc_max_heading_level":2,"description":"Check all available ORM annotations and it options."},"sidebar":"tutorialSidebar","previous":{"title":"Extending Models","permalink":"/docs/orm/extending-models"},"next":{"title":"Factories","permalink":"/docs/orm/factories"}}');var s=i(4848),o=i(8453);const t={title:"Annotations",sidebar_position:5,toc_max_heading_level:2,description:"Check all available ORM annotations and it options."},d="ORM: Annotations",r={},c=[{value:"<code>@Column()</code>",id:"column",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>length</code>",id:"length",level:3},{value:"<code>defaultTo</code>",id:"defaultto",level:3},{value:"<code>isPrimary</code>",id:"isprimary",level:3},{value:"<code>isHidden</code>",id:"ishidden",level:3},{value:"<code>isUnique</code>",id:"isunique",level:3},{value:"<code>isNullable</code>",id:"isnullable",level:3},{value:"<code>isIndex</code>",id:"isindex",level:3},{value:"<code>isSparse</code>",id:"issparse",level:3},{value:"<code>persist</code>",id:"persist",level:3},{value:"<code>isCreateDate</code>",id:"iscreatedate",level:3},{value:"<code>isUpdateDate</code>",id:"isupdatedate",level:3},{value:"<code>isDeleteDate</code>",id:"isdeletedate",level:3},{value:"<code>@HasOne()</code>",id:"hasone",level:2},{value:"<code>isIncluded</code>",id:"isincluded",level:3},{value:"<code>closure</code>",id:"closure",level:3},{value:"<code>primaryKey</code>",id:"primarykey",level:3},{value:"<code>foreignKey</code>",id:"foreignkey",level:3},{value:"<code>@HasMany()</code>",id:"hasmany",level:2},{value:"<code>isIncluded</code>",id:"isincluded-1",level:3},{value:"<code>closure</code>",id:"closure-1",level:3},{value:"<code>primaryKey</code>",id:"primarykey-1",level:3},{value:"<code>foreignKey</code>",id:"foreignkey-1",level:3},{value:"<code>@BelongsTo()</code>",id:"belongsto",level:2},{value:"<code>isIncluded</code>",id:"isincluded-2",level:3},{value:"<code>closure</code>",id:"closure-2",level:3},{value:"<code>primaryKey</code>",id:"primarykey-2",level:3},{value:"<code>foreignKey</code>",id:"foreignkey-2",level:3},{value:"<code>@BelongsToMany()</code>",id:"belongstomany",level:2},{value:"<code>isIncluded</code>",id:"isincluded-3",level:3},{value:"<code>closure</code>",id:"closure-3",level:3},{value:"<code>pivotTable</code>",id:"pivottable",level:3},{value:"<code>primaryKey</code>",id:"primarykey-3",level:3},{value:"<code>foreignKey</code>",id:"foreignkey-3",level:3},{value:"<code>relationPrimaryKey</code>",id:"relationprimarykey",level:3},{value:"<code>relationForeignKey</code>",id:"relationforeignkey",level:3}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"orm-annotations",children:"ORM: Annotations"})}),"\n",(0,s.jsx)(n.p,{children:"Check all available ORM annotations and it options."}),"\n",(0,s.jsx)(n.h2,{id:"column",children:(0,s.jsx)(n.code,{children:"@Column()"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@Column()"})," annotation marks a model property as a database column:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Column, BaseModel } from '@athenna/database'\n\nexport class Flight extends BaseModel {\n  @Column()\n  public id: number\n\n  @Column()\n  public from: string\n\n  @Column()\n  public to: string\n\n  @Column({ isCreateDate: true })\n  public createdAt: Date\n\n  @Column({ isUpdateDate: true })\n  public updatedAt: Date\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can also define any of the following optional properties:"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:(0,s.jsx)(n.code,{children:"name"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: the name of your class property (e.g ",(0,s.jsx)(n.code,{children:"name"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Map which will be the name of your column in database:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Column({ name: 'my_name' })\npublic name: string\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The default value of this property will be the name of\nyour class property as ",(0,s.jsx)(n.strong,{children:"camelCase"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"type",children:(0,s.jsx)(n.code,{children:"type"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: the type of your class property (e.g ",(0,s.jsx)(n.code,{children:"String"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Map the type of your column. This property is usefull\nonly to synchronize your model with database:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Column({ type: Number })\npublic id: string\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default the type of your model will be set as the\ntype of your class property, in the example above, if\nwe remove the ",(0,s.jsx)(n.code,{children:"type"})," property, it would automatically\nbe set as ",(0,s.jsx)(n.code,{children:"String"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"length",children:(0,s.jsx)(n.code,{children:"length"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Map the column length in database. This property is\nusefull only when synchronizing your model with database:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Column({ length: 10 })\npublic name: string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"defaultto",children:(0,s.jsx)(n.code,{children:"defaultTo"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"null"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This property doesn't change the behavior in your database,\nthey are used only when the class property is undefined or\nnull before running your model ",(0,s.jsx)(n.code,{children:"create()"}),", ",(0,s.jsx)(n.code,{children:"createMany()"}),",\n",(0,s.jsx)(n.code,{children:"update()"})," and ",(0,s.jsx)(n.code,{children:"createOrUpdate()"})," methods:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Column({ defaultTo: null })\npublic deletedAt: Date\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["The value set to ",(0,s.jsx)(n.code,{children:"defaulTo"})," property will only be used when\nthe value for the specified column was not provided when calling\nthe above methods and also when it was not set in static ",(0,s.jsx)(n.code,{children:"attributes()"}),"\nmethod of your model."]})}),"\n",(0,s.jsx)(n.h3,{id:"isprimary",children:(0,s.jsx)(n.code,{children:"isPrimary"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Set if the column is a primary key:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Column({ isPrimary: true })\npublic id: number\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ishidden",children:(0,s.jsx)(n.code,{children:"isHidden"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Set if the field should be hidden when executing the\n",(0,s.jsx)(n.code,{children:"toJSON()"})," method of the model:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Column({ isHidden: true })\npublic password: string\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["To force return hidden fields in ",(0,s.jsx)(n.code,{children:"toJSON()"})," calls,\nuse the ",(0,s.jsx)(n.code,{children:"withHidden"})," option:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const flight = await Flight.find()\n\nconst flightJson = flight.toJSON({ withHidden: true })\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"isunique",children:(0,s.jsx)(n.code,{children:"isUnique"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Set if the column needs to have a unique value in database:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Column({ isUnique: true })\npublic email: string\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If you try to create duplicated values Athenna will throw an\nexception until it gets in your database. This means that you\nmigration could have or not the unique index defined"})}),"\n",(0,s.jsx)(n.h3,{id:"isnullable",children:(0,s.jsx)(n.code,{children:"isNullable"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Set if the column is nullable or not:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Column({ isNullable: false })\npublic name: string\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Just like ",(0,s.jsx)(n.code,{children:"isUnique"})," property, if ",(0,s.jsx)(n.code,{children:"isNullable"})," is set to false\nand you try to create a model with null or undefined ",(0,s.jsx)(n.code,{children:"name"}),", it\nwill throw an exception."]})}),"\n",(0,s.jsx)(n.h3,{id:"isindex",children:(0,s.jsx)(n.code,{children:"isIndex"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Set if the column is an index:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Column({ isIndex: true })\npublic email: string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"issparse",children:(0,s.jsx)(n.code,{children:"isSparse"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Set if the column is an index sparse:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Column({ isSparse: true })\npublic email: string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"persist",children:(0,s.jsx)(n.code,{children:"persist"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Set if the column should be persist in database\nor not. If set as ",(0,s.jsx)(n.code,{children:"false"}),", Athenna will remove this\ncolumn from operations like create or update, but it\nwill still me available in listing operations:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Column({ persist: false })\npublic name: string\n"})}),"\n",(0,s.jsx)(n.h3,{id:"iscreatedate",children:(0,s.jsx)(n.code,{children:"isCreateDate"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Set if the column is a createdAt column. If this option\nis ",(0,s.jsx)(n.code,{children:"true"}),", Athenna will automatically set a ",(0,s.jsx)(n.code,{children:"new Date()"}),"\nvalue in the column when creating it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Column({ isCreateDate: true })\npublic createdAt: Date\n"})}),"\n",(0,s.jsx)(n.h3,{id:"isupdatedate",children:(0,s.jsx)(n.code,{children:"isUpdateDate"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Set if the column is an updatedAt column. If this option\nis ",(0,s.jsx)(n.code,{children:"true"}),", Athenna will automatically set a ",(0,s.jsx)(n.code,{children:"new Date()"}),"\nvalue in the column when creating it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Column({ isUpdateDate: true })\npublic updatedAt: Date\n"})}),"\n",(0,s.jsx)(n.h3,{id:"isdeletedate",children:(0,s.jsx)(n.code,{children:"isDeleteDate"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Set if the column is a deletedAt column and also if the model\nis using soft delete approach. If this option is ",(0,s.jsx)(n.code,{children:"true"}),", Athenna\nwill automatically set a ",(0,s.jsx)(n.code,{children:"new Date()"})," value in the column when\ndeleting it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Column({ isDeleteDate: true })\npublic deletedAt: Date\n"})}),"\n",(0,s.jsx)(n.h2,{id:"hasone",children:(0,s.jsx)(n.code,{children:"@HasOne()"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@HasOne()"})," annotation marks a model property as an\n",(0,s.jsx)(n.a,{href:"/docs/orm/relationships#one-to-one",children:"one-to-one relation"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Pilot } from '#src/models/Pilot'\nimport type { Relation } from '@athenna/database'\nimport { Column, HasOne, BaseModel } from '@athenna/database'\n\nexport class Flight extends BaseModel {\n  @Column()\n  public id: number\n\n  @HasOne(() => Pilot)\n  public pilot: Relation<Pilot>\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The second argument is an object that accepts any of the following\noptions:"}),"\n",(0,s.jsx)(n.h3,{id:"isincluded",children:(0,s.jsx)(n.code,{children:"isIncluded"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Set if the relation will be included when fetching data from the\nparent model:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@HasOne(() => Pilot, { isIncluded: true })\npublic pilot: Relation<Pilot>\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["This option is used by methods like ",(0,s.jsx)(n.code,{children:"with()"})," to eager load your\nrelation in the parent model:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const flight = await Flight.query()\n  .with('pilot') // \ud83d\udc48 Set isIncluded to true in query schema.\n  .find()\n"})}),(0,s.jsxs)(n.p,{children:["This means that if you set this property to ",(0,s.jsx)(n.code,{children:"true"}),", it will by\ndefault load your relation every time."]})]}),"\n",(0,s.jsx)(n.h3,{id:"closure",children:(0,s.jsx)(n.code,{children:"closure"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Set a closure that should be called when ",(0,s.jsx)(n.code,{children:"isIncluded"})," is true,\nadding to possibility to call methods from the query builder\nof the relationship:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@HasOne(() => Pilot, { \n  isIncluded: true,\n  closure: (query) => query.select('id')\n})\npublic pilot: Relation<Pilot>\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Just like ",(0,s.jsxs)(n.a,{href:"/docs/orm/annotations#isincluded",children:[(0,s.jsx)(n.code,{children:"isIncluded"})," property"]}),"\nthis option is used by methods like ",(0,s.jsx)(n.code,{children:"with()"})," when eager loading your\nrelation in your parent model:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const flight = await Flight.query()\n  // Set isIncluded to true and add a select \n  // statement to the relationship query builder.\n  .with('pilot', (query) => query.select('id'))\n  .find()\n"})}),(0,s.jsxs)(n.p,{children:["This means that if you set this property, it will by default be called\nwhen loading your relation without the need to set a second argument to\nthe ",(0,s.jsx)(n.code,{children:"with()"})," method."]})]}),"\n",(0,s.jsx)(n.h3,{id:"primarykey",children:(0,s.jsx)(n.code,{children:"primaryKey"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: the ",(0,s.jsx)(n.code,{children:"isMainPrimary"})," of the parent model (e.g ",(0,s.jsx)(n.code,{children:"id"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Define the primary key of the relationship:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@HasOne(() => Pilot, { primaryKey: 'myId' })\npublic pilot: Relation<Pilot>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"foreignkey",children:(0,s.jsx)(n.code,{children:"foreignKey"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: the parent model name in camel case\nwith an ",(0,s.jsx)(n.code,{children:"Id"})," at the end (e.g ",(0,s.jsx)(n.code,{children:"flightId"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Define the foreign key of the relationship:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@HasOne(() => Pilot, { foreignKey: 'myFlightId' })\npublic pilot: Relation<Pilot>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"hasmany",children:(0,s.jsx)(n.code,{children:"@HasMany()"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@HasMany()"})," annotation marks a model property as an\n",(0,s.jsx)(n.a,{href:"/docs/orm/relationships#one-to-many",children:"one-to-many relation"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Comment } from '#src/models/Comment'\nimport type { Relation } from '@athenna/database'\nimport { Column, HasOne, BaseModel } from '@athenna/database'\n\nexport class Post extends BaseModel {\n  @Column()\n  public id: number\n\n  @HasMany(() => Comment)\n  public comments: Relation<Comment[]>\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The second argument is an object that accepts any of the following\noptions:"}),"\n",(0,s.jsx)(n.h3,{id:"isincluded-1",children:(0,s.jsx)(n.code,{children:"isIncluded"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Set if the relation will be included when fetching data from the\nparent model:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@HasMany(() => Comment, { isIncluded: true })\npublic comments: Relation<Comment[]>\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["This option is used by methods like ",(0,s.jsx)(n.code,{children:"with()"})," to eager load your\nrelation in the parent model:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const post = await Post.query()\n  .with('comments') // \ud83d\udc48 Set isIncluded to true in query schema.\n  .find()\n"})}),(0,s.jsxs)(n.p,{children:["This means that if you set this property to ",(0,s.jsx)(n.code,{children:"true"}),", it will by\ndefault load your relation every time."]})]}),"\n",(0,s.jsx)(n.h3,{id:"closure-1",children:(0,s.jsx)(n.code,{children:"closure"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Set a closure that should be called when ",(0,s.jsx)(n.code,{children:"isIncluded"})," is true,\nadding to possibility to call methods from the query builder\nof the relationship:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@HasMany(() => Comment, { \n  isIncluded: true,\n  closure: (query) => query.select('id')\n})\npublic comments: Relation<Comment[]>\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Just like ",(0,s.jsxs)(n.a,{href:"/docs/orm/annotations#isincluded-1",children:[(0,s.jsx)(n.code,{children:"isIncluded"})," property"]}),"\nthis option is used by methods like ",(0,s.jsx)(n.code,{children:"with()"})," when eager loading your\nrelation in your parent model:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const post = await Post.query()\n  // Set isIncluded to true and add a select \n  // statement to the relationship query builder.\n  .with('comments', (query) => query.select('id'))\n  .find()\n"})}),(0,s.jsxs)(n.p,{children:["This means that if you set this property, it will by default be called\nwhen loading your relation without the need to set a second argument to\nthe ",(0,s.jsx)(n.code,{children:"with()"})," method."]})]}),"\n",(0,s.jsx)(n.h3,{id:"primarykey-1",children:(0,s.jsx)(n.code,{children:"primaryKey"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: the ",(0,s.jsx)(n.code,{children:"isMainPrimary"})," of the parent model (e.g ",(0,s.jsx)(n.code,{children:"id"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Define the primary key of the relationship:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@HasMany(() => Comment, { primaryKey: 'myId' })\npublic comments: Relation<Comment>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"foreignkey-1",children:(0,s.jsx)(n.code,{children:"foreignKey"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: the parent model name in camel case\nwith an ",(0,s.jsx)(n.code,{children:"Id"})," at the end (e.g ",(0,s.jsx)(n.code,{children:"flightId"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Define the foreign key of the relationship:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@HasMany(() => Comment, { foreignKey: 'myPostId' })\npublic comments: Relation<Comment[]>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"belongsto",children:(0,s.jsx)(n.code,{children:"@BelongsTo()"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@BelongsTo()"})," annotation marks a model property as the inverse side of\nan ",(0,s.jsx)(n.a,{href:"/docs/orm/relationships#defining-the-inverse-of-the-relationship",children:"one-to-one relation"})," and\nthe inverse side of an ",(0,s.jsx)(n.a,{href:"/docs/orm/relationships#defining-the-inverse-of-the-relationship-many-to-one",children:"one-to-many relation (many-to-one)"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { User } from '#src/models/User'\nimport type { Relation } from '@athenna/database'\nimport { Column, BelongsTo, BaseModel } from '@athenna/database'\n\nexport class Phone extends BaseModel {\n  @Column()\n  public id: number\n\n  @Column()\n  public userId: number\n\n  @BelongsTo(() => User)\n  public user: Relation<User>\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The second argument is an object that accepts any of the following\noptions:"}),"\n",(0,s.jsx)(n.h3,{id:"isincluded-2",children:(0,s.jsx)(n.code,{children:"isIncluded"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Set if the relation will be included when fetching data from the\nparent model:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@BelongsTo(() => User, { isIncluded: true })\npublic user: Relation<User>\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["This option is used by methods like ",(0,s.jsx)(n.code,{children:"with()"})," to eager load your\nrelation in the parent model:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const phone = await Phone.query()\n  .with('user') // \ud83d\udc48 Set isIncluded to true in query schema.\n  .find()\n"})}),(0,s.jsxs)(n.p,{children:["This means that if you set this property to ",(0,s.jsx)(n.code,{children:"true"}),", it will by\ndefault load your relation every time."]})]}),"\n",(0,s.jsx)(n.h3,{id:"closure-2",children:(0,s.jsx)(n.code,{children:"closure"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Set a closure that should be called when ",(0,s.jsx)(n.code,{children:"isIncluded"})," is true,\nadding to possibility to call methods from the query builder\nof the relationship:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@BelongsTo(() => User, { \n  isIncluded: true,\n  closure: (query) => query.select('id')\n})\npublic user: Relation<User>\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Just like ",(0,s.jsxs)(n.a,{href:"/docs/orm/annotations#isincluded-2",children:[(0,s.jsx)(n.code,{children:"isIncluded"})," property"]}),"\nthis option is used by methods like ",(0,s.jsx)(n.code,{children:"with()"})," when eager loading your\nrelation in your parent model:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const phone = await Phone.query()\n  // Set isIncluded to true and add a select \n  // statement to the relationship query builder.\n  .with('user', (query) => query.select('id'))\n  .find()\n"})}),(0,s.jsxs)(n.p,{children:["This means that if you set this property, it will by default be called\nwhen loading your relation without the need to set a second argument to\nthe ",(0,s.jsx)(n.code,{children:"with()"})," method."]})]}),"\n",(0,s.jsx)(n.h3,{id:"primarykey-2",children:(0,s.jsx)(n.code,{children:"primaryKey"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: the ",(0,s.jsx)(n.code,{children:"isMainPrimary"})," of the parent model (e.g ",(0,s.jsx)(n.code,{children:"id"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Define the primary key of the relationship:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@BelongsTo(() => User, { primaryKey: 'myId' })\npublic user: Relation<User>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"foreignkey-2",children:(0,s.jsx)(n.code,{children:"foreignKey"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: the relation model name in camel case\nwith an ",(0,s.jsx)(n.code,{children:"Id"})," at the end (e.g ",(0,s.jsx)(n.code,{children:"userId"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Define the foreign key of the relationship:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@BelongsTo(() => User, { foreignKey: 'myUserId' })\npublic user: Relation<User>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"belongstomany",children:(0,s.jsx)(n.code,{children:"@BelongsToMany()"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@BelongsToMany()"})," annotation marks a model property as a\n",(0,s.jsx)(n.a,{href:"/docs/orm/relationships#many-to-many",children:"many-to-many relation"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Role } from '#src/models/Role'\nimport type { Relation } from '@athenna/database'\nimport { RolesUsers } from '#src/models/RolesUsers'\nimport { Column, BaseModel, BelongsToMany } from '@athenna/database'\n\nexport class User extends BaseModel {\n  @Column()\n  public id: number\n\n  @BelongsToMany(() => Role, () => RolesUsers)\n  public roles: Relation<Role[]>\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The third argument is an object that accepts any of the following\noptions:"}),"\n",(0,s.jsx)(n.h3,{id:"isincluded-3",children:(0,s.jsx)(n.code,{children:"isIncluded"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Set if the relation will be included when fetching data from the\nparent model:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@BelongsToMany(() => Role, () => RolesUsers, { \n  isIncluded: true \n})\npublic roles: Relation<Role[]>\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["This option is used by methods like ",(0,s.jsx)(n.code,{children:"with()"})," to eager load your\nrelation in the parent model:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const user = await User.query()\n  .with('roles') // \ud83d\udc48 Set isIncluded to true in query schema.\n  .find()\n"})}),(0,s.jsxs)(n.p,{children:["This means that if you set this property to ",(0,s.jsx)(n.code,{children:"true"}),", it will by\ndefault load your relation every time."]})]}),"\n",(0,s.jsx)(n.h3,{id:"closure-3",children:(0,s.jsx)(n.code,{children:"closure"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Set a closure that should be called when ",(0,s.jsx)(n.code,{children:"isIncluded"})," is true,\nadding to possibility to call methods from the query builder\nof the relationship:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@BelongsToMany(() => Role, () => RolesUsers, { \n  isIncluded: true,\n  closure: (query) => query.select('id')\n})\npublic roles: Relation<Roles[]>\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Just like ",(0,s.jsxs)(n.a,{href:"/docs/orm/annotations#isincluded-3",children:[(0,s.jsx)(n.code,{children:"isIncluded"})," property"]}),"\nthis option is used by methods like ",(0,s.jsx)(n.code,{children:"with()"})," when eager loading your\nrelation in your parent model:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const user = await User.query()\n  // Set isIncluded to true and add a select \n  // statement to the relationship query builder.\n  .with('roles', (query) => query.select('id'))\n  .find()\n"})}),(0,s.jsxs)(n.p,{children:["This means that if you set this property, it will by default be called\nwhen loading your relation without the need to set a second argument to\nthe ",(0,s.jsx)(n.code,{children:"with()"})," method."]})]}),"\n",(0,s.jsx)(n.h3,{id:"pivottable",children:(0,s.jsx)(n.code,{children:"pivotTable"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: Athenna will call the ",(0,s.jsx)(n.code,{children:"table()"})," method of the pivot model.\n(e.g RolesUsers.table() -> ",(0,s.jsx)(n.code,{children:"roles_users"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Define the pivot table of the relationship:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@BelongsToMany(() => Role, () => RolesUsers, { \n  pivotTable: 'roles_users' \n})\npublic roles: Relation<Role>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"primarykey-3",children:(0,s.jsx)(n.code,{children:"primaryKey"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: the ",(0,s.jsx)(n.code,{children:"isMainPrimary"})," of the parent model (e.g ",(0,s.jsx)(n.code,{children:"id"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Define the primary key of the relationship:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@BelongsToMany(() => Role, () => RolesUsers, { \n  primaryKey: 'myId' \n})\npublic roles: Relation<Role>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"foreignkey-3",children:(0,s.jsx)(n.code,{children:"foreignKey"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: the parent model name in camel case\nwith an ",(0,s.jsx)(n.code,{children:"Id"})," at the end (e.g ",(0,s.jsx)(n.code,{children:"userId"}),"). This\nvalue needs to be defined in the pivot model\n(e.g RolesUsers)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Define the foreign key of the relationship:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@BelongsToMany(() => Role, () => RolesUsers, { \n  foreignKey: 'myUserId' \n})\npublic roles: Relation<Role[]>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"relationprimarykey",children:(0,s.jsx)(n.code,{children:"relationPrimaryKey"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: the ",(0,s.jsx)(n.code,{children:"isMainPrimary"})," of the relation model (e.g ",(0,s.jsx)(n.code,{children:"id"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Define the relation primary key of the relationship:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@BelongsToMany(() => Role, () => RolesUsers, { \n  relationPrimaryKey: 'myId' \n})\npublic roles: Relation<Role>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"relationforeignkey",children:(0,s.jsx)(n.code,{children:"relationForeignKey"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: the relation model name in camel case\nwith an ",(0,s.jsx)(n.code,{children:"Id"})," at the end (e.g ",(0,s.jsx)(n.code,{children:"roleId"}),"). This\nvalue needs to be defined in the pivot model\n(e.g RolesUsers)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Define the relation foreign key of the relationship:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@BelongsToMany(() => Role, () => RolesUsers, { \n  relationForeignKey: 'myRoleId' \n})\npublic roles: Relation<Role[]>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>d});var l=i(6540);const s={},o=l.createContext(s);function t(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);
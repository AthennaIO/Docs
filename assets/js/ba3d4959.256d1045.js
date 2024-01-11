"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[784],{4724:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=a(5893),s=a(1151);const i={title:"Getting Started",sidebar_position:1,description:"See how to create database connections in Athenna Framework."},r="Database: Getting Started",o={id:"database/getting-started",title:"Getting Started",description:"See how to create database connections in Athenna Framework.",source:"@site/docs/database/getting-started.mdx",sourceDirName:"database",slug:"/database/getting-started",permalink:"/docs/database/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/database/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1,description:"See how to create database connections in Athenna Framework."},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/docs/database"},next:{title:"Query Builder",permalink:"/docs/database/query-builder"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Available connection drivers",id:"available-connection-drivers",level:3},{value:"Overview of some environment variables",id:"overview-of-some-environment-variables",level:3},{value:"DB_CONNECTION",id:"db_connection",level:4},{value:"DB_DEBUG",id:"db_debug",level:4},{value:"Database operations",id:"database-operations",level:2},{value:"Creating and dropping databases",id:"creating-and-dropping-databases",level:3},{value:"Creating and dropping tables",id:"creating-and-dropping-tables",level:3},{value:"Running and reverting migrations",id:"running-and-reverting-migrations",level:3},{value:"Transactions",id:"transactions",level:3},{value:"Running queries",id:"running-queries",level:2},{value:"Running a find query",id:"running-a-find-query",level:4},{value:"Running a findMany query",id:"running-a-findmany-query",level:4},{value:"Running a create query",id:"running-a-create-query",level:4},{value:"Running a createMany query",id:"running-a-createmany-query",level:4},{value:"Running an update query",id:"running-an-update-query",level:4},{value:"Running delete query",id:"running-delete-query",level:4},{value:"Using multiple database connections",id:"using-multiple-database-connections",level:2},{value:"Closing database connections",id:"closing-database-connections",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"database-getting-started",children:"Database: Getting Started"}),"\n",(0,t.jsx)(n.p,{children:"See how to create database connections in Athenna Framework."}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Almost every modern application interacts with a\ndatabase. Athenna makes interacting with databases\nextremely simple across a variety of supported databases\nusing a fluent query builder and the ORM."}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["First of all you need to install ",(0,t.jsx)(n.code,{children:"@athenna/database"})," package:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"npm i @athenna/database\n"})}),"\n",(0,t.jsx)(n.p,{children:"Artisan provides a very simple command to configure the database\nlibrary in your project. Simply run the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"node artisan configure @athenna/database \n"})}),"\n",(0,t.jsx)(n.p,{children:"The database configurer will do the following operations in\nyour project:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Ask you for the default database you want to use. (",(0,t.jsx)(n.code,{children:"mongo"}),", ",(0,t.jsx)(n.code,{children:"mysql"}),", ",(0,t.jsx)(n.code,{children:"sqlite"})," or ",(0,t.jsx)(n.code,{children:"postgres"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["Create the ",(0,t.jsx)(n.code,{children:"database.ts"})," configuration file."]}),"\n",(0,t.jsxs)(n.li,{children:["Add all database providers in your ",(0,t.jsx)(n.code,{children:".athennarc.json"})," file."]}),"\n",(0,t.jsxs)(n.li,{children:["Add all database commands in your ",(0,t.jsx)(n.code,{children:".athennarc.json"})," file."]}),"\n",(0,t.jsxs)(n.li,{children:["Add all database template files in your ",(0,t.jsx)(n.code,{children:".athennarc.json"})," file."]}),"\n",(0,t.jsxs)(n.li,{children:["Add database environment variables to ",(0,t.jsx)(n.code,{children:".env"}),", ",(0,t.jsx)(n.code,{children:".env.test"})," and ",(0,t.jsx)(n.code,{children:".env.example"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Configure the ",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," file acordding to the database selected."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["All the configuration options for your application's database\nbehavior is housed in the ",(0,t.jsx)(n.code,{children:"Path.config('database.js')"}),"\nconfiguration file. This file allows you to configure your\napplication's database connections, so be sure to review each\nof the available connections and their options. We'll review\na few common options below."]}),"\n",(0,t.jsx)(n.h3,{id:"available-connection-drivers",children:"Available connection drivers"}),"\n",(0,t.jsxs)(n.p,{children:['Each database connection is powered by a "driver". The driver\ndetermines how and where the data is actually transported.\nThe following database connection drivers are available in\nevery Athenna application. An entry for most of these drivers\nis already present in your application\'s ',(0,t.jsx)(n.code,{children:"Path.config('database.ts')"}),"\nconfiguration file, so be sure to review this file to become\nfamiliar with its contents:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Driver name"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Website"}),(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"Built with"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"mongo"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.a,{href:"https://www.mongodb.com/",children:"https://www.mongodb.com/"})}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/mongoose",children:"mongoose"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"mysql"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.a,{href:"https://www.mysql.com/",children:"https://www.mysql.com/"})}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/knex",children:"knex"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"sqlite"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.a,{href:"https://www.sqlite.org/",children:"https://www.sqlite.org/"})}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/knex",children:"knex"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"postgres"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.a,{href:"https://www.postgresql.org/",children:"https://www.postgresql.org/"})}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/knex",children:"knex"})})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Athenna has another driver called ",(0,t.jsx)(n.code,{children:"fake"})," that is very helpful when running tests.\nThe ",(0,t.jsx)(n.code,{children:"fake"})," driver got the same signature of all other drivers, but it returns\nempty objects and arrays in executors methods like ",(0,t.jsx)(n.code,{children:"find()"}),", which is perfect to use\nwithin the ",(0,t.jsx)(n.a,{href:"/docs/testing/mocking",children:(0,t.jsx)(n.code,{children:"Mock"})})," class. For more information\nabout the ",(0,t.jsx)(n.code,{children:"FakeDriver"}),", take a look at the\n",(0,t.jsx)(n.a,{href:"/docs/testing/mocking#mocking-database",children:"mocking database documentation section."})]})}),"\n",(0,t.jsx)(n.h3,{id:"overview-of-some-environment-variables",children:"Overview of some environment variables"}),"\n",(0,t.jsxs)(n.p,{children:["After installing the database component using the Athenna CLI you\ncan check your ",(0,t.jsx)(n.code,{children:".env"})," file in your project root path, the Athenna\nCLI have added some environment variables there to help you connect\nto your database. These variables are:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dotenv",children:"DB_CONNECTION=postgres\nDB_HOST=127.0.0.1\nDB_PORT=5432\nDB_DEBUG=false\nDB_USERNAME=root\nDB_PASSWORD=root\nDB_DATABASE=database\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Let's focus in ",(0,t.jsx)(n.strong,{children:"DB_CONNECTION and DB_DEBUG"})," variables:"]}),"\n",(0,t.jsx)(n.h4,{id:"db_connection",children:"DB_CONNECTION"}),"\n",(0,t.jsxs)(n.p,{children:["This variable specify for Athenna what is the default connection name\nthat should be used by ",(0,t.jsx)(n.code,{children:"Database"})," facade when running database operations."]}),"\n",(0,t.jsx)(n.h4,{id:"db_debug",children:"DB_DEBUG"}),"\n",(0,t.jsxs)(n.p,{children:["This variable is useful when running your application locally, If\n",(0,t.jsx)(n.code,{children:"DB_DEBUG"})," is ",(0,t.jsx)(n.code,{children:"true"}),", then you will be able to see all the queries\nbeing executed in your database."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Before going through the documentation, remember to run\n",(0,t.jsx)(n.a,{href:"https://docs.docker.com/compose/",children:(0,t.jsx)(n.code,{children:"docker-compose up -d"})})," to\nstart up the database in your machine."]})}),"\n",(0,t.jsx)(n.h2,{id:"database-operations",children:"Database operations"}),"\n",(0,t.jsxs)(n.p,{children:["Once you have configured your database connection, you may communicate\nwith it using the ",(0,t.jsx)(n.code,{children:"Database"})," facade. The ",(0,t.jsx)(n.code,{children:"Database"})," facade provides a\nlot of methods to perform database operations such as ",(0,t.jsx)(n.strong,{children:"creating,\ndropping and listing databases/tables, running and reverting"}),"\n",(0,t.jsx)(n.a,{href:"/docs/database/migrations",children:(0,t.jsx)(n.strong,{children:"migrations"})}),(0,t.jsx)(n.strong,{children:","}),"\n",(0,t.jsx)(n.a,{href:"/docs/database/getting-started#database-transactions",children:(0,t.jsx)(n.strong,{children:"transactions"})}),(0,t.jsx)(n.strong,{children:",\nqueries, connecting to new databases and also closing these\nconnections."})]}),"\n",(0,t.jsx)(n.h3,{id:"creating-and-dropping-databases",children:"Creating and dropping databases"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Database } from '@athenna/database'\n\nawait Database.createDatabase('hello')\nawait Database.dropDatabase('hello')\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also get all databases names as string and check if some\ndatabase name exists:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const databases = await Database.getDatabases() // ['postgres']\nconst current = await Database.getCurrentDatabase() // 'postgres'\n\nawait Database.hasDatabase('postgres') // true\nawait Database.hasDatabase('not-found') // false\n"})}),"\n",(0,t.jsx)(n.h3,{id:"creating-and-dropping-tables",children:"Creating and dropping tables"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Database } from '@athenna/database'\n\nawait Database.createTable('products', table => {\n  table.increments('id').primary()\n})\n\nawait Database.dropTable('products')\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also get all tables names as string and check if some\ntable name exists:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const tables = await Database.getTables() // ['users']\n\nawait Database.hasTable('users') // true\nawait Database.hasTable('not-found') // false\n"})}),"\n",(0,t.jsx)(n.h3,{id:"running-and-reverting-migrations",children:"Running and reverting migrations"}),"\n",(0,t.jsxs)(n.p,{children:["If you don't know what is a migration you can\ncheck ",(0,t.jsx)(n.a,{href:"/docs/database/migrations",children:(0,t.jsx)(n.code,{children:"clicking here"})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"await Database.runMigrations()\nawait Database.revertMigrations()\n"})}),"\n",(0,t.jsx)(n.h3,{id:"transactions",children:"Transactions"}),"\n",(0,t.jsxs)(n.p,{children:["If you don't know what is a transaction you can\ncheck ",(0,t.jsx)(n.a,{href:"/docs/database/getting-started#database-transactions",children:(0,t.jsx)(n.code,{children:"clicking here"})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Log } from '@athenna/logger'\n\nconst trx = await Database.startTransaction()\nconst query = trx.table('users')\n\nconst users = [] // Imagine a lot of users to be inserted here...\n\ntry {\n    await query.createMany(users)\n\n    await trx.commitTransaction()\n} catch (error) {\n    // If some user in the \"users\" array has been created,\n    // it will be removed if one fails to insert.\n    await trx.rollbackTransaction()\n\n    Log.error('Failed to create one of the users. Original error: %s', JSON.stringify(error))\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"running-queries",children:"Running queries"}),"\n",(0,t.jsxs)(n.p,{children:["You may use the ",(0,t.jsx)(n.code,{children:"table()"})," method provided by the ",(0,t.jsx)(n.code,{children:"Database"})," facade\nto begin a query. The ",(0,t.jsx)(n.code,{children:"table()"})," method returns a fluent query\nbuilder instance for the given table, allowing you to chain more\nconstraints onto the query and then finally retrieve the results of\nthe query using one of the ",(0,t.jsx)(n.strong,{children:"executors"})," methods. These are the most\nrelevant methods:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"find()"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"findMany()"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"create()"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"createMany()"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"update()"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"delete()"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Everytime that you use the ",(0,t.jsx)(n.code,{children:"Database"})," facade you are using a different\ninstance of ",(0,t.jsx)(n.code,{children:"DatabaseImpl"})," class. This means that you would need to\ncall ",(0,t.jsx)(n.code,{children:"table()"})," method everytime for different queries. To get around\nthis, you can save the instance in a local\nvariable:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Database } from '@athenna/database'\n\nconst userQuery = Database.table('users') // First instance of QueryBuilder\nconst orderQuery = Database.table('orders') // Second instance of QueryBuilder\nconst productsQuery = Database.table('products') // Third instance of QueryBuilder\n"})}),"\n",(0,t.jsx)(n.h4,{id:"running-a-find-query",children:"Running a find query"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"find()"})," method is useful to retrieve only one record that match\nthe query statements from database:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const query = Database.table('users')\n\nconst { id, name } = await query\n    .select('id', 'name')\n    .where({ id: 10 })\n    .find()\n"})}),"\n",(0,t.jsx)(n.h4,{id:"running-a-findmany-query",children:"Running a findMany query"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"findMany()"})," method is useful to retrieve more than one record\nthat match the query statements from database:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const query = Database.table('users')\n\nconst users = await query\n    .select('id', 'name')\n    .whereNull('deletedAt')\n    .whereLike('name', '%Lenon%')\n    .orderBy('name', 'DESC')\n    .findMany()\n"})}),"\n",(0,t.jsx)(n.h4,{id:"running-a-create-query",children:"Running a create query"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"create()"})," method is useful to create one record in database:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const query = Database.table('users')\n\nconst user = await query.create({ name: 'Victor Tesoura' })\n"})}),"\n",(0,t.jsx)(n.h4,{id:"running-a-createmany-query",children:"Running a createMany query"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"createMany()"})," method is useful to create many records in database:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const query = Database.table('users')\n\nconst users = await query.createMany([\n    { name: 'Victor Tesoura' },\n    { name: 'Jo\xe3o Lenon' }\n])\n"})}),"\n",(0,t.jsx)(n.h4,{id:"running-an-update-query",children:"Running an update query"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"update()"})," method is useful to update one or more records based\nin statements in database:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const query = Database.table('users')\n\nconst users = await query\n    .select('id', 'name')\n    .whereIn('id', [1, 2])\n    .orderBy('name', 'ASC')\n    .update({ name: 'Danrley Morais' })\n"})}),"\n",(0,t.jsx)(n.h4,{id:"running-delete-query",children:"Running delete query"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"delete()"})," method is useful to delete one or more records based\nin statements in database:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const query = Database.table('users')\n\nawait query.whereBetween('id', [1, 10]).delete()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"using-multiple-database-connections",children:"Using multiple database connections"}),"\n",(0,t.jsxs)(n.p,{children:["If your application defines multiple connections in your\n",(0,t.jsx)(n.code,{children:"Path.config('database.ts')"})," configuration file, you may access each\nconnection via the ",(0,t.jsx)(n.code,{children:"connection()"})," method provided by the ",(0,t.jsx)(n.code,{children:"Database"}),"\nfacade. The connection name passed to the ",(0,t.jsx)(n.code,{children:"connection()"})," method should\ncorrespond to one of the connections listed in your\n",(0,t.jsx)(n.code,{children:"Path.config('database.ts')"})," configuration file. You also need\nto explicit call the ",(0,t.jsx)(n.code,{children:"connect()"})," method when working with other\nconnection that is not the default:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const query = Database.connection('mysql').table('users')\n\nconst users = await query\n    .select('id', 'name')\n    .whereNotIn('id', [1, 2])\n    .orderBy('name', 'ASC')\n    .findMany()\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The connection created by the ",(0,t.jsx)(n.code,{children:"connection()"})," method will be stored\ninside the ",(0,t.jsx)(n.a,{href:"https://github.com/AthennaIO/Database/blob/develop/src/factories/DriverFactory.ts",children:(0,t.jsx)(n.code,{children:"DriverFactory"})}),"\nclass. This means that if you call the ",(0,t.jsx)(n.code,{children:"connection()"})," method again,\nit will use the same connection created that was saved in ",(0,t.jsx)(n.code,{children:"DriverFactory"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"await Datatabase.connection('mysql')\n    .table('users')\n    .select('id', 'name')\n    .whereNotIn('id', [1, 2])\n    .orderBy('name', 'ASC')\n    .findMany()\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can force ",(0,t.jsx)(n.code,{children:"connection()"})," method to not save the connection\ninstance in ",(0,t.jsx)(n.a,{href:"https://github.com/AthennaIO/Database/blob/develop/src/factories/DriverFactory.ts",children:(0,t.jsx)(n.code,{children:"DriverFactory"})}),"\npassing some properties to it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const database = Datatabase.connection('mysql', {\n    // Force the connection to be established\n    force: false,\n    // Set if connection will be saved in DriverFactory\n    // to be reused in all Database instances\n    saveOnDriver: false\n})\n\nawait database\n    .table('users')\n    .select('id', 'name')\n    .whereNotIn('id', [1, 2])\n    .orderBy('name', 'ASC')\n    .findMany()\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["If you specify to ",(0,t.jsx)(n.code,{children:"connection()"})," method that you don't want to save\nthe connection in driver, you will need to close the connection\nusing ",(0,t.jsx)(n.strong,{children:"your"})," database instance. We will see next how to close a\ndatabase connection."]})}),"\n",(0,t.jsx)(n.h2,{id:"closing-database-connections",children:"Closing database connections"}),"\n",(0,t.jsxs)(n.p,{children:["You can simply close a connection using the ",(0,t.jsx)(n.code,{children:"close()"})," or ",(0,t.jsx)(n.code,{children:"closeAll()"}),"\nmethods of ",(0,t.jsx)(n.code,{children:"Database"})," facade:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"await Database.close() // Close the default connection\nawait Database.connection('mysql').close() // Close the mysql connection\n\nawait Database.closeAll() // Close all the connections saved in DriverFactory\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Remember that when creating a connection that will not be saved in\ndriver, you will need to close the connection using ",(0,t.jsx)(n.strong,{children:"your"}),"\ndatabase instance:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const database = Datatabase.connection('mysql', {\n    force: false,\n    saveOnDriver: false\n})\n\nawait database\n    .table('users')\n    .select('id', 'name')\n    .whereNotIn('id', [1, 2])\n    .orderBy('name', 'ASC')\n    .findMany()\n\n// The code below will not close the connection\n// created above since DriverFactory doesn't\n// know what is your connection.\nawait Database.connection('mysql').close() // DOES NOT WORK\n\nawait database.close() // WORKS\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>r});var t=a(7294);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
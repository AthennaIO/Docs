"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[7291],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=i,g=p["".concat(l,".").concat(u)]||p[u]||c[u]||r;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6122:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:3,id:"migrations",title:"Migrations",hide_title:!0,hide_table_of_contents:!0,tags:["Database","Migrations"]},l=void 0,m={unversionedId:"database/migrations",id:"database/migrations",title:"Migrations",description:"\ud83c\udfe0",source:"@site/docs/database/migrations.mdx",sourceDirName:"database",slug:"/database/migrations",permalink:"/docs/database/migrations",editUrl:"https://github.com/AthennaIO/Docs/docs/database/migrations.mdx",tags:[{label:"Database",permalink:"/docs/tags/database"},{label:"Migrations",permalink:"/docs/tags/migrations"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"migrations",title:"Migrations",hide_title:!0,hide_table_of_contents:!0,tags:["Database","Migrations"]},sidebar:"tutorialSidebar",previous:{title:"Query Builder",permalink:"/docs/database/query-builder"},next:{title:"Seeding",permalink:"/docs/database/seeding"}},d=[{value:"Introduction",id:"id-introduction",children:[],level:2},{value:"Generating migrations",id:"id-generating-migrations",children:[],level:2},{value:"Migration structure",id:"id-migration-structure",children:[{value:"Setting the migration connection",id:"id-setting-the-migration-connection",children:[],level:3}],level:2},{value:"Running migrations",id:"id-running-migrations",children:[],level:2},{value:"Reverting (Rolling back) migrations",id:"id-reverting-migrations",children:[],level:2},{value:"The migration schema API",id:"id-the-migration-schema-api",children:[],level:2}],c={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("nav",{"aria-label":"breadcrumbs"},(0,r.kt)("ul",{class:"breadcrumbs"},(0,r.kt)("li",{class:"breadcrumbs__item"},(0,r.kt)("a",{class:"breadcrumbs__link",href:"/"},"\ud83c\udfe0")),(0,r.kt)("li",{class:"breadcrumbs__item"},(0,r.kt)("a",{class:"breadcrumbs__link"},"Database")),(0,r.kt)("li",{class:"breadcrumbs__item"},(0,r.kt)("a",{class:"breadcrumbs__link",href:"/docs/database/migrations"},"Migrations")))),(0,r.kt)("span",{class:"badge badge--secondary margin-top-bot"},"version 1.0.0"),(0,r.kt)("h1",{id:"database-migrations"},"Database: Migrations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"introduction"},(0,r.kt)("a",{parentName:"h4",href:"#id-introduction"},"Introduction"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"generating-migrations"},(0,r.kt)("a",{parentName:"h4",href:"#id-generating-migrations"},"Generating migrations"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"migration-structure"},(0,r.kt)("a",{parentName:"h4",href:"#id-migration-structure"},"Migration structure"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"running-migrations"},(0,r.kt)("a",{parentName:"h4",href:"#id-running-migrations"},"Running migrations"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"reverting-rolling-back-migrations"},(0,r.kt)("a",{parentName:"h4",href:"#id-reverting-migrations"},"Reverting (Rolling back) migrations"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"the-migration-schema-api"},(0,r.kt)("a",{parentName:"h4",href:"#id-the-migration-schema-api"},"The migration schema API")))),(0,r.kt)("h2",{id:"id-introduction"},"Introduction"),(0,r.kt)("p",null,"Migrations are like version control for your database, allowing your team to define and share the application's database schema\ndefinition. If you have ever had to tell a teammate to manually add a column to their local database schema after pulling in\nyour changes from source control, you've faced the problem that database migrations solve."),(0,r.kt)("h2",{id:"id-generating-migrations"},"Generating migrations"),(0,r.kt)("p",null,"You may use the ",(0,r.kt)("inlineCode",{parentName:"p"},"make:migration")," Artisan command to generate a database migration. The new migration will be placed in your\n",(0,r.kt)("inlineCode",{parentName:"p"},"database/migrations")," directory. Each migration filename contains a timestamp that allows Athenna to determine the order of\nthe migrations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node artisan make:migration create_flights_table\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Migrations templates may be customized using the\n",(0,r.kt)("a",{parentName:"p",href:"https://athenna.io/docs/the-basics/cli/commands#id-registering-custom-templates"},(0,r.kt)("inlineCode",{parentName:"a"},"template customization command")),"."))),(0,r.kt)("h2",{id:"id-migration-structure"},"Migration structure"),(0,r.kt)("p",null,"A migration class contains two methods: ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"down"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," method is used to add new tables, columns, or indexes to\nyour database, while the ",(0,r.kt)("inlineCode",{parentName:"p"},"down")," method should reverse the operations performed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," method."),(0,r.kt)("p",null,"Within both of these methods, you may use the ",(0,r.kt)("a",{parentName:"p",href:"https://knexjs.org/guide/schema-builder.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Knex schema builder"))," to\nexpressively create and modify tables. For example, the following migration creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"flights")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Migration } from '@athenna/database'\n\nexport class CreateFlightsTable extends Migration {\n    /**\n     * Run the migration.\n     *\n     * @param {import('knex').Knex} knex\n     * @return {Promise<void>}\n     */\n    async up({ schema }) {\n        return schema.createTable('flights', table => {\n            table.id()\n            table.string('name')\n            table.string('airline')\n            table.timestamps(true, true, true)\n        })\n    }\n\n    /**\n     * Reverse the migration.\n     *\n     * @param {import('knex').Knex} knex\n     * @return {Promise<void>}\n     */\n    async down({ schema }) {\n         return schema.dropTableIfExists('flights')\n    }\n}\n")),(0,r.kt)("h3",{id:"id-setting-the-migration-connection"},"Setting the migration connection"),(0,r.kt)("p",null,"If your migration will be interacting with a database connection other than your application's default database connection,\nyou should set the static getter ",(0,r.kt)("inlineCode",{parentName:"p"},"connection")," in your migration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Migration } from '@athenna/database'\n\nexport class CreateFlightsTable extends Migration {\n     /**\n      * Define the database connection to run the migration.\n      *\n      * @return {string}\n      */\n     static get connection() {\n        return 'postgres'\n     }\n\n    async up({ schema }) {\n        // ...\n    }\n\n    async down({ schema }) {\n        // ...\n    }\n}\n")),(0,r.kt)("h2",{id:"id-running-migrations"},"Running migrations"),(0,r.kt)("p",null,"To run all of your outstanding migrations, execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"migration:run")," Artisan command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node artisan migration:run\n")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--connection")," argument to run migrations for a specific connection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node artisan migration:run --connection=postgres\n")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres")," is your default connection than all the migrations using the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," value in the static getter ",(0,r.kt)("inlineCode",{parentName:"p"},"connection"),"\nwill run too."))),(0,r.kt)("h2",{id:"id-reverting-migrations"},"Reverting (Rolling back) migrations"),(0,r.kt)("p",null,"To revert all your migrations, you may use the ",(0,r.kt)("inlineCode",{parentName:"p"},"migration:revert")," Artisan command. This command will revert all your migrations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node artisan migration:revert\n")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--connection")," argument to revert migrations for a specific connection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node artisan migration:revert --connection=postgres\n")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres")," is your default connection than all the migrations using the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," value in the static getter ",(0,r.kt)("inlineCode",{parentName:"p"},"connection"),"\nwill be reverted too."))),(0,r.kt)("h2",{id:"id-the-migration-schema-api"},"The migration schema API"),(0,r.kt)("p",null,"If you wish to know more about the migrations API under the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," property of ",(0,r.kt)("a",{parentName:"p",href:"https://knexjs.org"},(0,r.kt)("inlineCode",{parentName:"a"},"Knex"))," you can check the\n",(0,r.kt)("a",{parentName:"p",href:"https://knexjs.org/guide/schema-builder.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Knex schema builder documentation")),". Knex documentation is very good and will\nbe very useful for more advanced methods of schema builder API."))}p.isMDXComponent=!0}}]);
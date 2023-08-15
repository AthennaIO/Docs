"use strict";(self.webpackChunk_athenna_docs=self.webpackChunk_athenna_docs||[]).push([[2419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||m[f]||l;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:a,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const l={title:"Helpers",sidebar_position:3,description:"Understand how to use all the Athenna Helpers from @athenna/common and other packages.",tags:["The Basics","Helpers"]},o="Helpers",r={unversionedId:"the-basics/helpers",id:"the-basics/helpers",title:"Helpers",description:"Understand how to use all the Athenna Helpers from @athenna/common and other packages.",source:"@site/docs/the-basics/helpers.mdx",sourceDirName:"the-basics",slug:"/the-basics/helpers",permalink:"/docs/the-basics/helpers",draft:!1,editUrl:"https://github.com/AthennaIO/Docs/tree/main/docs/the-basics/helpers.mdx",tags:[{label:"The Basics",permalink:"/docs/tags/the-basics"},{label:"Helpers",permalink:"/docs/tags/helpers"}],version:"current",sidebarPosition:3,frontMatter:{title:"Helpers",sidebar_position:3,description:"Understand how to use all the Athenna Helpers from @athenna/common and other packages.",tags:["The Basics","Helpers"]},sidebar:"tutorialSidebar",previous:{title:"Views",permalink:"/docs/the-basics/views"},next:{title:"Digging Deeper",permalink:"/docs/digging-deeper"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Available helpers",id:"available-helpers",level:2},{value:"<code>File</code>",id:"file",level:3},{value:"<code>File.load()</code> &amp; <code>File.loadSync()</code>",id:"fileload--fileloadsync",level:4},{value:"<code>File.copy()</code> &amp; <code>File.copySync()</code>",id:"filecopy--filecopysync",level:4},{value:"<code>File.move()</code> &amp; <code>File.moveSync()</code>",id:"filemove--filemovesync",level:4},{value:"<code>File.remove()</code> &amp; <code>File.removeSync()</code>",id:"fileremove--fileremovesync",level:4},{value:"<code>File.setContent()</code> &amp; <code>File.setContentSync()</code>",id:"filesetcontent--filesetcontentsync",level:4},{value:"<code>File.getContent()</code> &amp; <code>File.getContentSync()</code>",id:"filegetcontent--filegetcontentsync",level:4},{value:"<code>File.getContentAsString()</code> &amp; <code>File.getContentAsStringSync()</code>",id:"filegetcontentasstring--filegetcontentasstringsync",level:4},{value:"<code>File.getContentAsJson()</code> &amp; <code>File.getContentAsJsonSync()</code>",id:"filegetcontentasjson--filegetcontentasjsonsync",level:4},{value:"<code>File.getContentAsBuilder()</code> &amp; <code>File.getContentAsBuilderSync()</code>",id:"filegetcontentasbuilder--filegetcontentasbuildersync",level:4},{value:"<code>File.append()</code> &amp; <code>File.appendSync()</code>",id:"fileappend--fileappendsync",level:4},{value:"<code>File.prepend()</code> &amp; <code>File.prependSync()</code>",id:"fileprepend--fileprependsync",level:4},{value:"<code>File.createReadStream()</code>",id:"filecreatereadstream",level:4},{value:"<code>File.createWriteStream()</code>",id:"filecreatewritestream",level:4},{value:"<code>File.toJSON()</code>",id:"filetojson",level:4},{value:"<code>File.import()</code>",id:"fileimport",level:4},{value:"<code>File.safeImport()</code>",id:"filesafeimport",level:4},{value:"<code>File::safeRemove()</code>",id:"filesaferemove",level:4},{value:"<code>File::exists()</code> &amp; <code>File::existsSync()</code>",id:"fileexists--fileexistssync",level:4},{value:"<code>File::isFile()</code> &amp; <code>File::isFileSync()</code>",id:"fileisfile--fileisfilesync",level:4},{value:"<code>File::createFileOfSize()</code>",id:"filecreatefileofsize",level:4},{value:"<code>Folder</code>",id:"folder",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"helpers"},"Helpers"),(0,a.kt)("p",null,"Understand how to use all the Athenna Helpers from @athenna/common and other packages."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,'Athenna includes a variety of "helpers" classes inside\nthe ',(0,a.kt)("inlineCode",{parentName:"p"},"@athenna/common")," package that comes by default\ninstalled in your application. Many of these classes are\nused by the framework itself; however, you are free to use\nthem in your own applications if you find them convenient."),(0,a.kt)("h2",{id:"available-helpers"},"Available helpers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/the-basics/helpers#file"},(0,a.kt)("inlineCode",{parentName:"a"},"File"))," - Create, copy, move,\ndelete and get information about files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/the-basics/helpers#folder"},(0,a.kt)("inlineCode",{parentName:"a"},"Folder"))," - Create, copy, move,\ndelete and get information about folders.")),(0,a.kt)("h3",{id:"file"},(0,a.kt)("inlineCode",{parentName:"h3"},"File")),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"File")," class to create an instance of a file, it existing or not."),(0,a.kt)("h4",{id:"fileload--fileloadsync"},(0,a.kt)("inlineCode",{parentName:"h4"},"File.load()")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"File.loadSync()")),(0,a.kt)("p",null,"Creates the file is does not exist and also load the file information:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst existent = new File(Path.storage('existent.txt'))\nconst nonExistent = new File('./nonExistent.txt', 'File content')\n\n// Load the file info and content.\nawait existent.load({ withContent: true })  \ud83d\udc48\n\n// Create and load the file info without the \n// content (be careful when loading big files).\nnonExistent.loadSync() \ud83d\udc48\n")),(0,a.kt)("p",null,"After loading process, the file will contain new informations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"createdAt - The date when the file was created."),(0,a.kt)("li",{parentName:"ul"},"accessedAt - The date when the file was last accessed."),(0,a.kt)("li",{parentName:"ul"},"modifiedAt - The date when the file was last modified."),(0,a.kt)("li",{parentName:"ul"},"fileSize - The size of the file in MB."),(0,a.kt)("li",{parentName:"ul"},"content - The content of the file as ",(0,a.kt)("inlineCode",{parentName:"li"},"Buffer")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"withContent")," was ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,a.kt)("h4",{id:"filecopy--filecopysync"},(0,a.kt)("inlineCode",{parentName:"h4"},"File.copy()")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"File.copySync()")),(0,a.kt)("p",null,"Create a copy of the file in other location or with other name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst copiedFile = file.copySync('./copy-of-file.txt')\nconst copiedFile = await file.copy(Path.storage('copy-of-file.txt'))\n")),(0,a.kt)("p",null,"To copy the file and load the content of the copy set the ",(0,a.kt)("inlineCode",{parentName:"p"},"withContent"),"\nas ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst copiedFile = await file.copy(Path.storage('copy-of-file.txt'), {\n  withContent: true \ud83d\udc48\n})\n")),(0,a.kt)("p",null,"When copying the file you can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"mockedValues")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to create\na file with fake name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst copiedFile = await file.copy(Path.storage('copy-of-file.txt'), {\n  mockedValues: true \ud83d\udc48\n})\n")),(0,a.kt)("h4",{id:"filemove--filemovesync"},(0,a.kt)("inlineCode",{parentName:"h4"},"File.move()")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"File.moveSync()")),(0,a.kt)("p",null,"Move the file to other location:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst movedFile = file.moveSync('./move-of-file.txt')               \ud83d\udc48\nconst movedFile = await file.move(Path.storage('move-of-file.txt')) \ud83d\udc48\n")),(0,a.kt)("p",null,"To move the file and load the content of the move set the ",(0,a.kt)("inlineCode",{parentName:"p"},"withContent"),"\nas ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst movedFile = await file.move(Path.storage('move-of-file.txt'), {\n  withContent: true \ud83d\udc48\n})\n")),(0,a.kt)("p",null,"When moving the file you can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"mockedValues")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to create\na file with fake name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst movedFile = await file.move(Path.storage('file-path.txt'), {\n  mockedValues: true \ud83d\udc48\n})\n")),(0,a.kt)("h4",{id:"fileremove--fileremovesync"},(0,a.kt)("inlineCode",{parentName:"h4"},"File.remove()")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"File.removeSync()")),(0,a.kt)("p",null,"Delete a file from the file system:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nfile.removeSync()   \ud83d\udc48\nawait file.remove() \ud83d\udc48\n")),(0,a.kt)("h4",{id:"filesetcontent--filesetcontentsync"},(0,a.kt)("inlineCode",{parentName:"h4"},"File.setContent()")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"File.setContentSync()")),(0,a.kt)("p",null,"Set the content of a file overwriting the existing content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst file = new File('./file.txt', 'Hello')\n\nfile.setContentSync('Hello World!')   \ud83d\udc48\nawait file.setContent('Hello World!') \ud83d\udc48\n")),(0,a.kt)("h4",{id:"filegetcontent--filegetcontentsync"},(0,a.kt)("inlineCode",{parentName:"h4"},"File.getContent()")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"File.getContentSync()")),(0,a.kt)("p",null,"Get the content of a file as ",(0,a.kt)("inlineCode",{parentName:"p"},"Buffer"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst contentBuffer = file.getContentSync()   \ud83d\udc48\nconst contentBuffer = await file.getContent() \ud83d\udc48\n")),(0,a.kt)("p",null,"To save the content of the file in the instance set the ",(0,a.kt)("inlineCode",{parentName:"p"},"saveContent")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst content = await file.getContent({ saveContent: true }) \ud83d\udc48\n")),(0,a.kt)("h4",{id:"filegetcontentasstring--filegetcontentasstringsync"},(0,a.kt)("inlineCode",{parentName:"h4"},"File.getContentAsString()")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"File.getContentAsStringSync()")),(0,a.kt)("p",null,"Same behavior of ",(0,a.kt)("inlineCode",{parentName:"p"},"getContent()"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"getContentSync()"),", but return the content\nas ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst contentString = file.getContentAsStringSync()   \ud83d\udc48\nconst contentString = await file.getContentAsString() \ud83d\udc48\n")),(0,a.kt)("h4",{id:"filegetcontentasjson--filegetcontentasjsonsync"},(0,a.kt)("inlineCode",{parentName:"h4"},"File.getContentAsJson()")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"File.getContentAsJsonSync()")),(0,a.kt)("p",null,"Same behavior of ",(0,a.kt)("inlineCode",{parentName:"p"},"getContent()"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"getContentSync()"),", but return the content as\n",(0,a.kt)("inlineCode",{parentName:"p"},"object")," if the content is a valid JSON string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst contentJSON = file.getContentAsJsonSync()   \ud83d\udc48\nconst contentJSON = await file.getContentAsJson() \ud83d\udc48\n")),(0,a.kt)("h4",{id:"filegetcontentasbuilder--filegetcontentasbuildersync"},(0,a.kt)("inlineCode",{parentName:"h4"},"File.getContentAsBuilder()")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"File.getContentAsBuilderSync()")),(0,a.kt)("p",null,"Same behavior of ",(0,a.kt)("inlineCode",{parentName:"p"},"getContent()"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"getContentSync()"),", but return the content as\nan ",(0,a.kt)("a",{parentName:"p",href:"/docs/the-basics/helpers#object-builder"},(0,a.kt)("inlineCode",{parentName:"a"},"ObjectBuilder"))," instance if the\ncontent is a valid JSON string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst contentObjectBuilder = file.getContentAsBuilderSync()   \ud83d\udc48\nconst contentObjectBuilder = await file.getContentAsBuilder() \ud83d\udc48\n")),(0,a.kt)("h4",{id:"fileappend--fileappendsync"},(0,a.kt)("inlineCode",{parentName:"h4"},"File.append()")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"File.appendSync()")),(0,a.kt)("p",null,"Add content to the end of the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst file = new File('./file.txt', 'Hello')\n\nfile.appendSync(' World') \ud83d\udc48\nawait file.append('!\\n')  \ud83d\udc48\n")),(0,a.kt)("h4",{id:"fileprepend--fileprependsync"},(0,a.kt)("inlineCode",{parentName:"h4"},"File.prepend()")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"File.prependSync()")),(0,a.kt)("p",null,"Add content to the top of the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst file = new File('./file.txt', 'World')\n\nfile.prependSync('ello ') \ud83d\udc48\nawait file.prepend('H')   \ud83d\udc48\n")),(0,a.kt)("h4",{id:"filecreatereadstream"},(0,a.kt)("inlineCode",{parentName:"h4"},"File.createReadStream()")),(0,a.kt)("p",null,"Create a ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/stream.html#readable-streams"},"readable stream"),"\ninstance of the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const stream = file.createReadStream()\n")),(0,a.kt)("h4",{id:"filecreatewritestream"},(0,a.kt)("inlineCode",{parentName:"h4"},"File.createWriteStream()")),(0,a.kt)("p",null,"Create a ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/stream.html#writable-streams"},"writable stream"),"\ninstance of the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const stream = file.createWriteStream()\n")),(0,a.kt)("h4",{id:"filetojson"},(0,a.kt)("inlineCode",{parentName:"h4"},"File.toJSON()")),(0,a.kt)("p",null,"Get the informations of the file as JSON:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const infos = file.toJSON() \ud83d\udc48\n")),(0,a.kt)("h4",{id:"fileimport"},(0,a.kt)("inlineCode",{parentName:"h4"},"File.import()")),(0,a.kt)("p",null,"Import the file path if is a valid module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst file = new File('./file.js', \"console.log('hello')\")\n\nconst module = await file.import() \ud83d\udc48\n")),(0,a.kt)("h4",{id:"filesafeimport"},(0,a.kt)("inlineCode",{parentName:"h4"},"File.safeImport()")),(0,a.kt)("p",null,"Same as ",(0,a.kt)("inlineCode",{parentName:"p"},"import()")," method, but if the file is not a valid module the exception\nwill be ignored:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst file = new File('./file.txt', \"console.log('hello')\")\n\nconst module = await file.safeImport() \ud83d\udc48\n")),(0,a.kt)("p",null,"Importing files that got any errors like syntax errors will also not throw:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nconst file = new File('./file.js', \"console.log('hello\")\n\nconst module = await file.safeImport() \ud83d\udc48 // Nothing happens\n")),(0,a.kt)("h4",{id:"filesaferemove"},(0,a.kt)("inlineCode",{parentName:"h4"},"File::safeRemove()")),(0,a.kt)("p",null,"Call for a delete operation without worrying about exceptions because the file\ndoes not exist:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { File } from '@athenna/common'\n\nawait File.safeRemove(Path.storage('file.txt'))      \ud83d\udc48\nawait File.safeRemove(Path.storage('not-found.txt')) \ud83d\udc48 // Will not throw\n")),(0,a.kt)("h4",{id:"fileexists--fileexistssync"},(0,a.kt)("inlineCode",{parentName:"h4"},"File::exists()")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"File::existsSync()")),(0,a.kt)("p",null,"Verify if a file exists or not:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"if (File.existsSync('package.json')) {\n  // do something\n}\n\nif (await File.exists('package.json')) {\n  // do something\n}\n")),(0,a.kt)("h4",{id:"fileisfile--fileisfilesync"},(0,a.kt)("inlineCode",{parentName:"h4"},"File::isFile()")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"File::isFileSync()")),(0,a.kt)("p",null,"Verify if a file is a valid file or not:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"if (File.isFileSync('package.json')) {\n  // do something\n}\n\nif (await File.isFile('package.json')) {\n  // do something\n}\n")),(0,a.kt)("h4",{id:"filecreatefileofsize"},(0,a.kt)("inlineCode",{parentName:"h4"},"File::createFileOfSize()")),(0,a.kt)("p",null,"Create a fake file with determined size for testing purposes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const file = await File.createFileOfSize('fake.js', 1024 * 1024 * 100) \ud83d\udc48\n")),(0,a.kt)("h3",{id:"folder"},(0,a.kt)("inlineCode",{parentName:"h3"},"Folder")),(0,a.kt)("p",null,"Coming soon"))}m.isMDXComponent=!0}}]);
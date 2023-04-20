import Docs from '#layouts/Docs'
import Link from '#components/Link'
import Topic from '#components/Topic'
import Topics from '#components/Topics'
import CodeBox from '#components/CodeBox'
import Admonition from '#components/Admonition'
import CodeHighlight from '#components/CodeHighlight'

import { Component } from 'react'
import { Box, List, Paragraph, Table } from 'dracula-ui'

export async function getStaticProps() {
    return {
        props: {
            query: {
                title: 'Directory Structure',
                description: 'Understand the directory structure of your project.'
            }
        }
    }
}

export default class DirectoryStructure extends Component {
    public static Layout = Docs

    public topics = [
        { title: 'Laravel based structure' },
        { title: 'Slim structure' },
        { title: 'Do your own structure' },
        { title: 'Changing make commands directory' }
    ]

    public render() {
        return (
            <Box>
                <Topics topics={this.topics}/>

                <Box mt='lg'>
                    <Admonition type='important'>
                        <Paragraph align='justify' size='sm'>
                            We highly recommend you to use the <CodeHighlight>./node artisan make</CodeHighlight> command
                            to generate the files of your application. If using this command, it will automatically generate
                            the file and register it wherever is needed. Take as an example
                            the <CodeHighlight>./node artisan make:command</CodeHighlight> command. First it will generate
                            the file and then will register the command inside the <CodeHighlight>commands</CodeHighlight> map
                            property of <CodeHighlight>.athennarc.json</CodeHighlight> file.
                        </Paragraph>
                    </Admonition>
                </Box>

                <Box mt='md'>
                    <Topic size='xl' pb='xs'>Laravel based structure</Topic>

                    <Box mt='md'>
                        <Topic size='lg' pb='xs'>The app directory</Topic>

                        <Paragraph align='justify'>
                            The <CodeHighlight>app</CodeHighlight> directory contains the core code of your
                            application. We&apos;ll explore this directory in more detail soon. Almost all the
                            classes in your application will be in this directory.
                        </Paragraph>
                    </Box>

                    <Box mt='md'>
                        <Topic size='lg' pb='xs'>The bootstrap directory</Topic>

                        <Paragraph align='justify'>
                            The <CodeHighlight>bootstrap</CodeHighlight> directory contains all of your
                            application&apos;s bootstrap files. It&apos;s here that Athenna holds the  <CodeHighlight>main.ts</CodeHighlight>
                            file that bootstrap the application using the  <CodeHighlight>Ignite</CodeHighlight> class.
                        </Paragraph>
                    </Box>

                    <Box mt='md'>
                        <Topic size='lg' pb='xs'>The config directory</Topic>

                        <Paragraph align='justify'>
                            The <CodeHighlight>config</CodeHighlight> directory contains all of your application&apos;s
                            configuration files. It&apos;s a great idea to read through all of these files and familiarize
                            yourself with all the options available to you.
                        </Paragraph>
                    </Box>

                    <Box mt='md'>
                        <Topic size='lg' pb='xs'>The database directory</Topic>

                        <Paragraph align='justify'>
                            This directory does not exist by default, but will be created for you if you execute
                            the following command:
                        </Paragraph>

                        <CodeBox language='bash' code={
                            './node artisan configure @athenna/database'
                        }/>

                        <Paragraph align='justify'>
                            The <CodeHighlight>database</CodeHighlight> directory contains your database migrations,
                            model factories, and seeds. If you wish, you may also use this directory to hold a
                            SQLite database.
                        </Paragraph>
                    </Box>

                    <Box mt='md'>
                        <Topic size='lg' pb='xs'>The providers directory</Topic>

                        <Paragraph align='justify'>
                            The <CodeHighlight>providers</CodeHighlight> directory contains all the service providers
                            for your application. Service providers bootstrap your application by binding services in
                            the service container, registering events, or performing any other tasks to prepare your
                            application to run.
                        </Paragraph>
                    </Box>

                    <Box mt='md'>
                        <Topic size='lg' pb='xs'>The routes directory</Topic>

                        <Paragraph align='justify'>
                            The <CodeHighlight>routes</CodeHighlight> directory contains all the route definitions for your
                            application. By default, several route files are included with Athenna:
                        </Paragraph>

                        <List variant='unordered' color='purple'>
                            <li className='drac-text drac-text-white'>The <CodeHighlight>http.ts</CodeHighlight> file is where you will define the entry point of your api using the <CodeHighlight>Route</CodeHighlight> facade that is provided by the <CodeHighlight>HttpRouteProvider</CodeHighlight>.</li>
                            <li className='drac-text drac-text-white'>The <CodeHighlight>console.ts</CodeHighlight> file is where you will define the entry point of your commands using the <CodeHighlight>Artisan</CodeHighlight> facade that is provided by the <CodeHighlight>ArtisanProvider</CodeHighlight>.</li>
                        </List>

                        <Admonition type='important'>
                            <Paragraph align='justify' size='sm'>
                                As you may have noticed your project does not have the <CodeHighlight>console.ts</CodeHighlight> file.
                                We only recommend using this file when you don&apos;t want to use TypeScript in your application or when
                                you want to add some personalized option of <CodeHighlight href='https://www.npmjs.com/package/commander'>commander</CodeHighlight> to
                                your command. Check the example:
                            </Paragraph>

                            <CodeBox language='typescript' code={
                                "import { Artisan } from '@athenna/artisan'\n\n" +

                                "Artisan.route('hello', function (helloArg: string, options: { hello: string }) {\n" +
                                "  console.log(helloArg)\n" +
                                "  console.log(options.hello)\n" +
                                "}) // 👈 Artisan.route return an instance of Commander\n" +
                                " .argument('<hello>', 'Description for hello argument.')\n" +
                                " .option('--hello', 'Description for hello flag.')"
                            } />
                        </Admonition>
                    </Box>

                    <Box mt='md'>
                        <Topic size='lg' pb='xs'>The storage directory</Topic>

                        <Paragraph align='justify'>
                            The <CodeHighlight>storage</CodeHighlight> directory contains your logs, file caches,
                            files uploaded locally and other files generated by the framework. This directory is
                            segregated into the following directories:
                        </Paragraph>

                        <List variant='unordered' color='purple'>
                            <li className='drac-text drac-text-white'>The <CodeHighlight>app</CodeHighlight> directory may be used to store any files generated by your application.</li>
                            <li className='drac-text drac-text-white'>The <CodeHighlight>framework</CodeHighlight> directory is used to store framework generated files and caches.</li>
                            <li className='drac-text drac-text-white'>The <CodeHighlight>logs</CodeHighlight> directory contains your application&apos;s log files.</li>
                        </List>
                    </Box>

                    <Box mt='md'>
                        <Topic size='lg' pb='xs'>The tests directory</Topic>

                        <Paragraph align='justify'>
                            You can create a test executing the <CodeHighlight>./node artisan make:test</CodeHighlight> command.
                            The <CodeHighlight>tests</CodeHighlight> directory contains your unitary and E2E tests. Each test file
                            name should always end with the word <CodeHighlight>Test</CodeHighlight> at the end. You may run your tests
                            using the <CodeHighlight>./node artisan test</CodeHighlight> command.
                        </Paragraph>

                        <Admonition type='warning'>
                            <Paragraph align='justify' size='sm'>
                                If your test file name does not end with <CodeHighlight>Test</CodeHighlight>, it will be ignored
                                and the test class will not run. But, you can customize this behavior in the <CodeHighlight>configure</CodeHighlight> function
                                of <CodeHighlight href='https://japa.dev/docs'>Japa</CodeHighlight> inside your <CodeHighlight>bootstrap/test.ts</CodeHighlight> file.
                            </Paragraph>
                        </Admonition>
                    </Box>
                </Box>

                <Box mt='md'>
                    <Topic size='xl' pb='xs'>Slim structure</Topic>

                    <Paragraph align='justify'>
                        The slim project structure has only three folders when you create the project:
                    </Paragraph>

                    <List variant='unordered' color='purple'>
                        <li className='drac-text drac-text-white'>
                            The <CodeHighlight>bin</CodeHighlight> directory is the same
                            as <CodeHighlight href='/docs/getting-started/directory-structure#the-bootstrap-directory'>bootstrap</CodeHighlight>.
                        </li>
                        <li className='drac-text drac-text-white'>
                            The <CodeHighlight>src</CodeHighlight> directory is used to store all the source code files of your applications.
                        </li>
                        <li className='drac-text drac-text-white'>
                            The <CodeHighlight>tests</CodeHighlight> directory is the same
                            as <CodeHighlight href='/docs/getting-started/directory-structure#the-tests-directory'>tests</CodeHighlight>.
                        </li>
                    </List>
                </Box>

                <Box mt='md'>
                    <Topic size='xl' pb='xs'>Do your own structure</Topic>

                    <Paragraph align='justify'>
                        There are some files in your project that are crucial to keep in certain places. Let&apos;s analyze some of them:
                    </Paragraph>

                    <List variant='unordered' color='purple'>
                        <li className='drac-text drac-text-justify drac-text-white'>
                            The <CodeHighlight>bootstrap/main.ts</CodeHighlight> file is the entry point of
                            the <CodeHighlight>./node artisan serve</CodeHighlight> command. Every time that
                            you run this command, Athenna will use this file to run your application.
                        </li>
                        <li className='drac-text drac-text-justify drac-text-white'>
                            The <CodeHighlight>bootstrap/artisan.ts</CodeHighlight> file is the entry point of
                            the <CodeHighlight>./node artisan</CodeHighlight> script. You can check how this works
                            in the <Link href='/docs/getting-started/node-script-file'>node script file documentation section</Link>.
                        </li>
                        <li className='drac-text drac-text-justify drac-text-white'>
                            The <CodeHighlight>config</CodeHighlight> path is where you are going to setup your configuration files. You can
                            learn more about configuration files at <Link href='/docs/getting-started/configuration'>the configuration documentation section</Link>.
                        </li>
                        <li className='drac-text drac-text-justify drac-text-white'>
                            The <CodeHighlight>routes/http.ts</CodeHighlight> file is where you are going to register your Http server routes.
                        </li>
                    </List>

                    <Paragraph align='justify'>
                        Athenna is a framework with a lot of opinion, with predefined project structures, it was built that way to make your
                        life easier. But speaking from developer to developer, we know how much fun it is to be able to have control over
                        everything in your application, especially the structure of your project. 😎
                    </Paragraph>

                    <Paragraph align='justify'>
                        With that in mind, Athenna was built in a fully configurable way. You can create your files and folders anywhere, even the
                        one that are crucial to keep in certain places.
                    </Paragraph>

                    <Topic size='md'>Replacing directories</Topic>

                    <Paragraph align='justify'>
                        Athenna always rely in <CodeHighlight href='/docs/digging-deeper/helpers#path'>Path</CodeHighlight> class 
                        to lookup for files in paths like <CodeHighlight>bootstrap</CodeHighlight>, <CodeHighlight>config</CodeHighlight> and <CodeHighlight>routes</CodeHighlight> directories.
                        So we can agree that if there was a way to change the paths returned by the methods 
                        of the <CodeHighlight>Path</CodeHighlight> class, we might be able to create custom project structures.
                    </Paragraph>

                    <Paragraph align='justify'>
                        Let&apos;s suppose we are creating a custom project structure where we want to keep all the entry point files 
                        of <CodeHighlight>bootstrap</CodeHighlight> path in <CodeHighlight>bin</CodeHighlight> path. The configuration files should
                        be replaced from <CodeHighlight>config</CodeHighlight> to <CodeHighlight>src/config</CodeHighlight> and routes from <CodeHighlight>routes</CodeHighlight> to <CodeHighlight>src/routes</CodeHighlight>.
                    </Paragraph>


                    <Paragraph align='justify'>
                        To do so, we can use 
                        the <CodeHighlight href='/docs/getting-started/athennarc-file#the-directories-property'>directories</CodeHighlight> property 
                        in the <CodeHighlight>.athennarc.json</CodeHighlight> file. With this property we could simply specify three things to Athenna:
                    </Paragraph>

                    <List variant='unordered' color='purple'>
                        <li className='drac-text drac-text-justify drac-text-white'>
                            That the <CodeHighlight>Path.bootstrap</CodeHighlight> method should return the path to <CodeHighlight>/your/project-root/bin</CodeHighlight> folder.
                        </li>
                        <li className='drac-text drac-text-justify drac-text-white'>
                            That the <CodeHighlight>Path.config</CodeHighlight> method should return the path to <CodeHighlight>/your/project-root/src/config</CodeHighlight> folder.
                        </li>
                        <li className='drac-text drac-text-justify drac-text-white'>
                            That the <CodeHighlight>Path.routes</CodeHighlight> method should return the path to <CodeHighlight>/your/project-root/src/routes</CodeHighlight> folder.
                        </li>
                    </List>

                    <Paragraph align='justify'>
                        So, in our <CodeHighlight>.athennarc.json</CodeHighlight> file we 
                        could simply map the paths that Athenna should start using for each method:
                    </Paragraph>

                    <CodeBox language='json' code={
                        '{\n' +
                        '  "directories": {\n' +
                        '    "bootstrap": "bin"\n' +
                        '    "config": "src/config"\n' +
                        '    "routes": "src/routes"\n' +
                        '  }\n' +
                        '}'
                    } />

                    <Paragraph align='justify'>
                        Now when calling the methods mapped above in <CodeHighlight>Path</CodeHighlight> class, 
                        the paths returned will be resolved exactly as we specified in the <CodeHighlight>.athennarc.json</CodeHighlight> file:
                    </Paragraph>

                    <CodeBox language='typescript' code={
                        `import { Path } from '@athenna/common'\n\n` +

                        `console.log(Path.bootstrap()) // /your/project-root/bin 👈\n` +
                        `console.log(Path.config()) // /your/project-root/src/config 👈\n` +
                        `console.log(Path.routes()) // /your/project-root/src/routes 👈`
                    } />

                    <Paragraph align='justify'>
                        And of course, since Athenna uses the <CodeHighlight>Path</CodeHighlight> class 
                        internally to lookup for files in the specified paths above, commands 
                        like <CodeHighlight>./node artisan serve</CodeHighlight> will also work as expected.
                    </Paragraph>

                    <Paragraph align='justify'>
                        To replace <CodeHighlight>bootstrap/artisan.ts</CodeHighlight> with <CodeHighlight>bin/artisan.ts</CodeHighlight> file 
                        we can change the <CodeHighlight>./node</CodeHighlight> script:
                    </Paragraph>

                    <CodeBox language='bash' code={
                        '#!/bin/bash\n\n' +

                        'node="node --loader ts-node/esm --experimental-import-meta-resolve"\n\n' +

                        '# Replace the first occurrence of "artisan" with "bin/artisan.ts", 👈\n' +
                        '# including any preceding or following spaces.\n' +
                        'args=$(echo "$@" | sed -E \'s/(^| )artisan( |$)/ \\1bin\\/artisan.ts\\2/\') 👈\n\n' +

                        '$node $args'
                    } />

                    <Paragraph align='justify'>
                        Now when executing the <CodeHighlight>./node artisan</CodeHighlight> command in your terminal, it will use
                        the <CodeHighlight>bin/artisan.ts</CodeHighlight> file instead.
                    </Paragraph>

                    <Box mt='md'>
                        <Topic size='lg' pb='xs'>Changing make commands directory</Topic>

                        <Paragraph align='justify'>
                            All of the <CodeHighlight>make</CodeHighlight> commands also relies 
                            in <CodeHighlight href='/docs/digging-deeper/helpers#path'>Path</CodeHighlight> class 
                            to save the files generated in some determined path. Check the example:
                        </Paragraph>

                        <CodeBox language='bash' code={
                            './node artisan make:service HelloService'
                        } />

                        <Paragraph align='justify'>
                            This command will generate the <CodeHighlight>HelloService.ts</CodeHighlight> file
                            inside <CodeHighlight>app/Services</CodeHighlight> directory when using Laravel project structure. If you
                            are using the slim structure, it will be saved inside <CodeHighlight>src/services</CodeHighlight> directory 
                            because the value of <CodeHighlight>directories.services</CodeHighlight> in <CodeHighlight>.athennarc.json</CodeHighlight> file 
                            is mapped to <CodeHighlight>src/services</CodeHighlight>.
                        </Paragraph>

                        <Paragraph align='justify'>
                            So, following the same implementation of slim structure, to change the path of generated service files,
                            let&apos;s add the value of <CodeHighlight>directories.services</CodeHighlight> in <CodeHighlight>.athennarc.json</CodeHighlight> file:
                        </Paragraph>

                        <CodeBox language='json' code={
                            '{\n' +
                            '  "directories": {\n' +
                            '    "services": "src/services"\n' +
                            '  }\n' +
                            '}'
                        } />

                        <Paragraph align='justify'>
                            Now when executing 
                            the <CodeHighlight>./node artisan make:service HelloService</CodeHighlight> command 
                            in your terminal, the <CodeHighlight>HelloService.ts</CodeHighlight> will be saved 
                            inside <CodeHighlight>src/services</CodeHighlight> directory.
                        </Paragraph>

                        <Paragraph align='justify'>
                            In the example bellow you can check the default destination directories of all <CodeHighlight>make</CodeHighlight> commands:
                        </Paragraph>
                        
                        <CodeBox language='json' code={
                            '{\n' +
                            '  "directories": {\n' +
                            '    "exceptions": "app/Exceptions",          make:exception\n' +
                            '    "facades": "providers/facades",          make:facade\n' +
                            '    "providers": "providers",                make:provider\n' +
                            '    "services": "app/Services",              make:service\n' +
                            '    "tests": "tests",                        make:test\n' +
                            '    "commands": "app/Console/Commands",      make:command\n' +
                            '    "controllers": "app/Http/Controllers",   make:controller\n' +
                            '    "middlewares": "app/Http/Middlewares",   make:middleware\n' +
                            '    "interceptors": "app/Http/Interceptors", make:interceptor\n' +
                            '    "terminators": "app/Http/Terminators"    make:terminator\n' +
                            '}'
                        } />

                        <Paragraph align='justify'>
                            Check <Link href='/docs/getting-started/athennarc-file#the-directories-property'>the directories property documentation section</Link> to see all
                            the available directories that you can change in your <CodeHighlight>directories</CodeHighlight> property.
                        </Paragraph>
                    </Box>
                </Box>
            </Box>
        )
    }
}

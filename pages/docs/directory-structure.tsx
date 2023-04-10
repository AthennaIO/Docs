import Docs from '#layouts/Docs'
import Topic from '#components/Topic'
import Topics from '#components/Topics'
import CodeBox from '#components/CodeBox'
import Admonition from '#components/Admonition'
import CodeHighlight from '#components/CodeHighlight'

import { Component } from 'react'
import { Box, List, Paragraph } from 'dracula-ui'

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
    ]

    public render() {
        return (
            <Box>
                <Topics topics={this.topics}/>

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

                <Box mt='md'>
                    <Topic size='xl' pb='xs'>Laravel based structure</Topic>

                    <Box mt='md'>
                        <Topic size='lg' pb='xs'>The app directory</Topic>

                        <Paragraph align='justify'>
                            The <CodeHighlight>app</CodeHighlight> directory contains the core code of your
                            application. We'll explore this directory in more detail soon. Almost all the
                            classes in your application will be in this directory.
                        </Paragraph>
                    </Box>

                    <Box mt='md'>
                        <Topic size='lg' pb='xs'>The bootstrap directory</Topic>

                        <Paragraph align='justify'>
                            The <CodeHighlight>bootstrap</CodeHighlight> directory contains all of your
                            application's bootstrap files. It's here that Athenna holds the  <CodeHighlight>main.ts</CodeHighlight>
                            file that bootstrap the application using the  <CodeHighlight>Ignite</CodeHighlight> class.
                        </Paragraph>
                    </Box>

                    <Box mt='md'>
                        <Topic size='lg' pb='xs'>The config directory</Topic>

                        <Paragraph align='justify'>
                            The <CodeHighlight>config</CodeHighlight> directory contains all of your application's
                            configuration files. It's a great idea to read through all of these files and familiarize
                            yourself with all the options available to you.
                        </Paragraph>
                    </Box>

                    <Box mt='md'>
                        <Topic size='lg' pb='xs'>The database directory</Topic>

                        <Paragraph align='justify'>
                            This directory does not exist by default, but will be created for you if you execute
                            the <CodeHighlight>./node artisan configure @athenna/database</CodeHighlight> command.
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
                            <li className='drac-text drac-text-white'>The <CodeHighlight>http.ts</CodeHighlight> file is where you will define the entrypoint of your api using the <CodeHighlight>Route</CodeHighlight> facade that is provided by the <CodeHighlight>HttpRouteProvider</CodeHighlight>.</li>
                            <li className='drac-text drac-text-white'>The <CodeHighlight>console.ts</CodeHighlight> file is where you will define the entrypoint of your commands using the <CodeHighlight>Artisan</CodeHighlight> facade that is provided by the <CodeHighlight>ArtisanProvider</CodeHighlight>.</li>
                        </List>

                        <Admonition type='important'>
                            <Paragraph align='justify' size='sm'>
                                As you may have noticed your project does not have the <CodeHighlight>console.ts</CodeHighlight> file.
                                We only recommend using this file when you don't want to use TypeScript in your application or when
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

                            The <CodeHighlight>app</CodeHighlight> directory may be used
                            to store any files generated by your application. The framework directory is used to store framework generated files and caches and the logs directory contains your application's log files.
                        </Paragraph>

                        <List variant='unordered' color='purple'>
                            <li className='drac-text drac-text-white'>The <CodeHighlight>app</CodeHighlight> directory may be used to store any files generated by your application.</li>
                            <li className='drac-text drac-text-white'>The <CodeHighlight>framework</CodeHighlight> directory is used to store framework generated files and caches.</li>
                            <li className='drac-text drac-text-white'>The <CodeHighlight>logs</CodeHighlight> directory contains your application's log files.</li>
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
                </Box>

                <Box mt='md'>
                    <Topic size='xl' pb='xs'>Do your own structure</Topic>
                </Box>
            </Box>
        )
    }
}

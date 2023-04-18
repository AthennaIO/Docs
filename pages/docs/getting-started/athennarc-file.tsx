import Docs from '#layouts/Docs'
import Link from '#components/Link'
import Topic from '#components/Topic'
import Topics from '#components/Topics'
import CodeBox from '#components/CodeBox'
import Admonition from '#components/Admonition'
import CodeHighlight from '#components/CodeHighlight'

import { Component } from 'react'
import { Box, Paragraph } from 'dracula-ui'

export async function getStaticProps() {
    return {
        props: {
            query: {
                title: 'AthennaRC File',
                description: 'Understand what is the purpose of the .athennarc.json file.'
            }
        }
    }
}

export default class AthennaRcFile extends Component {
    public static Layout = Docs

    public topics = [
        { title: 'Introduction' },
        { title: 'RC file vs Configurations' },
        { title: 'The preloads property' },
        { title: 'The providers property' },
        { title: 'The services property' },
        { title: 'The commands property' },
        { title: 'The templates property' },
        { title: 'The controllers property' },
        { title: 'The middlewares property' },
        { title: 'The namedMiddlewares property' },
        { title: 'The globalMiddlewares property' },
    ]

    public render() {
        return (
            <Box>
                <Topics topics={this.topics}/>

                <Box mt='lg'>
                    <Topic size='xl' pb='xs'>Introduction</Topic>

                    <Paragraph align='justify'>
                        Inside the root directory of your project, there is a file
                        called <CodeHighlight>.athennarc.json</CodeHighlight> which is responsible for
                        configuring the workspace and certain runtime settings of your Athenna application.
                    </Paragraph>
                </Box>

                <Box mt='md'>
                    <Topic size='xl' pb='xs'>RC file vs Configurations</Topic>

                    <Paragraph align='justify'>
                        The responsible of the RC file is configuring the workspace and certain runtime settings
                        to bootstrap your Athenna application properly. Also, when working
                        with <CodeHighlight>json</CodeHighlight> files is very easy to manipulate
                        the values of it, making it possible to make changes on the file in runtime. Let&apos;s see
                        an example where Athenna manipulates your RC file:
                    </Paragraph>

                    <CodeBox  language='bash' code={
                        `./node artisan make:service UserService`
                    } />

                    <Paragraph align='justify'>
                        Athenna will create the service file in your project but also register
                        it inside of your <CodeHighlight>.athennarc.json</CodeHighlight> file:
                    </Paragraph>

                    <CodeBox language='json' code={
                        '{\n' +
                        '  ...\n' +
                        '  "services": [\n' +
                        '    "#app/Services/UserService"\n' +
                        '  ]\n' +
                        '  ...\n' +
                        '}'
                    } />
                </Box>

                <Box mt='md'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>preloads</CodeHighlight> property</Topic>

                    <Paragraph align='justify'>
                        An array of files that will be loaded when your application is bootstraping. The
                        files are loaded after booting the service providers. You can do anything you want
                        in preload files. Check the example bellow:
                    </Paragraph>

                    <CodeBox language='typescript' code={
                        "import { Log } from '@athenna/logger'\n" +
                        "import { Config } from '@athenna/core'\n\n" +

                        "Log.info(`Hello from ${Config.get('app.name')} application!`)"
                    } />

                    <CodeBox language='json' code={
                        '{\n' +
                        '  ...\n' +
                        '  "preloads": [\n' +
                        '    "./bootstrap/preloads/say-hello.js"\n' +
                        '  ]\n' +
                        '  ...\n' +
                        '}'
                    } />
                </Box>

                <Box mt='md'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>providers</CodeHighlight> property</Topic>

                    <Paragraph align='justify'>
                        An array of service providers to load when the application is bootstrapping:
                    </Paragraph>

                    <CodeBox language='json' code={
                        '{\n' +
                        '  ...\n' +
                        '  "providers": [\n' +
                        '    "@athenna/core/providers/CoreProvider",\n' +
                        '    "@athenna/http/providers/HttpRouteProvider",\n' +
                        '    "@athenna/http/providers/HttpServerProvider"\n' +
                        '  ]\n' +
                        '  ...\n' +
                        '}'
                    } />

                    <Admonition type='tip'>
                        <Paragraph align='justify' size='sm'>
                            More information about service providers could be found
                            at <Link size='sm' href='/docs/the-basics/http/controllers'>service providers documentation section</Link>.
                        </Paragraph>
                    </Admonition>
                </Box>

                <Box mt='md'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>services</CodeHighlight> property</Topic>

                    <Paragraph align='justify'>
                        This property is responsible to register your application services or from some library inside the
                        service container. In most cases is better to simple instantiate your services, but in other you might
                        have different implementations for some interface,
                        using <Link href='https://www.educative.io/answers/what-is-inversion-of-control'>inversion of control</Link> in
                        this cases could be a very good idea to register your services in the container:
                    </Paragraph>

                    <CodeBox language='json' code={
                        '{\n' +
                        '  ...\n' +
                        '  "services": [\n' +
                        '    "#app/Services/AppService",\n' +
                        '    "./app/Services/OtherService.js"\n' +
                        '  ]\n' +
                        '  ...\n' +
                        '}'
                    } />
                </Box>

                <Box mt='md'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>commands</CodeHighlight> property</Topic>

                    <Paragraph align='justify'>
                        An object that is responsible to register your application commands and their respective settings. The
                        key of the commands object needs to be exactly your command signature without any arguments, flags or spaces.
                        Also, the value of it could be the command path or an object with the &quotpath&quot key inside:
                    </Paragraph>

                    <CodeBox language='json' code={
                        '{\n' +
                        '  ...\n' +
                        '  "commands": {\n' +
                        '    "make:exception": "@athenna/core/commands/MakeExceptionCommand",\n' +
                        '    "make:facade": {\n' +
                        '      "path": "@athenna/core/commands/MakeFacadeCommand",\n' +
                        '      "destination": "./src/providers/facades",\n' +
                        '      "loadApp": false,\n' +
                        '      "stayAlive": false\n' +
                        '      "environments": ["console"]\n' +
                        '    }\n' +
                        '  }\n' +
                        '  ...\n' +
                        '}'
                    } />

                    <Admonition type='tip'>
                        <Paragraph align='justify' size='sm'>
                            More information about commands could be found
                            at <Link size='sm' href='/docs/the-basics/cli/commands'>cli commands documentation section</Link>.
                        </Paragraph>
                    </Admonition>
                </Box>

                <Box mt='md'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>templates</CodeHighlight> property</Topic>

                    <Paragraph align='justify'>
                        Map your application commands templates with their respective path. The templates mapped in this object
                        will be used by your <CodeHighlight>make</CodeHighlight> commands to generate the resource with some
                        specific code template:
                    </Paragraph>

                    <CodeBox language='json' code={
                        '{\n' +
                        '  ...\n' +
                        '  "templates": {\n' +
                        '    "exception": "node_modules/@athenna/core/templates/exception.edge",\n'+
                        '    "facade": "node_modules/@athenna/core/templates/facade.edge",\n'+
                        '  }\n' +
                        '  ...\n' +
                        '}'
                    } />
                </Box>

                <Box mt='md'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>controllers</CodeHighlight> property</Topic>

                    <Paragraph align='justify'>
                        An array with the controllers of your application. The controllers registered in this array
                        will be registered in the service container to be accessed easily by your Route facade:
                    </Paragraph>

                    <CodeBox language='json' code={
                        '{\n' +
                        '  ...\n' +
                        '  "controllers": [\n' +
                        '    "#app/Http/Controllers/AppController",\n' +
                        '    "./app/Http/Controllers/OtherController.js"\n' +
                        '  ]\n' +
                        '  ...\n' +
                        '}'
                    } />

                    <Admonition type='tip'>
                        <Paragraph align='justify' size='sm'>
                            More information about controllers could be found
                            at <Link size='sm' href='/docs/the-basics/http/controllers'>http controllers documentation section</Link>.
                        </Paragraph>
                    </Admonition>
                </Box>

                <Box mt='md'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>middlewares</CodeHighlight> property</Topic>

                    <Paragraph align='justify'>
                        An array with the middlewares of your application. The middlewares registered in this array
                        will be registered in the service container to be accessed easily by your Route facade:
                    </Paragraph>

                    <CodeBox language='json' code={
                        '{\n' +
                        '  ...\n' +
                        '  "middlewares": [\n' +
                        '    "#app/Http/Middlewares/AppMiddleware",\n' +
                        '    "./app/Http/Interceptors/AppInterceptor.js"\n' +
                        '  ]\n' +
                        '  ...\n' +
                        '}'
                    } />

                    <Admonition type='tip'>
                        <Paragraph align='justify' size='sm'>
                            More information about middlewares could be found
                            at <Link size='sm' href='/docs/the-basics/http/middlewares'>http middlewares documentation section</Link>.
                        </Paragraph>
                    </Admonition>
                </Box>

                <Box mt='md'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>namedMiddlewares</CodeHighlight> property</Topic>

                    <Paragraph align='justify'>
                        Map the named middlewares of your application. Named middlewares could be configured using
                        the <CodeHighlight>@Middleware</CodeHighlight> annotation, but if you are not using TypeScript in your
                        application, you can use this object to map your named middlewares. Named middlewares are very usefull to
                        be used in your routes declaration:
                    </Paragraph>

                    <CodeBox language='json' code={
                        '{\n' +
                        '  ...\n' +
                        '  "namedMiddlewares": {\n' +
                        '    "app": "#app/Http/Middlewares/AppMiddleware",\n' +
                        '    "intercept": "./app/Http/Interceptors/AppInterceptor.js"\n' +
                        '  }\n' +
                        '  ...\n' +
                        '}'
                    } />
                </Box>

                <Box mt='md'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>globalMiddlewares</CodeHighlight> property</Topic>

                    <Paragraph align='justify'>
                        An array with the global middlewares of your application. Global middlewares could be configured using
                        the <CodeHighlight>@Middleware</CodeHighlight> annotation, but if you are not using TypeScript in your
                        application, you can use this object to map your named middlewares. Global middlewares are executed
                        everytime in any request of your application:
                    </Paragraph>

                    <CodeBox language='json' code={
                        '{\n' +
                        '  ...\n' +
                        '  "globalMiddlewares": [\n' +
                        '    "#app/Http/Middlewares/AppMiddleware",\n' +
                        '    "./app/Http/Interceptors/AppInterceptor.js"\n' +
                        '  ]\n' +
                        '  ...\n' +
                        '}'
                    } />
                </Box>
            </Box>
        )
    }
}

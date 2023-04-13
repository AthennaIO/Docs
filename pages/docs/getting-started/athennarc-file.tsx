import Docs from '#layouts/Docs'
import Topic from '#components/Topic'
import Topics from '#components/Topics'
import CodeHighlight from '#components/CodeHighlight'

import {Box, Paragraph} from 'dracula-ui'
import { Component } from 'react'
import CodeBox from "#components/CodeBox";
import Link from "#components/Link";

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
        { title: 'The interceptors property' },
        { title: 'The terminators property' },
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

                    <Box mt='lg'>
                        <Topic size='lg' pb='xs'>RC file vs Configurations</Topic>

                        <Paragraph align='justify'>
                            The responsible of the RC file is configuring the workspace and certain runtime settings
                            to bootstrap your Athenna application properly. Also, when working
                            with <CodeHighlight>json</CodeHighlight> files is very easy to manipulate
                            the values of it, making it possible to make changes on the file in runtime. Let's see
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
                </Box>

                <Box mt='lg'>
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

                <Box mt='lg'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>providers</CodeHighlight> property</Topic>

                    <Paragraph align='justify'>
                        An array of service providers to load when the application is bootstrapping. More information
                        about service providers could be found at <Link href='/docs/architecture-concepts/providers'>service providers documentation section</Link>.
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
                </Box>

                <Box mt='lg'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>services</CodeHighlight> property</Topic>

                    <Paragraph>
                        This property is responsible to register your own application services inside the service
                        container. In most cases is better to simple instantiate your services, but in other you might
                        have different implementations for some interface,
                        using <Link href='https://www.educative.io/answers/what-is-inversion-of-control'>inversion of control</Link>
                        in this cases could be a very good idea.
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

                <Box mt='lg'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>commands</CodeHighlight> property</Topic>
                </Box>

                <Box mt='lg'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>templates</CodeHighlight> property</Topic>
                </Box>

                <Box mt='lg'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>controllers</CodeHighlight> property</Topic>
                </Box>

                <Box mt='lg'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>middlewares</CodeHighlight> property</Topic>
                </Box>

                <Box mt='lg'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>interceptors</CodeHighlight> property</Topic>
                </Box>

                <Box mt='lg'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>terminators</CodeHighlight> property</Topic>
                </Box>
            </Box>
        )
    }
}

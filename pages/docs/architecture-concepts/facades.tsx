import Docs from '#layouts/Docs'
import Topic from '#components/Topic'
import Topics from '#components/Topics'

import {Box, Paragraph, Table} from 'dracula-ui'
import { Component } from 'react'
import Link from "#components/Link";
import CodeBox from "#components/CodeBox";
import CodeHighlight from "#components/CodeHighlight";
import Admonition from "#components/Admonition";

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Facades',
        description: 
          'Understand the purpose and how to use the Athenna facades.'
      }
    }
  }
}

export default class Facades extends Component {
  public static Layout = Docs

  public topics = [
    { title: 'Introduction' },
    { title: 'When to use facades' },
    { title: 'How facades works' },
    { title: 'Facades class reference' },
    { title: 'Writing facades' }
  ]

  public render() {
    return (
      <Box>
        <Topics topics={this.topics}/>

        <Box mt='lg'>
          <Topic size='xl' pb='xs'>Introduction</Topic>

            <Paragraph align='justify'>
                Throughout the Athenna documentation, you will see examples of code that
                interacts with Athenna features via &quot;facades&quot;. Facades provide a &quot;static&quot;
                interface to class that are available in the
                application&apos;s <Link href='/docs/architecture-concepts/service-container'>service container</Link>.
                Athenna ships with many facades which provide access to almost all of Athenna features.
            </Paragraph>

            <Paragraph align='justify'>
                Athenna facades serve as &quot;static proxies&quot; to underlying classes in the service container,
                providing the benefit of a terse, expressive syntax while maintaining more testability and
                flexibility than traditional static methods. It&apos;s perfectly fine if you don&apos;t totally
                understand how facades work under the hood - just go with the flow and continue learning
                about Athenna.
            </Paragraph>

            <Paragraph align='justify'>
                All of Athenna facades are defined in their own packages. So, we can easily access a facade like so:
            </Paragraph>

            <CodeBox language='typescript' code={
                `import { Log } from '@athenna/logger' // Log Facade\n` +
                `import { Route } from '@athenna/http' // Route Facade\n\n` +

                `Route.get('/welcome', ({ response }) => {\n` +
                `  Log.channel('simple').success('New request received 😝')\n\n` +

                `  return response.status(200).send({ message: 'ok' })\n` +
                `})`
            } />

            <Paragraph align='justify'>
                Throughout the Athenna documentation, many of the examples will use facades to demonstrate
                various features of the framework.
            </Paragraph>

            <Topic size='lg' pb='xs'>Helpers</Topic>

            <Paragraph align='justify'>
                To complement facades, Athenna offers a variety of &quot;helper classes&quot; that
                make it even easier to interact with common Athenna features. Some common helper
                functions you may interact with are <CodeHighlight>Env</CodeHighlight>, <CodeHighlight>Config</CodeHighlight>, <CodeHighlight>Path</CodeHighlight>, and more.
                Each helper function offered by Athenna is documented with their corresponding feature;
                however, a complete list is available within <Link href='/docs/digging-deeper/helpers'>the dedicated helpers documentation</Link>.
            </Paragraph>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>When to use facades</Topic>

            <Paragraph align='justify'>
                Facades have many benefits. They provide a terse, memorable syntax
                that allows you to use Athenna features without remembering long class
                names that must be injected or configured manually.
            </Paragraph>

            <Paragraph align='justify'>
                However, some care must be taken when using facades. The primary danger
                of facades is class &quot;scope creep&quot;. Since facades are so easy to
                use and do not require injection, it can be easy to let your classes
                continue to grow and use many facades in a single class. Using dependency
                injection, this potential is mitigated by the visual feedback a large
                constructor gives you that your class is growing too large. So, when using
                facades, pay special attention to the size of your class so that its scope
                of responsibility stays narrow. If your class is getting too large, consider
                splitting it into multiple smaller classes.
            </Paragraph>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>How facades works</Topic>

            <Paragraph align='justify'>
                In an Athenna application, a facade is a class that provides access to an object from the container.
                The machinery that makes this work is in the <CodeHighlight>Facade</CodeHighlight> class. Athenna facades,
                and any custom facades you create, will be created using the <CodeHighlight>Facade</CodeHighlight> class.
            </Paragraph>

            <Paragraph align='justify'>
                The <CodeHighlight>Facade</CodeHighlight> class makes use of
                the <Link href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy'>Proxy API</Link> to
                defer calls from your facade to an object resolved from the container. In the example below, a call is
                made to the Athenna log system. By glancing at this code, one might assume that the static <CodeHighlight>success()</CodeHighlight> method
                is being called on the <CodeHighlight>Log</CodeHighlight> class:
            </Paragraph>

            <CodeBox language='typescript' code={
                `import { Log } from '@athenna/logger'\n` +
                `import { Context, Controller } from '@athenna/http'\n\n` +

                `@Controller()\n` +
                `export class AppController {\n` +
                `  public async show({ response }: Context) {\n` +
                `    Log.success('Welcome to Athenna 😝')\n\n` +

                `    return response.status(200).send({ hello: 'world' })\n` +
                `  }\n` +
                `}`
            } />

            <Paragraph align='justify'>
                Notice that near the top of the file we are importing the <CodeHighlight>Log</CodeHighlight> facade. This
                facade serves as a proxy for accessing the underlying implementation of the
                <CodeHighlight>Logger</CodeHighlight> class from Athenna service container. Any
                calls we make using the facade will be passed to the underlying instance of Athenna
                logger class.
            </Paragraph>

            <Paragraph align='justify'>
                If we look at the <CodeHighlight>Log</CodeHighlight> facade file implementation, you&apos;ll see that Log is
                just a constant that points to the alias <CodeHighlight>Athenna/Core/Logger</CodeHighlight> that
                is registered inside the service container:
            </Paragraph>

            <CodeBox language='typescript' code={
                `import { Facade } from '@athenna/ioc'\n` +
                `import { Logger } from '#src/Logger/Logger'\n\n` +

                `export const Log = Facade.createFor<Logger>('Athenna/Core/Logger')`
            } />

            <Paragraph align='justify'>
                The job of the <CodeHighlight>createFor()</CodeHighlight> method is to create a new proxy object that
                will have the same methods as the <CodeHighlight>Logger</CodeHighlight> class. So, when the user
                references any static method on the <CodeHighlight>Log</CodeHighlight> facade, Athenna will first resolve
                the <CodeHighlight>Athenna/Core/Logger</CodeHighlight> binding from
                the <Link href='/docs/architecture-concepts/service-container'>service container</Link> and them runs the
                requested method, (in the example above, the <CodeHighlight>success()</CodeHighlight> method) against that object.
            </Paragraph>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>Facades class reference</Topic>

            <Paragraph align='justify'>
                Below you will find every facade and its underlying class. This is a useful tool for quickly digging into the
                API documentation for a given facade root. The service container binding key is also included where applicable.
            </Paragraph>

            <Table>
                <thead>
                <tr>
                    <td align='center' className="drac-text drac-text-white">Facade</td>
                    <td align='center' className="drac-text drac-text-white">Reference class</td>
                    <td align='center' className="drac-text drac-text-white">Binding alias</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="drac-text drac-text-white"><Link href='https://github.com/AthennaIO/Logger/blob/develop/src/Facades/Log.ts'>Log</Link></td>
                    <td className="drac-text drac-text-white"><Link href='https://github.com/AthennaIO/Logger/blob/develop/src/Logger/Logger.ts'>Logger</Link></td>
                    <td className="drac-text drac-text-yellow">Athenna/Core/Logger</td>
                </tr>
                <tr>
                    <td className="drac-text drac-text-white"><Link href='https://github.com/AthennaIO/Http/blob/develop/src/Facades/Route.ts'>Route</Link></td>
                    <td className="drac-text drac-text-white"><Link href='https://github.com/AthennaIO/Http/blob/develop/src/Router/Router.ts'>Router</Link></td>
                    <td className="drac-text drac-text-yellow">Athenna/Core/HttpRoute</td>
                </tr>
                <tr>
                    <td className="drac-text drac-text-white"><Link href='https://github.com/AthennaIO/Http/blob/develop/src/Facades/Server.ts'>Server</Link></td>
                    <td className="drac-text drac-text-white"><Link href='https://github.com/AthennaIO/Http/blob/develop/src/Server/ServerImpl.ts'>ServerImpl</Link></td>
                    <td className="drac-text drac-text-yellow">Athenna/Core/HttpServer</td>
                </tr>
                <tr>
                    <td className="drac-text drac-text-white"><Link href='https://github.com/AthennaIO/Mail/blob/develop/src/Facades/Mail.ts'>Mail</Link></td>
                    <td className="drac-text drac-text-white"><Link href='https://github.com/AthennaIO/Mail/blob/develop/src/Mail/MailImpl.ts'>MailImpl</Link></td>
                    <td className="drac-text drac-text-yellow">Athenna/Core/Mail</td>
                </tr>
                <tr>
                    <td className="drac-text drac-text-white"><Link href='https://github.com/AthennaIO/View/blob/develop/src/Facades/View.ts'>View</Link></td>
                    <td className="drac-text drac-text-white"><Link href='https://github.com/AthennaIO/View/blob/develop/src/Views/ViewImpl.ts'>ViewImpl</Link></td>
                    <td className="drac-text drac-text-yellow">Athenna/Core/View</td>
                </tr>
                <tr>
                    <td className="drac-text drac-text-white"><Link href='https://github.com/AthennaIO/Artisan/blob/develop/src/Facades/Artisan.ts'>Artisan</Link></td>
                    <td className="drac-text drac-text-white"><Link href='https://github.com/AthennaIO/Artisan/blob/develop/src/Artisan/ArtisanImpl.ts'>ArtisanImpl</Link></td>
                    <td className="drac-text drac-text-yellow">Athenna/Core/Artisan</td>
                </tr>
                <tr>
                    <td className="drac-text drac-text-white"><Link href='https://github.com/AthennaIO/Database/blob/develop/src/Facades/Database.ts'>Database</Link></td>
                    <td className="drac-text drac-text-white"><Link href='https://github.com/AthennaIO/Database/blob/develop/src/Database/DatabaseImpl.ts'>DatabaseImpl</Link></td>
                    <td className="drac-text drac-text-yellow">Athenna/Core/Database</td>
                </tr>
                </tbody>
            </Table>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>Writing facades</Topic>

            <Paragraph align='justify'>
                First let&apos;s use the following command to create a
                new <Link href='/docs/architecture-concepts/service-providers'>service provider</Link> to resolve our dependency inside
                the <Link href='/docs/architecture-concepts/service-container'>service container</Link>:
            </Paragraph>

            <CodeBox language='bash' code={
                `./node artisan make:provider HelperProvider`
            } />

            <Paragraph align='justify'>
                Now let&apos;s register all of our helpers inside the <CodeHighlight>register()</CodeHighlight> method:
            </Paragraph>

            <CodeBox language='typescript' code={
                `import { File } from '#app/Helpers/File'\n` +
                `import { String } from '#app/Helpers/String'\n` +
                `import { ServiceProvider } from '@athenna/ioc'\n\n` +

                `export class HelperProvider extends ServiceProvider {\n` +
                `  public register() {\n` +
                `    this.container.singleton('App/Helpers/File', File)\n` +
                `    this.container.transient('App/Helpers/String', String)\n` +
                `  }\n` +
                `}`
            } />

            <Admonition type='warning'>
                <Paragraph size='sm' align='justify'>
                    If you have not used <CodeHighlight>make:provider</CodeHighlight> command to create the provider, you
                    will need to register it inside the <CodeHighlight>.athennarc.json</CodeHighlight> file, inside
                    the <CodeHighlight>providers</CodeHighlight> array.
                </Paragraph>
            </Admonition>

            <Paragraph size='sm' align='justify'>
                Artisan can generate a new facade via the <CodeHighlight>make:facade</CodeHighlight> command:
            </Paragraph>

            <CodeBox language='bash' code={
                `./node artisan make:facade String`
            } />

            <Paragraph size='sm' align='justify'>
                The facade file will be generated inside the <CodeHighlight>providers/facades</CodeHighlight> directory. Open
                this file and change the alias to your provider alias and setup the generic type:
            </Paragraph>

            <CodeBox language='typescript' code={
                `import { Facade } from '@athenna/ioc'\n` +
                `import { String as StringImpl } from '#app/Helpers/String'\n\n` +

                `export const String = Facade.createFor<StringImpl>('App/Helpers/String')`
            } />

            <Paragraph size='sm' align='justify'>
                Now we can start using our new <CodeHighlight>String</CodeHighlight> facade:
            </Paragraph>

            <CodeBox language='typescript' code={
                `import { Route } from '@athenna/http' // Route Facade\n` +
                `import { String } from '#providers/facades/String' // String Facade\n\n` +

                `Route.get('/welcome', ({ response }) => {\n` +
                `  return response\n` +
                `    .status(200)\n` +
                `    .send({ hello: String.toPascalCase('world') })\n` +
                `})`
            } />
        </Box>
      </Box>
    )
  }
}

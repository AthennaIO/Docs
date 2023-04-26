import Docs from '#layouts/Docs'
import Link from '#components/Link'
import Topic from '#components/Topic'
import Topics from '#components/Topics'
import CodeBox from '#components/CodeBox'
import Admonition from '#components/Admonition'
import CodeHighlight from '#components/CodeHighlight'

import { Component } from 'react'
import {Box, List, Paragraph} from 'dracula-ui'

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Service Providers',
        description: 
          'Understand the purpose and how to use the Athenna service providers.'
      }
    }
  }
}

export default class ServiceProviders extends Component {
  public static Layout = Docs

  public topics = [
    { title: 'Introduction' },
    { title: 'Writing service providers' },
    { title: 'The register method' },
    { title: 'The boot method' },
    { title: 'The shutdown method' },
    { title: 'Registering providers' },
    { title: 'Choosing applications' }
  ]

  public render() {
    return (
      <Box>
        <Topics topics={this.topics}/>

        <Box mt='lg'>
          <Topic size='xl' pb='xs'>Introduction</Topic>

          <Paragraph align='justify'>
            Service providers are the central place of all Athenna application bootstrapping.
            Your own application, as well as all of Athenna core services, are bootstrapped via
            service providers.
          </Paragraph>

          <Paragraph align='justify'>
            But, what do we mean by &quot;bootstrapped&quot;? In general, we mean registering things, including
            registering service container bindings, retry strategies for your http requests, booting
            your FakeApi. Service providers are the central place to configure your application.
          </Paragraph>

          <Paragraph align='justify'>
            If you open the <CodeHighlight>.athennarc.json</CodeHighlight> file included with Athenna,
            you will see a providers array. These are all the service provider classes that will be
            loaded for your application. By default, a set of Athenna core service providers are listed
            in this array. These providers bootstrap the core Athenna components, such as the http,
            route, controllers and others.
          </Paragraph>

          <Paragraph align='justify'>
            In this overview, you will learn how to write your own service providers and register them
            with your Athenna application.
          </Paragraph>

          <Admonition type='tip'>
            <Paragraph align='justify' size='sm'>
              If you would like to learn more about how Athenna works internally, check out
              the <Link size='sm' href='/docs/architecture-concepts/application-lifecycle'>application lifecycle documentation section.</Link>
            </Paragraph>
          </Admonition>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>Writing service providers</Topic>

          <Paragraph align='justify'>
            All service providers extend the <CodeHighlight>ServiceProvider</CodeHighlight> class. Most
            service providers contain a <CodeHighlight>register</CodeHighlight> and a <CodeHighlight>boot</CodeHighlight> method.
            Within the <CodeHighlight>register</CodeHighlight> method, you should only bind things into the service container.
            We will check lately why this behavior. To create a new provider, use the following command:
          </Paragraph>

          <CodeBox language='typescript' code={
            `./node artisan make:provider AppProvider`
          } />

          <Box mt='md'>
            <Topic size='lg' pb='xs'>The <CodeHighlight>register</CodeHighlight> method</Topic>

            <Paragraph align='justify'>
              As mentioned previously, within the <CodeHighlight>register</CodeHighlight> method, you
              should only bind things into the service container. You should never attempt to register
              any piece of functionality within the <CodeHighlight>register</CodeHighlight> method.
              Otherwise, you may accidentally use a service that is provided by a service provider which
              has not loaded yet.
            </Paragraph>

            <Paragraph align='justify'>
              Let&apos;s take a look at a basic service provider. Within any of your service provider
              methods, you always have access to the <CodeHighlight>this.container</CodeHighlight> property
              which provides access to the service container:
            </Paragraph>

            <CodeBox language='typescript' code={
                `import { ServiceProvider } from '@athenna/ioc'\n` +
                `import { AppHelper } from '#app/Helpers/AppHelper'\n\n` +

                `export default class AppProvider extends ServiceProvider {\n` +
                `   public register() {\n` +
                `     this.container.singleton('App/Helpers/AppHelper', AppHelper)\n` +
                `   }\n` +
                `}`
            } />

            <Paragraph align='justify'>
              This service provider only defines a <CodeHighlight>register</CodeHighlight> method, and
              uses that method to define an implementation of <CodeHighlight>AppHelper</CodeHighlight> in
              the service container. If you&apos;re not yet familiar with Athenna service container, <Link href='/docs/architecture-concepts/service-container'>check out its documentation.</Link>
            </Paragraph>
          </Box>

          <Box mt='md'>
            <Topic size='lg' pb='xs'>The <CodeHighlight>boot</CodeHighlight> method</Topic>

            <Paragraph align='justify'>
              So, what if we need to register a dependency that needs another dependency within our service
              provider? This should be done within the <CodeHighlight>boot</CodeHighlight> method. This method
              is called after all other service providers have been registered, meaning you have access to
              all other services that have been registered by the framework:
            </Paragraph>

            <CodeBox language='typescript' code={
                `import { ServiceProvider } from '@athenna/ioc'\n` +
                `import { AppHelper } from '#app/Helpers/AppHelper'\n\n` +

                `export default class AppProvider extends ServiceProvider {\n` +
                `   public boot() {\n` +
                `     const appService = this.container.safeUse('App/Services/AppService')\n\n` +

                `     this.container.instance('App/Helpers/AppHelper', new AppHelper(appService))\n` +
                `   }\n` +
                `}`
            } />
          </Box>

          <Box mt='md'>
            <Topic size='lg' pb='xs'>The <CodeHighlight>shutdown</CodeHighlight> method</Topic>

            <Paragraph align='justify'>
              The <CodeHighlight>shutdown</CodeHighlight> method will be called when the application is
              going down for some reason. This method is extremely useful for gracefully shutdown the
              application, and it&apos;s used in providers such as <CodeHighlight>HttpServerProvider</CodeHighlight> and <CodeHighlight>DatabaseProvider</CodeHighlight>:
            </Paragraph>

            <CodeBox language='typescript' code={
                `import { ServiceProvider } from '@athenna/ioc'\n\n` +

                `export default class AppProvider extends ServiceProvider {\n` +
                `   public shutdown() {\n` +
                `     const appHelper = this.container.use('App/Helpers/AppHelper')\n\n` +

                `     if (!appHelper) {\n` +
                `       return\n` +
                `     }\n\n` +

                `     await appHelper.close()\n` +
                `   }\n` +
                `}`
            } />
          </Box>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>Registering providers</Topic>

          <Paragraph align='justify'>
            All service providers are registered in the <CodeHighlight>.athennarc.json</CodeHighlight> file. This
            file contains a <CodeHighlight>providers</CodeHighlight> array where you can list the class names of
            your service providers. By default, a set of Athenna core service providers are listed in this array.
            These providers bootstrap the core Athenna components, such as the http, route, services and others.
          </Paragraph>

          <Paragraph align='justify'>
            If you are using the <CodeHighlight>make:provider</CodeHighlight> command to create providers, Athenna
            will automatically register the provider for you in this array, but if you might need to register it
            manually, just add the path to it to the array:
          </Paragraph>

          <CodeBox language='typescript' code={
              `{\n` +
              `  "providers": [\n` +
              `    // Other service providers...\n\n` +

              `    "#providers/AppProvider"\n` +
              `  ]\n` +
              `}`
          } />
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>Choosing applications</Topic>

          <Paragraph align='justify'>
            In some cases you want that your provider only run for determined type of Athenna applications.
            For example, I have a <CodeHighlight>MockedDbProvider</CodeHighlight> that connect with
            some database, if I don&apos;t have an Artisan command that do some work inside this database,
            why I would need to run this <CodeHighlight>MockedDbProvider</CodeHighlight> when running Artisan application
            and commands?
          </Paragraph>

          <Paragraph align='justify'>
            To solve this problem you can use the <CodeHighlight>environment</CodeHighlight> getter to choose
            the applications that could run this provider:
          </Paragraph>

          <CodeBox language='typescript' code={
              `import { ServiceProvider } from '@athenna/ioc'\n\n` +

              `export default class MockedDbProvider extends ServiceProvider {\n` +
              `   public get environment() {\n` +
              `     return ['http', 'repl']\n` +
              `   }\n` +
              `}`
          } />

          <Paragraph align='justify'>
            Now when running Artisan application and commands, <CodeHighlight>MockedDbProvider</CodeHighlight> will
            be ignored.
          </Paragraph>

          <Paragraph align='justify'>
            The following environments are available by default in Athenna at this moment:
          </Paragraph>

          <List variant='unordered' color='white'>
            <li className='drac-text drac-text-yellow'>http</li>
            <li className='drac-text drac-text-yellow'>repl</li>
            <li className='drac-text drac-text-yellow'>console</li>
          </List>

          <Paragraph align='justify'>
            You could also create your own environments. In your <CodeHighlight>bootstrap/main.ts</CodeHighlight> file
            you can add an <CodeHighlight>environments</CodeHighlight> option when calling <CodeHighlight>Ignite.load</CodeHighlight> method:
          </Paragraph>

          <CodeBox language='typescript' code={
              `import { Ignite } from '@athenna/core'\n\n` +

              `const ignite = await new Ignite().load(import.meta.url, {\n` +
              `  environments: ['myEnv']\n` +
              `})\n\n` +

              `await ignite.httpServer()`
          } />

          <Paragraph align='justify'>
            All of your environments will be merged with Athenna default ones when running your application. This
            means that in the example above, when running your http server, the providers bootstrapped will be only
            the ones that got the environments getter returning <CodeHighlight>[&apos;*&apos;]</CodeHighlight> and <CodeHighlight>[&apos;myEnv&apos;, &apos;http&apos;]</CodeHighlight>.
          </Paragraph>
        </Box>
      </Box>
    )
  }
}

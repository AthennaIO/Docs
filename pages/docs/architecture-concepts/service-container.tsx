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
        title: 'Service Container',
        description: 
          'Understand the purpose and how to use the Athenna service container.'
      }
    }
  }
}

export default class ServiceContainer extends Component {
  public static Layout = Docs

  public topics = [
    { title: 'Introduction' },
    { title: 'Simple resolution' },
    { title: 'When to use the container' },
    { title: 'Binding' },
    { title: 'Resolving' }
  ]

  public render() {
    return (
      <Box>
        <Topics topics={this.topics}/>

        <Box mt='lg'>
          <Topic size='xl' pb='xs'>Introduction</Topic>

          <Paragraph align='justify'>
            The Athenna service container is a powerful tool for managing class dependencies and performing dependency 
            injection. Dependency injection is a fancy phrase that essentially means this: class dependencies are 
            &quot;injected&quot; into the class via the constructor or, in some cases, &quot;setter&quot; methods.
          </Paragraph>

          <Paragraph align='justify'>
            Let&apos;s look at a simple example:
          </Paragraph>

          <CodeBox language='typescript' code={
            `import { Context } from '@athenna/http'\n` +
            `import { WelcomeService } from '#app/Services/WelcomeService'\n\n` +

            `export class WelcomeController {\n` +
            `  private welcomeService: WelcomeService\n\n` +

            `  public constructor(welcomeService) {\n` +
            `    this.welcomeService = welcomeService\n` +
            `  }\n\n` +

            `  public async show({ response }: Context) {\n` +
            `    const data = await this.welcomeService.getWelcomeData()\n\n` +

            `    return response.status(200).send(data)\n` +
            `  }\n` +
            `}`
          } />

          <Paragraph align='justify'>
            In this example, the <CodeHighlight>WelcomeController</CodeHighlight> needs to 
            retrieve the welcome payload from a data source. So, we will inject a service 
            that is able to retrieve the payload. In this context, 
            our <CodeHighlight>WelcomeService</CodeHighlight>. Since 
            the <CodeHighlight>WelcomeService</CodeHighlight> is injected, we are able to easily 
            swap it out with another implementation. We are also able to easily &apos;mock&apos;, 
            or create a dummy implementation of the <CodeHighlight>WelcomeService</CodeHighlight> when 
            testing our application.
          </Paragraph>

          <Paragraph align='justify'>
            A deep understanding of the Athenna service container is essential to building a 
            powerful, large application, as well as for contributing to the Athenna core itself.
          </Paragraph>

          <Box mt='md'>
            <Topic size='lg' pb='xs'>Simple resolution</Topic>

            <Paragraph align='justify'>
              If you use the <CodeHighlight>@Service</CodeHighlight> annotation, you can instruct the container 
              how he should resolve that class, or use the defaults resolution configurations of the annotation. 
              For example, you may place the following code in your <CodeHighlight>routes/http.ts</CodeHighlight> file:
            </Paragraph>

            <CodeBox language='typescript' code={
              `import { Route } from '@athenna/http'\n` + 
              `import { Service } from '@athenna/core'\n\n` + 

              `@Service()\n` + 
              `export class AppService {\n` + 
              `  public ok() {\n` + 
              `    return { message: 'ok' }\n` + 
              `  }\n` +
              `}\n\n` + 

              `Route.get('/', ({ response }) => {\n` +
              `  const appService = ioc.use<AppService>('appService')\n` +
              `  const body = appService.ok()\n\n` +

              `  return response.status(200).send(body)\n` +
              `})`
            } />

            <Paragraph align='justify'>
              In this example, when bootstrapping your application, Athenna will bind 
              the <CodeHighlight>AppService</CodeHighlight> class inside the container. 
              When hitting your application&apos;s <CodeHighlight>/</CodeHighlight> route it will
              be resolved by using the <CodeHighlight>ioc</CodeHighlight> global variable. 
              This is game changing. It means you can develop your application 
              and take advantage of dependency injection without worrying about bloated configuration 
              files.
            </Paragraph>

            <Paragraph align='justify'>
              Thankfully, many of the classes you will be writing when building an Athenna application 
              automatically receive their dependencies via the container, 
              including <Link href='/docs/the-basics/http/controllers'>controllers</Link> and <Link href='/docs/the-basics/http/middlewares'>middlewares</Link>. 
              Once you taste the power of automatic and zero configuration dependency injection it feels impossible 
              to develop without it.
            </Paragraph>

            <Admonition type='important'>
              <Paragraph align='justify' size='sm'>
                The example above is just to show that we can place our services anywhere in our application,
                without depending on configuration files or any other kind of setup. We recommend you placing
                your services in a specifics directory to save only your services classes and not inside your route file.
                A good place to put your services is <CodeHighlight>app/Services</CodeHighlight> directory, 
                since <CodeHighlight>make:service</CodeHighlight> command will save your services there. But 
                off course you can do whatever you want with Athenna 😎.
              </Paragraph>
            </Admonition>
          </Box>

          <Box mt='md'>
            <Topic size='lg' pb='xs'>When to use the container</Topic>
            
            <Paragraph align='justify'>
              Thanks to this simple configuration resolution, you will often just import your dependency on your routes, controllers,
              and elsewhere without ever manually interacting with the container. For example, you might just import 
              your <CodeHighlight>AppService</CodeHighlight> in your controller so that you can easily access the business logic wrote
              in the service class. Even though we never have to interact wit the container to write this code, it is managing the injection
              of there dependencies behind the scenes.
            </Paragraph>

            <CodeBox language='typescript' code={
              `import { Context } from '@athenna/http'\n` +
              `import { AppService } from '#app/Services/AppService'\n\n` +

              `export class AppController {\n` +
              `  public constructor(private appService: AppService) {}\n\n` +

              `  public async show({ response }: Context) {\n` +
              `    const data = await this.appService.getDate()\n\n` +

              `    return response.status(200).send(data)\n` +
              `  }\n` +
              '}'
            } />

            <Paragraph align='justify'>
              In many cases, thanks to automatic dependency injection 
              and <Link href='/docs/architecture-concepts/facades'>facades</Link>, you can build Athenna 
              applications without ever manually binding or resolving anything from the container. <b>So, 
              when would you ever manually interact with the container?</b>
            </Paragraph>

            <Paragraph align='justify'>
              If you are writing an Athenna package that you plan to share with other Athenna developers, you 
              may need to bind your package&apos;s services into the container.
            </Paragraph>
          </Box>
        </Box>

        <Box mt='md'>
            <Topic size='xl' pb='xs'>Binding</Topic>
        </Box>

        <Box mt='md'>
            <Topic size='xl' pb='xs'>Resolving</Topic>
        </Box>
      </Box>
    )
  }
}

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
            `import { Context, Controller } from '@athenna/http'\n` +
            `import { WelcomeService } from '#app/Services/WelcomeService'\n\n` +

            `@Controller()\n` +
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
              `import { Context, Controller } from '@athenna/http'\n` +
              `import { AppService } from '#app/Services/AppService'\n\n` +

              `@Controller()\n` +
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

            <Paragraph align='justify'>
              Almost all of your service container bindings will be registered within service providers, so most of
              these examples will demonstrate using the container in that context.
            </Paragraph>

            <Paragraph align='justify'>
              In your application you will always have access to the container via the <CodeHighlight>ioc</CodeHighlight> global
              property. We can register a binding using the <CodeHighlight>bind</CodeHighlight> method, passing the alias name
              that we wish to register along with our dependency:
            </Paragraph>

            <CodeBox language='typescript' code={
                `import { StringNormalizer } from '#app/Helpers/StringNormalizer'\n\n` +

                `ioc.bind('App/Helpers/StringNormalizer', StringNormalizer)`
            } />

            <Box mt='md'>
              <Topic size='lg' pb='xs'>Binding transients</Topic>

              <Paragraph align='justify'>
                The <CodeHighlight>transient</CodeHighlight> method binds a class into the container that will resolve
                different instances of it each time. Meaning that once a transient binding is resolved, a new object
                instance will be returned on subsequent calls into the container:
              </Paragraph>

              <CodeBox language='typescript' code={
                  `import { StringNormalizer } from '#app/Helpers/StringNormalizer'\n\n` +

                  `ioc.transient('App/Helpers/StringNormalizer', StringNormalizer)`
              } />

              <Admonition type='note'>
                <Paragraph align='justify' size='sm'>
                  By default, the <CodeHighlight>bind</CodeHighlight> method will always register your dependencies
                  as <CodeHighlight>transient</CodeHighlight>.
                </Paragraph>
              </Admonition>
            </Box>

            <Box mt='md'>
              <Topic size='lg' pb='xs'>Binding a singleton</Topic>

              <Paragraph align='justify'>
                The <CodeHighlight>singleton</CodeHighlight> method binds a class into the container that should
                only be resolved one time. Once a singleton binding is resolved, the same object instance will be returned on
                subsequent calls into the container:
              </Paragraph>

              <CodeBox language='typescript' code={
                  `import { StringNormalizer } from '#app/Helpers/StringNormalizer'\n\n` +

                  `ioc.singleton('App/Helpers/StringNormalizer', StringNormalizer)`
              } />
            </Box>

            <Box mt='md'>
              <Topic size='lg' pb='xs'>Binding instances</Topic>

              <Paragraph align='justify'>
                You may also bind an existing object instance into the container using the <CodeHighlight>instance</CodeHighlight> method.
                The given instance will always be returned on subsequent calls into the container:
              </Paragraph>

              <CodeBox language='typescript' code={
                  `import { StringNormalizer } from '#app/Helpers/StringNormalizer'\n\n` +

                  `ioc.instance('App/Helpers/StringNormalizer', new StringNormalizer())`
              } />
            </Box>
        </Box>

        <Box mt='md'>
            <Topic size='xl' pb='xs'>Resolving</Topic>

            <Paragraph align='justify'>
              You may use the <CodeHighlight>use</CodeHighlight> or <CodeHighlight>safeUse</CodeHighlight> methods from
              the <CodeHighlight>ioc</CodeHighlight> global property to resolve a class instance from the container. The <CodeHighlight>use</CodeHighlight> method
              accepts the alias of the dependency you wish to resolve:
            </Paragraph>

            <CodeBox language='typescript' code={
                `import { StringNormalizer } from '#app/Helpers/StringNormalizer'\n\n` +

                `const sn = ioc.use<StringNormalizer>('App/Helpers/StringNormalizer')`
            } />

            <Paragraph align='justify'>
              If the dependency alias cannot be found in the container, <CodeHighlight>sn</CodeHighlight> const will be
              set as <CodeHighlight>undefined</CodeHighlight>. To throw errors when the dependency does not exist, use
              the <CodeHighlight>safeUse</CodeHighlight> method.
            </Paragraph>

          <Box mt='md'>
            <Topic size='lg' pb='xs'>Automatic constructor injection</Topic>

            <Paragraph align='justify'>
              Alternatively, and importantly, you can use the constructor of a class that is resolved by the container,
              including <Link href='/docs/the-basics/http/controllers'>controllers</Link>, <Link href='/docs/the-basics/http/services'>services</Link>, <Link href='/docs/the-basics/http/middlewares'>middlewares</Link>, and more.
            </Paragraph>

            <Paragraph align='justify'>
              For example, you may add your provider name in camelCase in the controller&apos;s constructor. The service will automatically
              be resolved and injected into the class:
            </Paragraph>

            <CodeBox language='typescript' code={
                `import { Context, Controller } from '@athenna/http'\n` +
                `import { AppService } from '#app/Services/AppService'\n\n` +

                `@Controller()\n` +
                `export class AppController {\n` +
                `  public constructor(private appService: AppService) {}\n\n` +

                `  public async show({ response }: Context) {\n` +
                `    const data = await this.appService.getData()\n\n` +

                `    return response.status(200).send(data)\n` +
                `  }\n` +
                `}`
            } />
          </Box>

          <Box mt='md'>
            <Topic size='lg' pb='xs'>Using <CodeHighlight>@Inject</CodeHighlight> annotation</Topic>

            <Paragraph align='justify'>
              You can also use the <CodeHighlight>@Inject</CodeHighlight> annotation instead of the constructor. The annotation
              follows the same logic of the constructor, you need to use the camelCase name of your dependency as the property name
              to be resolved properly:
            </Paragraph>

            <CodeBox language='typescript' code={
                `import { Inject } from '@athenna/ioc'\n` +
                `import { Context, Controller } from '@athenna/http'\n` +
                `import { AppService } from '#app/Services/AppService'\n\n` +

                `@Controller()\n` +
                `export class AppController {\n` +
                `  @Inject()\n` +
                `  private appService: AppService\n\n` +

                `  public async show({ response }: Context) {\n` +
                `    const data = await this.appService.getData()\n\n` +

                `    return response.status(200).send(data)\n` +
                `  }\n` +
                `}`
            } />

            <Paragraph align='justify'>
              When using the <CodeHighlight>@Inject</CodeHighlight> annotation you could also passes as argument a
              specific alias to be resolved in the container:
            </Paragraph>

            <CodeBox language='typescript' code={
                `import { Inject } from '@athenna/ioc'\n` +
                `import { Context, Controller } from '@athenna/http'\n` +
                `import { AppService } from '#app/Services/AppService'\n\n` +

                `@Controller()\n` +
                `export class AppController {\n` +
                `  @Inject('App/Services/AppService')\n` +
                `  private appService: AppService\n\n` +

                `  public async show({ response }: Context) {\n` +
                `    const data = await this.appService.getData()\n\n` +

                `    return response.status(200).send(data)\n` +
                `  }\n` +
                `}`
            } />
          </Box>
        </Box>
      </Box>
    )
  }
}

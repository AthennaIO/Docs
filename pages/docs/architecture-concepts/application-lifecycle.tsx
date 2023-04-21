import Docs from '#layouts/Docs'
import Link from '#components/Link'
import Topic from '#components/Topic'
import Topics from '#components/Topics'
import CodeBox from '#components/CodeBox'
import Admonition from '#components/Admonition'
import CodeHighlight from '#components/CodeHighlight'

import { Component } from 'react'
import { Box, List, OrderedList, Paragraph } from 'dracula-ui'

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Application Lifecycle',
        description: 
          'Understand each one of the Athenna applications lifecycle.'
      }
    }
  }
}

export default class ApplicationLifecycle extends Component {
  public static Layout = Docs

  public topics = [
    { title: 'Introduction' },
    { title: 'Athenna foundation lifecycle' },
    { title: 'REST API lifecycle' },
    { title: 'Cli and Commands lifecycle' },
    { title: 'Focus on service providers' }
  ]

  public render() {
    return (
      <Box>
        <Topics topics={this.topics}/>

        <Box mt='lg'>
          <Topic size='xl' pb='xs'>Introduction</Topic>

          <Paragraph align='justify'>
            When using any tool in the &quot;real world&quot;, you feel more confident 
            if you understand how that tool works. Application development is no different. 
            When you understand how your development tools function, you feel more comfortable 
            and confident using them.
          </Paragraph>

          <Paragraph align='justify'>
            The goal of this document is to give you a good, high-level overview of how the 
            Athenna framework works. By getting to know the overall framework better, everything 
            feels less &quot;magical&quot; and you will be more confident building your applications. 
            If you don&apos;t understand all the terms right away, don&apos;t lose heart! Just try 
            to get a basic grasp of what is going on, and your knowledge will grow as you explore 
            other sections of the documentation.
          </Paragraph>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>Athenna foundation lifecycle</Topic>

          <Paragraph align='justify'>
            The Athenna foundation is everything that is not coupled to the type of application you are using.
            Meaning that no matter what is the type of application you are using to build your solution, the
            explanation bellow is valid for all of them.
          </Paragraph>

          <Paragraph align='justify'>
            The entry point of an Athenna application is the <CodeHighlight>bootstrap/main.ts</CodeHighlight> file
            in Laravel project structure and <CodeHighlight>bin/main.ts</CodeHighlight> in slim project structure. 
            The first action taken by Athenna itself is to create an instance of the application and then boot it.
          </Paragraph>

          <Box mt='md'>
            <Topic size='lg' pb='xs'>Loading the foundation</Topic>

            <Box mt='md'>
              <Topic size='md' pb='xs'>RC file</Topic>

              <Paragraph align='justify'>
                The RC file is the first thing Athenna will do when booting the application. The RC file is responsible
                to configure your entire workspace and certain runtime settings of your application.
              </Paragraph>
            </Box>

            <Box mt='md'>
              <Topic size='md' pb='xs'>Other operations</Topic>

              <Paragraph align='justify'>
                Some other operation will be done when loading the foundation, such as:

                <OrderedList color='purple'>
                  <li className='drac-text drac-text-white'>
                    Verify if 
                    your <Link href='https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines'>engines in package.json</Link> is 
                    supported.
                  </li>
                  <li className='drac-text drac-text-white'>
                    Register the Athenna logger provider. 
                  </li>
                  <li className='drac-text drac-text-white'>
                    Register an uncaught exception handler.
                  </li>
                  <li className='drac-text drac-text-white'>
                    Define your application root path.
                  </li>
                  <li className='drac-text drac-text-white'>
                    Register <CodeHighlight>Ignite</CodeHighlight> class in the service container.
                  </li>
                  <li className='drac-text drac-text-white'>
                    Define application signals for graceful shutdown.
                  </li>
                </OrderedList>
              </Paragraph>
            </Box>

            <Admonition type='note'>
              <Paragraph align='justify' size='sm'>
                The process of loading the Athenna foundation is triggered by 
                the <CodeHighlight>Ignite.load</CodeHighlight> method.
              </Paragraph>
            </Admonition>

            <Box mt='md'>
              <Topic size='lg' pb='xs'>Firing the foundation</Topic>

              <Paragraph align='justify'>
                The Athenna foundation will automatically be fired internally depending on the
                type of application you are using.
              </Paragraph>

              <Box mt='md'>
                <Topic size='md' pb='xs'>Environment variables</Topic>

                <Paragraph align='justify'>
                  The first thing Athenna will do when firing the foundation is to load your environment variables files.
                  You can learn more about what is and how to configure your environment variables in <Link href='/docs/getting-started/configuration#environment-configuration'>the environment configuration documentation section</Link>.
                </Paragraph>
              </Box>

              <Box mt='md'>
                <Topic size='md' pb='xs'>Configuration files</Topic>

                <Paragraph align='justify'>
                  Afterwards Athenna will load all the configuration files found inside of the path returned by 
                  the <CodeHighlight>Path.config</CodeHighlight> method. You can learn more about what is and how to configure your 
                  configuration files in <Link href='/docs/getting-started/configuration#configuration-files'>the configuration files documentation section</Link>.
                </Paragraph>
              </Box>

              <Box mt='md'>
                <Topic size='md' pb='xs'>Service providers</Topic>

                <Paragraph align='justify'>
                  One of the most important kernel bootstrapping actions is loading the service providers for your application. 
                  All the service providers for the application are configured in 
                  the <CodeHighlight>.athennarc.json</CodeHighlight> in the providers array.
                </Paragraph>

                <Paragraph align='justify'>
                  Athenna will iterate through this list of providers and instantiate each of them. 
                  After instantiating the providers, the <CodeHighlight>register</CodeHighlight> method 
                  will be called on all the providers. Then, once all the providers have been registered, 
                  the <CodeHighlight>boot</CodeHighlight> method will be called on each provider. 
                  This is so service providers may depend on every container binding being registered and 
                  available by the time their boot method is executed.
                </Paragraph>

                <Paragraph align='justify'>
                  Service providers are responsible for bootstrapping all the framework&quot;s various components, 
                  such as the database, http server, validation, services and routing components. Essentially every 
                  major feature offered by Athenna is bootstrapped and configured by a service provider. Since they 
                  bootstrap and configure so many features offered by the framework, service providers are the most 
                  important aspect of the entire Athenna bootstrap process.
                </Paragraph>
              </Box>

              <Box mt='md'>
                <Topic size='md' pb='xs'>Preloads</Topic>

                <Paragraph align='justify'>
                  Preloads files are loaded at the time of booting the application. The files are loaded 
                  right after booting the service providers. A preload file could be useful to execute some operation
                  before bootstrapping the application. All the preloads for the application are configured in 
                  the <CodeHighlight>.athennarc.json</CodeHighlight> in the preloads array.
                </Paragraph>
              </Box>

              <Admonition type='note'>
                <Paragraph align='justify' size='sm'>
                  The process of firing the Athenna foundation is triggered by 
                  the <CodeHighlight>Ignite.fire</CodeHighlight> method. But if you
                  check your <CodeHighlight>main.ts</CodeHighlight> entrypoint file you will
                  see that this method is not called directly. The reason for this is that this
                  method is called internally depending on the type of application you are using.
                  Let&apos;s cover some examples bellow:
                </Paragraph>

                <List variant='unordered' color='purple'>
                  <li className='drac-text drac-text-justify drac-text-sm drac-text-white'>
                    The <CodeHighlight>REST API</CodeHighlight> application needs to fire the foundation first because it depends on service providers to
                    register your controllers, services, middlewares, routes, etc.
                  </li>
                  <li className='drac-text drac-text-justify drac-text-sm drac-text-white'>
                    The <CodeHighlight>cli</CodeHighlight> application and Artisan commands does not fire the foundation because commands does not
                    depends on registering providers, loading environment variables and configuration files for example. But, if your command
                    got the <CodeHighlight>loadApp</CodeHighlight> equals true in <CodeHighlight>.athennarc.json</CodeHighlight>, the foundation will be fired
                    before executing your command. 
                  </li>
                </List>
              </Admonition>
            </Box>
          </Box>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>REST API lifecycle</Topic>

          <Box mt='md'>
            <Topic size='lg' pb='xs'>Kernel</Topic>

            <Paragraph align='justify'>
              The Kernel class is responsible by defining some bootstraps that will be run before reading your <CodeHighlight>routes/http.ts</CodeHighlight> file. 
              These bootstraps configure error handling for requests, tracing and logging, detect the application environment, and perform other 
              tasks that need to be done before the request is actually handled. Typically, these classes handle internal Athenna configuration 
              that you do not need to worry about.
            </Paragraph>

            <Paragraph align='justify'>
              The Kernel is also responsible by registering your middlewares and controllers defined in your <CodeHighlight>.athennarc.json</CodeHighlight> file.
              By default, Athenna will always use the default implementation <CodeHighlight>HttpKernel</CodeHighlight> class imported from <CodeHighlight>@athenna/http</CodeHighlight> package.
              If you prefer, you can create your custom Kernel implementation, extending the default <CodeHighlight>HttpKernel</CodeHighlight> class and registering it
              in your <CodeHighlight>Ignite.httpServer</CodeHighlight> method call:
            </Paragraph>

            <CodeBox language='typescript' code={
              `import { HttpKernel } from '@athenna/http'\n\n` +
              
              `export class CustomKernel extends HttpKernel {\n` +
              `}`
            } />

            <Admonition type='note'>
              <Paragraph align='justify' size='sm'>
                You can check all the methods available for you to override in your custom kernel implementation taking
                a look at <CodeHighlight href='https://github.com/AthennaIO/Http/blob/develop/src/Kernels/HttpKernel.ts'>HttpKernel</CodeHighlight> implementation code.
              </Paragraph>
            </Admonition>

            <Paragraph align='justify'>
              Then, you can register your <CodeHighlight>CustomKernel</CodeHighlight> in your <CodeHighlight>bootstrap/main.ts</CodeHighlight> file:
            </Paragraph>

            <CodeBox language='typescript' code={
              `import { Ignite } from '@athenna/core'\n\n` +
              
              `const ignite = await new Ignite().load(import.meta.url)\n\n` +

              `await ignite.httpServer({ kernelPath: '#app/Http/CustomKernel' })'`
            } />
          </Box>

          <Box mt='md'>
            <Topic size='lg' pb='xs'>Routes</Topic>

            <Paragraph align='justify'>
              The <CodeHighlight>routes/http.ts</CodeHighlight> file is the entrypoint for all your http requests. This file is responsible
              to create a contract between your client and your application. Is in here that we define all ours routes and the handlers/controllers
              who will handle the client request.
            </Paragraph>

            <Paragraph align='justify'>
              One of the most important service providers in your application is the <CodeHighlight>HttpRouteProvider</CodeHighlight>. This service provider
              adds in the container the <CodeHighlight>Route</CodeHighlight> class instance used inside <CodeHighlight>routes/http.ts</CodeHighlight> file.
            </Paragraph>

            <Paragraph align='justify'>
              When the client request arrives, the server first execute all your global middlewares, then it will execute all your route middlewares.
              Once it finish, it goes for your handler/controller. See the example:
            </Paragraph>

            <Box mt='md'>
              <img
                style={{ maxWidth: '100%' }}
                src='/static/images/start-request.png'
                alt='Start REST API request'
              />
            </Box>

            <Box mt='md'>
              <Topic size='lg' pb='xs'>Finish up</Topic>

              <Paragraph align='justify'>
                Once the controller/handler function returns a response, the response will travel back outward through 
                each global interceptor, and then route&apos;s interceptor, giving the application a chance to modify 
                or examine the outgoing response. See the example:
              </Paragraph>

              <Box mt='md'>
                <img
                  style={{ maxWidth: '100%' }}
                  src='/static/images/finish-up-request.png'
                  alt='Finish up REST API request'
                />
              </Box>

              <Paragraph align='justify'>
                As you can see in the example the response content is sent to the client. The request finish for the 
                client but not for the server. Now it&apos;s time to execute the global and route terminators. The 
                terminators are executed when a response has been sent, so you will not be able to send more data to 
                the client. It can however be useful for sending data to external services, for example, create metrics 
                of the entire request. See the example:
              </Paragraph>

              <Box mt='md'>
                <img
                  style={{ maxWidth: '100%' }}
                  src='/static/images/terminate-request.png'
                  alt='Terminate REST API request'
                />
              </Box>

              <Paragraph align='justify'>
                Finally, once all terminators are executed the request finish in the server. We&apos;ve finished our 
                journey through the entire REST API lifecycle 🥳. 
              </Paragraph>
            </Box>  
          </Box>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>Cli and Commands lifecycle</Topic>

          <Box mt='md'>
            <Topic size='lg' pb='xs'>Kernel</Topic>

            <Paragraph align='justify'>
              The Kernel class is responsible by defining some bootstraps that will be run before registering your commands.
              These bootstraps configure error handling for commands, detect the application environment, and perform other 
              tasks that need to be done before the command is actually handled. Typically, these classes handle internal Athenna configuration 
              that you do not need to worry about.
            </Paragraph>

            <Paragraph align='justify'>
              The Kernel is also responsible by registering your commands defined in your <CodeHighlight>.athennarc.json</CodeHighlight> file.
              By default, Athenna will always use the default implementation <CodeHighlight>ConsoleKernel</CodeHighlight> class imported from <CodeHighlight>@athenna/http</CodeHighlight> package.
              If you prefer, you can create your custom Kernel implementation, extending the default <CodeHighlight>ConsoleKernel</CodeHighlight> class and registering it
              in your <CodeHighlight>Ignite.artisan</CodeHighlight> method call:
            </Paragraph>

            <CodeBox language='typescript' code={
              `import { ConsoleKernel } from '@athenna/http'\n\n` +
              
              `export class CustomKernel extends ConsoleKernel {\n` +
              `}`
            } />

            <Admonition type='note'>
              <Paragraph align='justify' size='sm'>
                You can check all the methods available for you to override in your custom kernel implementation taking
                a look at <CodeHighlight href='https://github.com/AthennaIO/Artisan/blob/develop/src/Kernels/ConsoleKernel.ts'>ConsoleKernel</CodeHighlight> implementation code.
              </Paragraph>
            </Admonition>

            <Paragraph align='justify'>
              Then, you can register your <CodeHighlight>CustomKernel</CodeHighlight> in your <CodeHighlight>bootstrap/main.ts</CodeHighlight> or <CodeHighlight>bootstrap/artisan.ts</CodeHighlight> file:
            </Paragraph>

            <CodeBox language='typescript' code={
              `import { Ignite } from '@athenna/core'\n\n` +
              
              `const ignite = await new Ignite().load(import.meta.url, {\n` +
              `  bootLogs: false\n` + 
              `})\n\n` +

              `await ignite.artisan({ kernelPath: '#app/Http/CustomKernel' })'`
            } />
          </Box>

          <Box mt='md'>
            <Topic size='lg' pb='xs'>Execution</Topic>

            <Paragraph align='justify'>
              The <CodeHighlight>routes/console.ts</CodeHighlight> and 
              the <CodeHighlight>commands</CodeHighlight> property 
              of <CodeHighlight>.athennarc.json</CodeHighlight> file is where that we define 
              all ours commands and the handlers who will handle the terminal arguments.
            </Paragraph>

            <Paragraph align='justify'>
              When the terminal arguments arrives, the application will be bootstrapped based in the command that you
              are asking to execute. Let&apos;s suppose we have executed the <CodeHighlight>hello</CodeHighlight> command 
              defined in our <CodeHighlight>.athennarc.json</CodeHighlight> file:
            </Paragraph>

            <CodeBox language='json' code={
                '{\n' +
                '  "commands": {\n' +
                '    "hello": {\n' +
                '      "path": "#app/Console/Commands/HelloCommand",\n' +
                '      "loadApp": false,\n' +
                '      "stayAlive": false\n' +
                '      "loadAllCommands": false\n' +
                '      "environments": ["console"]\n' +
                '    }\n' +
                '  }\n' +
                '}'
            } />

            <Paragraph align='justify'>
              Since <CodeHighlight>loadAllCommands</CodeHighlight> is set to false, the Kernel will load only
              the <CodeHighlight>hello</CodeHighlight> command and execute it:
            </Paragraph>

            <Box mt='md'>
              <img
                style={{ maxWidth: '100%' }}
                src='/static/images/command-execution.png'
                alt='Execute the command'
              />
            </Box>

            <Box mt='md'>
              <Topic size='lg' pb='xs'>Finish up</Topic>

              <Paragraph align='justify'>
                Once the command handler function finish, Athenna will verify if the <CodeHighlight>stayAlive</CodeHighlight> setting 
                is set to true, if so, the application will not be terminated, very useful when running commands like <CodeHighlight>repl</CodeHighlight> and <CodeHighlight>serve</CodeHighlight>.
              </Paragraph>

              <Box mt='md'>
                <img
                  style={{ maxWidth: '100%' }}
                  src='/static/images/finish-up-command.png'
                  alt='Finish up command'
                />
              </Box>

              <Paragraph align='justify'>
                We&apos;ve finished our journey through the entire command lifecycle 🥳. 
              </Paragraph>
            </Box>
          </Box>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>Focus on service providers</Topic>

          <Paragraph align='justify'>
            Service providers are truly the key to bootstrapping an Athenna application. The application instance 
            is created, the service providers are registered, and the request is handed to the bootstrapped 
            application. It&apos;s really that simple!
          </Paragraph>

          <Paragraph align='justify'>
            Having a firm grasp of how an Athenna application is built and bootstrapped via service providers is 
            very valuable. Your application&apos;s default service providers are stored in the <CodeHighlight>providers</CodeHighlight> directory,
            and you can create your own provider with the following command:
          </Paragraph>

          <CodeBox language='bash' code={
            './node artisan make:provider AppProvider'
          }/>

          <Paragraph align='justify'>
            With this new provider you can add your application&apos;s own bootstrapping and service container bindings. For large applications, 
            you may wish to create several service providers, each with more granular bootstrapping for specific services used by your application.
          </Paragraph>
        </Box>
      </Box>
    )
  }
}

import Docs from '#layouts/Docs'
import Link from '#components/Link'
import Topic from '#components/Topic'
import Topics from '#components/Topics'
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
    { title: 'Http request lifecycle' },
    { title: 'Command lifecycle' },
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
                    The <CodeHighlight>http</CodeHighlight> application needs to fire the foundation first because it depends on service providers to
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
          <Topic size='xl' pb='xs'>Http request lifecycle</Topic>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>Command lifecycle</Topic>
        </Box>
      </Box>
    )
  }
}

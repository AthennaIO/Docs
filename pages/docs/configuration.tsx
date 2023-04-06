import Docs from '#layouts/Docs'
import Topic from '#components/Topic'
import Topics from '#components/Topics'
import CodeHighlight from '#components/CodeHighlight'

import { Component } from 'react'
import { Box, Paragraph } from 'dracula-ui'
import Admonition from '#components/Admonition'
import CodeBox from '#components/CodeBox'

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Configuration',
        description: 'Understand the initial configurations of your project.'
      }
    }
  }
}

export default class Configuration extends Component {
  public static Layout = Docs

  public topics = [
    { title: 'Introduction' },
    { title: 'Environment configuration', childs: [{ title: 'Determining the current environment' }] },
    { title: 'Configuration files', childs: [{ title: 'Define my own configuration path' }] },
  ]

  public render() {
    return (
      <Box>
        <Topics showOverview={true} topics={this.topics}/>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>Introduction</Topic>

          <Paragraph align='justify'>
            If you are using the Laravel project template, all the configuration files for the Athenna framework 
            will be stored in the <CodeHighlight>config</CodeHighlight> directory. Each option is documented, 
            so feel free to look through the files and get familiar with the options available to you.
          </Paragraph>

          <Paragraph align='justify'>
            These configuration files allow you to configure things like your database connection information, 
            your filesystem information to handle file uploads, as well as various other core configuration values.
          </Paragraph>

          <Admonition type='note'>
            If you are not using the Laravel project template, don&apos;t worry. We&apos;ll see later on this page 
            of the documentation how you can set up your own <CodeHighlight>config</CodeHighlight> folder.
          </Admonition>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>Environment configuration</Topic>

          <Paragraph align='justify'>
            It is often helpful to have different configuration values based on the environment where the 
            application is running. For example, you may wish to use a different storage driver locally than you 
            do on your production server.
          </Paragraph>

          <Paragraph align='justify'>
            To make this a cinch, Athenna utilizes the <CodeHighlight href='https://www.npmjs.com/package/dotenv'>dotenv</CodeHighlight> Node.js 
            library. In a fresh Athenna installation, the root directory of your application will contain 
            a <CodeHighlight>.env.example</CodeHighlight> file that defines many common environment variables. During 
            the Athenna installation process, this file will automatically be copied to <CodeHighlight>.env</CodeHighlight> and <CodeHighlight>.env.test</CodeHighlight>.
          </Paragraph>

          <Admonition type='note'>
            If you are not using the Laravel project template you can simple create a <CodeHighlight>.env</CodeHighlight> file
            in the root path of your application and Athenna will automatically resolve it for you.
          </Admonition>

          <Paragraph align='justify'>
            Athenna default <CodeHighlight>.env</CodeHighlight> file contains some common configuration values 
            that may differ based on whether your application is running locally or on a production. These values 
            are then retrieved from various Athenna configuration files within the <CodeHighlight>config</CodeHighlight> directory 
            using Athenna <CodeHighlight>Env</CodeHighlight> function.
          </Paragraph>

          <Paragraph align='justify'>
            If you are developing with a team, you may wish to continue including a <CodeHighlight>.env.example</CodeHighlight> file 
            with your application. By putting placeholder values in the example configuration file, other developers 
            on your team can clearly see which environment variables are needed to run your application.
          </Paragraph>

          <Admonition type='tip'>
            Any variable in your <CodeHighlight>.env</CodeHighlight> file can be overridden by external environment 
            variables such as server-level or system-level environment variables. But off course you can turn off t
            his behavior setting the <CodeHighlight>OVERRIDE_ENV=true</CodeHighlight> variable before running your 
            application, if this variable is set to true, all environment variables set in <CodeHighlight>.env</CodeHighlight> will 
            override the externals.
          </Admonition>

          <Admonition type='caution'>
            Your <CodeHighlight>.env</CodeHighlight> file should not be committed to your application source 
            control, since each developer/server using your application could require a different environment 
            configuration. Furthermore, this would be a security risk in the event an intruder gains access to 
            your source control repository, since any sensitive credentials would get exposed.
          </Admonition>
          
          <Box mt='md'>
            <Topic size='xl' pb='xs'>Determining the current environment</Topic>

            <Paragraph align='justify'>
              Before loading your application&apos;s environment variables, Athenna determines if either 
              the <CodeHighlight>NODE_ENV</CodeHighlight> environment variable has been externally provided or 
              if the <CodeHighlight>--env</CodeHighlight> Artisan argument has been specified. If so, Athenna 
              will attempt to load the <CodeHighlight>.env.${'{'}NODE_ENV{'}'}</CodeHighlight> file if it exists. 
              If it does not exist, Athenna will try to find the <CodeHighlight>NODE_ENV</CodeHighlight> value inside 
              of the <CodeHighlight>.env</CodeHighlight> file, if it exists, Athenna will save it&apos;s value and repeat 
              the process above. Finally, if the <CodeHighlight>NODE_ENV</CodeHighlight> is not present in the file, Athenna 
              will load the <CodeHighlight>.env</CodeHighlight> file by default if it exists.
            </Paragraph>

            <Paragraph align='justify'>
              Running providing <CodeHighlight>--env</CodeHighlight> flag in Artisan:
            </Paragraph>

            <CodeBox language='bash' code={`./node artisan serve --env=local`}/>

            <Paragraph align='justify'>
              Running providing <CodeHighlight>NODE_ENV</CodeHighlight> externally:
            </Paragraph>

            <CodeBox language='bash' code={`NODE_ENV=local ./node artisan serve`}/>
          </Box>
        </Box>
        
        <Box mt='md'>
          <Topic size='xl' pb='xs'>Configuration files</Topic>

          <Paragraph align='justify'>
            All the configuration files for the Athenna framework are stored in 
            the <CodeHighlight>config</CodeHighlight> directory if you are using 
            Laravel based project template. Each option is documented, so feel 
            free to look through the files and get familiar with the options available 
            to you.
          </Paragraph>

          <Paragraph align='justify'>
            Athenna needs almost no additional configuration out of the box. You are free 
            to get started developing! However, you may wish to review the <CodeHighlight>config/app.ts</CodeHighlight> file 
            and its documentation. It contains several options such as <CodeHighlight>debug</CodeHighlight>, <CodeHighlight>environment</CodeHighlight> and <CodeHighlight>locale</CodeHighlight> that 
            you may wish to change according to your application.
          </Paragraph>

          <Box mt='md'>
            <Topic size='lg' pb='xs'>Define my own configuration path</Topic>
          </Box>
        </Box>
      </Box>
    )
  }
}

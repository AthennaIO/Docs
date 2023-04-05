import Docs from '#layouts/Docs'
import Topic from '#components/Topic'
import Topics from '#components/Topics'
import CodeHighlight from '#components/CodeHighlight'

import { Component } from 'react'
import { Box, Paragraph } from 'dracula-ui'

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
    { title: 'Environment configuration' },
    { title: 'Configuration files', childs: [{ title: 'Define my own configuration path' }] },
  ]

  public render() {
    return (
      <Box>
        <Topics showOverview={true} topics={this.topics}/>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>Environment configuration</Topic>

          <Paragraph align='justify'>
            Many of Athenna configuration options values depends on whether your 
            application is running, on your local machine or on a production server. 
            Many important configuration values are defined using the <CodeHighlight>.env</CodeHighlight> file 
            that exists at the root of your application.
          </Paragraph>

          <Paragraph align='justify'>
            Your <CodeHighlight>.env</CodeHighlight> file should not be committed 
            to your application&apos;s source control, since each developer/server 
            using your application could require a different environment configuration. 
            Furthermore, this would be a security risk in the event an intruder gains 
            access to your source control repository, since any sensitive credentials 
            would get exposed.
          </Paragraph>
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

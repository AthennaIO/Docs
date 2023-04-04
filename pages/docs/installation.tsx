import Docs from '#layouts/Docs'
import Tabs from '#components/Tabs'
import CodeBox from '#components/CodeBox'
import Blockquote from '#components/Blockquote'
import DocsAnchor from '#components/DocsAnchor'
import DocsOverview from '#components/DocsOverview'
import CodeHighlight from '#components/CodeHighlight'

import { Component } from 'react'
import { Box, Anchor, Paragraph } from 'dracula-ui'

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Installation',
        description: 'How to install and set up your first Athenna project.'
      }
    }
  }
}

const sections = [
  'Your first Athenna project',
  'Installing via package manager',
  'Initial configuration'
]

export default class Installation extends Component {
  public static Layout = Docs

  public httpTabContent() {
    return (
      <Box>
        <Box pb='xs'>
          <CodeHighlight language='bash' code={`athenna new my-project-name`}/>
        </Box>

        <Box>
          <CodeHighlight language='bash' code={`athenna new my-project-name --type http`}/>
        </Box>
      </Box>
    )
  }

  public cliTabContent() {
    return (
      <Box>
        <CodeHighlight language='bash' code={`athenna new my-project-name --type cli`}/>
      </Box>
    )
  }

  public render() {
    return (
      <Box>
        <DocsOverview sections={sections.map(title => ({ title }))}/>
        
        <Box my='lg'>
          <DocsAnchor size='xl' pb='xs'>Your first Athenna project</DocsAnchor>

          <Paragraph> First you need to install <CodeBox href='https://nodejs.org'>Node.js</CodeBox>.
            We recommend using <CodeBox href='https://github.com/nvm-sh/nvm'>nvm</CodeBox> to do that.
          </Paragraph>

          <Blockquote pb='xs'>
            <Anchor target='_blank' href='https://github.com/nvm-sh/nvm#installing-and-updating' color='yellow' hoverColor='pink'>
              Click here to install nvm and get <CodeBox>npm</CodeBox> and <CodeBox>Node.js</CodeBox> running on your machine
            </Anchor>
          </Blockquote>

          <DocsAnchor size='lg' pb='xs'>Installing via package manager</DocsAnchor>

          <Paragraph>
            We want it to be as easy as possible to get started with Athenna. With 
            that in mind, we developed a CLI to assist in the creation of a new project.
          </Paragraph>

          <CodeHighlight language='bash' code={`npm install @athenna/cli -g`}/>

          <Paragraph>
            Then you can run one of these commands to generate your project:
          </Paragraph>

          <Tabs
            sections={[
              { label: 'http', content: this.httpTabContent() },
              { label: 'cli', content: this.cliTabContent() }
            ]}
          />
        </Box>
      </Box>
    )
  }
}

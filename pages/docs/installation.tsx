import Docs from '#layouts/Docs'
import Tabs from '#components/Tabs'
import Topics from '#components/Topics'
import Anchor from '#components/Anchor'
import CodeBox from '#components/CodeBox'
import Blockquote from '#components/Blockquote'
import CodeHighlight from '#components/CodeHighlight'

import { Component } from 'react'
import { Box, Paragraph, Anchor as DraculaAnchor } from 'dracula-ui'

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

export default class Installation extends Component {
  public static Layout = Docs

  public topics = [
    { 
      title: 'Your first Athenna project', 
      childs: [{ title: 'Installing via package manager' }] 
    },
    {
      title: 'Initial configuration'
    }
  ]

  public httpTabContent() {
    return (
      <Box>
        <Box pb='xs'>
          <CodeBox language='bash' code={`athenna new my-project-name`}/>
        </Box>

        <Box>
          <CodeBox language='bash' code={`athenna new my-project-name --type http`}/>
        </Box>
      </Box>
    )
  }

  public cliTabContent() {
    return (
      <Box>
        <CodeBox language='bash' code={`athenna new my-project-name --type cli`}/>
      </Box>
    )
  }

  public render() {
    return (
      <Box>
        <Topics showOverview={true} topics={this.topics}/>
        
        <Box mt='md'>
          <Anchor size='xl' pb='xs'>Your first Athenna project</Anchor>

          <Paragraph> 
            First you need to install <CodeHighlight href='https://nodejs.org'>Node.js</CodeHighlight>.
            We recommend using <CodeHighlight href='https://github.com/nvm-sh/nvm'>nvm</CodeHighlight> to do that.
          </Paragraph>

          <Blockquote>
            <DraculaAnchor 
              color='yellow'
              target='_blank'
              hoverColor='pink'
              href='https://github.com/nvm-sh/nvm#installing-and-updating'
             >
              Click here to install nvm and get <CodeHighlight>npm</CodeHighlight> and 
              <CodeHighlight>Node.js</CodeHighlight> running on your machine
            </DraculaAnchor>
          </Blockquote>
        </Box>

        <Box mt='md'>
          <Anchor size='lg' pb='xs'>Installing via package manager</Anchor>

          <Paragraph>
            We want it to be as easy as possible to get started with Athenna. With 
            that in mind, we developed a CLI to assist in the creation of a new project.
          </Paragraph>

          <CodeBox language='bash' code={`npm install @athenna/cli -g`}/>

          <Paragraph mb='none'>
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

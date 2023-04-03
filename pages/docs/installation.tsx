import Docs from '#layouts/Docs'
import CodeBox from '#components/CodeBox'
import DocsAnchor from '#components/DocsAnchor'
import DocsOverview from '#components/DocsOverview'
import CodeHighlight from '#components/CodeHighlight'

import { Component } from 'react'
import { Box, Anchor, Heading, Paragraph } from 'dracula-ui'

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

const sections = ['Your first Athenna project', 'Installing via package manager', 'Initial configuration']

export default class Installation extends Component {
  public static Layout = Docs

  public render() {
    return (
      <Box>
        <DocsOverview sections={sections.map(title => ({ title }))}/>
        <Box my="lg">
          <DocsAnchor size="xl" pb="md">Your first Athenna project</DocsAnchor>
          <Paragraph> First you need to install <CodeBox href='https://nodejs.org'>Node.js</CodeBox>.
            We recommend using <CodeBox href='https://github.com/nvm-sh/nvm'>nvm</CodeBox> to do that.
          </Paragraph>
          <CodeHighlight language="bash" code={`npm install @athenna/cli -g`}/>
        </Box>
      </Box>
    )
  }
}

import Docs from '#layouts/Docs'
import Topic from '#components/Topic'
import Topics from '#components/Topics'
import CodeBox from '#components/CodeBox'
import CodeHighlight from '#components/CodeHighlight'

import { Component } from 'react'
import { Box, Paragraph } from 'dracula-ui'

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Node Script File',
        description: 'The purpose of the node script file in your project root.'
      }
    }
  }
}

export default class NodeScriptFile extends Component {
  public static Layout = Docs

  public topics = [
    { 
      title: 'The node script file',
    },
  ]

  public render() {
    return (
      <Box>
        <Topics showOverview={true} topics={this.topics}/>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>The node script file</Topic>

          <Paragraph align='justify'>
            The <CodeHighlight>node</CodeHighlight> script file in your project root 
            is a very simple script to run Node.js with predefined CLI arguments, 
            without this script, you would need to pass all the necessary arguments 
            to run the application every time in the terminal.
          </Paragraph>

          <Paragraph align='justify'>
            The <CodeHighlight>--loader ts-node/esm</CodeHighlight> flag is required 
            to run your Athenna application in development mode with TypeScript. This
            flag is resposible to set up a Node.js ESM loader that will first compile your
            modules everytime that you ask to import them using the <CodeHighlight>import</CodeHighlight> statement.
          </Paragraph>

          <Paragraph align='justify'>
            The <CodeHighlight>--experimental-import-meta-resolve</CodeHighlight> is 
            required in all situations, development or production. This flag is responsible to
            provide a module-relative resolution function scoped to each module, returning the URL
            string of the resolved module. This function accepts a second argument which is the parent
            module from which to resolve from:
          </Paragraph>

          <CodeBox language='typescript' code={
            `const url = await import.meta.resolve('#app/Services/MyService', import.meta.url)` + '\n' +
            `const { MyService } = await import(url)`
          } />

          <Paragraph align='justify'>
            Athenna uses a lot of this functionality to import the modules that you define in your <CodeHighlight href='/athennarc-file'>.athennarc.json</CodeHighlight> file.
          </Paragraph>
        </Box>
      </Box>
    )
  }
}

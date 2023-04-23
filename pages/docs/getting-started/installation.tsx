import Docs from '#layouts/Docs'
import Link from '#components/Link'
import Topic from '#components/Topic'
import Topics from '#components/Topics'
import CodeBox from '#components/CodeBox'
import Blockquote from '#components/Blockquote'
import CodeHighlight from '#components/CodeHighlight'

import { Component } from 'react'
import { Box, Paragraph, List } from 'dracula-ui'

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
    { title: 'Your first Athenna project' },
    { title: 'Prerequisites' },
    { title: 'Installing via package manager' },
    { title: 'Running your application' },
  ]

  public render() {
    return (
      <Box>
        <Topics topics={this.topics}/>
        
        <Box mt='lg'>
          <Topic size='xl' pb='xs'>Your first Athenna project</Topic>
        </Box>

        <Box mt='md'>
          <Topic size='lg' pb='xs'>Prerequisites</Topic>

          <Paragraph align='justify'> 
            First you need to install <Link href='https://nodejs.org'>Node.js</Link>.
            We recommend using <Link href='https://github.com/nvm-sh/nvm'>nvm</Link> to do that.
          </Paragraph>

          <Blockquote>
            <Link href='https://github.com/nvm-sh/nvm#installing-and-updating'>
              Click here to install nvm and get <CodeHighlight>npm</CodeHighlight> and <CodeHighlight>Node.js</CodeHighlight> running on your machine
            </Link>
          </Blockquote>
        </Box>

        <Box mt='md'>
          <Topic size='lg' pb='xs'>Installing via package manager</Topic>

          <Paragraph align='justify'>
            We want it to be as easy as possible to get started with Athenna. With 
            that in mind, we developed a CLI to assist in the creation of a new project.
          </Paragraph>

          <CodeBox language='bash' code={`npm install @athenna/cli -g`}/>

          <Paragraph align='justify'>
            Then you can run this command to generate your project:
          </Paragraph>

          <CodeBox language='bash' code={`athenna new my-project-name`}/>

          <Paragraph align='justify'>
            The installation process prompts for the following selections:
          </Paragraph>

          <Topic size='md' pb='xs'>Application type</Topic>
          
          <List variant='unordered' color='purple'>
            <li className='drac-text drac-text-white'><CodeHighlight>REST API</CodeHighlight> application is ideal for creating an API server using REST.</li>
            <li className='drac-text drac-text-white'><CodeHighlight>CLI</CodeHighlight> application is ideal for creating global CLI&apos;s to publish in some registry like npm.</li>
          </List>

          <Topic size='md' pb='xs'>Laravel project structure</Topic>
          
          <Paragraph align='justify'>
            The installation process will ask if you want to create your project 
            following Laravel project structure. All the Athenna packages implementation
            assumes that you are using this project structure, but you will always be 
            able to use your own project structure and configure the packages to work with 
            it. If you set that you don&apos;t want to use Laravel project structure, Athenna will
            create a <CodeHighlight>slim</CodeHighlight> project version from the application
            type that you have selected.
          </Paragraph>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>Running your application</Topic>

          <Paragraph align='justify'>
            To run your application you can simple use the <CodeHighlight>node</CodeHighlight> script 
            in your project root. Don&apos;t worry about this file for now, 
            we&apos;ll talk about it later.
          </Paragraph>

          <Paragraph align='justify'>
            In your project root, run the following command:
          </Paragraph>

          <CodeBox language='bash' code={`./node --watch artisan serve`} />

          <List variant='unordered' color='purple'>
            <li className='drac-text drac-text-white'>The <CodeHighlight>watch</CodeHighlight> flag is meant to watch the file system for changes and restart your application automatically when doing some change on it.</li>
            <li className='drac-text drac-text-white'>The <CodeHighlight>serve</CodeHighlight> command will lookup for your <CodeHighlight>bootstrap/main.js</CodeHighlight> file to bootstrap your application with predefined configurations.</li>
          </List>
        </Box>
      </Box>
    )
  }
}

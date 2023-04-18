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
        title: 'Node Script File',
        description: 
          'Understand what is the purpose of the node script file.'
      }
    }
  }
}

export default class NodeScriptFile extends Component {
  public static Layout = Docs

  public topics = [
    { title: 'Introduction' },
    { title: 'The --loader flag' },
    { title: 'The --experimental-import-meta-resolve flag' },
    { title: 'Running artisan file as argument' },
    { title: 'The future of node script file' },
  ]

  public render() {
    return (
      <Box>
        <Topics topics={this.topics}/>

        <Box mt='lg'>
          <Topic size='xl' pb='xs'>Introduction</Topic>

          <Paragraph align='justify'>
            The node script file in your project root is a very simple script to run Node.js
            with predefined CLI arguments, without this script, you would need to pass all the
            necessary arguments to run the application every time in the terminal.
          </Paragraph>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>The <CodeHighlight>--loader</CodeHighlight> flag</Topic>

          <Paragraph align='justify'>
            The <CodeHighlight>--loader ts-node/esm</CodeHighlight> flag is required 
            to run your Athenna application in development mode with TypeScript. This
            flag is responsible to set up a Node.js ESM loader that will first compile your
            modules every time that you ask to import them using the <CodeHighlight>import</CodeHighlight> statement.
          </Paragraph>

          <Paragraph align='justify'>
            Let&apos;s suppose that you have the following <CodeHighlight>index.ts</CodeHighlight> file:
          </Paragraph>

          <CodeBox language='typescript' code={
            'class Hello {\n' +
            '  public static world(): string {\n' + 
            `    return 'Hello world!'\n` + 
            '  }\n' +
            '}\n' + 
            '\n' +
            'console.log(Hello.world())'
          } />

          <Paragraph align='justify'>
            To be able to run this file with Node.js you can use the following command:
          </Paragraph>

          <CodeBox language='bash' code={`node --loader ts-node/esm index.ts`} />

          <Paragraph align='justify'>
            Or simple use the node script command that already has this flag set:
          </Paragraph>

          <CodeBox language='bash' code={`./node index.ts`} />

          <Admonition type='tip'>
            <Paragraph size='sm' align='justify'>
              If you wish to use any Node.js CLI flag when running some script you can simple
              add it before your script file name, for example:
            </Paragraph>
            <CodeBox language='bash' code={`./node --watch index.ts`} />
            <Paragraph size='sm' align='justify'>
              Or you could also add it to be called every time inside the node script file together 
              with the <CodeHighlight>--loader</CodeHighlight> and <CodeHighlight>--experimental-import-meta-resolve</CodeHighlight> flags.
            </Paragraph>
          </Admonition>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>The <CodeHighlight>--experimental-import-meta-resolve</CodeHighlight> flag</Topic>

          <Paragraph align='justify'>
            The <CodeHighlight>--experimental-import-meta-resolve</CodeHighlight> is 
            required in all situations, development or production. This flag is responsible to
            provide a module-relative resolution function scoped to each module, returning the URL
            string of the resolved module. This function accepts a second argument which is the parent
            module from which to resolve from:
          </Paragraph>

          <CodeBox language='typescript' code={
            `const specifier = '#app/Services/MyService'\n` +
            `const metaUrl = import.meta.url\n\n` +
            `const url = await import.meta.resolve(specifier, metaUrl)\n\n` +
            'const { MyService } = await import(url)'
          } />

          <Paragraph align='justify'>
            Athenna uses a lot of this functionality to import the modules that you define in 
            your <CodeHighlight href='/athennarc-file'>.athennarc.json</CodeHighlight> file.
            If this flag is not present, an exception will be thrown when bootstrapping your application.
          </Paragraph>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>Running artisan file as argument</Topic>

          <Paragraph align='justify'>
            If you take a look at the content of the node script file you will see that we are 
            using <CodeHighlight href='https://www.geeksforgeeks.org/sed-command-linux-set-2/'>sed</CodeHighlight> command
            to replace the <CodeHighlight>artisan</CodeHighlight> argument with the path 
            to <CodeHighlight>bootstrap/artisan.ts</CodeHighlight> file.
          </Paragraph>

          <Paragraph align='justify'>
            This is a tricky implementation that will allow you to call your artisan commands without the 
            need to add the full path to artisan:
          </Paragraph>

          <CodeBox language='bash' code={`./node artisan make:command MyCommand`} />
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>The future of node script file</Topic>

          <Paragraph align='justify'>
            As you may have noticed, this node script is a hell of a kludge 🤣.
          </Paragraph>

          <Paragraph align='justify'>
            But the good news is that in future Node.js versions, the <CodeHighlight>--experimental-import-meta-resolve</CodeHighlight> flag 
            will not be necessary to use the <CodeHighlight>import.meta.resolve</CodeHighlight> function. Also, in 
            future Node.js versions we might have a better support to TypeScript the same 
            way <CodeHighlight href='https://deno.com/'>Deno</CodeHighlight> and <CodeHighlight href='https://bun.sh/'>Bun</CodeHighlight> does
            since a big part of the community is very committed in making this happen as you can <Link href='https://github.com/nodejs/node/issues/43818'>see in this Github issue.</Link>
          </Paragraph>

          <Paragraph align='justify'>
            So, in the future, you might be able to remove (if you want) the node script file from your project and
            simple use <CodeHighlight>node</CodeHighlight> to run your application. Also, if you have a good idea on 
            how to implement a better solution to this problem, please feel free to <Link href='https://github.com/AthennaIO/Core/issues/new/choose'>open an issue at @athenna/core repository</Link>,
            it will be really cool to discuss a better implementation for this with you 😎.
          </Paragraph>
        </Box>
      </Box>
    )
  }
}

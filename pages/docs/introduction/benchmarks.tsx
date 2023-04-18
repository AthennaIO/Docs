import Docs from '#layouts/Docs'
import Link from '#components/Link'
import Topic from '#components/Topic'
import Topics from '#components/Topics'
import CodeBox from '#components/CodeBox'

import { Component } from 'react'
import { Box, Table, Paragraph } from 'dracula-ui'

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Benchmarks',
        description: 
          'See how Athenna performs in comparison to other frameworks.'
      }
    }
  }
}

export default class Benchmarks extends Component {
  public static Layout = Docs

  public topics = [
    { title: 'Code' },
    { title: 'Environment' },
    { title: 'Results' },
  ]

  public render() {
    return (
      <Box>
        <Topics topics={this.topics}/>

        <Box mt='lg'>
            <Topic size='xl' pb='xs'>Code</Topic>

            <Paragraph align='justify'>
                All the code used in this benchmark is available in the <Link href='https://github.com/AthennaIO/Benchmarks'>Benchmarks</Link> repository.
            </Paragraph>
        </Box>

        <Box mt='md'>
            <Topic size='xl' pb='xs'>Environment</Topic>

            <Paragraph align='justify'>
                The environment used to run the benchmarks:
            </Paragraph>

            <CodeBox language='bash' code={
              `npx envinfo --system --binaries\n\n` +
              `  System:\n` +
              `    OS: macOS 13.3.1\n` +
              `    CPU: (8) arm64 Apple M1 Pro\n` +
              `    Memory: 107.38 MB / 16.00 GB\n` +
              `    Shell: 5.9 - /opt/homebrew/bin/zsh\n` +
              `  Binaries:` +
              `    Node: 18.14.2 - ~/.nvm/versions/node/v18.14.2/bin/node\n` +
              `    npm: 9.5.0 - ~/.nvm/versions/node/v18.14.2/bin/npm`
            } />
        </Box>

        <Box mt='md'>
            <Topic size='xl' pb='xs'>Results</Topic>

            <Table mt='md'>
                <thead>
                  <tr>
                    <td align='center' className="drac-text drac-text-white">Framework</td>
                    <td align='center' className="drac-text drac-text-white">Version</td>
                    <td align='center' className="drac-text drac-text-white">Requests/sec</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="drac-text drac-text-white">Fastify</td>
                    <td className="drac-text drac-text-yellow">4.15.0</td>
                    <td className="drac-text drac-text-yellow">86891.2</td>
                  </tr>
                  <tr>
                    <td className="drac-text drac-text-white">Athenna</td>
                    <td className="drac-text drac-text-yellow">3.0.0</td>
                    <td className="drac-text drac-text-yellow">81830.4</td>
                  </tr>
                  <tr>
                    <td className="drac-text drac-text-white">AdonisJS</td>
                    <td className="drac-text drac-text-yellow">5.0.0</td>
                    <td className="drac-text drac-text-yellow">65539.2</td>
                  </tr>
                  <tr>
                    <td className="drac-text drac-text-white">Express</td>
                    <td className="drac-text drac-text-yellow">4.18.2</td>
                    <td className="drac-text drac-text-yellow">21491.6</td>
                  </tr>
                  <tr>
                    <td className="drac-text drac-text-white">NestJS</td>
                    <td className="drac-text drac-text-yellow">9.0.0</td>
                    <td className="drac-text drac-text-yellow">19875.2</td>
                  </tr>
                </tbody>
              </Table>
        </Box>
      </Box>
    )
  }
}

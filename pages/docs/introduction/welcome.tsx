import Docs from '#layouts/Docs'
import Link from '#components/Link'

import { Component } from 'react'
import { Box, Heading, List, Paragraph } from 'dracula-ui'

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Welcome',
        description: 
          'The plug & play Node.js framework'
      }
    }
  }
}

export default class Welcome extends Component {
  public static Layout = Docs

  public render() {
    return (
      <Box>
        <Box mt='lg'>
          <img
            style={{
              maxWidth: '100%',
              backgroundColor: '#282a36',
              borderRadius: 'var(--rounded-md)'
            }}
            src='/static/og.jpg'
            alt='Athenna Framework'
          />
        </Box>

        <Box mt='lg'>
          <Heading as='h2' size='xl'>Introduction</Heading>

          <Paragraph align='justify'>
            Athenna is the plug & play Node.js framework that focuses on giving a very reliable
            foundation for the developer to build many types of different applications, perfect
            for working with micro-services architecture. All of this foundation was created based
            on Laravel, so expect an enjoyable, beautiful, peaceful and productive experience.
          </Paragraph>
        </Box>

        <Box mt='lg'>
          <Heading as='h2' size='xl'>Useful Links</Heading>
          <List variant='unordered' color='white' p='none' mb='sm'>
            <li><Link href='https://github.com/AthennaIO'>Github</Link></li>
            <li><Link href='https://discord.gg/vaZgRUkMsm'>Discord</Link></li>
            <li><Link href='https://github.com/AthennaIO/Core/blob/main/LICENSE'>License</Link></li>
          </List>

          <List variant='unordered' color='white' p='none'>
            <li><Link href='mailto:lenon@athenna.io'>Email</Link></li>
            <li><Link href='https://github.com/AthennaIO/Core/issues'>Issues</Link></li>
            <li><Link href='https://github.com/AthennaIO/Core/discussions'>Discussions</Link></li>
          </List>
        </Box>
      </Box>
    )
  }
}

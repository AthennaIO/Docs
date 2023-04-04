import Docs from '#layouts/Docs'
import styles from '#pages/docs/welcome.module.css'

import { Component } from 'react'
import { Anchor, Box, Heading, List } from 'dracula-ui'

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Welcome',
        description: 
          'Athenna is the plug & play Node.js framework that focuses on ' +
          'giving a very reliable foundation for the developer to build ' +
          'many types of different applications, perfect for working with' +
          ' micro-services architecture. All of this foundation was created' + 
          ' based on Laravel, so expect an enjoyable, beautiful, ' +
          'peaceful and productive experience.'
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
            className={styles.banner}
            src='/static/og.jpg'
            alt='Athenna Framework'
          />
        </Box>

        <Box mt='lg'>
          <Heading as='h2' size='xl'>Useful Links</Heading>
          <List variant='unordered' color='white' p='none' mb='sm'>
            <li><Anchor href='https://github.com/AthennaIO'>Github</Anchor></li>
            <li><Anchor href='https://discord.gg/vaZgRUkMsm'>Discord</Anchor></li>
            <li><Anchor href='https://github.com/AthennaIO/Core/blob/main/LICENSE'>License</Anchor></li>
          </List>

          <List variant='unordered' color='white' p='none'>
            <li><Anchor href='mailto:lenon@athenna.io'>Email</Anchor></li>
            <li><Anchor href='https://github.com/AthennaIO/Core/issues'>Issues</Anchor></li>
            <li><Anchor href='https://github.com/AthennaIO/Core/discussions'>Discussions</Anchor></li>
          </List>
        </Box>
      </Box>
    )
  }
}

import Docs from '#layouts/Docs'
import Topic from '#components/Topic'
import Topics from '#components/Topics'

import { Box } from 'dracula-ui'
import { Component } from 'react'

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Facades',
        description: 
          'Understand the purpose and how to use the Athenna facades.'
      }
    }
  }
}

export default class Facades extends Component {
  public static Layout = Docs

  public topics = [
    { title: 'Introduction' },
    { title: 'When to use facades' },
    { title: 'How facades works' },
    { title: 'Facades class reference' },
    { title: 'Writing facades' }
  ]

  public render() {
    return (
      <Box>
        <Topics topics={this.topics}/>

        <Box mt='lg'>
          <Topic size='xl' pb='xs'>Introduction</Topic>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>When to use facades</Topic>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>How facades works</Topic>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>Facades class reference</Topic>
        </Box>

        <Box mt='md'>
          <Topic size='xl' pb='xs'>Writing facades</Topic>
        </Box>
      </Box>
    )
  }
}

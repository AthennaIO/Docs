import Docs from '#layouts/Docs'
import Topic from '#components/Topic'
import Topics from '#components/Topics'

import {Box, Paragraph} from 'dracula-ui'
import { Component } from 'react'
import Link from "#components/Link";

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

            <Paragraph align='justify'>
                Throughout the Athenna documentation, you will see examples of code that
                interacts with Athenna features via &quot;facades&quot;. Facades provide a &quot;static&quot;
                interface to class that are available in the
                application&apos;s <Link href='/docs/architecture-concepts/service-container'>service container</Link>.
                Athenna ships with many facades which provide access to almost all of Athenna features.
            </Paragraph>

            <Paragraph align='justify'>
                Athenna facades serve as &quot;static proxies&quot; to underlying classes in the service container,
                providing the benefit of a terse, expressive syntax while maintaining more testability and
                flexibility than traditional static methods. It&apos;s perfectly fine if you don&apos;t totally
                understand how facades work under the hood - just go with the flow and continue learning
                about Athenna.
            </Paragraph>
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

import Docs from '#layouts/Docs'
import Topic from '#components/Topic'
import Topics from '#components/Topics'
import CodeHighlight from '#components/CodeHighlight'

import { Box } from 'dracula-ui'
import { Component } from 'react'

export async function getStaticProps() {
    return {
        props: {
            query: {
                title: 'AthennaRC File',
                description: 'Understand what is the purpose of the .athennarc.json file.'
            }
        }
    }
}

export default class AthennaRcFile extends Component {
    public static Layout = Docs

    public topics = [
        { title: 'The preloads property' },
        { title: 'The providers property' },
        { title: 'The services property' },
    ]

    public render() {
        return (
            <Box>
                <Topics topics={this.topics}/>

                <Box mt='lg'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>preloads</CodeHighlight> property</Topic>
                </Box>

                <Box mt='lg'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>providers</CodeHighlight> property</Topic>
                </Box>

                <Box mt='lg'>
                    <Topic size='xl' pb='xs'>The <CodeHighlight>services</CodeHighlight> property</Topic>
                </Box>
            </Box>
        )
    }
}

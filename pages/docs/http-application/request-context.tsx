import Docs from '#layouts/Docs'
import Topic from '#components/Topic'
import Topics from '#components/Topics'

import { Component } from 'react'
import { Box } from 'dracula-ui'

export async function getStaticProps() {
    return {
        props: {
            query: {
                title: 'Request Context',
                description: 'Understand the purpose of the request context object.'
            }
        }
    }
}

export default class RequestContext extends Component {
    public static Layout = Docs

    public topics = [
        { title: 'Introduction' },
    ]

    public render() {
        return (
            <Box>
                <Topics topics={this.topics}/>

                <Box mt='lg'>
                    <Topic size='xl' pb='xs'>Introduction</Topic>
                </Box>
            </Box>
        )
    }
}
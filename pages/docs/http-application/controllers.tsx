import Docs from '#layouts/Docs'
import Topic from '#components/Topic'
import Topics from '#components/Topics'

import { Component } from 'react'
import { Box } from 'dracula-ui'

export async function getStaticProps() {
    return {
        props: {
            query: {
                title: 'Controllers',
                description: 'Understand how you can set up controllers in your Http application.'
            }
        }
    }
}

export default class Controllers extends Component {
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

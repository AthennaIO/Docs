import styles from '#components/Topics/index.module.css'

import { Component } from 'react'
import { Anchor, Box, Text } from 'dracula-ui'

export type Topic = { title: string }

export type TopicsProps = {
  topics: Topic[]
}

export default class Topics extends Component<TopicsProps> {
  public getTopicContent(topic: Topic, level: number) {
    let spaces = ''

    for (let i = 0; i < level; i++) spaces += '&ensp;&ensp;'

    return (
      <Box key={topic.title} py='xxs'>
        <Anchor
          size='md'
          href={`#${topic.title.toLowerCase().replace(/ /g, '-')}`}
          hoverColor='pinkPurple'
        >
          <Text dangerouslySetInnerHTML={{ __html: spaces }} /> 
          <Text weight='bold' size='md' color='purple'>#</Text>
          <Text weight='semibold' size='md'> {topic.title}</Text>
        </Anchor>
      </Box>
    )
  }

  public render() {
    return (
      <Box mt='md'>
        <Box as='ul' className={styles.docsOverview}>
          <Text weight='semibold' style={{ textTransform: 'uppercase' }}>
            On this page
          </Text>
          <Box color='pinkPurple' style={{ height: 2 }} my='xs' />

          {this.props.topics.map((section) => {
            return (
                <Box key={section.title} py='xxs'>
                  <Anchor
                      size='sm'
                      color='greySecondary'
                      href={`#${section.title.toLowerCase().replace(/ /g, '-')}`}
                      hoverColor='pinkPurple'
                  >
                    {section.title}
                  </Anchor>
                </Box>
            )
          })}
        </Box>
      </Box>
    )
  }
}

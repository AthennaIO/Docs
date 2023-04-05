import styles from '#components/Topics/index.module.css'

import { Component } from 'react'
import { Anchor, Box, Text } from 'dracula-ui'

export type Topic = { title: string, childs?: Topic[] }

export type TopicsProps = {
  topics: Topic[]
  showOverview?: boolean
  showProperties?: boolean
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
  
  public renderTopics(topics: Topic[], level = 0) {
    return topics.map(topic => {
      const content = this.getTopicContent(topic, level)

      if (topic.childs && topic.childs.length) {
        return (
          <Box key={topic.title}>
            {content}
            {this.renderTopics(topic.childs, level + 1)}
          </Box>
        )
      }

      return content
    })
  }

  public getAllInOneTopics(topics: Topic[]): Topic[] {
    const allTopics = []

    for (let i = 0; i < topics.length; i++) {
      const topic = topics[i]

      allTopics.push({ title: topic.title })

      if (topic.childs && topic.childs.length) {
        allTopics.push(...this.getAllInOneTopics(topic.childs))
      }
    }

    return allTopics
  }

  public renderOverview(topics: Topic[]) {
    if (!this.props.showOverview) {
      return null
    }

    topics = this.getAllInOneTopics(topics)

    return (
      <Box as='ul' className={styles.docsOverview}>
        <Text weight='semibold' style={{ textTransform: 'uppercase' }}>
          On this page
        </Text>
        <Box color='pinkPurple' style={{ height: 2 }} my='xs' />
  
        {topics.map((section) => {
          return (
            <Box key={section.title} py='xxs'>
              <Anchor
                size='sm'
                color='blackSecondary'
                href={`#${section.title.toLowerCase().replace(/ /g, '-')}`}
                hoverColor='pinkPurple'
              >
                {section.title}
              </Anchor>
            </Box>
          )
        })}
  
        {this.props.showProperties && (
          <Box key='properties'>
            <Anchor
              size='sm'
              href='#properties'
              hoverColor='pinkPurple'
              color='blackSecondary'
            >
              Properties
            </Anchor>
          </Box>
        )}
      </Box>
    )
  }

  public render() {
    return (
      <Box mt='md'>
       {this.renderTopics(this.props.topics)}
       {this.renderOverview(this.props.topics)} 
      </Box>
    )
  }
}

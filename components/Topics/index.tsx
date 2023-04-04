import { Component } from 'react'
import { Anchor, Box, Text } from 'dracula-ui'

export type Topic = { title: string, childs?: Topic[] }

export type TopicsProps = {
  topics: Topic[]
}

export default class Topics extends Component<TopicsProps> {
  public getTopicContent(topic: Topic, level: number) {
    let spaces = ''

    for (let i = 0; i < level; i++) spaces += '&ensp;'

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

  public render() {
    return (
      <Box mt='md'>
       {this.renderTopics(this.props.topics)} 
      </Box>
    )
  }
}

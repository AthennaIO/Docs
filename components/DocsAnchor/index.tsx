import styles from '#components/DocsAnchor/index.module.css'

import { Component } from 'react'
import { Text, Anchor, Heading } from 'dracula-ui'

export type DocsAnchorProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'xs'
  pb?: 'sm' | 'md' | 'lg' | 'xs' | 'none' | 'xxs'
  children: string
}

export default class DocsAnchor extends Component<DocsAnchorProps> {
  public render() {
    const id = this.props.children.toLowerCase().replace(/ /g, '-')

    return (
      <Anchor color="purple" href={`#${id}`}>
        <Heading id={id} size={this.props.size} pb={this.props.pb} className={styles.headAnchor}>
          <Text size="lg" color="purple">#</Text> {this.props.children}
        </Heading>
      </Anchor>
    )
  }
}

import { Component } from 'react'
import { Text, Anchor as DraculaAnchor } from 'dracula-ui'

export type AnchorProps = {
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'xs'
  pb?: 'sm' | 'md' | 'lg' | 'xs' | 'none' | 'xxs'
  children: string
}

export default class Anchor extends Component<AnchorProps> {
  public static defaultProps = {
    size: 'xl',
  }

  public render() {
    const id = this.props.children.toLowerCase().replace(/ /g, '-')

    const size = {
      'xs': 'var(--font-sm)',
      'sm': 'var(--font-md)',
      'md': 'var(--font-lg)',
      'lg': 'var(--font-xl)',
      'xl': 'var(--font-2xl)',
      '2xl': 'var(--font-5xl)',
    }

    return (
      <DraculaAnchor hoverColor='pinkPurple' pb={this.props.pb} href={`#${id}`}>
        <Text weight='bold' size='lg' color='purple'># </Text>
        <Text weight='bold' style={{ fontSize: size[this.props.size] }}>{this.props.children}</Text>
      </DraculaAnchor>
    )
  }
}

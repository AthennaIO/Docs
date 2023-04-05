import { Component } from 'react'
import { Text, Anchor, HeadingProps } from 'dracula-ui'

export interface TopicProps extends HeadingProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  children: any
}

export default class Topic extends Component<TopicProps> {
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
      <Anchor id={id} href={`#${id}`} hoverColor='pinkPurple'>
        <Text weight='bold' size='lg' color='purple'># </Text>
        <Text weight='bold' style={{ fontSize: size[this.props.size] }}>{this.props.children}</Text>
      </Anchor>
    )

    // return (
    //   <Anchor id={id} href={`#${id}`} hoverColor='pinkPurple'>
    //     <Heading as='h1' {...this.props}>
    //       <Text size='lg' weight='bold' color='purple'># </Text> {this.props.children}
    //     </Heading>
    //   </Anchor>
    // )
  }
}

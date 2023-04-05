import { Component } from 'react'
import { Anchor, Box, BoxProps } from 'dracula-ui'

export default class CodeHighlight extends Component<BoxProps> {
  public render() {
    if (this.props.href) {
      return (
        <Box {...this.props} as="code" className="drac-text-pink">
          <Anchor hoverColor="pink" color="yellow" target="_blank" href={this.props.href}>{this.props.children}</Anchor>
        </Box>
      )
    }

    return (
      <Box {...this.props} as="code" className="drac-text-pink">{this.props.children}</Box>
    )
  }
}
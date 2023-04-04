import { Component } from 'react'
import { Box, BoxProps } from 'dracula-ui'

export type BlockquoteProps = BoxProps

export default class Blockquote extends Component<BlockquoteProps> {
  public render() {
    return (
      <Box {...this.props}>
        <blockquote >
          <p>{this.props.children}</p>
        </blockquote>
      </Box>
    )
  }
}
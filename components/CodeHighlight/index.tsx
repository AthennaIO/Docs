import Link from '#components/Link'

import { Component } from 'react'
import { Box, BoxProps } from 'dracula-ui'

export default class CodeHighlight extends Component<BoxProps> {
  public render() {
    if (this.props.href) {
      return (
        <Box {...this.props} as="code" className="drac-text-pink">
          <Link href={this.props.href}>{this.props.children}</Link>
        </Box>
      )
    }

    return (
      <Box {...this.props} as="code" className="drac-text-pink">{this.props.children}</Box>
    )
  }
}
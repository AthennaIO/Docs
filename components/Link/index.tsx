import { Component } from 'react'
import { AnchorProps, Anchor } from 'dracula-ui'

export type LinkProps = AnchorProps

export default class Link extends Component<LinkProps> {
    public render() {
        return (
            <Anchor {...this.props} target='_blank' hoverColor='pink' color='yellow'>{this.props.children}</Anchor>
        )
    }
}
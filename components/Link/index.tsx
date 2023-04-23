import { Component } from 'react'
import { AnchorProps, Anchor } from 'dracula-ui'

export interface LinkProps extends AnchorProps {
    noUnderline?: boolean
}

export default class Link extends Component<LinkProps> {
    public render() {
        let { noUnderline, children, ...props } = this.props

        return (
            <Anchor {...props} target='_blank' hoverColor='pink' color='yellow'>
                { noUnderline ? children : <u>{children}</u> }  
            </Anchor>
        )
    }
}

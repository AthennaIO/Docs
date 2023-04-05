import iconsSvgMap from '#components/Admonition/icons.svg'
import styles from '#components/Admonition/index.module.css'
import iconsEmojiMap from '#components/Admonition/icons.emoji'

import { Component } from 'react'
import { Box, Text, Heading, Paragraph } from 'dracula-ui'

export type AdmonitionProps = {
  type: 'warning' | 'important' | 'caution' | 'tip' | 'note' | 'question'
  title?: string
  iconType?: 'emoji' | 'svg'
  children: any
}

export default class Admonition extends Component<AdmonitionProps> {
  public getIcon() {
    if (this.props.iconType === 'svg') {
      return iconsSvgMap[this.props.type]
    }

    return iconsEmojiMap[this.props.type]
  }

  public getCapitalizedType() {
    return this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1)
  }

  public render() {
    return (
      <Box className={`${styles.admonition} ${styles['admonition' + this.getCapitalizedType()]}`}>
        <Box className={styles.admonitionHeading}>
          <Heading as='h5' size='xs'>
             <Box className={styles.admonitionIcon}>{this.getIcon()}</Box>
             {' '}
             {this.props.title || this.props.type}
          </Heading>
          <Box className={styles.admonitionContent}>
            <Paragraph align='justify' size='sm'>{this.props.children}</Paragraph>
          </Box>
        </Box>
      </Box>

      // <div className={`${styles.admonition} ${styles['admonition-' + this.props.type]}`}>
      //   <div className={styles['admonition-heading']}>
      //     <h5>
      //       <div className={styles['admonition-icon']}>
      //         {this.getIcon()}
      //       </div>{' '}
      //       {this.props.title || this.props.type}
      //     </h5>
      //   </div>
      //   <div className='admonition-content'>{this.props.children}</div>
      // </div>
    )
  }
}
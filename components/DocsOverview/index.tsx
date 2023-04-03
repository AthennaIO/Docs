import styles from '#components/DocsOverview/index.module.css'

import { Component } from 'react'
import { Anchor, Box, Text } from 'dracula-ui'

export type DocsOverviewProps = {
  sections: { title: string }[]
  showProperties?: boolean
}

export default class DocsOverview extends Component<DocsOverviewProps> {
  public render() {
    return (
      <Box as="ul" className={styles.docsOverview}>
        <Text weight="semibold" style={{ textTransform: 'uppercase' }}>
          On this page
        </Text>
        <Box color="pinkPurple" style={{ height: 2 }} my="xs" />
  
        {this.props.sections.map((section) => {
          return (
            <Box key={section.title} py="xxs">
              <Anchor
                size="sm"
                color="blackSecondary"
                href={`#${section.title.toLowerCase().replace(/ /g, '-')}`}
                hoverColor="pinkPurple"
              >
                {section.title}
              </Anchor>
            </Box>
          )
        })}
  
        {this.props.showProperties && (
          <Box key="properties">
            <Anchor
              size="sm"
              href="#properties"
              hoverColor="pinkPurple"
              color="blackSecondary"
            >
              Properties
            </Anchor>
          </Box>
        )}
      </Box>
    )
  }
}

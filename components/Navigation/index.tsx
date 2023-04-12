import Link from 'next/link'
import Topbar from '#components/Topbar'
import styles from '#components/Navigation/index.module.css'

import { Component } from 'react'
import { Anchor, Box, List, Text } from 'dracula-ui'

export type NavigationProps = {
  selected: string
}

export default class Navigation extends Component<NavigationProps> {
  public static items = [
    {
      title: 'Introduction',
      pages: [
        'Welcome',
      ]
    },
    {
      title: 'Getting Started',
      pages: [
        'Installation',
        'Node Script File',
        'Configuration',
        'AthennaRC File',
        'Directory Structure'
      ]
    },
  ]

  public state = {
    isVisible: true
  }

  public toggleMenu() {
    this.setState({ isVisible: !this.state.isVisible })
  }

  public renderNavigation() {
    return Navigation.items.map(item => {
      return (
        <Box
          px="md"
          py="sm"
          key={item.title}
          style={{ display: this.state.isVisible ? 'block' : 'none' }}
        >
          <Text
            size="sm"
            className={styles.navSectionTitle}
            weight={item.title.includes('Patterns') ? 'semibold' : 'normal'}
          >
            {item.title}
          </Text>

          <List variant="none">
            {item.pages.map(page => {
              const path = `/docs/${page.toLowerCase().replace(/ /g, '-')}`

              if (item.title.includes('Patterns')) {
                return (
                  <Box as="li" key={page}>
                    <Anchor className={styles.navSectionPatterns}>
                      {page}
                    </Anchor>
                  </Box>
                )
              }

              const isSelected = page === this.props.selected
              const anchorClass = isSelected ? styles.navSectionListActive : styles.navSectionList

              return (
                <Box as="li" key={page}>
                  <Link style={{ textDecoration: 'none' }} href={path} passHref>
                    <Anchor className={anchorClass}>{page}</Anchor>
                  </Link>
                </Box>
              )
            })}
          </List>
        </Box>
      )
    })
  }

  public render() {
    return (
      <nav className={styles.nav}>
        <Topbar toggleMenu={this.toggleMenu.bind(this)} />
        {this.renderNavigation()}
      </nav>
    )
  }
}

import styles from '#components/Search/index.module.css'

import { Box } from 'dracula-ui'
import { Component, MouseEvent } from 'react'

export type SearchProps = {
  showLauncher: (event: MouseEvent) => void
}

export default class Search extends Component<SearchProps> {
  public renderShortcut() {
    if (global.navigator.platform.indexOf('Mac') > -1) {
      return <span className={styles.shortcut}>
        <kbd>⌘</kbd>
        <kbd>K</kbd>
      </span>
    } else if (global.navigator.platform.indexOf('Win') > -1) {
      return <span className={styles.shortcut}>
        <kbd>Ctrl</kbd>
        <kbd>K</kbd>
      </span>
    }

    return <span />
  }

  public render() {
    const label = 'Quick search the docs'

    return <Box className={styles.container} pt="sm">
      <button
        onClick={this.props.showLauncher.bind(this)}
        className={styles.button}
        aria-label={label}
        role="search"
        type="button"
      >
        <i className={styles.searchIcon} />
        {label}
        {this.renderShortcut()}
      </button>
    </Box>
  }
}

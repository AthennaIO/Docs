/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import Fuse from 'fuse.js'
import Router from 'next/router'
import FocusTrap from 'focus-trap-react'
import styles from '#components/Launcher/index.module.css'

import { Box, Text } from 'dracula-ui'
import { HotKeys } from 'react-hotkeys'
import { MouseEvent, ChangeEvent, Component, createRef } from 'react'

export type LauncherProps = {
  launcherVisible: boolean
  hideLauncher: () => void
}

export type LauncherState = {
  query: string,
  selected: number,
  filtered: any[]
}

export default class Launcher extends Component<LauncherProps, LauncherState> {
  public options: any[]
  public optionRefs: any[]
  public fuse: Fuse<any> | any
  public containerRef: any

  public constructor(props: LauncherProps) {
    super(props)

    this.options = [
      {
        icon: 'house-check-fill',
        title: 'Welcome',
        handler: () => Router.push('/docs/introduction/welcome')
      },
      {
        icon: 'lightning-fill',
        title: 'Benchmarks',
        handler: () => Router.push('/docs/introduction/benchmarks')
      },
      {
        icon: 'cloud-arrow-down-fill',
        title: 'Installation',
        handler: () => Router.push('/docs/getting-started/installation')
      },
      {
        icon: 'file-earmark-code-fill',
        title: 'Node Script File',
        handler: () => Router.push('/docs/getting-started/node-script-file')
      },
      {
        icon: 'file-earmark-code-fill',
        title: 'AthennaRC File',
        handler: () => Router.push('/docs/getting-started/athennarc-file')
      },
      {
        icon: 'gear-wide-connected',
        title: 'Configuration',
        handler: () => Router.push('/docs/getting-started/configuration')
      },
      {
        icon: 'folder-symlink-fill',
        title: 'Directory Structure',
        handler: () => Router.push('/docs/getting-started/directory-structure')
      },
      {
        icon: 'arrow-counterclockwise',
        title: 'Application Lifecycle',
        handler: () => Router.push('/docs/architecture-concepts/application-lifecycle')
      },
      {
        icon: 'boxes',
        title: 'Service Container',
        handler: () => Router.push('/docs/architecture-concepts/service-container')
      },
      {
        icon: 'box-seam',
        title: 'Service Providers',
        handler: () => Router.push('/docs/architecture-concepts/service-providers')
      },
      {
        icon: 'square-half',
        title: 'Facades',
        handler: () => Router.push('/docs/architecture-concepts/facades')
      }
    ]

    this.state = {
      query: '',
      selected: 0,
      filtered: this.options
    }

    this.optionRefs = []
  }

  public componentDidMount() {
    this.fuse = new Fuse(this.options, {
      keys: ['title']
    })
  }

  public componentDidUpdate(_prevProps: LauncherProps, prevState: LauncherState) {
    if (prevState.filtered !== this.state.filtered) {
      this.optionRefs = this.optionRefs.filter((x) => x !== null)
    }
  }

  public navigate(option: { handler: () => void }) {
    option.handler()
    this.prepareToHideLauncher()
  }

  public onMouseEnter(index: number, event: MouseEvent) {
    this.setState({ selected: index })
    
    // @ts-ignore
    event.target.focus()
  }

  public onSearch(event: ChangeEvent) {
    // @ts-ignore
    const query = event.target.value.trim()

    this.setState({ query })

    if (query.length === 0) {
      this.setState({ filtered: this.options })
      return
    }

    let filtered = this.fuse.search(query).map((option: any) => {
      return option.item
    })

    this.setState({ filtered, selected: 0 })
  }

  public onClickOutsideModal(event: MouseEvent) {
    if (this.containerRef.current?.contains(event.target)) {
      return
    }

    this.prepareToHideLauncher()
  }

  public onArrowUpPressed() {
    let { selected, filtered } = this.state

    selected = selected > 0 ? selected - 1 : filtered.length - 1
    this.setState({ selected })

    if (this.optionRefs[selected]) {
      this.optionRefs[selected].focus()
    }
  }

  public onArrowDownPressed() {
    let { selected, filtered } = this.state

    selected = selected < filtered.length - 1 ? selected + 1 : 0
    this.setState({ selected })

    if (this.optionRefs[selected]) {
      this.optionRefs[selected].focus()
    }
  }

  public onEnterPressed() {
    this.navigate(this.state.filtered[this.state.selected])
  }

  public prepareToHideLauncher() {
    this.setState({
      query: '',
      selected: 0,
      filtered: this.options
    })

    this.props.hideLauncher()
  }

  public renderOptions() {
    return this.state.filtered.map((option, index) => {
      return (
        // eslint-disable-next-line jsx-a11y/role-supports-aria-props
        <li
          key={index}
          ref={(el) => (this.optionRefs[index] = el)}
          aria-selected={this.state.selected === index}
          tabIndex={this.state.selected === index ? 0 : -1}
          onClick={this.navigate.bind(this, option)}
          onMouseEnter={this.onMouseEnter.bind(this, index)}
          className={styles.option}
        >
          <div className={styles.optionTitle}>
            <Box className={styles.optionIcon}>
              <i className={`bi-${option.icon}`} style={{ fontSize: 18 }} />
            </Box>
            <Text>{option.title}</Text>
          </div>
          <svg
            className={styles.enterIcon}
            strokeWidth="2px"
            viewBox="0 0 20 20"
          >
            <g
              stroke="currentColor"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 3v4c0 2-2 4-4 4H2"></path>
              <path d="M8 17l-6-6 6-6"></path>
            </g>
          </svg>
        </li>
      )
    })
  }

  public renderLauncher() {
    this.containerRef = createRef()

    if (this.props.launcherVisible) {
      return (
        <FocusTrap>
          <div
            className={styles.background}
            onClick={this.onClickOutsideModal.bind(this)}
          >
            <div
              ref={this.containerRef}
              className={styles.container}
              role="combobox"
              aria-expanded="true"
              aria-haspopup="listbox"
              aria-modal="true"
              tabIndex={-1}
            >
              <Box className={styles.search}>
                <Box className={styles.iconSearch}>
                  <i className="bi-search" style={{ fontSize: 18 }} />
                </Box>
                <input
                  className={styles.input}
                  value={this.state.query}
                  onChange={this.onSearch.bind(this)}
                  placeholder="Search docs"
                  aria-autocomplete="list"
                  spellCheck="false"
                  autoComplete="off"
                  autoCorrect="off"
                  type="text"
                  autoFocus
                />
              </Box>
              <ul role="listbox" className={styles.list}>
                {this.renderOptions()}
              </ul>
            </div>
          </div>
        </FocusTrap>
      )
    }
  }

  public render() {
    const keyMap = {
      LAUNCHER_UP: ['up'],
      LAUNCHER_DOWN: ['down'],
      LAUNCHER_ENTER: ['enter']
    }

    const handlers = {
      LAUNCHER_UP: this.onArrowUpPressed.bind(this),
      LAUNCHER_DOWN: this.onArrowDownPressed.bind(this),
      LAUNCHER_ENTER: this.onEnterPressed.bind(this)
    }

    return (
      <HotKeys keyMap={keyMap} handlers={handlers}>
        {this.renderLauncher()}
      </HotKeys>
    )
  }
}

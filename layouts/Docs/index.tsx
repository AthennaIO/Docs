import Head from 'next/head'
import dynamic from 'next/dynamic'
import Launcher from '#components/Launcher'
import styles from '#layouts/Docs/index.module.css'

import { Box, Heading, Paragraph } from 'dracula-ui'
import { GlobalHotKeys, configure } from 'react-hotkeys'
import { Component, MouseEvent, ReactElement } from 'react'

const Search = dynamic(() => import('#components/Search'), { ssr: false })
const Navigation = dynamic(() => import('#components/Navigation'), { ssr: false })

configure({
  ignoreTags: []
})

export type DocsProps = {
  children: ReactElement<{ query: { title: string, description: string }}>
}

export type DocsState = {
  launcherVisible: boolean
}

export default class Docs extends Component<DocsProps, DocsState> {
  public constructor(props: DocsProps) {
    super(props)

    this.state = { launcherVisible: false }
  }

  public showLauncher(event: MouseEvent) {
    event.preventDefault()

    this.setState({ launcherVisible: true }, () => {
      document.body.style.overflow = 'hidden'
    })
  }

  public hideLauncher() {
    this.setState({ launcherVisible: false }, () => {
      document.body.style.overflow = 'unset'
    })
  }

  public render() {
    const { title, description } = this.props.children.props.query
    const pageTitle = `${title} — Athenna Framework`

    const keyMap = {
      SHOW_LAUNCHER: ['ctrl+k', 'command+k'],
      HIDE_LAUNCHER: 'esc'
    }

    const handlers = {
      SHOW_LAUNCHER: this.showLauncher.bind(this),
      HIDE_LAUNCHER: this.hideLauncher.bind(this)
    }

    return (
      <Box>
        <Head>
          <title>{pageTitle}</title>
          <meta content={pageTitle} property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
        </Head>

        <GlobalHotKeys 
          root 
          keyMap={keyMap} 
          // @ts-ignore
          handlers={handlers} 
        />

        <Launcher
          launcherVisible={this.state.launcherVisible}
          hideLauncher={this.hideLauncher.bind(this)}
        />

        <Box className={styles.container}>
          <Navigation selected={title} />
          <Box className={styles.content}>
            <main className={styles.center}>
              <Search showLauncher={this.showLauncher.bind(this)} />
              <Heading as="h1" size="2xl">
                {title}
              </Heading>
              <Paragraph className={styles.description} size="md">
                {description}
              </Paragraph>

              {this.props.children}
            </main>
          </Box>
        </Box>
      </Box>
    )
  }
}

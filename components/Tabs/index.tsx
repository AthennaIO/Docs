import styles from '#components/Tabs/index.module.css'

import { Component, ReactElement } from 'react'
import { Box, Tabs as DraculaTabs, TabsProps as DraculaTabsProps } from 'dracula-ui'

export type TabsProps = {
  sections: { label: string, content: string | ReactElement<any> }[]
}
export type TabsState = {
  sections: { label: string, content: string | ReactElement<any> }[]
  selectedTab: number
}

export default class Tabs extends Component<TabsProps, TabsState> {
  public constructor(props: TabsProps) {
    super(props)

    this.state = {
      sections: this.props.sections,
      selectedTab: 0
    }
  }

  public onChangeSelectedTab(index: number) {
    this.setState({ selectedTab: index })
  }

  public renderLabels() {
    return this.state.sections.map((section, index) => {
      return (
        <li key={index}
          className={
            this.state.selectedTab === index ? styles.tabActive : styles.tab
          }
        >
          <a className='drac-tab-link drac-text' onClick={() => this.onChangeSelectedTab(index)}>
            {section.label}
          </a>
        </li>
      )
    })
  }

  public renderPanels() {
    return this.state.sections.map((section, index) => {
      return (
        <div
          key={index}
          className={
            this.state.selectedTab === index
              ? styles.tabPanelActive
              : styles.tabPanel
          }
        >
          {section.content}
        </div>
      )
    })
  }

  public render() {
    return (
      <div>
        <DraculaTabs mt='xxs' color='green'>
          {this.renderLabels()}
        </DraculaTabs>
        <Box className={styles.codeContainer}>
          {this.renderPanels()}
        </Box>
      </div>
    )
  }
}

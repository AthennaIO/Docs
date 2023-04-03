import Link from "next/link"
import styles from "#components/Topbar/index.module.css"

import { Component } from "react"
import { Box, Button, Text, Anchor } from "dracula-ui"

export type TopBarProps = {
  toggleMenu: () => void
}

export default class Topbar extends Component<TopBarProps> {
  public render() {
    return <Box p="md" className={styles.topbar}>
      <Link style={{ textDecoration: 'none' }} href="/" passHref>
        <Anchor className={styles.title}>
          <Text className={styles.text} color="cyanGreen">Athenna</Text>
          <Text className={styles.text} color="purpleCyan"> Framework</Text>
        </Anchor>
      </Link>

      <Button className={styles.menu} onClick={() => this.props.toggleMenu()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.menuPrimary}><path className={styles.menuSecondary} fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" /></svg>
      </Button>
    </Box>
  }
}

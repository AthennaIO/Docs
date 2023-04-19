import Docs from '#layouts/Docs'

import { Box } from 'dracula-ui'
import { Component } from 'react'

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Application Lifecycle',
        description: 
          'Understand each one of the Athenna applications lifecycle.'
      }
    }
  }
}

export default class ApplicationLifecycle extends Component {
  public static Layout = Docs

  public render() {
    return (
      <Box>
      </Box>
    )
  }
}

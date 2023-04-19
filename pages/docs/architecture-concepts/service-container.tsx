import Docs from '#layouts/Docs'

import { Box } from 'dracula-ui'
import { Component } from 'react'

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Service Container',
        description: 
          'Understand the purpose and how to use the Athenna service container.'
      }
    }
  }
}

export default class ServiceContainer extends Component {
  public static Layout = Docs

  public render() {
    return (
      <Box>
      </Box>
    )
  }
}

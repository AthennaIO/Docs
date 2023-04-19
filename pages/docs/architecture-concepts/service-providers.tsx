import Docs from '#layouts/Docs'

import { Box } from 'dracula-ui'
import { Component } from 'react'

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Service Providers',
        description: 
          'Understand the purpose and how to use the Athenna service providers.'
      }
    }
  }
}

export default class ServiceProviders extends Component {
  public static Layout = Docs

  public render() {
    return (
      <Box>
      </Box>
    )
  }
}

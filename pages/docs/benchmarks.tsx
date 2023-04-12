import Docs from '#layouts/Docs'

import { Box } from 'dracula-ui'
import { Component } from 'react'

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Benchmarks',
        description: 
          'See how Athenna performs in comparison to other frameworks.'
      }
    }
  }
}

export default class Benchmarks extends Component {
  public static Layout = Docs

  public render() {
    return (
      <Box>
      </Box>
    )
  }
}

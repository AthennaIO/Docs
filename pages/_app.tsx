import App from 'next/app'

import '#styles/main.css'
import 'dracula-ui/styles/dracula-ui.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Noop = ({ children }: any) => children

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props
    const Layout = Component.Layout || Noop

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

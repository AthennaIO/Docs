import Welcome, { getStaticProps as getStaticPropsWelcome } from '#pages/docs/welcome'

export async function getStaticProps() {
  return getStaticPropsWelcome()
}

export default Welcome

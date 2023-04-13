import Welcome, { getStaticProps as getStaticPropsWelcome } from '#pages/docs/introduction/welcome'

export async function getStaticProps() {
  return getStaticPropsWelcome()
}

export default Welcome

/**
 * Built on top of the original theme
 *
 * https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/prism-react-renderer/src/themes/dracula.ts
 */

import bash from './bash'
import html from './html'
import json from './json'
import typescript from './typescript'

export default {
  plain: {
      color: "#F8F8F2",
      backgroundColor: "#282a36"
  },
  styles: [...bash, ...html, ...json, ...typescript]
}

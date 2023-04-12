import { ReactElement } from 'react'

export function getChildsAsString(children: ReactElement[]): string {
  let string = ''

  if (children === null || children === undefined) {
    return string
  }

  if (typeof children === 'string') {
    return children
  }

  if (Array.isArray(children)) {
    children.forEach(child => {
      if (typeof child === 'string') {
        string += child
      } else if (child.props.children) {
        string += getChildsAsString(child.props.children)
      }
    })
  }

  return string
}
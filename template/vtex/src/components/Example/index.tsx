import * as React from 'react'

interface Props {
  text: string
}

export const Example = ({ text }: Props) => {
  return <div>Example Component: {text}</div>
}

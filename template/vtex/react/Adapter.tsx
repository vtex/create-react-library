import React from 'react'
import { Example, ExampleProps } from '../src'

interface ExamplePropsSchema {
  getSchema?(props: ExampleProps): object
  schema?: object
}

interface AdapterProps extends ExamplePropsSchema, ExampleProps {}

const Adapter: React.FunctionComponent<AdapterProps> = ({ schema, getSchema, ...props }: AdapterProps) => {
  return <Example { ...props as ExampleProps } />
}

Adapter.defaultProps = {
  schema: {
    title: 'editor.CHANGE_ME.title',
    description: 'editor.CHANGE_ME.description',
    type: 'object',
    properties: {},
  },
  text: "Default Text"
}


export default Adapter

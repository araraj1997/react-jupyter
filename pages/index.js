import React from 'react'
import fetch from 'isomorphic-fetch'
import Jupyter from '../src'

export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = { loading: true, content: null }
  }

  async componentDidMount() {
    const response = await fetch('/static/notebook.ipynb')
    this.setState({ content: await response.json(), loading: false })
  }

  render() {
    const { loading, content } = this.state

    return (
      <div>
        <h1>react-jupyter</h1>
        {loading && <p>loading...</p>}

        {content &&
          <Jupyter
            content={content}
            display="hidden"
          />
        }
      </div>
    )
  }
}

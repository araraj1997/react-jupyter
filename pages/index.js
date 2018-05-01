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
        {loading && <p>loading...</p>}

        <div className="wrapper">
          {content &&
            <Jupyter
              content={content}
              display="hidden"
            />
          }
        </div>
        <style jsx>{`
          .wrapper {
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
          }
        `}</style>
      </div>
    )
  }
}

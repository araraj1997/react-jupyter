import React from 'react'
import queryString from 'query-string'
import {
  standardTransforms,
  standardDisplayOrder,
  registerTransform
} from "@nteract/transforms"
import NotebookPreview from "@nteract/notebook-preview"
import DataResourceTransform from "@nteract/transform-dataresource"
import { VegaLite1, VegaLite2, Vega2, Vega3 } from "@nteract/transform-vega"
import { PlotlyNullTransform, PlotlyTransform } from "./PlotlyTransform"

const { transforms, displayOrder } = [
  DataResourceTransform,
  VegaLite1,
  VegaLite2,
  Vega2,
  Vega3
].reduce(registerTransform, {
  transforms: standardTransforms,
  displayOrder: standardDisplayOrder
})

const setDisplay = (_class, val) => {
  Array
    .from(document.getElementsByClassName(_class))
    .forEach(elem =>
      elem.setAttribute('style', `display:${val} !important`)
    )
}

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = { display: props.display || 'hidden' }
    if (typeof window === 'undefined') return
    const query = queryString.parse(window.location.search)
    if (query && Object.prototype.hasOwnProperty.call(query, 'code')) { // eslint-disable-line
      this.state = { display: query.code }
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ display: props.display })
  }

  onChangeDisplay(e) {
    e.preventDefault()
    const display = e.target.value
    this.setState({ display: e.target.value })

    if (display === 'hidden') {
      setDisplay('input-container', 'none')
      setDisplay('nteract-display-area-stdout', 'none')
      setDisplay('nteract-display-area-sterr', 'none')
    }

    if (display === 'shown') {
      setDisplay('input-container', 'flex')
      setDisplay('nteract-display-area-stdout', 'flex')
      setDisplay('nteract-display-area-sterr', 'flex')
    }

    if (display === 'output') {
      setDisplay('input-container', 'none')
      setDisplay('nteract-display-area-stdout', 'flex')
      setDisplay('nteract-display-area-sterr', 'flex')
    }
  }

  render() {
    const { content, type } = this.props
    const { display } = this.state

    const style = `
      ${display === 'hidden' || display === 'output' ? `
        .input-container {
          display: none!important;
        }
      ` : ``}

      ${display === 'hidden' ? `
        .nteract-display-area-stdout {
          display: none!important;
        }

        .nteract-display-area-stderr {
          display: none!important;
        }
      ` : ``}
    `

    return (
      <div>
        Code:{'  '}
        <select onChange={(e) => this.onChangeDisplay(e)} value={display}>
          <option value="hidden" defaultValue={display === 'hidden'}>Hidden</option>
          <option value="shown" defaultValue={display === 'shown'}>Shown</option>
          <option value="output" defaultValue={display === 'output'}>
            Hidden, but show code outputs
          </option>
        </select>

        <NotebookPreview
          notebook={content}
          displayOrder={displayOrder}
          transforms={transforms}
        />

        <style jsx global>{`

          ${style}
          .content-margin {
            padding: 0px !important;
          }

          .cell:hover .prompt, .cell:active .prompt {
            background-color: #fafafa!important;
            color: black!important;
          }

        `}</style>
      </div>
    )
  }
}

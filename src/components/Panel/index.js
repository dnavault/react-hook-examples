import React from "react"
import { sample } from "lodash"
import classnames from "classnames"

const colors = [
  "bg-primary text-white",
  "bg-secondary",
  "bg-success",
  "bg-danger text-white",
  "bg-warning",
  "bg-info text-white",
  "bg-light",
  "bg-dark",
  "bg-white"
]

function Panel({ link, image, text, title, expandAll }) {
  const [color] = React.useState(sample(colors))
  const [expand, setExpand] = React.useState(false)

  React.useEffect(() => {
    setExpand(expandAll)
  }, [expandAll]) // listening for expandAll changes

  const externalLink = (e, url) => {
    e.stopPropagation()
    window.open(url, "_blank")
  }

  return (
    <div className='col-lg-4 col-md-6 col-12 animated fadeIn' onClick={() => setExpand(prev => !prev)}>
      <div className={classnames("card", "mb-3", color)}>
        <div class='card-header'>
          {" "}
          <img className='w-100' src={image} />
        </div>
        <div class='card-body'>
          <h5 class='card-title mb-0'>{title}</h5>
          <p className={classnames("mt-3", "card-text", "animated", "fadeIn", { "d-none": !expand })}>{text}</p>
          <div className={classnames("card-text", "animated", "fadeIn", { "d-none": !expand })}></div>
        </div>
        <div className={classnames("card-footer", "animated", "fadeIn", { "d-none": !expand })}>
          <div className='row'>
            <div className='col text-center'>
              <div
                className='card-footer-item'
                onClick={e => externalLink(e, `https://github.com/nomastickles/react-hook-examples/tree/master/examples/${link}`)}
              >
                <i className='fab fa-2x fa-github' />
              </div>
            </div>
            <div className='col text-center'>/////</div>

            <div className='col text-center'>
              <div
                className='card-footer-item card-footer-item-2'
                onClick={e => externalLink(e, `https://codesandbox.io/s/github/nomastickles/react-hook-examples/tree/master/examples/${link}`)}
              >
                <i className='fas fa-2x fa-laptop-code' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Panel

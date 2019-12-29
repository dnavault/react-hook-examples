import React from "react"
import classnames from "classnames"

const colors = ["is-primary", "is-link", "is-info", "is-success", "is-warning", ""]
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)]

function Panel({ link1, link2, image, text, title }) {
  const [color] = React.useState(getRandomColor)
  const [expand, setExpand] = React.useState(false)

  const externalLink = (e, url) => {
    e.stopPropagation()
    window.open(url, "_blank")
  }

  return (
    <div className='column animated fadeIn' onClick={() => setExpand(prev => !prev)}>
      <div className={classnames("notification", color)}>
        {/* <button className={classnames("delete", { "is-hidden": !expand })}></button> */}
        <div>
          <img src={image} />
        </div>
        <div>{title}</div>

        <div className={classnames("animated", "fadeIn", { "is-hidden": !expand })}>
          <div>{text}</div>

          <footer className='card-footer' style={{ marginTop: "20px" }}>
            <p className='card-footer-item' onClick={e => externalLink(e, link1)}>
              <span className='icon'>
                <i className='fab fa-github' />
              </span>
            </p>
            <p className='card-footer-item card-footer-item-2' onClick={e => externalLink(e, link2)}>
              <span>
                <span className='icon'>
                  <i className='fas fa-laptop-code' />
                </span>
              </span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Panel

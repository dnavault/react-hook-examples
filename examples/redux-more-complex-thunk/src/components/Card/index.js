import React from "react"
import classnames from "classnames"
import { useSelector, useDispatch } from "react-redux"
import shortid from "shortid"
import { sample } from "lodash"
import * as Spinners from "react-spinners"
import { fetchAndSetCard } from "./actions"

function Card({ bgColor }) {
  const dispatchRedux = useDispatch()
  const [id] = React.useState(shortid.generate())

  const content = useSelector(appState => appState.card.contentById[id])
  const [spinnerName] = React.useState(sample(Object.keys(Spinners)))

  const Spinner = React.useRef(Spinners[spinnerName])

  const onClickHandler = () => {
    dispatchRedux({ type: "CARD_SELECTED", payload: id })
    if (!content) dispatchRedux(fetchAndSetCard({ id }))
  }

  return (
    <div className={classnames("col-lg-4 col-md-6 col-12 animated fadeIn")}>
      <div className={`card mb-3 ${bgColor}`} onClick={onClickHandler}>
        <div className='card-header text-center'>{id}</div>
        <div className='card-body text-center'>
          {!content && (
            <div style={{ maxWidth: "60px", margin: "0 auto", minHeight: "50px" }}>
              <Spinner.current color={"#fff"} />
            </div>
          )}
          {content && <img className={"animated fadeIn"} src={content} />}
        </div>
      </div>
    </div>
  )
}

export default Card

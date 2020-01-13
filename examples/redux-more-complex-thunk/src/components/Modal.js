import React from "react"
import { useSelector, useDispatch } from "react-redux"

function Modal() {
  const selectedId = useSelector(appState => appState.card.selectedId)
  const content = useSelector(appState => appState.card.contentById[selectedId])
  const dispatchRedux = useDispatch()

  const closeModal = () => {
    dispatchRedux({ type: "CARD_SELECTED", payload: null })
  }
  if (selectedId === null) return null
  return (
    <div
      className='modal fade show animated fadeIn faster'
      id='exampleModal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
      style={{ display: "block", paddingRight: "0px" }}
    >
      <div className='modal-dialog' role='document'>
        <div className={`modal-content bg-secondary`}>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              {selectedId}
            </h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={closeModal}>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>

          <div className='modal-body text-center' style={{ maxHeight: "270px" }}>
            {content && <img style={{ maxHeight: "220px" }} src={content} />}
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-dismiss='modal' onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

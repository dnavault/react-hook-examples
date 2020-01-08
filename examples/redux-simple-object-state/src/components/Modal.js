import React from "react"
import { useSelector, useDispatch } from "react-redux"
function Modal() {
  const selectedId = useSelector(appState => appState.selectedId)
  const dispatchRedux = useDispatch()

  const closeModal = () => {
    dispatchRedux({ type: "ID_SELECTED", payload: null })
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
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              BOOM
            </h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={closeModal}>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>{selectedId}</div>
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

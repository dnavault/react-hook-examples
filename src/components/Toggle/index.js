import React from "react"

function Toggle({ onChange, expandAll }) {
  return (
    <div className='is-pulled-right'>
      <div className='field is-pulled-right'>
        <input onChange={onChange} id='toggle' type='checkbox' name='toggle' className='switch' checked={expandAll} />
        <label htmlFor='toggle'>Expand All</label>
      </div>
    </div>
  )
}

export default Toggle

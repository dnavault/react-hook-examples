import React from "react"

function Toggle({ onChange, expandAll }) {
  return (
    <div className='is-pulled-right'>
      <div className='field is-pulled-right'>
        <input onChange={onChange} id='switchRtlExample' type='checkbox' name='switchRtlExample' className='switch' checked={expandAll} />
        <label htmlFor='switchRtlExample'>Expand All</label>
      </div>
    </div>
  )
}

export default Toggle

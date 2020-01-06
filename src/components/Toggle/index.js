import React from "react"
import classnames from "classnames"

function Toggle({ onChange, expandAll }) {
  return (
    <div className='w-100 text-right'>
      <button onClick={onChange} type='button' className={classnames("float-right ", "btn", { "btn-primary": !expandAll, "btn-secondary": expandAll })}>
        {expandAll ? "collapse -" : "expand +"}
      </button>
    </div>
  )
}

export default Toggle

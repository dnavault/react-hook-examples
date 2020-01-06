import React from "react"
import { chunk } from "lodash"
import { GridLoader as Loader } from "react-spinners"
import LazyLoad from "react-lazyload"
import { fetchData } from "./actions"
import Panel from "../Panel"
import Toggle from "../Toggle"

function App() {
  const [panelData, setPanelData] = React.useState([])
  const [expandAll, setExpandAll] = React.useState(localStorage.getItem("expandAll") === "true")

  React.useEffect(() => {
    ;(async () => {
      const data = await fetchData()
      //setPanelData(chunk(data, 3))
      setPanelData(data)
    })()
  }, [])

  const toggleExpand = () => {
    setExpandAll(prev => {
      localStorage.setItem("expandAll", !prev)
      return !prev
    })
  }
  return (
    <>
      <div className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='ml-1 row w-100'>
          <div className='col'>
            <div className='navbar-brand mb-0 h1 w-100'>
              <a href='https://github.com/nomastickles/react-hook-examples' className='float-left' target='_blank'>
                React Hook Examples <i className='fab fa-github mr-1' />
              </a>
              <span className='float-left'> by </span>
              <a href='https://nomastickles.website/' className='float-left' target='_blank'>
                {" "}
                Thomas Nickles
              </a>
            </div>
          </div>
          <div className='col'>
            <Toggle expandAll={expandAll} onChange={toggleExpand} />
          </div>
        </div>
      </div>

      <div style={{ padding: "20px" }} className='container'>
        {!panelData.length && <Loader color='#fff' size='50px' margin='10px' css={{ margin: "0 auto" }} />}
        <LazyLoad>
          <div className='row'>{!!panelData.length && panelData.map((data, index) => <Panel key={index} {...data} expandAll={expandAll} />)}</div>
        </LazyLoad>
      </div>
    </>
  )
}

export default App

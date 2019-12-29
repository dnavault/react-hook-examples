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
      setPanelData(chunk(data, 4))
    })()

    // const lsExpandAll = localStorage.getItem("expandAll")
    // if (lsExpandAll === "true") setExpandAll(true)
  }, [])

  const toggleExpand = () => {
    setExpandAll(prev => {
      localStorage.setItem("expandAll", !prev)
      return !prev
    })
  }
  return (
    <>
      <section style={{ padding: "20px" }} className='hero  has-background-white'>
        <Toggle className='is-pulled-right' expandAll={expandAll} onChange={toggleExpand} />
      </section>
      <section style={{ padding: "20px" }} className='hero has-background-grey-light'>
        <LazyLoad>
          {!panelData.length && <Loader color='#fff' size='50px' margin='10px' css={{ margin: "0 auto" }} />}
          {!!panelData.length &&
            panelData.map((panels, index) => (
              <div key={index} className='columns is-centered'>
                {panels.map((data, index) => (
                  <Panel key={index} {...data} expandAll={expandAll} />
                ))}
              </div>
            ))}
        </LazyLoad>
      </section>
    </>
  )
}

export default App

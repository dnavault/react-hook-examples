import React from "react"
import { chunk } from "lodash"
import { GridLoader as Loader } from "react-spinners"
import LazyLoad from "react-lazyload"
import { fetchData } from "./actions"
import Panel from "../Panel"

function App() {
  const [panelData, setPanelData] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const data = await fetchData()
      setPanelData(chunk(data, 4))
    })()
  }, [])

  return (
    <section style={{ padding: "20px" }} className='hero has-background-grey-light'>
      <LazyLoad>
        {!panelData.length && <Loader color='#fff' size='50px' margin='10px' css={{ margin: "0 auto" }} />}
        {!!panelData.length &&
          panelData.map((panels, index) => (
            <div key={index} className='columns is-centered'>
              {panels.map((data, index) => (
                <Panel key={index} {...data} />
              ))}
            </div>
          ))}
      </LazyLoad>
    </section>
  )
}

export default App

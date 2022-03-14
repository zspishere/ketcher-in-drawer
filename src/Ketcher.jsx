import React from "react"
import { StandaloneStructServiceProvider } from "ketcher-standalone"
import { Editor } from "ketcher-react"
import "ketcher-react/dist/index.css"

const structServiceProvider = new StandaloneStructServiceProvider()

export default () => {  
  const handleOnInit = async (ketcher) => {
    global.ketcher = ketcher
  }

  return (
    <div id="ketcherFrame">
      <Editor
        staticResourcesUrl={""}
        structServiceProvider={structServiceProvider}
        onInit={handleOnInit}
      />
    </div>
  )
}

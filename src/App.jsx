import React, { useState } from 'react'
import { Button, Drawer } from 'antd'
import Ketcher from './Ketcher'

const App = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open Drawer
      </Button>
      <Drawer title="Ketcher in Drawer"
              placement="right"
              width={1200}
              onClose={onClose}
              visible={visible}>
        <Ketcher />
      </Drawer>
    </>
  )
}

export default App

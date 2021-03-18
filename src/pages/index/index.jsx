import Taro, { useState, useCallback } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import Vertify from '../vertify/index.jsx'
import Keyboard from '../keyboard/index.jsx'

function Index (props) {
  let [isOpen, setIsOpen] = useState(false)
  let [value, setValue] = useState('')
  function handleClose () {
    setIsOpen(false)
  }
  function handClick () {
    setIsOpen(true)
  }
  function handleConfirm () {
    // 提交
  }
  function handleValueChange (val) {
    if (val.length <= 6) {
      if (val.length === 6) setIsOpen(false)
      setValue(val);
    }
  }
  return (
    <View>
      <Vertify
        value={value}
        vertifyLen={6}
        onOpen={handClick.bind(this)}
      />
      <Keyboard
        currentValue={value}
        onValueChange={handleValueChange.bind(this)}
        onClose={handleClose.bind(this)}
        onConfirm={handleConfirm.bind(this)}
        isOpened={isOpen}
      />
    </View>
  )
}

export default Index
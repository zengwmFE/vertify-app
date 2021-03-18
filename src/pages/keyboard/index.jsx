import Taro, { useState, useCallback, useEffect } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './styles/keyboard.scss'
import deleteImage from '../../asstes/img/delete.png'
import arrow from '../../asstes/img/arrow.png'

function Keyboard (props) {
  const [kbNumberList, setKbNumberList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
  const { currentValue } = props
  const { isOpened } = props
  const { onClose, onValueChange, onConfirm } = props
  // 关闭
  function handleClose () {
    onValueChange('')
    onClose()
  }
  // 当点击数字键时
  function handleOnEnter (val) {
    Taro.vibrateShort()
    onValueChange(currentValue + val)
  }
  // 当点击删除时
  const handleDelete = useCallback(() => {
    onValueChange(Array.from(currentValue).splice(0, currentValue.length - 1).join(''))
    Taro.vibrateShort()

  }, [currentValue, onValueChange])

  // 当点击确认
  const handleConfirm = useCallback(() => {
    onClose()
    onConfirm()
  }, [onClose, onConfirm])

  return (
    <View className={isOpened ? "float-layout active" : "float-layout"}>
      <View className='float-layout__overlay' onClick={handleClose.bind(this)}></View>
      <View className='float-layout__container layout'>
        <View className='layout-header  header-down xmg-border-b' onClick={handleClose.bind(this)}>
          <Image src={arrow} className='header-image' />
        </View>
        <View className='layout-body'>
          <View className='layout-left'>
            <View className='keyboard-key'>
              {kbNumberList.map((item, index) => (<View className='keyboard-normal active-normal' onClick={handleOnEnter.bind(this, item)} key={index + '_' + item}>{item}</View>))}
            </View>
          </View>
          <View className='layout-right'>
            <View className='delete-content active-normal' onClick={handleDelete.bind(this)}>
              <Image src={deleteImage} className='delete-image' />
            </View>
            <View className='right-sure active-sure' onClick={handleConfirm.bind(this)}>
              确定
              </View>
          </View>
        </View>
      </View>
    </View >
  )
}

export default Keyboard
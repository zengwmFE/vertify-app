import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './styles/vertify.scss'

function Vertify (props) {
  let { value, vertifyLen } = props
  const { onOpen } = props
  return <View className='verify-code'>
    <View className='code-wrap' onClick={onOpen.bind(this)}>
      {Array.from({ length: vertifyLen }).map((m, index) => (
        <View className='code-item' key={`${value[index]}_${index}`}>
          <Text className='code-item-text'>
            {value[index] || ""}
          </Text>
        </View>
      ))}
    </View>

  </View>
}

export default Vertify
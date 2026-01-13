import Icon from '@/src/components/Icon'
import React from 'react'
import { Text, View } from 'react-native'

export default function Login() {
  return (

    <View className="flex-1 justify-center items-center">
        <Icon name="logo-google" size={20} />
      <Text className='text-red-500'>Sign in with your Google account</Text>
    </View>
  )
}
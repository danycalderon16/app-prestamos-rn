import GoogleLogo from '@/src/components/GoogleLogo'
import React from 'react'
import { Text, View } from 'react-native'

export default function Login() {
  return (

    <View className="bg-linear-to-br from-green-700 via-teal-900 to-slate-900 flex-1 justify-center items-center">
      <View className='flex flex-row items-center gap-2 border border-green-50 p-2 rounded-xl'>
        <GoogleLogo />
        <Text className='text-xl text-white'>Sign in with your Google account</Text>
      </View>
    </View>
  )
}
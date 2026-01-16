import GoogleLogo from '@/src/components/GoogleLogo'
import { auth } from '@/src/firebase/firebaseConfig'
import { useGoogleAuth } from '@/src/services/googleAuth'
import { LinearGradient } from 'expo-linear-gradient'
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth'
import React, { useEffect } from 'react'
import { Pressable, Text } from 'react-native'

export default function Login() {

  const { request, response, signIn } = useGoogleAuth();

  useEffect(() => {
    if(response?.type === "success"){
      const { id_token } = response.params;

      console.log(id_token);
        
      const credential = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credential)
    }
  }, [response])
  

  return (  
    <LinearGradient
      colors={["#15803d", "#134e4a", "#0f172a"]} // green-700 → teal-900 → slate-900
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
     <Pressable
        onPress={signIn}
        disabled={!request}
        className="flex-row items-center gap-3
                   border border-green-50 px-4 py-3 rounded-xl"
        android_ripple={{ color: "rgba(255,255,255,0.15)" }}
        accessibilityRole="button"
        accessibilityLabel="Sign in with Google"
      >
        <GoogleLogo />
        <Text className="text-lg text-white font-medium">
          Sign in with your Google account
        </Text>
      </Pressable>

    </LinearGradient>
  )

}
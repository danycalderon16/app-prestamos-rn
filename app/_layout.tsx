import { AuthProvider, useAuth } from "@/src/contex/AuthContext";
import { Slot, SplashScreen, useRouter } from "expo-router";
import { useEffect } from "react";
import './global.css';


SplashScreen.preventAutoHideAsync();

function RootNavigation() {
  const { user, loading  } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(!loading){
      SplashScreen.hideAsync();
      if(user){
        router.replace("/(app)/home");
      }else {
        router.replace("/(auth)/login");
      }
    }
  }, [loading, user])
  
  if (loading) return null;

  return <Slot />


}

export default function Layout(){
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  )
}
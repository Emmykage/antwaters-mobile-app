import { Text, View } from "react-native";
import Login from "./app/screens/Login";
import SignUp from "./app/screens/SignUp";
import Welcome from "./app/screens/Welcome";
import RootStack from "./app/navigators/RootStack";
import Dashboard from "./app/screens/Dashboard";
import * as Font from "expo-font"
import { useState } from "react";
import {AppLoading} from "expo"
import Activity from "./app/screens/Activity";

const getFonts = () => {
  return Font.loadAsync({
    "poppins-bold": require('./app/assets/fonts/Poppins-Bold.ttf'),
    // "poppins-regular": require('./app/assets/fonts/Poppins-Regular.tff')
  })
}
export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false)
  // if(fontLoaded){
    return (
      <>

    {/* <RootStack/> */}
    {/* <Dashboard/> */}
    <Activity/>
    </>
  );
  // }else{
  //   return(
  //     <AppLoading
  //     startAsync={getFonts}
  //     onfinish={()=> setFontLoaded(true)}
  //     />
  //   )

  }
 
// }

import { Text, View } from "react-native";
import RootStack from "./app/navigators/RootStack";
import * as Font from "expo-font"
import { useEffect, useState } from "react";
import ActivityOptions from "./app/screens/ActivityOptions";
import AppointmentOverview from "./app/screens/AppointmentOverview";



export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(()=> {
  (async() => {
     await Font.loadAsync({
        "poppins-bold": require('./app/assets/fonts/Poppins-Bold.ttf'),
        "poppins-regular": require('./app/assets/fonts/Poppins-Regular.ttf')
      })
      setFontLoaded(true)

      Text.defaultProps = {
        ...(Text.defaultProps || {}),
        style: {
          ...(Text.defaultProps?.style || {}),
          fontFamily: "poppins-regular",
        },
      };


    })()
  },[])

  console.log(fontLoaded)
  if(!fontLoaded){
    return(
      <View style={{paddingTop: 200}}>
      <Text>Loading...</Text>
    </View>
    )


  }

    return (
      <>
      {/* <ActivityOptions/> */}
      <AppointmentOverview/>
    {/* <RootStack/>  */}

    </>
  );
 
}

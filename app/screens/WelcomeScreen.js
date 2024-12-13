import React from 'react'
import { Image, View, ImageBackground, StyleSheet } from 'react-native'

const WelcomeScreen = () => {
  return (
    <ImageBackground
    style={styles.background}    
    source={require("../assets/health-screen.jpg")}>
      <View
      style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />

      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"

    },
    loginButton: {
      width: "100%",
      height: 70,
      backgroundColor: "purple"

    },

    registerButton: {
      width: "100%",
      height: 70,
      backgroundColor: "gray"
    },
    logoContainer:  {
      position: "absolute",
      top: 70
    },

    logo: {
      width: 100,
      height: 100,
     
    }
})

export default WelcomeScreen
import { StatusBar, StyleSheet } from "react-native";
import colors from "../config/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 25,
      backgroundColor: 'white',
      overflow: "visible",
      paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 30 : 40,
    },
    inncontainer: {
      width: '100%',
      flex: 1,
      padding: 25,
      alignItems: 'center',
    },
    pageLogo: {
      width: 250,
      height: 200,
    },
    pageTitle: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      color: colors.brand,
      padding: 10,
    },
    subTitle: {
      fontSize: 18,
      marginBottom: 20,
      letterSpacing: 1,
      fontWeight: 'bold',
      color: colors.tertiary,
    },
    textInput: {
      backgroundColor: "white",
      padding: 15,
      paddingLeft: 55,
      paddingRight: 55,
      borderRadius: 5,
      borderColor: "gray",
      borderWidth: 2,
      fontSize: 16,
      height: 60,
      marginVertical: 3,
      marginBottom: 10,
      color: colors.tertiary,
    },
    label: {
      color: colors.tertiary,
      fontSize: 13,
      textAlign: 'left',
    },
    leftIcon: {
      position: 'absolute',
      left: 15,
      top: 38,
      zIndex: 1,
    },
    rightIcon: {
      position: 'absolute',
      right: 15,
      top: 38,
      zIndex: 1,
    },
    button: {
      padding: 15,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      marginVertical: 5,
      height: 60,
    },
    buttonGoogle: {
      backgroundColor: colors.green,
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 10
    },
    buttonText: {
      color: colors.tertiary,
      fontSize: 16,
    },
    msgBox: {
      textAlign: 'center',
      fontSize: 13,
    },
    msgBoxSuccess: {     
      color: "green"
    }, 
    msgBoxError: {     
      color: "red"
    },
    line: {
      height: 1,
      width: '100%',
      backgroundColor: colors.darklight,
      marginVertical: 10,
    },
    extraView: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    extraText: {
      color: colors.tertiary,
      fontSize: 15,
    },
    textLink: {
      marginLeft: 5,
    },
    textLinkContent: {
      color: colors.brand,
      fontSize: 15,
    },
    formArea: {
      width: "100%"
    },

    welcomeContainer: {
      width: "100%",
      flex: 1,
      alignItems: 'center',
      padding: 25,
      paddingTop: 100,
      // backgroundColor: "red",
      justifyContent: 'center'
    },
    welcomeInnercontainer: {

    },
    avatar: {
      width: 100,
      height: 100,
      alignSelf: 'center',
      borderRadius: 50,
      borderWidth: 2,
      borderColor: colors.secondary,
      marginBottom: 10,
      marginTop: 11,
    },
    welcomeImage: {
      height: 200,
      width: 200,
    },

   
    welcomePageTitle: {
      marginBottom: 5,
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center",
      color: colors.primary
    },
    welcomeSubTitle: {
      marginBottom: 5,
      fontWeight: "normal",
    },

    statusbar: {
      color: colors.darklight,
    }

    
    // buttonGoogle: {
    //   backgroundColor: colors.green,
    //   flexDirection: "row",
    //   justifyContent: "center",
    // },
    // buttonText: {
    //   color: colors.primary,
    //   fontSize: 16,     
    // },
    // buttonTextGoogle: {
    //   padding: 25,
    // },
    // msgBox: {
    //   textAlign: "center",
    //   fontSize: 13,
    // },
    // line: {
    //   height: 1,
    //   width: "100%",
    //   backgroundColor: colors.darklight,
    //   marginVertical: 10,
    // }, 
    // extraView: {
    //   justifyContent: "center",
    //   flexDirection: "row",
    //   alignItems: "center",
    //   padding: 10,
    // },
    // extraText: {
    //   justifyContent: "center",
    //   alignItems: "center",
    //   color: colors.tertiary,
    //   fontSize: 15,
    // },
    // textLink: {
    //   justifyContent: "center",
    //   alignItems: "center",
    // },
    // textLinkContent: {
    //   color: colors.brand,
    //   fontSize: 15,
    // },
  });


  export default styles
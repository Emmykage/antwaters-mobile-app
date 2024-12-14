import { Button, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/config/colors'


const Welcome = () => {

    return (
    <View style={styles.container}>
        <StatusBar style="light"/>
        <View style={styles.inncontainer}>
           
                <View style={styles.welcomeContainer}>
                    <Image style={styles.welcomeImage} resizeMode='cover' source={require("../assets/logo.png")}/>
                    <Text  style={styles.pageTitle}> Welcome Buddy</Text>
                    <Text style={[styles.subTitle, styles.welcomePageTitle]}> Olga Simpson </Text>
                    <Text style={[styles.subTitle, styles.welcomePageTitle]}> emmiemenz@gmail,com </Text>


                        <View style={styles.formArea}>
                        <Image style={styles.avatar} resizeMode='cover' source={require("../assets/logo.png")}/>

                           
                        <View style={styles.line}/>

                            <TouchableOpacity style={styles.button}>
                                <Text style={buttonText} onPress={() => {}}>
                                    Log Out
                                </Text>
                            </TouchableOpacity>
                           
                        


                    
                    </View>
                </View> 
        </View>
                        
    </View>
  )
}


export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: "25px",
        backgroundColor: "gray",
        paddingTop: `${StatusBar.currentHeight} + 10px`
    },
    inncontainer: {
        width: "100%",
        flex: 1,
        alignItems: 'center'
    },  
    welcomeContainer: {
        width: "100%",
        flex: 1,
        alignItems: 'center',
        padding: "25px",
        paddingTop: "10px",
        justifyContent: 'center'
    },
    avatar: {//image
        width: "100px",
        height: "100px",
        margin: "auto",
        borderRadius: '50%',
        borderWidth: "2px",
        borderColor: colors.secondary,
        marginBottom: "10px",
        marginTop: "11px"
    },
    welcomeImage: {//Image
        height: "50%",
        minWidth: "100%"
    },
    subTitle: {//subTitle - Text
        fontSize: "18px",
        marginBottom: "20px",
        letterSpacing: "1px",
        fontWeight: "bold",
        color: colors.tertiary

    },

    pageLogo: {//pageLogo - Image
        width: "250Px",
        height: "200px"
    },
    pageTitle: {
        fontSize:  "30px",
        textAlign: "center",
        fontWeight: "bold",
        color: colors.brand,
        padding: "10px"
    }, 
    welcomePageTitle: {
        marginBottom:  "5px",
        fontWeight: "normal",
       
    }, 
    welcomeSubTitle: {
        marginBottom:  "5px",
        fontWeight: "normal",
       
    },
    formArea: {//StyleFormArea - View
        width: "90%"
    }, 

    statusbar: {
        color: colors.darklight
    },
    textInput: { //StyledTextInput - TextInout
        backgroundColor: colors.secondary,
        padding: "15px",
        paddingLeft: "55px",
        paddingRight: "55px",
        borderRadius: "5px",
        fontSize: "16px",
        height: "60px",
        marginVertical: "3px",
        marginBottom: "10px",
        color: colors.tertiary

    },
    label: { //StyledInputLabel - Text
        color: colors.tertiary,
        fontSize: "13px",
        textAlign: 'left',
    },
    leftIcon: {  //view
        left: "15px",
        top: "38px",
        position: 'absolute',
        zIndex: 1,

    },rightIcon: { //TouchableOpacity
        right: "15px",
        top: "38px",
        position: 'absolute',
        zIndex: 1,

    },
    button: { //styledButton - TouchableOpacity
        padding: "15px",
        backgroundColor: colors.brand,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: "5px",
        marginVertical: "5px",
        height: "60px"

    },
    buttonGoogle: {
        backgroundColor: colors.green,
        flexDirection: "row",
        justifyContent: "center"
    },
    buttonText: { //ButtonText - Text
        color: colors.primary,
        fontSize: "16px"        
    },
    buttonTextGoogle: {
        padding: "25px"
    },
    msgBox: {//msgBo x- text
        textAlign: "center",
        fontSize: "13px"
    },
    line: {// Line - View
        height: "1px",
        width: "100%",
        backgroundColor: colors.darklight,
        marginVertical: "10px"
    }, 
    extraView: {// View
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        padding: "10px"
    },
    extraText:{
        justifyContent: "center",
        alignItems: "center",
        color: colors.tertiary,
        fontSize: "15px"
    },
    textLink: {// TextLink - TouchOPacity
        justifyContent: "center",
        alignItems: "center",

    },
    textLinkContent: {//TextLinkContent - Txt
        color: colors.brand,
        fontSize: "15px"
    }

})
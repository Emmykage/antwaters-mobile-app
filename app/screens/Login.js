import { Button, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/config/colors'
import { Formik } from 'formik'

import {Fontisto, Ionicons, Octicons} from "@expo/vector-icons"

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true)
  return (
    <View style={styles.container}>
        <StatusBar style="dark"/>
        <View style={styles.inncontainer}>
            <Image style={styles.pageLogo} source={require("../assets/logo.png")}/>
            <Text  style={styles.pageTitle}> Antwaters</Text>
            <Text style={styles.subTitle}> Account Login</Text>
                <Formik
                    initialValues={{email: "", password: ""}}
                    onSubmit={() => {}}>

                        {({handleChange, handleBlur, handleSubmit, values})=> <View>
                            <MyTextinput
                            label={"Email Address"}
                            icon={"mail"}
                            placeholder="enter emails"
                            placeholderTextColor={colors.darklight}
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            value={values.email}
                            keyboardType="email.address"
                            />
                            <MyTextinput
                            label={"PAssword Address"}
                            icon={"lock"}
                            placeholder="********"
                            placeholderTextColor={colors.darklight}
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            />
                            <Text style={styles.msgBox}>... </Text>

                            <TouchableOpacity style={styles.button}>
                                <Text style={buttonText} onPress={handleSubmit}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.line}/>
                            <TouchableOpacity style={styles.button} google={true}>
                                <Fontisto name='google' color={colors.primary} size={25} />
                                <Text google={true} style={buttonText}>Sign in with  Google</Text>
                            </TouchableOpacity>
                            <View style={styles.extraView}>
                                <Text style={styles.extraText}>Dont have an account alrrewady</Text>
                                <TouchableOpacity style={textLink}>
                                    <Text style={styles.textLinkContent}>Sign up</Text>

                                </TouchableOpacity>
                            </View>


                    
                    </View>}
                </Formik> 
        </View>
                        
    </View>
  )
}

const MyTextinput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
 return (
    <View>
        <View
            style={styles.leftIcon}
            >
                <Octicons name={icon} size={30} color={colors.brand}/>
        </View>
        <Text  style={styles.label}>{label}</Text>
        
        <TextInput {...props}>    </TextInput>
        {isPassword && (
            <View 
            onPress={()=> setHidePassword(!hidePassword)}
            style={styles.rightIcon}> 
            <Ionicons  name={hidePassword ? "md-eye-off" : "md-eye" } size={30} color={colors.darklight}/></View>
        )}
    </View>
 )
}
export default Login

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
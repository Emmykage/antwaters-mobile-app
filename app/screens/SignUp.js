import { ActivityIndicator, Button, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/config/colors'
import { Formik } from 'formik'

import {Fontisto, Ionicons, Octicons} from "@expo/vector-icons"
import  DateTimePicker  from '@react-native-community/datetimepicker'
import styles from '../assets/style/global'
import axios from 'axios'

const SignUp = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true)
    const [show, setShow] = useState(false)
    const [date, setDate] = useState(new Date(2000, 0, 1))
    const [dob, setDob] = useState()
    const [message, setMessage] = useState({message: "", type: ""})

    const handleSignup = (credentials, setSubmitting) => {
        // Start the API call
        handleMessage(null)
        axios.post(baseUrl, credentials)
          .then((res) => {
            const { data, message } = res.data;
      
            // Handle successful response
            handleMessage(message, "SUCCESS");
            navigation.navigate("welcome", { data });
            setSubmitting(false)
          })
          .catch((error) => {
            console.error(error);
            setSubmitting(false)
  
            // Handle error response
            if (error.response) {
              handleMessage(error.response.data.message, "FAILED");
            } else {
              handleMessage("Something went wrong", "FAILED");
            }
          });
      };

         
    const handleMessage = (message, type="FAILED") => {
        setMessage({message, type})
      }
      
      

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShow(false)
        setDate(currentDate)
        setDob(currentDate)
    }

    const showDatePicker = () => {
        setShow(true)

    }

  return (
    <View style={styles.container}>
        <StatusBar style="dark"/>
        <View style={styles.inncontainer}>
            {/* <Image style={styles.pageLogo} source={require("../assets/logo.png")}/> */}
            <Text  style={styles.pageTitle}> Antwaters</Text>
            <Text style={styles.subTitle}> Account Login</Text>


            {show && 
            <DateTimePicker
            testID='DateTimePicker'
            value={date}
            mode={"date"}
            is24Hour={true}
            display='default'
            onCancel={() => {
            onChange(onChange)
            }}
            />
            }
          
                <Formik
                    initialValues={{fullName: "", dateOfBirth: "", confirmPassword: "",  email: "", password: ""}}
                    onSubmit={(values, {setSubmitting}) => {
                        values = {...values, dob}
                        if(values.email == "" || values.password == "" || values.fullName ==="" || values.confirmPassword || values.dateOfBirth){
                            handleMessage("please fill all fields")
                            setSubmitting(false)
                          }else if(values.confirmPassword !== values.password){
                            handleMessage("passwords do not match", "FAILED")
                            setSubmitting(false)

                          }
                          else{
                            handleSignup(values, setSubmitting)            
                          }
                    }}>

                        {({handleChange, handleBlur, handleSubmit, values})=> 
                        <View style={styles.formArea}>
                        <MyTextinput
                            label={"Full Name "}
                            icon={"person"}
                            placeholder="John Doe"
                            placeholderTextColor={colors.darklight}
                            onChangeText={handleChange("fullName")}
                            onBlur={handleBlur("fullName")}
                            value={values.fullName}
                            keyboardType="email.address"
                            /> 
                             <MyTextinput
                            label={"Date of Birth"}
                            icon={"calendar"}
                            placeholder="YYY - MM - DD"
                            placeholderTextColor={colors.darklight}
                            onChangeText={handleChange("dateOfBirth")}
                            onBlur={handleBlur("dateOfBirth")}
                            value={dob ? dob.toDateString() : ""}
                            isDate={true}
                            editable={false}
                            showDatePicker={showDatePicker}
                            />
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
                            label={"Password"}
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
                            <MyTextinput
                            label={"Confirm password"}
                            icon={"lock"}
                            placeholder="********"
                            placeholderTextColor={colors.darklight}
                            onChangeText={handleChange("confirmPassword")}
                            onBlur={handleBlur("confirmPassword")}
                            value={values.confirmPassword}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            />
                            <Text style={[styles.msgBox, message.type == "SUCCESS" ? styles.msgBoxSuccess : styles.msgBoxError]}>{message.message}</Text>

                            {/* <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText} onPress={handleSubmit}>
                                    Sign up
                                </Text>
                            </TouchableOpacity> */}
                            { !isSubmitting && <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.buttonText}> Sign up</Text>
                                </TouchableOpacity>}      
                                { isSubmitting && <TouchableOpacity style={styles.button} disabled={true}>
                                <ActivityIndicator size={"large"}/>
                                </TouchableOpacity>}
                            <View style={styles.line}/>
                        
                            <View style={styles.extraView}>
                                <Text style={styles.extraText}
                                onPress={()=>  navigation.navigate("Signup")}
                                >Already  have an account </Text>
                                <TouchableOpacity style={styles.textLink}>
                                    <Text onPress={() =>  navigation.navigate("Login")} style={styles.textLinkContent}>Login</Text>

                                </TouchableOpacity>
                            </View>


                    
                    </View>}
                </Formik> 
        </View>
                        
    </View>
  )
}

const MyTextinput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate,  showDatePicker, ...props}) => {
 return (
    <View>
        <View
            style={styles.leftIcon}
            >
        <Octicons name={icon} size={30} color={colors.brand}/>
        </View>
        <Text  style={styles.label}>{label}</Text>
        {!isDate &&  
        <TextInput {...props} style={styles.textInput}/>}
        {isDate &&   
      <TouchableOpacity onPress={showDatePicker}> 
      <View>
        <TextInput style={styles.textInput} {...props} />
      </View>
    </TouchableOpacity>
            }
        
        {isPassword && (
            <View 
            onPress={()=> {
                console.log("first")
                setHidePassword(!hidePassword)}}
            style={styles.rightIcon}>
                
                
                <Ionicons  name={hidePassword ? "eye-outline" : "eye-outline" } size={23} color={colors.darklight}/> 
                </View>
        )}
    </View>
 )
}
export default SignUp


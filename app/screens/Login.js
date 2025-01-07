import React, { useState } from 'react';
import { ActivityIndicator, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../assets/config/colors';
import { Formik } from 'formik';
import { Fontisto, Ionicons, Octicons } from '@expo/vector-icons';
import styles from '../assets/style/global';
import KeyboardAvoidWrapper from '../components/keyboardAvoidWrapper/KeyboardAvoidWrapper';
import axios from 'axios';
import { baseUrl } from '../api/baseUrl';

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState({message: "", type: ""})

    const handleLogin = (credentials, setSubmitting) => {
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
    return (
      <KeyboardAvoidWrapper>
  
      <View style={styles.container}>
        {/* <Text>The way </Text> */}
        <StatusBar style="dark" />
        <View style={styles.inncontainer}>
          <Image style={styles.pageLogo} source={require('../assets/logo.png')} />
          <Text style={styles.pageTitle}>Antwaters</Text>
          <Text style={styles.subTitle}>Account Login</Text>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, {setSubmitting}) =>{

              if(values.email == "" || values.password == ""){
                handleMessage("please fill all fields")
                setSubmitting(false)
              }else{
                handleLogin(values, setSubmitting)
              // navigation.navigate("Dashboard", {name: "morris menanya", email: "emmiemenz@gmail.com"})

              }
              // console.log(values)
          
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
              <View  style={styles.formArea}>
                <MyTextInput
                  label="Email Address"
                  icon="mail"
                  placeholder="Enter email"
                  placeholderTextColor={colors.darklight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder="********"
                  placeholderTextColor={colors.darklight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <Text style={[styles.msgBox, message.type == "SUCCESS" ? styles.msgBoxSuccess : styles.msgBoxError]}>{message.message}</Text>
  
                { !isSubmitting && <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>}      
                { isSubmitting && <TouchableOpacity style={styles.button} disabled={true}>
                  <ActivityIndicator size={"large"}/>
                </TouchableOpacity>}
                <View style={styles.line} />
                <TouchableOpacity style={[styles.button, styles.buttonGoogle]}>
                  <Fontisto name="google" color={colors.primary} size={25} />
                  <Text style={styles.buttonText}>Sign in with Google</Text>
                </TouchableOpacity>
                <View style={styles.extraView}>
                  <Text style={styles.extraText}>Don't have an account?</Text>
                  <TouchableOpacity style={styles.textLink}>
                    <Text style={styles.textLinkContent}
                    onPress={() => navigation.navigate("Signup")}>Sign up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
  </KeyboardAvoidWrapper>
  
    );
  };

  const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => (
    <View style={{ marginBottom: 20 }}>
      <View style={styles.leftIcon}>
        <Octicons name={icon} size={30} color={colors.brand} />
      </View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.textInput} {...props} />
      {isPassword && (
        <TouchableOpacity
          onPress={() => setHidePassword(!hidePassword)}
          style={styles.rightIcon}
        >
          <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={colors.darklight} />
        </TouchableOpacity>
      )}
    </View>
  );

  export default Login;


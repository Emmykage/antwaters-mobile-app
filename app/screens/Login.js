import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../assets/config/colors';
import { Formik } from 'formik';
import { Fontisto, Ionicons, Octicons } from '@expo/vector-icons';
import styles from '../assets/style/global';
import KeyboardAvoidWrapper from '../components/keyboardAvoidWrapper/KeyboardAvoidWrapper';

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
  
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
            onSubmit={(values) =>{
              console.log(values)
              navigation.navigate("Welcome")
          
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
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
                <Text style={styles.msgBox}>...</Text>
  
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
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


import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from '../assets/style/global'


const Welcome = ({navigation}) => {

    return (
    <View style={styles.welcomeContainer}>
        <StatusBar style="light"/>
        <View style={styles.welcomeInnercontainer}>
           
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Image style={styles.welcomeImage} resizeMode='cover' source={require("../assets/logo.png")}/>
                    <Text  style={{textAlign: 'center', fontSize: 40}}> Welcome Buddy</Text>
                    <Text style={[styles.subTitle, styles.welcomePageTitle]}> Olga Simpson </Text>
                    <Text style={[styles.subTitle, styles.welcomePageTitle]}> emmiemenz@gmail,com </Text>


                        <View style={styles.formArea}>
                        <Image style={styles.avatar} resizeMode='cover' source={require("../assets/logo.png")}/>

                           
                        <View style={styles.line}/>

                            <TouchableOpacity style={styles.button}>
                                <Text 
                                onPress={() => {navigation.navigate("Login")}
                                }
                                style={styles.buttonText}>
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

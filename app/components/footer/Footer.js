import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../assets/config/colors'
import { AntDesign, Entypo, Feather, FontAwesome5, FontAwesome6, MaterialIcons } from '@expo/vector-icons';

const Footer = () => {
  return (
  <View style={styles.navWrapper}>
        
            <TouchableOpacity style={styles.navItem}> 
            <Feather name="home" size={24} color="black" />
            <Text>Seacrh</Text>


            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}> 
            <Feather name="search" size={24} color="black" />
            <Text>Seacrh</Text>


            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}> 
            <MaterialIcons name="emergency-recording" size={24} color="black" />                
            <Text>One to One</Text>


            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}> 
            <FontAwesome6 name="laptop-medical" size={24} color="black" />
               <Text>Appointment</Text>


            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}> 
                <Feather name="user" size={24} color="black" />
                <Text>Account</Text>


            </TouchableOpacity>
        </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    navBar: {
        marginTop: "auto",

    },
    navWrapper:  {
        flexDirection: "row",
        paddingVertical: 2,
        borderTopColor:colors.darklight,
        borderTopWidth: 1,
        paddingTop: 10,
        justifyContent: "space-between",
        gap: 1,
        marginTop: "auto"
    },
        line: {
        //   height: 1,
        //   width: '100%',
        //   backgroundColor: colors.darklight,
        //   marginVertical: 10,
        },
    navItem: {
       justifyContent: "center" ,
       padding: 4,
        borderWidth: 1,
        borderColor: "white",
       alignItems: "center"
    }
})
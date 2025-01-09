import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import globalStyles from "../assets/style/global"
import colors from '../assets/config/colors'
import { AntDesign, Entypo, Feather, FontAwesome5, FontAwesome6, MaterialIcons } from '@expo/vector-icons';

const BookAppointment = () => {
    const items = [{
        title: "General Practioner",
        info: "78 Doctors available",
        icon: "plus-square",
        id: 1
    },{
        title: "Child Specialists",
        info: "139 available doctors",
        icon: "child",
        id: 2


    },{
        title: "Brain Specialist",
        info: "78 Doctors available",
        icon: "brain",
        id: 3


    },{
        title: "Heart Specialist",
        info: "78 Doctors available",
        icon: "heartbeat",
        id: 4


    },
    {
        title: "Lung Specialist",
        info: "78 Doctors available",
        icon: "lungs",
        id: 5


    },
    {
        title: "Eye Specialist",
        info: "78 Doctors available",
        icon: "eye",
        id: 6



    },
    {
        title: "Female Reproductive Specialist",
        info: "78 Doctors available",
        icon: "heartbeat",
        id: 7


    },
    {
        title: "Dental Care Specialist ",
        info: "78 Doctors available",
        icon: "female",
        id: 8


    },]
  return (
    <ScrollView  style={[globalStyles.container, styles.container]}>
<StatusBar
        backgroundColor="black" // Set background color
        barStyle="dark-content"  // Options: 'default', 'light-content', 'dark-content'
      />
        <View style={styles.banner}>
            <View style={styles.top}>

            </View>
            <View style={styles.heroIcon}>
                <AntDesign  name="calendar" style={styles.iconImage} size={70}  height={100} width={100}  backgroundColor="#7EB5CC" color="white" />            
                

            </View>
            <View style={styles.bottom}>
              
                <Text style={styles.bannerTitle}>BookAppointment</Text>

                <Text style={styles.bannerInfo}>Choose a Specialisation</Text>
            </View>

        </View>
        <View style={styles.innContainer}>
            <View style={{backgroundColor: "white", marginVertical: 10}}>
            
                <View style={styles.iconLeft}>
                    <FontAwesome5 name="search" size={30} color="black" />
                </View>
                    
                <TextInput
                style={styles.searchInput}
                placeholder='Doctors, syptoms, hospital...'
                />
            </View>
            <View style={styles.specialistContainer}>
            {items.map(item => (
                <View key={item.id} style={styles.itemList}>
                    <FontAwesome5 name={item.icon} size={24} color="#7EB5CC" />

                    <View style={styles.item}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemInfo}>{item.info}</Text>
                    </View>
                      <TouchableOpacity>
                           <AntDesign name="right" size={16} color="black" />
                        </TouchableOpacity>
                </View>
            ))}
            {/* <View>
                <View>
                    <Text>General Practitioner</Text>
                    <Text>General Practitioner</Text>
                </View>
            </View> */}
            </View>
        </View>
    </ScrollView>
  )
}

export default BookAppointment

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        flex: 1, 
        paddingHorizontal: 0
    },
    innContainer: {
        paddingHorizontal: 25,
        // flex: 1
    }, 
    banner: {
        height: 280,
        // backgroundColor: colors.darklight,
        position: "relative"

    },
    bannerTitle: {
        fontSize: 21,
        // fontWeight: 700,
        marginTop: 30,
        fontFamily: "poppins-regular",
        // backgroundColor: "red"
    },
    bannerInfo: {
        fontSize: 16,
        // fontWeight: 700,
        color: colors.dark
    },
    top: {
        height: 140,
        backgroundColor: colors.skyBlue,
        // backgroundColor: "red",


    },  
    bottom: {
        height: 140,
        justifyContent: "center",
        alignItems: "center"

        

    },
    heroIcon: {
        width: 140,
        height: 140,
        backgroundColor: "white",
        borderRadius: 100,
        top: 70,
        alignSelf: "center",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center"
    },
    searchInput: {
        backgroundColor: "#F8F7F7",
        padding: 15,
        height: 60,
        fontSize: 16,
        marginVertical: 3,
        paddingLeft: 55,
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 15

    },
    iconLeft: {
        position: "absolute",
        zIndex: 1,
        left: 10,
        top: 20
    },
    specialistContainer: {
        // flex: 1,
        // backgroundColor: colors.skyBlue
    },
    item: { 
        marginVertical: 6,
        flex: 1,

    }, 
    itemList: { 
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 4,
        paddingVertical: 2,
        gap: 20
        
    },
    itemTitle: {
        fontWeight: 700,
        fontSize: 16,
        marginVertical: 6
        
    } ,
      itemInfo: {
        fontWeight: 500,
        fontSize: 14
        
    }
    ,
    iconImage: {
        padding: 15,
        borderRadius: 50,
        // fontSize: 40,
        // width: 80,
        // height: 80,
        // justifyContent: 'center',
        // alignItems: "center"

    }
})
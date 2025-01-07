import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../assets/style/global'
import {AntDesign, Entypo, FontAwesome, FontAwesome6, Octicons } from "@expo/vector-icons"
import colors from '../assets/config/colors'
const Dashboard = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
        <View style={styles.userContent}>
            <View>
                <Text style={styles.userInfo}>Hi Morris</Text>
                <Text style={styles.userSubInfo}>How are you feeling today?</Text>
            </View>
            {/* <View>
               Notice
            </View>        */}
        </View>


      <View style={styles.cardSlider}>
        <View style={{backgroundColor: "#cce9e1"}}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Healthyaasasa Habits, Stronger Teams: </Text>
            <Text style={styles.cardTitle}>The Path to sustainable Productivity </Text>

    <View style={styles.flexApart}>
    <Text style={styles.cardLink}>Times and tickets </Text>

    <AntDesign name="arrowright" size={20} color="black" />
    </View>
        </View>
        </View>
        <View style={{backgroundColor: "#857255"}}>
            <View style={styles.card}>
            <Text>Healthy Habits, Stronger Teams: </Text>
            <Text>The Path to sustainable Productivity </Text>
            </View>
        </View>

        <View style={{backgroundColor: "gray"}}>
            <View style={styles.card}>
            <Text>Healthy Habits, Stronger Teams: </Text>
            <Text>The Path to sustainable Productivity </Text>
            </View>
        </View>
      </View>

      <View style={styles.listContainer}>
      <View style={styles.list}>
          <View style={[styles.iconWrapper, styles.iconWrapperDarkGreen]}>
            <AntDesign  name="calendar" size={36} alignItems="center"  color="white" />            
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.listHeader}>Book an Appointment</Text>
            <Text style={styles.listText}>Find a Doctor</Text>
          </View>
          <View style={{width: 20}}>
            <AntDesign name="right" size={24} color="black" />
          </View>
             
        </View> <View style={styles.list}>
          <View style={[styles.iconWrapper, styles.iconWrapperPink]}>
            <Entypo name="chat" size={36} color="#119ABC" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.listHeader}>Request Consultations</Text>
            <Text style={styles.listText}>Talk to a specialist</Text>
          </View>
          <View style={{width: 20}}>
            <AntDesign name="right" size={24} color="black" />
          </View>
             
        </View>
        <View style={styles.list}>
          <View style={[styles.iconWrapper, styles.iconWrapperLightFreen]}>
            <FontAwesome6 name="house-signal" size={36} color="red" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.listHeader}>Locate a Pharmacy</Text>
            <Text style={styles.listText}>Purchase Medicine</Text>
          </View>
          <View style={{width: 20}}>
            <AntDesign name="right" size={20} color="black" />
          </View>
             
        </View>
        <View style={styles.list}>
          <View style={[styles.iconWrapper, styles.iconWrapperDarkGreen]}>
            <FontAwesome name="ambulance" size={36} color="#FFF41B" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.listHeader}>Emergency</Text>
            <Text style={styles.listText}>Request an Ambulance</Text>
          </View>
          <View style={{width: 20}}>
            <AntDesign name="right" size={24} color="black" />
          </View>
             
        </View>
        
      </View>
      <View>
        <Text style={styles.appointmentContainerHeader}>Upcoming Appointments</Text>
        <View style={styles.appointmentContainer}>
          <Image resizeMode='cover' style={styles.avatar}  source={require("../assets/images/provider-image.png")} />
          <View>
          <Text style={{color: "#969696"}}>Video Consultation</Text>
          <Text style={{fontWeight: "700",  marginTop: 10, marginBottom: 10}}>Dr.Chinedu Achebe</Text>
          <Text style={{color: "#8c8c8c"}}>Thursday 29th October, 2:30pm  (45 minutes)</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  iconWrapper: {
    height: 65, // Set the height for the container
    width: 65,  // Set the width for the container
    backgroundColor: '#0a545b', // Apply background color to the container
    justifyContent: 'center', // Center the icon vertically
    alignItems: 'center', // Center the icon horizontally
    borderRadius: 100, // Optional: make it circular
    marginRight: 10
  }, 
  iconWrapperPink: {
    backgroundColor: "#eecdcd"
  },
  iconWrapperLightFreen: {
    backgroundColor: "#65c592",
    color: "#FFF41B"

  },
  iconWrapperDarkGreen: {
    backgroundColor: "#0a545b",
    color: "#FFF41B"
  },
  
  flexApart: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "20",
  }
  ,
  
  listContainer: {
    paddingTop: "20",
    paddingBottom: "20"
  }
  ,
  list: {
    flexDirection: 'row', // Align children side by side
    alignItems: 'center',
    overflow: "hidden",
    marginTop: 10,
    marginBottom: 20
  },
  listHeader: {
    fontWeight: "700",
    fontSize: 20

  },
  listText: {
    fontWeight: "600",
    fontSize: 16,
    color: "gray"

  },
  textContainer: {
    flex: 1, // Allow the text container to grow
  },
  cardSlider: {
    backgroundColor: "gray",  
    overflow: "scroll",
    flexDirection: "row"},
  userContent: {
    marginBottom: 10
  },
  cards: {
    backgroundColor: "yellow"
  },
  userInfo: {
    fontSize: 30,
    fontWeight: "600"
  },
  userSubInfo: {
    fontSize: 16,
    fontWeight: "400"
  },
    card: {
      padding: 29,
      backgroundColor: "#EBFCFF",
    }, 
    cardTitle: {
      fontSize: 20,
      fontWeight: "700"


    },
    cardText: {
      fontSize: 20,
      fontWeight: "700"
      

    },
    cardLink: {
      fontSize: 16,
      fontWeight: "500",
      color: 'green'
      

    },
        avatar: {
          width: 100,
          height: 100,
          borderRadius: 50,
          borderWidth: 2,
          borderColor: colors.secondary,
  
        },
        appointmentContainerHeader: {
          fontWeight: "700",
          fontSize: 18,
          marginBottom: 10
        },
        appointmentContainer: {
          flexDirection: "row",
          gap: 10
        }
})
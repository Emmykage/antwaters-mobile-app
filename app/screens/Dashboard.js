import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../assets/style/global'

const Dashboard = ({navigation}) => {
  return (
    <View style={[globalStyles.container, {style: {backgroundColor: "red"}}]}>
        <View style={styles.userContent}>
            <View>
                <Text style={styles.userInfo}>Hi Morris</Text>
                <Text style={styles.userSubInfo}>How are you feeling today?</Text>
            </View>
            <View>
               Notice
            </View>       
        </View>


      <View style={styles.cardSlider}>
        <View style={{backgroundColor: "green"}}>
            <View style={styles.card}>
            <Text>Healthy Habits, Stronger Teams: </Text>
            <Text>The Path to sustainable Productivity </Text>
            </View>
        </View>
        <View style={{backgroundColor: "blue"}}>
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

      <View>
      <View>
            <Text>Book an Appointment</Text>
            <Text>Find a Doctor</Text>
        </View>
        <View>
            <Text>Request Consultation</Text>
            <Text>Talk to a specialist</Text>
        </View> 
        <View>
            <Text>Locate a Pharmacy</Text>
            <Text>Purchase Medicine</Text>
        </View>
      </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
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
      padding: 20,
      // flex: 1
    }, 
    title: {

    }
})
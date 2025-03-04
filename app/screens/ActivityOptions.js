import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../assets/style/global'
import {AntDesign, Entypo, FontAwesome} from "@expo/vector-icons"
import Footer from '../components/footer/Footer'
import SearchComponent from '../components/search/SearchComponent'
const ActivityOptions = () => {
    const items = [{
        id: 1,
        title: "Book an appointment",
        hint: "find a doctor",
        bgColor: "#ACE5EF",
        icon: "calendar",
        iconBg: "#920F0F",
        iconText: "white"
    },
    {
        id: 2,
        title: "Request a Consultation",
        hint: "Talk to a specialist", 
        bgColor: "#E9E9E8",
        icon: "wechat",
        iconBg: "#F6C6E1",
        iconText: "#119ABC"
    },
    {
        id: 3,
        title: "Find a Health Center",
        hint: "find the nearest clinic",
        bgColor: "#DCF7E1",
        icon: "plus",
        iconBg: "#fff",
        iconText: "#7EB5CC"

    },
    {
        id: 4,
        title: "Locate a Pharmacy",
        hint: "Puchase a medicine",
        bgColor: "#F6E8FC",
        icon: "location-arrow",
        iconBg: "#FFC19C",
        iconText: "#AF0C0C"

    },
    {
        id: 5,
        title: "Order a Lab Test",
        hint: "Get Test at home",
        bgColor: "#FFD4D4",
        icon: "hospital-o",
        iconBg: "#920F0F",
        iconText: "white"

    },
    {
        id: 6,
        title: "Emergency Situation",
        hint: "Request  an ambulance",
        bgColor: "#F6FAE0",
        icon: "ambulance",
        iconBg: "#0A545B",
        iconText: "#FFF41B"

    }]
  return (
    <View style={globalStyles.container}>
        <SearchComponent/>
      <View  style={styles.innerContainer}>
        {items.map(item => (
            <View key={item.id} style={[styles.card, {backgroundColor: item.bgColor}]}>
                <View style={[styles.icon, {backgroundColor: item.iconBg}]}>

                    <FontAwesome  name={item.icon} size={30} padding={"4"} width={35} height={35}  color={item.iconText} />
                </View>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.hintText}>{item.hint}</Text>

            </View>
        ))}
        
      </View>

      <Footer/>
    </View>
  )
}

export default ActivityOptions

const styles = StyleSheet.create({
    innerContainer: {
        flexWrap: "wrap",
        rowGap: 10,
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-between"
    }, 
    card: {
        padding: 20,
        height: 200,
        width: "48%",
    },
    icon: {
        marginBottom: 10,
        borderRadius: 50,
        backgroundColor: "red",
        justifyContent: "center",
        width: 45,
        height: 45,
        alignItems: "center",
    },
    titleText: {
        fontSize: 20,
        fontWeight: 600
    },
    hintText: {
        fontSize: 14
    }
})
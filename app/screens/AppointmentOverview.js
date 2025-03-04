import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../assets/style/global'
import {AntDesign, Entypo, FontAwesome} from "@expo/vector-icons"
import { CalendarBody, CalendarContainer, CalendarHeader } from '@howljs/calendar-kit'
import Footer from '../components/footer/Footer'
import colors from '../assets/config/colors'
import { PieChart, ProgressChart } from 'react-native-chart-kit'

const AppointmentOverview = () => {
    const items =[
        {
            id: 1,
            icon: "menu",
            stat: 209,
            hint: "All appointment"
        },
        {
            id: 2,
            icon: "menu",
            stat: 8,
            hint: "New"
        },
        {
            id: 3,
            icon: "menu",
            stat: 209,
            hint: "Today"
        },
        {
            id: 4,
            icon: "menu",
            stat: 209,
            hint: "All appointment"
        },
    ]
    const data = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.4, 0.6, 0.8]
      };

      const chartConfig={
        backgroundColor: "blue",
        backgroundGradientFrom: "gray",
        backgroundGradientTo: "gray",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }
  return (
    <View style={globalStyles.container}>
        <View style={styles.header}>
            <Text style={{width: "auto",fontWeight: 500 }}>Appointment Overview</Text>

            <View style={styles.location}>
                <FontAwesome  name={"location-arrow"} size={30} padding={"4"} width={35} height={35}  color={"black"} />
                
                <Text style={{width: "auto", fontWeight: 600, color: "gray"}}>Lagos, NG</Text>

            </View>

        </View>
        <View style={styles.scrollViewContainer}>

        <ScrollView  horizontal showsHorizontalScrollIndicator={false}  style={styles.overviewWrapper}>
            <View style={styles.overviewCard}>
                <AntDesign  name={"menu-fold"} size={40} padding={"4"}  color={"black"} />

                <View>
                    <Text style={styles.overviewStat}>209</Text>
                    <Text style={styles.overviewTitle}>All Appointments</Text>
                </View>
            </View>
            <View style={[styles.overviewCard, styles.blue]}>
            <Entypo name="users" size={24} color="black" />
                {/* <AntDesign  name={"menu-fold"} size={40} padding={"4"}  color={"black"} /> */}

                <View>
                    <Text style={styles.overviewStat}>8</Text>
                    <Text style={styles.overviewTitle}>New</Text>
                </View>
            </View>
            <View style={[styles.overviewCard, styles.purple]}>
                <AntDesign  name={"calendar"} size={40} padding={"4"}  color={"black"} />
                <View>
                    <Text style={styles.overviewStat}>209</Text>
                    <Text style={styles.overviewTitle}>Today</Text>
                </View>
            </View>
            <View style={[styles.overviewCard, styles.yellow]}>
                <AntDesign  name={"menu-fold"} size={40} padding={"4"}  color={"black"} />

                <View>
                    <Text style={styles.overviewStat}>81</Text>
                    <Text style={styles.overviewTitle}>Canceled</Text>
                </View>
            </View>
        </ScrollView>
        </View>

        <View style={{backgroundColor: "blue", flex: 1}}>
            {/* <View>
                <Text>
                    Hey
                </Text>
            </View> */}
        <CalendarContainer>
            <CalendarHeader />
            <CalendarBody />
        </CalendarContainer>
        </View>
        <View style={styles.appointmentContainer}>
            <View style={styles.sides}>
                <View>

                </View>

                <Text style={{width: "auto",fontWeight: 500, marginVertical: 10  }}>Appointment Booked</Text>
                        <View style={{backgroundColor: "white", height: ""}}>
                            <View style={styles.booked}>
                                <Image style={styles.avatar} source={require("../assets/images/provider-image.png")} />
                                <View>
                                    <Text style={{width: "auto", color: "#666666", fontWeight: 500}}>VIdeo Consultation</Text>
                                    <Text style={{width: "auto",color: "black", fontWeight: 600,  fontWeight: 500, marginVertical: 6  }}>Dr. Chinedu Achebe</Text>
                                    <Text style={{width: "auto", color: "#666666",  fontWeight: 600 }}>Thurday 19 Feburary</Text>
                                    <Text style={{width: "auto", color: "#666666", fontWeight: 500 }}>2:30pm (45 Minutes)</Text>

                                </View>
                            </View>
                        </View>
                        <View style={{backgroundColor: "", marginTop: 10, height: "%"}}>
                            <View style={styles.booked}>
                                <Image style={styles.avatar} source={require("../assets/images/provider-image.png")} />
                                <View>
                                    <Text style={{width: "auto", color: "#666666", fontWeight: 500}}>VIdeo Consultation</Text>
                                    <Text style={{width: "auto",color: "black", fontWeight: 600,  fontWeight: 500, marginVertical: 6  }}>Dr. Chinedu Achebe</Text>
                                    <Text style={{width: "auto", color: "#666666",  fontWeight: 600 }}>Thurday 19 Feburary</Text>
                                    <Text style={{width: "auto", color: "#666666", fontWeight: 500 }}>2:30pm (45 Minutes)</Text>

                                </View>
                            </View>
                        </View>
            </View>
            <View style={[styles.sides, {backgroundColor: "", justifyContent: "center", alignItems: "center"} ]}>
            <ProgressChart
                data={data}
                width={200}
                height={150}
                strokeWidth={6}
                radius={14}
                chartConfig={chartConfig}
                hideLegend={true}
                paddingLeft={2}
                style={{
                    margin: "auto"
                }}
                />
            </View>

        </View>
        <Footer/>

    </View>
  )
}

export default AppointmentOverview

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10

    },
    location: {
        flexDirection: "row",
        alignItems: "center",
        width: "auto",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 30,
        paddingHorizontal: 10
    },
    scrollViewContainer: {
        height: 80
    },
    overviewWrapper: {
        flexDirection: "row",
        gap: 10,
        height:20
        // overflow: 'scroll'
    },
    overviewCard: {
        height: 80,
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: "#CBF9F0",
        flexDirection:"row",
        gap: 10,
        alignItems: "center",
        minWidth: 140,
        marginRight: 10
    },

    overviewTitle: {
        fontWeight: 500,
        fontSize: 16,

    },
    overviewStat: {
        fontWeight: 400,
        fontSize: 19
    },
    purple: {
        backgroundColor: "#FEDEF0",
        color: "black"
    },
    blue: {
        backgroundColor: "#C8D6FF",
        color: "black"
    }
,
yellow: {
    backgroundColor: "#F7E8CC",
    color: "black"
}
,booked: {
    flexDirection: "row",
    gap: 5,
    // backgroundColor: "green"
},
    avatar: {
            width: 40,
            height: 40,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: colors.secondary,
    
        },
        appointmentContainer: {
            height: 250,
            flexDirection: "row",
        // flex: 1

    },
    sides: {
        flex: 1,
        // backgroundColor: "red"
    }




    
})
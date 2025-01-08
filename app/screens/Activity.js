import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import globalStyles from '../assets/style/global'
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import colors from '../assets/config/colors';

const Activity = () => {
  return (
    <View style={globalStyles.container}> 
        <View style={{backgroundColor: "white"}}>
            <View style={styles.iconLeft}>
            <FontAwesome5 name="search" size={30} color="black" />
            </View>
                
                <TextInput
                style={styles.searchInput}
                placeholder='Doctors, syptoms, hospital...'
                />

        </View>
        <View style={styles.infoContainer}>
            <View style={styles.infoPrescription}>
                <View style={styles.infoHeader}>
                    <Text style={styles.infoHeaderText}>Currents Prescriptions</Text>
                    <Entypo name="dots-three-horizontal" size={24} color="black" />

                </View>
                <View>
                    <View style={styles.listItem}>
                        <View style={styles.listIcon}></View>
                        <View>
                            <Text style={styles.listTextTitle}>Amiiodipine</Text>
                            <Text style={styles.listText}>5mg</Text>
                            <Text style={styles.listText}>1x per day</Text>
                        </View>
                    </View>
                    <View style={styles.listItem}>
                        <View style={styles.listIcon}></View>
                        <View>
                            <Text style={styles.listTextTitle}>Metformin</Text>
                            <Text style={styles.listText}>5mg</Text>
                            <Text style={styles.listText}>1x per day</Text>
                        </View>
                    </View>
                    <View style={styles.listItem}>
                        <View style={styles.listIcon}></View>
                        <View>
                            <Text style={styles.listTextTitle}>Atorvastatin</Text>
                            <Text style={styles.listText}>5mg</Text>
                            <Text style={styles.listText}>1x per day</Text>
                        </View>
                    </View>
                    <View style={styles.listItem}>
                        <View style={styles.listIcon}></View>
                        <View>
                            <Text style={styles.listTextTitle}>Metformin</Text>
                            <Text style={styles.listText}>5mg</Text>
                            <Text style={styles.listText}>1x per day</Text>
                        </View>
                    </View>
                </View>

            </View>
     
        </View>

        <View style={styles.overview}>
            <Text style={{fontWeight: "700"}}>Health Overview</Text>
            <View>
                <View style={styles.overviewInfo}>
                    <View >
                        <Text style={{fontSize: 25}}>115</Text>
                        <Text style={{fontSize: 13}}>mg/dl</Text>
                 

                    </View>
                     <Text style={{color: "blue"}}>blood Sugar</Text>
                </View>
                <View style={styles.overviewInfo}>
                    <View>
                        <Text style={{fontSize: 25}}>115</Text>
                        <Text style={{fontSize: 13}}>mg/dl</Text>
                 

                    </View>
                     <Text style={{color: "blue"}}>blood Sugar</Text>
                </View>
                <View style={styles.overviewInfo}>
                    <View>
                        <Text style={{fontSize: 25}}>115</Text>
                        <Text style={{fontSize: 13}}>mg/dl</Text>
                 

                    </View>
                     <Text style={{color: "blue"}}>blood Sugar</Text>
                </View>
                <View style={styles.overviewInfo}>
                    <View>
                        <Text style={{fontSize: 25}}>115</Text>
                        <Text style={{fontSize: 13}}>mg/dl</Text>
                 

                    </View>
                     <Text style={{color: "blue"}}>blood Sugar</Text>
                </View>
            </View>

        </View>

        <View style={styles.activityDisplay}>
            <View style={styles.infoHeader}>
                <Text style={styles.infoHeaderText}>Upcoming appointments</Text>
                <Entypo name="dots-three-horizontal" size={24} color="black" />

            </View>
            <View>
                <View style={styles.eventItem}>
                    <Image style={styles.avatar} source={require("../assets/images/provider-image.png")}/>

                    <View>
                        <Text>Dr Chinedu Achebe</Text>
                        <Text>Primary CAre Physician</Text>

                    </View>
                    <AntDesign name="checkcircleo" size={24} color="black" />
                </View>
                <View style={styles.eventItem}>
                <Image style={styles.avatar} source={require("../assets/images/provider-image.png")}/>

                    <View>
                        <Text>Dr Chinedu Achebe</Text>
                        <Text>Primary CAre Physician</Text>

                    </View>
                    <AntDesign name="checkcircleo" size={24} color="black" />
                </View>
            </View>
      
        </View>
    </View>
  )
}

export default Activity

const styles = StyleSheet.create({
    searchInput: {
        backgroundColor: "#F8F7F7",
        padding: 15,
        height: 60,
        fontSize: 16,
        marginVertical: 4,
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

    infoContainer: {
        // flexDirection: "row"
        marginVertical: 7

    },
    infoHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "red",
        marginVertical: 10
    },
    infoHeaderText: {
        // flexDirection: "row",
        // backgroundColor: "red"
        // flex: 1
        fontWeight: "800",
        fontSize: 16

    },
    infoPrescription: {
        backgroundColor: "#EBFCFF",
        padding: 10,
    height: 300,
    overflow: "scroll"

    },
    infoNotification: {
        backgroundColor: "#EBFCFF"
    },

    list: {

    }
    ,
    listItem: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 10
    },
    listIcon: {
        width: 15,
        height: 15,
        marginTop: 10,
        borderRadius: 100,
        backgroundColor: "#88D760"
    },
    listTextTitle: {
        fontWeight: "700",
        color: colors.textDark,
        fontSize: 17
    },
    listText: {
        color: colors.textGray
    }
    ,
    overview: {
        backgroundColor: "#EBFCFF",
        padding: 10
    },
    overviewWrapper: {
        backgroundColor: "red"
    },
    overviewInfo: {
        backgroundColor: "red"
    },
    avatar: {
            width: 60,
            height: 60,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: colors.secondary,
    
        },

        activityDisplay: {
            backgroundColor: "green"
        },
        activityDisplayHeader: {
            flexDirection: "row",
            backgroundColor: "blue"
        },
        eventItem: {
            flexDirection: "row",
            gap: 10,
            marginVertical: 6
        }
})
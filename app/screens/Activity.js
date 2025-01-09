import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import globalStyles from '../assets/style/global'
import { AntDesign, Entypo, Feather, FontAwesome5, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import colors from '../assets/config/colors';
import Footer from '../components/footer/Footer';

const Activity = () => {
  return (
    <View style={globalStyles.container}> 
       <View>
            <Text style={{fontWeight: 700, fontSize: 20}}>Search</Text>
        </View>
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
            <Text style={{fontWeight: "700", marginVertical: 4}}>Health Overview</Text>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <View style={styles.overviewInfo}>
                    <View >
                        <Text style={styles.overviewStat}>115</Text>
                        <Text style={{fontSize: 13, textAlign: "center"}}>mg/dl</Text>
                 

                    </View>
                     <Text style={{color: "blue"}}>blood Sugar</Text>
                </View>
                <View style={styles.overviewInfo}>
                    <View>
                        <Text style={styles.overviewStat}>96</Text>
                        <Text style={{fontSize: 13, textAlign: "center"}}>bmp</Text>
                 

                    </View>
                     <Text style={{color: "blue"}}>blood Sugar</Text>
                </View>
                <View style={styles.overviewInfo}>
                    <View>
                        <Text style={styles.overviewStat}>135/85</Text>
                        <Text style={{fontSize: 13, textAlign: "center"}}>mmHg</Text>
                 

                    </View>
                     <Text style={{color: "blue"}}>blood Sugar</Text>
                </View>
                <View style={styles.overviewInfo}>
                    <View>
                        <Text style={styles.overviewStat}>79.5</Text>
                        <Text style={{fontSize: 13, textAlign: "center"}}>kg</Text>
                 

                    </View>
                     <Text style={{color: "blue"}}>blood Sugar</Text>
                </View>
            </View>

        </View>

        <View style={styles.activityDisplay}>
            <View style={styles.activityGrid}>

                <View style={styles.infoHeader}>
                    <Text style={styles.infoHeaderText}>Upcoming appointments</Text>
                    <Entypo name="dots-three-horizontal" size={20} color="black" />

                </View>
                <View>
                    <View style={styles.eventItem}>
                        <Image style={styles.avatar} source={require("../assets/images/provider-image.png")}/>

                        <View style={{flex: 1}}>
                            <Text style={styles.eventText1}>Dr Chinedu Achebe</Text>
                            <Text style={styles.eventText1}>Primary Care Physician</Text>

                        </View>
                        <AntDesign name="checkcircleo" size={20} color="white" backgroundColor="#1EB40D" height="20" width="20" style={styles.checkIcon} />
                    </View>
                    <View style={styles.eventItem}>
                        <Image style={styles.avatar} source={require("../assets/images/provider-image.png")}/>

                        <View style={{flex: 1}}>
                            <Text style={styles.eventText1}>Dr Chinedu Achebe</Text>
                            <Text style={styles.eventText1}>Primary CAre Physician</Text>

                        </View>
                        <AntDesign name="checkcircleo" size={20} color="white" backgroundColor="#1EB40D" height="20" width="20" style={styles.checkIcon} />
                    </View>
                </View>
            </View>
            <View style={styles.activityGrid}>

                <View style={styles.infoHeader}>
                    <Text style={styles.infoHeaderText}>Doctor’s Notes</Text>
                    <Entypo name="dots-three-horizontal" size={14} color="black" />

                </View>
                <View>
                    <View style={styles.eventItem}>
                       <Text style={styles.eventText}>
                             Continue walking 15 minutes daily to help with blood sugar levels.
                        </Text>
                     </View>
                 
                </View>
            </View>

        </View>

        {/* <View style={styles.navBar}>
            <View style={styles.line}/>     


      
        </View> */}
<Footer/>


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
    checkIcon: {
        borderRadius: 50
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
        marginVertical: 12
    },
    infoHeaderText: {
        // flexDirection: "row",
        // backgroundColor: "red"
        // flex: 1
        fontWeight: "800",
        fontSize: 13,
        color: colors.textDark

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
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    overviewWrapper: {
        // backgroundColor: "red"
    },
    overviewInfo: {
        // backgroundColor: "red",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    overviewStat: {
        fontWeight: "bold",
        fontSize: 30
    },
    avatar: {
            width: 40,
            height: 40,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: colors.secondary,
    
        },

        activityDisplay: {
            // backgroundColor: "green",
            marginVertical: 10,
            flexDirection: "row",
            gap: 10,
            borderColor: "red"

        },
        activityGrid: {
            backgroundColor: colors.skyBlue,
            padding: 5,
            flex: 1
        },
        activityDisplayHeader: {
            flexDirection: "row",
            backgroundColor: "blue"
        },
        eventItem: {
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
            marginVertical: 6
        },
        eventText: {
            color: colors.textDark,
            fontWeight: 600
        },
        eventText1: {
            color: colors.textDark,
            fontWeight: 600,
            fontSize: 12
        },
      
})
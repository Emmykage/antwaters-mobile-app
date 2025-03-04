import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {FontAwesome5} from "@expo/vector-icons"

const SearchComponent = () => {
  return (
    <View>
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
    </View>
  )
}

export default SearchComponent

const styles = StyleSheet.create({
    iconLeft: {
        position: "absolute",
        zIndex: 1,
        left: 10,
        top: 20
    },
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
})
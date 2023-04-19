import React from "react";
import { ScrollView } from "react-native";
import ScrollGraphProps from "../components/ScrollGraphProps"
import Styles from "../styles/Styles"
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = "@savedGraphData"

const GraphsScreen = () => {

// get data from async storage
// const getData = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem(STORAGE_KEY)
//     console.log("Haettu: ", jsonValue)
//     return jsonValue != null ? JSON.parse(jsonValue) : null;
//   } catch(e) {
//     // error reading value
//   }
// }

// paska = getData()
// console.log(typeof paska)

const n = 71;
// let filledArray = new Array(n).fill("30.3.2023");

// const arrayN = Array(n).fill('n').map((v,i)=>i+1);
let arrayN = [60.0, 61.0, 61.2, 61.2, 63.0, 64.2, 60.0, 61.0, 61.2]
// filledArray contains dates for each data point in arrayN
let filledArray = ["1.1.2023", "2.1.2023", "3.1.2023","4.1.2023", "5.1.2023", "6.1.2023", "7.1.2023", "8.1.2023", "9.1.2023", ]
    return (
        <ScrollView style={Styles.container}>
            <ScrollGraphProps GraphName={"Weight"} DataUnitsType="kg" dataPointDates={filledArray} mainDataPoints={arrayN}/>
            <ScrollGraphProps GraphName={"Bench"} DataUnitsType="kg" dataPointDates={["30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023","30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023","30.3.2023","30.3.2023","30.3.2023",]} mainDataPoints={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, ]}/>
            {/* <ScrollGraphProps GraphName={"Joku1"} DataUnitsType="cm" dataPointDates={["30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023","30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023",]} mainDataPoints={[60, 61, 62, 60, 60, 61, 62, 60, 60, 61, 62, 60, ]}/> */}
            {/* <ScrollGraphProps GraphName={"Joku2"} DataUnitsType="kg" dataPointDates={["30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023","30.3.2023", "30.3.2023", "30.3.2023", "30.3.2023",]} mainDataPoints={[60, 61, 62, 60, 60, 61, 62, 60, 60, 61, 62, 60, ]}/> */}
        </ScrollView>
    )
 }

export {GraphsScreen}
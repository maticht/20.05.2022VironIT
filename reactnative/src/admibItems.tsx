import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button} from "react-native";
import {itmList} from "../Basket";

export const AdminItems = ({user,num}) => {
    return(
        <TouchableOpacity>
            <View style = {styles.userBlock}>
                <View style = {styles.userBox}>
                    <View>
                        <Text style = {styles.text}>{user}</Text>
                    </View>
                    <View style = {styles.check}>
                        <Text style = {styles.textA}>Amount:</Text>
                        <Text style = {styles.textNum}>{num}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    check: {
        flexDirection:"row",
        alignItems:'center',
    },
    showHide:{
        flex:1,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'flex-end'
    },
    userBox:{
        flex:1,
        alignItems:'center',
        flexDirection:"row",
        justifyContent:'space-between'


    },
    userBlock: {
        flex:1,
        alignItems:'center',
        flexDirection:"row",
        marginHorizontal:20,
        padding:10,
        borderColor:'#A9A9A9',
        borderWidth:1,
        borderRadius:5,
        marginBottom:5,
    },
    textNum:{
        marginVertical:2,
        fontSize:16,
        fontWeight:"600",
        marginLeft:8
    },
    text :{
        fontSize:16,
        marginVertical:2,
        marginLeft:8
    },
    textA :{
        marginVertical:2,
        marginLeft:8,
        color: "#666"
    },
})
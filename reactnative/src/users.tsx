import React, {useState} from 'react'
import {itmList} from "../Basket";
import {View, Text, StyleSheet, TouchableOpacity, Button} from "react-native";

export const Users = ({user}) => {
    const [buy, setBuy] = useState('')
    const add = () => {
        itmList.push({id: itmList.length + 1, name: user})
        setBuy('Added to cart')
    }

    return(
        <TouchableOpacity>
            <View style = {styles.userBlock}>
                <View style = {styles.userBox}>
                    <View>
                        <Text style = {styles.text}>{user}</Text>
                    </View>
                    <Text style = {styles.buyText}>{buy}</Text>
                    <View style = {styles.check}>
                        <Button color='black' title=' Add ' onPress ={add}></Button>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
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
    text :{
        fontSize:16,
        marginVertical:2,
        marginLeft:8
    },
    buyText:{
       opacity:0.2,
        fontSize:20,
        marginRight:10
    }
})
import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from "react-native";
import {itmList} from "../Basket";

export const CartItems = ({user,num}) => {
    let count = itmList.reduce(function (itmArr, itm) {
        if (!itmArr.hasOwnProperty(itm.name)) {
            itmArr[itm.name] = 0;
        }
        itmArr[itm.name]++;
        return itmArr;
    }, {});
    let cartArr = Object.keys(count).map(function (name)
    {
        return {name:name, num: count[name]};
    });
    const [users, setUsers] = useState(cartArr)
    const add = () => {
        itmList.push({id: itmList.length + 1, name: user})
        console.log(users)
    }

    return(
        <TouchableOpacity>
            <View style = {styles.userBlock}>
                <View style = {styles.userBox}>
                    <View>
                        <Text style = {styles.text}>{user}</Text>
                    </View>
                    <View style = {styles.check}>
                    <Text style = {styles.textA}>Amount:</Text>
                        <TouchableHighlight onPress={add}>
                            <View style={styles.button}>
                                <Text style={styles.btnText}>-</Text>
                            </View>
                        </TouchableHighlight>
                    <Text style = {styles.textNum}>{num}</Text>

                        <TouchableHighlight onPress={add}>
                            <View style={styles.button}>
                                <Text style={styles.btnText}>+</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnText: {
        color:'#fff',
        fontWeight:'500',
        textTransform:'uppercase'
    },
    button: {
        width:25,
        height:25,
        alignItems: "center",
        backgroundColor: "#000",
        paddingVertical: 2,
    },
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
        marginHorizontal:8
    },
    text :{
        fontWeight:"500",
        fontSize:16,
        marginVertical:2,
        marginLeft:8
    },
    textA :{
        marginVertical:2,
        marginRight:8,
        color: "#666"
    },
})
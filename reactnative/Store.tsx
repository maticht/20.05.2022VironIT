import React, { useState} from "react";
import {StyleSheet, View, ScrollView, Button, Switch, Text, TouchableHighlight} from 'react-native';
import {Navbar} from './src/navbar'
import {Users} from "./src/users";

const Store = ({navigation}) => {
    const [showHide, setShowHide] = useState('buyer')
    const [nextPage, setNextPage] = useState('Basket')
    const [btnName, setBtnName] = useState('  Cart  ')
    const [users] = useState([{id:1, name:'Item 1'},
        {id:2, name:'Item 2'},
        {id:3, name:'Item 3'},
        {id:4, name:'Item 4'},
        {id:5, name:'Item 5'}])
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {setIsEnabled(previousState => !previousState);
        if(isEnabled){
            setShowHide('buyer')
            setNextPage('Basket')
            setBtnName('  Cart  ')
        }else{
            setShowHide('admin')
            setNextPage('AdminPage')
            setBtnName('Statistics')
        }
    };
    const next = () => {
        navigation.navigate(nextPage)
    }

    return (
        <View>
            <Navbar title = 'List of goods' />
            <View style={styles.topBar}>
                <TouchableHighlight onPress={next}>
                    <View style={styles.button}>
                        <Text style={styles.btnText}>{btnName}</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.switchBtn}>
                    <Text style={styles.switchText}>{showHide}</Text>
                    <Switch
                        trackColor={{ false: "#9A9A9A", true: "#666" }}
                        thumbColor={isEnabled ? "#000" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
            <ScrollView>
                {users.map(user => (
                    <Users user={user.name}/>
                ))}
            </ScrollView>
        </View>
    );
}
export default Store;

const styles = StyleSheet.create({
    switchText:{
        fontSize:15,
        fontWeight:'500',
        textTransform:'uppercase'
    },
    btnText: {
        fontSize:15,
        fontWeight:'500',
        color:'#fff',
        textTransform:'uppercase'
    },
    button: {
        width:120,
        alignItems: "center",
        backgroundColor: "#000",
        paddingVertical: 10,
    },
    topBar:{
        flexDirection:'row',
        justifyContent: "space-between",
        alignItems:'center',
        marginRight:20,
        marginLeft:20,
        marginVertical:10
    },
    container: {
        marginTop:15,
        paddingHorizontal:5
    },
    switchBtn: {
        flexDirection:'row',
        alignItems:'center'
    },
    centeredView: {
        justifyContent: "center",
    },
    userBox:{
        flex:1,
        alignItems:'center',
        flexDirection:"row",

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
        marginBottom:5
    },
    text :{
        marginVertical:2,
        marginLeft:8
    }
});
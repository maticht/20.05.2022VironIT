import React, {FC, useState} from "react";
import {StyleSheet, View, ScrollView, Button, Switch, Text} from 'react-native';
import {Navbar} from './src/navbar'
import {Users} from "./src/users";

const Store: FC = ({navigation}) => {
    const [showHide, setShowHide] = useState('buyer')
    const [nextPage, setNextPage] = useState('Basket')
    const [btnName, setBtnName] = useState('  Cart  ')
    const [users] = useState([{id:1, name:'item 1'},
        {id:2, name:'item 2'},
        {id:3, name:'item 3'},
        {id:4, name:'item 4'},
        {id:5, name:'item 5'}])
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
                <Button color='black' title={btnName} onPress ={next}></Button>
                <View style={styles.switchBtn}>
                    <Text>{showHide}</Text>
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
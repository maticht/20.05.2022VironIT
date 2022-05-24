import React, { useState} from "react";
import {StyleSheet, View, ScrollView, Button, Text, TouchableHighlight} from 'react-native';
import {Navbar} from './src/navbar'
import {AdminItems} from "./src/admibItems";
import {itmList} from "./Basket";

const AdminPage = () => {
    let counter1 = itmList.reduce(function (itmArr, itm) {
        if (!itmArr.hasOwnProperty(itm.name)) {
            itmArr[itm.name] = 0;
        }
        itmArr[itm.name]++;
        return itmArr;
    }, {});
    let result = Object.keys(counter1).map(function (name)
    {
        return {name:name, num: counter1[name]};
    });

    const [users, setUsers] = useState(result)

    const descendingSort = async () => {
        await setUsers([...result].sort((a,b) => b.num - a.num))
    }

    const ascendingSort = async () => {
       await setUsers([...result].sort((a,b) => a.num - b.num))
    }


    return (
        <View >
            <Navbar title="Admin Page" />
            <View style={styles.container}>
                <TouchableHighlight onPress={descendingSort}>
                    <View style={styles.button}>
                        <Text style={styles.btnText}>Descending Sort</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={ascendingSort}>
                    <View style={styles.button}>
                        <Text style={styles.btnText}>Ascending Sort</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <ScrollView>
                {users.map(user => (
                    <AdminItems user={user.name} num={user.num}/>
                ))}
            </ScrollView>
        </View>
    );
}
export default AdminPage;

const styles = StyleSheet.create({
    btnText: {
        fontSize:15,
        fontWeight:'500',
        color:'#fff',
        textTransform:'uppercase'
    },
    button: {
        width:150,
        alignItems: "center",
        backgroundColor: "#000",
        paddingVertical: 10,
    },
    container: {
        marginVertical:15,
        marginHorizontal:-5,
        flexDirection:'row',
        justifyContent:'space-around'
    }
});

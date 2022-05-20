import React, {FC, useState} from "react";
import {StyleSheet, View, ScrollView, Button} from 'react-native';
import {Navbar} from './src/navbar'
import {CartItems} from "./src/cartItems";
import {itmList} from "./Basket";

const AdminPage: FC = () => {
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
        setUsers(result.sort((a,b) => b.num - a.num))
    }

    const ascendingSort = () => {
        setUsers(result.sort((a,b) => a.num - b.num))
    }



    return (
        <View >
            <Navbar title="Admin Page" />
            <View style={styles.container}>
                <Button color='black' title='Descending Sort' onPress={descendingSort}></Button>
                <Button color='black' title='Ascending Sort' onPress={ascendingSort}></Button>
            </View>
            <ScrollView>
                {users.map(user => (
                    <CartItems user={user.name} num={user.num}/>
                ))}
            </ScrollView>
        </View>
    );
}
export default AdminPage;

const styles = StyleSheet.create({
    container: {
        marginVertical:15,
        marginHorizontal:-17,
        flexDirection:'row',
        justifyContent:'space-around'
    }
});

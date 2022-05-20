import React, {FC, useState} from "react";
import {StyleSheet, View, Button, ScrollView} from 'react-native';
import {Navbar} from './src/navbar'
import {CartItems} from "./src/cartItems";

export const itmList = [];
const Basket: FC = () => {
    let counter = itmList.reduce(function (itmArr, itm) {
        if (!itmArr.hasOwnProperty(itm.name)) {
            itmArr[itm.name] = 0;
        }
        itmArr[itm.name]++;
        return itmArr;
    }, {});
    let cartArr = Object.keys(counter).map(function (name)
    {
        return {name:name, num: counter[name]};
    });
    const [users, setUsers] = useState(cartArr)

    return (
        <View >
            <Navbar title="Ordering" />
            <View style={styles.container}>
            </View>
            <ScrollView>
                {users.map(user => (
                    <CartItems user={user.name} num={user.num}/>
                ))}
            </ScrollView>
        </View>
    );
}
export default Basket;

const styles = StyleSheet.create({
    container: {
        marginTop:15,
        paddingHorizontal:5
    }
});

import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import allCartItems from "../data/cart.json";
import CartItem from "../components/CartItem";
import { colors } from "../global/colors.js";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = allCartItems.reduce((acc, currentItem)=> acc += (currentItem.quantity * currentItem.price), 0)
    setTotal(total);
    setCartItems(allCartItems);
  }, []);

  return (
    <View style={styles.headerContainer}>
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartItem item={item} />}
                keyExtractor={(cartItem) => cartItem.id}
                style={styles.flatList}
            />
            <View style={styles.checkoutContainer}>
                <Text style={styles.totalText}>Total: {total}$</Text>
            </View>
        </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: colors.grayScale0,
    },
    container: {
        flex: 1,
        width: "80%",
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    flatList: {
        flexGrow: 1,
        width: '100%',
    },
    checkoutContainer:{
        width: 300, 
        alignItems: 'center',
        backgroundColor: colors.grayScale2,
    },
    totalText: {
        fontFamily: 'oswaldBold',
        fontSize: 18,
        color: colors.mustard0
    }
    
});
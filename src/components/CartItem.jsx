import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from "../global/colors.js"
import Card from './Card'
import Counter from './Counter.jsx'
import { increment, decrement } from "../features/counter/counterSlice";
import { useDispatch } from "react-redux";


const CartItem = ({item}) => {
  const dispatch = useDispatch();

  return (
    <Card style={styles.cartContainer}>
      <Image
        style={styles.image}
        source={{ uri: item.images[0] }}
        resizeMode="cover"
      />
      <View style={styles.column}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>Brand: {item.brand}</Text>
        <Text style={styles.text}>Price: {item.price}$</Text>
        <Text style={styles.text}>Qty: {item.quantity}</Text>
        {/*<Counter
          count={item.quantity}
          onIncrement={() => dispatch(increment())}
          onDecrement={() => dispatch(decrement())}
        />*/} 
      </View>
    </Card>
  )
}

export default CartItem

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 25,
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: colors.grayScale2
  },
  column: {
    flexDirection: 'column'
  },
  text: {
    fontSize: 14,
    marginLeft: "4%",
    width: "100%",
    color: "white",
    textAlign: "left",
    fontFamily: "oswaldRegular",
  },
  image: {
    width: 100,
    height: 100,
  },
})
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors.js"
import Card from './Card'

const OrderItem = ({ item }) => {
  const total = item.items.reduce(
    (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
    0
  );

  return (
    <Card style={styles.orderContainer}>
      <Text style={styles.text}>Order: {item.id}</Text>
      <Text style={styles.text}>Created at: {new Date(item.createdAt).toLocaleString()}</Text>
      <Text style={styles.text}>Total: {total}$</Text>
    </Card>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderContainer: {
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 25,
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: colors.grayScale2
  },
  text: {
    fontSize: 14,
    marginLeft: "4%",
    width: "100%",
    color: "white",
    textAlign: "left",
    fontFamily: "oswaldRegular",
  }
});

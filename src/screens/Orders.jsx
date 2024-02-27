import { FlatList, StyleSheet, Text, View } from "react-native";
import orders from "../data/orders.json";
import OrderItem from "../components/OrderItem";
import { colors } from "../global/colors.js";

const Orders = () => {
  return (
    <View style={styles.headerContainer}>
        <View style={styles.container}>
          <FlatList
            data={orders}
            renderItem={({ item }) => <OrderItem item={item} />}
            keyExtractor={(order) => order.id}
            style={styles.flatList}
          />
        </View>
    </View>
  );
};

export default Orders;

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
});

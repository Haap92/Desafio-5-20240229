import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors.js"

const Counter = (count, onIncrement, onDecrement) => {

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable  onPress={onDecrement} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.spanInput}>{count}</Text>
        <Pressable onPress={onIncrement} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  button: {
    padding: 10,
    width: 25,
    height: 25,
    backgroundColor: colors.mustard0,
    alignContent: "center",
    justifyContent: "center"
  },
  spanInput: {
    width: 25,
    height: 25,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "oswaldRegular",
    color: "white"
  },
  buttonText: {
    alignContent: "center",
    fontSize: 16,
    fontFamily: "oswaldRegular",
    color: "white",
  },
});

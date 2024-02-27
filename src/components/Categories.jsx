import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

const Categories = ({ navigation }) => {
  const categories = useSelector((state) => state.shopReducer.value.categories);
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <CategoryItem navigation={navigation} category={item} />
      )}
      keyExtractor={(category) => category}
      numColumns={1}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
  },
});

export default Categories;

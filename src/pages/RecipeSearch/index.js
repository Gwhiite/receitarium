import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { getData, storeJSONData } from "../../utils/storage";
import { categoryItems, getMeal, searchMeal } from "../../services/meals";

export default function RecipeSearch({ navigation }) {
  const [meals, setMeals] = useState(null)

  async function buildList() {
    let type = await getData("listType")

    if (type === 'search') {
      let query = await getData("keyword")

      const fetchedMeals = await searchMeal(query)
      setMeals(fetchedMeals)
    } else {
      let query = await getData("category")

      const fetchedMeals = await categoryItems(query.replace(/"/g, ""))
      setMeals(fetchedMeals)
    }
  }

  async function goToRecipe(recipe) {
    const meal = await getMeal(recipe);
    await storeJSONData("currentRecipe", meal);
    navigation.navigate("Receita");
  }

  useEffect(() => {
    buildList()
  }, [meals])

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={styles.box3}>
            <Text style={styles.title}>Receitas</Text>
          </View>
          <View style={styles.box7}>
            { meals ? meals.map(meal => (
              <Pressable style={styles.box6} onPress={() => goToRecipe(meal.idMeal)}>
              <Image
                style={styles.img3}
                source={{uri:meal.strMealThumb}}></Image>
              <Text style={styles.box6Text}>{meal.strMeal}</Text>
            </Pressable>
            )) : <></>}
            
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    gap: 32,
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  box3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sideText: {
    fontSize: 14,
    color: "#AA3700",
  },
  img3: {
    height: 90,
    maxWidth: 185,
  },
  box6: {
    overflow: "hidden",
    height: 120,
    width: 145,
    backgroundColor: "#FFDBCF",
    borderRadius: 16,
  },
  box6Text: {
    color: "#380D00",
    fontSize: 12,
    padding: 8,
  },
  box7: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    paddingBottom: 8,
  },
});

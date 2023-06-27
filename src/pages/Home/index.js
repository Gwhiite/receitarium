import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Button,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { storeJSONData, storeData } from "../../utils/storage";

import { getCategories, getMeal } from "../../services/meals";

const Home = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [recommended, setRecommended] = useState([]);
  let searchQuery

  const default_recipes = [52960, 52831, 53010, 52931, 52795];

  const setCats = async () => {
    if (categories.length == 0) {
      let categories = await getCategories();
      setCategories(categories);
    }
  };

  const getRecomended = async () => {
    const recommendedMeals = [];
    for (const mealID of default_recipes) {
      const meal = await getMeal(mealID);
      recommendedMeals.push(meal);
    }

    setRecommended(recommendedMeals);
  };

  async function goToRecipe(recipe) {
    await storeJSONData("currentRecipe", recommended[recipe]);
    navigation.navigate("Receita");
  }

  async function goToList(category) {
    await storeData("listType", "category");
    await storeData("category", category);
    navigation.navigate("Lista")
  }

  async function goToListSearch() {
    await storeData("listType", "search");
    await storeData("keyword", searchQuery);
    navigation.navigate("Lista")
  }

  useEffect(() => {
    setCats();
    getRecomended();
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Vamos preparar algo !</Text>
            <View style={styles.input}>
              <TextInput
                placeholderTextColor={"#380D00"}
                style={styles.inputText}
                onChangeText={n => searchQuery = n}
                placeholder="Procurar receita ou categoria"></TextInput>
              <Pressable onPress={() => goToListSearch()}>
                <Feather name="search" size={18} color="black" />
              </Pressable>
            </View>
          </View>
          {recommended[2] ? (
            <Pressable onPress={() => goToRecipe(4)}>
              <Text style={styles.title}>Receita do dia</Text>
              <View style={styles.box1}>
                <View style={styles.box2}>
                  <Text style={styles.box2Title}>{recommended[4].strMeal}</Text>
                  <Text style={styles.box2Text}>
                    Chicken handi is a South Asian boneless chicken curry with
                    smooth tomato-onion gravy combined with a creamy base.
                  </Text>
                </View>
                <Image
                  style={styles.img}
                  source={{ uri: recommended[4].strMealThumb }}></Image>
              </View>
            </Pressable>
          ) : (
            <></>
          )}
          <View>
            <View style={styles.box3}>
              <Text style={styles.title}>Categorias</Text>
            </View>
            <ScrollView horizontal={true}>
              <View style={styles.box4}>
                {categories.length != 0 ? (
                  categories?.map((cat) => (
                    <Pressable
                      onPress={() => goToList(cat.name)}
                      style={styles.box5}
                      key={`cat-${cat.id}`}>
                      <Image
                        style={styles.img2}
                        source={{ uri: cat.img }}></Image>
                      <Text style={styles.box2Title}>{cat.name}</Text>
                    </Pressable>
                  ))
                ) : (
                  <></>
                )}
              </View>
            </ScrollView>
          </View>
          <View>
            <View style={styles.box3}>
              <Text style={styles.title}>Sugestões</Text>
            </View>
            <View style={styles.box7}>
              {recommended[0] ? (
                <Pressable style={styles.box6} onPress={() => goToRecipe(0)}>
                  <Image
                    style={styles.img3}
                    source={{ uri: recommended[0].strMealThumb }}></Image>
                  <Text style={styles.box6Text}>{recommended[0].strMeal}</Text>
                </Pressable>
              ) : (
                <></>
              )}
              {recommended[1] ? (
                <Pressable onPress={() => goToRecipe(1)} style={styles.box6}>
                  <Image
                    style={styles.img3}
                    source={{ uri: recommended[1].strMealThumb }}></Image>
                  <Text style={styles.box6Text}>{recommended[1].strMeal}</Text>
                </Pressable>
              ) : (
                <></>
              )}
              {recommended[2] ? (
                <Pressable onPress={() => goToRecipe(2)} style={styles.box6}>
                  <Image
                    style={styles.img3}
                    source={{ uri: recommended[2].strMealThumb }}></Image>
                  <Text style={styles.box6Text}>{recommended[2].strMeal}</Text>
                </Pressable>
              ) : (
                <></>
              )}
              {recommended[3] ? (
                <Pressable onPress={() => goToRecipe(3)} style={styles.box6}>
                  <Image
                    style={styles.img3}
                    source={{ uri: recommended[3].strMealThumb }}></Image>
                  <Text style={styles.box6Text}>{recommended[3].strMeal}</Text>
                </Pressable>
              ) : (
                <></>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

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
  title: {
    fontSize: 16,
    fontWeight: 500,
    paddingBottom: 8,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#FFDBCF",
    borderRadius: 16,
  },
  inputText: {
    fontSize: 16,
    color: "#380D00",
  },
  img: {
    width: 140,
    height: "100%",
  },
  box1: {
    flexDirection: "row",
    backgroundColor: "#FFDBCF",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  box2: {
    width: 190,
    padding: 16,
    gap: 16,
  },
  box2Title: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 500,
    color: "#380D00",
  },
  box2Text: {
    fontSize: 12,
    lineHeight: 16,
    color: "#380D00",
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
  box4: {
    flexDirection: "row",
    gap: 10,
  },
  box5: {
    backgroundColor: "#FFDBCF",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    width: 100,
    gap: 4,
  },
  img2: {
    width: 80,
    height: 60,
  },
  img3: {
    height: 90,
    width: 145,
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
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default Home;

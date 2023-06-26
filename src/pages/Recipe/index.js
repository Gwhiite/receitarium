import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather, Entypo } from "@expo/vector-icons";
import { getJSONData } from "../../utils/storage";

export default function Recipe({ navigation }) {
  const [recipe, setRecipe] = useState(null);

  const loadRecipe = async () => {
    const loadedRecipe = await getJSONData("currentRecipe");
    const l = parseRecipe(loadedRecipe);
    setRecipe(l);
  };

  const parseRecipe = (rawRecipe) => {
    const recipe = {
      name: rawRecipe.strMeal,
      img: rawRecipe.strMealThumb,
      category: rawRecipe.strCategory,
      ingredients: [],
      tutorial: rawRecipe.strYoutube,
    };

    for (let a = 1; a < 20; a++) {
      if (rawRecipe[`strIngredient${a}`] == "") continue;
      recipe.ingredients.push({
        ing: rawRecipe[`strIngredient${a}`],
        qtd: rawRecipe[`strMeasure${a}`],
      });
    }

    return recipe;
  };

  async function openTutorial(url) {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  useEffect(() => {
    loadRecipe();
  }, []);

  return (
    recipe && (
      <ScrollView>
        <Image style={styles.img} source={{ uri: recipe.img }} />
        <View style={styles.container}>
          <View style={styles.box1}>
            <View>
              <Text style={styles.title}>{recipe.name}</Text>
              <Text style={styles.subTitle}>{recipe.category}</Text>
            </View>
            <Feather name="heart" size={24} color="black" />
          </View>
          <View style={styles.box2}>
            <View style={styles.box3}>
              <Feather name="thermometer" size={24} color="#380d00" />
              <Text style={styles.box3Text}>Fácil</Text>
            </View>
            <View style={styles.box3}>
              <Feather name="clock" size={24} color="#380d00" />
              <Text style={styles.box3Text}>20 minutos</Text>
            </View>
          </View>
          {/* <View>
          <Text style={styles.box4Title}>Porções</Text>
          <View style={styles.box4}>
            <Feather name="minus-circle" size={40} color="#aa3700" />
            <Text style={styles.box4Text}>4</Text>
            <Feather name="plus-circle" size={40} color="#aa3700" />
          </View>
        </View> */}
          <View>
            <Text style={styles.box4Title}>Ingredientes</Text>
            <View style={styles.box5}>
              {/* <Pressable onPress={() => navigation.navigate("Ingrediente")}>
              <Text style={styles.input}>8 ovos</Text>
            </Pressable> */}
              {recipe?.ingredients ? (
                recipe?.ingredients.map((ing) => (
                  <Text style={styles.input}>{`${ing.qtd} ${ing.ing}`}</Text>
                ))
              ) : (
                <></>
              )}
            </View>
          </View>
          <Pressable
            style={styles.box6}
            onPress={() => openTutorial(recipe.tutorial)}>
            <Entypo name="controller-play" size={24} color="white" />
            <Text style={styles.box6Text}>Ir ao tutorial</Text>
          </Pressable>
        </View>
      </ScrollView>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: "#f5f5f5",
    gap: 32,
    padding: 16,
    marginTop: 150,
  },
  img: {
    position: "absolute",
    resizeMode: "cover",
    width: "100%",
    height: 200,
  },
  box1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
  },
  subTitle: {
    fontSize: 12,
  },
  box2: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  box3: {
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    maxHeight: 80,
    width: 160,
    backgroundColor: "#ffdbcf",
    borderRadius: 16,
  },
  box3Text: {
    fontSize: 14,
    fontWeight: 500,
    color: "#380d00",
  },
  box4: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 18,
  },
  box4Title: {
    fontSize: 16,
    fontWeight: 500,
    paddingBottom: 8,
  },
  box4Text: {
    fontSize: 14,
    fontWeight: 500,
    color: "#380d00",
    width: 30,
    height: 30,
    borderRadius: 8,
    borderColor: "#380d00",
    borderWidth: 2,
    textAlign: "center",
    textAlignVertical: "center",
  },
  box5: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
  box6: {
    backgroundColor: "#aa3700",
    borderRadius: 16,
    paddingBottom: 16,
    paddingTop: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    flexDirection: "row",
  },
  box6Text: {
    fontSize: 16,
    fontWeight: 500,
    color: "#fff",
  },
  input: {
    fontSize: 14,
    fontWeight: 500,
    padding: 10,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 16,
  },
});

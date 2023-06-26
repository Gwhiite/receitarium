import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { storeData, getData } from "../../utils/storage";

export default function Collection({ navigation }) {
  const [recipe, setRecipe] = useState(null);

  async function getSavedRecipes() {
    console.log("called");
    const recipeRAW = await getData("recipe");
    if (!recipeRAW) return;

    const recipeParsed = JSON.parse(recipeRAW);

    setRecipe(recipeParsed);
  }

  useEffect(() => {
    getSavedRecipes();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={styles.box3}>
            <Text style={styles.title}>Favoritas</Text>
          </View>
          <View style={styles.box7}>
            <View style={styles.box6}>
              <Image
                style={styles.img3}
                source={require("./pao-de-queijo.jpg")}></Image>
              <Text style={styles.box6Text}>Pão de queijo</Text>
            </View>
            <View style={styles.box6}>
              <Image
                style={styles.img3}
                source={require("./empada.jpg")}></Image>
              <Text style={styles.box6Text}>Empada</Text>
            </View>
            <View style={styles.box6}>
              <Image
                style={styles.img3}
                source={require("./pastel-de-carne.jpg")}></Image>
              <Text style={styles.box6Text}>Pastel de carne</Text>
            </View>
            <View style={styles.box6}>
              <Image
                style={styles.img3}
                source={require("./torta-de-frango.jpg")}></Image>
              <Text style={styles.box6Text}>Torta de frango</Text>
            </View>
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
    maxHeight: 90,
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

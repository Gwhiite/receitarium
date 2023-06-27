import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { storeData, getJSONData } from "../../utils/storage";

export default function Collection({ navigation }) {
  const [recipes, setRecipes] = useState(null);

  async function getSavedRecipes() {
    const recipes = await getJSONData("favorites");
    if (!recipes) return;

    setRecipes(recipes);
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
            {recipes ? recipes.map(rec => (
              <Pressable style={styles.box6} onPress={() => {}}>
                <Image
                  style={styles.img3}
                  source={{uri:rec.strMealThumb}}></Image>
                <Text style={styles.box6Text}>{rec.strMeal}</Text>
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

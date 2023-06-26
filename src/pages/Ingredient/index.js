import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { Feather, Entypo } from "@expo/vector-icons";

export default function Recipe({ navigation }) {
  return (
    <ScrollView>
      <Image style={styles.img} source={require("./ovos.jpg")} />
      <View style={styles.container}>
        <View style={styles.box1}>
          <View>
            <Text style={styles.title}>Ovo</Text>
            <Text style={styles.subTitle}>Valor de referência: 1 unidade</Text>
          </View>
        </View>

        <View>
          <Text style={styles.box4Title}>Ingredientes</Text>
          <View style={styles.box5}>
            <Text style={styles.input}>100 gramas</Text>
            <Text style={styles.input}>155 calorias</Text>
            <Text style={styles.input}>11g de gorduras</Text>
            <Text style={styles.input}>1.1g de carboidratos</Text>
            <Text style={styles.input}>13g de proteínas</Text>
          </View>
        </View>
        <View>
          <Text style={styles.box4Title}>Receitas com esse ingrediente</Text>
          <View style={styles.box7}>
            <Pressable
              onPress={() => navigation.navigate("Receita")}
              style={styles.box6}
            >
              <Image
                style={styles.img3}
                source={require("./torta-de-frango.jpg")}
              ></Image>
              <Text style={styles.box6Text}>Torta de frango</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
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
  },
  box5: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
  input: {
    fontSize: 14,
    fontWeight: 500,
    padding: 10,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 16,
  },
  img3: {
    height: 90,
    width: 185,
  },
  box6: {
    overflow: "hidden",
    height: 120,
    width: 185,
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
  },
});

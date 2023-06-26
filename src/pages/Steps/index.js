import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { Feather, AntDesign } from "@expo/vector-icons";

export default function Steps() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa
          felis, posuere sit amet interdum vitae, dignissim in nulla. Cras vitae
          magna et arcu rutrum molestie ac et nisl.
        </Text>
      </View>
      <View>
        <Text style={styles.box1Title}>Passo 1 de 6</Text>
        <View style={styles.box1}>
          <AntDesign name="stepbackward" size={24} color="#aa3700" />
          <AntDesign name="play" size={48} color="#aa3700" />
          <AntDesign name="stepforward" size={24} color="#aa3700" />
        </View>
      </View>
      <Text style={styles.box1Text}>Cronômetro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    gap: 32,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
    lineHeight: 24,
  },
  box1Title: {
    fontSize: 16,
    fontWeight: 700,
    paddingBottom: 16,
    textAlign: "center",
  },
  box1: {
    flexDirection: "row",
    gap: 40,
    alignItems: "center",
  },
  box1Text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
    color: "#aa3700",
  },
});

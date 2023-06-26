import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";

export default function AddIngredient({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Informações gerais</Text>
          <View style={styles.box1}>
            <TextInput style={styles.input} placeholder="Nome"></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Unidade de medida"
            ></TextInput>
            <TextInput style={styles.input} placeholder="Peso"></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Adicionar foto"
            ></TextInput>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Informações nutricionais</Text>
          <View style={styles.box1}>
            <TextInput style={styles.input} placeholder="Calorias"></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Carboidratos"
            ></TextInput>
            <TextInput style={styles.input} placeholder="Gorduras"></TextInput>
            <TextInput style={styles.input} placeholder="Proteínas"></TextInput>
          </View>
        </View>
        <Pressable style={styles.box6} onPress={() => navigation.goBack()}>
          <Text style={styles.box6Text}>Adicionar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    gap: 32,
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    paddingBottom: 8,
  },
  input: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderRadius: 4,
  },
  box1: {
    gap: 16,
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
});

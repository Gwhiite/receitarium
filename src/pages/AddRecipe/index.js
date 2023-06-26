import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import React, {useState} from "react";
import { Feather } from "@expo/vector-icons";
import { storeData, getData } from "../../utils/storage"

export default function AddRecipe({ navigation }) {
  const [recipe, setRecipe] = useState({})

  async function saveAndQuit() {
    console.log("called");
    await storeData("recipe", JSON.stringify(recipe))
    
    navigation.goBack()
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Informações gerais</Text>
          <View style={styles.box1}>
            <TextInput style={styles.input} placeholder="Nome" onChangeText={n => setRecipe({...recipe, name: n})}></TextInput>
            <TextInput style={styles.input} placeholder="Descrição" onChangeText={n => setRecipe({...recipe, desc: n})}></TextInput>
            <View style={styles.box2}>
              <TextInput style={styles.input} placeholder="Porções" onChangeText={n => setRecipe({...recipe, port: n})}></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Tempo de prep."
                onChangeText={n => setRecipe({...recipe, temp_prep: n})}
              ></TextInput>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Adicionar foto"
            ></TextInput>
            <View style={styles.box2}>
              <TextInput style={styles.input} placeholder="Fonte"></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Dificuldade"
                onChangeText={n => setRecipe({...recipe, dificuldade: n})}
              ></TextInput>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.title1}>Ingredientes</Text>
          <Text style={styles.subTitle}>
            Lembre de manter as unidades de medida consistentes !
          </Text>
          <View style={styles.box2}>
            <TextInput
              style={styles.input}
              placeholder="Nome do ingrediente"
              onChangeText={n => setRecipe({...recipe, temp_prep: n})}
            ></TextInput>
            <TextInput style={styles.input} placeholder="Gramas" onChangeText={n => setRecipe({...recipe, temp_prep: n})}></TextInput>
          </View>
          <Pressable
            style={styles.box4}
            onPress={() => navigation.navigate("Adicionar ingrediente")}
          >
            <Feather name="plus" size={20} color="#AA3700" />
            <Text style={styles.box4Text}>Adicionar novo ingrediente</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.title}>Passos</Text>
          <TextInput
            style={styles.input}
            placeholder="Texto do passo"
          ></TextInput>
          <View style={styles.box4}>
            <Feather name="plus" size={20} color="#AA3700" />
            <Text style={styles.box4Text}>Adicionar nova medida</Text>
          </View>
        </View>
        <Pressable style={styles.box6} onPress={saveAndQuit}>
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
  title1: {
    fontSize: 16,
    fontWeight: 500,
  },
  subTitle: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.5)",
    paddingBottom: 8,
  },
  box1: {
    gap: 16,
  },
  box2: {
    flexDirection: "row",
    gap: 16,
  },
  box4: {
    flexDirection: "row",
    gap: 12,
    paddingTop: 16,
  },
  box4Text: {
    fontSize: 14,
    fontWeight: 500,
    color: "#AA3700",
  },
  input: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderRadius: 4,
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

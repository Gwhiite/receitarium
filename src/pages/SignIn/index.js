import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import CheckBox from "expo-checkbox";

import { storeData, getData } from "../../utils/storage"

export default function Login({ navigation }) {
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [pass, setPass] = useState(null)

  async function Register() {
    await storeData("user", JSON.stringify({name, email, pass}))
    navigation.navigate("Login")
  }
  
  return (
    <ScrollView>
      <View style={styles.box}>
        <Text style={styles.title}>Criar uma conta</Text>
        <Text style={styles.subTitle}>
          Crie uma conta para conseguir salvar suas receitas e acessá-las de
          outros dispositivos !
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.box1}>
          <TextInput
            style={styles.input}
            placeholder="Primeiro nome"
            placeholderTextColor="#aa3700"
            onChangeText={n => setName(n)}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aa3700"
            onChangeText={n => setEmail(n)}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#aa3700"
            onChangeText={n => setPass(n)}
          ></TextInput>
          <View style={styles.boxCheck}>
            <CheckBox
              color="#aa3700"
              disabled={false}
              value={toggleCheckBox1}
              onValueChange={(newValue) => setToggleCheckBox1(newValue)}
            />
            <Text style={styles.boxCheckText}>Aceito os termos de serviço</Text>
          </View>
          <View style={styles.boxCheck}>
            <CheckBox
              color="#aa3700"
              disabled={false}
              value={toggleCheckBox2}
              onValueChange={(newValue) => setToggleCheckBox2(newValue)}
            />
            <Text style={styles.boxCheckText}>Receber emails promocionais</Text>
          </View>
          <Pressable
            style={styles.box2}
            onPress={() => Register()}
          >
            <Text style={styles.box2Text}>Registrar</Text>
          </Pressable>
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
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
    marginTop: 150,
  },
  box: {
    gap: 16,
    padding: 16,
    backgroundColor: "#aa3700",
    position: "absolute",
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  box1: {
    gap: 16,
  },
  box1Text: {
    fontSize: 14,
    fontWeight: 500,
    color: "#aa3700",
    textAlign: "right",
  },
  title: {
    fontSize: 36,
    color: "#fff",
  },
  subTitle: {
    fontSize: 16,
    color: "#fff",
  },
  box2: {
    backgroundColor: "#aa3700",
    borderRadius: 16,
    paddingBottom: 16,
    paddingTop: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    flexDirection: "row",
  },
  box2Text: {
    fontSize: 16,
    fontWeight: 500,
    color: "#fff",
  },
  box2Variation: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingBottom: 16,
    paddingTop: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    flexDirection: "row",
  },
  box2TextVariation: {
    fontSize: 16,
    fontWeight: 500,
    color: "#aa3700",
  },
  input: {
    borderRadius: 4,
    backgroundColor: "#ffdbcf",
    padding: 16,
    fontSize: 16,
  },
  boxCheck: {
    flexDirection: "row",
    gap: 10,
  },
  boxCheckText: {
    color: "#aa3700",
  },
});

import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert
} from "react-native";
import React from "react";
import { Feather, Entypo } from "@expo/vector-icons";

import { storeData, getData } from "../../utils/storage"

export default function Login({ navigation }) {
  let password, email = ""

  async function Login() {
    let userRAW = await getData("user")

    console.log(userRAW);
    if (!userRAW || userRAW === "") {
      Alert.alert('Erro!', 'Usuário não encontrado', [
        {text: 'OK', onPress: () => {}},
      ]);
      return
    }

    let user = JSON.parse(userRAW)
    if (user.pass == password) {
      navigation.navigate("Rota")
    } else {
      Alert.alert('Erro!', 'Usuário ou senha incorretos', [
        {text: 'OK', onPress: () => {}},
      ]);
    }
  }

  return (
    <ScrollView>
      <View style={styles.box}>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.subTitle}>
          Entre com a sua conta para acessar suas receitas e salvar muitas
          outras
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.box1}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aa3700"
            onChangeText={n => email = n}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#aa3700"
            onChangeText={n => password = n}
          ></TextInput>
          <Text style={styles.box1Text}>Esqueceu a senha ?</Text>
          <Pressable
            style={styles.box2}
            onPress={Login}
          >
            <Text style={styles.box2Text}>Entrar</Text>
          </Pressable>
          <Pressable
            style={styles.box2}
            onPress={() => navigation.navigate("Sign in")}
          >
            <Text style={styles.box2Text}>Criar conta</Text>
          </Pressable>
        </View>
        <View style={styles.box1}>
          <Pressable
            style={styles.box2Variation}
            onPress={() => navigation.navigate("Rota")}
          >
            <Text style={styles.box2TextVariation}>Entrar com o Google</Text>
          </Pressable>
          <Pressable
            style={styles.box2Variation}
            onPress={() => navigation.navigate("Rota")}
          >
            <Text style={styles.box2TextVariation}>Entrar com o Facebook</Text>
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
});

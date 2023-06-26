import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { storeData, getData } from "../../utils/storage"

export default function Profile() {
  const [user, setUser] = useState({})

  async function getUserData() {
    const raw = await getData("user")
    if (!raw) return

    const userP = JSON.parse(raw)
    setUser(userP)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.box}>
          <FontAwesome5 name="user-alt" size={24} color="black" />
          <Text style={styles.boxTitle}>{user?.name?.split(" ")[0]}</Text>
        </View>
        <View style={styles.box2}>
          <View style={styles.box3}>
            <Text style={styles.title}>Dados do usuário</Text>
            <Text style={styles.sideText}>Editar</Text>
          </View>
          <View>
            <Text style={styles.inputText}>Nome</Text>
            <Text style={styles.input}>{user?.name}</Text>
          </View>
          <View>
            <Text style={styles.inputText}>Email</Text>
            <Text style={styles.input}>{user?.email}</Text>
          </View>
          <View>
            <Text style={styles.inputText}>Senha</Text>
            <Text style={styles.input}>°°°°°°°°°°°°°°°°°</Text>
          </View>
        </View>
        <View style={styles.box2}>
          <View style={styles.box3}>
            <Text style={styles.title}>Preferências</Text>
            <Text style={styles.sideText}>Editar</Text>
          </View>
          <View>
            <Text style={styles.inputText}>Unidade de medida padrão</Text>
            <Text style={styles.input}>Sistema Internacional (gramas)</Text>
          </View>
        </View>
        <View style={styles.box2}>
          <View style={styles.box3}>
            <Text style={styles.title}>Conversões</Text>
            <Text style={styles.sideText}>Editar</Text>
          </View>
          <View>
            <Text style={styles.inputText}>Colher de sopa</Text>
            <Text style={styles.input}>15 mililitros</Text>
          </View>
          <View>
            <Text style={styles.inputText}>Colher de chá</Text>
            <Text style={styles.input}>5 mililitros</Text>
          </View>
          <View>
            <Text style={styles.inputText}>Xícara</Text>
            <Text style={styles.input}>240 mililitros</Text>
          </View>
          <View style={styles.box4}>
            <Feather name="plus" size={20} color="#AA3700" />
            <Text style={styles.box4Text}>Adicionar nova medida</Text>
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

  box: {
    justifyContent: "center",
    alignItems: "center",
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: 500,
  },
  box2: {
    gap: 8,
  },
  box3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box4: {
    flexDirection: "row",
    gap: 12,
  },
  box4Text: {
    fontSize: 14,
    fontWeight: 500,
    color: "#AA3700",
  },
  sideText: {
    fontSize: 14,
    color: "#AA3700",
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    paddingBottom: 8,
  },
  inputText: {
    fontSize: 12,
    paddingBottom: 2,
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

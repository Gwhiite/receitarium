import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Collection from "./pages/Collection";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#FFDBCF",
          borderTopColor: "transparent",
          height: 64,
          paddingBottom: 10,
          paddingTop: 10,
          justifyContent: "center",
        },
        headerTitle: "Receitarium",
        headerStyle: {
          backgroundColor: "#AA3700",
          height: 100,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: "#fff",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#380D00",
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={18} color={color} />
          ),
          tabBarLabelStyle: {
            fontWeight: 500,
            fontSize: 12,
            textAlign: "center",
          },
        }}
      />
      <Tab.Screen
        name="Coleção"
        component={Collection}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="book-open" size={18} color={color} />
          ),
          tabBarLabelStyle: {
            fontWeight: 500,
            fontSize: 12,
            textAlign: "center",
          },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="user-alt" size={16} color={color} />
          ),
          tabBarLabelStyle: {
            fontWeight: 500,
            fontSize: 12,
            textAlign: "center",
          },
        }}
      />
    </Tab.Navigator>
  );
}

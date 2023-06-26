import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "./src/routes";

import Recipe from "./src/pages/Recipe";
import Steps from "./src/pages/Steps";
import AddRecipe from "./src/pages/AddRecipe";
import AddIngredient from "./src/pages/AddIngredient";
import Ingredient from "./src/pages/Ingredient";
import Login from "./src/pages/Login";
import SignIn from "./src/pages/SignIn";
import RecipeSearch from "./src/pages/RecipeSearch";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#AA3700",
              height: 100,
            },
            headerTintColor: "#fff",
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#AA3700",
              height: 100,
            },
            headerTintColor: "#fff",
          }}
          name="Sign in"
          component={SignIn}
        />
        <Stack.Screen
          name="Rota"
          options={{ headerShown: false }}
          component={Routes}
        />
        <Stack.Screen
          name="RecipeSearch"
          options={{
            headerStyle: {
              backgroundColor: "#AA3700",
              height: 100,
            },
            headerTintColor: "#fff",
          }}
          component={RecipeSearch}
        />
        <Stack.Screen
          name="Receita"
          options={{
            headerStyle: {
              backgroundColor: "#AA3700",
              height: 100,
            },
            headerTintColor: "#fff",
          }}
          component={Recipe}
        />
        <Stack.Screen
          name="Passos"
          options={{
            headerStyle: {
              backgroundColor: "#AA3700",
              height: 100,
            },
            headerTintColor: "#fff",
          }}
          component={Steps}
        />
        <Stack.Screen
          name="Adicionar receita"
          options={{
            headerStyle: {
              backgroundColor: "#AA3700",
              height: 100,
            },
            headerTintColor: "#fff",
          }}
          component={AddRecipe}
        />
        <Stack.Screen
          name="Adicionar ingrediente"
          options={{
            headerStyle: {
              backgroundColor: "#AA3700",
              height: 100,
            },
            headerTintColor: "#fff",
          }}
          component={AddIngredient}
        />
        <Stack.Screen
          name="Ingrediente"
          options={{
            headerStyle: {
              backgroundColor: "#AA3700",
              height: 100,
            },
            headerTintColor: "#fff",
          }}
          component={Ingredient}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

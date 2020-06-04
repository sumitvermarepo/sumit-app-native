/** @format */

import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { store } from "./src/store";

import Home from "./src/components/Home";
import Login from "./src/components/Login.js";
import SignUp from "./src/components/SignUp.js";

import { Provider as ReduxProvider } from "react-redux";
import FriendList from "./src/components/FriendList";
import ChatList from "./src/components/ChatList";

const Stack = createStackNavigator();
function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "tomato" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Instagram" }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{ title: "SignUp" }}
        />
        <Stack.Screen
          name="friendlist"
          component={FriendList}
          options={{ title: "Your Friends" }}
        />
        <Stack.Screen
          name="chatList"
          component={ChatList}
          options={{ title: "Your Chatting" }}
        />
      </Stack.Navigator>
    </View>
  );
}

function ParentComponent() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ParentComponent;

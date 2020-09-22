import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import Home from "./components/Home";
import UdaciCards from "./components/UdaciCards";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="UdaciCards" component={UdaciCards} />
              <Stack.Screen name="AddCard" component={AddCard} />
              <Stack.Screen name="Quiz" component={Quiz} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

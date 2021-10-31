import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTaskScreen from "../screens/AddTaskScreen";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import { getHeaderTitle } from "@react-navigation/elements";
import MyHeader from "../components/MyHeader";
import colors from "../constant/colors";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerShown: false,
          title: "ToDoToday",
        }}
      />
      <Stack.Screen name="Tasks" component={AddTaskScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigation;

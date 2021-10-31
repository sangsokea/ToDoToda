import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingScreen from "../screens/SettingScreen";
import constant from "../constant/colors";
import { getHeaderTitle } from "@react-navigation/elements";
import MyHeader from "../components/MyHeader";

import ProfileLogo from "../../assets/images/profileLogo.png";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import StackNavigation from "./StackNavigation";
import AddTaskScreen from "../screens/AddTaskScreen";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Image source={ProfileLogo} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.textName}>Sang Sokea</Text>
          <Text style={styles.textEmail}>sangsokea109@gmail.com</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const drawerNaviagion = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return <MyHeader title={title} style={options.headerStyle} />;
          },
          drawerStyle: { opacity: 1, backgroundColor: "#eee" },
          drawerLabelStyle: {
            fontSize: 18,
            fontWeight: "700",
            color: "#363636",
          },
          headerStyle: {
            backgroundColor: "#2d3f9c",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTitleAlign: "center",
          drawerActiveTintColor: "blue",
          drawerInactiveTintColor: "#2d3f9c",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              height: 80,
              backgroundColor: constant.green,
            },
            title: "ToDoToday",
            drawerIcon: ({ color }) => (
              <MaterialIcons name="add-task" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerStyle: {
              height: 80,
              backgroundColor: constant.green,
            },
            drawerIcon: ({ color }) => (
              <MaterialIcons name="account-circle" size={28} color="black" />
            ),
          }}
        />

        <Drawer.Screen
          name="Tasks"
          component={AddTaskScreen}
          options={{
            headerStyle: {
              height: 80,
              backgroundColor: constant.green,
            },
            drawerIcon: ({ color }) => (
              <MaterialIcons
                name="featured-play-list"
                size={28}
                color="black"
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            headerStyle: {
              height: 80,
              backgroundColor: constant.green,
            },
            drawerIcon: ({ color }) => (
              <MaterialIcons name="settings" size={28} color="black" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  textContainer: {
    flexDirection: "column",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textName: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    padding: 5,
  },
  textEmail: {
    color: "black",
    padding: 5,
    fontWeight: "bold",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default drawerNaviagion;

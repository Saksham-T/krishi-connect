import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const tabData = [
  {
    name: "Home",
    component: Profile,
    iconName: "home",
  },
  {
    name: "Sell",
    component: Profile,
    iconName: "albums",
  },
  {
    name: "AI Chat",
    component: Profile,
    iconName: "chatbubbles",
  },
  {
    name: "Profile",
    component: Profile,
    iconName: "person",
  },
];

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          height: 60,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          elevation: 5, // Subtle shadow
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "#6c757d",
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "500",
          marginBottom: 7,
        },
      }}
    >
      {tabData.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={tab.iconName}
                size={focused ? 28 : 24} // Slight increase on active tab
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;

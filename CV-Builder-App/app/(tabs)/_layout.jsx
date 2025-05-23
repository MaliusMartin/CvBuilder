import {  Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect, Stack } from 'expo-router'
import icons from '../../constants/icons' 
import { StatusBar } from 'expo-status-bar';


const TabIcon = ({ icon, color, name, focused }) => (
  <View className="items-center justify-center mt-4 mb-4"  style={{ margin: 2, padding: 2 }}>
    <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="w-10 h-10" // Adjust the width and height as needed
    />
    <Text
      className={`${
        focused ? 'font-psemibold' : 'font-pbold'
      } font-xs`}
      style={{ color: color }}
    >
      {name}
    </Text>
  </View>
);

const Tabslayout = () => {
  return (
    <>
    
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#3C9EEA", //14a21f
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: "#161622",
            font: "psemibold",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 55, // Adjust the height as needed
          },
        }}
      >

       

<Tabs.Screen
          name='home'
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen
          name='mycv'
          options={{
            title: "My CV",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.notification}
                color={color}
                name="mycv"
                focused={focused}
              />
            )
          }}
        />


<Tabs.Screen
          name='notifications'
          options={{
            title: "Notifications",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.notification}
                color={color}
                name="Notifications"
                focused={focused}
              />
            )
          }}
        />


        <Tabs.Screen
          name='settings'
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.settings}
                color={color}
                name="Settings"
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen
          name='profile'
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
        />


      </Tabs>

    </>
  );
}

export default Tabslayout;
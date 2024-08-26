import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({focused }) => (
            <TabBarIcon name={focused ? 'business' : 'business-outline'} color='#46BDAD' />
          ),
        }}
      />
      <Tabs.Screen
        name="product"
        options={{
          title: 'Product',
          tabBarIcon: ({focused }) => (
            <TabBarIcon name={focused ? 'cart' : 'cart-outline'} color='#46BDAD' />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({focused }) => (
            <TabBarIcon name={focused ? 'information-circle' : 'information-circle-outline'} color='#46BDAD' />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({focused }) => (
            <TabBarIcon name={focused ? 'call' : 'call-outline'} color='#46BDAD' />
          ),
        }}
      />
    </Tabs>
  );
}

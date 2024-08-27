import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const items = [
  { name: 'Parker', description: 'Parker Hannifin is a global leader in motion and control technologies, offering a diverse range of products and services including hydraulic systems, seals, filtration, and more.' },
  { name: 'Haskel', description: 'Haskel is renowned for its high-pressure technology solutions, specializing in gas boosters, liquid pumps, and high-pressure systems for various industries.' },
  { name: 'Vee Lok', description: 'Vee Lok manufactures high-quality valves and fittings, catering to industries where precision and reliability are crucial, such as aerospace and oil & gas.' },
  { name: 'Enerpac', description: 'Enerpac offers a wide range of industrial tools and equipment, including hydraulic cylinders, pumps, and torque wrenches, designed for heavy-duty applications.' },
  { name: 'All Pax', description: 'All Pax is known for its innovative packaging solutions, particularly in the pharmaceutical and food industries, providing specialized machinery and services.' },
  { name: 'Jet Lube', description: 'Jet Lube produces lubricants, sealants, and anti-seize compounds, primarily serving the oilfield, water well, and industrial maintenance sectors.' }
];

export default function TabTwoScreen() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleItem = (item: string) => {
    setActiveItem(activeItem === item ? null : item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/logo.png')} />
      </View>
      <ScrollView style={styles.mainContainer}>
        {items.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => toggleItem(item.name)}>
            <ThemedView style={styles.item}>
              <ThemedText style={styles.itemText}>{item.name}</ThemedText>
              <Ionicons name={activeItem === item.name ? 'chevron-up' : 'chevron-down'} size={20} color="black" />
            </ThemedView>
            {activeItem === item.name && (
              <View style={styles.collapsibleContent}>
                <ThemedText style={styles.itemText}>{item.description}</ThemedText>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 20,
    width: '100%',
    padding: 12,
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    textAlign: 'left',
  },
  collapsibleContent: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  header: {
    backgroundColor: '#46BDAD',
    top: 0,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: '5%',
  },
});



import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, ScrollView, View, TouchableOpacity, Linking, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabFourScreen() {
  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/logo.png')} />
      </View>
      <ScrollView>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialItem} onPress={() => handlePress('https://www.instagram.com/partpetrokala')}>
            <Ionicons name="logo-instagram" size={32} color="#E1306C" />
            <Text style={styles.socialText}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialItem} onPress={() => handlePress('')}>
            <Ionicons name="logo-linkedin" size={32} color="#0A66C2" />
            <Text style={styles.socialText}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialItem} onPress={() => handlePress('mailto:Info@Partpetrokala.com')}>
            <Ionicons name="mail" size={32} color="#D44638" />
            <Text style={styles.socialText}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialItem} onPress={() => handlePress('https://partpetrokala.com')}>
            <Ionicons name="globe-outline" size={32} color="#46BDAD" />
            <Text style={styles.socialText}>Website</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contactContainer}>
          <TouchableOpacity onPress={() => handlePress('tel:+1234567890')}>
            <View style={styles.contactItem}>
              <Ionicons name="call" size={32} color="#4CAF50" />
              <Text style={styles.contactText}>021-66308682-3</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.contactItem}>
            <Ionicons name="location" size={32} color="#F44336" />
            <Text style={styles.contactText}>(Shadabad, Ahan Bazar, Baharan 1, Block 30, Number 6), Tehran, Iran</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#46BDAD',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  socialContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // This allows the items to wrap to the next line if needed
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  socialItem: {
    alignItems: 'center',
    margin: 10,
  },
  socialText: {
    marginTop: 5,
    fontSize: 14,
    color: '#000', // Adjust color as needed
  },
  contactContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
  },
});


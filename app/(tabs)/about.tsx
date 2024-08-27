import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabThreeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/logo.png')} />
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>About Part Petro Kala</Text>
        <Text style={styles.paragraph}>
          Part Petro Kala is a prominent industrial group in Iran, recognized for its extensive experience and expertise in supplying and manufacturing a wide range of industrial equipment. Established over 15 years ago, the company has become a leader in the oil, gas, petrochemical, and various other industrial sectors within the country.
        </Text>

        <Text style={styles.subtitle}>Products and Services</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>Industrial Testing Equipment:</Text> The company specializes in designing and manufacturing advanced testing benches for various valves, including safety valves, control valves, and vacuum pressure valves. These test benches meet international standards and are crucial for performing tests such as leak tests and pressure tests.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>Hydraulic Tools and Equipment:</Text> Part Petro Kala is an authorized distributor of ENERPAC hydraulic tools in Iran, offering a wide range of products like hydraulic pumps, jacks, and presses, supported by robust after-sales service, including warranties and repairs.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>Specialized Equipment Supply:</Text> The company supplies high-quality industrial tools and components from leading global brands, including compressors, flanges, and other precision tools essential for heavy industries.
        </Text>

        <Text style={styles.subtitle}>Commitment to Quality</Text>
        <Text style={styles.paragraph}>
          Part Petro Kala emphasizes quality and customer satisfaction, sourcing products from reputable international brands and providing comprehensive after-sales support. The company also offers training services to ensure clients can effectively utilize and maintain their equipment.
        </Text>

        <Text style={styles.subtitle}>Industries Served</Text>
        <Text style={styles.paragraph}>
          The company's clientele spans various heavy industries, including petrochemicals, oil and gas, steel, and cement, reflecting its capacity to meet the diverse needs of large-scale industrial operations.
        </Text>

        <Text style={styles.paragraph}>
          This combination of high-quality products, extensive industry knowledge, and strong service orientation has made Part Petro Kala a trusted partner for industrial enterprises across Iran.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
    textAlign: 'left', 
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'justify',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

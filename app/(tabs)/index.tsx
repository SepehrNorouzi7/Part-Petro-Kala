import { StyleSheet, Image, ScrollView, SafeAreaView, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/logo.png')} />
      </View>
      <ScrollView style={styles.scrollView}>
        <ThemedView style={styles.contentContainer}>
          <ThemedText style={styles.heading}>Welcome to Part Petro Kala</ThemedText>
          <ThemedText style={styles.subheading}>Your Trusted Partner in Industrial Excellence</ThemedText>
          <ThemedText style={styles.paragraph}>
            For over 15 years, Part Petro Kala has been at the forefront of the oil, gas, and petrochemical industries in Iran. Our journey is defined by a relentless pursuit of innovation, quality, and unparalleled service. We specialize in providing cutting-edge industrial equipment, ranging from advanced valve testing systems to robust hydraulic tools, all designed to meet the exacting standards of modern industry.
          </ThemedText>
          <ThemedText style={styles.subheading}>Why Choose Us?</ThemedText>
          <ThemedText style={styles.bulletPoint}>Industry-Leading Expertise: With a team of seasoned professionals, we bring decades of experience and deep technical knowledge to every project.</ThemedText>
          <ThemedText style={styles.bulletPoint}>Premium Products: We are the authorized distributor of globally renowned brands like ENERPAC, ensuring our clients have access to the best tools and equipment in the market.</ThemedText>
          <ThemedText style={styles.bulletPoint}>Commitment to Quality: From the smallest component to the most complex machinery, we guarantee products that meet international standards and deliver exceptional performance.</ThemedText>
          <ThemedText style={styles.bulletPoint}>Comprehensive Support: Our relationship with clients extends beyond the point of sale. We offer extensive after-sales services, including maintenance, training, and technical support to ensure your operations run smoothly.</ThemedText>
          <ThemedText style={styles.paragraph}>
            Empowering Industries: Our solutions are trusted by leaders in the petrochemical, oil and gas, steel, and cement industries. We understand the unique challenges you face and provide tailored solutions that drive efficiency, safety, and productivity.
          </ThemedText>
          <ThemedText style={styles.callToAction}>
            Partner with Part Petro Kala, and let's build a future of industrial excellence together.
          </ThemedText>
          <ThemedText style={styles.callToAction}>
            Experience the Difference: Discover how Part Petro Kala can elevate your operations. Explore our range of services and products, and get in touch with our expert team today!
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#46BDAD',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    padding: 16,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'justify',
  },
  subheading: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 8,
    textAlign: 'justify',
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 4,
    textAlign: 'justify',
  },
  bulletPoint: {
    fontSize: 16,
    marginVertical: 4,
    lineHeight: 24,
    textAlign: 'justify',
  },
  callToAction: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 12,
    textAlign: 'justify',
  },
});

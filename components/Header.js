import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.headerTop}>
        <Text style={styles.headerTitle}>Shyam Ji Textiles</Text>
        <Image 
          source={require('../assets/logo/logo.png')} 
          style={styles.logo} 
        />
      </View>
      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Product')}>
          <Text style={styles.buttonText}>Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.buttonText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContactUs')}>
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 30,
    paddingBottom: 6,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  headerTop: {
    width: '100%', // Full width of the header
    flexDirection: 'row',
    justifyContent: 'center', // Center the title
    alignItems: 'center', // Align items vertically in the middle
    position: 'relative',
    marginBottom: 8,
  },
  logo: {
    width: 100, // Increased logo size
    height: 100, // Increased logo size
    resizeMode: 'contain',
    position: 'absolute', // Absolute positioning
    right: 10, // Place the logo on the right side of the header
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 5,
    textAlign: 'center', // Ensure the title is centered
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    columnGap: 4,
    rowGap: 4,
  },
  button: {
    backgroundColor: '#ffffffaa',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginHorizontal: 2,
  },
  buttonText: {
    color: '#8B0000',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default Header;

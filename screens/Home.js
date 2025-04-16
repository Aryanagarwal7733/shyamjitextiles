import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const Home = ({ navigation }) => {
  // Categories to be passed to Product screen
  const categories = [
    { name: 'Bags', id: 'bags' },
    { name: 'Bedsheets', id: 'bedsheet-with-quilted-pillow-cover' },
    { name: 'Kids Dohar', id: 'kids-dohar' },
    { name: 'Baby Quilts', id: 'baby-quilt' },
    { name: 'TNT Sofa Throws', id: 'TNT-sofa-throw' },
    { name: 'Table Runner', id: 'Table-Runner' },
    { name: 'Towel', id: 'Towel' },
    { name: 'Kids Bathrobe', id: 'Kids Bathrobe' },
  ];

  return (
    <ImageBackground
      source={require('../assets/background.jpg')} // Background image
      style={styles.container} // Style for the background
    >
      <Text style={styles.header}>Welcome to Shyam Ji Textile</Text>
      <Text style={styles.subHeader}>Choose a category:</Text>

      {/* Render category buttons */}
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={styles.button}
          onPress={() => navigation.navigate('ProductCatalogue', { product: category.id })}
        >
          <Text style={styles.buttonText}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#8B0000',
    zIndex: 1, // Ensure text is above background
  },
  subHeader: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#8B0000',
    zIndex: 1, // Ensure text is above background
  },
  button: {
    backgroundColor: '#8B0000',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Home;

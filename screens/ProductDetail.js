import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const ProductDetail = ({ route }) => {
  const { productName, images } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{productName.replace(/-/g, ' ')}</Text>

      <FlatList
        data={images}
        keyExtractor={(item, index) => `${productName}-${index}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image source={item} style={styles.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 16,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 12,
  },
});

export default ProductDetail;

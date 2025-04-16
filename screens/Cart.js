import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Button } from 'react-native';

const productOptions = [
  { id: '1', name: 'Kurti 1' },
  { id: '2', name: 'Saree 1' },
  { id: '3', name: 'Bedsheet 1' },
  { id: '4', name: 'Baby Quilt' },
  { id: '5', name: 'TNT Sofa Throw' },
];

const Cart = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const toggleSelection = (itemId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(itemId)
        ? prevSelected.filter((id) => id !== itemId)
        : [...prevSelected, itemId]
    );
  };

  const handleSubmit = () => {
    if (!name || !phone || selectedItems.length === 0) {
      Alert.alert('Incomplete', 'Please fill in all required fields and select at least one product.');
      return;
    }

    const selectedNames = productOptions
      .filter((item) => selectedItems.includes(item.id))
      .map((item) => item.name)
      .join(', ');

    Alert.alert(
      'Enquiry Submitted',
      `Name: ${name}\nPhone: ${phone}\nProducts: ${selectedNames}\nMessage: ${message || 'N/A'}`
    );

    // Reset
    setName('');
    setPhone('');
    setMessage('');
    setSelectedItems([]);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>📝 Product Enquiry</Text>

        <FlatList
          data={productOptions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const isSelected = selectedItems.includes(item.id);
            return (
              <TouchableOpacity
                style={[styles.productItem, isSelected && styles.selectedItem]}
                onPress={() => toggleSelection(item.id)}
              >
                <Text style={styles.itemText}>{item.name}</Text>
                <Text>{isSelected ? '✅' : '➕'}</Text>
              </TouchableOpacity>
            );
          }}
          scrollEnabled={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Your Name *"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number *"
          value={phone}
          keyboardType="phone-pad"
          onChangeText={setPhone}
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Message (optional)"
          value={message}
          multiline
          numberOfLines={4}
          onChangeText={setMessage}
        />

        <View style={{ marginTop: 10, marginBottom: 20 }}>
          <Button title="Submit Enquiry" onPress={handleSubmit} color="#8B0000" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 15,
    textAlign: 'center',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginVertical: 4,
    backgroundColor: '#fff',
  },
  selectedItem: {
    backgroundColor: '#f0f8ff',
    borderColor: '#8B0000',
  },
  itemText: {
    fontSize: 15,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  messageInput: {
    height: 80,
    textAlignVertical: 'top',
  },
});

export default Cart;

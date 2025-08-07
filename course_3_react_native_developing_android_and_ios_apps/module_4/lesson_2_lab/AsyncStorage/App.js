// App.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [storedInputValue, setStoredInputValue] = useState('');

  const storeData = async(value) => {
    try {
      await AsyncStorage.setItem('@storage_Key',value);
      console.log('Data stored successfully');
    } catch(e) {
      console.error('Failed to save data', e);
    }
  }

  const retrieveData = async() => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        setStoredInputValue(value);
        console.log('Data retrieved successfully');
      }
    } catch(e) {
      console.error('Failed to retrieve data', e);
    }
  }

  const clearData = async(value) => {
    try {
      await AsyncStorage.removeItem('@storage_Key');
      setStoredInputValue('');
      console.log('Data cleared successfully');
    } catch(e) {
      console.error('Failed to remove data', e);
    }
  }

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>AsyncStorage Example</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter something..."
        value={inputValue}
        onChangeText={setInputValue}
      />
      <View style={styles.spacer} >
        <Button title="Store Data" testID='storeData' onPress={() => storeData(inputValue)}/>
        <Button title="Retrieve Data" testID='retrieveData' onPress={() => retrieveData(inputValue)}/>
        <Button title="Clear Data" testID='clearData' onPress={() => clearData(inputValue)}/>
      </View>
      <Text style={styles.text} testID='storedId'>Stored Value: {storedInputValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  spacer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    flexDirection: 'row'

  },
  text: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default App;

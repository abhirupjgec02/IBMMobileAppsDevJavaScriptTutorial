
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../navigation/TabNavigator';

export default function BakeryItemsScreen() {
    const items = [
      { name: 'Tiramisu', price: '$4.50', image: 'https://www.gimmesomeoven.com/wp-content/uploads/2020/07/Tiramisu-Recipe-10.jpg' },
      { name: 'Mandareen Cheesecake', price: '$5.00', image: 'https://besthomemade.recipes/wp-content/uploads/2022/02/Mandarin-cheesecake-recipe-1030x981.jpg' },
      { name: 'Napoleon Slice', price: '$3.00', image: 'https://www.portosbakery.com/wp-content/uploads/2023/06/item_126-600x400.png' },
      { name: 'Shortbreads', price: '$2.00', image: 'https://tse1.mm.bing.net/th/id/OIP.vz5_AP-kuHA5GYBX0GQVEAHaHa?pid=Api&P=0&h=180' },
    ];
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Fresh Bakery products for you from folders</Text>
        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={{uri:item.image}} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity style={styles.button} onPress={() => alert(`${item.name} added to cart`)}>
                <Text style={styles.buttonText}>Add To Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
 
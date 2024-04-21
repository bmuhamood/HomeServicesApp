import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function BusinessListItemSmall({ business }) { // Destructuring props here
  return (
    <View>
      <Image source={{ uri: business?.images[0]?.url }}
      style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
    image: {
        width:160,
        height:100,
        borderRadius:0
    }
});
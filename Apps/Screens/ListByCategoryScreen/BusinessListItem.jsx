import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function BusinessListItem({ business }) {
  return (
    <View>
      <Image 
        source={{ uri: business?.images[0]?.url }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
    }
});
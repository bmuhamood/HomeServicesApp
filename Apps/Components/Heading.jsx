import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Heading({ text, isViewAll }) {
  return (
    <View>
      <Text style={styles.heading}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: 'outfit-medium',
    marginBottom: 10,
  },
});

import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Colors from '../../Utils/Colors';

export default function BusinessListItemSmall({ business }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: business?.images[0]?.url }}
      style={styles.image}/>
      <View style={styles.infoContainer}>
        <Text style={{fontSize:17,fontFamily:'outfit'}}>{business?.name}</Text>
        <Text style={{fontSize:13,color:Colors.GRAY}}>{business?.contactPerson}</Text>
        <Text style={{
            fontSize:10,
            fontFamily:'outfit',
            padding:3,
            color:Colors.PRIMARY,
            backgroundColor:Colors.PRIMARY_LIGHT,
            borderRadius:3,
            alignSelf:'flex-start',
            paddingHorizontal:7
            }}>{business?.category.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding:5,
        backgroundColor:Colors.WHITE,
        borderRadius:10
    },
    infoContainer:{
       padding:3,
       display: 'flex',
       gap:3 
    },
    image: {
        width:140,
        height:80,
        borderRadius:10
    },
});
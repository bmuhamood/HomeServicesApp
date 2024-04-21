import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import GlobalAPIs from '../../Utils/GlobalAPIs';
import { FlatList } from 'react-native-gesture-handler';
import BusinessListItem from './BusinessListItem';

export default function BusinessListByCategory() {
  const navigation = useNavigation();
  const [businessList, setBusinessList] = useState([]);
  const route = useRoute(); // Store route object
  const { category } = route.params || {}; // Destructure category from params or default to empty object

  useEffect(() => {
    if (category) {
      getBusinessListByCategory(category);
    }
  }, [category]);
  
  const getBusinessListByCategory = (category) => {
    GlobalAPIs.getBusinessListByCategory(category)
      .then(resp => {
        setBusinessList(resp.businessLists);
      })
      .catch(error => {
        console.error('Error fetching business list by category:', error);
      });
  };

  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <TouchableOpacity
        style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          gap: 10, 
          alignItems: 'center',
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={30} color={Colors.BLACK} />
        <Text style={{ fontSize: 25, fontFamily: 'outfit' }}>{category}</Text>
      </TouchableOpacity>
      <FlatList 
        data={businessList}
        renderItem={({ item, index }) => (
          <BusinessListItem business={item}/>
        )}
      />
    </View>
  );
}

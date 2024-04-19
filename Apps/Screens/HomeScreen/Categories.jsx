import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalAPIs from '../../Utils/GlobalAPIs'
import Heading from '../../Components/Heading';

export default function Categories() {

    const [categories, setCategories]=useState([]);

    useEffect(()=>{
        getCategories();
    },[])

    // Get Categories List
    
 const getCategories=()=>{
    GlobalAPIs.getCategories().then(resp=>{
        setCategories(resp?.categories);
    })
 }

  return (
    <View style={{marginTop:10}}>
        <Heading text={'Categories'} />
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize:20,
        fontFamily:'outfit-medium',
        marginBottom:10,
    }
})
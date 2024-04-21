import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessList from './BusinessList'

export default function HomeScreen() {
  return (
    <View>
        {/* Header Component */}
      <Header />
      <View style={{padding:20}}>
        {/* Slider Component */}
        <Slider />
        {/* Category Component */}
        <Categories />
        {/* Business List */}
        <BusinessList />
      </View>
    </View>
  )
}
import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    const {user, isLoading}=useUser();
  return user&& (
    <View style={style.container}>
        {/* Profile Section */}
        <View style={style.profileMainContainer}>
            <View style={style.profileContainer}>
                <Image source={{uri:user?.imageUrl}}
                style={style.userImage}/>
                <View>
                    <Text style={{color:Colors.WHITE}}>Welcome,</Text>
                    <Text style={{color:Colors.WHITE,fontSize:20}}>{user?.fullName}</Text>
                </View>
            </View>
                <FontAwesome name="bookmark" size={27} color="white" />
        </View>
        {/* Search Bar section */}
        <View style={style.searchBarcontainer}>
            <TextInput placeholder='Search'
            style={style.textInput}/>
            <FontAwesome 
            style={style.searchButton}
            name="search" size={24} color={Colors.PRIMARY} />
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25
    },
    profileMainContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profileContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap:10
    },
    searchBarcontainer:{
        marginTop:15,
        display: 'flex',
        flexDirection: 'row',
        gap:10,
        marginBottom:10
    },
    textInput:{  
        padding:7,
        paddingHorizontal:16,
        backgroundColor:Colors.WHITE,
        borderRadius:8,
        width:'85%',
        fontSize:16
    },
    searchButton: {
        backgroundColor:Colors.WHITE,
        padding:10,
        borderRadius:8
    },
    userImage:{
        width:45,
        height:45,
        borderRadius:99
    }
})
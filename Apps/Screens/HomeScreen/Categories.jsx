import React, { useEffect, useState } from 'react';
import { Image, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import GlobalAPIs from '../../Utils/GlobalAPIs';
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [showAll, setShowAll] = useState(false); // Track whether to show all categories
    const navigation = useNavigation();
    useEffect(() => {
        getCategories();
    }, []);

    // Get Categories List
    const getCategories = () => {
        GlobalAPIs.getCategories().then(resp => {
            setCategories(resp?.categories);
        });
    };

    // Toggle showAll state to display all categories
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <View style={{ marginTop: 10 }}>
            <Heading text={'Categories'} isViewAll={true} onPressViewAll={toggleShowAll} />
            <FlatList
                data={showAll ? categories : categories.slice(0, 4)} // Show all or only first 4 categories
                numColumns={4}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={styles.container} onPress={() => navigation.push('business-list', {
                        category:item.name
                    })}>
                        <View style={styles.iconContainer}>
                            <Image source={{ uri: item?.icon?.url }} style={{ width: 30, height: 30 }} />
                        </View>
                        <Text style={{ fontFamily: 'outfit', marginTop: 5 }}>{item?.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    iconContainer: {
        backgroundColor: Colors.LIGHT_GRAY,
        padding: 17,
        borderRadius: 99,
    },
});

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../Utils/Colors';

const Heading = ({ text, isViewAll, onPressViewAll }) => {
    const [isSelected, setIsSelected] = useState(false);

    const toggleSelection = () => {
        setIsSelected(!isSelected);
        onPressViewAll(); // Call the onPressViewAll function to handle view all functionality
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            {isViewAll && (
                <TouchableOpacity
                    onPress={toggleSelection}
                    style={[styles.viewAllButton, isSelected ? styles.selectedButton : styles.deselectedButton]}
                >
                    <Text style={styles.viewAll}>{isSelected ? 'Hide' : 'View All'}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    text: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
    },
    viewAllButton: {
        marginTop: 5,
        padding: 5,
        borderRadius: 5,
    },
    selectedButton: {
        backgroundColor:Colors.PRIMARY,
    },
    deselectedButton: {
        backgroundColor:Colors.PRIMARY,
    },
    viewAll: {
        color: 'white',
        fontFamily: 'outfit-medium',
    },
});

export default Heading;

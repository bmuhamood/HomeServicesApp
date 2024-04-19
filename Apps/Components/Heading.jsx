import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Heading = ({ text, isViewAll, onPressViewAll }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            {isViewAll && (
                <TouchableOpacity onPress={onPressViewAll}>
                    <Text style={styles.viewAll}>View All</Text>
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
        
    },
    text: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
    },
    viewAll: {
        color: 'blue',
        fontFamily: 'outfit-medium',
    },
});

export default Heading;

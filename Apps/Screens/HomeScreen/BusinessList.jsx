import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Heading from '../../Components/Heading';
import GlobalAPIs from '../../Utils/GlobalAPIs';
import BusinessListItemSmall from './BusinessListItemSmall';

export default function BusinessList() {
    const [businessList, setBusinessList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAll, setShowAll] = useState(false); 

    useEffect(() => {
        getBusinessList();
    }, []);

    const getBusinessList = () => {
        GlobalAPIs.getBusinessList().then(resp => {
            setBusinessList(resp.businessLists);
        }).catch(error => {
            setError("Error fetching businesses: " + error.message);
        }).finally(() => {
            setLoading(false);
        });
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <View>
            <Heading text={'Latest Business'} isViewAll={true} onPressViewAll={toggleShowAll} /> 
            <FlatList
                style={{ marginTop: 10 }}
                data={showAll ? businessList : businessList.slice(0, 4)} 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 10 }}>
                        <BusinessListItemSmall business={item} />
                    </View>
                )}
            />
        </View>
    );
}

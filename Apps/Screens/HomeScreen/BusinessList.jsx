import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import Heading from '../../Components/Heading';
import GlobalAPIs from '../../Utils/GlobalAPIs';
import BusinessListItemSmall from './BusinessListItemSmall';

export default function BusinessList() {
    const [businessList, setBusinessList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <View style={{ marginTop: 10 }}>
            <Heading text={'Latest Business'} isViewAll={true} />

            <FlatList
            style={{marginTop:20}} 
                data={businessList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View>
                        <BusinessListItemSmall business={item} />
                    </View>
                )}
            />
        </View>
    );
}

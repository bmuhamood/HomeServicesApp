import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react'
import GlobalAPIs from '../../Utils/GlobalAPIs'
import Heading from '../../Components/Heading';

export default function Slider() {
    const [slider, setSlider] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getSliders();
    }, []);

    const getSliders = async () => {
        try {
            const result = await GlobalAPIs.getSlider();
            setSlider(result?.sliders || []);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>Error: {error.message}</Text>;
    }

    return (
        <View>
            <Heading text={'Offers For You'} />
            <FlatList
                data={slider}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{marginRight:20}}>
                        <Image source={{ uri: item?.image?.url }} style={styles.sliderImage} />
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    sliderImage: {
        width:270,
        height:150,
        borderRadius:20,
        objectFit: 'contain'
    }
})
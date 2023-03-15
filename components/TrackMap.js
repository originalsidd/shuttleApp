import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import styles from '../Styles';

const trackMap = () => {
    const ref = useRef(null);
    const [latlon, setLatlon] = useState({
        latitude: 12.9723,
        longitude: 79.161,
    });
    const [count, setCount] = useState(0);
    const shuttles = [
        {
            title: 'shuttle 1',
            description: "Men's Hostel-Main Gate",
            coord: latlon,
        },
    ];
    const stops = [
        {
            title: 'L-Block',
            description: 'MH',
            coord: {
                latitude: 12.97238,
                longitude: 79.1627,
            },
        },
        {
            title: 'K-Block',
            description: 'MH',
            coord: {
                latitude: 12.97222,
                longitude: 79.1615,
            },
        },
        {
            title: 'M-Block',
            description: 'MH',
            coord: {
                latitude: 12.97258,
                longitude: 79.1639,
            },
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count + 1);
            if (count > 3) {
                setCount(0);
                setLatlon({
                    latitude: 12.9723,
                    longitude: 79.161,
                });
            } else {
                setLatlon({
                    latitude: latlon.latitude + 0.0001,
                    longitude: latlon.longitude + 0.001,
                });
            }
        }, 2000);
        return () => clearInterval(timer);
    }, [latlon]);

    return (
        <View style={styles.mapScreen}>
            <MapView
                ref={ref}
                style={styles.mapView}
                initialRegion={{
                    latitude: 12.973,
                    longitude: 79.162,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                loadingEnabled={true}
                loadingIndicatorColor='#59e'
                loadingBackgroundColor='#eee'
            >
                {shuttles.map((shuttle, index) => (
                    <Marker
                        style={styles.marker}
                        key={index}
                        coordinate={shuttle.coord}
                        title={shuttle.title}
                        description={shuttle.description}
                        opacity={0.8}
                    >
                        <MaterialCommunityIcons
                            name='bus-side'
                            size={50}
                            color='#210'
                        />
                    </Marker>
                ))}
                {stops.map((stop, index) => (
                    <Marker
                        style={styles.marker}
                        key={index}
                        coordinate={stop.coord}
                        title={stop.title}
                        description={stop.description}
                        opacity={0.6}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <FontAwesome5
                                name='map-marker'
                                size={40}
                                color='#e10'
                            />
                            <Text>{stop.title}</Text>
                        </View>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
};

export default trackMap;

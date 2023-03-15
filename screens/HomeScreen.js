import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TrackMap from '../components/TrackMap';
import TrackUI from '../components/TrackUI';
import styles from '../Styles';
// import Bluetooth from 'react-native-bluetooth-serial';

const HomeScreen = () => {
    return (
        <View style={styles.home}>
            <TrackMap />
            <TrackUI />
        </View>
    );
};

export default HomeScreen;

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from '../Styles';

const TrackUI = () => {
    return (
        <View style={styles.trackUI}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Count of Buses: 4</Text>
                <Text style={styles.text}>Status: On Time</Text>
            </View>
        </View>
    );
};

export default TrackUI;

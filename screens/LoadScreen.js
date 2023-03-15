import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import styles from '../Styles';

const LoadScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('home');
        }, 2000);
    }, []);
    return (
        <View style={styles.home}>
            <ActivityIndicator size={120} />
        </View>
    );
};

export default LoadScreen;

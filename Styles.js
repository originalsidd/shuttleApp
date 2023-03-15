import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    app: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    load: {},
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    mapScreen: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    mapView: {
        ...StyleSheet.absoluteFillObject,
    },
    marker: {
        position: 'absolute',
    },
    trackUI: {
        position: 'absolute',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#48da',
        width: '100%',
        height: 80,
        marginHorizontal: 10,
        padding: 10,
        bottom: 0,
        zIndex: 10,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default styles;

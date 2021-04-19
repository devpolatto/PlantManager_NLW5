import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Platform
} from 'react-native';

import colors from "../styles/colors";

import wateringImg from '../assets/watering.png';

import Button from '../components/Button';

const Welcome = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'} suas plantas {'\n'} de forma fácil
            </Text>

            <Image source={wateringImg} style={styles.image} />

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas {'\n'} plantas.
                Nós cuidamos de lembrar você {'\n'} sempre que precisar.
            </Text>

            <Button title=">" />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === 'android' ? 24 : 0,
    },
    droidSafeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    subtitle: {
        textAlign: "center",
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
    },
    image: {
        width: 292,
        height: 284,
    }
})

export default Welcome;
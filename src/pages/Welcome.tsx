import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import colors from "../styles/colors";

import wateringImg from '../assets/watering.png';

const Welcome = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'} suas plantas {'\n'} de forma fácil
            </Text>

            <Image source={wateringImg} style={styles.image} resizeMode="contain" />

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas {'\n'} plantas.
                Nós cuidamos de lembrar você {'\n'} sempre que precisar.
            </Text>

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
            >
                <Text>
                    <Feather name="chevron-right" style={styles.buttonIcon} />
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
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
        //marginTop: 38
    },
    subtitle: {
        textAlign: "center",
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
    },
    image: {
        height: Dimensions.get('window').width * 0.7,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginBottom: 20,
        height: 56,
        width: 56,
    },
    buttonIcon: {
        fontSize: 24,
        color: colors.white,
    }
})

export default Welcome;
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const imgAvatar = "https://avatars.githubusercontent.com/u/51465694?v=4"
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {

    const [userName, setUserName] = useState<string>()

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user')
            setUserName(user || '')
        }

        loadStorageUserName()
    }, [userName])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.username}>{userName}</Text>
            </View>

            <Image source={{ uri: imgAvatar }} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    username: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    },
});
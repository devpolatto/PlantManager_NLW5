import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

import colors from "../styles/colors";

interface ButtonProps extends TouchableOpacityProps {
    title: String
}

const Button = ({ title, ...rest }: ButtonProps) => {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            {...rest}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginBottom: 20,
        height: 56,
        width: 56,
        paddingHorizontal: 10,
    },
    text: {
        color: colors.white,
        fontSize: 24
    }
})

export default Button;
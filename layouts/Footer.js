import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    footer: {
        height: 50,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: '#e7e7e7',
    },
    text: {
        color: '#333333',
    },
});

const Footer = ({ tasksCount }) => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>
                {tasksCount} {tasksCount === 1 ? 'task' : 'tasks'}
            </Text>
        </View>
    );
};

export default Footer;

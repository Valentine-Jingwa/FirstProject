import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default function App() {
    return (
        <View style={styles.container}>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
            <AntDesign name="check" size={24} color="black" />
            <FontAwesome name="trash-o" size={24} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

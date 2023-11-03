import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Touchable, TouchableOpacity, SafeAreaView, FlatList, TextInput } from 'react-native';

export default function CreateTodoList({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (value) => {
        setText(value);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter Task"
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title="Add Task" color="skyblue" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#919999',
    },
    input:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'cyan',
        width: 300,
        height: 40,
        borderRadius: 5,
        paddingLeft: 10
    },
    label:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    submit:{
        marginTop: 30,
    }
});
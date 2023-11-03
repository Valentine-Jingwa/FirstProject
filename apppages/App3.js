import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Touchable, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import CreateTodoList from './createTodoList';

export default function App() {

    const [text, setTask] = useState([
        { text: 'Get up at 8:00 am', key: 1},
        { text: 'Go to the gym', key: 2},
        { text: 'Take a shower', key: 3},
        { text: 'Go to School at 11:00 am', key: 4},
        { text: 'Go to the gym', key: 5},
    ]);
    const clickHandler = (key) => {
        console.log(key);
        setTask((prevTask) => {
            return prevTask.filter(task => task.key != key);
        })
    }
    const submitHandler = (task) => {
        setTask((prevTask) => {
            return [
                { text: task, key: Math.random().toString() },
                ...prevTask,
            ];
        });
    };

    return (
        <View style={styles.container}>
            <CreateTodoList submitHandler={submitHandler} />
            <Text style={styles.heading}>Todo List</Text>
            <FlatList
                keyExtractor={(item) => item.key}
                data={text}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => clickHandler(item.key)}>
                        <Text style={styles.text}>{item.text}</Text>
                    </TouchableOpacity>
                )}
            />
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
    heading:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'cyan',
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
    fullName: {
        fontSize: 20,
        margin: 10,
    },
    submit:{
        marginTop: 30,
    }
});
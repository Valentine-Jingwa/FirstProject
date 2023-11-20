// ToDoList.js
import React from 'react';
import { Pressable, View, Text, ScrollView, StyleSheet, FlatList, Button } from 'react-native';

// Define your styles if they are not imported from an external file
const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
});

const ToDoList = ({ tasks, deleteTask }) => {
    return (
        <ScrollView>
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.task}</Text>
                        <Button title="X" onPress={() => deleteTask(item.index)} />
                    </View>
                )}
                keyExtractor={item => item.index.toString()}
            />
        </ScrollView>
    );
};

export default ToDoList;

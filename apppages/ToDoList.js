// ToDoList.js
import React from 'react';
import { Pressable, View, Text, ScrollView, StyleSheet } from 'react-native';

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

const ToDoList = ({ tasks }) => {
    return (
        <ScrollView>
            {tasks.map((task, index) => (
                <Pressable key={task.index}>
                    <View style={styles.task}>
                        <Text style={styles.taskText}>{task.task}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
    );
};

export default ToDoList;

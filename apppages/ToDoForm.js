// ToDoForm.js
import React from 'react';
import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});
const ToDoForm = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={setTaskText}
                value={taskText}
            />
            <Button
                title="Add"
                onPress={() => {
                    addTask(taskText);
                    setTaskText(''); // Clear the input field after adding the task
                }}
            />
        </View>
    );
};

export default ToDoForm;

// App.js
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreenContent() {
    const [tasks, setTasks] = useState([
        { task: 'Learn React Native', index: 1 },
        { task: 'Learn React', index: 2 },
        { task: 'Learn JavaScript', index: 3 },
    ]);

    const addTask = (taskText) => {
        // Check for empty or duplicate tasks
        if(taskText && !tasks.some(task => task.task === taskText)) {
            setTasks([...tasks, { task: taskText, index: tasks.length + 1 }]);
        }
    };
    
    const deleteTask = (index) => {
        setTasks(tasks.filter(task => task.index !== index));
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <ToDoForm addTask={addTask} />
                <ToDoList tasks={tasks} deleteTask={deleteTask} />
            </ScrollView>
        </SafeAreaView>
    );
}

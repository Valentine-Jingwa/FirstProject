// App.js
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function App() {
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

    return (
        <SafeAreaView>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
        </SafeAreaView>
    );
}

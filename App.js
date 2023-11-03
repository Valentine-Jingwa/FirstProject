// App.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList'; // Make sure this is imported if not already
import ToDoForm from './ToDoForm'; // Import ToDoForm component

export default function App() {
    return (
        <SafeAreaView>
            <ToDoList />
            {/* Use ToDoForm component */}
            <ToDoForm />
        </SafeAreaView>
    );
}



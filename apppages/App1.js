import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
    const [firstName] = useState('John');
    const [middleName] = useState('Doe');
    const [lastName] = useState('Doee');
    const [age] = useState(20);
    const [instructor, setInstructor] = useState({name: 'John Doe' , experience:4});
    const anything =() => {
        alert('Hello Bitches');
    }
    const clickme =() => {
        setInstructor({name: 'Valentine' , experience:5});
    }
    return (
        <View style={styles.container}>
            <Text>My name is {instructor.name} .I have {instructor.experience}.</Text>
            <Image source={{uri:'https://picsum.photos/200/200'}} style={{width:200,height:200}}/>
            <View style={styles.buttonContainer}>
                <Button title="Click Me" onPress={anything}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Click Me" onPress={clickme}/>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

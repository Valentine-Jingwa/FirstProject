import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Touchable, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';

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
    const[student,setStudent] = useState(
        {std_id: '101', std_name: 'Valentine'},
        {std_id: '102', std_name: 'Macello'},
        {std_id: '103', std_name: 'Jingwa'},
        {std_id: '104', std_name: 'Marina'},
        {std_id: '105', std_name: 'Jasmeen'},
        {std_id: '106', std_name: 'Rhoad'},
        {std_id: '107', std_name: 'Doe'},
        {std_id: '108', std_name: 'John'},
        {std_id: '109', std_name: 'Doe'},
        {std_id: '110', std_name: 'Wanda'},
        {std_id: '111', std_name: 'Max'},

    );
    const clickHandler = (stdid) => {
        console.log(std_id);
        setStudent ((prevStudent) =>{
            return prevStudent.filter(student => student.id != std_id);
        })
    }
    return (
        // <View style={styles.container}>
        //     <Text>My name is {instructor.name} .I have {instructor.experience}.</Text>
        //     <Image source={{uri:'https://picsum.photos/200/200'}} style={{width:200,height:200}}/>
        //     <View style={styles.buttonContainer}>
        //         <Button title="Click Me" onPress={anything}/>
        //     </View>
        //     <View style={styles.buttonContainer}>
        //         <Button title="Click Me" onPress={clickme}/>
        //     </View>
        //     <StatusBar style="auto" />
        //     <TouchableOpacity onPress={anything}>

        //     </TouchableOpacity>
        // </View>
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Student List</Text>
            <FlatList
                keyExtractor={(item) => item.std_id}
                data={student}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => clickHandler(item.std_id)}>
                        <Text style={styles.text}>{item.std_id} {item.std_name}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
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

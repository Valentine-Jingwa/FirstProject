import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';
// Creating touchable icons
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { TouchableHighlight } from 'react-native-gesture-handler';
//example of touchable Highlight
// <TouchableHighlight activeopacity onPress={() => alert('Hello, world!')}>
// import { TouchableNativeFeedback } from 'react-native-gesture-handler';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
// All can be imported from 'react-native';

export default function App() {
    const [fullname, setfullname] = useState('Valentine');
    const [email, setemail] = useState('Valentine.Jingwa@edu.sait.ca');
    const [contact, setcontact] = useState('587-664-4681');
    const [message, setmessage] = useState('Good Afternoon!');
    return (
        <View style={styles.container}>
            {/* <Ionicons name="md-checkmark-circle" size={32} color="green" />
            <AntDesign name="check" size={24} color="red" />
            <FontAwesome name="trash-o" size={24} color="orange" />
            <FontAwesome name="edit" size={30} color="yellow" />
            <FontAwesome name="play" size={24} color="green" />
            <Entypo name="creative-commons" size={60} color="blue" />
            <Entypo name="emoji-happy" size={24} color="indigo" />
             */}
            <Image source={require('./assets/vat.jpg')} style={{ radius: 20, width: 100, height: 100 }} />
            <Text style={styles.heading}>Registration Form</Text>

            <Text style={styles.label}>Full name</Text>
            <TextInput style={styles.input}
                placeholder='e.g.,Big nuts'
                onChangeText={(value) => setfullname(value)} />

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input}
                placeholder='e.g.,cornhub@abc.com'
                onChangeText={(value) => setemail(value)} />

            <Text style={styles.label}>Contact no.</Text>
            <TextInput
                keyboardType='numeric'
                style={styles.input}
                placeholder='###-###-####'
                onChangeText={(value) => setcontact(value)} />

            <Text style={styles.label}>About Yourself</Text>
            <TextInput
                multiline
                style={styles.input}
                placeholder='description' onChangeText={(value) => setmessage(value)} />
            {/* password */}
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true} placeholder='password' />
            <Text style={styles.fullName}>My name is {fullname}</Text>
            <Text style={styles.email}>My email is {email}</Text>
            <Text style={styles.contact}>My contact no.  is {contact}</Text>
            <Text style={styles.message}> {message}</Text>

            <Button title="Submit" onPress={() => alert('Are you sure you want to submit this information?')} />
  
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

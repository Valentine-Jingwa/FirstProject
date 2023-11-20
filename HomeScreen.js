import { Button, View, Text } from 'react-native';
import HomeScreenContent from './apppages/HomeSceenContent';
// Create a Home Screen
export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <HomeScreenContent/>
        <Button
          title="About Page"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
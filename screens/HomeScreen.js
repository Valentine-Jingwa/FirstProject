import { Button, ScrollView, Text } from 'react-native';
import HomeScreenContent from './HomeSceenContent';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainLayout from '../layouts/MainLayout';
// Create a Home Screen
export default function HomeScreen({ navigation }) {
    return (
        <MainLayout>
            <SafeAreaView>
                <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Home Screen</Text>
                    <HomeScreenContent/>
                    <Button
                        title="About Page"
                        onPress={() => navigation.navigate('About')}
                    />
                </ScrollView>
            </SafeAreaView>
        </MainLayout>
    );
}

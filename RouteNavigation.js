import React from 'react';
import { View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';
import Login from './src/components/Login.js';
import SignUp from './src/components/SignUp.js';
import { FriendList } from './src/components/FriendList';
import ChatList from './src/components/ChatList';

const Stack = createStackNavigator();
function RouteNavigation() {
    return (
        <View style={styles.container}>
            <Stack.Navigator initialRouteName="Home" headerMode="screen" screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: 'tomato' } }}>
                <Stack.Screen name="Home" component={Home} options={{ title: 'Instagram', }} />
                <Stack.Screen name="login" component={Login} options={{ title: 'Login', }} />
                <Stack.Screen name="signup" component={SignUp} options={{ title: 'SignUp', }} />
                <Stack.Screen name="friendlist" component={FriendList} options={{ title: 'Your Friends', }} />
                <Stack.Screen name="chatList" component={ChatList} options={{ title: 'Your Chatting', }} />
            </Stack.Navigator>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default RouteNavigation
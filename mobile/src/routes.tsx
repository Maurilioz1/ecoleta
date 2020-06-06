import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Points from './pages/Points';
import Detail from './pages/Detail';

const AppsStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppsStack.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: '#F0F0F5' } }}>
                <AppsStack.Screen name="Home" component={Home} />
                <AppsStack.Screen name="Points" component={Points} />
                <AppsStack.Screen name="Detail" component={Detail} />
            </AppsStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
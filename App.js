import React from 'react';
import Splash from './screen/Splash'; 
import Home from './screen/Home'
import Game1 from './screen/Game1';
import Game2 from './screen/Game2';
import Game3 from './screen/Game3';
import Game4 from './screen/Game4';
import Game5 from './screen/Game5';
import Game6 from './screen/Game6';
import Game7 from './screen/Game7';
import Game8 from './screen/Game8';
import Game9 from './screen/Game9';
import Game10 from './screen/Game10';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name='Splash'
            component={Splash}
            options={{ headerShown: false}}
            />
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ title: 'Main Page' }}
          />
          <Stack.Screen
            name='Game1'
            component={Game1}
            options={{ title: 'Game : Resident Evil 4' }}
          />
          <Stack.Screen
            name='Game2'
            component={Game2}
            options={{ title: 'Game : Lies of P' }}
          />
          <Stack.Screen
            name='Game3'
            component={Game3}
            options={{ title: 'Game : Dead Island 2' }}
          />
          <Stack.Screen
            name='Game4'
            component={Game4}
            options={{ title: 'Game : Starfield' }}
          />
          <Stack.Screen
            name='Game5'
            component={Game5}
            options={{ title: 'Game : PAYDAY3' }}
          />
          <Stack.Screen
            name='Game6'
            component={Game6}
            options={{ title: 'Game : Street Figther 6' }}
          />
          <Stack.Screen
            name='Game7'
            component={Game7}
            options={{ title: 'Game : Stardew Valley' }}
          />
          <Stack.Screen
            name='Game8'
            component={Game8}
            options={{ title: 'Game : Terraria' }}
          />
          <Stack.Screen
            name='Game9'
            component={Game9}
            options={{ title: 'Game : Valorant' }}
          />
          <Stack.Screen
            name='Game10'
            component={Game10}
            options={{ title: 'Game : League of legends' }}
          />
          
         
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

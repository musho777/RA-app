import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appearance } from 'react-native';
import { useEffect } from 'react';
import { LevelScreen } from './src/pages/Level';
import { Selection } from './src/pages/Selection';
import { Level1_1 } from './src/pages/Level1/level1_1';
import { Level1_2 } from './src/pages/Level1/level1_2';
import { Level1_3 } from './src/pages/Level1/level1_3';
import { Level1_4 } from './src/pages/Level1/level1_4';
import { Level1_5 } from './src/pages/Level1/level1_5';
import { Level1_6 } from './src/pages/Level1/level1_6';


export default Navigation = () => {
  const Stack = createStackNavigator();

  // let color = mainData.mood
  // const MyTheme = {
  //   dark: false,
  //   colors: {
  //     primary: color,
  //     background: color === '#ECF3FB' ? "#FFFFFF" : color,
  //     border: color,
  //   },
  // };

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={'LevelScreen'} >
        <Stack.Screen
          name="LevelScreen"
          component={LevelScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Selection"
          component={Selection}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level1_1"
          component={Level1_1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level1_2"
          component={Level1_2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level1_3"
          component={Level1_3}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level1_4"
          component={Level1_4}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level1_5"
          component={Level1_5}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level1_6"
          component={Level1_6}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};
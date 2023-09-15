import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LevelScreen } from './src/pages/Level';
import { Selection } from './src/pages/Selection';
import { Level1_1 } from './src/pages/Level1/level1_1';
import { Level1_2 } from './src/pages/Level1/level1_2';
import { Level1_3 } from './src/pages/Level1/level1_3';
import { Level1_4 } from './src/pages/Level1/level1_4';
import { Level1_5 } from './src/pages/Level1/level1_5';
import { Level1_6 } from './src/pages/Level1/level1_6';
import { Level2_1 } from './src/pages/Level2/level2_1';
import { Level2_2 } from './src/pages/Level2/level2_2';
import { Level2_5 } from './src/pages/Level2/level2_5';
import { Level2_6 } from './src/pages/Level2/level2_6';
import { Level2_7 } from './src/pages/Level2/level2_7';


export default Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={'Level2_7'} >
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
        <Stack.Screen
          name="Level2_1"
          component={Level2_1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level2_2"
          component={Level2_2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level2_5"
          component={Level2_5}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level2_6"
          component={Level2_6}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level2_7"
          component={Level2_7}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};
// Level2_7
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
import { Level2_8 } from './src/pages/Level2/Level2_8';
import { Level2_4 } from './src/pages/Level2/level2_4';
import { Level2_3 } from './src/pages/Level2/Level2_3';
import { Selection2 } from './src/pages/Selection/Selection2';
import { Level2_4_2 } from './src/pages/Level2/level2_4_2';
import { Level3_1 } from './src/pages/Level3/Level3_1';
import { Level3_2 } from './src/pages/Level3/Level3_2';
import { Level3_4 } from './src/pages/Level3/Level3_4';
import { Level3_3 } from './src/pages/Level3/Level3_3';
import { Level3_5 } from './src/pages/Level3/Level3_5';
import { Level3_6 } from './src/pages/Level3/Level3_6';
import { Level3_8 } from './src/pages/Level3/Level3_8';
import { Level3_7 } from './src/pages/Level3/Level3_7';
import { Selection3 } from './src/pages/Selection/Selection3';
import { Level4_1 } from './src/pages/Level4/level4_1';
import { Level4_4 } from './src/pages/Level4/level4_4';
import { Level4_5 } from './src/pages/Level4/level4_5';
import { Level4_6 } from './src/pages/Level4/level4_6';
import { Level4_7 } from './src/pages/Level4/level4_7';
import { Level4_2 } from './src/pages/Level4/level4_2';
import { Level4_3 } from './src/pages/Level4/level4_3';
import { Selection4 } from './src/pages/Selection/Selection4';
import { Level5_1 } from './src/pages/level5/Leve5_1';
import { Level5_5 } from './src/pages/level5/Leve5_5';
import { Level5_6 } from './src/pages/level5/Level5_6';
import { Level5_7 } from './src/pages/level5/Level5_7';
import { Level5_8 } from './src/pages/level5/level5_8';

export default Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={'Level5_8'} >
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
        <Stack.Screen
          name="Level2_8"
          component={Level2_8}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level2_4"
          component={Level2_4}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level2_3"
          component={Level2_3}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Selection2"
          component={Selection2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level2_4_2"
          component={Level2_4_2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level3_1"
          component={Level3_1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level3_2"
          component={Level3_2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level3_4"
          component={Level3_4}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level3_3"
          component={Level3_3}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level3_5"
          component={Level3_5}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level3_6"
          component={Level3_6}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level3_8"
          component={Level3_8}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level3_7"
          component={Level3_7}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Selection3"
          component={Selection3}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level4_1"
          component={Level4_1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level4_4"
          component={Level4_4}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level4_5"
          component={Level4_5}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level4_6"
          component={Level4_6}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level4_7"
          component={Level4_7}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level4_2"
          component={Level4_2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level4_3"
          component={Level4_3}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Selection4"
          component={Selection4}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level5_1"
          component={Level5_1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level5_5"
          component={Level5_5}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level5_6"
          component={Level5_6}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level5_7"
          component={Level5_7}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level5_8"
          component={Level5_8}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

// Level5_7
// Level5_8
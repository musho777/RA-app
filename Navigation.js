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
import { Level5_2 } from './src/pages/level5/level5_2';
import { Level6_3 } from './src/pages/level6/level6_3';
import { Level6_6 } from './src/pages/level6/level6_6';
import { Level6_7 } from './src/pages/level6/level6_7';
import { Level6_5 } from './src/pages/level6/level6_5';
import { Level6_2 } from './src/pages/level6/level6_2';
import { Level7_1 } from './src/pages/level7/level7_1';
import { Level7_6 } from './src/pages/level7/level7_6';
import { Level7_8 } from './src/pages/level7/level7_8';
import { Level7_4 } from './src/pages/level7/level7_4';
import { Level7_5 } from './src/pages/level7/level7_5';
import { Level7_5_1 } from './src/pages/level7/level7_5_1';
import { Level7_7 } from './src/pages/level7/level7_7';
import { Level7_2 } from './src/pages/level7/level7_2';
import { Level7_3 } from './src/pages/level7/Level7_3';
import { Level6_1 } from './src/pages/level6/level6_1';
import { Selection6 } from './src/pages/Selection/Selection6';
import { Selection7 } from './src/pages/Selection/Selection7';
import { Selection5 } from './src/pages/Selection/Selection5';
import { Level8_3 } from './src/pages/Level8/Level8_3';
import { Level8_6 } from './src/pages/Level8/Level8_6';
import { Level5_4 } from './src/pages/level5/Level5_4';
import { Level6_4 } from './src/pages/level6/level6_4';
import { Level6_4_1 } from './src/pages/level6/level6_4_1';
import { Level6_8 } from './src/pages/level6/level6_8';
import { Level5_3 } from './src/pages/level5/Level5_3';
import { Level8_5 } from './src/pages/Level8/Level8_5';
import { Level8_5_1 } from './src/pages/Level8/Level8_5_1';
import { Level8_7 } from './src/pages/Level8/Level8_7';
import { Level8_8 } from './src/pages/Level8/Level8_8';
import { Level8_2 } from './src/pages/Level8/Level8_2';
import { Level8_1 } from './src/pages/Level8/Level8_1';
import { useEffect, useRef } from 'react';
import { BackHandler } from 'react-native';
import { Level9_5 } from './src/pages/Level9/Level9_5';
import { Level9_6 } from './src/pages/Level9/Level9_6';
import { Level9_7 } from './src/pages/Level9/Level9_7';
import { Level9_1 } from './src/pages/Level9/Level9_1';
import { Level9_2 } from './src/pages/Level9/Level9_2';
import { Level9_2_1 } from './src/pages/Level9/Level9_2_1';
import { Level9_8 } from './src/pages/Level9/Level9_8';
import { Level10_3 } from './src/pages/Level10/Level10_3';
import { Level10_5 } from './src/pages/Level10/Level10_5';
import { Level10_7 } from './src/pages/Level10/Level10_7';
import { Level9_3 } from './src/pages/Level9/Level9_3';
import { Level10_4 } from './src/pages/Level10/Level10_4';
import { Level10_2 } from './src/pages/Level10/Level10_2';
import { Level10_1 } from './src/pages/Level10/Level10_1';
import { Level10_6 } from './src/pages/Level10/Level10_6';
import { Level9_4 } from './src/pages/Level9/Level9_4';
import { Selection8 } from './src/pages/Selection/Section8';
import { Selection9 } from './src/pages/Selection/Section9';
import { Selection10 } from './src/pages/Selection/Section10';
import { Level11_8 } from './src/pages/Level11/level11_8';
import { Level8_4 } from './src/pages/Level8/Level8_4';
import { Level11_6 } from './src/pages/Level11/level11_6';
import { Level11_4 } from './src/pages/Level11/level11_4';
import { Level11_3 } from './src/pages/Level11/level11_3';
import { Level11_7 } from './src/pages/Level11/level11_7';
import { Level11_7_1 } from './src/pages/Level11/level11_7_1';
import { Level11_2 } from './src/pages/Level11/level11_2';
import { Level11_1 } from './src/pages/Level11/level11_1';
import { Level5_5_1 } from './src/pages/level5/level5_5_1';

export default Navigation = () => {

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (navigationRef.current &&
          navigationRef.current.getCurrentRoute().name !== 'Selection' &&
          navigationRef.current.getCurrentRoute().name !== 'Selection2' &&
          navigationRef.current.getCurrentRoute().name !== 'Selection3' &&
          navigationRef.current.getCurrentRoute().name !== 'Selection4' &&
          navigationRef.current.getCurrentRoute().name !== 'Selection5' &&
          navigationRef.current.getCurrentRoute().name !== 'Selection6' &&
          navigationRef.current.getCurrentRoute().name !== 'Selection7'
        ) {
          return true;
        }
      }
    );

    return () => {
      backHandler.remove();
    };
  }, []);


  const Stack = createStackNavigator();
  const navigationRef = useRef(null);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={'Level5_5_1'} >
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
            headerShown: false,
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name="Level1_2"
          component={Level1_2}
          options={{
            headerShown: false,
            headerLeft: () => null,
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
        <Stack.Screen
          name="Level5_2"
          component={Level5_2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level6_3"
          component={Level6_3}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level6_6"
          component={Level6_6}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level6_7"
          component={Level6_7}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level6_2"
          component={Level6_2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level6_5"
          component={Level6_5}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level7_1"
          component={Level7_1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level7_6"
          component={Level7_6}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level7_8"
          component={Level7_8}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level7_4"
          component={Level7_4}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level7_5"
          component={Level7_5}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level7_5_1"
          component={Level7_5_1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level7_7"
          component={Level7_7}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level7_2"
          component={Level7_2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level7_3"
          component={Level7_3}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level6_1"
          component={Level6_1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Selection6"
          component={Selection6}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Selection7"
          component={Selection7}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Selection5"
          component={Selection5}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level8_3"
          component={Level8_3}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level8_6"
          component={Level8_6}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level5_4"
          component={Level5_4}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level6_4"
          component={Level6_4}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level6_4_1"
          component={Level6_4_1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level6_8"
          component={Level6_8}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level5_3"
          component={Level5_3}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level8_5"
          component={Level8_5}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level8_5_1"
          component={Level8_5_1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level8_7"
          component={Level8_7}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level8_8"
          component={Level8_8}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level8_2"
          component={Level8_2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level8_1"
          component={Level8_1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level9_5"
          component={Level9_5}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level9_6"
          component={Level9_6}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level9_7"
          component={Level9_7}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level9_1"
          component={Level9_1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level9_2"
          component={Level9_2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level9_2_1"
          component={Level9_2_1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level9_4"
          component={Level9_4}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level9_8"
          component={Level9_8}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level10_3"
          component={Level10_3}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level10_5"
          component={Level10_5}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level10_7"
          component={Level10_7}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level9_3"
          component={Level9_3}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level10_4"
          component={Level10_4}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level10_2"
          component={Level10_2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level10_1"
          component={Level10_1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level10_6"
          component={Level10_6}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Selection8"
          component={Selection8}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Selection9"
          component={Selection9}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Selection10"
          component={Selection10}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level11_8"
          component={Level11_8}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level11_6"
          component={Level11_6}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level8_4"
          component={Level8_4}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level11_4"
          component={Level11_4}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level11_3"
          component={Level11_3}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level11_7"
          component={Level11_7}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level11_7_1"
          component={Level11_7_1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level11_2"
          component={Level11_2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level11_1"
          component={Level11_1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Level5_5_1"
          component={Level5_5_1}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

// Level11_7_1
// Level11_2
// Level11_1
// Level5_5_1
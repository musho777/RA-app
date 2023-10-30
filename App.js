import Sound from "react-native-sound";
import Navigation from "./Navigation"
import { useEffect, useState } from "react";
import { AppState } from 'react-native';

import { BackHandler } from 'react-native';
export default App = () => {



  const [appState, setAppState] = useState(AppState.currentState);
  const sound1 = new Sound('a.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.error('Failed to load sound1', error);
      return;
    }
  });


  const sound2 = new Sound('b.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.error('Failed to load sound2', error);
      return;
    }
  })
  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      setAppState(nextAppState);

      if (nextAppState === 'active') {
        startLockCheck();
      }
    };

    const appStateSubscription = AppState.addEventListener(
      'change',
      handleAppStateChange
    );

    startLockCheck();

    return () => {
      appStateSubscription.remove();
    };
  }, []);

  const startLockCheck = () => {
    // Implement your logic to check if the screen is locked
    // You can use native modules or third-party libraries
    // For simplicity, we're assuming it's always unlocked in this example.
    // setIsLocked(false);

  };

  const handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'background') {
      sound1.stop(() => {
        sound1.setCurrentTime(0);
      })
      sound2.stop()
    }
  };


  useEffect(() => {
    const appStateSubscription = AppState.addEventListener(
      'change',
      handleAppStateChange
    );

    return () => {
      appStateSubscription.remove();
    };
  }, []);
  useEffect(() => {
    if (appState != 'active') {
      sound1.stop(() => {
        sound1.setCurrentTime(0);
      })
      sound2.stop()
    }
  }, [appState])

  useEffect(() => {
    setTimeout(() => {
      sound1.play((success) => {
        if (success) {
          setTimeout(() => {
            playSound2();
          }, 1000);
        } else {
          console.error('Failed to play sound1');
        }
      });
    }, 100)

    function playSound2() {
      sound1.stop(() => {
        sound1.setCurrentTime(0);
        sound2.play((success) => {
          if (success) {
            setTimeout(() => {
              playSound1();
            }, 1000);
          } else {
            console.error('Failed to play sound2');
          }
        });
      });
    }

    function playSound1() {
      sound2.stop(() => {
        sound2.setCurrentTime(0);
        sound1.play((success) => {
          if (success) {
            setTimeout(() => {
              playSound2();
            }, 1000);
          } else {
            console.error('Failed to play sound1');
          }
        });
      });
    }
    ;

    return () => {
      sound1.release();
    };
  }, [appState]);


  return <Navigation />
}
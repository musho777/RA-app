import Sound from "react-native-sound";
import Navigation from "./Navigation"
import { useEffect, useState } from "react";

export default App = () => {

  const music1 = new Sound('a.mp3', Sound.MAIN_BUNDLE,
    (error) => {
      if (error) {
        console.log('Error loading music:', error);
        return
      }
    });
  const music2 = new Sound('b.mp3', Sound.MAIN_BUNDLE,
    (error) => {
      if (error) {
        console.log('Error loading music:', error);
        return
      }
    });
  useEffect(() => {
    const sound1 = new Sound('a.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.error('Failed to load sound1', error);
        return;
      }

      const sound2 = new Sound('b.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.error('Failed to load sound2', error);
          return;
        }

        sound1.play((success) => {
          if (success) {
            setTimeout(() => {
              playSound2();
            }, 1000);
          } else {
            console.error('Failed to play sound1');
          }
        });

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
      });
    });

    return () => {
      sound1.release();
    };
  }, []);


  return <Navigation />

}
import Sound from "react-native-sound";
import Navigation from "./Navigation"
import { useEffect, useState } from "react";

export default App = () => {
  const [count, setCount] = useState(true)


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
  // useEffect(() => {
  //   music1.play()
  //   setTimeout(() => {
  //     music1.play()
  //   }, 100);
  //   const intervalId = setInterval(() => {
  //     console.log(count)
  //     if (count) {
  //       // console.log(true)
  //       music1.stop()
  //       music2.play()
  //       setCount(false)
  //     }
  //     else {
  //       // console.log(false)
  //       music2.stop()
  //       music1.play()
  //       setCount(true)
  //     }
  //   }, 28000);
  //   console.log('22')

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);
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

        // Play sound1 initially
        sound1.play((success) => {
          if (success) {
            setTimeout(() => {
              // After a delay, play sound2 and set up a loop
              playSound2();
            }, 1000); // 1000 milliseconds (1 second) delay before switching to sound2
          } else {
            console.error('Failed to play sound1');
          }
        });

        function playSound2() {
          sound1.stop(() => {
            sound1.setCurrentTime(0); // Reset the current time for sound1
            sound2.play((success) => {
              if (success) {
                setTimeout(() => {
                  // After a delay, play sound1 and set up a loop
                  playSound1();
                }, 1000); // 1000 milliseconds (1 second) delay before switching to sound1
              } else {
                console.error('Failed to play sound2');
              }
            });
          });
        }

        function playSound1() {
          sound2.stop(() => {
            sound2.setCurrentTime(0); // Reset the current time for sound2
            sound1.play((success) => {
              if (success) {
                setTimeout(() => {
                  // After a delay, play sound2 and set up a loop
                  playSound2();
                }, 1000); // 1000 milliseconds (1 second) delay before switching to sound2
              } else {
                console.error('Failed to play sound1');
              }
            });
          });
        }
      });
    });

    return () => {
      // Release resources when the component unmounts
      sound1.release();
    };
  }, []);


  return <Navigation />

}
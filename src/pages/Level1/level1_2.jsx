import { Image, View } from "react-native"
import { LevelWrapper } from "../../components/LevelWrapper";
import { ImgButton } from "../../components/ImgButton";
import { useEffect, useState } from "react";
import Sound from "react-native-sound";

export const Level1_2 = ({ navigation }) => {

    const music = new Sound('ding.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const musicSuccess = new Sound('success.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const sound1 = new Sound('game121.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const sound2 = new Sound('game122.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const sound3 = new Sound('game123.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const sound4 = new Sound('game124.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const sound5 = new Sound('game125.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const sound6 = new Sound('game126.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const [game, setGame] = useState([
        {
            item: [
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/улитка.png')} />, key: 2 },
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/черепаха.png')} />, key: 3 },
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/самолет.png')} />, key: 1 },
                { img: <Image style={{ width: 80, height: 50 }} source={require('../../assets/img/level1/game2/машина.png')} />, key: 4 },
                { img: <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/level1/game2/заяц.png')} />, key: 5 },
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/лошадь.png')} />, key: 6 },
            ],
            sound: ''
        },
        {
            item: [
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/черепаха.png')} />, key: 1 },
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/лошадь.png')} />, key: 5 },
                { img: <Image style={{ width: 80, height: 50 }} source={require('../../assets/img/level1/game2/машина.png')} />, key: 4 },
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/улитка.png')} />, key: 2 },
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/самолет.png')} />, key: 3 },
                { img: <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/level1/game2/заяц.png')} />, key: 6 },
            ],
            sound: ''
        },
        {
            item: [
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/конфета.png')} />, key: 5 },
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/лимон.png')} />, key: 1 },
                { img: <Image style={{ width: 50, height: 80 }} source={require('../../assets/img/level1/game2/цветокколокольчик.png')} />, key: 4 },
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/чашка.png')} />, key: 2 },
                { img: <Image style={{ width: 60, height: 80 }} source={require('../../assets/img/level1/game2/карандаш.png')} />, key: 3 },
                { img: <Image style={{ width: 80, height: 50 }} source={require('../../assets/img/level1/game2/ракушка.png')} />, key: 6 },
            ],
            sound: ''
        },
        {
            item: [
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/лимон.png')} />, key: 5 },
                { img: <Image style={{ width: 50, height: 80 }} source={require('../../assets/img/level1/game2/цветокколокольчик.png')} />, key: 4 },
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/чашка.png')} />, key: 2 },
                { img: <Image style={{ width: 60, height: 80 }} source={require('../../assets/img/level1/game2/карандаш.png')} />, key: 3 },
                { img: <Image style={{ width: 80, height: 50 }} source={require('../../assets/img/level1/game2/ракушка.png')} />, key: 6 },
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/конфета.png')} />, key: 1 },
            ],
            sound: ''
        },
        {
            item: [
                { img: <Image style={{ width: 60, height: 80 }} source={require('../../assets/img/level1/game2/чашкаспаром.png')} />, key: 1 },
                { img: <Image style={{ width: 60, height: 80 }} source={require('../../assets/img/level1/game2/мороженое.png')} />, key: 2 },
                { img: <Image style={{ width: 60, height: 80 }} source={require('../../assets/img/level1/game2/яблоко.png')} />, key: 3 },
                { img: <Image style={{ width: 80, height: 50 }} source={require('../../assets/img/level1/game2/макароны.png')} />, key: 6 },
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/зубнаяпаста.png')} />, key: 4 },
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/ластик.png')} />, key: 5 },
            ],
            sound: ''
        },
        {
            item: [
                { img: <Image style={{ width: 80, height: 50 }} source={require('../../assets/img/level1/game2/макароны.png')} />, key: 6 },
                { img: <Image style={{ width: 60, height: 80 }} source={require('../../assets/img/level1/game2/яблоко.png')} />, key: 3 },
                { img: <Image style={{ width: 60, height: 80 }} source={require('../../assets/img/level1/game2/чашкаспаром.png')} />, key: 2 },
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/зубнаяпаста.png')} />, key: 4 },
                { img: <Image style={{ width: 60, height: 80 }} source={require('../../assets/img/level1/game2/мороженое.png')} />, key: 1 },
                { img: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level1/game2/ластик.png')} />, key: 5 },
            ],
            sound: ''
        },
    ])
    const [game1, setGame1] = useState(0)
    const [activeGame, setActiveGame] = useState([])
    useEffect(() => {
        setTimeout(() => {
            sound1.stop()
        }, 100);
        sound2.stop()
        sound3.stop()
        sound4.stop()
        sound5.stop()
        sound6.stop()

        if (game1 == 0) {
            setTimeout(() => {
                sound4.play()
            }, 100);
        }
        else if (game1 == 1) {
            setTimeout(() => {
                sound3.play()
            }, 100);
        }
        else if (game1 == 2) {
            setTimeout(() => {
                sound1.play()
            }, 100);
        }
        else if (game1 == 3) {
            setTimeout(() => {
                sound2.play()
            }, 100);
        }
        else if (game1 == 4) {
            setTimeout(() => {
                sound5.play()
            }, 100);
        }
        else if (game1 == 5) {
            setTimeout(() => {
                sound6.play()
            }, 100);
        }
        setActiveGame(game[game1])
    }, [game1])

    const Win = (id) => {
        if (id === 1) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                if (game1 < 5) {
                    setGame1(game1 + 1)
                }
                else {
                    navigation.navigate('Level1_3')
                }
                musicSuccess.stop()
            }, 2000);
        }
        else {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 2000);
        }
    }
    return (
        <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} jC="center">
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {activeGame?.item?.map((elm, i) => {
                    return <ImgButton onPress={() => Win(elm.key)} key={i} svg={elm.img} />
                })}
            </View>
        </LevelWrapper>
    )
}
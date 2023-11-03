import { Image, View } from "react-native"
import { LevelWrapper } from "../../components/LevelWrapper";
import { ImgButton } from "../../components/ImgButton";
import { useEffect, useState } from "react";
import Sound from "react-native-sound";
import { GetRandomItemsFromArray } from "../../components/Funtion/getRandomItemsFromArray";

export const Level10_7 = ({ navigation }) => {
    const [data, setData] = useState([
        [
            { icon: <Image style={{ width: 20, height: 90 }} source={require('../../assets/img/level10/game7/umbrella.png')} />, id: 1 },
            { icon: <Image style={{ width: 80, height: 55 }} source={require('../../assets/img/level10/game7/binoculars.png')} />, id: 2 },
            { icon: <Image style={{ width: 60, height: 80 }} source={require('../../assets/img/level10/game7/chair.png')} />, id: 3 },
            { icon: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level10/game7/pot.png')} />, id: 4 },
            { icon: <Image style={{ width: 80, height: 55 }} source={require('../../assets/img/level10/game7/inflatablecircle.png')} />, id: 5 },
        ],
        [
            { icon: <Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level10/game7/iron.png')} />, id: 1 },
            { icon: <Image style={{ width: 65, height: 75 }} source={require('../../assets/img/level10/game7/helmet.png')} />, id: 2 },
            { icon: <Image style={{ width: 55, height: 70 }} source={require('../../assets/img/level10/game7/lock.png')} />, id: 3 },
            { icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level10/game7/scooter.png')} />, id: 4 },
            { icon: <Image style={{ width: 60, height: 70 }} source={require('../../assets/img/level10/game7/smartphone.png')} />, id: 5 },
        ]
    ])
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

    const sound = new Sound('game1071.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const sound1 = new Sound('game1072.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });

    const [activeArr, setActiveArr] = useState([])
    const [game1, setGame1] = useState(0)

    useEffect(() => {
        if (game1 == 0) {
            setTimeout(() => {
                sound.play()
            }, 100)
        }
        else {
            sound.stop()
            setTimeout(() => {
                sound1.play()
            }, 100)
        }
        let item = GetRandomItemsFromArray(data[game1], data[game1].length)
        setActiveArr(item)
    }, [game1])


    const Game = (elm) => {
        if (elm.id == 1) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                if (game1 === 1) {
                    navigation.navigate('LevelScreen')
                }
                else {
                    setGame1(game1 + 1)
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
                {activeArr.map((elm, i) => {
                    return <ImgButton width={100} height={100} key={i} svg={elm.icon} onPress={() => Game(elm)} />
                })}
            </View>
        </LevelWrapper>
    )
}
import { Image, View } from "react-native"
import { LevelWrapper } from "../../components/LevelWrapper";
import { ImgButton } from "../../components/ImgButton";
import { useEffect, useState } from "react";
import Sound from "react-native-sound";
import { GetRandomItemsFromArray } from "../../components/Funtion/getRandomItemsFromArray";

export const Level10_7 = ({ navigation }) => {
    const [data, setData] = useState([
        [
            { icon: <Image style={{ width: 20, height: 60 }} source={require('../../assets/img/level10/game7/umbrella.png')} />, id: 1 },
            { icon: <Image style={{ width: 60, height: 40 }} source={require('../../assets/img/level10/game7/binoculars.png')} />, id: 2 },
            { icon: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level10/game7/chair.png')} />, id: 3 },
            { icon: <Image style={{ width: 60, height: 40 }} source={require('../../assets/img/level10/game7/pot.png')} />, id: 4 },
            { icon: <Image style={{ width: 60, height: 40 }} source={require('../../assets/img/level10/game7/inflatablecircle.png')} />, id: 5 },
        ],
        [
            { icon: <Image style={{ width: 60, height: 50 }} source={require('../../assets/img/level10/game7/iron.png')} />, id: 1 },
            { icon: <Image style={{ width: 55, height: 65 }} source={require('../../assets/img/level10/game7/helmet.png')} />, id: 2 },
            { icon: <Image style={{ width: 50, height: 60 }} source={require('../../assets/img/level10/game7/lock.png')} />, id: 3 },
            { icon: <Image style={{ width: 60, height: 60 }} source={require('../../assets/img/level10/game7/scooter.png')} />, id: 4 },
            { icon: <Image style={{ width: 50, height: 60 }} source={require('../../assets/img/level10/game7/smartphone.png')} />, id: 5 },
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

    const [activeArr, setActiveArr] = useState([])
    const [game1, setGame1] = useState(0)

    useEffect(() => {
        let item = GetRandomItemsFromArray(data[game1], data[game1].length)
        setActiveArr(item)
    }, [game1])


    const Game = (elm) => {
        console.log(elm)
        if (elm.id == 1) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                if (game1 === 1) {
                    // navigation.navigate('Level7_2')
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
                    return <ImgButton key={i} svg={elm.icon} onPress={() => Game(elm)} />
                })}
            </View>
        </LevelWrapper>
    )
}
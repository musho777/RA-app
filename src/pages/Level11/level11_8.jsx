import { Image, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'
import Sound from 'react-native-sound'

export const Level11_8 = ({ navigation }) => {
    const [win, setWin] = useState(false)
    const [image, setImage] = useState({
        proble: <Image source={require('../../assets/img/level11/game8/доскаверхняячасть.png')} style={{ width: 150, height: 150 }} />,
        icon: [
            { icon: <Image source={require('../../assets/img/level11/game8/досканижняячсть1.png')} style={{ width: 150, height: 150 }} />, id: 1 },
            { icon: <Image source={require('../../assets/img/level11/game8/досканижняячасть2.png')} style={{ width: 150, height: 150 }} />, id: 2 },
            { icon: <Image source={require('../../assets/img/level11/game8/досканижняячасть.png')} style={{ width: 150, height: 150 }} />, id: 3 },
        ],
        solution: <Image source={require('../../assets/img/level11/game8/доскацелая.png')} style={{ width: 200, height: 250 }} />
    })
    const [image1, setImage1] = useState({
        proble: <Image source={require('../../assets/img/level11/game8/капуставерхняячасть.png')} style={{ width: 150, height: 150 }} />,
        icon: [
            { icon: <Image source={require('../../assets/img/level11/game8/капустанижняячасть.png')} style={{ width: 150, height: 150 }} />, id: 3 },
            { icon: <Image source={require('../../assets/img/level11/game8/капустанижняячасть1.png')} style={{ width: 150, height: 150 }} />, id: 1 },
            { icon: <Image source={require('../../assets/img/level11/game8/капустанижняячасть2.png')} style={{ width: 150, height: 150 }} />, id: 2 },
        ],
        solution: <Image source={require('../../assets/img/level11/game8/капустацелая.png')} style={{ width: 200, height: 250 }} />
    })

    const [game1, setGame1] = useState(0)

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

    const [arr, setArr] = useState()
    useEffect(() => {
        let item = {}
        // const randomNum = Math.floor(Math.random() * 2)

        if (game1) {

            item = { ...image1 }
        }
        else {
            item = { ...image }
        }
        let arr1 = GetRandomItemsFromArray(item.icon, 3)
        item.icon = arr1
        setArr(item)
    }, [game1])
    const Game = (id) => {
        if (id == 3) {
            setWin(true)
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                setGame1(game1 + 1)
                if (game1 == 1) {
                    navigation.navigate('LevelScreen')
                }
                setWin(false)
                musicSuccess.stop()
            }, 2000);
        }
        else {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);
        }
    }
    return <LevelWrapper img2={require('../../assets/img/bg5.png')} img={require('../../assets/img/5bg.png')} jC='center'>

        {win ?
            <View style={{ alignItems: 'center' }}>
                {arr?.solution}
            </View> :
            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {arr?.proble}
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 25, paddingHorizontal: 120 }}>
                    {arr?.icon?.map((elm, i) => {
                        return <TouchableOpacity onPress={() => Game(elm.id)} key={i}>
                            {elm?.icon}
                        </TouchableOpacity>
                    })}
                </View>
            </View>
        }
    </LevelWrapper>
}
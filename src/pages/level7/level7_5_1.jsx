import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
import { NumberButton } from '../../components/NumberBuuton'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'

export const Level7_5_1 = ({ navigation }) => {
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
    const sound = new Sound('game75.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    useEffect(() => {
        setTimeout(() => {
            sound.play()
        }, 100);
    }, [])
    const [button, setButton] = useState([
        [
            { icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level7/game5/кувшинка1.png')} />, key: 1 },
            { icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level7/game5/кувшинка2.png')} />, key: 2 },
            { icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level7/game5/кувшинка3.png')} />, key: 3 },
        ],
        [
            { icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level7/game5/кувшинка4.png')} />, key: 4 },
            { icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level7/game5/кувшинка5.png')} />, key: 5 },
            { icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level7/game5/кувшинка6.png')} />, key: 6 },

        ],
        [
            { icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level7/game5/кувшинка7.png')} />, key: 7 },
            { icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level7/game5/кувшинка8.png')} />, key: 8 },
            { icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level7/game5/кувшинка9.png')} />, key: 9 },
        ]
    ])


    const [arr, setArr] = useState([])

    useEffect(() => {
        let item = [...button]
        let item1 = GetRandomItemsFromArray(item, item.length)
        let item2 = GetRandomItemsFromArray(item1[0], item1[0].length)
        let item3 = GetRandomItemsFromArray(item1[1], item1[1].length)
        let item4 = GetRandomItemsFromArray(item1[2], item1[2].length)
        setButton([item4, item2, item3])
    }, [])


    const Game = (elm) => {
        let item = [...arr]
        if (elm.key === item.length + 1) {
            item.push(elm)
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
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
        setArr(item)
    }
    useEffect(() => {
        if (arr.length == 9) {
            sound.stop()
            navigation.navigate('Level7_6')
        }
    }, [arr])
    return <LevelWrapper img2={require('../../assets/img/bg3.png')} img={require('../../assets/img/3bh.png')} >
        <View style={{ justifyContent: 'center', height: '100%', flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 130 }}>
                {button[0].map((elm, i) => {
                    if (!arr.includes(elm)) {
                        return <ImgButton bg={'#A0CDD4'} border='rgb(54, 76, 156)' key={i} onPress={() => Game(elm)} svg={elm.icon} />
                    }
                    return <View key={i} style={{ width: 90, height: 90 }}></View>
                })}
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-around', paddingHorizontal: 130, paddingVertical: 10 }}>
                {button[1].map((elm, i) => {
                    if (!arr.includes(elm)) {
                        return <ImgButton bg={'#A0CDD4'} border='rgb(54, 76, 156)' key={i} onPress={() => Game(elm)} svg={elm.icon} />

                    }
                    return <View key={i} style={{ width: 90, height: 90 }}></View>
                })}
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-around', paddingHorizontal: 130 }}>
                {button[2].map((elm, i) => {
                    if (!arr.includes(elm)) {
                        return <ImgButton bg={'#A0CDD4'} border='rgb(54, 76, 156)' key={i} onPress={() => Game(elm)} svg={elm.icon} />
                    }
                    return <View key={i} style={{ width: 90, height: 90 }}></View>
                })}
            </View>
        </View>
    </LevelWrapper>
}
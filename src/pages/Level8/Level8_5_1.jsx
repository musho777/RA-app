import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
import { NumberButton } from '../../components/NumberBuuton'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'

export const Level8_5_1 = ({ navigation }) => {
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
    const [button, setButton] = useState([
        [
            { icon: <Image style={{ width: 60, height: 60 }} source={require('../../assets/img/level8/game5/crab1.png')} />, id: 1 },
            { icon: <Image style={{ width: 60, height: 60 }} source={require('../../assets/img/level8/game5/crab2.png')} />, id: 2 },
            { icon: <Image style={{ width: 60, height: 60 }} source={require('../../assets/img/level8/game5/crab3.png')} />, id: 3 },
        ],
        [
            { icon: <Image style={{ width: 60, height: 60 }} source={require('../../assets/img/level8/game5/crab4.png')} />, id: 4 },
            { icon: <Image style={{ width: 60, height: 60 }} source={require('../../assets/img/level8/game5/crab5.png')} />, id: 5 },
            { icon: <Image style={{ width: 60, height: 60 }} source={require('../../assets/img/level8/game5/crab6.png')} />, id: 6 },
        ],
        [
            { icon: <Image style={{ width: 60, height: 60 }} source={require('../../assets/img/level8/game5/crab7.png')} />, id: 7 },
            { icon: <Image style={{ width: 60, height: 60 }} source={require('../../assets/img/level8/game5/crab8.png')} />, id: 8 },
            { icon: <Image style={{ width: 60, height: 60 }} source={require('../../assets/img/level8/game5/crab9.png')} />, id: 9 },
        ],
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
        if (elm.id === item.length + 1) {
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
            // navigation.navigate('Level7_6')
        }
    }, [arr])
    return <LevelWrapper img2={require('../../assets/img/3y.png')} img={require('../../assets/img/3yy.png')}>
        <View style={{ justifyContent: 'center', height: '100%', flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 200 }}>
                {button[0]?.map((elm, i) => {
                    if (!arr.includes(elm)) {
                        return <ImgButton bg={'#A0CDD4'} bc='rgba(160, 205, 212, 0.4)' key={i} onPress={() => Game(elm)} svg={elm.icon} />
                    }
                    return <View key={i} style={{ width: 90, height: 90 }}></View>
                })}
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-around', paddingHorizontal: 200, paddingVertical: 10 }}>
                {button[1]?.map((elm, i) => {
                    if (!arr.includes(elm)) {
                        return <ImgButton bg={'#A0CDD4'} bc='rgba(160, 205, 212, 0.4)' key={i} onPress={() => Game(elm)} svg={elm.icon} />
                    }
                    return <View key={i} style={{ width: 90, height: 90 }}></View>
                })}
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-around', paddingHorizontal: 200 }}>
                {button[2]?.map((elm, i) => {
                    if (!arr.includes(elm)) {
                        return <ImgButton bg={'#A0CDD4'} bc='rgba(160, 205, 212, 0.4)' key={i} onPress={() => Game(elm)} svg={elm.icon} />
                    }
                    return <View key={i} style={{ width: 90, height: 90 }}></View>
                })}
            </View>
        </View>
    </LevelWrapper>
}
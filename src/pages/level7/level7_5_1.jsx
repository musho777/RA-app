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
    const [button, setButton] = useState([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
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
        if (elm === item.length + 1) {
            item.push(elm)
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                // navigation.navigate('Level3_6')
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

    console.log(arr)
    return <LevelWrapper img2={require('../../assets/img/bg3.png')} img={require('../../assets/img/3bh.png')} >
        <View style={{ justifyContent: 'center', height: '100%', flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 250 }}>
                {button[0].map((elm, i) => {
                    if (!arr.includes(elm)) {
                        return <NumberButton bg={'#A0CDD4'} bc='rgba(160, 205, 212, 0.4)' key={i} onPress={() => Game(elm)} number={elm} />
                    }
                    return <View key={i} style={{ width: 55, height: 55 }}></View>
                })}
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-around', paddingHorizontal: 250, paddingVertical: 10 }}>
                {button[1].map((elm, i) => {
                    if (!arr.includes(elm)) {
                        return <NumberButton bg={'#A0CDD4'} bc='rgba(160, 205, 212, 0.4)' key={i} onPress={() => Game(elm)} number={elm} />
                    }
                    return <View key={i} style={{ width: 55, height: 55 }}></View>
                })}
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-around', paddingHorizontal: 250 }}>

                {button[2].map((elm, i) => {
                    if (!arr.includes(elm)) {
                        return <NumberButton bg={'#A0CDD4'} bc='rgba(160, 205, 212, 0.4)' key={i} onPress={() => Game(elm)} number={elm} />
                    }
                    return <View key={i} style={{ width: 55, height: 55 }}></View>
                })}
            </View>
        </View>
    </LevelWrapper>
}
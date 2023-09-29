import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'

export const Level6_2 = ({ navigation }) => {
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

    const [arr, setArr] = useState([
        { icon: <Image style={{ width: 65, height: 65 }} source={require('../../assets/img/level6/game2/circlepurple.png')} />, id: 1, active: false },
        { icon: <Image style={{ width: 65, height: 65 }} source={require('../../assets/img/level6/game2/diamondgreen.png')} />, id: 2, active: false },
        { icon: <Image style={{ width: 65, height: 45 }} source={require('../../assets/img/level6/game2/ovalyellow.png')} />, id: 3, active: false },
        { icon: <Image style={{ width: 65, height: 65 }} source={require('../../assets/img/level6/game2/rectangleblue.png')} />, id: 4, active: false },
        { icon: <Image style={{ width: 65, height: 65 }} source={require('../../assets/img/level6/game2/squarepink.png')} />, id: 5, active: false },
        { icon: <Image style={{ width: 65, height: 65 }} source={require('../../assets/img/level6/game2/trianglepink.png')} />, id: 6, active: false },

    ])

    useEffect(() => {
        item = GetRandomItemsFromArray(arr, arr.length)
        setArr(item)
    }, [])

    const [answer, setAnswer] = useState(['', '', '', '', '', '',])
    const Game = (elm) => {
        let item = [...answer]
        if (elm.id == 1) {
            item[elm.id - 1] = elm
        }
        else if (item[elm.id - 2] !== '') {
            item[elm.id - 1] = elm
        }
        else {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);
        }
        if (item[5] != '') {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 2000);
        }
        setAnswer(item)
    }

    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {answer.map((elm, i) => {
                    return <ImgButton width={80} height={80} disable={true} key={i} svg={elm.icon} />
                })}
            </View>
            <View style={{ width: '100%', borderWidth: 2, borderColor: '#9C3', borderRadius: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {arr.map((elm, i) => {
                    if (elm.active) {
                        return <View key={i} style={{ width: 80, height: 80 }}></View>
                    }
                    return <ImgButton width={80} height={80} onPress={() => Game(elm)} key={i} svg={elm.icon} />
                })}
            </View>
        </View>
    </LevelWrapper>
}
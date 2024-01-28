import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'
import { ImgButton } from '../../components/ImgButton'
import Sound from 'react-native-sound'

export const Level9_2 = ({ navigation }) => {
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

    const sound = new Sound('game991.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });

    const [arr, setArr] = useState([
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game2/c1.png')} />, id: 1, active: false },
        { icon: <Image style={{ width: 70, height: 50 }} source={require('../../assets/img/level9/game2/c2.png')} />, id: 1, active: false },
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game2/c3.png')} />, id: 1, active: false },
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game2/c4.png')} />, id: 1, active: false },
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game2/c5.png')} />, id: 1, active: false },
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game2/c6.png')} />, id: 1, active: false },
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game2/c7.png')} />, id: 1, active: false },
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game2/squarepink.png')} />, id: 2, active: false },
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game2/diamondgreen.png')} />, id: 2, active: false },

    ])


    const Game = (elm, i) => {
        let item = [...arr]
        if (elm.id === 1) {
            item[i].active = true
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 1000);
        }
        else {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);
        }
        setArr(item)
    }



    useEffect(() => {
        setTimeout(() => {
            sound.play()
        }, 100)
        let item = GetRandomItemsFromArray(arr, arr.length)
        setArr(item)
    }, [])

    useEffect(() => {
        let count = 0
        arr.map((elm, i) => {
            if (!elm.active) {
                count = count + 1
            }
        })
        if (count == 2) {
            sound.stop()
            navigation.navigate('Level9_2_1')
        }
    }, [arr])

    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
        <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
            <View style={{ gap: 7, width: '55%', height: '100%', flexDirection: "row", flexWrap: 'wrap' }}>
                {arr.map((elm, i) => {
                    if (!elm.active) {
                        return <ImgButton onPress={() => Game(elm, i)} key={i} svg={elm.icon} />
                    }
                    else {
                        return <View key={i} style={{ width: 90, height: 90 }}></View>
                    }
                })}
            </View>
            <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 270, height: 220 }} source={require('../../assets/img/level9/game2/c.png')} />
            </View>
        </View>
    </LevelWrapper>
}
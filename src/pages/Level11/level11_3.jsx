import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'
import { ImgButton } from '../../components/ImgButton'
import { Blue6 } from '../../assets/svg'
import Sound from 'react-native-sound'

export const Level11_3 = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;

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
    const sound = new Sound('game113.mp3', Sound.MAIN_BUNDLE,
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
    const [arr, setArr] = useState([
        {
            icon1: <Image style={{ width: windowWidth / 20, height: windowWidth / 14 }} source={require('../../assets/img/level10/game1/4.png')} />,
            id: 3,
            active: true,
            icon: <Image style={{ width: windowWidth / 20, height: windowWidth / 14 }} source={require('../../assets/img/level10/game1/4.1.png')} />,
        },
        {
            icon1: <Image style={{ width: windowWidth / 20, height: windowWidth / 14 }} source={require('../../assets/img/level10/game1/7.1.png')} />,
            id: 2,
            active: true,
            icon: <Image style={{ width: windowWidth / 20, height: windowWidth / 14 }} source={require('../../assets/img/level10/game1/7.png')} />,
        },
        {
            icon: <Image style={{ width: windowWidth / 20, height: windowWidth / 14 }} source={require('../../assets/img/level10/game1/9.png')} />,
            active: false,
            id: 1,
            icon1: <Image style={{ width: windowWidth / 20, height: windowWidth / 14 }} source={require('../../assets/img/9голубая.png')} />,
        },
        {
            icon: <Image style={{ width: windowWidth / 15, height: windowWidth / 15 }} source={require('../../assets/img/level10/game1/k1.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: windowWidth / 14, height: windowWidth / 20 }} source={require('../../assets/img/level10/game1/o2.png')} />,
        },
        {
            icon: <Image style={{ width: windowWidth / 14, height: windowWidth / 20 }} source={require('../../assets/img/level10/game1/p1.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: windowWidth / 14, height: windowWidth / 15 }} source={require('../../assets/img/level10/game1/r1.png')} />,
        },
        {
            icon: <Image style={{ width: windowWidth / 20, height: windowWidth / 14 }} source={require('../../assets/img/level10/game1/9.png')} />,
            active: false,
            id: 1,
            icon1: <Image style={{ width: windowWidth / 20, height: windowWidth / 14 }} source={require('../../assets/img/9голубая.png')} />,
        },
        {
            icon: <Image style={{ width: windowWidth / 14, height: windowWidth / 14 }} source={require('../../assets/img/level10/game1/o2.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: windowWidth / 14, height: windowWidth / 14 }} source={require('../../assets/img/level10/game1/r1.png')} />,

        },
        {
            icon: <Image style={{ width: windowWidth / 14, height: windowWidth / 14 }} source={require('../../assets/img/level10/game1/r1.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: windowWidth / 15, height: windowWidth / 14 }} source={require('../../assets/img/level10/game1/r1.png')} />,

        },
        {
            icon: <Image style={{ width: windowWidth / 14, height: windowWidth / 14 }} source={require('../../assets/img/level10/game1/o2.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: windowWidth / 14, height: windowWidth / 20 }} source={require('../../assets/img/level10/game1/o2.png')} />,

        },
        {
            icon: <Image style={{ width: windowWidth / 14, height: windowWidth / 14 }} source={require('../../assets/img/level10/game1/k1.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: windowWidth / 12, height: windowWidth / 12 }} source={require('../../assets/img/level10/game1/k1.png')} />,

        },
        {
            icon: <Image style={{ width: windowWidth / 20, height: windowWidth / 14 }} source={require('../../assets/img/level10/game1/9.png')} />,
            active: false,
            id: 1,
            icon1: <Image style={{ width: windowWidth / 20, height: windowWidth / 14 }} source={require('../../assets/img/9голубая.png')} />,
        },
        {
            icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game1/p1.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: windowWidth / 17, height: windowWidth / 15 }} source={require('../../assets/img/level10/game1/p1.png')} />,

        },
    ])

    const [selctedColor, setSelectedColor] = useState()

    const Game = (elm, i) => {
        let item = [...arr]
        if (elm.id == selctedColor) {
            item[i].active = true
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
        let win = true
        arr.map((elm, i) => {
            if (!elm.active) {
                win = false
            }
        })
        if (win) {
            sound.stop()
            navigation.navigate('Level11_4')
        }
    }, [arr])


    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ width: '54%', height: '100%', flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
                {arr.map((elm, i) => {
                    if (!elm.active) {
                        return <ImgButton width={windowWidth / 10} height={windowWidth / 10} onPress={() => Game(elm, i)} key={i} svg={elm.icon} />
                    }
                    return <ImgButton width={windowWidth / 10} height={windowWidth / 10} onPress={() => Game(elm, i)} key={i} svg={elm.icon1} />

                })}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                <TouchableOpacity onPress={() => setSelectedColor(1)}>
                    <Blue6 />
                </TouchableOpacity>
            </View>
        </View>
    </LevelWrapper>
}
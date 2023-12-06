import { Image, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'
import { ImgButton } from '../../components/ImgButton'
import { PinkColor, PinkColor1, PurpleColor, PurpleColor1, } from '../../assets/svg'
import Sound from 'react-native-sound'

export const Level5_3 = ({ navigation }) => {
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
    const sound1 = new Sound('game531.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const sound2 = new Sound('game532.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    useEffect(() => {
        setTimeout(() => {
            sound1.play()
        }, 100);
        setTimeout(() => {
            sound1.stop()
            sound2.play()
        }, 6000);
    }, [])
    const [arr, setArr] = useState([
        {
            icon: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level5/game3/8.png')} />,
            id: 1,
            active: false,
            icon1: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level5/game3/8сиреневая.png')} />,
        },
        {
            icon: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level10/game1/7.1.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level10/game1/7.1.png')} />,
        },
        {
            icon: <Image style={{ width: 40, height: 55 }} source={require('../../assets/img/level5/game3/2.png')} />,
            active: false,
            id: 2,
            icon1: <Image style={{ width: 40, height: 55 }} source={require('../../assets/img/level5/game3/2розовая.png')} />,

        },
        {
            icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game1/k1.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: 60, height: 35 }} source={require('../../assets/img/level10/game1/o2.png')} />,


        },
        {
            icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game1/p1.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level10/game1/r1.png')} />,


        },
        {
            icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game1/t1.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: 60, height: 50 }} source={require('../../assets/img/level10/game1/tr1.png')} />,

        },
        {
            icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game1/o2.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level10/game1/r1.png')} />,

        },
        {
            icon: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level10/game1/r1.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level10/game1/r1.png')} />,

        },
        {
            icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game1/o2.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: 60, height: 35 }} source={require('../../assets/img/level10/game1/o2.png')} />,

        },
        {
            icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game1/k1.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game1/k1.png')} />,

        },
        {
            icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game1/t1.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: 70, height: 50 }} source={require('../../assets/img/level10/game1/t1.png')} />,

        },
        {
            icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game1/p1.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: 65, height: 40 }} source={require('../../assets/img/level10/game1/p1.png')} />,

        },
    ])

    useEffect(() => {
        let item = GetRandomItemsFromArray(arr, arr.length)
        setArr(item)
    }, [])

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
            sound2.stop()
            navigation.navigate('Level5_4')
        }
    }, [arr])


    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
        <View style={{ justifyContent: 'space-around', gap: 20 }}>
            <View style={{ width: '100%', flexDirection: 'row', gap: 10, justifyContent: 'space-around' }}>
                {arr.map((elm, i) => {
                    if (i <= 5) {
                        if (!elm.active) {
                            return <ImgButton width={80} height={80} onPress={() => Game(elm, i)} key={i} svg={elm.icon} />
                        }
                        return <ImgButton width={80} height={80} onPress={() => Game(elm, i)} key={i} svg={elm.icon1} />
                    }

                })}
            </View>
            <View style={{ width: '100%', flexDirection: 'row', gap: 10, justifyContent: 'space-around' }}>
                {arr.map((elm, i) => {
                    if (i > 5) {
                        if (!elm.active) {
                            return <ImgButton width={80} height={80} onPress={() => Game(elm, i)} key={i} svg={elm.icon} />
                        }
                        return <ImgButton width={80} height={80} onPress={() => Game(elm, i)} key={i} svg={elm.icon1} />
                    }

                })}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                <TouchableOpacity onPress={() => setSelectedColor(1)}>
                    <PurpleColor1 />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedColor(2)}>
                    <PinkColor1 />
                </TouchableOpacity>
            </View>
        </View>
    </LevelWrapper>
}
import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import { ImgButton } from '../../components/ImgButton'
import { Green, Green11, Red, Red11, } from '../../assets/svg'
import Sound from 'react-native-sound'

const windowWidth = Dimensions.get('window').width;

export const Level10_1 = ({ navigation }) => {
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
    const sound = new Sound('game101.mp3', Sound.MAIN_BUNDLE,
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
            icon: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level10/game1/4.png')} />,
            id: 1,
            active: false,
            icon1: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level10/game1/4.1.png')} />,
        },
        {
            icon: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level10/game1/7.1.png')} />,
            id: 2,
            active: false,
            icon1: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level10/game1/7.png')} />,
        },
        {
            icon: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level10/game1/9.png')} />,
            active: true,
            id: 3,
            icon1: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level10/game1/9.png')} />,

        },
        {
            icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game1/k1.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: 70, height: 50 }} source={require('../../assets/img/level10/game1/o2.png')} />,


        },
        {
            icon: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level10/game1/4.png')} />,
            id: 1,
            active: false,
            icon1: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level10/game1/4.1.png')} />,
        },
        {
            icon: <Image style={{ width: 60, height: 50 }} source={require('../../assets/img/level10/game1/t1.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: 60, height: 50 }} source={require('../../assets/img/level10/game1/tr1.png')} />,

        },
        {
            icon: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level10/game1/7.1.png')} />,
            id: 2,
            active: false,
            icon1: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level10/game1/7.png')} />,
        },
        {
            icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game1/r1.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: 60, height: 50 }} source={require('../../assets/img/level10/game1/r1.png')} />,

        },
        {
            icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game1/o2.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: 70, height: 50 }} source={require('../../assets/img/level10/game1/o2.png')} />,

        },
        {
            icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game1/k1.png')} />,
            id: 3,
            active: true,
            icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game1/k1.png')} />,

        },
        {
            icon: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level10/game1/4.png')} />,
            id: 1,
            active: false,
            icon1: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level10/game1/4.1.png')} />,
        },
        {
            icon: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level10/game1/7.1.png')} />,
            id: 2,
            active: false,
            icon1: <Image style={{ width: 40, height: 60 }} source={require('../../assets/img/level10/game1/7.png')} />,
        },
    ])

    // useEffect(() => {
    //     let item = GetRandomItemsFromArray(arr, arr.length)
    //     setArr(item)
    // }, [])

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
            setTimeout(() => {
                navigation.navigate('Level10_2')
            }, 2000);
        }
    }, [arr])


    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ width: windowWidth / 2, height: '100%', flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
                {arr.map((elm, i) => {
                    if (!elm.active) {
                        return <ImgButton width={80} height={80} onPress={() => Game(elm, i)} key={i} svg={elm.icon} />
                    }
                    return <ImgButton width={80} height={80} onPress={() => Game(elm, i)} key={i} svg={elm.icon1} />

                })}
            </View>
            <View style={{ alignItems: 'center', gap: 20, justifyContent: "center" }}>
                <TouchableOpacity onPress={() => setSelectedColor(1)}>
                    <Red11 />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedColor(2)}>
                    <Green11 />
                </TouchableOpacity>
            </View>
        </View>
    </LevelWrapper>
}
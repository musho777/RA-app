import { Image, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'
import Sound from 'react-native-sound'

export const Level9_8 = ({ navigation }) => {

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
    const sound = new Sound('game98.mp3', Sound.MAIN_BUNDLE,
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

    const [data, setData] = useState([

        {
            icon: <Image source={require('../../assets/img/level9/game8/2.3.png')} style={{ width: 90, height: 110 }} />,
            id: 1,
            icon1: <Image source={require('../../assets/img/level9/game8/2.4.png')} style={{ width: 90, height: 110 }} />,
            active: false,
        },
        {
            icon: <Image source={require('../../assets/img/level9/game8/3.3.png')} style={{ width: 90, height: 110 }} />,
            id: 2,
            icon1: <Image source={require('../../assets/img/level9/game8/3.4.png')} style={{ width: 90, height: 110 }} />,
            active: false
        },
        {
            icon: <Image source={require('../../assets/img/level9/game8/1.3.png')} style={{ width: 90, height: 110 }} />,
            id: 3,
            icon1: <Image source={require('../../assets/img/level9/game8/1.4.png')} style={{ width: 90, height: 110 }} />,
            active: false
        },
    ])

    const [selectedColor, setSelectedColor] = useState('')


    useEffect(() => {
        item = GetRandomItemsFromArray(data, data.length)
        setData(item)
    }, [])

    const Game = (id, i) => {
        console.log(i)
        let item = [...data]
        if (id == selectedColor) {
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
        setData(item)
    }

    useEffect(() => {
        let win = true
        data.map((elm, i) => {
            if (!elm.active) {
                win = false
            }
        })
        if (win) {
            setTimeout(() => {
                sound.stop()
                navigation.navigate('LevelScreen')
            }, 2000);
        }
    }, [data])

    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: "row", width: '70%', justifyContent: "space-around", alignItems: "center" }}>
                {data?.map((elm, i) => {
                    console.log(elm.active)
                    if (!elm.active) {
                        return <ImgButton border='rgba(255, 117, 117, 0.4)' onPress={() => Game(elm.id, i)} height={130} width={130} key={i} svg={elm.icon} />
                    }
                    else {
                        return <ImgButton border='rgba(255, 117, 117, 0.4)' height={130} width={130} key={i} svg={elm.icon1} />
                    }
                })}
            </View>
            <View style={{ height: '100%', justifyContent: 'center', gap: 20 }}>
                <View style={{ flexDirection: 'row', width: 80, justifyContent: 'space-between' }}>
                    <Image style={{ width: 60, height: 60 }} source={require('../../assets/img/level9/game8/1.1.png')} />
                    <TouchableOpacity onPress={() => setSelectedColor(3)}>
                        <Image style={{ width: 40, height: 70 }} source={require('../../assets/img/level9/game8/1.2.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', width: 80, justifyContent: 'space-between' }}>
                    <Image style={{ width: 60, height: 60 }} source={require('../../assets/img/level9/game8/2.1.png')} />
                    <TouchableOpacity onPress={() => setSelectedColor(1)}>
                        <Image style={{ width: 40, height: 70 }} source={require('../../assets/img/level9/game8/2.2.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', width: 80, justifyContent: 'space-between', justifyContent: 'space-between' }}>
                    <Image style={{ width: 60, height: 60 }} source={require('../../assets/img/level9/game8/3.1.png')} />
                    <TouchableOpacity onPress={() => setSelectedColor(2)}>
                        <Image style={{ width: 40, height: 70 }} source={require('../../assets/img/level9/game8/3.2.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </LevelWrapper>
}
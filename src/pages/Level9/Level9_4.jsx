import { useEffect, useState } from 'react'
import { LevelWrapper } from '../../components/LevelWrapper'
import { Image, TouchableOpacity, View } from 'react-native'
import { ImgButton } from '../../components/ImgButton'
import { Blue, Red, Red1 } from '../../assets/svg'
import Sound from 'react-native-sound'

export const Level9_4 = ({ navigation }) => {
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
    const sound = new Sound('game94.mp3', Sound.MAIN_BUNDLE,
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
        [
            {
                icon: <Image source={require('../../assets/img/level9/game4/k.png')} style={{ width: 70, height: 90 }} />,
                id: 1,
                icon1: <Image source={require('../../assets/img/level9/game4/k1r.png')} style={{ width: 70, height: 90 }} />,
                active: false,
            },
            {
                icon: <Image source={require('../../assets/img/level9/game4/t.png')} style={{ width: 40, height: 80 }} />,
                id: 1,
                icon1: <Image source={require('../../assets/img/level9/game4/t1r.png')} style={{ width: 40, height: 80 }} />,
                active: false
            },
            {
                icon: <Image source={require('../../assets/img/level9/game4/k1.png')} style={{ width: 70, height: 90 }} />,
                id: 2,
                icon1: <Image source={require('../../assets/img/level9/game4/k1b.png')} style={{ width: 70, height: 90 }} />,
                active: false
            },
            {
                icon: <Image source={require('../../assets/img/level9/game4/t2.png')} style={{ width: 40, height: 80 }} />,
                id: 2,
                icon1: <Image source={require('../../assets/img/level9/game4/t1b.png')} style={{ width: 40, height: 80 }} />,
                active: false
            },
        ],


        [
            {
                icon: <Image source={require('../../assets/img/level9/game4/obruch1.png')} style={{ width: 50, height: 80 }} />,
                id: 2,
                icon1: <Image source={require('../../assets/img/level9/game4/obruchb.png')} style={{ width: 50, height: 80 }} />,
                active: false,
            },
            {
                icon: <Image source={require('../../assets/img/level9/game4/obruch2.png')} style={{ width: 50, height: 80 }} />,
                id: 1,
                icon1: <Image source={require('../../assets/img/level9/game4/obruchr.png')} style={{ width: 50, height: 80 }} />,
                active: false
            },
            {
                icon: <Image source={require('../../assets/img/level9/game4/tyubik1.png')} style={{ width: 70, height: 90 }} />,
                id: 2,
                icon1: <Image source={require('../../assets/img/level9/game4/tybuikb.png')} style={{ width: 70, height: 90 }} />,
                active: false
            },
            {
                icon: <Image source={require('../../assets/img/level9/game4/tyubik2.png')} style={{ width: 70, height: 90 }} />,
                id: 1,
                icon1: <Image source={require('../../assets/img/level9/game4/tyubikr.png')} style={{ width: 70, height: 90 }} />,
                active: false
            },
        ],


        [
            {
                icon: <Image source={require('../../assets/img/level9/game4/grib1.png')} style={{ width: 70, height: 90 }} />,
                id: 2,
                icon1: <Image source={require('../../assets/img/level9/game4/gribb.png')} style={{ width: 70, height: 90 }} />,
                active: false,
            },
            {
                icon: <Image source={require('../../assets/img/level9/game4/grib2.png')} style={{ width: 70, height: 80 }} />,
                id: 1,
                icon1: <Image source={require('../../assets/img/level9/game4/gribr.png')} style={{ width: 70, height: 80 }} />,
                active: false
            },
            {
                icon: <Image source={require('../../assets/img/level9/game4/kost1.png')} style={{ width: 80, height: 50 }} />,
                id: 2,
                icon1: <Image source={require('../../assets/img/level9/game4/kostB.png')} style={{ width: 80, height: 50 }} />,
                active: false
            },
            {
                icon: <Image source={require('../../assets/img/level9/game4/kost2.png')} style={{ width: 80, height: 50 }} />,
                id: 1,
                icon1: <Image source={require('../../assets/img/level9/game4/kostR.png')} style={{ width: 80, height: 50 }} />,
                active: false
            },
        ]
    ])
    const [game, setGame] = useState(0)
    const [activeData, setActiveData] = useState([])
    const [activeColor, setActiveColor] = useState()

    useEffect(() => {
        setActiveData(data[game])
    }, [game])





    const Game = (id, i) => {
        let item = [...activeData]
        let win = true
        if (id == activeColor) {
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
            }, 1000);
        }
        item.map((elm, i) => {
            if (!elm.active) {
                win = false
            }
        })
        if (win) {
            if (game < 2) {
                setTimeout(() => {
                    setGame(game + 1)
                }, 1000);
            }
            else {
                setTimeout(() => {
                    sound.stop()
                    navigation.navigate('Level9_5')
                }, 1000);
            }
        }
        setActiveData(item)
    }
    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
        <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: 250, gap: 20 }}>
                {activeData?.map((elm, i) => {
                    if (!elm.active) {
                        return <ImgButton border='#F0814366' key={i} onPress={() => Game(elm.id, i)} width={100} height={100} svg={elm.icon} />
                    }
                    return <ImgButton border='#F0814366' key={i} onPress={() => Game(elm.id, i)} width={100} height={100} svg={elm.icon1} />
                })}
            </View>
            <View style={{ gap: 20 }}>
                <TouchableOpacity onPress={() => setActiveColor(2)}>
                    <Blue />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveColor(1)}>
                    <Red />
                </TouchableOpacity>
            </View>
        </View>
    </LevelWrapper>
}
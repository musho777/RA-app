import { Image, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import { ImgButton } from '../../components/ImgButton'
import { C1, C2, C3, C4, C5, C6, C7 } from '../../assets/svg'
import Sound from 'react-native-sound'

export const Level10_2 = ({ navigation }) => {


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
    const sound = new Sound('game102.mp3', Sound.MAIN_BUNDLE,
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
        [

            {
                icon: <Image style={{ width: 60, height: 60 }} source={require('../../assets/img/level10/game2/c1.png')} />,
                id: 2,
                activ: true,
                icon1: <Image style={{ width: 60, height: 65 }} source={require('../../assets/img/level10/game2/c1.png')} />,

            },
            {
                icon: <Image style={{ width: 95, height: 67 }} source={require('../../assets/img/level10/game2/o2.png')} />,
                id: 3,
                activ: false,
                icon1: <Image style={{ width: 90, height: 50 }} source={require('../../assets/img/level10/game2/01.png')} />,
            },
            {
                icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level10/game2/c1.png')} />,
                id: 2,
                activ: true,
                icon1: <Image style={{ width: 79, height: 85 }} source={require('../../assets/img/level10/game2/c1.png')} />,

            },
            {
                icon: <Image style={{ width: 90, height: 90 }} source={require('../../assets/img/level10/game2/c1.png')} />,
                id: 2,
                activ: true,
                icon1: <Image style={{ width: 90, height: 100 }} source={require('../../assets/img/level10/game2/c1.png')} />,

            }
        ],
        [
            {
                icon: <Image style={{ width: 90, height: 60 }} source={require('../../assets/img/level10/game2/p1.png')} />,
                id: 4,
                activ: false,
                icon1: <Image style={{ width: 90, height: 50 }} source={require('../../assets/img/level10/game2/p2.png')} />,
            },
            {
                icon: <Image style={{ width: 50, height: 30 }} source={require('../../assets/img/level10/game2/k1.png')} />,
                id: 2,
                activ: true,
                icon1: <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/level10/game2/k1.png')} />,
            },
            {
                icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level10/game2/k1.png')} />,
                id: 2,
                activ: true,
                icon1: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level10/game2/k1.png')} />,

            },
            {
                icon: <Image style={{ width: 90, height: 90 }} source={require('../../assets/img/level10/game2/k1.png')} />,
                id: 2,
                activ: true,
                icon1: <Image style={{ width: 90, height: 90 }} source={require('../../assets/img/level10/game2/k1.png')} />,

            }
        ],
        [

            {
                icon: <Image style={{ width: 100, height: 65 }} source={require('../../assets/img/level10/game2/t1.png')} />,
                id: 2,
                activ: true,
                icon1: <Image style={{ width: 100, height: 70 }} source={require('../../assets/img/level10/game2/t1.png')} />,
            },
            {
                icon: <Image style={{ width: 110, height: 80 }} source={require('../../assets/img/level10/game2/t1.png')} />,
                id: 2,
                activ: true,
                icon1: <Image style={{ width: 110, height: 80 }} source={require('../../assets/img/level10/game2/t1.png')} />,

            },
            {
                icon: <Image style={{ width: 110, height: 100 }} source={require('../../assets/img/level10/game2/r1.png')} />,
                id: 4,
                activ: false,
                icon1: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/level10/game2/r2.png')} />,
            },
            {
                icon: <Image style={{ width: 110, height: 90 }} source={require('../../assets/img/level10/game2/t1.png')} />,
                id: 2,
                activ: true,
                icon1: <Image style={{ width: 120, height: 80 }} source={require('../../assets/img/level10/game2/t1.png')} />,

            }
        ],
        [
            {
                icon: <Image style={{ width: 100, height: 110 }} source={require('../../assets/img/level10/game2/c1.png')} />,
                id: 6,
                activ: false,
                icon1: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/level10/game2/c2.png')} />,
            },
            {
                icon: <Image style={{ width: 95, height: 100 }} source={require('../../assets/img/level10/game2/tr1.png')} />,
                id: 2,
                activ: true,
                icon1: <Image style={{ width: 100, height: 85 }} source={require('../../assets/img/level10/game2/tr1.png')} />,
            },
            {
                icon: <Image style={{ width: 115, height: 80 }} source={require('../../assets/img/level10/game2/tr1.png')} />,
                id: 2,
                activ: true,
                icon1: <Image style={{ width: 110, height: 95 }} source={require('../../assets/img/level10/game2/tr1.png')} />,

            },
            {
                icon: <Image style={{ width: 110, height: 90 }} source={require('../../assets/img/level10/game2/tr1.png')} />,
                id: 2,
                activ: true,
                icon1: <Image style={{ width: 120, height: 95 }} source={require('../../assets/img/level10/game2/tr1.png')} />,

            }
        ],
    ])

    const [game1, setGame1] = useState(0)

    const [activArr, setActiveArr] = useState([])
    const [selected, setSelected] = useState({})

    useEffect(() => {
        setActiveArr(arr[game1])
    }, [game1])

    const [selectedIcon, setSelectedIcon] = useState('')

    // const Game = (elm, i) => {
    //     if (!elm.activ) {
    //         setSelected({ id: elm.id, i: i })
    //         setTimeout(() => {
    //             musicSuccess.play();
    //         }, 100);
    //         setTimeout(() => {
    //             musicSuccess.stop()
    //         }, 2000);
    //     }
    //     else {
    //         setTimeout(() => {
    //             music.play();
    //         }, 100);
    //         setTimeout(() => {
    //             music.stop()
    //         }, 2000);
    //     }
    // }
    console.log(selectedIcon)

    const Game1 = (i) => {
        let item = [...activArr]
        console.log(i)
        if (i === selectedIcon) {
            item.map((elm, i) => {
                elm.activ = true
            })
            // item[i].activ = true
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                if (game1 == 3) {
                    sound.stop()
                    navigation.navigate('Level10_3')
                }
                else {
                    setSelectedIcon('')
                    setGame1(game1 + 1)
                }
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
        setActiveArr(item)
    }


    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
        <View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                {activArr.map((elm, i) => {
                    if (!elm.activ) {
                        return <ImgButton onPress={() => setSelectedIcon(elm.id)} width={130} height={130} key={i} svg={elm.icon} />
                    }
                    return <ImgButton onPress={() => setSelectedIcon(elm.id)} width={130} height={130} key={i} svg={elm.icon1} />

                })}
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-around', marginTop: 50 }}>
                <TouchableOpacity onPress={() => Game1(1)}>
                    <C1 />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Game1(2)}>
                    <C2 />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Game1(3)}>
                    <C3 />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Game1(4)}>
                    <C4 />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Game1(5)}>
                    <C5 />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Game1(6)}>
                    <C6 />
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => Game1(7)}>
                    <C7 />
                </TouchableOpacity> */}
            </View>
        </View>
    </LevelWrapper>
}
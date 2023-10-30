import { Image, TouchableOpacity, View } from 'react-native'
import { ImgButton } from '../../components/ImgButton'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
import { Blue2, Blue4, Brown, Green2, Yellow2 } from '../../assets/svg'

export const Level9_3 = ({ navigation }) => {

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

    const [activeGame, setActiveGame] = useState([])


    const [arr, setArr] = useState([
        [
            {
                icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/circle.png')} />,
                id: 1,
                active: true,
                icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/circle.png')} />,

            },
            {
                icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/rhombus.png')} />,
                id: 2,
                active: true,
                icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/rhombus.png')} />,
            },
            {
                icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/circle.png')} />,
                id: 1,
                active: true,
                icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/circle.png')} />,
            },
            {
                icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/rhombus.png')} />,
                id: 2,
                active: true,
                icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/rhombus.png')} />,
            },
            {
                icon: <Image style={{ width: 50, height: 55 }} source={require('../../assets/img/level9/game3/circle1.png')} />,
                id: 2,
                active: false,
                icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/circle.png')} />,
            },
            {
                icon: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level9/game3/rhombus1.png')} />,
                id: 1,
                active: false,
                icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/rhombus.png')} />,
            },
            {
                icon: <Image style={{ width: 50, height: 55 }} source={require('../../assets/img/level9/game3/circle1.png')} />,
                id: 2,
                active: false,
                icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/circle.png')} />,
            },
            {
                icon: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level9/game3/rhombus1.png')} />,
                id: 1,
                active: false,
                icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/rhombus.png')} />,
            },
            {
                icon: <Image style={{ width: 50, height: 55 }} source={require('../../assets/img/level9/game3/circle1.png')} />,
                id: 2,
                active: false,
                icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/circle.png')} />,
            },
        ],
        // [
        //     {
        //         icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/circle.png')} />,
        //         id: 1,
        //         active: true,
        //         icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/circle.png')} />,

        //     },
        //     {
        //         icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/rhombus.png')} />,
        //         id: 2,
        //         active: true,
        //         icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/rhombus.png')} />,
        //     },
        //     {
        //         icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/circle.png')} />,
        //         id: 1,
        //         active: true,
        //         icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/circle.png')} />,
        //     },
        //     {
        //         icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/rhombus.png')} />,
        //         id: 2,
        //         active: true,
        //         icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/rhombus.png')} />,
        //     },
        //     {
        //         icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/circle1.png')} />,
        //         id: 2,
        //         active: false,
        //         icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/circle.png')} />,
        //     },
        //     {
        //         icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/rhombus1.png')} />,
        //         id: 1,
        //         active: false,
        //         icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/rhombus.png')} />,
        //     },
        //     {
        //         icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/circle1.png')} />,
        //         id: 2,
        //         active: false,
        //         icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/circle.png')} />,
        //     },
        //     {
        //         icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/rhombus1.png')} />,
        //         id: 1,
        //         active: false,
        //         icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/rhombus.png')} />,
        //     },
        //     {
        //         icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/circle1.png')} />,
        //         id: 2,
        //         active: false,
        //         icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level9/game3/circle.png')} />,
        //     },
        // ]
    ])


    const [game1, setGame1] = useState(0)

    useEffect(() => {
        setActiveGame(arr[game1])
    }, [game1])

    const [selecetedColor, setSelectedColor] = useState()

    const SelectColor = (i) => {
        setSelectedColor(i)
    }

    const Game = (elm, i) => {
        let item = [...activeGame]
        if (elm.id === selecetedColor) {
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
        setActiveGame(item)
    }

    useEffect(() => {
        let win = true
        if (!activeGame?.length) {
            win = false
        }
        activeGame?.map((elm, i) => {
            if (!elm.active) {
                win = false
            }
        })
        if (win) {
            if (game1 == 0) {
                setTimeout(() => {
                    navigation.navigate('Level9_4')
                }, 1000);
            }
            else {
                setGame1(game1 + 1)
            }
        }
    }, [activeGame])

    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} jC='center'>
        <View style={{ justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {activeGame?.map((elm, i) => {
                    if (elm.active) {
                        return <ImgButton disable={true} width={80} height={80} border={'rgba(153, 204, 51, 0.5)'} key={i} svg={elm.icon1} />
                    }
                    else {
                        return <ImgButton onPress={() => Game(elm, i)} width={80} height={80} border={'rgba(153, 204, 51, 0.5)'} key={i} svg={elm.icon} />
                    }
                })}
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 50 }}>
                <TouchableOpacity style={{ marginHorizontal: 20, }} onPress={() => SelectColor(3)}>
                    <Yellow2 />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => SelectColor(2)}>
                    <Blue4 />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 20, }} onPress={() => SelectColor(1)}>
                    <Green2 />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => SelectColor(3)}>
                    <Brown />
                </TouchableOpacity>
            </View>
        </View>
    </LevelWrapper>
}
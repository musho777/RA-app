import { View, Image, Dimensions } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import { NumberButton } from '../../components/NumberBuuton'
import { ImgButton } from '../../components/ImgButton'
import Sound from 'react-native-sound'

export const Level11_2 = ({ navigation }) => {
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
    const sound = new Sound('game112.mp3', Sound.MAIN_BUNDLE,
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
            { icon: <Image style={{ width: windowWidth / 20, height: windowWidth / 20 }} source={require('../../assets/img/level11/game2/звезда.png')} />, id: 2 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/треугольник.png')} />, id: 1 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/квадрат.png')} />, id: 2 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/треугольник.png')} />, id: 1 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/треугольник.png')} />, id: 1 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/прямоугольник.png')} />, id: 2 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/сердце.png')} />, id: 2 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/треугольник.png')} />, id: 1 },

        ],
        [
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/треугольник.png')} />, id: 1 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/ромб.png')} />, id: 2 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/треугольник.png')} />, id: 1 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/трапеция.png')} />, id: 2 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/треугольник.png')} />, id: 1 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/цветок.png')} />, id: 2 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/треугольник.png')} />, id: 1 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/треугольник.png')} />, id: 1 },


        ],
        [
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/треугольник.png')} />, id: 1 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/круг.png')} />, id: 2 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/шестиугольник.png')} />, id: 2 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/треугольник.png')} />, id: 1 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/звезда.png')} />, id: 2 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/треугольник.png')} />, id: 1 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/сердце.png')} />, id: 2 },
            { icon: <Image style={{ width: windowWidth / 22, height: windowWidth / 22 }} source={require('../../assets/img/level11/game2/цветок.png')} />, id: 2 },

        ]
    ])

    const [winArr, setWinArr] = useState([
        [],
        [],
        []
    ])
    const Game = (id, i, elm) => {
        let item = [...winArr]
        if (id == 1) {
            if (i == 0 && item[i].length < 3) {
                item[i].push(elm)
                setTimeout(() => {
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    musicSuccess.stop()
                }, 2000);
            }
            else if (i == 1 && item[i].length < 4) {
                item[i].push(elm)
                setTimeout(() => {
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    musicSuccess.stop()
                }, 2000);
            }
            else if (i == 2 && item[i].length < 2) {
                item[i].push(elm)
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
        }
        else {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);
        }
        setWinArr(item)
    }

    useEffect(() => {
        if (winArr[0].length == 3 && winArr[1].length == 4 && winArr[2].length == 2) {
            setTimeout(() => {
                sound.stop()
                navigation.navigate('Level11_3')
            }, 2000);
        }
    }, [winArr])


    return <LevelWrapper img2={require('../../assets/img/3y.png')} img={require('../../assets/img/3yy.png')}>
        <View style={{ height: '100%', justifyContent: 'center', alignItems: "center", gap: 25 }}>
            <View style={{ flexDirection: 'row', gap: 20 }}>
                <NumberButton height={windowWidth / 14} bc={'rgba(255, 204, 0, 0.40)'} bg={'#FC0'} disabled={true} number={3} />
                {arr[0].map((elm, i) => {
                    return <ImgButton disable={winArr[0].length == 3} key={i} onPress={() => Game(elm.id, 0, i)} width={windowWidth / 14} height={windowWidth / 14}
                        border={winArr[0].includes(i) ?
                            "green" :
                            'rgba(255, 204, 0, 0.40)'
                        }
                        svg={elm.icon} />
                })}
            </View>
            <View style={{ flexDirection: 'row', gap: 20 }}>
                <NumberButton height={windowWidth / 14} bc={'rgba(255, 204, 0, 0.40)'} bg={'#FC0'} disabled={true} number={4} />
                {arr[1].map((elm, i) => {
                    return <ImgButton key={i} disable={winArr[1].length == 4} onPress={() => Game(elm.id, 1, i)} width={windowWidth / 14} height={windowWidth / 14}
                        border={winArr[1].includes(i) ?
                            "green" :
                            'rgba(255, 204, 0, 0.40)'
                        }
                        svg={elm.icon} />
                })}
            </View>
            <View style={{ flexDirection: 'row', gap: 20 }}>
                <NumberButton height={windowWidth / 14} bc={'rgba(255, 204, 0, 0.40)'} bg={'#FC0'} disabled={true} number={2} />
                {arr[2].map((elm, i) => {
                    return <ImgButton key={i} disable={winArr[2].length == 2} onPress={() => Game(elm.id, 2, i)} width={windowWidth / 14} height={windowWidth / 14}
                        border={winArr[2].includes(i) ?
                            "green" :
                            'rgba(255, 204, 0, 0.40)'
                        }
                        svg={elm.icon} />
                })}
            </View>
        </View>
    </LevelWrapper>
}
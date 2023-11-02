import { Image, View } from "react-native"
import { Input } from "../../components/Input"
import { LevelWrapper } from "../../components/LevelWrapper";
import { Butterfly, Chickens, MushRoom } from "../../assets/svg";
import { NumberButton } from "../../components/NumberBuuton";
import { useEffect, useState } from "react";
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

export const Level8_1 = ({ navigation }) => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [disable, setDisable] = useState(false)
    const buuton = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    const [game, setGame] = useState([
        [
            {
                icone: [
                    <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level8/game1/clown.png')} />,
                    <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level8/game1/clown.png')} />,
                    <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level8/game1/clown.png')} />,
                ],
                count: 3
            },
            {
                icone: [
                    <Image style={{ width: 55, height: 55 }} source={require('../../assets/img/level8/game1/ball.png')} />,
                    <Image style={{ width: 55, height: 55 }} source={require('../../assets/img/level8/game1/ball.png')} />,
                    <Image style={{ width: 55, height: 55 }} source={require('../../assets/img/level8/game1/ball.png')} />,
                    <Image style={{ width: 55, height: 55 }} source={require('../../assets/img/level8/game1/ball.png')} />,
                    <Image style={{ width: 55, height: 55 }} source={require('../../assets/img/level8/game1/ball.png')} />
                ],
                count: 5
            }
        ],
        [
            {
                icone: [
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/magician.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/magician.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/magician.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/magician.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/magician.png')} />, ,
                ],
                count: 5
            },
            {
                icone: [
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/circushoop.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/circushoop.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/circushoop.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/circushoop.png')} />,
                ],
                count: 4
            }
        ],
        [
            {
                icone: [
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/hare.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/hare.png')} />,
                ],
                count: 2
            },
            {
                icone: [
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/deflatedblueballoon.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/deflatedblueballoon.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/deflatedblueballoon.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/deflatedblueballoon.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/deflatedblueballoon.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/deflatedblueballoon.png')} />,
                ],
                count: 6
            }
        ],
        [
            {
                icone: [],
                count: 0
            },
            {
                icone: [
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/deflatedblueballoon.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/deflatedblueballoon.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/deflatedblueballoon.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/deflatedblueballoon.png')} />,
                ],
                count: 4
            }
        ],
        [
            {
                icone: [
                    <Image style={{ width: 75, height: 55 }} source={require('../../assets/img/level8/game1/fox.png')} />,
                    <Image style={{ width: 75, height: 55 }} source={require('../../assets/img/level8/game1/fox.png')} />,
                    <Image style={{ width: 75, height: 55 }} source={require('../../assets/img/level8/game1/fox.png')} />,
                ],
                count: 3
            },
            {
                icone: [
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/ice.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/ice.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/ice.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/ice.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/ice.png')} />,
                    <Image style={{ width: 55, height: 75 }} source={require('../../assets/img/level8/game1/ice.png')} />,
                ],
                count: 6
            }
        ],
    ])
    const sound = new Sound('game81.mp3', Sound.MAIN_BUNDLE,
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
    const [activeGame, setActiveGame] = useState([])

    const Answer = (e) => {
        if (value1 == '') {
            setValue1(e)
        }
        else {
            setValue2(e)
        }
    }

    const [game1, setGame1] = useState(0)

    useEffect(() => {
        setActiveGame(game[game1])
    }, [game1])
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

    useEffect(() => {
        if (value1 != '' && value2 != '') {
            if (value1 != activeGame[0]?.count || value2 != activeGame[1]?.count) {
                setTimeout(() => {
                    setDisable(true)
                    music.play();
                }, 100);
                setTimeout(() => {
                    music.stop()
                }, 5000);
                setTimeout(() => {
                    setValue1('')
                    setValue2("")
                    setDisable(false)
                    setActiveGame([
                        activeGame[1],
                        activeGame[0]
                    ])
                }, 500);
            }
            else {
                setTimeout(() => {
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    setValue1('')
                    setValue2('')
                    if (game1 == 4) {
                        sound.stop()
                        navigation.navigate('Level8_2')
                    }
                    else {
                        setGame1(game1 + 1)
                    }
                    musicSuccess.stop()
                }, 2000);
            }
        }
    }, [value1, value2])

    return <LevelWrapper
        paddingTop={20}
        img={require('../../assets/img/bglv1.png')}
        img2={require('../../assets/img/33.png')}
    >
        <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                <View style={{ flexDirection: 'row', marginBottom: 30, justifyContent: 'space-around', width: '80%' }}>
                    {
                        activeGame[0]?.icone.map((elm, i) => {
                            return <View key={i}>
                                {elm}
                            </View>
                        })
                    }
                    {
                        activeGame[0]?.count == 0 &&
                        <View style={{ height: 75 }}></View>
                    }
                </View>
                {value1 == '' ?
                    <Input value={value1} setValue={(e) => setValue1(e)} /> :
                    <NumberButton disabled={true} number={value1} />
                }
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                <View style={{ flexDirection: 'row', marginBottom: 30, justifyContent: 'space-around', width: '80%' }}>
                    {
                        activeGame[1]?.icone.map((elm, i) => {
                            return <View key={i}>
                                {elm}
                            </View>
                        })
                    }
                    {
                        activeGame[1]?.count == 0 &&
                        <View style={{ height: 75 }}></View>
                    }
                </View>
                {value2 == '' ?
                    <Input value={value2} setValue={(e) => setValue2(e)} /> :
                    <NumberButton disabled={true} number={value2} />
                }
            </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {buuton.map((elm, i) => {
                if (elm != value1 && elm != value2)
                    return <NumberButton disabled={disable} key={i} onPress={() => Answer(elm)} number={elm} />
            })}
        </View>
    </LevelWrapper>
}

import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import { NumberButton } from '../../components/NumberBuuton'
import Sound from 'react-native-sound'

export const Level5_1 = ({ navigation }) => {
    const [arr, setArr] = useState([
        { icon: <Image style={{ width: 350, height: 200 }} source={require('../../assets/img/level5/game1/apeapod.png')} />, count: 6 },
        { icon: <Image style={{ width: 300, height: 220 }} source={require('../../assets/img/level5/game1/eggsinapackage.png')} />, count: 8 },
        { icon: <Image style={{ width: 200, height: 220 }} source={require('../../assets/img/level5/game1/flyagaric.png')} />, count: 7 },
        { icon: <Image style={{ width: 200, height: 300 }} source={require('../../assets/img/level5/game1/grape.png')} />, count: 10 },
        { icon: <Image style={{ width: 200, height: 200 }} source={require('../../assets/img/level5/game1/starfish.png')} />, count: 5 },
    ])
    const button = [1, 2, 3, 4, 5]
    const [value1, setValue1] = useState('')
    const [activeArr, setActiveArr] = useState({})
    const [disable, setDisable] = useState(false)
    const [game1, setGame1] = useState(0)
    useEffect(() => {
        setActiveArr(arr[game1])
        setTimeout(() => {
            if (game1 === 0) {
                sound1.play()
            }
            else if (game1 === 1) {
                sound5.play()
            }
            else if (game1 === 2) {
                sound2.play()
            }
            else if (game1 === 3) {
                sound4.play()
            }
            else if (game1 === 4) {
                sound3.play()
            }
            else if (game1 === 5) {
                sound5.play()
            }
        }, 100);
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
    const sound1 = new Sound('game511.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const sound2 = new Sound('game512.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const sound3 = new Sound('game513.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const sound4 = new Sound('game514.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const sound5 = new Sound('game515.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });

    // useEffect(() => {
    //     setTimeout(() => {
    //         sound1.play();
    //     }, 100);
    // }, [])
    const Game = (number) => {
        if (number === activeArr?.count) {
            setValue1(number)
            setTimeout(() => {
                if (game1 === 0) {
                    sound1.stop()
                }
                if (game1 === 1) {
                    sound2.stop()
                }
                if (game1 === 2) {
                    sound2.stop()
                }
                if (game1 === 3) {
                    sound3.stop()
                }
                if (game1 === 4) {
                    sound4.stop()
                }
                if (game1 === 5) {
                    sound5.stop()
                }
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                if (game1 < 4) {
                    setValue1('')
                    setGame1(game1 + 1)
                }
                else {
                    navigation.navigate('Level5_2')
                }
                musicSuccess.stop()
            }, 2000);
        }
        else {
            setValue1(number)
            setTimeout(() => {
                setDisable(true)
                music.play();
            }, 100);
            setTimeout(() => {
                setDisable(false)
                setValue1('')
                music.stop()
            }, 2000);
        }
    }
    return <LevelWrapper img={require('../../assets/img/bglv1.png')} img2={require('../../assets/img/33.png')}>
        <View style={{ height: '100%', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
            <View>
                {activeArr?.icon}
            </View>
            <View style={{ width: '45%' }}>
                <View style={{ alignItems: 'center' }}>
                    {value1 == '' ?
                        <Input value={value1} setValue={(e) => setValue1(e)} /> :
                        <NumberButton disabled={true} number={value1} />
                    }
                </View>
                <View style={{ marginTop: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {button.map((elm, i) => {
                            return <NumberButton key={i} disabled={disable} onPress={() => Game(elm)} number={elm} />
                        })}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        {button.map((elm, i) => {
                            return <NumberButton key={i} disabled={disable} onPress={() => Game(elm + 5)} number={elm + 5} />
                        })}
                    </View>
                </View>
            </View>
        </View>
    </LevelWrapper>
}
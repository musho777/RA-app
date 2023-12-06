import { Image, StyleSheet, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import { NumberButton } from '../../components/NumberBuuton'
import Sound from 'react-native-sound'

export const Level3_4 = ({ navigation }) => {
    const buuton = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    const [value1, setValue1] = useState('')
    const [disable, setDisable] = useState(false)
    const [game, setGame] = useState(false)
    const [win, setWin] = useState([
        {
            id: '',
            id: ''
        },
        {
            id: '',
            id: ''
        }
    ])
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
    const sound = new Sound('game34.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });

    const [game1, setGame1] = useState(1)
    const [count, setCount] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            sound.play()
        }, 100);
    }, [])
    const Answer = (i) => {
        let item = [...win]
        if (count == 1) {
            if (i == 5) {
                item[0][0] = 5
                setCount(count + 1)
                setTimeout(() => {
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    sound.stop()
                    musicSuccess.stop()
                }, 1000);
            }
        }
        else if (count == 2) {
            if (i == 2) {
                item[0][1] = 2
                setCount(count + 1)
                setTimeout(() => {
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    sound.stop()
                    setGame1(game1 + 1)
                    musicSuccess.stop()
                }, 1000);
            }
        }
        else if (count == 3) {
            console.log(i == 4)
            if (i == 4) {
                item[1][0] = 4
                setCount(count + 1)
                setTimeout(() => {
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    sound.stop()
                    musicSuccess.stop()
                }, 1000);
            }
        }
        else if (count == 4) {
            if (i == 2) {
                item[1][1] = 2
                setCount(count + 1)
                setTimeout(() => {
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    sound.stop()
                    musicSuccess.stop()
                    navigation.navigate('Level3_5')
                }, 1000);
            }
        }
        else {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 2000);
        }
        setWin(item)


        console.log(count, '222')


        // if (count == 3) {
        //     setGame1(game1 + 1)
        // }
        //         else if (count == 5) {
        //     setGame1(game1 + 1)
        // }
    }
    useEffect(() => {
        setGame(game1)
    }, [game1])
    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={[{ justifyContent: 'space-between', alignItems: 'fspace-between', width: '30%' }]}>
                {game == 1 ? <View style={{ flexDirection: "row" }}>
                    <View style={{ width: '100%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/raspberries.png')} />
                            <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/raspberries.png')} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/raspberries.png')} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                            <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/raspberries.png')} />
                            <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/raspberries.png')} />
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <NumberButton bg='#99CC33' bc='rgba(153, 204, 51, 0.4)' disabled={disable} number={win[0][0]} />
                    </View>
                </View> :
                    <View style={{ width: '60%', marginLeft: 70, justifyContent: 'space-between' }}>
                        <View>
                            <View style={{ height: 140 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/carrot.png')} />
                                    <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/carrot.png')} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/carrot.png')} />
                                    <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/carrot.png')} />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <NumberButton bg='#99CC33' bc='rgba(153, 204, 51, 0.4)' disabled={disable} number={win[1][0]} />
                            </View>
                        </View>
                    </View>
                }
            </View>
            <View style={styles.line}></View>
            <View style={{ width: '30%', alignItems: 'cener', justifyContent: 'center' }}>
                {game == 1 ? <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                        <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/raspberries.png')} />
                        <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/raspberries.png')} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                        <NumberButton bg='#99CC33' bc='rgba(153, 204, 51, 0.4)' disabled={disable} number={win[0][1]} />
                    </View>
                    <View />
                </View> :
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 120 }}>
                            <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/carrot.png')} />
                            <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/carrot.png')} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <NumberButton bg='#99CC33' bc='rgba(153, 204, 51, 0.4)' disabled={disable} number={win[1][1]} />
                        </View>
                    </View>
                }
            </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {buuton.map((elm, i) => {
                if (elm != value1)
                    return <NumberButton bg='#99CC33' bc='rgba(153, 204, 51, 0.4)' disabled={disable} key={i} onPress={() => Answer(elm)} number={elm} />
            })}
        </View>
    </LevelWrapper>
}

const styles = StyleSheet.create({
    line: {
        borderWidth: 1,
        borderColor: '#99CC33',
        height: '100%'
    }
})
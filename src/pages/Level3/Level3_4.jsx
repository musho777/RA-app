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

    const Answer = (i) => {
        if (i != 2) {
            setTimeout(() => {
                setDisable(true)
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 5000);
            setTimeout(() => {
                setValue1('')
                setDisable(false)
            }, 500);
        }
        else {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                navigation.navigate('Level3_5')
                musicSuccess.stop()
            }, 2000);
        }
    }
    useEffect(() => {
        const randomNum = Math.floor(Math.random() * 2)
        setGame(randomNum)
    }, [])
    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={[{ justifyContent: 'space-between', alignItems: 'fspace-between', width: '30%' }]}>
                {game ? <View >
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
                </View> :
                    <View style={{ width: '60%', marginLeft: 70, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/carrot.png')} />
                            <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/carrot.png')} />

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/carrot.png')} />
                            <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/carrot.png')} />
                        </View>
                    </View>
                }
            </View>
            <View style={styles.line}></View>
            <View style={{ width: '30%', alignItems: 'cener', justifyContent: 'center' }}>
                {game ? <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/raspberries.png')} />
                    <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/raspberries.png')} />
                    <View />
                </View> :
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/carrot.png')} />
                        <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/carrot.png')} />
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
import { Image, Text, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
import { RR } from '../../assets/svg'
import { NumberButton } from '../../components/NumberBuuton'

export const Level11_5 = ({ navigation }) => {
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
    const buuton = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState([false, false, false, false, false, false])
    const answr = (i) => {
        let item = [...answer]
        if (i == 0 && count == 0) {
            item[0] = true
            setCount(count + 1)
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 2000);
        }
        if (i == 2 && count == 1) {
            item[1] = true
            setCount(count + 1)
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 2000);
        }
        if (i == 4 && count == 2) {
            item[2] = true
            setCount(count + 1)
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 2000);
        }
        if (i == 5 && count == 3) {
            item[3] = true
            setCount(count + 1)
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 2000);
        }
        if (i == 7 && count == 4) {
            item[4] = true
            setCount(count + 1)
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 2000);
        }
        if (i == 8 && count == 5) {
            item[5] = true
            setCount(count + 1)
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
                navigation.navigate('Level11_6')
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
        setAnswer(item)
    }

    return <LevelWrapper img2={require('../../assets/img/3y.png')} img={require('../../assets/img/3yy.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ justifyContent: "center", alignItems: 'center', width: '100%', position: 'relative' }}>
                {answer[0] &&
                    <Text style={{ color: "#FFCC00", fontWeight: '900', fontSize: 15, position: 'absolute', top: 50, zIndex: 999, left: 400 }}>1</Text>
                }
                {answer[1] &&
                    <Text style={{ color: "#FFCC00", fontWeight: '900', fontSize: 15, position: 'absolute', top: 107, zIndex: 999, left: 425 }}>3</Text>
                }
                {answer[2] &&
                    <Text style={{ color: "#FFCC00", fontWeight: '900', fontSize: 15, position: 'absolute', top: 157, zIndex: 999, left: 387 }}>5</Text>
                }
                {answer[3] &&
                    <Text style={{ color: "#FFCC00", fontWeight: '900', fontSize: 15, position: 'absolute', top: 157, zIndex: 999, left: 355 }}>6</Text>
                }
                {answer[4] &&
                    <Text style={{ color: "#FFCC00", fontWeight: '900', fontSize: 15, position: 'absolute', top: 108, zIndex: 999, left: 305 }}>8</Text>
                }
                {answer[5] &&
                    <Text style={{ color: "#FFCC00", fontWeight: '900', fontSize: 15, position: 'absolute', top: 75, zIndex: 999, left: 315 }}>9</Text>
                }
                <RR />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {buuton.map((elm, i) => {
                    return <NumberButton onPress={() => answr(i)} bc='#FFCC0066' bg={'#FFCC00'} key={i} number={elm} />
                })}
            </View>
        </View>
    </LevelWrapper>
}
import { Image, StyleSheet, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { NumberButton } from '../../components/NumberBuuton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'

export const Level5_6 = ({ navigation }) => {
    const [arr, setArr] = useState([
        {
            arr: [
                { icon: <Image source={require('../../assets/img/level5/game6/ballburst.png')} style={{ width: 70, height: 70 }} />, id: 2, active: false },
                { icon: <Image source={require('../../assets/img/level5/game6/wholeball.png')} style={{ width: 50, height: 70 }} />, id: 0, active: false },
            ],
            answer: [
                { icon: <Image source={require('../../assets/img/level5/game6/nail.png')} style={{ width: 30, height: 70 }} />, id: 1, active: false },
                { icon: <Image source={require('../../assets/img/level5/game6/ложка.png')} style={{ width: 70, height: 50 }} />, id: 2, active: false },
                { icon: <Image source={require('../../assets/img/level5/game6/l.png')} style={{ width: 70, height: 65 }} />, id: 2, active: false },
            ]
        },
        {
            arr: [
                { icon: <Image source={require('../../assets/img/level5/game6/meltingsnowman.png')} style={{ width: 70, height: 70 }} />, id: 2, active: false },
                { icon: <Image source={require('../../assets/img/level5/game6/snowman.png')} style={{ width: 50, height: 70 }} />, id: 0, active: false },
            ],
            answer: [
                { icon: <Image source={require('../../assets/img/level5/game6/rainbow.png')} style={{ width: 70, height: 70 }} />, id: 2, active: false },
                { icon: <Image source={require('../../assets/img/level5/game6/cloud.png')} style={{ width: 60, height: 40 }} />, id: 2, active: false },
                { icon: <Image source={require('../../assets/img/level5/game6/sun.png')} style={{ width: 50, height: 50 }} />, id: 1, active: false },

            ]
        },
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
    const sound = new Sound('game56.mp3', Sound.MAIN_BUNDLE,
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
    const [activeArr, setActiveArr] = useState([])
    const [game1, setGame1] = useState(0)
    useEffect(() => {
        if (game1 == 2) {
            sound.stop()
            navigation.navigate('Level5_7')
        }
        else {
            setActiveArr(arr[game1])
        }
    }, [game1])

    const Game = (elm) => {
        if (elm.id == 1) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                setGame1(game1 + 1)
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
    }

    return <LevelWrapper img2={require('../../assets/img/bg5.png')} img={require('../../assets/img/5bg.png')}>
        <View style={{ height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={styles.boxWrapper}>
                {activeArr?.arr?.map((elm, i) => {
                    return <ImgButton key={i} border='rgba(204, 102, 204, 0.5)' svg={elm.icon} />
                })}
            </View>
            <View style={styles.boxWrapper}>
                {activeArr?.answer?.map((elm, i) => {
                    return <ImgButton onPress={() => Game(elm)} key={i} border='rgba(204, 102, 204, 0.5)' svg={elm.icon} />
                })}
            </View>
        </View>
    </LevelWrapper >
}

const styles = StyleSheet.create({
    boxWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "45%",
        alignItems: 'center'
    }
})
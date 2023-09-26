import { Image, StyleSheet, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { NumberButton } from '../../components/NumberBuuton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

export const Level5_6 = () => {
    const [arr, setArr] = useState([
        [
            { icon: <Image source={require('../../assets/img/level5/game6/ballburst.png')} style={{ width: 50, height: 50 }} />, id: 2, active: false },
            { icon: <Image source={require('../../assets/img/level5/game6/wholeball.png')} style={{ width: 40, height: 55 }} />, id: 0, active: false },
            { icon: <Image source={require('../../assets/img/level5/game6/nail.png')} style={{ width: 30, height: 50 }} />, id: 1, active: false },
        ],
        [
            { icon: <Image source={require('../../assets/img/level5/game6/rainbow.png')} style={{ width: 50, height: 50 }} />, id: 2, active: false },
            { icon: <Image source={require('../../assets/img/level5/game6/cloud.png')} style={{ width: 60, height: 40 }} />, id: 0, active: false },
            { icon: <Image source={require('../../assets/img/level5/game6/sun.png')} style={{ width: 50, height: 50 }} />, id: 1, active: false },
        ],
        [
            { icon: <Image source={require('../../assets/img/level5/game6/meltingsnowman.png')} style={{ width: 50, height: 50 }} />, id: 2, active: false },
            { icon: <Image source={require('../../assets/img/level5/game6/snowman.png')} style={{ width: 45, height: 60 }} />, id: 0, active: false },
            { icon: <Image source={require('../../assets/img/level5/game6/sun.png')} style={{ width: 50, height: 50 }} />, id: 1, active: false },
        ]
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
    const [activeArr, setActiveArr] = useState([])
    const [gameArr, setGameArr] = useState(['', '', ''])
    useEffect(() => {
        setActiveArr(arr[2])
    }, [])

    const Game = (i) => {
        // console.log(i)
        let item = [...gameArr]
        let index = ''
        for (let j = 0; j < item.length; j++) {
            if (item[j] == '') {
                index = j
                break
            }
        }
        if (i == activeArr[index].id) {
            item[index] = i + 1
        }
        else {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 2000);
        }
        setGameArr(item)
    }
    return <LevelWrapper img2={require('../../assets/img/bg5.png')} img={require('../../assets/img/5bg.png')}>
        <View style={{ height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={styles.boxWrapper}>
                <ImgButton svg={activeArr[0]?.icon} />
                <ImgButton svg={activeArr[1]?.icon} />
                <ImgButton svg={activeArr[2]?.icon} />
            </View>
            <View style={styles.boxWrapper}>
                {
                    gameArr[0] ?
                        <NumberButton number={gameArr[0]} disabled={true} /> :
                        <ImgButton />
                }
                {
                    gameArr[1] ?
                        <NumberButton number={gameArr[1]} disabled={true} /> :
                        <ImgButton />
                }
                {
                    gameArr[2] ?
                        <NumberButton number={gameArr[2]} disabled={true} /> :
                        <ImgButton />
                }
            </View>
            <View style={[styles.boxWrapper, { width: '25%' }]}>
                {gameArr.find((elm) => elm == 1) ?
                    <View style={{ width: 55, height: 55 }} /> :
                    <NumberButton number={1} onPress={() => Game(0)} />
                }
                {gameArr.find((elm) => elm == 2) ?
                    <View style={{ width: 55, height: 55 }} /> :
                    <NumberButton number={2} onPress={() => Game(1)} />
                }
                {gameArr.find((elm) => elm == 3) ?
                    <View style={{ width: 55, height: 55 }} /> :
                    <NumberButton number={3} onPress={() => Game(2)} />
                }
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
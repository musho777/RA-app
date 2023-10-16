import { Image, StyleSheet, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { NumberButton } from '../../components/NumberBuuton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'

export const Level9_6 = ({ navigation }) => {
    const [arr, setArr] = useState([
        [
            { icon: <Image source={require('../../assets/img/level9/game6/bud3.png')} style={{ width: 70, height: 70 }} />, id: 0, active: false },
            { icon: <Image source={require('../../assets/img/level9/game6/bud1.png')} style={{ width: 50, height: 70 }} />, id: 1, active: false },
            { icon: <Image source={require('../../assets/img/level9/game6/bud2.png')} style={{ width: 50, height: 70 }} />, id: 2, active: false },
        ],
        [
            { icon: <Image source={require('../../assets/img/level9/game6/chick3.png')} style={{ width: 50, height: 65 }} />, id: 2, active: false },
            { icon: <Image source={require('../../assets/img/level9/game6/chick1.png')} style={{ width: 40, height: 60 }} />, id: 0, active: false },
            { icon: <Image source={require('../../assets/img/level9/game6/chick2.png')} style={{ width: 50, height: 65 }} />, id: 1, active: false },
        ],
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
    const [game1, setGame1] = useState(0)
    useEffect(() => {
        if (game1 == 2) {
            navigation.navigate('Level9_7')
        }
        else {
            let item = GetRandomItemsFromArray(arr[game1], arr[game1].length)
            setActiveArr(item)
        }
    }, [game1])

    const Game = (i) => {
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
        let win = true
        item.map((elm, i) => {
            if (!elm) {
                win = false
            }
        })
        if (win) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                setGameArr(['', '', ''])
                setGame1(game1 + 1)
                musicSuccess.stop()
            }, 2000);
        }
        setGameArr(item)
    }
    return <LevelWrapper img2={require('../../assets/img/bg5.png')} img={require('../../assets/img/5bg.png')}>
        <View style={{ height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={styles.boxWrapper}>
                <ImgButton border='rgba(204, 102, 204, 0.5)' svg={activeArr[0]?.icon} />
                <ImgButton border='rgba(204, 102, 204, 0.5)' svg={activeArr[1]?.icon} />
                <ImgButton border='rgba(204, 102, 204, 0.5)' svg={activeArr[2]?.icon} />
            </View>
            <View style={styles.boxWrapper}>
                {
                    gameArr[0] ?
                        <NumberButton bg={'rgba(122, 85, 181, 1)'} bc={'rgba(122, 85, 181, 0.4)'} number={gameArr[0]} disabled={true} /> :
                        <ImgButton border='rgba(204, 102, 204, 0.5)' />
                }
                {
                    gameArr[1] ?
                        <NumberButton bg={'rgba(122, 85, 181, 1)'} bc={'rgba(122, 85, 181, 0.4)'} number={gameArr[1]} disabled={true} /> :
                        <ImgButton border='rgba(204, 102, 204, 0.5)' />
                }
                {
                    gameArr[2] ?
                        <NumberButton bg={'rgba(122, 85, 181, 1)'} bc={'rgba(122, 85, 181, 0.4)'} number={gameArr[2]} disabled={true} /> :
                        <ImgButton border='rgba(204, 102, 204, 0.5)' />
                }
            </View>
            <View style={[styles.boxWrapper, { width: '25%' }]}>
                {gameArr.find((elm) => elm == 1) ?
                    <View style={{ width: 55, height: 55 }} /> :
                    <NumberButton bg={'rgba(122, 85, 181, 1)'} bc={'rgba(122, 85, 181, 0.4)'} number={1} onPress={() => Game(0)} />
                }
                {gameArr.find((elm) => elm == 2) ?
                    <View style={{ width: 55, height: 55 }} /> :
                    <NumberButton bg={'rgba(122, 85, 181, 1)'} bc={'rgba(122, 85, 181, 0.4)'} number={2} onPress={() => Game(1)} />
                }
                {gameArr.find((elm) => elm == 3) ?
                    <View style={{ width: 55, height: 55 }} /> :
                    <NumberButton bg={'rgba(122, 85, 181, 1)'} bc={'rgba(122, 85, 181, 0.4)'} number={3} onPress={() => Game(2)} />
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
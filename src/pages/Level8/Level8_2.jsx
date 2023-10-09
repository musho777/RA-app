import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound';

export const Level8_2 = ({ navigation }) => {
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
    const [arr, setArr] = useState([
        [
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level8/game2/ball.png')} />, id: 1, active: false },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level8/game2/binoculars.png')} />, id: 2, active: false },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level8/game2/box.png')} />, id: 2, active: false },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level8/game2/yarn.png')} />, id: 1, active: false },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level8/game2/cubearch.png')} />, id: 2, active: false },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level8/game2/cuttingboard.png')} />, id: 2, active: false },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level8/game2/yarn.png')} />, id: 1, active: false },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level8/game2/ball.png')} />, id: 1, active: false },
        ],
        [
            { icon: <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/level8/game2/pyramid.png')} />, id: 2, active: false },
            { icon: <Image style={{ width: 70, height: 50 }} source={require('../../assets/img/level8/game2/hammer.png')} />, id: 2, active: false },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level8/game2/box.png')} />, id: 1, active: false },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level8/game2/yarn.png')} />, id: 2, active: false },
            { icon: <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/level8/game2/egg.png')} />, id: 2, active: false },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level8/game2/hairdryer.png')} />, id: 2, active: false },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level8/game2/cuttingboard.png')} />, id: 1, active: false },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level8/game2/cuttingboard.png')} />, id: 1, active: false },
        ]
    ])
    const [count, setCount] = useState(0)
    const [game1, setGame1] = useState(0)
    const [activeGame, setActiveGame] = useState([])
    useEffect(() => {
        let item = 0
        setActiveGame(arr[game1])
        arr[game1]?.map((elm, i) => {
            if (elm.id == 1) {
                item = item + 1
            }
        })
        setCount(item)
    }, [game1])

    const [winArr, setWinArr] = useState([])
    const [position, setPosition] = useState([
        { x: 1, y: 1 },
        { x: 67, y: 130 },
        { x: 15, y: 193 },
        { x: 550, y: 35 },
        { x: 500, y: 104 },
        { x: 500, y: 200 },
        { x: 600, y: 200 },
        { x: 120, y: 200 },
    ])
    const Game = (elm, i) => {
        let item = [...winArr]
        let temp = [...activeGame]
        if (elm.id === 1) {
            item.push(elm)
            temp[i].active = true
        }
        else {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 2000);
        }

        setWinArr(item)
        setActiveGame(temp)
        if (item.length === count) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                if (game1 == 0) {
                    setGame1(1)
                    setWinArr([])
                }
                else {
                    navigation.navigate('Level8_3')
                }
                musicSuccess.stop()
            }, 2000);
        }

    }

    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
        <View style={{ justifyContent: "center", alignItems: 'center' }}>
            <View style={[styles.circle, game1 == 1 && { borderRadius: 0 }]}>
                {winArr.map((elm, i) => {
                    return <View key={i}>
                        {elm.icon}
                    </View>
                })}
            </View>
        </View>
        {
            activeGame?.map((elm, i) => {
                if (!elm.active) {
                    return <TouchableOpacity onPress={() => Game(elm, i)} key={i} style={{ position: 'absolute', left: position[i].x, top: position[i].y }}>
                        {elm.icon}
                    </TouchableOpacity>
                }
            })
        }
    </LevelWrapper >
}

const styles = StyleSheet.create({
    circle: {
        width: 200,
        height: 200,
        borderWidth: 4,
        borderColor: `rgba(255, 111, 23, 0.5)`,
        backgroundColor: 'white',
        borderRadius: 100,
        padding: 30,
        flexDirection: "row",
        flexWrap: 'wrap'
    }
})
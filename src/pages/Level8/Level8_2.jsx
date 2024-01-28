import { StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Level8_2 = ({ navigation }) => {
    let w = windowWidth - 200
    let h = windowHeight - 280
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


    const sound1 = new Sound('game821.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const sound = new Sound('game822.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });


    const [arr, setArr] = useState([
        [
            {
                icon: <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/level8/game2/ball.png')} />,
                id: 1,
                active: false,
                icon1: <Image style={{ width: 40, height: 40 }} source={require('../../assets/img/level8/game2/ball.png')} />,

            },
            {
                icon: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/level8/game2/binoculars.png')} />,
                id: 2,
                active: false,
                icon1: <Image style={{ width: 40, height: 40 }} source={require('../../assets/img/level8/game2/binoculars.png')} />,

            },
            {
                icon: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/level8/game2/box.png')} />,
                id: 2,
                active: false,
                icon1: <Image style={{ width: 40, height: 40 }} source={require('../../assets/img/level8/game2/box.png')} />,

            },
            {
                icon: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/level8/game2/yarn.png')} />,
                id: 1,
                active: false,
                icon1: <Image style={{ width: 40, height: 40 }} source={require('../../assets/img/level8/game2/yarn.png')} />,

            },
            {
                icon: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/level8/game2/cubearch.png')} />,
                id: 2,
                active: false,
                icon1: <Image style={{ width: 40, height: 40 }} source={require('../../assets/img/level8/game2/cubearch.png')} />,

            },
            {
                icon: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/level8/game2/cuttingboard.png')} />,
                id: 2,
                active: false,
                icon1: <Image style={{ width: 40, height: 50 }} source={require('../../assets/img/level8/game2/cuttingboard.png')} />,

            },
            {
                icon: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/level8/game2/yarn.png')} />,
                id: 1,
                active: false,
                icon1: <Image style={{ width: 40, height: 40 }} source={require('../../assets/img/level8/game2/yarn.png')} />,

            },
            {
                icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level8/game2/ball.png')} />,
                id: 1,
                active: false,
                icon1: <Image style={{ width: 40, height: 40 }} source={require('../../assets/img/level8/game2/ball.png')} />,

            },
        ],

        [
            { icon: <Image style={{ width: 70, height: 100 }} source={require('../../assets/img/level8/game2/pyramid.png')} />, id: 2, active: false },
            { icon: <Image style={{ width: 100, height: 70 }} source={require('../../assets/img/level8/game2/hammer.png')} />, id: 2, active: false },
            {
                icon: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/level8/game2/box.png')} />,
                id: 1,
                active: false,
                icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level8/game2/box.png')} />,

            },
            { icon: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/level8/game2/yarn.png')} />, id: 2, active: false },
            { icon: <Image style={{ width: 55, height: 80 }} source={require('../../assets/img/level8/game2/egg.png')} />, id: 2, active: false },
            { icon: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/level8/game2/hairdryer.png')} />, id: 2, active: false },
            {
                icon: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/level8/game2/cuttingboard.png')} />,
                id: 1,
                active: false,
                icon1: <Image style={{ width: 30, height: 30 }} source={require('../../assets/img/level8/game2/cuttingboard.png')} />,

            },
            {
                icon: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/level8/game2/cuttingboard.png')} />,
                id: 1, active: false,
                icon1: <Image style={{ width: 30, height: 30 }} source={require('../../assets/img/level8/game2/cuttingboard.png')} />,

            },
        ]
    ])
    const [count, setCount] = useState(0)
    const [game1, setGame1] = useState(1)
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
        sound.stop()
        sound1.stop()
        if (game1 == 0) {
            setTimeout(() => {
                sound.play()
            }, 100)
        }
        else {
            setTimeout(() => {
                sound1.play()
            }, 100)
        }
    }, [game1])

    const [winArr, setWinArr] = useState([])
    const [position, setPosition] = useState([
        { x: 1, y: 1 },
        { x: 100, y: 20 },
        { x: 15, y: h + 60 },
        { x: w - 80, y: 185 },
        { x: w - 20, y: -20 },
        { x: w - 20, y: h + 100 },
        { x: w - 10, y: h },
        { x: 180, y: 210 },
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
                    setPosition([
                        { x: 1, y: 1 },
                        { x: 220, y: 200 },

                        { x: 15, y: h + 60 },
                        { x: w - 100, y: 175 },
                        { x: w, y: -20 },
                        { x: w, y: h + 100 },
                        { x: w - 140, y: h - 50 },
                        { x: 100, y: 20 },
                    ])
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
                    return <View style={{ flexDirection: 'column' }} key={i}>
                        {elm.icon1}
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
        width: 150,
        height: 150,
        borderWidth: 4,
        borderColor: `rgba(255, 111, 23, 0.5)`,
        backgroundColor: 'white',
        borderRadius: 100,
        padding: 30,
        flexDirection: "row",
        flexWrap: 'wrap'
    }
})
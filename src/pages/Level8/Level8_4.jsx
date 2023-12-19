import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { HedgehogSvg, RombSvg, Round, Trapezium, Tringle, VaseBig, VaseSmoll } from '../../assets/svg'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'





const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Level8_4 = ({ navigation }) => {
    let w = windowWidth - 150
    let h = windowHeight - 150
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
    const sound = new Sound('game84.mp3', Sound.MAIN_BUNDLE,
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
    const subject = [
        { icon: <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/level8/game4/ангар.png')} />, id: 5, active: false },
        { icon: <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/level8/game4/будка.png')} />, id: 5, active: false },
        { icon: <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/level8/game4/тумба.png')} />, id: 5, active: false },
        { icon: <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/level8/game4/будка.png')} />, id: 5, active: false },
        { icon: <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/level8/game4/ангар.png')} />, id: 5, active: false },
    ]
    const answer = [
        { icon: <Image style={{ width: 70, height: 90 }} source={require('../../assets/img/level8/game4/дерево.png')} />, id: 1, active: false },
        { icon: <Image style={{ width: 70, height: 90 }} source={require('../../assets/img/level8/game4/елка.png')} />, id: 2, active: false },
        { icon: <Image style={{ width: 70, height: 90 }} source={require('../../assets/img/level8/game4/елкавысокая.png')} />, id: 3, active: false },
        { icon: <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/level8/game4/мухомор.png')} />, id: 4, active: false },
        { icon: <Image style={{ width: 70, height: 90 }} source={require('../../assets/img/level8/game4/низкийдомик.png')} />, id: 6, active: false },
        { icon: <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/level8/game4/тумбавысокая.png')} />, id: 7, active: false },


    ]
    const [arr, setArr] = useState([])

    const [position, setPosition] = useState([
        { x: 30, y: 0 },
        { x: 205, y: 0 },
        { x: 356, y: 0 },
        { x: w - 130, y: h },
        { x: w - 300, y: h - 0 },
        { x: w - 170, y: 60 },
        { x: w - 60, y: 101 },
        { x: w, y: 215 },
        { x: w, y: 10 },
        { x: 185, y: 70 },
        { x: 385, y: 102 },
    ])

    useEffect(() => {
        let combain = subject.concat(answer)
        setArr(combain)
    }, [])


    const [selectedVas, setSelectedVas] = useState(null)
    const [count, setCount] = useState(0)


    const Game = (elm, i) => {
        let item = [...arr]
        if (selectedVas == 1 && elm.id != 5) {
            setCount(count + 1)
            item[i].active = true
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 1000);
        }
        else if (selectedVas == 1 && elm.id == 5) {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);
            item.map((elm, i) => {
                setCount(0)
                elm.active = false
                setTimeout(() => {
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    musicSuccess.stop()
                }, 1000);
            })
        }
        if (selectedVas == 2 && elm.id == 5) {
            setCount(count + 1)
            item[i].active = true
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 1000);

        }
        else if (selectedVas == 2 && elm.id != 5) {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);
            item.map((elm, i) => {
                setCount(0)
                elm.active = false
            })
        }
        setArr(item)
    }

    useEffect(() => {
        if (count == arr.length && count > 0) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                sound.stop()
                navigation.navigate('Level4_3')
                musicSuccess.stop()
            }, 2000);
        }
    }, [count])


    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
        {arr.map((elm, i) => {
            if (!elm.active) {
                return <TouchableOpacity onPress={() => Game(elm, i)} key={i} style={{ position: 'absolute', left: position[i].x, top: position[i].y }}>
                    {elm.icon}
                </TouchableOpacity>
            }
        })}
        <View style={styles.boxWrapper}>
            <TouchableOpacity onPress={() => setSelectedVas(1)} style={[styles.box, { width: 150, height: 150 }, selectedVas == 1 && { borderColor: 'red' }]}>
                <VaseBig />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedVas(2)} style={[styles.box, { width: 125, height: 125 }, selectedVas == 2 && { borderColor: 'red' }]}>
                <VaseSmoll />
            </TouchableOpacity>
        </View>
    </LevelWrapper>
}
const styles = StyleSheet.create({
    boxWrapper: {
        flexDirection: "row",
        height: '100%',
        alignItems: 'flex-end'
    },
    box: {
        borderColor: 'rgba(153, 204, 51, 0.4)',
        borderWidth: 3,
        height: 230,
        width: 235,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: 'white',
        marginHorizontal: 10,

    }
})
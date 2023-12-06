import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { Blue, Green, Red } from '../../assets/svg'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

export const Level4_4 = ({ navigation }) => {

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
    const sound = new Sound('game44.mp3', Sound.MAIN_BUNDLE,
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

    const [colors, setColors] = useState(['', '', ''])
    const [selected, setSelected] = useState()
    const [data, setData] = useState([
        false,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        false
    ])
    const Game = (i) => {
        let item = [...data]
        if (selected == 2) {
            if (i == 0 || i == 1 || i == 2) {
                item[i] = true
                setTimeout(() => {
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    musicSuccess.stop()
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
        }
        else if (selected == 3) {
            if (i == 6 || i == 7 || i == 8) {
                item[i] = true
                setTimeout(() => {
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    musicSuccess.stop()
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
        }
        else if (selected == 1) {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);
        }

        setData(item)
    }

    useEffect(() => {
        let send = true
        data.map((elm, i) => {
            if (!elm) {
                send = false
            }
        })

        if (send) {
            setTimeout(() => {
                navigation.navigate('Level4_5')
            }, 2000);
        }

    }, [data])

    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <View style={{ width: "35%" }}>
                <View style={styles.boxWrapper}>
                    <TouchableOpacity onPress={() => Game(0)} style={styles.box}>
                        {data[0] ?
                            <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level4/game4/bluedinosaur.png')} /> :
                            <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level4/game4/dinosaur.png')} />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Game(1)} style={styles.box}>
                        {data[1] ?
                            <Image style={{ width: 40, height: 50 }} source={require('../../assets/img/level4/game4/bluebeanbag.png')} /> :
                            <Image style={{ width: 40, height: 50 }} source={require('../../assets/img/level4/game4/beanbag.png')} />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Game(2)} style={styles.box}>
                        {data[2] ?
                            <Image style={{ width: 45, height: 50 }} source={require('../../assets/img/level4/game4/bluebox.png')} /> :
                            <Image style={{ width: 45, height: 50 }} source={require('../../assets/img/level4/game4/cubecolorless.png')} />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.line}></View>
                <View style={styles.boxWrapper}>
                    <TouchableOpacity onPress={() => Game(3)} style={styles.box}>
                        <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/level4/game4/thepyramid.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Game(4)} style={styles.box}>
                        <Image style={{ width: 40, height: 50 }} source={require('../../assets/img/level4/game4/cubecolorless.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Game(5)} style={styles.box}>
                        <Image style={{ width: 30, height: 50 }} source={require('../../assets/img/level4/game4/doll.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.line}></View>
                <View style={styles.boxWrapper}>
                    <TouchableOpacity onPress={() => Game(6)} style={styles.box}>
                        {data[6] ?
                            <Image style={{ width: 50, height: 35 }} source={require('../../assets/img/level4/game4/green2.png')} /> :
                            <Image style={{ width: 50, height: 35 }} source={require('../../assets/img/level4/game4/car.png')} />
                        }

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Game(7)} style={styles.box}>
                        {data[7] ?
                            <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/level4/game4/green1.png')} /> :
                            <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/level4/game4/thepyramid.png')} />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Game(8)} style={styles.box}>
                        {data[8] ?
                            <Image style={{ width: 40, height: 50 }} source={require('../../assets/img/level4/game4/green3.png')} /> :
                            <Image style={{ width: 40, height: 50 }} source={require('../../assets/img/level4/game4/cubecolorless.png')} />

                        }

                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%', justifyContent: 'space-between' }}>
                {colors[1] != 2 && < TouchableOpacity onPress={() => setSelected(1)}>
                    <Red />
                </TouchableOpacity>}
                {colors[0] != 1 && <TouchableOpacity onPress={() => setSelected(2)}>
                    <Blue />
                </TouchableOpacity>}
                {colors[2] != 3 && <TouchableOpacity onPress={() => setSelected(3)}>
                    <Green />
                </TouchableOpacity>}
            </View>
        </View>
    </LevelWrapper >
}

const styles = StyleSheet.create({
    line: {
        borderWidth: 2,
        borderColor: '#F08143',
        marginVertical: 20,
        borderRadius: 5,
    },
    boxWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderColor: 'rgba(240, 129, 67, 0.4)',
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
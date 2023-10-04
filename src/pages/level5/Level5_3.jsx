import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { Blue, Green, Red } from '../../assets/svg'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'

export const Level5_3 = ({ navigation }) => {
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

    const number = [
        { icon: <Image source={require('../../assets/img/0.png')} style={{ width: 35, height: 50 }} />, id: 1, active: false },
        { icon: <Image source={require('../../assets/img/1num.png')} style={{ width: 35, height: 50 }} />, id: 1, active: false },
        { icon: <Image source={require('../../assets/img/3.png')} style={{ width: 35, height: 50 }} />, id: 1, active: false },
        { icon: <Image source={require('../../assets/img/4.png')} style={{ width: 35, height: 50 }} />, id: 1, active: false },
        { icon: <Image source={require('../../assets/img/5.png')} style={{ width: 35, height: 50 }} />, id: 1, active: false },
        { icon: <Image source={require('../../assets/img/6.png')} style={{ width: 35, height: 50 }} />, id: 1, active: false },
        { icon: <Image source={require('../../assets/img/7.png')} style={{ width: 35, height: 50 }} />, id: 1, active: false },
        { icon: <Image source={require('../../assets/img/9.png')} style={{ width: 35, height: 50 }} />, id: 1, active: false },
    ]
    const num1 = [
        { icon: <Image source={require('../../assets/img/num2.png')} style={{ width: 35, height: 50 }} />, id: 2, active: false },
        { icon: <Image source={require('../../assets/img/8.png')} style={{ width: 35, height: 50 }} />, id: 8, active: false },
    ]
    const subject = [
        { icon: <Image source={require('../../assets/img/level5/game3/circle.png')} style={{ width: 35, height: 50 }} />, id: 3, active: false },
        { icon: <Image source={require('../../assets/img/level5/game3/Diamond.png')} style={{ width: 35, height: 50 }} />, id: 3, active: false },
        { icon: <Image source={require('../../assets/img/level5/game3/Hexagon.png')} style={{ width: 35, height: 50 }} />, id: 3, active: false },
        { icon: <Image source={require('../../assets/img/level5/game3/oval.png')} style={{ width: 35, height: 50 }} />, id: 3, active: false },
        { icon: <Image source={require('../../assets/img/level5/game3/Pentagon.png')} style={{ width: 35, height: 50 }} />, id: 3, active: false },
        { icon: <Image source={require('../../assets/img/level5/game3/rectangle.png')} style={{ width: 35, height: 50 }} />, id: 3, active: false },
        { icon: <Image source={require('../../assets/img/level5/game3/square.png')} style={{ width: 35, height: 50 }} />, id: 3, active: false },
        { icon: <Image source={require('../../assets/img/level5/game3/Trapezoid.png')} style={{ width: 35, height: 50 }} />, id: 3, active: false },
        { icon: <Image source={require('../../assets/img/level5/game3/Triangl.png')} style={{ width: 35, height: 50 }} />, id: 3, active: false },
    ]

    const [arr, setArr] = useState([])

    useEffect(() => {
        let num = GetRandomItemsFromArray(number, 2)
        num.push(num1[0])
        num.push(num1[1])
        let sub = GetRandomItemsFromArray(subject, 8)
        let concat = num.concat(sub)
        let newArr = GetRandomItemsFromArray(concat, concat.length)
        setArr(newArr)
    }, [])

    const [colors, setColors] = useState(['', '', ''])



    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: "center", height: '100%' }}>
            <View style={{ width: "35%", flexDirection: 'row' }}>
                <View style={{ width: "100%" }}>
                    <View style={styles.boxWrapper}>
                        <View style={styles.box}>
                            {arr[0]?.icon}
                        </View>
                        <View style={styles.box}>
                            <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level4/game4/beanbag.png')} />
                        </View>
                        <View style={styles.box}>
                            <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level4/game4/beanbag.png')} />
                        </View>
                        <View style={styles.box}>
                            <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level4/game4/cubecolorless.png')} />
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.boxWrapper}>
                        <View style={styles.box}>
                            <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level4/game4/thepyramid.png')} />
                        </View>
                        <View style={styles.box}>
                            <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level4/game4/thepyramid.png')} />
                        </View>
                        <View style={styles.box}>
                            <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level4/game4/cubecolorless.png')} />
                        </View>
                        <View style={styles.box}>
                            <Image style={{ width: 40, height: 50 }} source={require('../../assets/img/level4/game4/doll.png')} />
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.boxWrapper}>
                        <View style={styles.box}>
                            <Image style={{ width: 50, height: 40 }} source={require('../../assets/img/level4/game4/car.png')} />
                        </View>
                        <View style={styles.box}>
                            <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level4/game4/thepyramid.png')} />
                        </View>
                        <View style={styles.box}>
                            <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level4/game4/cubecolorless.png')} />
                        </View>
                        <View style={styles.box}>
                            <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level4/game4/thepyramid.png')} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%', justifyContent: 'space-between' }}>
                {colors[1] != 2 && < TouchableOpacity onPress={() => Game(2)}>
                    <Red />
                </TouchableOpacity>}
                {colors[0] != 1 && <TouchableOpacity onPress={() => Game(1)}>
                    <Blue />
                </TouchableOpacity>}
                {colors[2] != 3 && <TouchableOpacity onPress={() => Game(3)}>
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
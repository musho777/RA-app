import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { Blue, Green, Red } from '../../assets/svg'
import { useState } from 'react'
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

    const [colors, setColors] = useState(['', '', ''])
    const Game = (i) => {
        let item = [...colors]
        if (i == 1) {
            item[0] = 1
        }
        if (i == 2 && item[0] != '') {
            item[1] = 2
        }
        else if (i == 2 && item[0] == '') {
            item[1] = ''
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);
        }
        if (i == 3 && item[1] != '') {
            item[2] = 3
        }
        else if (i == 3 && item[1] == '') {
            item[2] = ''
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);
        }

        if (item[0] == 1 && item[1] == 2 && item[2] == 3) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                navigation.navigate('Level4_5')
                musicSuccess.stop()
            }, 2000);
        }
        setColors(item)
    }

    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <View style={{ width: "35%" }}>
                <View style={styles.boxWrapper}>
                    <View style={styles.box}>
                        <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level4/game4/dinosaur.png')} />
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
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { LevelWrapper } from '../../components/LevelWrapper'
import Sound from 'react-native-sound'
import { useEffect, useState } from 'react';
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray';

const windowWidth = Dimensions.get('window').width;

export const Level4_1 = ({ navigation }) => {


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
    const sound = new Sound('game41.mp3', Sound.MAIN_BUNDLE,
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
    const [disable, setDisable] = useState(false)

    const [game1, setGame1] = useState(0)

    const [arr, setArr] = useState([
        {
            box: { icon: <Image source={require('../../assets/img/level4/game1/yellowbox4.png')} style={{ width: 200, height: 200 }} />, count: 4 },
            item: [
                { icon: <Image source={require('../../assets/img/level4/game1/yellow.png')} style={{ width: 50, height: 50 }} />, id: 1, active: false },
                { icon: <Image source={require('../../assets/img/level4/game1/yellow.png')} style={{ width: 50, height: 50 }} />, id: 1, active: false },
                { icon: <Image source={require('../../assets/img/level4/game1/yellow.png')} style={{ width: 50, height: 50 }} />, id: 1, active: false },
                { icon: <Image source={require('../../assets/img/level4/game1/yellow.png')} style={{ width: 50, height: 50 }} />, id: 1, active: false },
                { icon: <Image source={require('../../assets/img/level4/game1/yellow.png')} style={{ width: 50, height: 50 }} />, id: 1, active: false },
                { icon: <Image source={require('../../assets/img/level4/game1/yellow.png')} style={{ width: 50, height: 50 }} />, id: 1, active: false },
                { icon: <Image source={require('../../assets/img/level4/game1/orange.png')} style={{ width: 50, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level4/game1/orange.png')} style={{ width: 50, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level4/game1/orange.png')} style={{ width: 50, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level4/game1/blue.png')} style={{ width: 50, height: 50 }} />, id: 3 },
                { icon: <Image source={require('../../assets/img/level4/game1/blue.png')} style={{ width: 50, height: 50 }} />, id: 3 },
            ]
        },
        {
            box: { icon: <Image source={require('../../assets/img/level4/game1/blue2.png')} style={{ width: 200, height: 200 }} />, count: 2 },
            item: [
                { icon: <Image source={require('../../assets/img/level4/game1/purple.png')} style={{ width: 50, height: 50 }} />, id: 3, },
                { icon: <Image source={require('../../assets/img/level4/game1/purple.png')} style={{ width: 50, height: 50 }} />, id: 3, },
                { icon: <Image source={require('../../assets/img/level4/game1/purple.png')} style={{ width: 50, height: 50 }} />, id: 3, },
                { icon: <Image source={require('../../assets/img/level4/game1/purple.png')} style={{ width: 50, height: 50 }} />, id: 3, },
                { icon: <Image source={require('../../assets/img/level4/game1/orange.png')} style={{ width: 50, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level4/game1/orange.png')} style={{ width: 50, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level4/game1/orange.png')} style={{ width: 50, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level4/game1/blue.png')} style={{ width: 50, height: 50 }} />, id: 1, active: false },
                { icon: <Image source={require('../../assets/img/level4/game1/blue.png')} style={{ width: 50, height: 50 }} />, id: 1, active: false },
                { icon: <Image source={require('../../assets/img/level4/game1/blue.png')} style={{ width: 50, height: 50 }} />, id: 1, active: false },
                { icon: <Image source={require('../../assets/img/level4/game1/blue.png')} style={{ width: 50, height: 50 }} />, id: 1, active: false },
            ]
        },
        {
            box: { icon: <Image source={require('../../assets/img/level4/game1/pink6.png')} style={{ width: 200, height: 200 }} />, count: 6 },
            item: [
                { icon: <Image source={require('../../assets/img/level4/game1/blue.png')} style={{ width: 50, height: 50 }} />, id: 2, },
                { icon: <Image source={require('../../assets/img/level4/game1/blue.png')} style={{ width: 50, height: 50 }} />, id: 2, },
                { icon: <Image source={require('../../assets/img/level4/game1/blue.png')} style={{ width: 50, height: 50 }} />, id: 2, },
                { icon: <Image source={require('../../assets/img/level4/game1/blue.png')} style={{ width: 50, height: 50 }} />, id: 2, },
                { icon: <Image source={require('../../assets/img/level4/game1/purple.png')} style={{ width: 50, height: 50 }} />, id: 1, },
                { icon: <Image source={require('../../assets/img/level4/game1/purple.png')} style={{ width: 50, height: 50 }} />, id: 1, },
                { icon: <Image source={require('../../assets/img/level4/game1/purple.png')} style={{ width: 50, height: 50 }} />, id: 1, },
                { icon: <Image source={require('../../assets/img/level4/game1/purple.png')} style={{ width: 50, height: 50 }} />, id: 1, },
                { icon: <Image source={require('../../assets/img/level4/game1/purple.png')} style={{ width: 50, height: 50 }} />, id: 1, },
                { icon: <Image source={require('../../assets/img/level4/game1/purple.png')} style={{ width: 50, height: 50 }} />, id: 1, },
                { icon: <Image source={require('../../assets/img/level4/game1/purple.png')} style={{ width: 50, height: 50 }} />, id: 1, },
                { icon: <Image source={require('../../assets/img/level4/game1/purple.png')} style={{ width: 50, height: 50 }} />, id: 1, },
                { icon: <Image source={require('../../assets/img/level4/game1/yellow.png')} style={{ width: 50, height: 50 }} />, id: 3, },
                { icon: <Image source={require('../../assets/img/level4/game1/yellow.png')} style={{ width: 50, height: 50 }} />, id: 3, },
                { icon: <Image source={require('../../assets/img/level4/game1/yellow.png')} style={{ width: 50, height: 50 }} />, id: 3, },
                { icon: <Image source={require('../../assets/img/level4/game1/yellow.png')} style={{ width: 50, height: 50 }} />, id: 3, },
                { icon: <Image source={require('../../assets/img/level4/game1/yellow.png')} style={{ width: 50, height: 50 }} />, id: 3, },
            ]
        }
    ])

    const [position, setPosition] = useState([
        { x: 379, y: 68 },
        { x: 355, y: 168 },
        { x: 412, y: 205 },
        { x: 453, y: 147 },
        { x: 502, y: 204 },
        { x: 566, y: 236 },
        { x: 607, y: 214 },
        { x: 504, y: 107 },
        { x: 486, y: 36 },
        { x: 574, y: 107 },
        { x: 387, y: 16 },
        { x: 276, y: 221 },
        { x: 305, y: 159 },
        { x: 601, y: 45 },
        { x: 290, y: 20 },
        { x: 320, y: 90 },
        { x: windowWidth - 50, y: 20 },

    ])

    const [activeGame, setActiveGame] = useState({})

    useEffect(() => {
        let item = arr[game1]
        temp = GetRandomItemsFromArray(position, position.length)
        setPosition(temp)
        setActiveGame(item)
    }, [game1])

    const Game = (id, i) => {
        let item = { ...activeGame }
        let count = 0
        if (id === 1) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 2000);
            item.item[i].active = true
            item.item.map((elm, i) => {
                if (elm.active) {
                    count = count + 1
                }
            })
        }
        else {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 2000);
            item.item.map((elm, i) => {
                elm.active = false
            })
        }
        if (count == activeGame.box.count) {
            setTimeout(() => {
                setDisable(true)
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                setDisable(false)
                setGame1(game1 + 1)
                if (game1 === 2) {
                    sound.stop()
                    navigation.navigate('Level4_2')
                }
                musicSuccess.stop()
            }, 2000);
        }
        setActiveGame(item)
    }

    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>

            <View style={styles.box}>
                {activeGame?.box?.icon}
            </View>
            {
                activeGame?.item?.map((elm, i) => {
                    if (!elm.active) {

                        return <TouchableOpacity disabled={disable} onPress={() => Game(elm.id, i)} key={i} style={{ position: 'absolute', top: position[i].y, left: position[i].x }}>
                            {elm?.icon}
                        </TouchableOpacity>
                    }
                })
            }
        </View>
    </LevelWrapper>
}

const styles = StyleSheet.create({
    box: {
        borderColor: 'rgba(255, 111, 23, 0.5)',
        borderWidth: 2,
        height: 230,
        width: 235,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        backgroundColor: 'white',
        marginHorizontal: 40,
    }
})
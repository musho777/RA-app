import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import { Image1, Image2, Image3, Image4, Image5, Image6 } from '../../assets/svg'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'
import Sound from 'react-native-sound'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Level5_8 = ({ navigation }) => {
    let w = windowWidth - 100
    let h = windowHeight - 180
    const [image, setImage] = useState([
        { icon: <Image6 />, id: 0 },
        { icon: <Image5 />, id: 1 },
        { icon: <Image4 />, id: 2 },
        { icon: <Image2 />, id: 3 },
        { icon: <Image3 />, id: 4 },
        { icon: <Image1 />, id: 5 },
    ])

    const [position, setPosition] = useState([
        { x: 0, y: 0, show: true },
        { x: 0, y: h, show: true },
        { x: w - 80, y: h, show: false },
        { x: 0, y: 0, show: false },
        { x: 0, y: h, show: false },
        { x: w - 80, y: h, show: true },
    ])

    const musicSuccess = new Sound('success.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const music = new Sound('ding.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const sound = new Sound('game58.mp3', Sound.MAIN_BUNDLE,
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
    const [selectdItem, setSelectedItem] = useState('')
    useEffect(() => {
        let newArr = GetRandomItemsFromArray(position, position.length)
        // setPosition(newArr)
        setTimeout(function () {
            setGame(false)
        }, 3000);
    }, [])
    const [game, setGame] = useState(true)
    const [arr, setArr] = useState(['', '', '', '', '', ''])




    const Game = (i, elm) => {
        let item = [...arr]
        if (i === selectdItem.id) {
            item[i] = selectdItem.icon
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
        setArr(item)
    }

    useEffect(() => {
        let win = true
        let count = 0

        console.log(arr)
        arr.map((elm, i) => {
            if (!elm) {
                win = false
            }
            else {
                count = count + 1
            }
        })
        console.log(count)
        if (count == 3) {
            let item = [...position]
            item[2].show = true
            item[3].show = true
            item[4].show = true
            setPosition(item)
        }
        if (win) {
            sound.stop()
            navigation.navigate('LevelScreen')
        }
    }, [arr])



    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} >
        {game ?
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Image style={{ width: 335, height: 237 }} source={require('../../assets/img/level5/game8/fullImage.png')} />
            </View> :
            <View style={{ justifyContent: 'center', alignContent: 'center', height: '100%' }}>
                {position.map((elm, i) => {
                    if (elm.show)
                        if (!arr.includes(image[i].icon)) {
                            // return <TouchableOpacity onPress={() => Game(image[i].id, image[i].icon)} key={i} style={{ position: 'absolute', left: elm.x, top: elm.y }}>
                            //     {image[i].icon}
                            // </TouchableOpacity>
                            return <TouchableOpacity onPress={() => setSelectedItem(image[i])} key={i} style={{ position: 'absolute', left: elm.x, top: elm.y }}>
                                {image[i].icon}
                            </TouchableOpacity>
                        }
                })}
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.box}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => Game(0)} style={styles.boxItem}>
                                {arr[0]}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Game(1)} style={styles.boxItem}>
                                {arr[1]}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Game(2)} style={styles.boxItem}>
                                {arr[2]}
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => Game(3)} style={styles.boxItem}>
                                {arr[3]}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Game(4)} style={styles.boxItem}>
                                {arr[4]}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Game(5)} style={styles.boxItem}>
                                {arr[5]}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        }
    </LevelWrapper>
}

const styles = StyleSheet.create({
    box: {
        width: 335,
        height: 237,
        backgroundColor: 'white',
        borderColor: 'rgba(255, 111, 23, 0.50)',
        borderWidth: 4,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxItem: {
        width: 109,
        height: 114,
        borderWidth: 1,
        borderColor: 'rgba(255, 111, 23, 0.50)',

    }
})
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import { Image1, Image2, Image3, Image4, Image5, Image6 } from '../../assets/svg'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'

export const Level5_8 = ({ navigation }) => {
    const [image, setImage] = useState([
        { icon: <Image6 />, id: 0 },
        { icon: <Image5 />, id: 1 },
        { icon: <Image4 />, id: 2 },
        { icon: <Image2 />, id: 3 },
        { icon: <Image3 />, id: 4 },
        { icon: <Image1 />, id: 5 },
    ])
    const [position, setPosition] = useState([
        { x: 0, y: 0 },
        { x: 18, y: 202 },
        { x: 101, y: 151 },
        { x: 525, y: 29 },
        { x: 625, y: 0 },
        { x: 655, y: 192 },
    ])
    useEffect(() => {
        let item = [...position]
        let newArr = GetRandomItemsFromArray(position, position.length)
        setPosition(newArr)
        setTimeout(function () {
            setGame(false)
        }, 3000);
    }, [])
    const [game, setGame] = useState(true)
    const [arr, setArr] = useState(['', '', '', '', '', ''])
    const Game = (i, elm) => {
        let item = [...arr]
        item[i] = elm
        setArr(item)
    }

    useEffect(() => {
        let win = true
        arr.map((elm, i) => {
            if (!elm) {
                win = false
            }
        })
        if (win) {
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
                    if (!arr.includes(image[i].icon)) {
                        return <TouchableOpacity onPress={() => Game(image[i].id, image[i].icon)} key={i} style={{ position: 'absolute', left: elm.x, top: elm.y }}>
                            {image[i].icon}
                        </TouchableOpacity>
                    }
                })}
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.box}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.boxItem}>
                                {arr[0]}
                            </View>
                            <View style={styles.boxItem}>
                                {arr[1]}
                            </View>
                            <View style={styles.boxItem}>
                                {arr[2]}
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.boxItem}>
                                {arr[3]}
                            </View>
                            <View style={styles.boxItem}>
                                {arr[4]}
                            </View>
                            <View style={styles.boxItem}>
                                {arr[5]}
                            </View>
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
    }
})
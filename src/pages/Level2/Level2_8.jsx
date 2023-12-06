import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton';
import { Ballon2, Ballon3, Blue, Blue1, Orange, Red, Yellow1 } from '../../assets/svg';
import { useEffect, useState } from 'react';
import Sound from 'react-native-sound';


export const Level2_8 = ({ navigation }) => {
    const [arr, setArr] = useState([
        [
            { icone: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level2/game7/whiteHeart.png')} />, id: 1, active: false },
            { icone: <Image style={{ width: 80, height: 50 }} source={require('../../assets/img/level2/game7/whiteBallon1.png')} />, id: 3, active: false },
            { icone: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level2/game7/whiteBallon.png')} />, id: 2, active: false },
        ],
        [
            { icone: <Red />, id: 4, active: false },
            { icone: <Blue />, id: 5, active: false },
            { icone: <Orange />, id: 6, active: false },
        ]
    ])
    const [activeNumber, setActiveNumber] = useState({ number1: '', number2: '' })

    const [game, setGame] = useState(true)
    useEffect(() => {
        setTimeout(function () {
            setGame(false)
        }, 3000);
    }, [])
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
    const Game = (number) => {
        let item = [...arr]
        let item2 = { ...activeNumber }
        for (let i = 0; i < item.length; i++) {
            if (number <= 3) {
                item2.number1 = number
                break
            }
            else if (number > 3) {
                item2.number2 = number
                break
            }
        }
        if (item2.number1 + 3 == item2.number2) {
            const isLargeNumber = (element) => element.id == item2.number1;
            const isLargeNumber1 = (element) => element.id == item2.number2;
            let i1 = item[0].findIndex(isLargeNumber)
            let i2 = item[1].findIndex(isLargeNumber1)
            item[0][i1].active = true
            item[1][i2].active = true
            item2.number1 = ''
            item2.number2 = ''
            setArr(item)

        }
        else if (item2.number1 != '' && item2.number2 != '') {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
                item2.number1 = ''
                item2.number2 = ''
                item[0].map((elm, i) => {
                    elm.active = false
                })
                item[1].map((elm, i) => {
                    elm.active = false
                })
                setActiveNumber(item2)
                setArr(item)
            }, 1000);
        }
        setActiveNumber(item2)
    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex > 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    useEffect(() => {
        let arr1 = shuffle(arr[0])
        let arr2 = shuffle(arr[1])
        setArr([arr1, arr2])
    }, [])

    useEffect(() => {
        let win = true
        arr[0].map((elm, i) => {
            if (!elm.active) {
                win = false
            }
        })
        arr[1].map((elm, i) => {
            if (!elm.active) {
                win = false
            }
        })
        if (win) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
                navigation.navigate('LevelScreen')
            }, 2000);
        }
    }, [arr])

    if (game) {
        return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
            <View style={styles.block}>
                <ImgButton svg={<Blue1 />} border={'rgba(255, 111, 23, 0.50)'} />
                <ImgButton svg={<Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level2/game7/redHeart.png')} />} border={'rgba(255, 111, 23, 0.50)'} />
                <ImgButton svg={<Yellow1 />} border={'rgba(255, 111, 23, 0.50)'} />
            </View>
        </LevelWrapper>
    }
    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
        <View style={styles.block}>
            {
                arr.length > 0 && arr[0].map((elm, i) => {
                    if (!elm.active) {
                        return <ImgButton onPress={() => Game(elm.id)} key={i} svg={elm.icone} border={activeNumber.number1 == elm.id ? 'green' : 'rgba(255, 111, 23, 0.50)'} />
                    }
                    else {
                        return <View key={i} style={{ width: 90, height: 90 }}></View>
                    }
                })
            }
        </View>
        <View style={styles.block}>
            {arr[1].map((elm, i) => {
                if (!elm.active) {
                    return <TouchableOpacity key={i} onPress={() => Game(elm.id)}>
                        {elm.icone}
                    </TouchableOpacity>
                }
                else {
                    return <View key={i} style={{ width: 90, height: 90 }}></View>
                }
            })}
        </View>
    </LevelWrapper>
}
const styles = StyleSheet.create({
    block: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 100,
        marginTop: 30,
    }
})
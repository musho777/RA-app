import { Dimensions, Image, StyleSheet, View } from "react-native"
import { LevelWrapper } from "../../components/LevelWrapper"
import { BlueButterFly, BlueButterFly1, BlueGlass, BlueGlass1, Butterfly2, Butterfly3, GreenGlass, GreenGlass1, RedButterFly1, RedButterfily, RedGlass, RedGlass1 } from "../../assets/svg"
import { ImgButton } from "../../components/ImgButton";
import { useEffect, useState } from "react";
import Sound from "react-native-sound";

const windowHeight = Dimensions.get('window').height;

export const Level3_6 = ({ navigation }) => {
    const [side1, setSide1] = useState([
        [
            [
                { icone: <Image source={require('../../assets/img/rooster1.png')} style={{ width: 53, height: 70 }} />, id: 1, active: false },
                { icone: <Image source={require('../../assets/img/rooster2.png')} style={{ width: 53, height: 70 }} />, id: 2, active: false },
                { icone: <Image source={require('../../assets/img/rooster3.png')} style={{ width: 53, height: 70 }} />, id: 3, active: false }
            ],
            [
                { icone: <Image source={require('../../assets/img/rooster1.1.png')} style={{ width: 53, height: 70 }} />, id: 4, active: false },
                { icone: <Image source={require('../../assets/img/rooster2.1.png')} style={{ width: 53, height: 70 }} />, id: 5, active: false },
                { icone: <Image source={require('../../assets/img/rooster3.1.png')} style={{ width: 53, height: 70 }} />, id: 6, active: false }
            ]
        ],
        [
            [
                { icone: <Image source={require('../../assets/img/snail1.png')} style={{ width: 70, height: 53 }} />, id: 1, active: false },
                { icone: <Image source={require('../../assets/img/snail2.png')} style={{ width: 70, height: 53 }} />, id: 2, active: false },
                { icone: <Image source={require('../../assets/img/snail3.png')} style={{ width: 70, height: 53 }} />, id: 3, active: false }
            ],
            [
                { icone: <Image source={require('../../assets/img/snail1.1.png')} style={{ width: 70, height: 53 }} />, id: 4, active: false },
                { icone: <Image source={require('../../assets/img/snail2.1.png')} style={{ width: 70, height: 53 }} />, id: 5, active: false },
                { icone: <Image source={require('../../assets/img/snail3.1.png')} style={{ width: 70, height: 53 }} />, id: 6, active: false }
            ]
        ],

    ])

    const [game1, setGame1] = useState(0)

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



    const [activeGame, setActiveGame] = useState([])
    const [active, setActive] = useState([
        { value1: '', value2: '' },
        { value1: '', value2: '' },
        { value1: '', value2: '' },
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
    const [activeNumber, setActiveNumber] = useState({ number1: '', number2: '' })
    const [answer, setAnswer] = useState([false, false, false, false, false, false, false])
    const Game = (number) => {
        let item = [...active]
        let tepm = [...answer]
        let item2 = { ...activeNumber }
        let item3 = [...activeGame]
        for (let i = 0; i < item.length; i++) {
            if (number <= 3) {
                item[i].value1 = number
                item2.number1 = number
                break
            }
            else if (number > 3) {
                item[i].value2 = number
                item2.number2 = number
                break
            }
        }

        if (item2.number1 + 3 == item2.number2) {
            const isLargeNumber = (element) => element.id == item2.number1;
            const isLargeNumber1 = (element) => element.id == item2.number2;
            let i1 = item3[0].findIndex(isLargeNumber)
            let i2 = item3[1].findIndex(isLargeNumber1)
            item3[0][i1].active = true
            item3[1][i2].active = true
            item2.number1 = ''
            item2.number2 = ''
            setActive(item3)

        }
        else if (item2.number1 != '' && item2.number2 != '') {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
                item2.number1 = ''
                item2.number2 = ''
                item3[0].map((elm, i) => {
                    elm.active = false
                })
                item3[1].map((elm, i) => {
                    elm.active = false
                })
                setActive(item3)
                setActiveNumber(item2)
            }, 1000);
        }
        setActiveNumber(item2)
        setActive(item)
        setAnswer(tepm)
    }
    useEffect(() => {
        let win = true
        activeGame.length && activeGame[0].map((elm, i) => {
            if (!elm.active) {
                win = false
            }
        })
        if (win && activeGame.length) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
                setGame1(game1 + 1)
                if (game1 === 1) {
                    navigation.navigate('Level3_7')
                }
            }, 2000);
        }
    }, [answer])

    useEffect(() => {
        // const randomZeroOrOne = Math.floor(Math.random() * 2);
        if (game1 == 0) {
            let arr1 = shuffle(side1[0][0])
            let arr2 = shuffle(side1[0][1])
            setActiveGame([arr1, arr2])
        }
        else {
            let arr1 = shuffle(side1[1][0])
            let arr2 = shuffle(side1[1][1])
            setActiveGame([arr1, arr2])
        }
    }, [game1])
    return (
        <LevelWrapper img2={require('../../assets/img/bg3.png')} img={require('../../assets/img/3bh.png')}>
            <View style={{ flexDirection: 'row', justifyContent: "space-around", paddingHorizontal: 100 }}>
                <View style={styles.block}>
                    {activeGame.length > 0 && activeGame[0].map((elm, i) => {
                        if (elm.active) {
                            return <View key={i} style={{ width: 90, height: 90 }} />
                        }
                        return <ImgButton key={i} onPress={() => Game(elm.id)} svg={elm.icone} border={activeNumber.number1 == elm.id ? 'green' : 'rgba(160, 205, 212, 0.50)'} />
                    })}
                </View>
                <View style={styles.block}>
                    {activeGame.length > 0 && activeGame[1].map((elm, i) => {
                        if (elm.active) {
                            return <View key={i} style={{ width: 90, height: 90 }} />
                        }
                        return <ImgButton key={i} onPress={() => Game(elm.id)} svg={elm.icone} border={activeNumber.number2 == elm.id ? 'green' : 'rgba(160, 205, 212, 0.50)'} />
                    })}
                </View>
            </View>
        </LevelWrapper>
    )
}

const styles = StyleSheet.create({
    block: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: windowHeight - 80
    }
})
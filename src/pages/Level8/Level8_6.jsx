import { Dimensions, Image, StyleSheet, View } from "react-native"
import { LevelWrapper } from "../../components/LevelWrapper"
import { ImgButton } from "../../components/ImgButton";
import { useEffect, useState } from "react";
import Sound from "react-native-sound";
import { GetRandomItemsFromArray } from "../../components/Funtion/getRandomItemsFromArray";

const windowHeight = Dimensions.get('window').height;

export const Level8_6 = ({ navigation }) => {


    const [activeGame, setActiveGame] = useState([
        [
            { icone: <Image source={require('../../assets/img/level8/game6/beanbag.png')} style={{ width: 70, height: 80 }} />, id: 1, active: false },
            { icone: <Image source={require('../../assets/img/level8/game6/butterfly.png')} style={{ width: 80, height: 60 }} />, id: 2, active: false },
            { icone: <Image source={require('../../assets/img/level8/game6/chicken.png')} style={{ width: 70, height: 85 }} />, id: 3, active: false },
            { icone: <Image source={require('../../assets/img/level8/game6/fish.png')} style={{ width: 70, height: 90 }} />, id: 4, active: false },
            { icone: <Image source={require('../../assets/img/level8/game6/hare.png')} style={{ width: 65, height: 90 }} />, id: 5, active: false },
        ],
        [
            { icone: <Image source={require('../../assets/img/level8/game6/doll.png')} style={{ width: 65, height: 90 }} />, id: 6, active: false },
            { icone: <Image source={require('../../assets/img/level8/game6/ladybug.png')} style={{ width: 80, height: 80 }} />, id: 7, active: false },
            { icone: <Image source={require('../../assets/img/level8/game6/duck.png')} style={{ width: 80, height: 80 }} />, id: 8, active: false },
            { icone: <Image source={require('../../assets/img/level8/game6/Starfish.png')} style={{ width: 80, height: 80 }} />, id: 9, active: false },
            { icone: <Image source={require('../../assets/img/level8/game6/squirrel.png')} style={{ width: 80, height: 80 }} />, id: 10, active: false },
        ]
    ])


    useEffect(() => {
        let arr1 = GetRandomItemsFromArray(activeGame[0], activeGame[0].length)
        let arr2 = GetRandomItemsFromArray(activeGame[1], activeGame[1].length)
        setActiveGame([arr1, arr2])
    }, [])

    const [active, setActive] = useState([
        { value1: '', value2: '' },
        { value1: '', value2: '' },
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
    const [answer, setAnswer] = useState([false, false, false, false, false,])
    const Game = (number) => {
        let item = [...active]
        let tepm = [...answer]
        let item2 = { ...activeNumber }
        let item3 = [...activeGame]
        for (let i = 0; i < item.length; i++) {
            if (number <= 5) {
                item[i].value1 = number
                item2.number1 = number
                break
            }
            else if (number > 5) {
                item[i].value2 = number
                item2.number2 = number
                break
            }
        }
        if (item2.number1 + 5 == item2.number2) {
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
        console.log(item2)
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
                navigation.navigate('Level8_7')
            }, 2000);
        }
    }, [answer])

    return (
        <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')}>
            <View style={{ flexDirection: 'column', justifyContent: "space-around", paddingHorizontal: 70, height: '100%' }}>
                <View style={styles.block}>
                    {activeGame.length > 0 && activeGame[0].map((elm, i) => {
                        if (elm.active) {
                            return <View key={i} style={{ width: 90, height: 90 }} />
                        }
                        return <ImgButton width={110} height={110} key={i} onPress={() => Game(elm.id)} svg={elm.icone} border={activeNumber.number1 == elm.id ? 'green' : 'rgba(153, 204, 51, 0.4)'} />
                    })}
                </View>
                <View style={styles.block}>
                    {activeGame.length > 0 && activeGame[1].map((elm, i) => {
                        if (elm.active) {
                            return <View key={i} style={{ width: 90, height: 90 }} />
                        }
                        return <ImgButton width={110} height={110} key={i} onPress={() => Game(elm.id)} svg={elm.icone} border={activeNumber.number2 == elm.id ? 'green' : 'rgba(153, 204, 51, 0.4)'} />
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
        height: windowHeight - 80,
        flexDirection: "row"
    }
})
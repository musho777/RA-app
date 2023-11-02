import { useEffect, useState } from 'react'
import { LevelWrapper } from '../../components/LevelWrapper'
import { NumberButton } from '../../components/NumberBuuton'
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Input } from '../../components/Input'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'
import Sound from 'react-native-sound'
import { C11, C12, C13, C14, } from '../../assets/svg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Level11_1 = ({ navigation }) => {
    let w = windowWidth - 300
    let h = windowHeight - 200
    const buuton = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const [disable, setDisable] = useState(false)
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [value4, setValue4] = useState('')


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
    const sound = new Sound('game111.mp3', Sound.MAIN_BUNDLE,
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

    const [activeInput, setActiveInput] = useState('')

    const [arr, setArr] = useState([
        {
            array: [
                { icon: <Image source={require('../../assets/img/level11/game1/банан.png')} style={{ width: 100, height: 50 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/level11/game1/клубокпряжирозовый.png')} style={{ width: 120, height: 70 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/level11/game1/кукурузажелтая.png')} style={{ width: 100, height: 50 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/level11/game1/шапкарозовая.png')} style={{ width: 70, height: 100 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level11/game1/листикзеленый.png')} style={{ width: 100, height: 90 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level11/game1/мылорозовое.png')} style={{ width: 100, height: 70 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level11/game1/носокрозовый.png')} style={{ width: 70, height: 100 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level11/game1/огурец.png')} style={{ width: 100, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level11/game1/прищепказеленая.png')} style={{ width: 100, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level11/game1/расческажелтая.png')} style={{ width: 70, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level11/game1/линейкажелтая.png')} style={{ width: 100, height: 70 }} />, id: 2 },
            ],
            answer: [
                { count: 3, icon: <C12 />, id: 1, active: false },
                { count: 0, icon: <C11 />, id: 2, active: false },
                { count: 3, icon: <C13 />, id: 3, active: false },
                { count: 4, icon: <C14 />, id: 4, active: false },
            ]
        },
    ])

    const [position, setPosition] = useState([
        { x: 0, y: 3 },
        { x: 20, y: 90 },
        { x: 0, y: h },
        { x: 190, y: h - 40 },
        { x: 178, y: 0 },
        { x: w - 130, y: 5 },
        { x: w - 200, y: h - 40 },
        { x: w - 20, y: 79 },
        { x: w - 20, y: 159 },
        { x: w, y: 19 },
        { x: w - 120, y: 90 },
    ])

    const [activeArr, setActiveArr] = useState({
        array: [],
        answer: []
    })
    useEffect(() => {
        // let item = GetRandomItemsFromArray(position, 11)
        // setPosition(item)
        setActiveArr(arr[0])
    }, [])

    const Answer = (e) => {
        if (activeInput == 1) {
            setValue1(e)
            if (e != activeArr?.answer[0].count) {
                setTimeout(() => {
                    music.play();
                }, 100);
                setTimeout(() => {
                    music.stop()
                    setValue1('')
                }, 1000);
            }
        }
        else if (activeInput == 2) {
            setValue2(e)
            if (e != activeArr?.answer[1].count) {
                setTimeout(() => {
                    music.play();
                }, 100);
                setTimeout(() => {
                    music.stop()
                    setValue2('')
                }, 1000);
            }
        }
        else if (activeInput == 3) {
            setValue3(e)
            if (e != activeArr?.answer[2].count) {
                setTimeout(() => {
                    music.play();
                }, 100);
                setTimeout(() => {
                    music.stop()
                    setValue3('')
                }, 1000);
            }
        }
        else if (activeInput == 4) {
            setValue4(e)
            if (e != activeArr?.answer[3].count) {
                setTimeout(() => {
                    music.play();
                }, 100);
                setTimeout(() => {
                    music.stop()
                    setValue4('')
                }, 1000);
            }
            else if (activeArr.answer.length == 4) {
                setTimeout(() => {
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    sound.stop()
                    navigation.navigate('Level11_2')
                    musicSuccess.stop()
                }, 2000);
            }
        }
    }
    return <LevelWrapper
        img={require('../../assets/img/bglv1.png')}
        img2={require('../../assets/img/33.png')}
    >
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '83%' }}>
                <View>
                    {activeArr?.array?.length > 0 && activeArr.array.map((elm, i) => {
                        return <View key={i} style={{ position: 'absolute', left: position[i].x, top: position[i].y }}>
                            {elm.icon}
                        </View>
                    })

                    }
                </View>
                <View style={{ justifyContent: 'space-between', borderLeftWidth: 3, paddingLeft: 10, borderColor: "#FF7575", height: '95%' }}>
                    {value1 == '' ?
                        <TouchableOpacity onPress={() => setActiveInput(1)} style={styles.block}>
                            {activeArr?.answer?.length > 0 && activeArr?.answer[0].icon}
                            <Input width={49} height={49} value={value1} setValue={(e) => setValue1(e)} />
                        </TouchableOpacity> :
                        <View style={styles.block}>
                            {activeArr?.answer[0].icon}
                            <NumberButton disabled={true} number={value1} />
                        </View>
                    }
                    {value2 == '' ?
                        <TouchableOpacity onPress={() => setActiveInput(2)} style={styles.block}>
                            {activeArr?.answer?.length > 0 && activeArr?.answer[1].icon}

                            <Input width={49} height={49} value={value2} setValue={(e) => setValue2(e)} />
                        </TouchableOpacity> :
                        <View style={styles.block}>
                            {activeArr?.answer[1].icon}
                            <NumberButton disabled={true} number={value2} />
                        </View>
                    }
                    {value3 == '' ?
                        <TouchableOpacity onPress={() => setActiveInput(3)} style={styles.block}>
                            {activeArr?.answer?.length > 0 && activeArr?.answer[2].icon}
                            <Input width={49} height={49} value={value3} setValue={(e) => setValue2(e)} />
                        </TouchableOpacity> :
                        <View style={styles.block}>
                            {activeArr?.answer[2].icon}
                            <NumberButton disabled={true} number={value3} />
                        </View>
                    }
                    {activeArr.answer?.length > 3 && (value4 == '' ?
                        <TouchableOpacity onPress={() => setActiveInput(4)} style={styles.block}>
                            {activeArr?.answer?.length > 0 && activeArr?.answer[3].icon}
                            <Input width={49} height={49} value={value4} setValue={(e) => setValue4(e)} />
                        </TouchableOpacity> :
                        <View style={styles.block}>
                            {activeArr?.answer[3]?.icon}
                            <NumberButton disabled={true} number={value4} />
                        </View>)
                    }
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {buuton.map((elm, i) => {
                    // if (elm != value1 && elm != value2 && elm != value3)
                    return <NumberButton disabled={disable} key={i} onPress={() => Answer(elm)} number={elm} />
                })}
            </View>
        </View>

    </LevelWrapper>
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        width: 110,
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})
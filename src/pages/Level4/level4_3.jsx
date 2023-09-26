import { useEffect, useState } from 'react'
import { LevelWrapper } from '../../components/LevelWrapper'
import { NumberButton } from '../../components/NumberBuuton'
import { Image, StyleSheet, View } from 'react-native'
import { Input } from '../../components/Input'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'
import Sound from 'react-native-sound'

export const Level4_3 = ({ navigation }) => {
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

    const [arr, setArr] = useState([
        {
            array: [
                { icon: <Image source={require('../../assets/img/level4/game3/ladybug.png')} style={{ width: 50, height: 50 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/level4/game3/ladybug.png')} style={{ width: 50, height: 50 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/level4/game3/ladybug.png')} style={{ width: 50, height: 50 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/level4/game3/caterpillar.png')} style={{ width: 70, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level4/game3/caterpillar.png')} style={{ width: 70, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level4/game3/caterpillar.png')} style={{ width: 70, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level4/game3/caterpillar.png')} style={{ width: 70, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level4/game3/caterpillar.png')} style={{ width: 70, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level4/game3/caterpillar.png')} style={{ width: 70, height: 50 }} />, id: 2 },
            ],
            answer: [
                { count: 3, icon: <Image source={require('../../assets/img/level4/game3/ladybug.png')} style={{ width: 40, height: 40 }} /> },
                { count: 6, icon: <Image source={require('../../assets/img/level4/game3/caterpillar.png')} style={{ width: 50, height: 30 }} /> },
                { count: 0, icon: <Image source={require('../../assets/img/level4/game3/dragonfly.png')} style={{ width: 30, height: 30 }} /> },
            ]
        },
        {
            array: [
                { icon: <Image source={require('../../assets/img/level4/game3/bluefish.png')} style={{ width: 50, height: 50 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/level4/game3/bluefish.png')} style={{ width: 50, height: 50 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/level4/game3/bluefish.png')} style={{ width: 50, height: 50 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/level4/game3/bluefish.png')} style={{ width: 50, height: 50 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/level4/game3/yellowfish.png')} style={{ width: 50, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level4/game3/shell.png')} style={{ width: 50, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level4/game3/shell.png')} style={{ width: 50, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level4/game3/shell.png')} style={{ width: 50, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level4/game3/shell.png')} style={{ width: 50, height: 50 }} />, id: 2 },
            ],
            answer: [
                { count: 4, icon: <Image source={require('../../assets/img/level4/game3/bluefish.png')} style={{ width: 40, height: 40 }} /> },
                { count: 1, icon: <Image source={require('../../assets/img/level4/game3/yellowfish.png')} style={{ width: 40, height: 30 }} /> },
                { count: 0, icon: <Image source={require('../../assets/img/level4/game3/seahorse.png')} style={{ width: 30, height: 45 }} /> },
                { count: 4, icon: <Image source={require('../../assets/img/level4/game3/shell.png')} style={{ width: 30, height: 30 }} /> },
            ]
        }
    ])

    const [position, setPosition] = useState([
        { x: 46, y: 33 },
        { x: 47, y: 117 },
        { x: 93, y: 196 },
        { x: 190, y: 144 },
        { x: 178, y: 24 },
        { x: 308, y: 5 },
        { x: 220, y: 196 },
        { x: 467, y: 59 },
        { x: 467, y: 129 },
        { x: 307, y: 59 },
    ])

    const [activeArr, setActiveArr] = useState({
        array: [],
        answer: []
    })

    useEffect(() => {
        let item = GetRandomItemsFromArray(position, 9)
        const randomNum = Math.floor(Math.random() * 2)
        setPosition(item)
        setActiveArr(arr[randomNum])
    }, [])

    const Answer = (e) => {
        if (value1 == '') {
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
        else if (value2 == '') {
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
        else if (value3 == '') {
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
            else if (activeArr.answer.length == 3) {
                setTimeout(() => {
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    musicSuccess.stop()
                    navigation.navigate('Level4_4')
                }, 2000);
            }
        }
        else if (activeArr.answer.length > 3 && value4 == '') {
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
                    navigation.navigate('Level4_4')
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
                <View style={{ justifyContent: 'space-around', }}>
                    {value1 == '' ?
                        <View style={styles.block}>
                            {activeArr?.answer?.length > 0 && activeArr?.answer[0].icon}
                            <Input width={56} height={56} value={value1} setValue={(e) => setValue1(e)} />
                        </View> :
                        <View style={styles.block}>
                            {activeArr?.answer[0].icon}
                            <NumberButton disabled={true} number={value1} />
                        </View>
                    }
                    {value2 == '' ?
                        <View style={styles.block}>
                            {activeArr?.answer?.length > 0 && activeArr?.answer[1].icon}

                            <Input width={56} height={56} value={value2} setValue={(e) => setValue2(e)} />
                        </View> :
                        <View style={styles.block}>
                            {activeArr?.answer[1].icon}
                            <NumberButton disabled={true} number={value2} />
                        </View>
                    }
                    {value3 == '' ?
                        <View style={styles.block}>
                            {activeArr?.answer?.length > 0 && activeArr?.answer[2].icon}
                            <Input width={56} height={56} value={value3} setValue={(e) => setValue2(e)} />
                        </View> :
                        <View style={styles.block}>
                            {activeArr?.answer[2].icon}
                            <NumberButton disabled={true} number={value3} />
                        </View>
                    }
                    {activeArr.answer?.length > 3 && (value4 == '' ?
                        <View style={styles.block}>
                            {activeArr?.answer?.length > 0 && activeArr?.answer[3].icon}
                            <Input width={56} height={56} value={value4} setValue={(e) => setValue4(e)} />
                        </View> :
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
        width: 130,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
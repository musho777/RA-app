import { useEffect, useState } from 'react'
import { LevelWrapper } from '../../components/LevelWrapper'
import { NumberButton } from '../../components/NumberBuuton'
import { Image, StyleSheet, View } from 'react-native'
import { Input } from '../../components/Input'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'
import Sound from 'react-native-sound'

export const Level7_2 = ({ navigation }) => {
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
                { icon: <Image source={require('../../assets/img/level7/game2/composition1.png')} style={{ width: 70, height: 70 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition1.png')} style={{ width: 70, height: 70 }} />, id: 1 },

                { icon: <Image source={require('../../assets/img/level7/game2/composition2.png')} style={{ width: 100, height: 60 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition2.png')} style={{ width: 100, height: 60 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition2.png')} style={{ width: 100, height: 60 }} />, id: 2 },

                { icon: <Image source={require('../../assets/img/level7/game2/composition3.png')} style={{ width: 70, height: 70 }} />, id: 3 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition3.png')} style={{ width: 70, height: 70 }} />, id: 3 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition3.png')} style={{ width: 70, height: 70 }} />, id: 3 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition3.png')} style={{ width: 70, height: 70 }} />, id: 3 },


            ],
            answer: [
                { count: 3, icon: <Image source={require('../../assets/img/level4/game3/ladybug.png')} style={{ width: 40, height: 40 }} /> },
                { count: 4, icon: <Image source={require('../../assets/img/level4/game3/caterpillar.png')} style={{ width: 50, height: 30 }} /> },
                { count: 5, icon: <Image source={require('../../assets/img/level4/game3/dragonfly.png')} style={{ width: 30, height: 30 }} /> },
            ]
        },
    ])


    const [ansewer, setAnswer] = useState([
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game2/circleyellow.png')} />, id: 2 },
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game2/triangleblue.png')} />, id: 6 },
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game2/ovallilac.png')} />, id: 3 },


    ])

    const [position, setPosition] = useState([
        { x: 0, y: 3 },
        { x: 20, y: 90 },
        { x: 0, y: 176 },
        { x: 190, y: 144 },
        { x: 178, y: 0 },
        { x: 368, y: 5 },
        { x: 320, y: 176 },
        { x: 467, y: 59 },
        { x: 467, y: 129 },
    ])

    const [activeArr, setActiveArr] = useState({
        array: [],
        answer: []
    })

    useEffect(() => {
        let item = GetRandomItemsFromArray(position, 9)
        setPosition(item)
        setActiveArr(arr[0])
    }, [])

    const Answer = (e) => {
        if (value1 == '') {
            setValue1(e)
            if (e != ansewer[0].id) {
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
            if (e != ansewer[1].id) {
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
            if (e != ansewer[2].id) {
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
                    setDisable(true)
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    setDisable(false)
                    musicSuccess.stop()
                    navigation.navigate('Level7_3')
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
                    navigation.navigate('Level7_3')
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
                        console.log(position.length, activeArr?.array?.length)
                        return <View key={i} style={{ position: 'absolute', left: position[i].x, top: position[i].y }}>
                            {elm.icon}
                        </View>
                    })

                    }
                </View>
                <View style={{ justifyContent: 'space-between', borderLeftWidth: 3, paddingLeft: 10, borderColor: "#FF7575", height: '95%' }}>
                    {value1 == '' ?
                        <View style={styles.block}>
                            {ansewer[0].icon}
                            <Input width={56} height={56} value={value1} setValue={(e) => setValue1(e)} />
                        </View> :
                        <View style={styles.block}>
                            {ansewer[0].icon}
                            <NumberButton disabled={true} number={value1} />
                        </View>
                    }
                    {value2 == '' ?
                        <View style={styles.block}>
                            {ansewer[1].icon}

                            <Input width={56} height={56} value={value2} setValue={(e) => setValue2(e)} />
                        </View> :
                        <View style={styles.block}>
                            {ansewer[1].icon}
                            <NumberButton disabled={true} number={value2} />
                        </View>
                    }
                    {value3 == '' ?
                        <View style={styles.block}>
                            {ansewer[2].icon}
                            <Input width={56} height={56} value={value3} setValue={(e) => setValue2(e)} />
                        </View> :
                        <View style={styles.block}>
                            {ansewer[2].icon}
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
        width: 110,
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})
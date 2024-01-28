import { useEffect, useState } from 'react'
import { LevelWrapper } from '../../components/LevelWrapper'
import { NumberButton } from '../../components/NumberBuuton'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { Input } from '../../components/Input'
import Sound from 'react-native-sound'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Level7_2 = ({ navigation }) => {
    let w = (windowWidth - 200) * 0.7
    let h = windowHeight - 100
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
    const sound = new Sound('game72.mp3', Sound.MAIN_BUNDLE,
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

    const [arr, setArr] = useState([
        {
            array: [
                { icon: <Image source={require('../../assets/img/level7/game2/composition1.png')} style={{ width: 70, height: 70 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition1.png')} style={{ width: 70, height: 70 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition1.png')} style={{ width: 70, height: 70 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition1.png')} style={{ width: 70, height: 70 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition1.png')} style={{ width: 70, height: 70 }} />, id: 1 },
            ],
            ansewer: [
                { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game2/circleyellow.png')} />, id: 5 },
                { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game2/triangleblue.png')} />, id: 5 },
                { icon: <Image style={{ width: 50, height: 30 }} source={require('../../assets/img/level7/game2/ovallilac.png')} />, id: 0 },
            ]
        },
        {
            array: [
                { icon: <Image source={require('../../assets/img/level7/game2/composition2.png')} style={{ width: 100, height: 60 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition2.png')} style={{ width: 100, height: 60 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition2.png')} style={{ width: 100, height: 60 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition2.png')} style={{ width: 100, height: 60 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition2.png')} style={{ width: 100, height: 60 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition2.png')} style={{ width: 100, height: 60 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition2.png')} style={{ width: 100, height: 60 }} />, id: 2 },
            ],
            ansewer: [
                { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game2/circleyellow.png')} />, id: 7 },
                { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game2/triangleblue.png')} />, id: 0 },
                { icon: <Image style={{ width: 50, height: 30 }} source={require('../../assets/img/level7/game2/ovallilac.png')} />, id: 7 },
            ]
        },
        {
            array: [
                { icon: <Image source={require('../../assets/img/level7/game2/composition3.png')} style={{ width: 70, height: 70 }} />, id: 3 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition3.png')} style={{ width: 70, height: 70 }} />, id: 3 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition3.png')} style={{ width: 70, height: 70 }} />, id: 3 },
                { icon: <Image source={require('../../assets/img/level7/game2/composition3.png')} style={{ width: 70, height: 70 }} />, id: 3 },
            ],
            ansewer: [
                { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game2/squarepink.png')} />, id: 4 },
                { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game2/triangleblue.png')} />, id: 4 },
                { icon: <Image style={{ width: 50, height: 30 }} source={require('../../assets/img/level7/game2/ovallilac.png')} />, id: 0 },
            ]
        }
    ])


    const [ansewer, setAnswer] = useState([
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game2/circleyellow.png')} />, id: 5 },
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game2/triangleblue.png')} />, id: 5 },
        { icon: <Image style={{ width: 50, height: 30 }} source={require('../../assets/img/level7/game2/ovallilac.png')} />, id: 0 },
    ])

    const [game1, setGame1] = useState(0)

    const [position, setPosition] = useState([
        { x: 0, y: 0 },
        { x: 90, y: 50 },
        { x: w, y: 106 },
        { x: 0, y: 144 },
        { x: 250, y: 0 },
        { x: w - 10, y: 50 },
        { x: w - 200, y: 156 },
        { x: w, y: 59 },
        { x: w, y: 129 },
    ])

    const [activeArr, setActiveArr] = useState({
        array: [],
        answer: []
    })

    useEffect(() => {
        setActiveArr(arr[game1])
        setAnswer(arr[game1].ansewer)
    }, [game1])

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
            else if (activeArr.ansewer?.length == 3) {
                setTimeout(() => {
                    setDisable(true)
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    setDisable(false)
                    musicSuccess.stop()
                    setValue1('')
                    setValue2('')
                    setValue3('')


                    if (game1 < 2) {
                        setGame1(game1 + 1)
                    }
                    else {
                        sound.stop()
                        navigation.navigate('Level7_3')
                    }
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
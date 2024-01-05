import { useEffect, useState } from 'react'
import { LevelWrapper } from '../../components/LevelWrapper'
import { NumberButton } from '../../components/NumberBuuton'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { Input } from '../../components/Input'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'
import Sound from 'react-native-sound'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Level3_2 = ({ navigation }) => {
    let w = (windowWidth - 200) * 0.8
    let h = windowHeight - 170
    const buuton = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const [disable, setDisable] = useState(false)
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')


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

    const sound = new Sound('game32.mp3', Sound.MAIN_BUNDLE,
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
                { icon: <Image source={require('../../assets/img/кругбирюза.png')} style={{ width: 80, height: 80 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/кругбирюза.png')} style={{ width: 60, height: 60 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/кругбирюза.png')} style={{ width: 50, height: 50 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/кругбирюза.png')} style={{ width: 80, height: 80 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/кругбирюза.png')} style={{ width: 100, height: 100 }} />, id: 1 },
                { icon: <Image source={require('../../assets/img/овалсиреневый.png')} style={{ width: 70, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/овалсиреневый.png')} style={{ width: 80, height: 50 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/овалсиреневый.png')} style={{ width: 60, height: 40 }} />, id: 2 },
                { icon: <Image source={require('../../assets/img/овалсиреневый.png')} style={{ width: 100, height: 60 }} />, id: 2 },
            ],
            ansewer: [
                { icon: '', id: 5 },
                { icon: '', id: 4 },
            ]
        },
    ])

    const [game, setGame] = useState(0)


    const [ansewer, setAnswer] = useState([
        { icon: '', id: 2 },
        { icon: '', id: 6 },
        { icon: '', id: 3 },
    ])

    const [position, setPosition] = useState([
        { x: 0, y: 3 },
        { x: 80, y: 90 },
        { x: 0, y: h - 30 },
        { x: 200, y: 164 },
        { x: 150, y: 0 },
        { x: w - 130, y: 5 },
        { x: w - 100, y: h - 60 },
        { x: w, y: 59 },
        { x: w, y: 129 },
    ])

    const [activeArr, setActiveArr] = useState({})

    useEffect(() => {
        setActiveArr(arr[game])
    }, [game])

    const Answer = (e) => {
        if (value1 == '') {
            setValue1(e)
            if (e != activeArr.ansewer[0].id) {
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
            if (e != activeArr.ansewer[1].id) {
                setTimeout(() => {
                    music.play();
                }, 100);
                setTimeout(() => {
                    music.stop()
                    setValue2('')
                }, 1000);
            }
        }
    }

    useEffect(() => {
        if (Object.keys(activeArr).length) {
            if (value1 == activeArr?.ansewer[0].id && value2 == activeArr?.ansewer[1].id) {
                setTimeout(() => {
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    sound.stop()
                    navigation.navigate('Level3_3')
                    setValue1('')
                    setValue2('')
                    setGame(game + 1)
                    musicSuccess.stop()
                }, 2000);
            }
        }
    }, [value1, value2])

    return <LevelWrapper
        img={require('../../assets/img/bglv1.png')}
        img2={require('../../assets/img/33.png')}
    >
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '83%' }}>
                <View style={{ width: '75%' }}>
                    {activeArr?.array?.length > 0 && activeArr.array.map((elm, i) => {
                        return <View key={i} style={{ position: 'absolute', left: position[i].x, top: position[i].y }}>
                            {elm.icon}
                        </View>
                    })}
                </View>
                <View style={{ justifyContent: 'space-between', paddingLeft: 10, borderColor: "#FF7575", height: '50%' }}>
                    {value1 == '' ?
                        <View style={styles.block}>
                            <Image source={require('../../assets/img/кругбирюза.png')} style={{ width: 30, height: 30 }} />
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
                            <Image source={require('../../assets/img/овалсиреневый.png')} style={{ width: 50, height: 30 }} />
                            {ansewer[1].icon}
                            <Input width={56} height={56} value={value2} setValue={(e) => setValue2(e)} />
                        </View> :
                        <View style={styles.block}>
                            {ansewer[1].icon}
                            <NumberButton disabled={true} number={value2} />
                        </View>
                    }
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {buuton.map((elm, i) => {
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
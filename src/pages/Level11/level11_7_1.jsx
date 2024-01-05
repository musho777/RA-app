import { Dimensions, StyleSheet, View, Image } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton';
import { useEffect, useState } from 'react';
import Sound from 'react-native-sound';


const windowHeight = Dimensions.get('window').height;
export const Level11_7_1 = ({ navigation }) => {

    const [game1, setGame1] = useState(0)

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

    const [arr, setArr] = useState(
        {
            answer: [
                { icon: <Image style={{ width: 120, height: 80 }} source={require('../../assets/img/level11/game7/ракушка.png')} />, id: 1 },
                { icon: <Image style={{ width: 70, height: 120 }} source={require('../../assets/img/level11/game7/морскойконек.png')} />, id: 2 },
            ],
            arr: [
                { icon: <Image style={{ width: 90, height: 60 }} source={require('../../assets/img/level11/game7/ракушка.png')} />, id: 1, active: true },
                { icon: <Image style={{ width: 90, height: 60 }} source={require('../../assets/img/level11/game7/рыбка.png')} />, id: 2, active: false },
                { icon: <Image style={{ width: 60, height: 90 }} source={require('../../assets/img/level11/game7/морскойконек.png')} />, id: 1, active: true },
                { icon: <Image style={{ width: 60, height: 90 }} source={require('../../assets/img/level11/game7/медуза.png')} />, id: 2, active: false },
            ],
        }
    )

    const [answer, setAnswr] = useState(false)
    const [activeArr, setActiveArr] = useState([])

    const [answer1, setAnswer1] = useState(false)

    useEffect(() => {
        setActiveArr(arr)
        setAnswr(false)
        setTimeout(() => {
            setAnswr(true)
        }, 3000);
        if (game1 == 1) {
            setTimeout(() => {
                setAnswer1(true)
            }, 6000);
        }
    }, [game1])

    const Play = (number, i) => {
        let item = { ...activeArr }
        if (number == 1) {
            item.arr[i].active = false
            let win = true
            setTimeout(() => {
                musicSuccess.play();
            }, 100);

            item.arr.map((elm, i) => {
                if (elm.active) {
                    win = false
                }
            })
            setTimeout(() => {
                musicSuccess.stop()
                if (win) {
                    navigation.navigate('Level11_8')
                }
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
        setActiveArr(item)
    }

    if (!answer) {
        return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')}>
            <View style={[styles.block, { paddingHorizontal: 10 }]}>
                {activeArr?.answer?.map((elm, i) => {
                    return <ImgButton width={150} height={150} disable={true} key={i} svg={elm.icon} border={'rgba(153, 204, 51, 0.4)'} />
                })}
            </View>
        </LevelWrapper>
    }
    else if (answer && !answer1) {
        return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')}>
            <View style={styles.block2}>
                {activeArr?.arr.map((elm, i) => {
                    return <ImgButton width={110} height={110} onPress={() => Play(elm.id, i)} key={i} svg={elm.icon} border={'rgba(153, 204, 51, 0.4)'} />
                })}
            </View>
        </LevelWrapper>
    }
}
const styles = StyleSheet.create({
    block: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: windowHeight - 80,
        paddingHorizontal: 100
    },
    block2: {
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight - 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 100,
    }
})
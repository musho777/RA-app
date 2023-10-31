import { Dimensions, StyleSheet, View, Image } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton';
import { useEffect, useState } from 'react';
import Sound from 'react-native-sound';


const windowHeight = Dimensions.get('window').height;
export const Level8_7 = ({ navigation }) => {

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

    const [arr, setArr] = useState([
        {
            answer: [
                { icon: <Image style={{ width: 120, height: 80 }} source={require('../../assets/img/level8/game7/dragonfly.png')} />, id: 1 },
                { icon: <Image style={{ width: 120, height: 80 }} source={require('../../assets/img/level8/game7/frog.png')} />, id: 2 },
            ],
            arr: [
                { icon: <Image style={{ width: 90, height: 70 }} source={require('../../assets/img/level8/game7/caterpillar.png')} />, id: 2 },
                { icon: <Image style={{ width: 95, height: 65 }} source={require('../../assets/img/level8/game7/frog.png')} />, id: 1 },
                { icon: <Image style={{ width: 90, height: 70 }} source={require('../../assets/img/level8/game7/dragonfly.png')} />, id: 3 },
                { icon: <Image style={{ width: 90, height: 70 }} source={require('../../assets/img/level8/game7/butterfly.png')} />, id: 4 },
            ]

        },
        {
            answer: [
                { icon: <Image style={{ width: 120, height: 80 }} source={require('../../assets/img/level8/game7/dog1.png')} />, id: 1 },
                { icon: <Image style={{ width: 120, height: 80 }} source={require('../../assets/img/level8/game7/dog2.png')} />, id: 2 },
                { icon: <Image style={{ width: 120, height: 80 }} source={require('../../assets/img/level8/game7/dog3.png')} />, id: 3 },
                { icon: <Image style={{ width: 120, height: 80 }} source={require('../../assets/img/level8/game7/dog.png')} />, id: 4 },
            ],
            arr: [
                { icon: <Image style={{ width: 90, height: 60 }} source={require('../../assets/img/level8/game7/dog2.png')} />, id: 2 },
                { icon: <Image style={{ width: 90, height: 60 }} source={require('../../assets/img/level8/game7/dog3.png')} />, id: 3 },
                { icon: <Image style={{ width: 90, height: 60 }} source={require('../../assets/img/level8/game7/dog.png')} />, id: 4 },
            ],
            arr2: [
                { icon: <Image style={{ width: 90, height: 60 }} source={require('../../assets/img/level8/game7/dog1.png')} />, id: 1 },
                { icon: <Image style={{ width: 90, height: 60 }} source={require('../../assets/img/level8/game7/dog2.png')} />, id: 2 },
                { icon: <Image style={{ width: 90, height: 60 }} source={require('../../assets/img/level8/game7/dog3.png')} />, id: 3 },
                { icon: <Image style={{ width: 90, height: 60 }} source={require('../../assets/img/level8/game7/dog.png')} />, id: 4 },
            ]
        }
    ])

    const [answer, setAnswr] = useState(false)
    const [activeArr, setActiveArr] = useState([])

    const [answer1, setAnswer1] = useState(false)

    useEffect(() => {
        setActiveArr(arr[game1])
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

    const Play = (number) => {
        if (number == 1) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
                if (game1 == 1) {
                    navigation.navigate('Level8_8')
                }
                setGame1(game1 + 1)
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
    }

    if (!answer) {
        return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')}>
            <View style={[styles.block, { paddingHorizontal: 10 }]}>
                {activeArr?.answer?.map((elm, i) => {
                    return <ImgButton width={150} height={150} disable={true} key={i} svg={elm.icon} border={'rgba(153, 204, 51, 0.4)'} />
                })}
            </View>
        </LevelWrapper>
    }
    else if (answer && !answer1) {
        return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')}>
            <View style={styles.block2}>
                {activeArr?.arr.map((elm, i) => {
                    return <ImgButton width={110} height={110} onPress={() => Play(elm.id)} key={i} svg={elm.icon} border={'rgba(153, 204, 51, 0.4)'} />
                })}
            </View>
        </LevelWrapper>
    }
    else if (answer && answer1) {
        return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')}>
            <View style={styles.block2}>
                {activeArr?.arr2.map((elm, i) => {
                    return <ImgButton width={110} height={110} onPress={() => Play(elm.id)} key={i} svg={elm.icon} border={'rgba(153, 204, 51, 0.4)'} />
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
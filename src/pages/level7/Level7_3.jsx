import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'

export const Level7_3 = ({ navigation }) => {
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
    const sound = new Sound('game73.mp3', Sound.MAIN_BUNDLE,
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
    const [disable, setDisable] = useState(false)
    const [arr, setArr] = useState([
        [
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/blue.png')} /> },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/pink.png')} /> },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/blue.png')} /> },
            { icon: '' },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/blue.png')} /> },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/pink.png')} /> },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/blue.png')} /> },
        ],
        [
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/heart.png')} /> },
            { icon: '' },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/heart.png')} /> },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/heart1.png')} /> },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/heart.png')} /> },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/heart1.png')} /> },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/heart.png')} /> },
        ]
    ])

    const [answer, setAnswr] = useState([
        [
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/heart.png')} />, id: 1 },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/heart1.png')} />, id: 2 },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/pink.png')} />, id: 3 },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/blue.png')} />, id: 4 },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/green.png')} />, id: 5 },
        ],
        [
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/heart.png')} />, id: 1 },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/heart1.png')} />, id: 3 },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/pink.png')} />, id: 2 },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/blue.png')} />, id: 4 },
            { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level7/game3/green.png')} />, id: 5 },
        ]
    ])

    const [activeGame, setActiveGame] = useState([])
    const [activeAnswer, setActiveAnswer] = useState([])
    const [game, setGame] = useState(0)
    const Game = (elm) => {
        let item = [...activeGame]
        let index = ''
        if (elm.id === 3) {
            setTimeout(() => {
                setDisable(true)
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                setDisable(false)
                musicSuccess.stop()
                setGame(game + 1)
            }, 1000);
            for (let i = 0; i < item.length; i++) {
                if (!item[i].icon) {
                    index = i
                    break
                }
            }
            item[index] = elm
        }
        else {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);
        }
        setActiveGame(item)
    }

    useEffect(() => {
        if (game == 2) {
            sound.stop()
            navigation.navigate('Level7_4')
        } else {
            let item = GetRandomItemsFromArray(answer[game], answer[game].length)
            setActiveAnswer(item)
            setActiveGame(arr[game])
        }
    }, [game])
    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')}  >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {activeGame.map((elm, i) => {
                    if (elm.icon) {
                        return <ImgButton border='rgba(160, 205, 212, 0.4)' disable={true} key={i} svg={elm.icon} />
                    }
                    else {
                        return <View key={i} style={{ width: 90, height: 90 }} />
                    }
                })}
            </View>
            <View style={{ width: '100%', borderWidth: 2, borderColor: '#A0CDD4', borderRadius: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {activeAnswer.map((elm, i) => {
                    return <ImgButton onPress={() => Game(elm)} border='rgba(160, 205, 212, 0.4)' disable={disable} key={i} svg={elm.icon} />
                })}
            </View>
        </View>
    </LevelWrapper>
}
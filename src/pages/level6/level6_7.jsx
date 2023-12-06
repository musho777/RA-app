import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'
import Sound from 'react-native-sound'

export const Level6_7 = ({ navigation }) => {

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
    const sound = new Sound('game67.mp3', Sound.MAIN_BUNDLE,
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
        [
            { icon: <Image style={{ width: 100, height: 70 }} source={require('../../assets/img/level6/game7/bear.png')} />, id: 1 },
            { icon: <Image style={{ width: 80, height: 110 }} source={require('../../assets/img/level6/game7/hare.png')} />, id: 2 },
            { icon: <Image style={{ width: 120, height: 70 }} source={require('../../assets/img/level6/game7/fox.png')} />, id: 3 },
            { icon: <Image style={{ width: 120, height: 70 }} source={require('../../assets/img/level6/game7/wolf.png')} />, id: 4 },
            { icon: <Image style={{ width: 120, height: 30 }} source={require('../../assets/img/level6/game7/caterpillar.png')} />, id: 5 },
        ],
        [
            { icon: <Image style={{ width: 100, height: 80 }} source={require('../../assets/img/level6/game7/donut.png')} />, id: 1 },
            { icon: <Image style={{ width: 90, height: 110 }} source={require('../../assets/img/level6/game7/popcorn.png')} />, id: 2 },
            { icon: <Image style={{ width: 110, height: 110 }} source={require('../../assets/img/level6/game7/airofkites.png')} />, id: 3 },
            { icon: <Image style={{ width: 110, height: 110 }} source={require('../../assets/img/level6/game7/checkbox.png')} />, id: 4 },
            { icon: <Image style={{ width: 110, height: 110 }} source={require('../../assets/img/level6/game7/ball.png')} />, id: 5 },
        ],
        [
            { icon: <Image style={{ width: 89, height: 100 }} source={require('../../assets/img/level6/game7/chamomile.png')} />, id: 1 },
            { icon: <Image style={{ width: 70, height: 100 }} source={require('../../assets/img/level6/game7/chamomile2.png')} />, id: 2 },
            { icon: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/level6/game7/bells.png')} />, id: 3 },
            { icon: <Image style={{ width: 70, height: 100 }} source={require('../../assets/img/level6/game7/tulip.png')} />, id: 4 },
            { icon: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/level6/game7/flyagaric.png')} />, id: 5 },
        ]
    ])

    const [activeGame, setActiveGame] = useState([])

    const [game, setGame] = useState(0)

    useEffect(() => {
        let temp = GetRandomItemsFromArray(arr[game], arr[game].length)
        setActiveGame(temp)
    }, [game])

    const Game = (id) => {
        if (id === 5) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 2000);
            if (game === 2) {
                sound.stop()
                navigation.navigate('Level6_8')
            }
            else {
                setTimeout(() => {
                    setGame(game + 1)
                }, 2000);
            }
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

    return <LevelWrapper img={require('../../assets/img/bglv1.png')} img2={require('../../assets/img/33.png')}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%', paddingHorizontal: 10, gap: 10 }}>
            {activeGame.map((elm, i) => {
                return <ImgButton width={130} height={130} key={i} svg={elm.icon} onPress={() => Game(elm.id)} />
            })}
        </View>
    </LevelWrapper>
}
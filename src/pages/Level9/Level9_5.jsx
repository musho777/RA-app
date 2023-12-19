import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

export const Level9_5 = ({ navigation }) => {
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
    const button = [
        { icon: <Image source={require('../../assets/img/level9/game5/cottonwool2.png')} style={{ width: 35, height: 60 }} />, id: 2 },
        { icon: <Image source={require('../../assets/img/level9/game5/cottonwool1.png')} style={{ width: 35, height: 60 }} />, id: 1 },
        { icon: <Image source={require('../../assets/img/level9/game5/cottonwool3.png')} style={{ width: 35, height: 60 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/level9/game5/cottonwool6.png')} style={{ width: 35, height: 60 }} />, id: 6 },
        { icon: <Image source={require('../../assets/img/level9/game5/cottonwool8.png')} style={{ width: 35, height: 60 }} />, id: 8 },
        { icon: <Image source={require('../../assets/img/level9/game5/cottonwool4.png')} style={{ width: 35, height: 60 }} />, id: 4 },
        { icon: <Image source={require('../../assets/img/level9/game5/cottonwool0.png')} style={{ width: 35, height: 60 }} />, id: 0 },
        { icon: <Image source={require('../../assets/img/level9/game5/cottonwool5.png')} style={{ width: 35, height: 60 }} />, id: 5 },
        { icon: <Image source={require('../../assets/img/level9/game5/cottonwool7.png')} style={{ width: 35, height: 60 }} />, id: 7 },
    ]
    const [arr, setArr] = useState([
        [
            { icon: <Image source={require('../../assets/img/level9/game5/cottonwool2.png')} style={{ width: 35, height: 60 }} />, id: 2 },
            { icon: '', id: 3 },
            { icon: <Image source={require('../../assets/img/level9/game5/cottonwool4.png')} style={{ width: 35, height: 60 }} />, id: 4 },
            { icon: <Image source={require('../../assets/img/level9/game5/cottonwool5.png')} style={{ width: 35, height: 60 }} />, id: 5 },
            { icon: '', id: 6 },
            { icon: <Image source={require('../../assets/img/level9/game5/cottonwool7.png')} style={{ width: 35, height: 60 }} />, id: 7 },
            { icon: <Image source={require('../../assets/img/level9/game5/cottonwool8.png')} style={{ width: 35, height: 60 }} />, id: 8 },

        ],
        [
            { icon: <Image source={require('../../assets/img/level9/game5/cottonwool3.png')} style={{ width: 35, height: 60 }} />, id: 3 },
            { icon: '', id: 4 },
            { icon: '', id: 5 },
            { icon: <Image source={require('../../assets/img/level9/game5/cottonwool6.png')} style={{ width: 35, height: 60 }} />, id: 6 },
            { icon: '', id: 7 },
            { icon: <Image source={require('../../assets/img/level9/game5/cottonwool8.png')} style={{ width: 35, height: 60 }} />, id: 8 },
        ],
        [
            { icon: <Image source={require('../../assets/img/level9/game5/cottonwool0.png')} style={{ width: 35, height: 60 }} />, id: 0 },
            { icon: '', id: 1 },
            { icon: <Image source={require('../../assets/img/level9/game5/cottonwool2.png')} style={{ width: 35, height: 60 }} />, id: 2 },
            { icon: <Image source={require('../../assets/img/level9/game5/cottonwool3.png')} style={{ width: 35, height: 60 }} />, id: 3 },
            { icon: '', id: 4 },
            { icon: <Image source={require('../../assets/img/level9/game5/cottonwool5.png')} style={{ width: 35, height: 60 }} />, id: 5 },
            { icon: '', id: 6 },
            { icon: <Image source={require('../../assets/img/level9/game5/cottonwool7.png')} style={{ width: 35, height: 60 }} />, id: 7 },
            { icon: <Image source={require('../../assets/img/level9/game5/cottonwool8.png')} style={{ width: 35, height: 60 }} />, id: 8 },

        ]

    ])
    const [activeGame, setActiveGame] = useState([])
    const [game, setGame] = useState(0)
    const Game = (elm) => {
        let item = [...activeGame]
        let index = ''
        let win = true
        for (let i = 0; i < activeGame.length; i++) {
            if (item[i].icon == '') {
                console.log(item[0].id + 1, i)
                if (item[i - 1].id + 1 == elm.id) {
                    index = i
                    break
                }
            }
        }
        if (index === '') {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 2000);
        }
        else {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 2000);
        }
        item[index] = elm
        setActiveGame(item)
        item.map((elm, i) => {
            if (elm.icon == '') {
                win = false
            }
        })
        if (win) {
            setTimeout(() => {
                setGame(game + 1)
            }, 1000);
        }
    }

    useEffect(() => {
        if (game == 3) {
            navigation.navigate('Level9_6')
        } else {
            setActiveGame(arr[game])
        }
    }, [game])
    return <LevelWrapper img2={require('../../assets/img/3y.png')} img={require('../../assets/img/3yy.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {activeGame?.map((elm, i) => {
                    return <ImgButton width={80} height={80} disabled={true} border='rgba(255, 204, 0, 0.4)' key={i} svg={elm.icon} />
                })}
            </View>
            <View style={{ width: '100%', borderWidth: 2, borderColor: 'rgba(255, 204, 0, 1)', borderRadius: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {button.map((elm, i) => {
                    return <ImgButton width={75} height={75} bg={'#A0CDD4'} border='rgba(255, 204, 0, 0.4)' key={i} onPress={() => Game(elm)} svg={elm.icon} />
                })}
            </View>
        </View>
    </LevelWrapper>
}
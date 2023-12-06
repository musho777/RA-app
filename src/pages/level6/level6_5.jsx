import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

export const Level6_5 = ({ navigation }) => {
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
    const sound = new Sound('game65.mp3', Sound.MAIN_BUNDLE,
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
    const button = [
        { icon: <Image source={require('../../assets/img/level6/game5/яблоко1.png')} style={{ width: 65, height: 80 }} />, id: 1 },
        { icon: <Image source={require('../../assets/img/level6/game5/яблоко3.png')} style={{ width: 65, height: 80 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/level6/game5/яблоко2.png')} style={{ width: 65, height: 80 }} />, id: 2 },
        { icon: <Image source={require('../../assets/img/level6/game5/яблоко0.png')} style={{ width: 65, height: 80 }} />, id: 0 },
        { icon: <Image source={require('../../assets/img/level6/game5/яблоко5.png')} style={{ width: 65, height: 80 }} />, id: 5 },
        { icon: <Image source={require('../../assets/img/level6/game5/яблоко4.png')} style={{ width: 65, height: 80 }} />, id: 4 },


    ]
    const [arr, setArr] = useState([
        [
            { icon: <Image source={require('../../assets/img/level6/game5/яблоко0.png')} style={{ width: 65, height: 80 }} />, id: 0 },
            { icon: <Image source={require('../../assets/img/level6/game5/яблоко1.png')} style={{ width: 65, height: 80 }} />, id: 1 },
            { icon: '', id: 1 },
            { icon: <Image source={require('../../assets/img/level6/game5/яблоко3.png')} style={{ width: 65, height: 80 }} />, id: 3 },
            { icon: <Image source={require('../../assets/img/level6/game5/яблоко4.png')} style={{ width: 65, height: 80 }} />, id: 4 },
            { icon: <Image source={require('../../assets/img/level6/game5/яблоко5.png')} style={{ width: 65, height: 80 }} />, id: 5 },
        ],
        [
            { icon: <Image source={require('../../assets/img/level6/game5/яблоко0.png')} style={{ width: 65, height: 80 }} />, id: 0 },
            { icon: <Image source={require('../../assets/img/level6/game5/яблоко1.png')} style={{ width: 65, height: 80 }} />, id: 1 },
            { icon: <Image source={require('../../assets/img/level6/game5/яблоко2.png')} style={{ width: 65, height: 80 }} />, id: 2 },
            { icon: <Image source={require('../../assets/img/level6/game5/яблоко3.png')} style={{ width: 65, height: 80 }} />, id: 3 },
            { icon: '', id: 4 },
            { icon: <Image source={require('../../assets/img/level6/game5/яблоко5.png')} style={{ width: 65, height: 80 }} />, id: 5 },
        ],
        [
            { icon: <Image source={require('../../assets/img/level6/game5/яблоко0.png')} style={{ width: 65, height: 80 }} />, id: 0 },
            { icon: '', id: 1 },
            { icon: <Image source={require('../../assets/img/level6/game5/яблоко2.png')} style={{ width: 65, height: 80 }} />, id: 2 },
            { icon: <Image source={require('../../assets/img/level6/game5/яблоко3.png')} style={{ width: 65, height: 80 }} />, id: 3 },
            { icon: '', id: 4 },
            { icon: <Image source={require('../../assets/img/level6/game5/яблоко5.png')} style={{ width: 65, height: 80 }} />, id: 5 },
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
                console.log(item[i - 1].id, elm.id)
                if (item[i - 1].id + 1 == elm.id && item[i + 1].id - 1 == elm.id) {
                    console.log('jsdlgfdlsfj')
                    index = i
                    setTimeout(() => {
                        musicSuccess.play();
                    }, 100);
                    setTimeout(() => {
                        musicSuccess.stop()
                    }, 1000);
                    break
                }
                else {
                    setTimeout(() => {
                        music.play();
                    }, 100);
                    setTimeout(() => {
                        music.stop()
                    }, 1000);
                    break
                }
            }
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
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
                setGame(game + 1)
            }, 2000);
        }
    }

    useEffect(() => {
        if (game == 3) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
                sound.stop()
                navigation.navigate('Level6_6')
            }, 2000);
        } else {
            setActiveGame(arr[game])
        }
    }, [game])


    return <LevelWrapper img2={require('../../assets/img/bg3.png')} img={require('../../assets/img/3bh.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {activeGame.map((elm, i) => {
                    if (elm.icon == '') {
                        return <ImgButton bg={'#A0CDD4'} border='rgba(160, 205, 212, 0.4)' width={100} height={100} disable={true} key={i} svg={elm.icon} />
                    }
                    else {
                        return <ImgButton width={100} height={100} disabled={true} bg={'#A0CDD4'} border='rgba(160, 205, 212, 0.4)' key={i} svg={elm.icon} />
                    }
                })}

            </View>
            <View style={{ width: '100%', borderWidth: 2, borderColor: '#A0CDD4', borderRadius: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {button.map((elm, i) => {
                    return <ImgButton width={100} height={100} bg={'#A0CDD4'} border='rgba(160, 205, 212, 0.4)' key={i} onPress={() => Game(elm)} svg={elm.icon} />
                })}
            </View>
        </View>
    </LevelWrapper>
}
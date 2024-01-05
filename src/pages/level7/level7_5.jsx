import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

export const Level7_5 = ({ navigation }) => {
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
    const sound = new Sound('game75.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });

    // useEffect(() => {
    //     setTimeout(() => {
    //         sound.play()
    //     }, 100);
    // }, [])
    const button = [
        { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива6.png')} />, key: 6 },
        { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива0.png')} />, key: 0 },
        { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива1.png')} />, key: 1 },
        { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива4.png')} />, key: 4 },
        { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива3.png')} />, key: 3 },
        { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива2.png')} />, key: 2 },
        { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива5.png')} />, key: 5 },
    ]
    const [arr, setArr] = useState([
        [
            { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива0.png')} />, key: 0 },
            { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива1.png')} />, key: 1 },
            { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива2.png')} />, key: 2 },
            '',
            { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива4.png')} />, key: 4 },
            '',
            { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива6.png')} />, key: 6 },
        ],
        [
            { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива0.png')} />, key: 0 },
            '',
            { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива2.png')} />, key: 2 },
            { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива3.png')} />, key: 3 },
            '',
            { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива5.png')} />, key: 5 },
            { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива6.png')} />, key: 6 },
        ],
        [
            { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива0.png')} />, key: 0 },
            { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива1.png')} />, key: 1 },
            '',
            { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива3.png')} />, key: 3 },
            '',
            { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива5.png')} />, key: 5 },
            { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level7/game5/слива6.png')} />, key: 6 },
        ],
    ])
    const [activeGame, setActiveGame] = useState([])
    const [game, setGame] = useState(0)
    const Game = (elm) => {
        let item = [...activeGame]
        let index = ''
        let win = true
        for (let i = 0; i < activeGame.length; i++) {
            if (item[i] == '') {
                if (item[i - 1].key + 1 == elm.key) {
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
            if (elm == '') {
                win = false
            }
        })
        if (win) {
            setTimeout(() => {
                setGame(game + 1)
            }, 2000);

        }
    }

    useEffect(() => {
        if (game == 3) {
            sound.stop()
            navigation.navigate('Level7_5_1')
        } else {
            setActiveGame(arr[game])
        }
    }, [game])
    return <LevelWrapper img2={require('../../assets/img/bg3.png')} img={require('../../assets/img/3bh.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                {activeGame.map((elm, i) => {
                    if (elm == '') {
                        return <ImgButton border='rgba(160, 205, 212, 0.4)' disable={true} key={i} svg={elm.icon} />
                    }
                    else {
                        return <ImgButton border='rgba(160, 205, 212, 0.4)' disable={true} key={i} svg={elm.icon} />
                    }
                })}
            </View>
            <View style={{ width: '100%', borderWidth: 2, borderColor: '#A0CDD4', borderRadius: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {button.map((elm, i) => {
                    return <ImgButton bg={'#A0CDD4'} border='rgba(160, 205, 212, 0.4)' key={i} onPress={() => Game(elm)} svg={elm.icon} />
                })}
            </View>
        </View>
    </LevelWrapper>
}
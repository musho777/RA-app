import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

export const Level6_3 = ({ navigation }) => {
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
    const lollipop = [
        { icone: <Image style={{ width: 25, height: 60 }} source={require('../../assets/img/level6/game3/club6.png')} />, id: 5, active: false },
        { icone: <Image style={{ width: 25, height: 60 }} source={require('../../assets/img/level6/game3/club5.png')} />, id: 4, active: false },
        { icone: <Image style={{ width: 25, height: 60 }} source={require('../../assets/img/level6/game3/club3.png')} />, id: 2, active: false },
        { icone: <Image style={{ width: 25, height: 60 }} source={require('../../assets/img/level6/game3/club4.png')} />, id: 3, active: false },
        { icone: <Image style={{ width: 25, height: 60 }} source={require('../../assets/img/level6/game3/club2.png')} />, id: 1, active: false },

    ]
    const [arr, setArr] = useState([
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/level6/game3/glass9.png')} />, id: 5, active: false },
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/level6/game3/glass8.png')} />, id: 4, active: false },
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/level6/game3/glass6.png')} />, id: 2, active: false },
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/level6/game3/glass7.png')} />, id: 3, active: false },
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/level6/game3/glass5.png')} />, id: 1, active: false },

    ])
    const [answer, setAnswer] = useState([
        { icone: '', id: '' },
        { icone: '', id: '' },
        { icone: '', id: '' },
        { icone: '', id: '' },
        { icone: '', id: '' },
    ])
    const Game = (id, icone, i) => {
        let item = [...arr]
        let temp = [...answer]
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id == '') {
                temp[i].id = id
                temp[i].icone = icone
                break
            }
        }
        item[i].active = true

        temp.map((elm, i) => {
            if (temp[i].id != '' && temp[i].id != i + 1) {
                temp.map((elm, i) => {
                    elm.id = ''
                    elm.icone = ''
                })
                item.map((elm, i) => {
                    elm.active = false
                })
                setTimeout(() => {
                    music.play();
                }, 100);
                setTimeout(() => {
                    music.stop()
                }, 1000);
            }
        })
        setAnswer(temp)
        setArr(item)
    }

    useEffect(() => {
        let win = true
        arr.map((elm, i) => {
            if (!elm.active) {
                win = false
            }
        })
        if (win && game1 == 0) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                setGame1(game1 + 1)
                setAnswer([{ icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' }])
                musicSuccess.stop()
            }, 2000);
        }
        else if (win && game1 == 1) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 2000);
            navigation.navigate('Level6_4')
        }
    }, [arr])

    const [game1, setGame1] = useState(0)

    useEffect(() => {
        if (game1 == 1) {
            setArr(lollipop)
        }
    }, [game1])

    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {answer.map((elm, i) => {
                    return <ImgButton width={80} height={80} disable={true} key={i} svg={elm.icone} />
                })}
            </View>
            <View style={{ width: '100%', borderWidth: 2, borderColor: '#9C3', borderRadius: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {arr.map((elm, i) => {
                    if (elm.active) {
                        return <View key={i} style={{ width: 80, height: 80 }}></View>
                    }
                    return <ImgButton width={80} height={80} onPress={() => Game(elm.id, elm.icone, i,)} key={i} svg={elm.icone} />
                })}
            </View>
        </View>
    </LevelWrapper>
}
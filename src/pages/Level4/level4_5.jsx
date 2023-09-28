import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

export const Level4_5 = ({ navigation }) => {
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
        { icone: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level4/game5/bug4.png')} />, id: 5, active: false },
        { icone: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level4/game5/bug3.png')} />, id: 4, active: false },
        { icone: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level4/game5/bug1.png')} />, id: 2, active: false },
        { icone: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level4/game5/bug5.png')} />, id: 6, active: false },
        { icone: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level4/game5/bug2.png')} />, id: 3, active: false },
        { icone: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level4/game5/bug7.png')} />, id: 8, active: false },
        { icone: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level4/game5/bug0.png')} />, id: 1, active: false },
        { icone: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level4/game5/bug6.png')} />, id: 7, active: false },
    ]
    const [arr, setArr] = useState([
        { icone: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level4/game5/fish4.png')} />, id: 5, active: false },
        { icone: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level4/game5/fish3.png')} />, id: 4, active: false },
        { icone: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level4/game5/fish1.png')} />, id: 2, active: false },
        { icone: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level4/game5/fish5.png')} />, id: 6, active: false },
        { icone: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level4/game5/fish2.png')} />, id: 3, active: false },
        { icone: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level4/game5/fish7.png')} />, id: 8, active: false },
        { icone: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level4/game5/fish0.png')} />, id: 1, active: false },
        { icone: <Image style={{ width: 55, height: 50 }} source={require('../../assets/img/level4/game5/fish6.png')} />, id: 7, active: false },

    ])

    const [game1, setGame1] = useState(0)
    const [answer, setAnswer] = useState([
        { icone: '', id: '' },
        { icone: '', id: '' },
        { icone: '', id: '' },
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
                }, 2000);
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
        if (win) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                setGame1(game1 + 1)
                setAnswer([{ icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' }])
                if (game1 === 1) {
                    navigation.navigate('Level4_6')
                }
                musicSuccess.stop()
            }, 2000);
        }
    }, [arr])

    useEffect(() => {
        if (game1 == 1) {
            setArr(lollipop)
        }
    }, [game1])

    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {answer.map((elm, i) => {
                    return <ImgButton disable={true} key={i} svg={elm.icone} />
                })}
            </View>
            <View style={{ width: '100%', borderWidth: 2, borderColor: '#9C3', borderRadius: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {arr.map((elm, i) => {
                    if (elm.active) {
                        return <View key={i} style={{ width: 90, height: 90 }}></View>
                    }
                    return <ImgButton onPress={() => Game(elm.id, elm.icone, i,)} key={i} svg={elm.icone} />
                })}
            </View>
        </View>
    </LevelWrapper>
}
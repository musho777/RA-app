import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { Cendy1, Cendy2, Cendy3, Cendy4, Cendy5 } from '../../assets/svg'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

export const Level3_5 = ({ navigation }) => {
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
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/icecream4.png')} />, id: 5, active: false },
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/icecream3.png')} />, id: 4, active: false },
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/icecream1.png')} />, id: 2, active: false },
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/icecream5.png')} />, id: 6, active: false },
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/icecream2.png')} />, id: 3, active: false },
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/icecream.png')} />, id: 1, active: false },
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/icecream6.png')} />, id: 7, active: false },
    ]
    const [arr, setArr] = useState([
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/lollipop4.png')} />, id: 5, active: false },
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/lollipop3.png')} />, id: 4, active: false },
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/lollipop1.png')} />, id: 2, active: false },
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/lollipop5.png')} />, id: 6, active: false },
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/lollipop2.png')} />, id: 3, active: false },
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/lollipop.png')} />, id: 1, active: false },
        { icone: <Image style={{ width: 35, height: 50 }} source={require('../../assets/img/lollipop6.png')} />, id: 7, active: false },
    ])
    const [answer, setAnswer] = useState([
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
                navigation.navigate('Level3_6')
                musicSuccess.stop()
            }, 2000);
        }
    }, [arr])

    useEffect(() => {
        const randomNum = Math.floor(Math.random() * 2)
        if (randomNum) {
            setArr(lollipop)
        }
    }, [])

    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 50 }}>
                {answer.map((elm, i) => {
                    return <ImgButton disable={true} key={i} svg={elm.icone} />
                })}
            </View>
            <View style={{ width: '100%', borderWidth: 2, borderColor: '#9C3', borderRadius: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 50 }}>
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
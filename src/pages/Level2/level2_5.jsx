import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

export const Level2_5 = ({ navigation }) => {
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

    const sound = new Sound('game25.mp3', Sound.MAIN_BUNDLE,
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
        { icone: <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/level2/game5/cendy4.png')} />, id: 4, active: false },
        { icone: <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/level2/game5/cendy3.png')} />, id: 3, active: false },
        { icone: <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/level2/game5/cendy1.png')} />, id: 1, active: false },
        { icone: <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/level2/game5/cendy5.png')} />, id: 5, active: false },
        { icone: <Image style={{ width: 50, height: 70 }} source={require('../../assets/img/level2/game5/cendy2.png')} />, id: 2, active: false },
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
                sound.stop()
                navigation.navigate('Level2_6')
                musicSuccess.stop()
            }, 2000);
        }
    }, [arr])
    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 50 }}>
                {answer.map((elm, i) => {
                    return <ImgButton key={i} svg={elm.icone} />
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
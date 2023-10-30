import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'

export const Level10_3 = ({ navigation }) => {
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
    const [game1, setGame1] = useState(0)
    const lollipop = [
        { icone: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game3/crystal4.png')} />, id: 7, active: false },
        { icone: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game3/crystal3.png')} />, id: 8, active: false },
        { icone: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game3/crystal1.png')} />, id: 10, active: false },
        { icone: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game3/crystal5.png')} />, id: 6, active: false },
        { icone: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game3/crystal2.png')} />, id: 9, active: false },
        { icone: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game3/crystal0.png')} />, id: 11, active: false },
        { icone: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game3/crystal6.png')} />, id: 5, active: false },
        { icone: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game3/crystal7.png')} />, id: 4, active: false },
        { icone: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game3/crystal8.png')} />, id: 3, active: false },
        { icone: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game3/crystal9.png')} />, id: 2, active: false },
        { icone: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level10/game3/crystal10.png')} />, id: 1, active: false },


    ]
    const [arr, setArr] = useState([
        { icone: <Image style={{ width: 30, height: 50 }} source={require('../../assets/img/level10/game3/pin4.png')} />, id: 7, active: false },
        { icone: <Image style={{ width: 30, height: 50 }} source={require('../../assets/img/level10/game3/pin3.png')} />, id: 8, active: false },
        { icone: <Image style={{ width: 30, height: 50 }} source={require('../../assets/img/level10/game3/pin1.png')} />, id: 10, active: false },
        { icone: <Image style={{ width: 30, height: 50 }} source={require('../../assets/img/level10/game3/pin5.png')} />, id: 6, active: false },
        { icone: <Image style={{ width: 30, height: 50 }} source={require('../../assets/img/level10/game3/pin2.png')} />, id: 9, active: false },
        { icone: <Image style={{ width: 30, height: 50 }} source={require('../../assets/img/level10/game3/pin0.png')} />, id: 11, active: false },
        { icone: <Image style={{ width: 30, height: 50 }} source={require('../../assets/img/level10/game3/pin6.png')} />, id: 5, active: false },
        { icone: <Image style={{ width: 30, height: 50 }} source={require('../../assets/img/level10/game3/pin7.png')} />, id: 4, active: false },
        { icone: <Image style={{ width: 30, height: 50 }} source={require('../../assets/img/level10/game3/pin8.png')} />, id: 3, active: false },
        { icone: <Image style={{ width: 30, height: 50 }} source={require('../../assets/img/level10/game3/pin9.png')} />, id: 2, active: false },
        { icone: <Image style={{ width: 30, height: 50 }} source={require('../../assets/img/level10/game3/pin10.png')} />, id: 1, active: false },
    ])
    const [answer, setAnswer] = useState([
        { icone: '', id: '' },
        { icone: '', id: '' },
        { icone: '', id: '' },
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
                if (game1 === 1) {
                    navigation.navigate('Level10_4')
                }
                musicSuccess.stop()
            }, 2000);
        }
    }, [arr])

    useEffect(() => {
        if (game1 == 1) {
            let item = GetRandomItemsFromArray(lollipop, lollipop.length)
            setArr(item)
            setAnswer([
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
            ])
        }
        else {
            let item = GetRandomItemsFromArray(arr, arr.length)
            setArr(item)
        }


    }, [game1])

    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {answer.map((elm, i) => {
                    return <ImgButton width={65} height={65} disable={true} key={i} svg={elm.icone} />
                })}
            </View>
            <View style={{ width: '100%', borderWidth: 2, borderColor: '#9C3', borderRadius: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                {arr.map((elm, i) => {
                    if (elm.active) {
                        return <View key={i} style={{ width: 65, height: 65 }}></View>
                    }
                    return <ImgButton width={65} height={65} onPress={() => Game(elm.id, elm.icone, i,)} key={i} svg={elm.icone} />
                })}
            </View>
        </View>
    </LevelWrapper>
}
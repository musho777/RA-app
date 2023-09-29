import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
import { NumberButton } from '../../components/NumberBuuton'

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
    const button = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [arr, setArr] = useState([
        ['0', 1, '', 3, 4, 5],
        ['0', 1, 2, 3, '', 5],
        ['0', '', 2, '', 4, 5]
    ])
    const [activeGame, setActiveGame] = useState([])
    const [game, setGame] = useState(0)
    const Game = (elm) => {
        let item = [...activeGame]
        let index = ''
        let win = true
        for (let i = 0; i < activeGame.length; i++) {
            if (item[i] == '') {
                if (item[i - 1] + 1 == elm && item[i + 1] - 1 == elm) {
                    index = i
                    break
                }
            }
        }
        item[index] = elm
        setActiveGame(item)
        item.map((elm, i) => {
            if (elm == '') {
                win = false
            }
        })
        console.log(win)
        if (win) {
            setGame(game + 1)
        }
    }

    useEffect(() => {
        if (game == 3) {
            console.log('111112')
        } else {
            setActiveGame(arr[game])
        }
    }, [game])
    return <LevelWrapper img2={require('../../assets/img/bg3.png')} img={require('../../assets/img/3bh.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 120 }}>
                {activeGame.map((elm, i) => {
                    if (elm == '') {
                        return <ImgButton border='rgba(160, 205, 212, 0.4)' width={55} height={55} disable={true} key={i} svg={elm.icone} />
                    }
                    else {
                        return <NumberButton disabled={true} bg={'#A0CDD4'} bc='rgba(160, 205, 212, 0.4)' key={i} number={elm} />
                    }
                })}
            </View>
            <View style={{ width: '100%', borderWidth: 2, borderColor: '#A0CDD4', borderRadius: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {button.map((elm, i) => {
                    return <NumberButton bg={'#A0CDD4'} bc='rgba(160, 205, 212, 0.4)' key={i} onPress={() => Game(elm)} number={elm} />
                })}
            </View>
        </View>
    </LevelWrapper>
}
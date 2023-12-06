import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { Button1, Button2, Button3, ButtonSvg, Shirt } from '../../assets/svg'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'
import Sound from 'react-native-sound'

export const Level2_2 = ({ navigation }) => {
    const [button, setButton] = useState([
        { icon: <Button1 />, id: 1, active: false },
        { icon: <Button2 />, id: 2, active: false },
        { icon: <Button3 />, id: 3, active: false },
        { icon: <ButtonSvg />, id: 4, active: false },
    ])

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
    const [selected, setSelected] = useState([])
    useEffect(() => {
        let item = GetRandomItemsFromArray(button, 4)
        setButton(item)
    }, [])

    const sound = new Sound('game22.mp3', Sound.MAIN_BUNDLE,
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

    const Game = (i, id) => {
        let item = [...button]
        let temp = [...selected]
        if (id == 1 || id == 2) {
            item[i].active = true
            temp.push(id)
        }
        else {
            button.map((elm, i) => {
                elm.active = false
                temp = []
                setTimeout(() => {
                    music.play();
                }, 100);
                setTimeout(() => {
                    music.stop()
                }, 2000);
            })
        }
        setButton(item)
        setSelected(temp)
    }

    useEffect(() => {
        let count = 0
        button.map((elm, i) => {
            if (elm.active) {
                count = count + 1
            }
        })
        if (count == 2) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                sound.stop()
                navigation.navigate('Level2_3')
                musicSuccess.stop()
            }, 2000);
        }
    }, [button])

    return <LevelWrapper img2={require('../../assets/img/bg5.png')} img={require('../../assets/img/5bg.png')} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
            <View style={{ position: "relative", width: 220, height: 300, justifyContent: 'center' }}>
                <Image style={{ width: 270, height: 370 }} source={require('../../assets/img/shirt.png')} />
                {selected?.includes(1) &&
                    <Image style={{ width: 50, height: 25, position: 'absolute', top: 75, left: 110 }} source={require('../../assets/img/level2/game2/button2.png')} />
                }
                {selected?.includes(2) &&
                    <Image style={{ width: 40, height: 40, position: 'absolute', top: 105, left: 113 }} source={require('../../assets/img/level2/game2/button4.png')} />
                }
            </View>
            <View style={{ alignItems: 'center', height: 200, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-between' }}>
                    <ImgButton borderRadius={20} onPress={() => Game(0, button[0].id)} svg={button[0].icon} border={button[0].active ? 'green' : 'rgba(204, 102, 204, 0.40)'} />
                    <ImgButton borderRadius={20} onPress={() => Game(1, button[1].id)} svg={button[1].icon} border={button[1].active ? 'green' : 'rgba(204, 102, 204, 0.40)'} />
                </View>
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-between' }}>
                    <ImgButton borderRadius={20} onPress={() => Game(2, button[2].id)} svg={button[2].icon} border={button[2].active ? 'green' : 'rgba(204, 102, 204, 0.40)'} />
                    <ImgButton borderRadius={20} onPress={() => Game(3, button[3].id)} svg={button[3].icon} border={button[3].active ? 'green' : 'rgba(204, 102, 204, 0.40)'} />
                </View>
            </View>
        </View>
    </LevelWrapper>
}
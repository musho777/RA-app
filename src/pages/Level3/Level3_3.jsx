import { Image, View } from 'react-native'
import { ImgButton } from '../../components/ImgButton'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

export const Level3_3 = ({ navigation }) => {

    const subjects = [
        { icon: <Image source={require('../../assets/img/0.png')} style={{ width: 35, height: 50 }} />, id: 2, active: false },
        { icon: <Image source={require('../../assets/img/rhombus.png')} style={{ width: 50, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/9i.png')} style={{ width: 35, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/2i.png')} style={{ width: 35, height: 50 }} />, id: 3, active: false },
        { icon: <Image source={require('../../assets/img/heart.png')} style={{ width: 35, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/8i.png')} style={{ width: 35, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/0.png')} style={{ width: 35, height: 50 }} />, id: 2, active: false },
        { icon: <Image source={require('../../assets/img/8i.png')} style={{ width: 35, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/6i.png')} style={{ width: 35, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/3.png')} style={{ width: 35, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/8i.png')} style={{ width: 35, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/0.png')} style={{ width: 35, height: 50 }} />, id: 2, active: false },
    ]

    const [disable, setDisable] = useState(false)

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
    const sound = new Sound('game33.mp3', Sound.MAIN_BUNDLE,
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

    const [activeGame, setActiveGame] = useState([])
    useEffect(() => {
        setActiveGame(subjects)
    }, [])


    useEffect(() => {
        let count = 0
        activeGame.map((elm, i) => {
            if (elm.active) {
                count = count + 1
            }
        })
        if (count == 3) {
            setTimeout(() => {
                setDisable(true)
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                sound.stop()
                navigation.navigate('Level3_4')
                musicSuccess.stop()
            }, 2000);
        }
    }, [activeGame])

    const Game = (elm, i) => {
        let item = [...activeGame]
        if (elm.id == 2) {
            item[i].active = true
        }
        else {
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
        setActiveGame(item)
    }

    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 120 }}>
            {activeGame.map((elm, i) => {
                if (i < 4) {
                    return <ImgButton disable={disable} border={elm.active ? 'green' : 'rgba(255, 111, 23, 0.5)'} onPress={() => Game(elm, i)} key={i} svg={elm.icon} />
                }
            })}
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 120, marginTop: 10 }}>
            {activeGame.map((elm, i) => {
                if (i >= 4 && i < 8) {
                    return <ImgButton disable={disable} border={elm.active ? 'green' : 'rgba(255, 111, 23, 0.5)'} onPress={() => Game(elm, i)} key={i} svg={elm.icon} />
                }
            })}
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 120, marginTop: 10 }}>
            {activeGame.map((elm, i) => {
                if (i >= 8) {
                    return <ImgButton disable={disable} border={elm.active ? 'green' : 'rgba(255, 111, 23, 0.5)'} onPress={() => Game(elm, i)} key={i} svg={elm.icon} />
                }
            })}
        </View>
    </LevelWrapper>
}
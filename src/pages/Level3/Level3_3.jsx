import { Image, View } from 'react-native'
import { ImgButton } from '../../components/ImgButton'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'
import Sound from 'react-native-sound'

export const Level3_3 = ({ navigation }) => {
    const number = [
        { icon: <Image source={require('../../assets/img/0.png')} style={{ width: 35, height: 50 }} />, id: 2, active: false },
        { icon: <Image source={require('../../assets/img/1num.png')} style={{ width: 35, height: 50 }} />, id: 2, active: false },
        { icon: <Image source={require('../../assets/img/num2.png')} style={{ width: 35, height: 50 }} />, id: 2, active: false },
        { icon: <Image source={require('../../assets/img/3.png')} style={{ width: 35, height: 50 }} />, id: 2, active: false },
        { icon: <Image source={require('../../assets/img/4.png')} style={{ width: 35, height: 50 }} />, id: 2, active: false },
        { icon: <Image source={require('../../assets/img/5.png')} style={{ width: 35, height: 50 }} />, id: 2, active: false },
        { icon: <Image source={require('../../assets/img/6.png')} style={{ width: 35, height: 50 }} />, id: 2, active: false },
        { icon: <Image source={require('../../assets/img/7.png')} style={{ width: 35, height: 50 }} />, id: 2, active: false },
        { icon: <Image source={require('../../assets/img/8.png')} style={{ width: 35, height: 50 }} />, id: 2, active: false },
        { icon: < Image source={require('../../assets/img/9.png')} style={{ width: 35, height: 50 }} />, id: 2, active: false },
    ]
    const [lengthh, setLength] = useState()
    const subjects = [
        { icon: <Image source={require('../../assets/img/star.png')} style={{ width: 50, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/star.png')} style={{ width: 50, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/star.png')} style={{ width: 50, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/star.png')} style={{ width: 50, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/star.png')} style={{ width: 50, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/heart.png')} style={{ width: 50, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/heart.png')} style={{ width: 50, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/heart.png')} style={{ width: 50, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/heart.png')} style={{ width: 50, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/heart.png')} style={{ width: 50, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/rhombus.png')} style={{ width: 50, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/rhombus.png')} style={{ width: 50, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/rhombus.png')} style={{ width: 50, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/rhombus.png')} style={{ width: 50, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/rhombus.png')} style={{ width: 50, height: 50 }} />, id: 3 },
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

    const [activeGame, setActiveGame] = useState([])
    useEffect(() => {
        const randomNum = Math.floor(Math.random() * 4) + 3
        let arr = GetRandomItemsFromArray(number, randomNum)
        setLength(arr.length)
        let arr1 = GetRandomItemsFromArray(subjects, 8 - arr.length)
        let combainArray = arr.concat(arr1)
        setActiveGame(combainArray)
    }, [])


    useEffect(() => {
        let count = 0
        activeGame.map((elm, i) => {
            if (elm.active) {
                count = count + 1
            }
        })
        if (count == lengthh) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
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
                setDisable(true)
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 5000);
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 120, marginTop: 30 }}>
            {activeGame.map((elm, i) => {
                if (i >= 4) {
                    return <ImgButton disable={disable} border={elm.active ? 'green' : 'rgba(255, 111, 23, 0.5)'} onPress={() => Game(elm, i)} key={i} svg={elm.icon} />
                }
            })}
        </View>
    </LevelWrapper>
}
import { Image, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'
import Sound from 'react-native-sound'

export const Level3_7 = ({ navigation }) => {
    let subjects = [
        { icon: <Image source={require('../../assets/img/blueberry.png')} style={{ width: 50, height: 50 }} />, id: 1 },
        { icon: <Image source={require('../../assets/img/apple.png')} style={{ width: 50, height: 50 }} />, id: 2 },
        { icon: <Image source={require('../../assets/img/strawberry.png')} style={{ width: 50, height: 50 }} />, id: 3 },
        { icon: <Image source={require('../../assets/img/redGlass1.png')} style={{ width: 50, height: 50 }} />, id: 4 },
        { icon: <Image source={require('../../assets/img/BlueGlass.png')} style={{ width: 50, height: 50 }} />, id: 5 },
    ]
    let [game1, setGame1] = useState([
        { icon: <Image source={require('../../assets/img/blueberry.png')} style={{ width: 40, height: 50 }} />, id: 1 },
        { icon: <Image source={require('../../assets/img/apple.png')} style={{ width: 40, height: 50 }} />, id: 2 },
        { icon: <Image source={require('../../assets/img/strawberry.png')} style={{ width: 40, height: 50 }} />, id: 3 },
    ])
    let [game2, setGame2] = useState([
        { icon: <Image source={require('../../assets/img/redGlass1.png')} style={{ width: 40, height: 50 }} />, id: 1 },
        { icon: <Image source={require('../../assets/img/BlueGlass.png')} style={{ width: 40, height: 50 }} />, id: 2 },
    ])

    const [sub, setSub] = useState({})
    const [disable, setDisable] = useState(false)
    const [randomSubject, setRandomSubject] = useState([])
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
        const randomNum = Math.floor(Math.random() * 2)
        let item = []
        if (randomNum) {
            let arr1 = GetRandomItemsFromArray(game1, 3)
            setRandomSubject(arr1)
            item = [...game1]
        }
        else {
            let arr1 = GetRandomItemsFromArray(game2, 2)
            setRandomSubject(arr1)
            item = [...game2]
        }
        let arr1 = GetRandomItemsFromArray(item, 2)
        setActiveGame(arr1)
    }, [])
    const Game = (elm) => {
        setSub(elm)
        if (elm.id === activeGame[0]?.id) {
            setTimeout(() => {
                setDisable(true)
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                navigation.navigate('Level3_8')
                setDisable(false)

                musicSuccess.stop()
            }, 2000);
        }
        else {
            setTimeout(() => {
                setDisable(true)
                music.play();
            }, 100);
            setTimeout(() => {
                setDisable(false)
                music.stop()
                setSub({})
            }, 1000);
        }
    }
    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')}>
        <View style={{ flexDirection: 'row', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', flexDirection: 'row', marginRight: 100, marginLeft: -10 }}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ marginRight: 20, marginBottom: 20 }}>
                        <ImgButton svg={activeGame[0]?.icon} disable={true} border='rgba(240, 129, 67, 0.4)' />
                    </View>
                    <ImgButton svg={activeGame[1]?.icon} disable={true} border='rgba(240, 129, 67, 0.4)' />
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <ImgButton svg={activeGame[1]?.icon} disable={true} border='rgba(240, 129, 67, 0.4)' />
                    <View style={{ marginTop: 20 }}>
                        <ImgButton svg={sub?.icon} disable={true} border='rgba(240, 129, 67, 0.4)' />
                    </View>
                </View>
            </View>
            {
                console.log(activeGame.length)
            }
            <View style={{ flexDirection: 'column' }}>
                {randomSubject?.map((elm, i) => {
                    return <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => Game(elm)} key={i}>
                        {elm.icon}
                    </TouchableOpacity>
                })}

            </View>
        </View>
    </LevelWrapper>
}
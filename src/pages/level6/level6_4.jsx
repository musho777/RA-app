import { Image, TouchableOpacity, View } from 'react-native'
import { ImgButton } from '../../components/ImgButton'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
import { Blue2, Green2, Orange2, Yellow2 } from '../../assets/svg'

export const Level6_4 = ({ navigation }) => {

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


    const [arr, setArr] = useState([
        [
            [
                { icon: <Image source={require('../../assets/img/level6/game4/flagleft.png')} style={{ width: 70, height: 45 }} />, id: 2, active: false, icon1: <Image source={require('../../assets/img/level6/game4/flagblue.png')} style={{ width: 70, height: 50 }} /> },
                { icon: <Image source={require('../../assets/img/level6/game4/flagleft1.png')} style={{ width: 70, height: 50 }} />, id: 1, active: false, icon1: <Image source={require('../../assets/img/level6/game4/yellowflag.png')} style={{ width: 70, height: 50 }} /> },
                { icon: <Image source={require('../../assets/img/level6/game4/flagleft1.png')} style={{ width: 70, height: 50 }} />, id: 1, active: false, icon1: <Image source={require('../../assets/img/level6/game4/yellowflag.png')} style={{ width: 70, height: 50 }} /> },
                { icon: <Image source={require('../../assets/img/level6/game4/flagleft1.png')} style={{ width: 70, height: 50 }} />, id: 1, active: false, icon1: <Image source={require('../../assets/img/level6/game4/yellowflag.png')} style={{ width: 70, height: 50 }} /> },
                { icon: <Image source={require('../../assets/img/level6/game4/flagleft.png')} style={{ width: 70, height: 50 }} />, id: 2, active: false, icon1: <Image source={require('../../assets/img/level6/game4/flagblue.png')} style={{ width: 70, height: 50 }} /> },
                { icon: <Image source={require('../../assets/img/level6/game4/flagleft1.png')} style={{ width: 70, height: 50 }} />, id: 1, active: false, icon1: <Image source={require('../../assets/img/level6/game4/yellowflag.png')} style={{ width: 70, height: 50 }} /> },
                { icon: <Image source={require('../../assets/img/level6/game4/flagleft.png')} style={{ width: 70, height: 50 }} />, id: 2, active: false, icon1: <Image source={require('../../assets/img/level6/game4/flagblue.png')} style={{ width: 70, height: 50 }} /> },
                { icon: <Image source={require('../../assets/img/level6/game4/flagleft.png')} style={{ width: 70, height: 50 }} />, id: 2, active: false, icon1: <Image source={require('../../assets/img/level6/game4/flagblue.png')} style={{ width: 70, height: 50 }} /> },
            ],
            [
                { icon: <Image source={require('../../assets/img/level6/game4/flagleft1.png')} style={{ width: 70, height: 50 }} />, id: 1, active: false, icon1: <Image source={require('../../assets/img/level6/game4/yellowflag.png')} style={{ width: 70, height: 50 }} /> },
                { icon: <Image source={require('../../assets/img/level6/game4/flagleft1.png')} style={{ width: 70, height: 50 }} />, id: 1, active: false, icon1: <Image source={require('../../assets/img/level6/game4/yellowflag.png')} style={{ width: 70, height: 50 }} /> },
                { icon: <Image source={require('../../assets/img/level6/game4/flagleft.png')} style={{ width: 70, height: 50 }} />, id: 2, active: false, icon1: <Image source={require('../../assets/img/level6/game4/flagblue.png')} style={{ width: 70, height: 50 }} /> },
                { icon: <Image source={require('../../assets/img/level6/game4/flagleft.png')} style={{ width: 70, height: 50 }} />, id: 2, active: false, icon1: <Image source={require('../../assets/img/level6/game4/flagblue.png')} style={{ width: 70, height: 50 }} /> },
                { icon: <Image source={require('../../assets/img/level6/game4/flagleft1.png')} style={{ width: 70, height: 50 }} />, id: 1, active: false, icon1: <Image source={require('../../assets/img/level6/game4/yellowflag.png')} style={{ width: 70, height: 50 }} /> },
                { icon: <Image source={require('../../assets/img/level6/game4/flagleft.png')} style={{ width: 70, height: 50 }} />, id: 2, active: false, icon1: <Image source={require('../../assets/img/level6/game4/flagblue.png')} style={{ width: 70, height: 50 }} /> },
                { icon: <Image source={require('../../assets/img/level6/game4/flagleft.png')} style={{ width: 70, height: 50 }} />, id: 2, active: false, icon1: <Image source={require('../../assets/img/level6/game4/flagblue.png')} style={{ width: 70, height: 50 }} /> },
                { icon: <Image source={require('../../assets/img/level6/game4/flagleft1.png')} style={{ width: 70, height: 50 }} />, id: 1, active: false, icon1: <Image source={require('../../assets/img/level6/game4/yellowflag.png')} style={{ width: 70, height: 50 }} /> },
            ]
        ],
    ])

    useEffect(() => {
        setActiveGame(arr[0])
    }, [])

    const [selecetedColor, setSelectedColor] = useState()

    const SelectColor = (i) => {
        setSelectedColor(i)
    }

    const Game = (elm, j, i) => {
        let item = [...activeGame]
        console.log(selecetedColor, elm.id)
        if (elm.id === selecetedColor) {
            item[j][i].active = true
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 2000);
        }
        else {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);
        }
        setActiveGame(item)
    }

    useEffect(() => {
        let win = true
        activeGame[0]?.map((elm, i) => {
            if (!elm.active) {
                win = false
            }
        })
        activeGame[1]?.map((elm, i) => {
            if (!elm.active) {
                win = false
            }
        })
        if (activeGame[0]?.length && win) {
            setTimeout(() => {
                navigation.navigate('Level6_4_1')
            }, 1000);
        }
    }, [activeGame])

    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} jC='center'>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {activeGame[0]?.map((elm, i) => {
                if (elm.active) {
                    return <ImgButton disable={true} width={80} height={80} border={'rgba(153, 204, 51, 0.5)'} key={i} svg={elm.icon1} />
                }
                else {
                    return <ImgButton onPress={() => Game(elm, 0, i)} width={80} height={80} border={'rgba(153, 204, 51, 0.5)'} key={i} svg={elm.icon} />
                }
            })}
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
            {activeGame[1]?.map((elm, i) => {
                if (elm.active) {
                    return <ImgButton disable={true} width={80} height={80} border={'rgba(153, 204, 51, 0.5)'} key={i} svg={elm.icon1} />
                }
                else {
                    return <ImgButton onPress={() => Game(elm, 1, i)} width={80} height={80} border={'rgba(153, 204, 51, 0.5)'} key={i} svg={elm.icon} />
                }
            })}
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 10 }}>
            <TouchableOpacity style={{ marginHorizontal: 20, }} onPress={() => SelectColor(1)}>
                <Yellow2 />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => SelectColor(2)}>
                <Blue2 />
            </TouchableOpacity>
        </View>
    </LevelWrapper>
}
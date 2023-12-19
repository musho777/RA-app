import { Image, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound';

export const Level5_2 = ({ navigation }) => {

    const musicSuccess = new Sound('success.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const music = new Sound('ding.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });




    useEffect(() => {
        setTimeout(() => {
            sound2.play();
        }, 100);
    }, [])



    const [image, setImage] = useState([
        { icon: <Image source={require('../../assets/img/level5/game2/rectangelGreen.png')} style={{ width: 80, height: 80 }} />, id: 2, active: false },
        { icon: <Image source={require('../../assets/img/level5/game2/rectangelGreen.png')} style={{ width: 70, height: 70 }} />, id: 3, active: false },
        { icon: <Image source={require('../../assets/img/level5/game2/rectangelGreen.png')} style={{ width: 50, height: 50 }} />, id: 5, active: false },
        { icon: <Image source={require('../../assets/img/level5/game2/rectangelGreen.png')} style={{ width: 90, height: 90 }} />, id: 1, active: false, },
        { icon: <Image source={require('../../assets/img/level5/game2/rectangelGreen.png')} style={{ width: 60, height: 60 }} />, id: 4, active: false },
        { icon: <Image source={require('../../assets/img/level5/game2/rectangelGreen.png')} style={{ width: 40, height: 40 }} />, id: 6, active: false },
        { icon: <Image source={require('../../assets/img/level5/game2/reactangelBlue.png')} style={{ width: 50, height: 50 }} />, id: 7 },
        { icon: <Image source={require('../../assets/img/level5/game2/reactangelBlue.png')} style={{ width: 40, height: 40 }} />, id: 7 },
        { icon: <Image source={require('../../assets/img/level5/game2/reactangelBlue.png')} style={{ width: 30, height: 30 }} />, id: 7 },
        { icon: <Image source={require('../../assets/img/level5/game2/rectangelPurple.png')} style={{ width: 50, height: 50 }} />, id: 8 },
        { icon: <Image source={require('../../assets/img/level5/game2/rectangelPurple.png')} style={{ width: 40, height: 40 }} />, id: 8 },
        { icon: <Image source={require('../../assets/img/level5/game2/rectangelPurple.png')} style={{ width: 30, height: 30 }} />, id: 8 },
    ])
    const [game2, setGame2] = useState(false)
    const [greenRectangel, setGrennRectangel] = useState([])
    const [solution2, setSolutuin2] = useState(0)
    const [position, setPosition] = useState([
        { x: 54, y: 43 },
        { x: 50, y: 180 },
        { x: 150, y: 100 },
        { x: 238, y: 16 },
        { x: 343, y: 23 },
        { x: 416, y: 100 },
        { x: 518, y: 36 },
        { x: 295, y: 158 },
        { x: 518, y: 132 },
        { x: 470, y: 221 },
        { x: 454, y: 16 },
        { x: 190, y: 225 },
    ])
    const sound1 = new Sound('game522.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const sound2 = new Sound('game521.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const Game = (elm, i) => {
        let item = [...image]
        let temp = [...greenRectangel]
        if (elm.id <= 6) {
            item[i].active = true
            temp.push(elm)
        }
        else {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);
        }
        setImage(item)
        setGrennRectangel(temp)
    }

    // console.log(greenRectangel)

    const Game2 = (elm, i) => {
        if (solution2 + 1 == elm.id) {
            setSolutuin2(elm.id)
            if (elm.id === 6) {
                setTimeout(() => {
                    navigation.navigate('Level5_3')
                    musicSuccess.play();
                    sound1.stop()
                }, 100);
                setTimeout(() => {
                    musicSuccess.stop()
                }, 2000);
            }
        }
        else {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);
            setSolutuin2(0)
        }
    }

    useEffect(() => {
        if (greenRectangel.length == 6) {
            setTimeout(() => {
                sound2.stop();
                sound1.play()
            }, 100);
            setGame2(true)
        }
    }, [greenRectangel])


    if (game2) {
        return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%', }}>
                {greenRectangel.map((elm, i) => {
                    if (elm.id > solution2) {
                        return <TouchableOpacity onPress={() => Game2(elm, i)} style={{ marginHorizontal: 10 }} key={i}>
                            {elm.icon}
                        </TouchableOpacity>
                    }
                })}
            </View>
        </LevelWrapper>
    }
    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
        {image.map((elm, i) => {
            if (!elm.active) {
                return <TouchableOpacity onPress={() => Game(elm, i)} key={i} style={{ position: 'absolute', left: position[i].x, top: position[i].y }}>
                    {elm.icon}
                </TouchableOpacity>
            }
        })}

    </LevelWrapper>
}
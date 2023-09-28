import { Image, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound';

export const Level5_2 = () => {

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

    const [image, setImage] = useState([
        { icon: <Image source={require('../../assets/img/level5/game2/rectangelGreen.png')} style={{ width: 70, height: 70 }} />, id: 1, active: false, },
        { icon: <Image source={require('../../assets/img/level5/game2/rectangelGreen.png')} style={{ width: 60, height: 60 }} />, id: 2, active: false },
        { icon: <Image source={require('../../assets/img/level5/game2/rectangelGreen.png')} style={{ width: 50, height: 50 }} />, id: 3, active: false },
        { icon: <Image source={require('../../assets/img/level5/game2/rectangelGreen.png')} style={{ width: 40, height: 40 }} />, id: 4, active: false },
        { icon: <Image source={require('../../assets/img/level5/game2/rectangelGreen.png')} style={{ width: 30, height: 30 }} />, id: 5, active: false },
        { icon: <Image source={require('../../assets/img/level5/game2/rectangelGreen.png')} style={{ width: 20, height: 20 }} />, id: 6, active: false },
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
        { x: 416, y: 11 },
        { x: 518, y: 36 },
        { x: 295, y: 118 },
        { x: 518, y: 102 },
        { x: 470, y: 221 },
        { x: 454, y: 16 },
        { x: 190, y: 225 },
    ])
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

    useEffect(() => {
        if (greenRectangel.length == 6) {
            setGame2(true)
        }
    }, [greenRectangel])

    const Game2 = (elm, i) => {
        if (solution2 + 1 == elm.id) {
            setSolutuin2(elm.id)
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
        console.log(solution2)
        if (solution2 === 6) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 2000);
        }
    }, [solution2])

    if (game2) {
        return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%', }}>
                {greenRectangel.map((elm, i) => {
                    console.log(elm.id)
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
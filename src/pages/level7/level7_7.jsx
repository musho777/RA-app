import { Dimensions, Image, TouchableOpacity } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import Sound from 'react-native-sound';
import { useEffect, useState } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Level7_7 = ({ navigation }) => {
    console.log(windowWidth)
    let w = windowWidth - 80
    let h = windowHeight - 80
    console.log(h)
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

    const [position, setPosition] = useState(() => [
        { x: 48, y: 15 },
        { x: 292, y: 43 },
        { x: 505, y: h - 100 },
        { x: 434, y: 75 },
        { x: 44, y: 152 },
        { x: 304, y: h - 120 },

    ])

    const [arr, setArr] = useState([
        [
            { icon: <Image source={require('../../assets/img/level7/game7/pillow.png')} style={{ width: 100, height: 100 }} />, active: false, secleted: true },
            { icon: <Image source={require('../../assets/img/level7/game7/blanket.png')} style={{ width: 100, height: 100 }} />, active: false, secleted: true },
            { icon: <Image source={require('../../assets/img/level7/game7/chair.png')} style={{ width: 100, height: 100 }} />, active: false, secleted: false },
            { icon: <Image source={require('../../assets/img/level7/game7/beanbag.png')} style={{ width: 100, height: 100 }} />, active: false, secleted: false },
            { icon: <Image source={require('../../assets/img/level7/game7/iron.png')} style={{ width: 140, height: 100 }} />, active: false, secleted: false },
        ],
        [
            { icon: <Image source={require('../../assets/img/level7/game7/saucer.png')} style={{ width: 150, height: 100 }} />, active: false, secleted: true },
            { icon: <Image source={require('../../assets/img/level7/game7/spoon.png')} style={{ width: 100, height: 100 }} />, active: false, secleted: true },
            { icon: <Image source={require('../../assets/img/level7/game7/cup.png')} style={{ width: 100, height: 100 }} />, active: false, secleted: true },
            { icon: <Image source={require('../../assets/img/level7/game7/vase.png')} style={{ width: 100, height: 100 }} />, active: false, secleted: false },
            { icon: <Image source={require('../../assets/img/level7/game7/hanger.png')} style={{ width: 150, height: 100 }} />, active: false, secleted: false },
            { icon: <Image source={require('../../assets/img/level7/game7/bucket.png')} style={{ width: 100, height: 100 }} />, active: false, secleted: false },
        ],
        [
            { icon: <Image source={require('../../assets/img/level7/game7/tassel.png')} style={{ width: 100, height: 100 }} />, active: false, secleted: true },
            { icon: <Image source={require('../../assets/img/level7/game7/tubeofpaint.png')} style={{ width: 100, height: 100 }} />, active: false, secleted: true },
            { icon: <Image source={require('../../assets/img/level7/game7/pencil.png')} style={{ width: 100, height: 100 }} />, active: false, secleted: true },
            { icon: <Image source={require('../../assets/img/level7/game7/racket.png')} style={{ width: 100, height: 120 }} />, active: false, secleted: false },
            { icon: <Image source={require('../../assets/img/level7/game7/Toothbrush.png')} style={{ width: 100, height: 130 }} />, active: false, secleted: false },
            { icon: <Image source={require('../../assets/img/level7/game7/hammer.png')} style={{ width: 150, height: 100 }} />, active: false, secleted: false },
        ]
    ])

    const [game1, setGame1] = useState(0)

    const [game, setGame] = useState([])

    useEffect(() => {
        setGame(arr[game1])
    }, [game])

    const Game = (i) => {
        let item = [...game]
        if (item[i].secleted) {
            item[i].secleted = false
            item[i].active = true
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
        if (game1 <= 2) {
            let win = true
            item.map((elm, i) => {
                if (elm.secleted) {
                    win = false
                }
            })
            if (win) {
                setGame1(game1 + 1)
            }
        }
        setGame(item)
    }

    useEffect(() => {
        if (game1 == 3) {
            navigation.navigate('Level7_8')
        }
    }, [game1])

    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')}>
        {game?.map((elm, i) => {
            if (!elm.active) {
                return <TouchableOpacity onPress={() => Game(i)} style={{ position: 'absolute', top: position[i].y, left: position[i].x }} key={i}>
                    {elm.icon}
                </TouchableOpacity>
            }
        })}
    </LevelWrapper>
}
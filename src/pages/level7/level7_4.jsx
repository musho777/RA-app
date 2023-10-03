import { Image, TouchableOpacity } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useState } from 'react'
import Sound from 'react-native-sound'

export const Level7_4 = ({ navigation }) => {
    const position = [
        { x: 350, y: 120 },
        { x: 85, y: 120 },
        { x: 600, y: 120 },
        { x: 620, y: 180 },
        { x: 110, y: 230 },
        { x: 20, y: 150 },
    ]
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

    const [img, setImg] = useState([
        { icon: <Image source={require('../../assets/img/level7/game4/cov.png')} style={{ width: 80, height: 50 }} />, id: 6, activ: false },
        { icon: <Image source={require('../../assets/img/level7/game4/gate.png')} style={{ width: 80, height: 50 }} />, id: 2, activ: false },
        { icon: <Image source={require('../../assets/img/level7/game4/goat.png')} style={{ width: 80, height: 50 }} />, id: 5, activ: false },
        { icon: <Image source={require('../../assets/img/level7/game4/horse.png')} style={{ width: 80, height: 50 }} />, id: 4, activ: false },
        { icon: <Image source={require('../../assets/img/level7/game4/pig.png')} style={{ width: 80, height: 50 }} />, id: 3, activ: false },
        { icon: <Image source={require('../../assets/img/level7/game4/rooster.png')} style={{ width: 50, height: 80 }} />, id: 1, activ: false },
    ])

    const Game = (id, i) => {
        let item = [...img]
        if (id <= 3) {
            item[i].activ = true
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 2000);
        }
        else if (id > 3 && item[1].activ && item[4].activ && item[5].activ) {
            item[i].activ = true
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                navigation.navigate('Level7_5')
                musicSuccess.stop()
            }, 2000);
        }
        else {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 2000);
        }
        setImg(item)
    }

    return <LevelWrapper img2={require('../../assets/img/farm.png')} >
        {img.map((elm, i) => {
            if (!elm.activ) {
                return <TouchableOpacity style={{ left: position[i].x, top: position[i].y, position: 'absolute' }} key={i} onPress={() => Game(elm.id, i)}>
                    {elm.icon}
                </TouchableOpacity>
            }
        })}
    </LevelWrapper>
}
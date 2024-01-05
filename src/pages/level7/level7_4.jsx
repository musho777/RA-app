import { Dimensions, Image, TouchableOpacity } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
const windowWidth = Dimensions.get('window').width;
export const Level7_4 = ({ navigation }) => {
    let w = windowWidth - 80
    const position = [
        { x: 400, y: 110 },
        { x: 400, y: 250 },
        { x: 500, y: 150 },
        { x: w - 300, y: 100 },
        { x: 110, y: 230 },
        { x: 430, y: 170 },
    ]
    const [win, setWin] = useState(true)
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

    const sound = new Sound('game741.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });

    const sound1 = new Sound('game742.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });

    const [img, setImg] = useState([
        { icon: <Image source={require('../../assets/img/level7/game4/cov.png')} style={{ width: 70, height: 50 }} />, id: 6, activ: false },
        { icon: <Image source={require('../../assets/img/level7/game4/gate.png')} style={{ width: 100, height: 50 }} />, id: 2, activ: false },
        { icon: <Image source={require('../../assets/img/level7/game4/goat.png')} style={{ width: 70, height: 60 }} />, id: 5, activ: false },
        { icon: <Image source={require('../../assets/img/level7/game4/horse.png')} style={{ width: 100, height: 70 }} />, id: 4, activ: false },
        { icon: <Image source={require('../../assets/img/level7/game4/pig.png')} style={{ width: 120, height: 70 }} />, id: 3, activ: false },
        { icon: <Image source={require('../../assets/img/level7/game4/rooster.png')} style={{ width: 50, height: 80 }} />, id: 1, activ: false },
    ])


    useEffect(() => {
        setTimeout(() => {
            // sound.play()
        }, 100);
        setTimeout(() => {
            sound.stop()
            // sound1.play()
        }, 6000);
    })

    useEffect(() => {

        if (img[1].activ && img[4].activ && img[5].activ) {
            if (win) {

                setTimeout(() => {
                    sound.stop()
                    sound1.play()
                }, 100);
                setWin(false)
            }
        }
    }, [img])

    useEffect(() => {
        setTimeout(() => {
            sound.play()
        }, 100);
    }, [])

    const Game = (id, i) => {
        let item = [...img]
        console.log(item, 'item')

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
                let win = true
                item.map((elm, i) => {
                    if (!elm.activ) {
                        win = false
                    }
                })
                if (win) {
                    navigation.navigate('Level7_5')
                }
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
        // if (item[2].activ) {
        //     setTimeout(() => {
        //         sound.stop()
        //         sound1.play()
        //     }, 100);
        // }
        setImg(item)
    }

    return <LevelWrapper img2={require('../../assets/img/farm.jpg')} >
        {img.map((elm, i) => {
            if (!elm.activ) {
                return <TouchableOpacity style={{ left: position[i].x, top: position[i].y, position: 'absolute' }} key={i} onPress={() => Game(elm.id, i)}>
                    {elm.icon}
                </TouchableOpacity>
            }
        })}
    </LevelWrapper>
}
import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Level5_5_1 = ({ navigation }) => {
    let w = windowWidth - 150
    let h = windowHeight - 150
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
    const sound = new Sound('game55.mp3', Sound.MAIN_BUNDLE,
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


    const [arr, setArr] = useState([

        {
            icon: <Image source={require('../../assets/img/level5/game5/1голубая.png')} style={{ width: 40, height: 80 }} />,
            x: 180,
            y: 0,
            id: 1,
        },
        {
            icon: <Image source={require('../../assets/img/level5/game5/2розовая.png')} style={{ width: 60, height: 80 }} />,
            x: 350,
            y: h,
            id: 2,

        },
        {
            icon: <Image source={require('../../assets/img/level5/game5/3желтая.png')} style={{ width: 50, height: 80 }} />,
            x: 180,
            y: 100,
            id: 3,

        },

        {
            icon: <Image source={require('../../assets/img/level5/game5/4синяя.png')} style={{ width: 50, height: 80 }} />,
            x: 420,
            y: 20,
            id: 4,

        },
        {
            icon: <Image source={require('../../assets/img/level5/game5/5желтая.png')} style={{ width: 50, height: 80 }} />,
            x: 140,
            y: h,
            id: 5,

        },
        {
            icon: <Image source={require('../../assets/img/level5/game5/6бирюзовая.png')} style={{ width: 60, height: 85 }} />,
            x: w - 80,
            y: 130,
            id: 6,
        },
        {
            icon: <Image source={require('../../assets/img/level5/game5/7зеленая.png')} style={{ width: 50, height: 80 }} />,
            x: 450,
            y: 120,
            id: 7,
        },
        {
            icon: <Image source={require('../../assets/img/level5/game5/8сиреневая.png')} style={{ width: 60, height: 85 }} />,
            x: w - 50,
            y: 0,
            id: 8,
        },

    ])

    const [position, setPosition] = useState({
        id: 0,
        x: 20,
        y: 100
    })

    const Game = (elm) => {
        if (elm.id - 1 == position.id) {
            setPosition({
                x: elm.x,
                y: elm.y,
                id: elm.id
            })
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
    }

    useEffect(() => {
        if (position.id == 8) {
            setTimeout(() => {
                navigation.navigate('Level5_6')
            }, 2000);
        }
    })

    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{
                position: 'absolute',
                top: position.y,
                left: position.x
            }}>
                {
                    <Image style={{
                        width: 100,
                        height: 65,

                    }} source={require('../../assets/img/level5/game5/лягушка.png')} />
                }
            </View>
            {arr.map((elm, i) => {
                if (position.id != elm.id)
                    return <TouchableOpacity onPress={() => Game(elm)} style={{ position: 'absolute', left: elm.x, top: elm.y }} key={i}>
                        {elm.icon}
                    </TouchableOpacity>
            })}
        </View>
    </LevelWrapper>
}
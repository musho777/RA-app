import { Dimensions, Image, TouchableOpacity, View } from "react-native"
import { LevelWrapper } from "../../components/LevelWrapper"
import { useEffect, useState } from "react"
import Sound from "react-native-sound"
import { Blue3, Brown, Green2, Purple } from "../../assets/svg"


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Level6_8 = ({ navigation }) => {
    let w = windowWidth - 400
    let h = windowHeight - 130

    const [position, setPosition] = useState([
        { icon: <Image style={{ width: 50, height: 80 }} source={require('../../assets/img/level6/game8/acorn1.png')} />, x: 54, y: 14, active: true, icon1: <Image style={{ width: 50, height: 80 }} source={require('../../assets/img/level6/game8/acorn1.png')} />, id: 100 },
        { icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level6/game8/bug1.png')} />, x: 26, y: h, active: true, icon1: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level6/game8/bug1.png')} />, id: 100 },
        { icon: <Image style={{ width: 55, height: 80 }} source={require('../../assets/img/level6/game8/cone1.png')} />, x: 84, y: 142, active: true, icon1: <Image style={{ width: 55, height: 80 }} source={require('../../assets/img/level6/game8/cone1.png')} />, id: 100 },
        { icon: <Image style={{ width: 70, height: 50 }} source={require('../../assets/img/level6/game8/butterfly1.png')} />, x: 202, y: h, active: true, icon1: <Image style={{ width: 70, height: 50 }} source={require('../../assets/img/level6/game8/butterfly1.png')} />, id: 100 },
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level6/game8/sheet.png')} />, x: w, y: 17, active: true, icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level6/game8/sheet.png')} />, id: 100 },
        { icon: <Image style={{ width: 70, height: 90 }} source={require('../../assets/img/level6/game8/tulip1.png')} />, x: 258, y: 96, active: false, icon1: <Image style={{ width: 70, height: 90 }} source={require('../../assets/img/level6/game8/tulip.png')} />, id: 4 },
        { icon: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level6/game8/bluebellscolorless1.png')} />, x: 356, y: 53, active: false, icon1: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level6/game8/bluebellscolorless.png')} />, id: 2 },
    ])

    const [selectCollor, setSelectCollor] = useState()

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
    const sound = new Sound('game68.mp3', Sound.MAIN_BUNDLE,
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
    const Game = (id, i) => {
        let item = [...position]
        // if (id === 1) {
        item[i].active = true
        setTimeout(() => {
            musicSuccess.play();
        }, 100);
        setTimeout(() => {
            musicSuccess.stop()
        }, 2000);
        // }
        // else {
        //     setTimeout(() => {
        //         music.play();
        //     }, 100);
        //     setTimeout(() => {
        //         music.stop()
        //     }, 1000);
        // }
        setPosition(item)
    }

    useEffect(() => {
        let win = true
        position.map((elm, i) => {
            if (!elm.active) {
                win = false
            }
        })
        if (win) {
            sound.stop()
            setTimeout(() => {
                navigation.navigate('LevelScreen')
            }, 2000);


        }
    }, [position])

    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
        {
            position.map((elm, i) => {
                if (!elm.active) {
                    return <TouchableOpacity
                        onPress={() => Game(elm.id, i)}
                        key={i} style={{ position: 'absolute', left: elm.x, top: elm.y }} >
                        {elm.icon}
                    </TouchableOpacity>
                }
                return <TouchableOpacity
                    key={i} style={{ position: 'absolute', left: elm.x, top: elm.y }} >
                    {elm.icon1}
                </TouchableOpacity>

            })}
        <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => setSelectCollor(1)}>
                <Image style={{ width: 150, height: 100 }} source={require('../../assets/img/level6/game8/palitr.png')} />
            </TouchableOpacity>

        </View>
    </LevelWrapper >
}
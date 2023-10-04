import { Image, TouchableOpacity, View } from "react-native"
import { LevelWrapper } from "../../components/LevelWrapper"
import { useEffect, useState } from "react"
import Sound from "react-native-sound"
import { Blue3, Brown, Green2, Purple } from "../../assets/svg"
export const Level6_8 = ({ navigation }) => {

    const [disable, setDisable] = useState(false)
    const [position, setPosition] = useState([
        { icon: <Image style={{ width: 50, height: 80 }} source={require('../../assets/img/level6/game8/acorn1.png')} />, x: 54, y: 14, active: false, icon1: <Image style={{ width: 50, height: 80 }} source={require('../../assets/img/level6/game8/acorn.png')} />, id: 1 },
        { icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level6/game8/bug1.png')} />, x: 26, y: 249, active: false, icon1: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/level6/game8/bug.png')} />, id: 2 },
        { icon: <Image style={{ width: 55, height: 80 }} source={require('../../assets/img/level6/game8/cone1.png')} />, x: 84, y: 142, active: false, icon1: <Image style={{ width: 55, height: 80 }} source={require('../../assets/img/level6/game8/cone.png')} />, id: 1 },
        { icon: <Image style={{ width: 70, height: 50 }} source={require('../../assets/img/level6/game8/butterfly1.png')} />, x: 202, y: 228, active: false, icon1: <Image style={{ width: 70, height: 50 }} source={require('../../assets/img/level6/game8/butterfly.png')} />, id: 3 },
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level6/game8/sheet.png')} />, x: 258, y: 17, active: false, icon1: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/level6/game8/sheet1.png')} />, id: 4 },
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

    const Game = (id, i) => {
        let item = [...position]
        if (id === selectCollor) {
            item[i].active = true
        }
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
            navigation.navigate('LevelScreen')
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
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: 90, height: 90 }} onPress={() => setSelectCollor(1)}>
                    <Brown />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 90, height: 90 }} onPress={() => setSelectCollor(2)}>
                    <Blue3 />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: 90, height: 90 }} onPress={() => setSelectCollor(3)}>
                    <Purple />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 90, height: 90 }} onPress={() => setSelectCollor(4)}>
                    <Green2 />
                </TouchableOpacity>
            </View>
        </View>
    </LevelWrapper >
}
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { LevelWrapper } from "../../components/LevelWrapper"
import { useEffect, useState } from "react"
import Sound from "react-native-sound"
export const Level6_1 = ({ navigation }) => {
    const arr = [
        [
            { icon: <Image source={require('../../assets/img/level6/game1/hare.png')} style={{ width: 50, height: 70 }} /> },
            { icon: <Image source={require('../../assets/img/level6/game1/hare.png')} style={{ width: 50, height: 70 }} /> },
            { icon: <Image source={require('../../assets/img/level6/game1/hare.png')} style={{ width: 50, height: 70 }} /> },
            { icon: <Image source={require('../../assets/img/level6/game1/hare.png')} style={{ width: 50, height: 70 }} /> },
        ],
        [
            { icon: <Image source={require('../../assets/img/level6/game1/squirrel.png')} style={{ width: 50, height: 50 }} /> },
            { icon: <Image source={require('../../assets/img/level6/game1/squirrel.png')} style={{ width: 50, height: 50 }} /> },
            { icon: <Image source={require('../../assets/img/level6/game1/squirrel.png')} style={{ width: 50, height: 50 }} /> },
        ]
    ]

    const [disable, setDisable] = useState(false)
    const position = [
        { x: 254, y: 14 },
        { x: 26, y: 249 },
        { x: 84, y: 242 },
        { x: 232, y: 228 },
        { x: 368, y: 187 },
        { x: 458, y: 96 },
        { x: 578, y: 66 },
        { x: 356, y: 53 },
    ]

    const [apple, setApple] = useState([
        { icon: <Image style={{ width: 50, height: 60 }} source={require('../../assets/img/level6/game1/apple.png')} />, active: false },
        { icon: <Image style={{ width: 50, height: 60 }} source={require('../../assets/img/level6/game1/apple.png')} />, active: false },
        { icon: <Image style={{ width: 50, height: 60 }} source={require('../../assets/img/level6/game1/apple.png')} />, active: false },
        { icon: <Image style={{ width: 50, height: 60 }} source={require('../../assets/img/level6/game1/apple.png')} />, active: false },
        { icon: <Image style={{ width: 50, height: 60 }} source={require('../../assets/img/level6/game1/apple.png')} />, active: false },
        { icon: <Image style={{ width: 50, height: 60 }} source={require('../../assets/img/level6/game1/apple.png')} />, active: false },
        { icon: <Image style={{ width: 50, height: 60 }} source={require('../../assets/img/level6/game1/apple.png')} />, active: false },
        { icon: <Image style={{ width: 50, height: 60 }} source={require('../../assets/img/level6/game1/apple.png')} />, active: false },
    ])

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
    const [completid, setCompletid] = useState([
        [],
        []
    ])
    const [selectedGlass, setSelectedGlass] = useState()
    const SelectGlass = (i) => {
        setSelectedGlass(i)
    }

    const Game = (e, i) => {
        if (selectedGlass) {
            let item = [...apple]
            let temp = [...completid]
            apple[i].active = true
            temp[selectedGlass - 1].push(e)
            setCompletid(temp)
            setApple(item)
        }
    }


    useEffect(() => {
        if (completid[0].length === arr[0].length && completid[1].length === arr[1].length) {
            setTimeout(() => {
                setDisable(true)
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                setDisable(false)
                musicSuccess.stop()
                navigation.navigate('Level6_2')
            }, 2000);
        }
        else if (completid[0].length > arr[0].length || completid[1].length > arr[1].length) {
            let item = [...apple]

            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);

            item.map((elm, i) => {
                elm.active = false
            })
            setApple(item)
            setSelectedGlass('')
            setCompletid([
                [], []
            ])
        }
    }, [completid])



    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '100%' }}>
            <View style={{ width: 200, height: '100%' }}>
                <View style={[styles.block, { top: 0, height: 200 }]}>
                    {arr[0].map((elm, i) => {
                        return <View style={{ padding: 10 }} key={i}>
                            {elm.icon}
                        </View>
                    })}
                </View>
                <TouchableOpacity onPress={() => SelectGlass(1)} style={[{ right: -20, position: 'absolute', justifyContent: 'center', alignItems: 'center', height: 200 }, selectedGlass == 1 && { borderColor: "green" }]}>
                    <Image source={require('../../assets/img/level6/game1/saucer.png')} style={{ width: 80, height: 50 }} />
                </TouchableOpacity>
            </View>
            <View style={[{ width: 200, height: '100%', justifyContent: 'flex-end' }]}>
                <View style={[styles.block, { bottom: 0, right: 0 }]}>
                    {arr[1].map((elm, i) => {
                        return <View style={{ padding: 10 }} key={i}>
                            {elm.icon}
                        </View>
                    })}
                </View>
                <TouchableOpacity onPress={() => SelectGlass(2)} style={[{ left: -40, position: 'absolute', justifyContent: 'center', alignItems: 'center', height: 120 },]}>
                    <Image source={require('../../assets/img/level6/game1/saucer.png')} style={{ width: 80, height: 50 }} />
                </TouchableOpacity>
            </View>
        </View>
        {
            apple.map((elm, i) => {
                if (!elm.active)
                    return <TouchableOpacity
                        disabled={disable}
                        onPress={() => Game(elm, i)} key={i} style={{ position: 'absolute', left: position[i]?.x, top: position[i]?.y }} >
                        {elm.icon}
                    </TouchableOpacity>
            })
        }
    </LevelWrapper >
}

const styles = StyleSheet.create({
    button: {
        width: 140,
        height: 140,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#FF6F1780",
        backgroundColor: '#FFF'
    },
    block: {
        position: 'absolute',
        flexDirection: 'row',
        width: 150,
        flexWrap: 'wrap',
    }
})
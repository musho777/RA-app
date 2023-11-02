import { Dimensions, Image, StyleSheet, TouchableOpacity } from "react-native"
import { LevelWrapper } from "../../components/LevelWrapper"
import { useEffect, useState } from "react"
import { GetRandomItemsFromArray } from "../../components/Funtion/getRandomItemsFromArray"
import Sound from "react-native-sound"
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Level2_1 = ({ navigation }) => {
    let w = windowWidth - 100
    let h = windowHeight - 100
    const glass = [
        { icon: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/glassyellow2.png')} />, id: 2, type: 'yellow' },
        { icon: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/glasspink3.png')} />, id: 3, type: 'pink' },
        { icon: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/glassyellow4.png')} />, id: 4, type: 'yellow' },
        { icon: <Image style={{ width: 100, height: 100 }} source={require('../../assets/img/glassblue5.png')} />, id: 5, type: 'blue' },
    ]

    const pencil = [
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/yellowpencil.png')} />, id: 1, type: 'yellow' },
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/pinkpencil.png')} />, id: 2, type: 'pink' },
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/bluepencil.png')} />, id: 3, type: 'blue' },
    ]

    const position = [
        { x: 0, y: 104 },
        { x: 26, y: h - 40 },
        { x: 84, y: h - 79 },
        { x: 232, y: h - 20 },
        { x: 368, y: 187 },
        { x: 458, y: 96 },
        { x: 578, y: 66 },
        { x: w - 50, y: 51 },
        { x: w - 70, y: 23 },
        { x: 356, y: 53 },
        { x: 256, y: 53 },
        { x: 296, y: 83 },
        { x: 0, y: 13 },
        { x: 286, y: 13 },
        { x: 340, y: 9 },
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
    const sound = new Sound('game21.mp3', Sound.MAIN_BUNDLE,
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
    const [completid, setCompletid] = useState([])
    const [selectedGlass, setSelectedGlass] = useState([])
    const [selectedPencil, setSelectedPencil] = useState([])
    const [activeGlass, setActiveGlass] = useState()
    const [firts, setFirst] = useState([])

    function addItemNTimes(arr, item, n) {
        for (let i = 0; i < n; i++) {
            item.active = false
            item.id = Math.random()
            arr.push(item);
        }
        return arr
    }

    const SelectGlass = (i) => {
        let item = selectedGlass[i]
        setActiveGlass(item)
    }

    const Game = (e, i) => {
        let temp = [...firts]
        let item = [...completid]
        if (activeGlass?.type == e?.type) {
            if (!firts.includes(i)) {
                if (activeGlass.id != temp.length) {
                    console.log(firts.includes(i))
                    temp.push(i)
                }
                if (activeGlass.id == temp.length) {
                    item.push(e.type)
                    setCompletid(item)
                    temp = []
                    setActiveGlass('')
                }
            }
        }
        else {
            temp = []
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 5000);
        }
        setFirst(temp)
    }


    useEffect(() => {
        let item = GetRandomItemsFromArray(glass, 2)
        if (item[0].id == 2 && item[1].id == 4) {
            item[0] = glass[1]
        }
        else if (item[0].id == 4 && item[1].id == 2) {
            item[0] = glass[3]
        }
        setSelectedGlass(item)

        let blueCount = 0
        let pinkCount = 0
        let yellowCount = 0
        if (item[0].type == 'yellow') {
            yellowCount = item[0].id + 1
        }
        else if (item[0].type == 'pink') {
            pinkCount = item[0].id + 1
        }
        else if (item[0].type == 'blue') {
            blueCount = item[0].id + 1
        }

        if (item[1].type == 'yellow') {
            yellowCount = item[1].id + 1
        }
        else if (item[1].type == 'pink') {
            pinkCount = item[1].id + 1

        }
        else if (item[1].type == 'blue') {
            blueCount = item[1].id + 1
        }

        if (blueCount == 0) {
            blueCount = 3
        }
        if (yellowCount == 0) {
            yellowCount = 3
        }
        if (pinkCount == 0) {
            pinkCount = 3
        }
        let a = addItemNTimes([], pencil[0], yellowCount)
        let b = addItemNTimes([], pencil[1], pinkCount)
        let c = addItemNTimes([], pencil[2], blueCount)
        let combinedArray = a.concat(b, c);
        setSelectedPencil(combinedArray)
    }, [])



    useEffect(() => {
        if (completid.length == 2) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                sound.stop()
                navigation.navigate('Level2_2')
                musicSuccess.stop()
            }, 2000);
        }
    }, [completid])

    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
        {!completid.includes(selectedGlass[0]?.type) && <TouchableOpacity onPress={() => SelectGlass(0)} style={[styles.button, { position: 'absolute', left: 70, top: 19 }, selectedGlass[0]?.id == activeGlass?.id && { borderColor: 'green' }]}>
            {selectedGlass[0]?.icon}
        </TouchableOpacity>}
        {!completid.includes(selectedGlass[1]?.type) && <TouchableOpacity onPress={() => SelectGlass(1)} style={[styles.button, { position: 'absolute', right: 100, bottom: 19 }, selectedGlass[1]?.id == activeGlass?.id && { borderColor: 'green' }]}>
            {selectedGlass[1]?.icon}
        </TouchableOpacity>}
        {selectedPencil.map((elm, i) => {
            return !completid.includes(elm.type) && <TouchableOpacity onPress={() => Game(elm, i)} key={i} style={[firts.includes(i) && { borderWidth: 1, borderColor: 'green' }, { position: 'absolute', left: position[i]?.x, top: position[i]?.y }]} >
                {elm.icon}
            </TouchableOpacity>
        })}
    </LevelWrapper>
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
    }
})
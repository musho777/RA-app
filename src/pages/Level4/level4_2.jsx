import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { HedgehogSvg, RombSvg, Round, Trapezium, Tringle, VaseBig, VaseSmoll } from '../../assets/svg'
import { useEffect, useState } from 'react'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'
import Sound from 'react-native-sound'

export const Level4_2 = ({ navigation }) => {
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
    const subject = [
        { icon: <Round />, id: 1, active: false },
        { icon: <Round />, id: 1, active: false },
        { icon: <Round />, id: 1, active: false },
        { icon: <Tringle />, id: 2, active: false },
        { icon: <Tringle />, id: 2, active: false },
        { icon: <Tringle />, id: 2, active: false },
        { icon: <HedgehogSvg />, id: 3, active: false },
        { icon: <HedgehogSvg />, id: 3, active: false },
        { icon: <HedgehogSvg />, id: 3, active: false },
        { icon: <Trapezium />, id: 4, active: false },
        { icon: <Trapezium />, id: 4, active: false },
        { icon: <Trapezium />, id: 4, active: false }
    ]
    const answer = [
        { icon: <RombSvg />, id: 5, active: false },
        { icon: <RombSvg />, id: 5, active: false },
        { icon: <RombSvg />, id: 5, active: false },
        { icon: <RombSvg />, id: 5, active: false },
        { icon: <RombSvg />, id: 5, active: false },
    ]
    const [arr, setArr] = useState([])

    const [position, setPosition] = useState([
        { x: 30, y: 80 },
        { x: 175, y: 38 },
        { x: 256, y: 38 },
        { x: 231, y: 106 },
        { x: 358, y: 141 },
        { x: 411, y: 60 },
        { x: 424, y: 141 },
        { x: 427, y: 215 },
        { x: 486, y: 56 },
        { x: 5, y: 22 },
        { x: 589, y: 167 },
        { x: 241, y: 15 },
        { x: 300, y: 10 },
    ])

    useEffect(() => {
        const randomNum = Math.floor(Math.random() * 4) + 3
        let arr1 = GetRandomItemsFromArray(subject, randomNum)
        const randomNum1 = Math.floor(Math.random() * 3) + 2
        let arr2 = GetRandomItemsFromArray(answer, randomNum1)
        let item = GetRandomItemsFromArray(position, position.length)
        setPosition(item)
        let combain = arr1.concat(arr2)
        setArr(combain)
    }, [])


    const [selectedVas, setSelectedVas] = useState(null)
    const [count, setCount] = useState(0)


    const Game = (elm, i) => {
        let item = [...arr]
        if (selectedVas == 1 && elm.id != 5) {
            setCount(count + 1)
            item[i].active = true
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 1000);
        }
        else if (selectedVas == 1 && elm.id == 5) {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);
            item.map((elm, i) => {
                setCount(0)
                elm.active = false
                setTimeout(() => {
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    musicSuccess.stop()
                }, 1000);
            })
        }
        if (selectedVas == 2 && elm.id == 5) {
            setCount(count + 1)
            item[i].active = true
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 1000);

        }
        else if (selectedVas == 2 && elm.id != 5) {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);
            item.map((elm, i) => {
                setCount(0)
                elm.active = false
            })
        }
        setArr(item)
    }

    useEffect(() => {
        if (count == arr.length && count > 0) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                navigation.navigate('Level4_3')
                musicSuccess.stop()
            }, 2000);
        }
    }, [count])


    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
        {arr.map((elm, i) => {
            if (!elm.active) {
                return <TouchableOpacity onPress={() => Game(elm, i)} key={i} style={{ position: 'absolute', left: position[i].x, top: position[i].y }}>
                    {elm.icon}
                </TouchableOpacity>
            }
        })}
        <View style={styles.boxWrapper}>
            <TouchableOpacity onPress={() => setSelectedVas(1)} style={[styles.box, { width: 150, height: 150 }, selectedVas == 1 && { borderColor: 'red' }]}>
                <VaseBig />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedVas(2)} style={[styles.box, { width: 125, height: 125 }, selectedVas == 2 && { borderColor: 'red' }]}>
                <VaseSmoll />
            </TouchableOpacity>
        </View>
    </LevelWrapper>
}
const styles = StyleSheet.create({
    boxWrapper: {
        flexDirection: "row",
        height: '100%',
        alignItems: 'flex-end'
    },
    box: {
        borderColor: 'rgba(153, 204, 51, 0.4)',
        borderWidth: 3,
        height: 230,
        width: 235,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: 'white',
        marginHorizontal: 10,

    }
})
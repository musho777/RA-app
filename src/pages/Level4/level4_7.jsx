import { Image, View } from 'react-native'
import { ImgButton } from '../../components/ImgButton'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'
import Sound from 'react-native-sound'

export const Level4_7 = () => {
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
    const [arr, setArr] = useState([
        [
            [
                { icon: <Image source={require('../../assets/img/level4/game7/cup.png')} style={{ width: 50, height: 50 }} />, id: 1, active: false, i: 0 },
                { icon: <Image source={require('../../assets/img/level4/game7/pillow.png')} style={{ width: 50, height: 50 }} />, id: 3, active: false, i: 1 },
                { icon: <Image source={require('../../assets/img/level4/game7/closet.png')} style={{ width: 50, height: 50 }} />, id: 5, active: false, i: 2 },
                { icon: <Image source={require('../../assets/img/level4/game7/tassel.png')} style={{ width: 50, height: 50 }} />, id: 7, active: false, i: 3 },
            ],
            [
                { icon: <Image source={require('../../assets/img/level4/game7/kettle.png')} style={{ width: 50, height: 50 }} />, id: 2, active: false, i: 0 },
                { icon: <Image source={require('../../assets/img/level4/game7/bed.png')} style={{ width: 50, height: 50 }} />, id: 4, active: false, i: 1 },
                { icon: <Image source={require('../../assets/img/level4/game7/table.png')} style={{ width: 50, height: 50 }} />, id: 6, active: false, i: 2 },
                { icon: <Image source={require('../../assets/img/level4/game7/paints.png')} style={{ width: 50, height: 50 }} />, id: 8, active: false, i: 3 },
            ]
        ]
    ])
    const [activeGame, setActiveGame] = useState([
        [],
        [],
    ])
    const [show, setShow] = useState([false, false, false, false])
    const [show1, setShow1] = useState([false, false, false, false])

    const [value, setValue] = useState([
        { value1: '', value2: '' },
        { value1: '', value2: '' },
        { value1: '', value2: '' },
        { value1: '', value2: '' },
    ])
    useEffect(() => {
        let item = []
        let arr1 = GetRandomItemsFromArray(arr[0][0], 4)
        let arr2 = GetRandomItemsFromArray(arr[0][1], 4)
        setActiveGame([arr1, arr2])
    }, [])
    const Game = (i, j, id, e) => {
        let item = [...activeGame]
        let temp = [...value]
        let item1 = [...show]
        let item2 = [...show1]

        item[j].map((elm, i) => {
            elm.active = true
        })
        if (j == 0) {
            temp[e].value1 = id
        }
        if (j == 1) {
            temp[e].value2 = id
        }
        item[j][i].active = true

        if (temp[e].value1 != '' && temp[e].value2 != '') {
            if (temp[e].value1 + 1 == temp[e].value2) {
                const isLargeNumber = (element) => element.id == temp[e].value1;
                const isLargeNumber1 = (element) => element.id == temp[e].value2;
                let i1 = item[0].findIndex(isLargeNumber)
                let i2 = item[1].findIndex(isLargeNumber1)
                item1[i1] = true
                item2[i2] = true
            }
            else {
                setTimeout(() => {
                    music.play();
                }, 100);
                setTimeout(() => {
                    music.stop()
                }, 1000);
                item1.map((elm, i) => {
                    elm = false
                })
                item2.map((elm, i) => {
                    elm = false
                })
                temp.map((elm, i) => {
                    elm.value1 = false
                    elm.value2 = false
                })
            }
        }
        setValue(temp)
        setActiveGame(item)
        setShow(item1)
        setShow1(item2)
    }
    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')}>
        <View style={{ height: '100%', justifyContent: "center" }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 150, marginVertical: 10 }}>
                {activeGame[0]?.map((elm, i) => {
                    if (!show[i]) {
                        return <ImgButton onPress={() => Game(i, 0, elm.id, elm.i)} key={i} svg={elm.icon} />
                    }
                    else {
                        return <View key={i} style={{
                            width: 70, height: 70, borderColor: 'rgba(255, 111, 23, 0.50)'
                        }}>
                        </View>
                    }
                })}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 150, marginVertical: 10 }}>
                {activeGame[1]?.map((elm, i) => {
                    if (!show1[i]) {
                        return <ImgButton onPress={() => Game(i, 1, elm.id, elm.i)} key={i} svg={elm.icon} />
                    }
                    else {
                        return <View key={i} style={{
                            width: 70, height: 70, borderColor: 'rgba(255, 111, 23, 0.50)'
                        }}>
                        </View>
                    }
                })}
            </View>
        </View>
    </LevelWrapper >
}
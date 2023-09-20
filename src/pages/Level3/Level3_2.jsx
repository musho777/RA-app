import { useEffect, useState } from 'react'
import { LevelWrapper } from '../../components/LevelWrapper'
import { Dimensions, Image, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log(windowWidth)
export const Level3_2 = () => {
    const [blue, setBlue] = useState([])
    const [green, setGreen] = useState([])
    const [arr, setArr] = useState([])
    useEffect(() => {
        const randomNum1 = Math.floor(Math.random() * 7) + 1
        const randomNum2 = Math.floor(Math.random() * 7) + 1
        let item1 = []
        let item2 = []
        for (i = 0; i < randomNum1; i++) {
            let randomW = Math.floor(Math.random() * (55 - 25 + 1)) + 25;
            let randomH = Math.floor(Math.random() * (55 - 25 + 1)) + 25;
            // let randomX = Math.floor(Math.random() * windowWidth * 0.7)
            // let randomY = Math.floor(Math.random() * windowHeight * 0.7)
            let randomX = Math.floor(Math.random() * (windowWidth * 0.7 - i * 20)) + 20;
            let randomY = Math.floor(Math.random() * (windowHeight * 0.7 - i * 20)) + 20;
            item1.push({ w: randomW + 20, h: randomW, x: randomX, y: randomY, type: 'blue' })
        }
        for (i = 0; i < randomNum2; i++) {
            let randomW = Math.floor(Math.random() * (55 - 25 + 1)) + 25;
            let randomH = Math.floor(Math.random() * (55 - 25 + 1)) + 25;
            let randomX = Math.floor(Math.random() * (windowHeight * 0.7 - i * 20)) + 20;
            let randomY = Math.floor(Math.random() * (windowHeight * 0.7 - i * 20)) + 20;
            item2.push({ w: randomW, h: randomW, x: randomX, y: randomY, type: 'green' })
        }
        setBlue(item1)
        setGreen(item2)
        const combinedArray = item1.concat(item2);
        setArr(combinedArray)
    }, [])
    return <LevelWrapper
        paddingTop={20}
        img={require('../../assets/img/bglv1.png')}
        img2={require('../../assets/img/33.png')}
    >
        <View style={{ borderWidth: 1, padding: 10, marginTop: -35, height: windowHeight - 55 }}>
            {arr.map((elm, i) => {
                console.log(elm)
                return <View key={i} style={{ position: 'absolute', top: elm.y, left: elm.x }}>
                    {elm.type == 'blue' ?
                        <Image source={require('../../assets/img/circleBlue.png')} style={{ width: elm.w, height: elm.h }} /> :
                        <Image source={require('../../assets/img/circleGreen.png')} style={{ width: elm.w, height: elm.h }} />
                    }
                </View>
            })}
        </View>
    </LevelWrapper>
}
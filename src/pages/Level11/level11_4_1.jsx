import { Dimensions, Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useState } from 'react'
import Sound from 'react-native-sound'

export const Level11_4_1 = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
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
    const [arr, setArr] = useState([
        { icone: <Image style={{ width: 60, height: 80 }} source={require('../../assets/img/level11/game4/кругсветлыйголубой.png')} />, id: 2, },
        { icone: <Image style={{ width: 60, height: 80 }} source={require('../../assets/img/level11/game4/кругтемносиний.png')} />, id: 5, },
    ])
    const [answer, setAnswer] = useState([
        { icone: <Image style={{ width: 40, height: 50 }} source={require('../../assets/img/level11/game4/кругтемносиний.png')} />, show: true },
        { icone: <Image style={{ width: 40, height: 50 }} source={require('../../assets/img/level11/game4/кругтемносиний.png')} />, show: true },
        { icone: <Image style={{ width: 40, height: 50 }} source={require('../../assets/img/level11/game4/кругсветлыйголубой.png')} />, show: true },
        { icone: <Image style={{ width: 40, height: 50 }} source={require('../../assets/img/level11/game4/кругтемносиний.png')} />, show: true },
        { icone: <Image style={{ width: 40, height: 50 }} source={require('../../assets/img/level11/game4/кругтемносиний.png')} />, show: true },
        { icone: <Image style={{ width: 40, height: 50 }} source={require('../../assets/img/level11/game4/кругсветлыйголубой.png')} />, show: true },
        { icone: <Image style={{ width: 40, height: 50 }} source={require('../../assets/img/level11/game4/кругтемносиний.png')} />, show: false },
        { icone: <Image style={{ width: 40, height: 50 }} source={require('../../assets/img/level11/game4/кругтемносиний.png')} />, show: false },
        { icone: <Image style={{ width: 40, height: 50 }} source={require('../../assets/img/level11/game4/кругсветлыйголубой.png')} />, show: false },
        // { icone: <Image style={{ width: 40, height: 50 }} source={require('../../assets/img/level11/game4/кругтемносиний.png')} />, show: false },
    ])
    const [count, setCount] = useState(1)

    const Game = (i) => {
        console.log(count, i == 1)
        let item = [...answer]
        if (count == 1 && i == 1) {
            item[6].show = true
            setCount(count + 1)
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 2000);
        }
        if (count == 2 && i == 1) {
            item[7].show = true
            setCount(count + 1)
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 2000);
        }
        else if (count == 3 && i == 0) {
            item[8].show = true
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                navigation.navigate('Level11_5')
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
        setAnswer(item)
    }


    return <LevelWrapper img2={require('../../assets/img/10.png')} img={require('../../assets/img/10.1.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 0 }}>
                {answer.map((elm, i) => {
                    if (elm.show) {
                        return <ImgButton width={windowWidth / 11} height={windowWidth / 11} disable={true} key={i} svg={elm.icone} />
                    }
                    return <ImgButton width={windowWidth / 11} height={windowWidth / 11} disable={true} key={i} svg={''} />
                })}
            </View>
            <View style={{ width: '100%', borderWidth: 2, borderColor: '#9C3', borderRadius: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 50 }}>
                {arr.map((elm, i) => {
                    if (elm.active) {
                        return <View key={i} style={{ width: 100, height: 100 }}></View>
                    }
                    return <ImgButton width={100} height={100} onPress={() => Game(i,)} key={i} svg={elm.icone} />
                })}
            </View>
        </View>
    </LevelWrapper>
}
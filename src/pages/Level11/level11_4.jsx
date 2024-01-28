import { Dimensions, Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

export const Level11_4 = ({ navigation }) => {
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
        { icone: <Image style={{ width: windowWidth / 17, height: windowWidth / 12, }} source={require('../../assets/img/level11/game4/полумесяцзеленый.png')} />, id: 2, },
        { icone: <Image style={{ width: windowWidth / 17, height: windowWidth / 12, }} source={require('../../assets/img/level11/game4/сердцезеленое.png')} />, id: 5, },
        { icone: <Image style={{ width: windowWidth / 17, height: windowWidth / 12, }} source={require('../../assets/img/level11/game4/полумесяцжелтый.png')} />, id: 3, },
        { icone: <Image style={{ width: windowWidth / 17, height: windowWidth / 12, }} source={require('../../assets/img/level11/game4/сердечкооранж.png')} />, id: 4, },
        { icone: <Image style={{ width: windowWidth / 17, height: windowWidth / 12, }} source={require('../../assets/img/level11/game4/полумесяцоранжевый.png')} />, id: 1, },
        // { icone: <Image style={{ width: 60, height: 80 }} source={require('../../assets/img/level11/game4/6.png')} />, id: 6, active: false },
    ])
    const [answer, setAnswer] = useState([
        { icone: <Image style={{ width: windowWidth / 17, height: windowWidth / 12, }} source={require('../../assets/img/level11/game4/полумесяцоранжевый.png')} />, show: true },
        { icone: <Image style={{ width: windowWidth / 17, height: windowWidth / 12, }} source={require('../../assets/img/level11/game4/сердцезеленое.png')} />, show: true },
        { icone: <Image style={{ width: windowWidth / 17, height: windowWidth / 12, }} source={require('../../assets/img/level11/game4/полумесяцоранжевый.png')} />, show: true },
        { icone: <Image style={{ width: windowWidth / 17, height: windowWidth / 12, }} source={require('../../assets/img/level11/game4/сердцезеленое.png')} />, show: true },
        { icone: <Image style={{ width: windowWidth / 17, height: windowWidth / 12, }} source={require('../../assets/img/level11/game4/полумесяцоранжевый.png')} />, show: false },
        { icone: <Image style={{ width: windowWidth / 17, height: windowWidth / 12, }} source={require('../../assets/img/level11/game4/сердцезеленое.png')} />, show: false },
    ])
    const [count, setCount] = useState(1)

    const Game = (i) => {
        let item = [...answer]
        if (count == 1 && i == 4) {
            item[i].show = true
            setCount(count + 1)
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 2000);
        }
        else if (count == 2 && i == 1) {
            console.log('ssss2')
            item[5].show = true
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                navigation.navigate('Level11_4_1')
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
                        return <ImgButton width={windowWidth / 7} height={windowWidth / 7} disable={true} key={i} svg={elm.icone} />
                    }
                    return <ImgButton width={windowWidth / 7} height={windowWidth / 7} disable={true} key={i} svg={''} />
                })}
            </View>
            <View style={{ width: '100%', borderWidth: 2, borderColor: '#9C3', borderRadius: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 0 }}>
                {arr.map((elm, i) => {
                    if (elm.active) {
                        return <View key={i} style={{ width: windowWidth / 7, height: windowWidth / 7 }}></View>
                    }
                    return <ImgButton width={windowWidth / 7} height={windowWidth / 7} onPress={() => Game(i,)} key={i} svg={elm.icone} />
                })}
            </View>
        </View>
    </LevelWrapper>
}
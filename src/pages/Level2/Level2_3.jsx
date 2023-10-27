import { Dimensions, Image, StyleSheet, View } from "react-native"
import { Input } from "../../components/Input"
import { LevelWrapper } from "../../components/LevelWrapper";
import { Butterfly, Chickens, MushRoom } from "../../assets/svg";
import { NumberButton } from "../../components/NumberBuuton";
import { useEffect, useState } from "react";
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

export const Level2_3 = ({ navigation }) => {
    const [value1, setValue1] = useState('')
    const [disable, setDisable] = useState(false)
    const buuton = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    const [game, setGame] = useState([
        [
            <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/key.png')} key={0} />,
            <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/key.png')} key={1} />,
            <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/key.png')} key={2} />,
            <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/key.png')} key={3} />,
            <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/key.png')} key={4} />,
            <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/key.png')} key={5} />,

        ],
        [
            <Image style={{ width: 110, height: 70 }} source={require('../../assets/img/glasses.png')} key={1} />,
            <Image style={{ width: 110, height: 70 }} source={require('../../assets/img/glasses.png')} key={2} />,
            <Image style={{ width: 110, height: 70 }} source={require('../../assets/img/glasses.png')} key={3} />,
            <Image style={{ width: 110, height: 70 }} source={require('../../assets/img/glasses.png')} key={4} />,
            <Image style={{ width: 110, height: 70 }} source={require('../../assets/img/glasses.png')} key={5} />,
        ],
        [
            <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/comb.png')} key={1} />,
            <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/comb.png')} key={2} />,
            <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/comb.png')} key={3} />,
            <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/comb.png')} key={4} />,
            <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/comb.png')} key={5} />,
            <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/comb.png')} key={6} />,
            <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/comb.png')} key={7} />,

        ]


    ])
    const [activeGame, setActiveGame] = useState([])

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

    const [game1, setGame1] = useState(0)

    useEffect(() => {
        setActiveGame(game[game1])
    }, [game1])

    const Answer = (i) => {
        setValue1(i)
        if (i == activeGame.length) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                if (game1 < 2) {
                    setGame1(game1 + 1)
                    setValue1('')
                }
                else {
                    navigation.navigate('Level2_4')
                }
                musicSuccess.stop()
            }, 2000);
        }
        else {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                setValue1('')
                music.stop()
            }, 2000);
        }
    }


    return <LevelWrapper
        paddingTop={20}
        img={require('../../assets/img/bglv1.png')}
        img2={require('../../assets/img/33.png')}
    >
        <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <View style={{ flexDirection: 'row', marginBottom: 30, justifyContent: 'space-around', width: '80%' }}>
                    {
                        activeGame.map((elm, i) => {
                            return elm
                        })
                    }
                </View>
                {value1 == '' ?
                    <Input value={value1} setValue={(e) => setValue1(e)} /> :
                    <NumberButton disabled={true} number={value1} />
                }
            </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {buuton.map((elm, i) => {
                if (elm != value1)
                    return <NumberButton disabled={disable} key={i} onPress={() => Answer(elm)} number={elm} />
            })}
        </View>
    </LevelWrapper>
}

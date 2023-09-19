import { Dimensions, Image, StyleSheet, View } from "react-native"
import { Input } from "../../components/Input"
import { LevelWrapper } from "../../components/LevelWrapper";
import { Butterfly, Chickens, MushRoom } from "../../assets/svg";
import { NumberButton } from "../../components/NumberBuuton";
import { useEffect, useState } from "react";
import Sound from 'react-native-sound';
import { GetRandomItemsFromArray } from "../../components/Funtion/getRandomItemsFromArray";
Sound.setCategory('Playback');

export const Level3_1 = ({ navigation }) => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [disable, setDisable] = useState(false)
    const buuton = ['0', '1', '2', '3', '4', '5']
    const [christmastrees, setChristmastrees] = useState([
        { icon: <Image style={{ width: 150, height: 100 }} source={require('../../assets/img/Christmastrees0.png')} />, id: 0 },
        { icon: <Image style={{ width: 150, height: 100 }} source={require('../../assets/img/Christmastrees1.png')} />, id: 1 },
        { icon: <Image style={{ width: 150, height: 100 }} source={require('../../assets/img/Christmastrees2.png')} />, id: 2 },
        { icon: <Image style={{ width: 150, height: 100 }} source={require('../../assets/img/Christmastrees3.png')} />, id: 3 },
        { icon: <Image style={{ width: 150, height: 100 }} source={require('../../assets/img/Christmastrees4.png')} />, id: 4 },
        { icon: <Image style={{ width: 150, height: 100 }} source={require('../../assets/img/Christmastrees5.png')} />, id: 5 },
    ])

    const [hedgehogs, setHedgehogs] = useState([
        { icon: <Image style={{ width: 150, height: 100 }} source={require('../../assets/img/Christmastrees0.png')} />, id: 0 },
        { icon: <Image style={{ width: 150, height: 100 }} source={require('../../assets/img/hedgehogs1.png')} />, id: 1 },
        { icon: <Image style={{ width: 150, height: 100 }} source={require('../../assets/img/hedgehogs2.png')} />, id: 2 },
        { icon: <Image style={{ width: 150, height: 100 }} source={require('../../assets/img/hedgehogs3.png')} />, id: 3 },
        { icon: <Image style={{ width: 150, height: 100 }} source={require('../../assets/img/hedgehogs4.png')} />, id: 4 },
        { icon: <Image style={{ width: 150, height: 100 }} source={require('../../assets/img/hedgehogs5.png')} />, id: 5 },


    ])

    const [activeGame, setActiveGame] = useState([])

    const Answer = (e) => {
        if (value1 == '') {
            setValue1(e)
        }
        else {
            setValue2(e)
        }
    }

    useEffect(() => {
        let arr = []
        const randomNum = Math.floor(Math.random() * 2)
        if (randomNum == 0) {
            arr = GetRandomItemsFromArray(christmastrees, 2)
        }
        else {
            arr = GetRandomItemsFromArray(hedgehogs, 2)

        }

        setActiveGame(arr)
    }, [])
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

    useEffect(() => {
        if (value1 != '' && value2 != '') {
            if (value1 != activeGame[0]?.id || value2 != activeGame[1]?.id) {
                setTimeout(() => {
                    setDisable(true)
                    music.play();
                }, 100);
                setTimeout(() => {
                    music.stop()
                }, 5000);
                setTimeout(() => {
                    setValue1('')
                    setValue2("")
                    setDisable(false)
                    setActiveGame([
                        activeGame[1],
                        activeGame[0]
                    ])
                }, 500);
            }
            else {
                setTimeout(() => {
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    // navigation.navigate('Level1_2')
                    musicSuccess.stop()
                }, 2000);
            }
        }
    }, [value1, value2])
    return <LevelWrapper
        paddingTop={20}
        img={require('../../assets/img/bglv1.png')}
        img2={require('../../assets/img/33.png')}
    >
        <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                <View style={{ flexDirection: 'row', marginBottom: 30, justifyContent: 'space-around', width: '80%' }}>
                    {
                        activeGame[0]?.icon
                    }
                </View>
                {value1 == '' ?
                    <Input value={value1} setValue={(e) => setValue1(e)} /> :
                    <NumberButton disabled={true} number={value1} />
                }
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                <View style={{ flexDirection: 'row', marginBottom: 30, justifyContent: 'space-around', width: '80%' }}>
                    {
                        activeGame[1]?.icon
                    }
                </View>
                {value2 == '' ?
                    <Input value={value2} setValue={(e) => setValue2(e)} /> :
                    <NumberButton disabled={true} number={value2} />
                }
            </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {buuton.map((elm, i) => {
                if (elm != value1 && elm != value2)
                    return <NumberButton disabled={disable} key={i} onPress={() => Answer(elm)} number={elm} />
            })}
        </View>
    </LevelWrapper>
}

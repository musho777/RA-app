import { Image, View } from "react-native"
import { Input } from "../../components/Input"
import { LevelWrapper } from "../../components/LevelWrapper";
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
        // { icon: <Image style={{ width: 170, height: 130, }} source={require('../../assets/img/Christmastrees0.png')} />, id: 0 },
        { icon: <Image style={{ width: 200, height: 130, }} source={require('../../assets/img/Christmastrees1.png')} />, id: 1 },
        { icon: <Image style={{ width: 200, height: 130 }} source={require('../../assets/img/Christmastrees2.png')} />, id: 2 },
        { icon: <Image style={{ width: 200, height: 130 }} source={require('../../assets/img/Christmastrees3.png')} />, id: 3 },
        { icon: <Image style={{ width: 200, height: 130 }} source={require('../../assets/img/Christmastrees4.png')} />, id: 4 },
        { icon: <Image style={{ width: 200, height: 130 }} source={require('../../assets/img/Christmastrees5.png')} />, id: 5 },
    ])

    const [hedgehogs, setHedgehogs] = useState([
        // { icon: <Image style={{ width: 200, height: 130 }} source={require('../../assets/img/Christmastrees0.png')} />, id: 0 },
        { icon: <Image style={{ width: 230, height: 160 }} source={require('../../assets/img/hedgehogs1.png')} />, id: 1 },
        { icon: <Image style={{ width: 230, height: 160 }} source={require('../../assets/img/hedgehogs2.png')} />, id: 2 },
        { icon: <Image style={{ width: 230, height: 160 }} source={require('../../assets/img/hedgehogs3.png')} />, id: 3 },
        { icon: <Image style={{ width: 230, height: 160 }} source={require('../../assets/img/hedgehogs4.png')} />, id: 4 },
        { icon: <Image style={{ width: 230, height: 160 }} source={require('../../assets/img/hedgehogs5.png')} />, id: 5 },


    ])

    const [game1, setGame1] = useState(0)

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
        if (game1 == 0) {
            arr = GetRandomItemsFromArray(christmastrees, 2)
        }
        else if (game1 == 1) {
            arr = GetRandomItemsFromArray(christmastrees, 1)
            arr.push(
                { icon: <Image style={{ width: 200, height: 130, }} source={require('../../assets/img/Christmastrees0.png')} />, id: 0 },
            )
        }
        else if (game1 == 2) {
            arr = GetRandomItemsFromArray(hedgehogs, 2)

        }
        else {
            arr = GetRandomItemsFromArray(hedgehogs, 1)
            arr.push(
                { icon: <Image style={{ width: 200, height: 130 }} source={require('../../assets/img/Christmastrees0.png')} />, id: 0 },
            )
        }

        setActiveGame(arr)
    }, [game1])
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
                }, 2000);
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
                    setGame1(game1 + 1)

                    if (game1 === 3) {
                        navigation.navigate('Level3_2')
                    }
                    setValue1('')
                    setValue2('')
                    musicSuccess.stop()
                }, 2000);
            }
        }
    }, [value1, value2])
    return <LevelWrapper
        img={require('../../assets/img/bglv1.png')}
        img2={require('../../assets/img/33.png')}
    >
        <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'space-around', width: '80%' }}>
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
                <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'space-around', width: '80%' }}>
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 100 }}>
            {buuton.map((elm, i) => {
                // if (elm != value1 && elm != value2)
                return <NumberButton disabled={disable} key={i} onPress={() => Answer(elm)} number={elm} />
            })}
        </View>
    </LevelWrapper>
}

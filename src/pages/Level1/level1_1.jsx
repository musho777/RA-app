import { View } from "react-native"
import { Input } from "../../components/Input"
import { LevelWrapper } from "../../components/LevelWrapper";
import { Butterfly, Chickens, MushRoom } from "../../assets/svg";
import { NumberButton } from "../../components/NumberBuuton";
import { useEffect, useState } from "react";
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

export const Level1_1 = ({ navigation }) => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [disable, setDisable] = useState(false)
    const buuton = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    const [game, setGame] = useState([
        [
            {
                icone: [<Butterfly key={0} />, <Butterfly key={1} />, <Butterfly key={2} />],
                count: 3
            },
            {
                icone: [<MushRoom key={0} />, <MushRoom key={1} />, <MushRoom key={2} />, <MushRoom key={3} />, <MushRoom key={4} />],
                count: 5
            }
        ],
        [
            {
                icone: [<Chickens key={1} />, <Chickens key={2} />, <Chickens key={3} />, <Chickens key={4} />, <Chickens key={5} />],
                count: 5
            },
            {
                icone: [<Chickens key={0} />, <Chickens key={1} />, <Chickens key={2} />, <Chickens key={3} />],
                count: 4
            }
        ]

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
        if (game1 <= 1) {
            setActiveGame(game[game1])
        }
        else {
            console.log('2222')
            navigation.navigate('Level1_2')
            sound.stop()
        }
    }, [game1])

    useEffect(() => {
        setTimeout(() => {
            sound.play()
        }, 100);
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
    const sound = new Sound('game11.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });

    useEffect(() => {
        if (value1 != '' && value2 != '') {
            if (value1 != activeGame[0]?.count || value2 != activeGame[1]?.count) {
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
                }, 500);
            }
            else {
                setTimeout(() => {
                    musicSuccess.play();
                }, 100);
                setTimeout(() => {
                    setValue1('')
                    setValue2('')
                    setGame1(game1 + 1)
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
                        activeGame[0]?.icone.map((elm, i) => {
                            return elm
                        })
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
                        activeGame[1]?.icone.map((elm, i) => {
                            return elm
                        })
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
                // if (elm != value1 && elm != value2)
                return <NumberButton disabled={disable} key={i} onPress={() => Answer(elm)} number={elm} />
            })}
        </View>
    </LevelWrapper>
}

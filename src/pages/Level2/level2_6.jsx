import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { Apple, Apricot, Banana, Binoculars, Cheese, Chicken2, Chickens, Duck, Goose, Kettle, Pear, Pot, RedCup, Saucer, Turtle, Wolf, Wolf1 } from '../../assets/svg'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

export const Level2_6 = ({ navigation }) => {
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

    const sound = new Sound('game26.mp3', Sound.MAIN_BUNDLE,
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
    const [disable, setDisable] = useState(false)
    const [game, setGame] = useState([
        {
            icon: [{ icon: <Image key={1} style={{ width: 50, height: 50 }} source={require('../../assets/img/redGlass1.png')} />, id: 1 }, { icon: <Image key={2} style={{ width: 55, height: 40 }} source={require('../../assets/img/Pot.png')} />, id: 2 }, { icon: <Saucer key={3} />, id: 3 }],
            icon2: [{ icon: <Image key={4} style={{ width: 50, height: 50 }} source={require('../../assets/img/kettle.png')} />, id: 1 }, { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/Binoculars.png')} key={5} />, id: 2 }]
        },
        {
            icon: [{ icon: <Chickens key={1} />, id: 1 }, { icon: <Duck key={2} />, id: 2 }, { icon: <Goose key={3} />, id: 3 }],
            icon2: [{ icon: <Image key={4} source={require('../../assets/img/Chicken2.png')} style={{ width: 45, height: 60 }} />, id: 1 }, { icon: <Image source={require('../../assets/img/wolf.png')} style={{ width: 60, height: 40 }} key={5} />, id: 2 }]
        },
        {
            icon: [{ icon: <Apple key={1} />, id: 1 }, { icon: <Pear key={2} />, id: 2 }, { icon: <Image source={require('../../assets/img/banana.png')} style={{ width: 60, height: 40 }} key={3} />, id: 3 }],
            icon2: [{ icon: <Image source={require('../../assets/img/Apricot.png')} style={{ width: 50, height: 50 }} key={4} />, id: 1 }, { icon: <Image style={{ width: 60, height: 40 }} source={require('../../assets/img/Cheese.png')} key={5} />, id: 2 }]
        },

    ])
    const [active, setActive] = useState()
    const [game1, setGame1] = useState(0)
    useEffect(() => {
        console.log(game1, '22')
        setActive(game[game1])
    }, [game1])

    const Play = (id) => {
        if (id != 1) {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 5000);
        }
        else {
            setTimeout(() => {
                musicSuccess.play();
                setDisable(true)
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
                setDisable(false)
                setGame1(game1 + 1)
                if (game1 == 2) {
                    sound.stop()
                    navigation.navigate('Level2_7')
                }
            }, 2000);
        }
    }

    return <LevelWrapper img2={require('../../assets/img/bg5.png')} img={require('../../assets/img/5bg.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 50 }}>
                {active?.icon?.map((elm, i) => {
                    return <View key={i} style={{ marginHorizontal: 10 }}>
                        <ImgButton disable={true} svg={elm?.icon} key={i} border='rgba(178, 176, 213, 0.40)' />
                    </View>
                })}
            </View>
            <View style={{ width: '100%', borderWidth: 2, borderColor: '#B2B0D5', borderRadius: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 50 }}>
                {active?.icon2?.map((elm, i) => {
                    return <View key={i} style={{ marginHorizontal: 10 }}>
                        <ImgButton disable={disable} onPress={() => Play(elm.id)} svg={elm?.icon} border='rgba(178, 176, 213, 0.40)' />
                    </View>
                })

                }
            </View>
        </View>
    </LevelWrapper>
}
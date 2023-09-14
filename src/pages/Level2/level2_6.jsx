import { View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { Apple, Apricot, Banana, Binoculars, Cheese, Chicken2, Chickens, Duck, Goose, Kettle, Pear, Pot, RedCup, Saucer, Turtle, Wolf, Wolf1 } from '../../assets/svg'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

export const Level2_6 = () => {
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
    const [game, setGame] = useState([
        {
            icon: [{ icon: <RedCup key={1} />, id: 1 }, { icon: <Pot key={2} />, id: 2 }, { icon: <Saucer key={3} />, id: 3 }],
            icon2: [{ icon: <Kettle key={1} />, id: 1 }, { icon: <Binoculars key={2} />, id: 2 }]
        },
        {
            icon: [{ icon: <Chickens key={1} />, id: 1 }, { icon: <Duck key={2} />, id: 2 }, { icon: <Goose key={3} />, id: 3 }],
            icon2: [{ icon: <Chicken2 key={2} />, id: 2 }, { icon: <Wolf1 key={1} />, id: 1 }]
        },
        {
            icon: [{ icon: <Apple key={1} />, id: 1 }, { icon: <Pear key={2} />, id: 2 }, { icon: <Banana key={3} />, id: 3 }],
            icon2: [{ icon: <Apricot key={1} />, id: 1 }, { icon: <Cheese key={2} />, id: 2 }]
        },

    ])
    const [active, setActive] = useState()
    useEffect(() => {
        const randomZeroOrOne = Math.floor(Math.random() * 3);
        setActive(game[randomZeroOrOne])
    }, [])

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
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 5000);
        }
    }

    return <LevelWrapper img2={require('../../assets/img/bg5.png')} img={require('../../assets/img/5bg.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 50 }}>
                {active?.icon?.map((elm, i) => {
                    return <View style={{ marginHorizontal: 10 }}>
                        <ImgButton disable={true} svg={elm?.icon} key={i} border='rgba(178, 176, 213, 0.40)' />
                    </View>
                })}
            </View>
            <View style={{ width: '100%', borderWidth: 2, borderColor: '#B2B0D5', borderRadius: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 50 }}>
                {active?.icon2?.map((elm, i) => {
                    return <View style={{ marginHorizontal: 10 }}>
                        <ImgButton onPress={() => Play(elm.id)} svg={elm?.icon} border='rgba(178, 176, 213, 0.40)' />
                    </View>
                })

                }
            </View>
        </View>
    </LevelWrapper>
}
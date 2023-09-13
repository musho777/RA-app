import { Dimensions, StyleSheet, View } from "react-native"
import { Input } from "../../components/Input"
import { LevelWrapper } from "../../components/LevelWrapper";
import { Butterfly, MushRoom } from "../../assets/svg";
import { NumberButton } from "../../components/NumberBuuton";
import { useEffect, useState } from "react";
import Sound from 'react-native-sound';
Sound.setCategory('Playback');
const windowWidth = Dimensions.get('window').width;

export const Level1_1 = () => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    const buuton = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

    const Answer = (e) => {
        if (value1 == '') {
            setValue1(e)
        }
        else {
            setValue2(e)
        }
    }

    const music = new Sound('ding.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
            console.log('duration in seconds: ');
        });

    useEffect(() => {
        if (value1 != '' && value2 != '') {
            if (value1 != 3 || value2 != 5) {
                // music.play()
                setTimeout(() => {

                    music.play();
                }, 100);
                setTimeout(() => {
                    music.stop()
                }, 5000);
                setTimeout(() => {
                    setValue1('')
                    setValue2("")
                }, 500);

            }
        }
    }, [value1, value2])

    return <LevelWrapper
        paddingTop={20}
        img={require('../../assets/img/bglv1.png')}
        img2={require('../../assets/img/33.png')}
    >
        <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: windowWidth - 40 }}>
                <View style={{ flexDirection: 'row', marginBottom: 30, justifyContent: 'space-around', width: windowWidth - 40 }}>
                    <Butterfly />
                    <Butterfly />
                    <Butterfly />
                </View>
                {value1 == '' ?
                    <Input value={value1} setValue={(e) => setValue1(e)} /> :
                    <NumberButton disabled={true} number={value1} />
                }
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: windowWidth - 40, }}>
                <View style={{ flexDirection: 'row', marginBottom: 30, justifyContent: 'space-around', width: windowWidth - 40 }}>
                    <MushRoom />
                    <MushRoom />
                    <MushRoom />
                    <MushRoom />
                    <MushRoom />
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
                    return <NumberButton key={i} onPress={() => Answer(elm)} number={elm} />
            })}
        </View>
    </LevelWrapper>
}

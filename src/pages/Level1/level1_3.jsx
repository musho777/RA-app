import { Dimensions, StyleSheet, View } from "react-native"
import { LevelWrapper } from "../../components/LevelWrapper"
import { Butterfly1, Butterfly2 } from "../../assets/svg"
import { ImgButton } from "../../components/ImgButton";
import { useEffect, useState } from "react";
import Sound from "react-native-sound";

const windowWidth = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Level1_3 = () => {
    const [active, setActive] = useState([
        { value1: '', value2: '' },
        { value1: '', value2: '' },
        { value1: '', value2: '' },
    ])
    const musicSuccess = new Sound('success.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const [activeNumber, setActiveNumber] = useState({ number1: '', number2: '' })
    const [answer, setAnswer] = useState([false, false, false, false, false, false, false])
    const Game = (number) => {
        let item = [...active]
        let tepm = [...answer]
        let item2 = { ...activeNumber }
        for (let i = 0; i < item.length; i++) {
            if (item[i].value1 == '' && number % 2 == 1) {
                item[i].value1 = number
                item2.number1 = number
                break
            }
            else if (item[i].value2 == '' && number % 2 == 0) {
                item[i].value2 = number
                item2.number2 = number
                break
            }
        }
        if ((item2.number1 != '' && item2.number2 != '')) {
            tepm[item2.number1] = true
            tepm[item2.number2] = true
            item2.number2 = ''
            item2.number1 = ''
        }
        setActive(item)
        setAnswer(tepm)
        setActiveNumber(item2)
    }
    useEffect(() => {
        let win = true
        answer.map((elm, i) => {
            if (i !== 0 && !elm) {
                win = false
            }
        })
        if (win) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
            }, 5000);
        }
    }, [answer])
    return (
        <LevelWrapper img2={require('../../assets/img/bg3.png')} img={require('../../assets/img/3bh.png')}>
            <View style={{ flexDirection: 'row', justifyContent: "space-around", paddingHorizontal: 100 }}>
                <View style={styles.block}>
                    {!answer[1] ?
                        <ImgButton onPress={() => Game(1)} svg={<Butterfly1 />} border={activeNumber.number1 == 1 ? 'green' : 'rgba(160, 205, 212, 0.50)'} /> :
                        <View style={{ width: 90, height: 90 }}></View>
                    }
                    {!answer[3] ?
                        <ImgButton onPress={() => Game(3)} svg={<Butterfly1 />} border={activeNumber.number1 == 3 ? 'green' : 'rgba(160, 205, 212, 0.50)'} /> :
                        <View style={{ width: 90, height: 90 }}></View>
                    }
                    {!answer[5] ?
                        <ImgButton onPress={() => Game(5)} svg={<Butterfly1 />} border={activeNumber.number1 == 5 ? 'green' : 'rgba(160, 205, 212, 0.50)'} /> :
                        <View style={{ width: 90, height: 90 }}></View>
                    }
                </View>
                <View style={styles.block}>
                    {!answer[2] ? <ImgButton onPress={() => Game(2)} svg={<Butterfly2 />} border={activeNumber.number2 == 2 ? 'green' : 'rgba(160, 205, 212, 0.50)'} />
                        : <View style={{ width: 90, height: 90 }}></View>
                    }
                    {!answer[4] ?
                        <ImgButton onPress={() => Game(4)} svg={<Butterfly2 />} border={activeNumber.number2 == 4 ? 'green' : 'rgba(160, 205, 212, 0.50)'} /> :
                        <View style={{ width: 90, height: 90 }}></View>
                    }
                    {!answer[6] ?
                        <ImgButton onPress={() => Game(6)} svg={<Butterfly2 />} border={activeNumber.number2 == 6 ? 'green' : 'rgba(160, 205, 212, 0.50)'} /> :
                        <View style={{ width: 90, height: 90 }}></View>
                    }
                </View>
            </View>
        </LevelWrapper>
    )
}

const styles = StyleSheet.create({
    block: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: windowWidth - 80
    }
})
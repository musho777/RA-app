import { Image, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'
import Sound from 'react-native-sound'

export const Level3_8 = () => {
    const [win, setWin] = useState(false)
    const [image, setImage] = useState({
        proble: <Image source={require('../../assets/img/t-shirt.png')} style={{ width: 100, height: 100 }} />,
        icon: [
            { icon: <Image source={require('../../assets/img/t-shirt1.png')} style={{ width: 100, height: 100 }} />, id: 1 },
            { icon: <Image source={require('../../assets/img/t-shirt2.png')} style={{ width: 100, height: 100 }} />, id: 2 },
            { icon: <Image source={require('../../assets/img/t-shirt3.png')} style={{ width: 100, height: 100 }} />, id: 3 },
        ],
        solution: <Image source={require('../../assets/img/t-shirtfull.png')} style={{ width: 200, height: 250 }} />
    })
    const [image1, setImage1] = useState({
        proble: <Image source={require('../../assets/img/poloptentsebeach1.png')} style={{ width: 100, height: 100 }} />,
        icon: [
            { icon: <Image source={require('../../assets/img/poloptentsebeach2.png')} style={{ width: 100, height: 100 }} />, id: 1 },
            { icon: <Image source={require('../../assets/img/poloptentsebeach3.png')} style={{ width: 100, height: 100 }} />, id: 2 },
            { icon: <Image source={require('../../assets/img/poloptentsebeach4.png')} style={{ width: 100, height: 100 }} />, id: 3 },
        ],
        solution: <Image source={require('../../assets/img/poloptentsebeachFull.png')} style={{ width: 200, height: 250 }} />
    })

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

    const [arr, setArr] = useState()
    useEffect(() => {
        let item = {}
        const randomNum = Math.floor(Math.random() * 2)

        if (randomNum) {

            item = { ...image1 }
        }
        else {
            item = { ...image }
        }
        let arr1 = GetRandomItemsFromArray(item.icon, 3)
        item.icon = arr1
        setArr(item)
    }, [])
    const Game = (id) => {
        if (id == 3) {
            setWin(true)
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                // navigation.navigate('Level1_2')
                setWin(false)
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
    }
    return <LevelWrapper img2={require('../../assets/img/bg5.png')} img={require('../../assets/img/5bg.png')} jC='center'>

        {win ?
            <View style={{ alignItems: 'center' }}>
                {arr?.solution}
            </View> :
            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {arr?.proble}
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 40 }}>
                    {arr?.icon?.map((elm, i) => {
                        console.log('11')
                        return <TouchableOpacity onPress={() => Game(elm.id)} key={i}>
                            {elm?.icon}
                        </TouchableOpacity>
                    })}
                </View>
            </View>
        }
    </LevelWrapper>
}
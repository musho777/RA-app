import { Dimensions, StyleSheet, View } from "react-native"
import { LevelWrapper } from "../../components/LevelWrapper";
import { ImgButton } from "../../components/ImgButton";
import { Airplane, Car, Caterpillar, Hare, Horse, Snail, Turtle } from "../../assets/svg";
import { Input } from "../../components/Input";
import { NumberButton } from "../../components/NumberBuuton";

const windowWidth = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Level1_2 = () => {

    return (
        <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} jC="center">
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <ImgButton svg={<Caterpillar />} />
                <ImgButton svg={<Snail />} />
                <ImgButton svg={<Turtle />} />
                <ImgButton svg={<Airplane />} />
                <ImgButton svg={<Car />} />
                <ImgButton svg={<Hare />} />
                <ImgButton svg={<Horse />} />
            </View>
        </LevelWrapper>
    )
}
const styles = StyleSheet.create({
});
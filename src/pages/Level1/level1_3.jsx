import { Dimensions, StyleSheet, View } from "react-native"
import { LevelWrapper } from "../../components/LevelWrapper"
import { Butterfly1, Butterfly2 } from "../../assets/svg"
import { ImgButton } from "../../components/ImgButton";

const windowWidth = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Level1_3 = () => {
    return (
        <LevelWrapper img2={require('../../assets/img/bg3.png')} img={require('../../assets/img/3bh.png')}>
            <View style={{ flexDirection: 'row', justifyContent: "space-around", paddingHorizontal: 100 }}>
                <View style={styles.block}>
                    <ImgButton svg={<Butterfly1 />} border={'rgba(160, 205, 212, 0.50)'} />
                    <ImgButton svg={<Butterfly1 />} border={'rgba(160, 205, 212, 0.50)'} />
                    <ImgButton svg={<Butterfly1 />} border={'rgba(160, 205, 212, 0.50)'} />
                </View>
                <View style={styles.block}>
                    <ImgButton svg={<Butterfly2 />} border={'rgba(160, 205, 212, 0.50)'} />
                    <ImgButton svg={<Butterfly2 />} border={'rgba(160, 205, 212, 0.50)'} />
                    <ImgButton svg={<Butterfly2 />} border={'rgba(160, 205, 212, 0.50)'} />
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
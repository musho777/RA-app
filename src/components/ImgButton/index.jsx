import { StyleSheet, Text, TouchableOpacity } from "react-native"

export const ImgButton = ({ svg, border = 'rgba(153, 204, 51, 0.40)', onPress, big }) => {
    return <TouchableOpacity onPress={onPress} style={[styles.button, { borderColor: border }, big && { width: 300, height: 300 }]}>
        {svg}
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        width: 90,
        height: 90,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 4,
        borderColor: "rgba(153, 204, 51, 0.40)",
        backgroundColor: '#FFF'
    }
})
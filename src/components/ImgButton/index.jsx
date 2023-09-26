import { StyleSheet, TouchableOpacity } from "react-native"

export const ImgButton = ({ width = 90, height = 90, svg, border = 'rgba(153, 204, 51, 0.40)', onPress, big, disable, borderRadius = 15 }) => {
    return <TouchableOpacity disabled={disable} onPress={onPress} style={[styles.button, { borderColor: border, borderRadius: borderRadius, width: width, height: height }, big && { width: 300, height: 300, borderRadius: 40 }]}>
        {svg}
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: "rgba(153, 204, 51, 0.40)",
        backgroundColor: '#FFF'
    }
})
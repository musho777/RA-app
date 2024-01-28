import { StyleSheet, Text, TouchableOpacity } from "react-native"

export const NumberButton = ({ number, onPress, disabled, bg = '#FF7575', bc = 'rgba(255, 117, 117, 0.40)', height = 55 }) => {
    return <TouchableOpacity style={[styles.button, { backgroundColor: bg, borderColor: bc, width: height, height: height }]} disabled={disabled} onPress={onPress}>
        <Text style={[styles.text, { fontSize: height - 20 }]}>{number}</Text>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    button: {
        borderWidth: 4,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        color: '#fff',
        fontFamily: 'Pacifico-Regular',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -18
    }
});
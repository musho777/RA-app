import { StyleSheet, Text, TouchableOpacity } from "react-native"

export const NumberButton = ({ number, onPress, disabled, bg = '#FF7575', bc = 'rgba(255, 117, 117, 0.40)' }) => {
    return <TouchableOpacity style={[styles.button, { backgroundColor: bg, borderColor: bc }]} disabled={disabled} onPress={onPress}>
        <Text style={styles.text}>{number}</Text>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    button: {
        // backgroundColor: "#FF7575",
        borderWidth: 4,
        borderRadius: 15,
        // borderColor: 'rgba(255, 117, 117, 0.40)',
        width: 55,
        height: 55,
    },
    text: {
        color: '#fff',
        fontSize: 35,
        fontFamily: 'Pacifico-Regular',
        textAlign: 'center',
        marginTop: -17
    }
});
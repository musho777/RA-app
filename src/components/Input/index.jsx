import { View, TextInput, StyleSheet } from "react-native"

export const Input = ({ value, setValue }) => {
    return <TextInput
        editable={false}
        onChangeText={(e) => setValue(e)}
        value={value}
        style={[
            styles.Input,
            { color: 'black', },
            { color: 'black', },
        ]}
    >

    </TextInput>
}
const styles = StyleSheet.create({
    Input: {
        width: 180,
        height: 50,
        flexShrink: 0,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: 'rgba(255, 117, 117, 0.40)',
        backgroundColor: '#FFF',
        fontSize: 15,
        textAlign: 'center'

    }
})
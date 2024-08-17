import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

const _layout = () => {
  return (
    <View style={StyleSheet.container}>
        <Text>Hello Mumbai</Text>
        <StatusBar style="auto"/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default _layout
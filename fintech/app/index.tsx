import { useAssets } from "expo-asset"
import { StyleSheet } from "react-native"
import { View } from "react-native-reanimated/lib/typescript/Animated"

const Page = ()=>{
    const [assets] = useAssets([require('../assets/fonts/SpaceMono-Regular.ttf')])

    return (
        <View>
            {
                assets && (
                    <Video 
                    isMuted
                    isLooping shouldPlay
                    source={{uri: assets[0].uri}} style={{width: '100%', height:'100%'}} />
                )
            }

            <View>
                <Text style={{fontSize: 20 }}>
                    Welcome to app

                </Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
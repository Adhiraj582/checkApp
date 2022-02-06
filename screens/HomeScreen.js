import * as React from 'react';
import { View, Text,Image, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) =>{

    return (
      <View>
        <Image style={styles.homeScreenIMG} 
        source={require('./nightBG.png')}></Image>

        <TouchableOpacity style={styles.hmButton}
            onPress={navigation.navigate("notebook")}>
            <Text style={{fontSize:30}}>Next Screen</Text>
        </TouchableOpacity>

      </View>
    );

}


const styles = StyleSheet.create({
    homeScreenIMG:{
        position: 'relative',
        top: 100,
        backgroundColor: 'black',
    },
    hmButton:{
        justifyContent: 'center',
        width:170,
        top: 120,
        left: 130,
        borderColor:"black",
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor:"white",
    }
})
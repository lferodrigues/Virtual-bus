import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

const save = () => {
  Alert.alert('Salva no banco de dados.... ;)');
};
const proximo = () => {
  Alert.alert('Avança para a proximo.... ;)');
};
const anterior = () => {
  Alert.alert('volta.... ;)');
};
export default class Onibus_Virtual extends Component {




  static navigationOptions ={

  headerStyle:{  backgroundColor:'#483D8B'},
  headerTitleStyle:{  color:'#FFFFFF'},
    title:'Anotações'

  }


  render(){
  return(

    <View style={styles.padrao}>

        <View style={styles.inputArea} >
          <Image style={styles.logo}
          source={require('./images/logotipo.png')} />
        </View>

        <KeyboardAvoidingView
        behavior="position"
        style={styles.grade1}>

        <View style={styles.grade1}>
            <ImageBackground source={require('./images/notepadd.png')}
            style={styles.fundo}>
              </ImageBackground>

            </View>

            <View style={styles.grade3}>

                  <TextInput style={styles.entrada}
                  underlineColorAndroid='transparent'
                  multiline
                  numberOfLines={6}
                  placeholder="Insira aqui as anotações" />

                </View>


      <View style={styles.grade2}>


      <TouchableHighlight
          onPress={save}>
          <Image
              style={styles.botao2}
              source={require('./images/save.png')}
              />
        </TouchableHighlight>

      </View>

        </KeyboardAvoidingView>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  padrao:{
    backgroundColor:'#483D8B',
    flex:1,
    flexDirection:'column',

  },

  inputArea:{
    alignSelf:'stretch'
  },

  titulo:{
    marginTop:25,
    fontSize:30,
    color:'#FFFFFF',
    fontWeight:'bold',
    alignSelf:'center'
  },
  logo:{
    paddingTop:10,
    width:null
  },


  grade1:{
    marginTop:-150,
    flex:1,
    flexDirection:'row',
    justifyContent:'center'

  },
  grade2:{
    marginTop:40,

        flexDirection:'row',
    justifyContent:'space-around',



  },
  grade3:{
        marginTop:-600,
        flexDirection:'column',
    justifyContent:'space-around',



  },
  grade4:{
        marginTop:10,
        flexDirection:'column',
    justifyContent:'space-around',
  },
  entrada:{
    alignSelf:'center',

  },



fundo:{

  alignSelf:'center',
alignItems:'center',
width:350,
height:400,


},

  botao2:{
    alignSelf:'flex-end',
  alignItems:'flex-end',
      width:30,
      height:30,
      paddingVertical:10,
      paddingHorizontal:10,



    },



});

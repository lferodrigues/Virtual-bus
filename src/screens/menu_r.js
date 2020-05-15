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
  TouchableHighlight
} from 'react-native';

const carteirinha = () => {
  Alert.alert('tela em contrução.... ;)');
};

const botaoEsqueceuSenha = () => {
  Alert.alert('informar email para envio da nova senha...');
};

export default class Onibus_Virtual extends Component {

  static navigationOptions ={

  headerStyle:{  backgroundColor:'#483D8B'},
  headerTitleStyle:{  color:'#FFFFFF'},
    title:'Área do Representante'

  }
  render(){
  return(

    <View style={styles.padrao}>

        <View style={styles.inputArea} >
          <Image style={styles.logo}
          source={require('./images/logotipo.png')} />
        </View>

          <View style={styles.grade1}>

            <TouchableHighlight
            onPress={()=>this.props.navigation.navigate('c_v') }  >
            <Image
                style={styles.botao1}
                source={require('./images/Perfil_a.png')}
                />

            </TouchableHighlight>

            <TouchableHighlight
            onPress={()=>this.props.navigation.navigate('c_f') }  >
            <Image
                style={styles.botao3}
                source={require('./images/Consulta_Chamada.png')}
                />

            </TouchableHighlight>

            <TouchableHighlight
            onPress={()=>this.props.navigation.navigate('r_c') }  >
            <Image
                style={styles.botao2}
                source={require('./images/R_chamada.png')}
                />

            </TouchableHighlight>


          </View>

          <View style={styles.info}>

          <Text style={styles.text1}> Carteirinha </Text>
          <Text style={styles.text3}> Consulta </Text>
          <Text style={styles.text2}> Lançamento </Text>


          </View>
          <View style={styles.info}>

          <Text style={styles.text1}> Virtual </Text>
          <Text style={styles.text3}>    Frequência </Text>
          <Text style={styles.text2}> Frequência </Text>


          </View>

            <View style={styles.grade2}>

            <TouchableHighlight onPress={carteirinha} >
            <Image
                style={styles.botao3}
                source={require('./images/arquivos.png')}
                />

            </TouchableHighlight>

            <TouchableHighlight   onPress={()=>this.props.navigation.navigate('b_n') } >
            <Image
                style={styles.botao1}
                source={require('./images/notepad.png')}
                />

            </TouchableHighlight>



            <TouchableHighlight
            onPress={()=>this.props.navigation.navigate('Tela_inicial') } >
            <Image
                style={styles.botao2}
                source={require('./images/Sair.png')}
                />

            </TouchableHighlight>

            </View>
            <View style={styles.info}>

            <Text style={styles.text3}> Arquivo </Text>
            <Text style={styles.text1}> Anotações </Text>
            <Text style={styles.text2}>  Sair </Text>

            </View>

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
    marginTop:50,

    flexDirection:'row',
    justifyContent:'space-around'

  },
  grade2:{
    marginTop:110,

    flexDirection:'row',
    justifyContent:'space-around'

  },
  botao1:{

      alignSelf:'flex-start',
      width:70,
      height:70,

      alignItems:'flex-start'

  },
  botao2:{


      alignSelf:'flex-end',
      width:70,
      height:70,
      paddingVertical:10,
      paddingHorizontal:10,
      alignItems:'flex-end'

  },
  botao3:{
    alignSelf:'center',
    width:70,
    height:70,
    paddingVertical:10,
    paddingHorizontal:10,
    alignItems:'center'
  },
  info:{
    flexDirection:'row',
    justifyContent:'space-around'

  },
  text1:{

    alignSelf:'flex-start',
    fontSize:15,
    color:'#FFFFFF',
    fontWeight:'bold',
    textAlign:'center'
},
text2:{
  alignSelf:'flex-end',
  fontSize:15,
  color:'#FFFFFF',
  fontWeight:'bold',
  textAlign:'center'
},
text3:{
  alignSelf:'center',
  fontSize:15,
  color:'#FFFFFF',
  fontWeight:'bold',
  textAlign:'center'
},

});

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
  ImageBackground
} from 'react-native';
import {connect} from 'react-redux';
import * as firebase from 'firebase';

const save = () => {
  Alert.alert('Salva no banco de dados.... ;)');
};
const proximo = () => {
  Alert.alert('Avança para a proximo.... ;)');
};
const anterior = () => {
  Alert.alert('volta.... ;)');
};
 class r_c extends Component {




  static navigationOptions ={

  headerStyle:{  backgroundColor:'#483D8B'},
  headerTitleStyle:{  color:'#FFFFFF'},
    title:'Lançamento de Frequência'

  }


  render(){
  return(

    <View style={styles.padrao}>

        <View style={styles.inputArea} >
          <Image style={styles.logo}
          source={require('./images/logotipo.png')} />
        </View>

        <View style={styles.grade1}>
            <ImageBackground source={require('./images/Chmada.png')}
            style={styles.fundo}>
              </ImageBackground>

                </View>
      <View style={styles.grade2}>

      <TouchableHighlight
          onPress={anterior} >
          <Image
              style={styles.botao1}
              source={require('./images/anterior.png')}
              />
      </TouchableHighlight>

      <TouchableHighlight
          onPress={save}>
          <Image
              style={styles.botao2}
              source={require('./images/save.png')}
              />
        </TouchableHighlight>

      <TouchableHighlight
          onPress={proximo} >
          <Image
              style={styles.botao3}
              source={require('./images/Proximo.png')}
              />
          </TouchableHighlight>

      </View>

          <View style={styles.grade2}>
          </View>

        </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    email:state.userReducer.email
  };

}

const mapDispatchToProps = (dispatch) =>{
  return{
      muda_email:(email) => dispatch({type:'SET_EMAIL',payload:{email}})
  };
}

export default connect(mapStateToProps,mapDispatchToProps) (r_c);

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
    marginTop:230,
    flex:1,
    flexDirection:'row',
    justifyContent:'center'

  },
  grade2:{
    marginTop:180,

        flexDirection:'row',
    justifyContent:'space-around',



  },


  text1:{
    alignSelf:'center',
    fontSize:15,
    color:'black',
    fontWeight:'bold',
    alignItems:'center',

},

fundo:{

  alignSelf:'center',
alignItems:'center',
width:400,
height:500,


},
botao1:{

  alignSelf:'center',
  alignItems:'center',
    width:30,
    height:30,
    paddingVertical:10,
    paddingHorizontal:10,

  },
  botao2:{
    alignSelf:'flex-end',
  alignItems:'flex-end',
      width:30,
      height:30,
      paddingVertical:10,
      paddingHorizontal:10,



    },
    botao3:{
      alignSelf:'flex-start',
    alignItems:'flex-start',
        width:30,
        height:30,
        paddingVertical:10,
        paddingHorizontal:10,



      },


});

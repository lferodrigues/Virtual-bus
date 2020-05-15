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

 class consulta_frequencia extends Component {



  static navigationOptions ={

  headerStyle:{  backgroundColor:'#483D8B'},
  headerTitleStyle:{  color:'#FFFFFF'},
    title:'Consulta Frequência'

  }


  render(){
  return(

    <View style={styles.padrao}>

        <View style={styles.inputArea} >
          <Image style={styles.logo}
          source={require('./images/logotipo.png')} />
        </View>

    <View style={styles.grade1}>
        <ImageBackground source={require('./images/chamada.png')}
        style={styles.fundo}>
          </ImageBackground>

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

export default connect(mapStateToProps,mapDispatchToProps) (consulta_frequencia);

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
    marginTop:30,

    flexDirection:'row',
    justifyContent:'center'

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
width:500,
height:400

}

});

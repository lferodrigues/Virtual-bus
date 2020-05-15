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
import {connect} from 'react-redux';
import * as firebase from 'firebase';

const carteirinha = () => {
  Alert.alert('tela em contrução.... ;)');;
};



 class c_v extends Component {

  constructor(props){
    super(props);
    this.state = {name:'Nome completo'};
}

  static navigationOptions ={

  headerStyle:{  backgroundColor:'#483D8B'},
  headerTitleStyle:{  color:'#FFFFFF'},
    title:'Carteirinha do Estudante'

  }




  render(){
  return(

    <View style={styles.padrao}>

        <View style={styles.inputArea} >
          <Image style={styles.logo}
          source={require('./images/logotipo.png')} />
        </View>

    <View style={styles.grade1}>
    <Text>Oi-{this.props.email}</Text>

          <TouchableHighlight style={styles.botao2}
          onPress={carteirinha} >
            <Image
                style={styles.foto}
                source={require('./images/Perfil.png')}
                />
            </TouchableHighlight>
        </View>

              <View style={styles.grade2}>
                  <Text style={styles.text1}> Nome completo:
                </Text>
            </View>

          <View style={styles.grade2}>
              <Text style={styles.text1}> ______________________________________________________
                  </Text>
              </View>

              <View style={styles.grade2}>
                  <Text style={styles.text1}> CPF:
                </Text>
            </View>
          <View style={styles.grade2}>

              <Text style={styles.text1}> ______________________________________________________
                  </Text>
              </View>

              <View style={styles.grade2}>
                  <Text style={styles.text1}> Faculdade:
                </Text>
            </View>
            <View style={styles.grade2}>

              <Text style={styles.text1}> ______________________________________________________
                  </Text>
              </View>
              <View style={styles.grade2}>
                  <Text style={styles.text1}> Curso:
                </Text>
            </View>
          <View style={styles.grade2}>

              <Text style={styles.text1}> ______________________________________________________
                  </Text>
              </View>

          <View>
            <Text style={styles.text2} >
                  Valida juntamente com documento original com foto.
            </Text>
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

export default connect(mapStateToProps,mapDispatchToProps) (c_v);
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
    marginTop:10,

    flexDirection:'row',
    justifyContent:'center'

  },
  grade2:{
    marginTop:20,

    flexDirection:'row',
    justifyContent:'space-between'

  },
  foto:{

      alignSelf:'center',
      width:70,
      height:70,
      paddingVertical:10,
      paddingHorizontal:10,
      alignItems:'center'

  },
  botao2:{


      alignSelf:'center',
      width:70,
      height:70,
      paddingVertical:10,
      paddingHorizontal:10,
      alignItems:'center'

  },
  info:{
    flexDirection:'row',
    justifyContent:'space-between'

  },
  text1:{
    alignSelf:'center',
    fontSize:15,
    color:'#FFFFFF',
    fontWeight:'bold',
    alignItems:'center',

},
text2:{
  marginTop:25,
  alignSelf:'center',
  fontSize:12,
  color:'#FFFFFF',
  fontWeight:'bold',
  textAlign:'center'
},


});

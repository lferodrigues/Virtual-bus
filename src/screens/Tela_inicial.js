import React, {Component} from 'react';
import {View,Text,Image,Button,StyleSheet,TextInput,Alert} from 'react-native';

export default class Onibus_Virtual extends Component {

  static navigationOptions ={

  headerStyle:{  backgroundColor:'#483D8B'},
  headerTitleStyle:{  color:'#FFFFFF',textAlign:"center",flex:1},
    title:'Onibus Virtual'

  }

  render(){
  return(

    <View style={styles.padrao}>

        <View style={styles.inputArea} >
          <Image style={styles.logo}
          source={require('./images/logotipo.png')} />
        </View>

         <View style={styles.botao1}>

            <Button title="Sou Estudante"
            onPress={()=>this.props.navigation.navigate('login_E') } />

         </View>

         <View style={styles.botao2}>

            <Button title="Sou Representante"
            onPress={()=>this.props.navigation.navigate('login_R') }/>

         </View>

         <View>
          <Image style={styles.bus}
          source={require('./images/Bus.png')} />
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
    marginTop:10,
    fontSize:30,
    color:'#FFFFFF',
    fontWeight:'bold',
    alignSelf:'center'
  },
  logo:{
    paddingTop:10,
    width:null
  },
  botao1:{
    backgroundColor: '#1E90FF',
    marginTop:140,
    width:null,
    alignSelf:'stretch'
  },

  botao2:{
    backgroundColor: '#1E90FF',
    marginTop:25,
    width:null,
    alignSelf:'stretch'
  },
  bus:{
    marginTop:90,
    flexDirection:'column',
    alignSelf:'flex-end'


  }


});

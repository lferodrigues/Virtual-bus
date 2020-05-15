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
  TouchableOpacity
} from 'react-native';
import * as firebase from 'firebase';


export default class Onibus_Virtual extends Component {

  static navigationOptions ={

    headerStyle:{  backgroundColor:'#483D8B'},
    headerTitleStyle:{  color:'#FFFFFF',textAlign:"center",flex:1},
      title:'Esqueci a Senha'

  }

  constructor(props) {
        super(props);
        this.state = {
            email: "",
        };
    }

    senha = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                Alert.alert("O email de redefinição de senha foi enviado.");
            }, (error) => {
                Alert.alert('Atenção.\n Favor insira o email.');
            });
    }

  render(){
  return(

    <View style={styles.padrao}>

        <View style={styles.inputArea} >
          <Image style={styles.logo}
          source={require('./images/logotipo.png')} />
        </View>



  <View style={styles.enquadramento}>

      <TextInput style={styles.entrada}
            underlineColorAndroid='transparent'
                placeholder="Email:"
                  value={this.state.email}
                    onChangeText={(email) => this.setState({email})}
                      keyboardtype="email-address"
                      autoCapitalize="none"
                />
      </View>


          <View>

            <TouchableOpacity style={styles.botao}
                onPress={()=> this.senha(this.state.email)}
            >
            <Text style={styles.fonte} > Recuperar Senha </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity  style={styles.botao1}
          onPress={()=>this.props.navigation.navigate('Tela_inicial')}>
            <View>
              <Text style={styles.fonte}> Voltar ao menu principal
              </Text>
            </View>
          </TouchableOpacity>

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

  bus:{
    marginTop:90,
    flexDirection:'column',
    alignSelf:'flex-end'


  },
  enquadramento:{
    marginTop:40
  },
  entrada:{
    width:300,
    height:40,
    borderColor:'gray',
    borderWidth: 0,
    backgroundColor:'white',
    borderWidth:1,
    marginTop:20,
    alignSelf:'center'

  },

  botao:{
    backgroundColor: '#1E90FF',
    paddingVertical:5,
    paddingHorizontal:20,
    marginTop:40,
    alignItems:'flex-start',
    alignSelf:'flex-start'
  },
  fonte:{
    fontSize:15,
    color:'#FFFFFF',
    fontWeight:'bold',
    alignSelf:'center'
},
botao1:{
  backgroundColor: '#1E90FF',
  paddingVertical:5,
  paddingHorizontal:20,
  marginTop:20,
  alignItems:'flex-start',
  alignSelf:'flex-start'

}


});

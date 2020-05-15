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
import {connect} from 'react-redux';



const botaoPressionado =() => {

};

const botaoEsqueceuSenha = () => {
  Alert.alert('informar email para envio da nova senha...');
};

class login_E extends Component {

  static navigationOptions ={

  headerStyle:{  backgroundColor:'#483D8B'},
  headerTitleStyle:{  color:'#FFFFFF'},
    title:'Login do Estudante'

  }
  constructor(props){
    super(props)

    this.state = ({
        email:'',
        password:'',
        isAuthenticated: false
    })
  }

    login =  async () => {
    const {email, password} = this.state;

    try{
      const user = await firebase.auth()
      .signInWithEmailAndPassword(this.state.email,this.state.password);

      this.setState({isAuthenticated:true});
      this.props.muda_email(this.state.email);
      this.props.navigation.navigate('menu_e');

    } catch (error){

firebase.auth()
.signInWithEmailAndPassword(this.state.email,this.state.password)
    .then(() =>{ },(error)=>
          {Alert.alert('Atenção: \n Email ou senha invalidos');});
    }
};

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
          onChangeText={(email) => this.setState({email})}
          keyboardtype="email-address"
          autoCapitalize="none"

          />
        </View>

        <View>

          <TextInput secureTextEntry={true}
          style={styles.entrada}
          underlineColorAndroid='transparent'
          placeholder="Senha:"
          onChangeText={(password) => this.setState({password})}

           />

          </View>

          <View>

            <TouchableOpacity style={styles.botao}
              onPress={()=> this.login(this.state.email,this.state.password)}
              >
            <Text style={styles.fonte} > Entrar </Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity onPress={()=>
            this.props.navigation.navigate('esqueci_senha')}>
            <View>
              <Text style={styles.esqueceuSenha}> Esqueceu a Senha
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

export default connect(mapStateToProps,mapDispatchToProps) (login_E);

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
    marginTop:70,
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
    paddingVertical:10,
    paddingHorizontal:40,
    marginTop:20,
    alignItems:'flex-start',
    alignSelf:'flex-start'
  },
  fonte:{
    fontSize:15,
    color:'#FFFFFF',
    fontWeight:'bold',
    alignSelf:'center'
},
esqueceuSenha:{
  marginTop:20,
  color:'white',
  backgroundColor:"transparent",
  textAlign:"right",
  alignItems:'flex-start',
  alignSelf:'flex-start'

}


});

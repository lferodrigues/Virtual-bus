import { createStackNavigator } from 'react-navigation-stack';
import Tela_inicial from'../screens/Tela_inicial';
import login_E from'../screens/login_E';
import login_R from'../screens/login_R';
import menu_e from'../screens/menu_e';
import menu_r from'../screens/menu_r';
import c_v from'../screens/c_v';
import c_f from'../screens/c_f';
import r_c from'../screens/r_c';
import b_n from'../screens/b_n';
import esqueci_senha from'../screens/esqueci_senha';


import firebase from'firebase';
import{firebaseConfig} from'../screens/config';
  firebase.initializeApp(
      firebaseConfig
);



const MainNavigator = createStackNavigator({

  Tela_inicial:{
    screen:Tela_inicial
  },
  login_E:{
    screen:login_E
  },
  login_R:{
    screen:login_R
  },
  menu_e:{
    screen:menu_e
  },
  menu_r:{
    screen:menu_r
  },
  c_v:{
    screen:c_v
  },
  c_f:{
    screen:c_f
  },
  r_c:{
    screen:r_c
  },
  b_n:{
    screen:b_n
  },
  esqueci_senha:{
    screen:esqueci_senha
  }
});

export default MainNavigator;

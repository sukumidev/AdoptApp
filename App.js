import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainMenu from './Pages/MainMenu';
import Adoption from './Pages/Adoption';
import Login from './Pages/Login';
import NewUser from './Pages/NewUser';
import AboutUs from './Pages/AboutUs';
import PetList from './Pages/PetList';
import Pet from './Pages/Pet';

const stackNavigator = createStackNavigator({
  MainMenu:{
    screen: MainMenu,
    navigationOptions:{
      headerShown: false,
      title: "Inicio",
      headerTintColor: '#FF0080',
      headerStyle:{
        backgroundColor: '#30323d'
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'black',
      },
    }
    
  },
  Login:{
    screen: Login
  },
  NewUser:{
    screen: NewUser
  },
  AboutUs:{
    screen: AboutUs
  },
  Adoption:{
    screen: Adoption,
    navigationOptions:{
      title: "Adopción",
      headerTintColor: '#FF0080',
      headerStyle:{
        backgroundColor: '#D4FBF3'
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'black',
      },
    }
  },
  PetList:{
    screen: PetList,
    navigationOptions: {
      headerTitle:"Mascotas",
      headerTintColor: '#FF0080',
      headerStyle:{
        backgroundColor: '#D4FBF3'
      },headerTitleStyle: {
        fontWeight: 'bold',
        color: 'black',
      },
    }
  },
  Pet:{
    screen: Pet,
    navigationOptions: {
      headerTintColor: '#FF0080',
      title: 'Adoptame',
      headerStyle:{
        backgroundColor: '#D4FBF3'
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'black',
      },
    }
  }
},{
  initialRouteName:"Login"
});

const App = createAppContainer(stackNavigator);
export default () => (  
  <App/>
)
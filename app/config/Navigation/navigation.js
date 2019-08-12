import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import {Dimensions, Image, SafeAreaView, Text, TouchableOpacity, View, Alert,} from 'react-native';
import React from 'react'
import {Icon} from 'native-base'


// LOADING SCREEN
// import LoadingScreen from '../../screens/Loading/loading'

// WIZARD ROUTES
import Wizard1 from '../../screens/Wizard/wizard';

// AUTH ROUTES
import SignIn from '../../screens/Auth/Signin';
import SignUp from '../../screens/Auth/Signup'

// MAIN APP ROUTES
import Home from '../../screens/App/Home';
import Add from '../../screens/App/Add';
import Profile from '../../screens/App/Profile';

const { width, height} = Dimensions.get('window');

function getWidth() {
    return width * 0.678;
}

const TabNavigator = createBottomTabNavigator({
    Home: {screen: Home,
        navigationOptions:{
            tabBarIcon:({tintColor})=>{
                return(
                <Icon name="md-home" style={{color: tintColor}}/>
                    )
            },
        }
    },
    Add: {screen: Add,
        navigationOptions:{
            tabBarIcon:({tintColor})=>{
                return(
                <Icon name="md-add" style={{color: tintColor}}/>
                    )
            },
        }
    },
    Profile: {screen: Profile,
        navigationOptions:{
            tabBarIcon:({tintColor})=>{
                return(
                <Icon type="MaterialCommunityIcons" name="account" style={{color: tintColor}}/>
                    )
            },
        }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel:false
    },
  }
  );

const AuthNavigator = createStackNavigator(
    {
        SignIn: { screen: SignIn,
            navigationOptions: () => ({
                headerBackTitle: null
                }), },
        SignUp: { screen: SignUp,
            navigationOptions: () => ({
              }),},
    },
    {
        mode: 'modal',
        initialRouteName: 'SignIn',
        headerMode: 'none',
        cardStyle: { shadowColor: 'transparent'},
        defaultNavigationOptions: {
            gesturesEnabled: true,
        },
    }
);

const WizardNavigator = createStackNavigator(
    {
        Wizard1: { screen: Wizard1,
            navigationOptions: () => ({
                headerBackTitle: null
            }),
        },
    },
    {
        mode: 'card',
        initialRouteName: 'Wizard1',
        headerMode: 'none',
        cardStyle: { shadowColor: 'transparent'},
        defaultNavigationOptions: {
            gesturesEnabled: true,
        },
    }
);


 const AppContainer = createAppContainer(createSwitchNavigator(
     {
       App: TabNavigator,
       Auth: AuthNavigator,
       Wizard: WizardNavigator,
     },
    {
       initialRouteName: 'Wizard',
     }
   ));

export default createAppContainer(AppContainer);
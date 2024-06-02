// App.js
import  React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text,SafeAreaView ,StyleSheet, Dimensions,ScrollView,Image} from 'react-native';

import MyTabs from './pages/tab/Tab';

// import { useState } from 'react';


// const images =[

// 'https://cdn.pixabay.com/photo/2024/05/22/06/46/ai-generated-8779824_640.jpg',
// 'https://cdn.pixabay.com/photo/2024/05/22/16/37/seagull-8781110_640.jpg',
// 'https://cdn.pixabay.com/photo/2024/05/22/06/46/ai-generated-8779824_640.jpg',
// ]
// const WIDTH= Dimensions.get('window').width;
// const HEIGHT =Dimensions.get('window').height;




export default function App() {
  

  
  return (
    
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>


  );
}

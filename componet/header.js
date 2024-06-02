import React, { useState } from 'react';
import { StyleSheet, View,Image ,Text,TextInput} from 'react-native';
import bbbb from '../assets/image/bbbb.jpeg'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const Header = () => {

  const {user,isloding}=useState()

  return (
    <View style={styles.container}>
      <View style={styles.profileMainContainer}>
      <View style={styles.profileContainer}>
        <Image style={styles.imagestyle} source={bbbb} />
        <View>
        <Text style={styles.channelName}>
              Turkish Channel
            </Text>
            <Text style={styles.subtitle}>
              For Breaking News
            </Text>
          
        </View>
      
      </View >
      <FontAwesome name="bookmark-o" size={27} color="white" />
      </View>
        {/* شريط البحث */}
        <View style={styles.searchBarContainer}>
            <TextInput style={styles.textInput} placeholder='Search' />
            <FontAwesome style={styles.searchBtn} name="search" size={24} color="black" />
          
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    paddingTop:40,
    top:40,
    backgroundColor:"green",
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25

  },
  searchBtn:{
    padding:10,
    borderRadius:8,
    backgroundColor:"white"
  },

  searchBarContainer:{
     marginTop:15,
     display:'flex',
     flexDirection:'row',
     gap:10,
     marginBottom:10

  },
  profileContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10,
  
  },

  profileMainContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between"
  },
  textInput:{
    padding:7,
    paddingHorizontal:16,
    backgroundColor:"white",
    borderRadius:8,
    width:'85%',
    fontSize:16
  
    
  },

  imagestyle:{
    height:45,
    width:45,
    borderRadius:99
    
  },
  channelName: {
    color: "white",
    fontSize: 20
  },
  subtitle: {
    color: "white"
  }
})

export default Header;

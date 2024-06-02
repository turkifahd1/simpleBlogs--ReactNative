import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'; 
import Header from '../componet/header';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

export default function News() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      const response = await fetch('https://node-js-simpleblog811.onrender.com/api');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });

    return unsubscribe;
  }, [navigation]);

  const handleDelete = useCallback(async (id) => {
    try {
      const response = await fetch(`https://node-js-simpleblog811.onrender.com/api/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete data');
      }
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
      Alert.alert('Error', 'Failed to delete news.', [{ text: 'OK' }]);
    }
  }, []);

  const handleEdit = useCallback((id) => {
    navigation.navigate('EditNews', { id: id });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <View style={tw`mt-5 p-3 bg-gray-200 rounded-lg`}>
      <TouchableOpacity onPress={() => navigation.navigate('EditNews', { id: item.id } )}>
        <Text style={tw`text-lg font-bold`}>{item.title}</Text>
        <Text>{item.tobic}</Text>
        <Text>{item.place}</Text>
        <Text>{item.createdAt.substring(0, 10)}</Text>
      </TouchableOpacity>
      <View style={tw`flex-row justify-between mt-2`}>
        <TouchableOpacity onPress={() => handleEdit(item.id)} style={tw`p-2 rounded-md bg-blue-500`}>
          <Text style={tw`text-white font-bold`}>تعديل</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)} style={tw`p-2 rounded-md bg-red-500`}>
          <Text style={tw`text-white font-bold`}>حذف</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={tw`flex-1`}>
      <Header />
      <View style={tw`flex-1 p-5 mt-10`}>
        {isLoading ? (
          <Text style={tw`text-center mt-30`}>Loading...</Text>
        ) : data ? (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text style={tw`text-center`}>No news available</Text>
        )}
      </View>
    </View>
  );
}

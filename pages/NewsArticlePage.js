// NewsArticlePage.js
import React, { useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';

import NewsArticleForm from '../componet/NewsArticleForm';

const NewsArticlePage = () => {
  const [formData, setFormData] = useState({
    title: '',
    tobic: '',
    place: ''
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://node-js-simpleblog811.onrender.com/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      Alert.alert('تم إرسال البيانات بنجاح!');
      setFormData({
        title: '',
        tobic: '',
        place: ''
      });
    } catch (error) {
      console.error('Error submitting data:', error);
      Alert.alert('حدثت مشكلة أثناء إرسال البيانات. يرجى المحاولة مرة أخرى!');
    }
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <View style={styles.container}>
    
      <Image
        source={require('../assets/image/bbbb.jpeg')}
        style={styles.image}
      />
      <NewsArticleForm
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </View>
  );
};






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 60,
  },
});

export default NewsArticlePage;

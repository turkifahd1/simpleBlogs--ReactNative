// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';

// export default function EditNews() {
//   const [news, setNews] = useState({ title: '', tobic: '', place: '' });
//   const [isLoading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState('');
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { id } = route.params;

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(`https://node-js-simpleblog811.onrender.com/api/${id}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setNews(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Failed to load news.');
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, [id]);

//   const handleUpdate = async () => {
//     // التحقق من أن جميع الحقول غير فارغة
//     if (!news.title || !news.tobic || !news.place) {
//       Alert.alert('Error', 'Please fill in all fields.', [{ text: 'OK' }]);
//       return;
//     }

//     try {
//       const response = await fetch(`https://node-js-simpleblog811.onrender.com/api/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(news),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to update data');
//       }
//       setSuccessMessage('News updated successfully.');
//       setTimeout(() => {
//         setSuccessMessage('');
//         navigation.goBack();
//       }, 2000);
//     } catch (error) {
//       console.error('Error updating data:', error);
//       setError('Failed to update news. Please make sure you have the necessary permissions and try again later.');
//       // إظهار رسالة خطأ وإعادة المستخدم إلى الصفحة السابقة
//       navigation.goBack();
//     }
    
//   };

//   if (isLoading) return <Text>Loading...</Text>;
  
//   if (error) {
//     // عرض رسالة الخطأ باستخدام Alert
//     Alert.alert('Error', error, [{ text: 'OK' }]);
//     return null;
//   }

//   return (
//     <View style={styles.container}>
//       {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}
//       <Text style={styles.label}>Title</Text>
//       <TextInput
//         style={styles.input}
//         value={news.title}
//         onChangeText={(text) => setNews({ ...news, title: text })}
//       />
//       <Text style={styles.label}>Tobic</Text>
//       <TextInput
//         style={styles.input}
//         value={news.tobic}
//         onChangeText={(text) => setNews({ ...news, tobic: text })}
//       />
//       <Text style={styles.label}>Place</Text>
//       <TextInput
//         style={styles.input}
//         value={news.place}
//         onChangeText={(text) => setNews({ ...news, place: text })}
//       />
//       <TouchableOpacity onPress={handleUpdate} style={styles.button}>
//         <Text style={styles.buttonText}>Update</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   label: {
//     fontSize: 18,
//     marginBottom: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#3498db',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   successMessage: {
//     color: 'green',
//     marginBottom: 10,
//   },
// });










// EditNewsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import EditNewsForm from '../componet/handleAbdate';

const EditNews = ({ route }) => {
  const [id, setId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedTopic, setEditedTopic] = useState('');
  const [editedPlace, setEditedPlace] = useState('');

  useEffect(() => {
    const { id } = route.params;
    setId(id);
    fetchData(id);
  }, [route.params]);

  const fetchData = async (id) => {
    try {
      const response = await fetch(`https://node-js-simpleblog811.onrender.com/api/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setEditedTitle(data.title);
      setEditedTopic(data.tobic);
      setEditedPlace(data.place);
    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert('Error', 'Failed to load news.');
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`https://node-js-simpleblog811.onrender.com/api/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: editedTitle,
          tobic: editedTopic,
          place: editedPlace,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to update data');
      }
      Alert.alert('Success', 'News updated successfully');
    } catch (error) {
      console.error('Error updating data:', error);
      Alert.alert('Error', 'Failed to update data');
    }
  };

  return (
    <View style={styles.container}>
      <EditNewsForm
        editedTitle={editedTitle}
        setEditedTitle={setEditedTitle}
        editedTopic={editedTopic}
        setEditedTopic={setEditedTopic}
        editedPlace={editedPlace}
        setEditedPlace={setEditedPlace}
        handleUpdate={handleUpdate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EditNews;

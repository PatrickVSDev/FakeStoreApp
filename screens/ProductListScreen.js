import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { api } from '../services/api';
import styles from '../styles/ProductListStyles';


export default function ProductListScreen({ navigation }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('/products')
      .then(res => setProdutos(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <FlatList
      data={produtos}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Details', { produto: item })}
        >
          <Image source={{ uri: item.image }} style={styles.imagem} />
          <Text style={styles.titulo}>{item.title}</Text>
          <Text>R$ {item.price}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

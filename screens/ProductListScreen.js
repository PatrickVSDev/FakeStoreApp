import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/ProductListStyles';
import { useEffect, useState } from 'react';
import { api } from '../services/api';

export default function ProductListScreen({ navigation }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('/products')
      .then(res => setProdutos(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={produtos}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Details', { produto: item })}
        >
          <Image source={{ uri: item.image }} style={styles.imagem} />
          <View style={styles.textoContainer}>
            <Text style={styles.titulo}>{item.title}</Text>
            <Text style={styles.preco}>R$ {item.price.toFixed(2)}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

import { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { isFavorite, toggleFavorite } from '../storage/favorites';
import styles from '../styles/ProductDetailStyles';

export default function ProductDetailScreen({ route }) {
  const { produto } = route.params;
  const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    isFavorite(produto.id).then(setFavorito);
  }, []);

  const alternarFavorito = async () => {
    const novoEstado = await toggleFavorite(produto);
    setFavorito(novoEstado);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: produto.image }} style={styles.imagem} />
      <Text style={styles.titulo}>{produto.title}</Text>
      <Text>{produto.description}</Text>
      <Text style={styles.preco}>R$ {produto.price}</Text>
      <Button
        title={favorito ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
        onPress={alternarFavorito}
      />
    </View>
  );
}

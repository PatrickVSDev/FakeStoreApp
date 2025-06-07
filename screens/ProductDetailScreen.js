import { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { isFavorite, toggleFavorite } from '../storage/favorites';

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

const styles = StyleSheet.create({
  container: { padding: 20 },
  imagem: { width: 150, height: 150, alignSelf: 'center' },
  titulo: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  preco: { marginTop: 10, fontSize: 16 },
});

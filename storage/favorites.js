import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITOS_KEY = 'FAVORITOS';

export async function getFavorites() {
  const json = await AsyncStorage.getItem(FAVORITOS_KEY);
  return json ? JSON.parse(json) : [];
}

export async function isFavorite(id) {
  const favoritos = await getFavorites();
  return favoritos.some(p => p.id === id);
}

export async function toggleFavorite(produto) {
  const favoritos = await getFavorites();
  const existe = favoritos.find(p => p.id === produto.id);
  let novaLista;

  if (existe) {
    novaLista = favoritos.filter(p => p.id !== produto.id);
  } else {
    novaLista = [...favoritos, produto];
  }

  await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(novaLista));
  return !existe;
}

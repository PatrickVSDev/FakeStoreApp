import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 6,
    marginHorizontal: 12,
    padding: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  imagem: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginRight: 12,
  },
  textoContainer: {
    flex: 1,
  },
  titulo: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  preco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
  },
});

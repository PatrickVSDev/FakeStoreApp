import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  imagem: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 12,
    color: '#212529',
  },
  descricao: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 16,
    lineHeight: 22,
  },
  preco: {
    fontSize: 24,
    fontWeight: '700',
    color: '#28a745',
    marginBottom: 24,
  },
  botaoFavorito: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
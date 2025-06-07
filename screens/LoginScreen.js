import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from '../styles/LoginScreenStyles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const validarLogin = () => {
    if (email === 'admin@admin' && senha === '123456') {
      navigation.replace('Products');
    } else {
      setErro('Email ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TextInput style={styles.input} onChangeText={setEmail} autoCapitalize="none" />
      <Text>Senha:</Text>
      <TextInput style={styles.input} secureTextEntry onChangeText={setSenha} />
      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
      <Button title="Entrar" onPress={validarLogin} />
    </View>
  );
}
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";  // Importa o método de login
import { auth } from '../src/firebaseConfig';  // Importa a configuração do Firebase
import styles from './styles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      // Realiza o login com o Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace('Home');  // Redireciona para a tela Home após o login bem-sucedido
    } catch (error) {
      console.log(error.message);
      Alert.alert('Erro', 'Credenciais inválidas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Dinheiro</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Entrar" onPress={login} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}


import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';  // Importa o método para criar usuário
import { auth } from '../src/firebaseConfig';  // Importa a configuração do Firebase
import styles from './styles';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      // Cria uma nova conta de usuário no Firebase Authentication
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Sucesso', 'Conta criada com sucesso!');
      navigation.replace('Login');  // Redireciona para a tela de login após o registro bem-sucedido
    } catch (error) {
      console.log(error.message);
      Alert.alert('Erro', 'Erro ao criar conta');
    }
  };

  return (
    <View style={styles.container}>
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
      <Button title="Confirmar" onPress={register} />
    </View>
  );
}

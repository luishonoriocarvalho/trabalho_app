import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Informações" onPress={() => navigation.navigate('Info')} />
      <Button title="Receita" onPress={() => navigation.navigate('Receita')} />
      <Button title="Despesa" onPress={() => navigation.navigate('Despesa')} />
      <Button title="Resumo" onPress={() => navigation.navigate('Resumo')} />
      <Button title="Ver Mercado" onPress={() => navigation.navigate('Market')} />
      <Button title="Sair" onPress={() => navigation.replace('Login')} />
    </View>
  );
}

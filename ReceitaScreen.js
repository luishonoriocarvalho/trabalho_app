import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function ReceitaScreen() {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const saveReceita = async () => {
    const receita = { date, amount, description };
    try {
      const storedReceitas = await AsyncStorage.getItem('receitas');
      const receitas = storedReceitas ? JSON.parse(storedReceitas) : [];
      receitas.push(receita);
      await AsyncStorage.setItem('receitas', JSON.stringify(receitas));
      Alert.alert('Sucesso', 'Receita adicionada com sucesso');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao salvar a receita');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Data"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />
      <TextInput
        placeholder="Valor"
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
      />
      <TextInput
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Button title="Salvar Receita" onPress={saveReceita} />
    </View>
  );
}

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function DespesaScreen() {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const saveDespesa = async () => {
    const despesa = { date, amount, description };
    try {
      const storedDespesas = await AsyncStorage.getItem('despesas');
      const despesas = storedDespesas ? JSON.parse(storedDespesas) : [];
      despesas.push(despesa);
      await AsyncStorage.setItem('despesas', JSON.stringify(despesas));
      Alert.alert('Sucesso', 'Despesa adicionada com sucesso');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao salvar a despesa');
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
      <Button title="Salvar Despesa" onPress={saveDespesa} />
    </View>
  );
}

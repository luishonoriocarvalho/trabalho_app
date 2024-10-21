import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import styles from './styles';

export default function ResumoScreen() {
  const [receitas, setReceitas] = useState([]);
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const storedReceitas = await AsyncStorage.getItem('receitas');
      const storedDespesas = await AsyncStorage.getItem('despesas');
      setReceitas(storedReceitas ? JSON.parse(storedReceitas) : []);
      setDespesas(storedDespesas ? JSON.parse(storedDespesas) : []);
    };
    loadData();
  }, []);

  const totalReceitas = receitas.reduce((sum, item) => sum + parseFloat(item.amount), 0);
  const totalDespesas = despesas.reduce((sum, item) => sum + parseFloat(item.amount), 0);

  const data = [
    { name: 'Receitas', amount: totalReceitas, color: '#345193', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Despesas', amount: totalDespesas, color: '#ff0000', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo</Text>
      <PieChart
        data={data}
        width={Dimensions.get('window').width - 50}
        height={220}
        chartConfig={{
          backgroundColor: '#FFF',
          backgroundGradientFrom: '#FFF',
          backgroundGradientTo: '#FFF',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="amount"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />

      <FlatList
        data={[...receitas, ...despesas]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.date} - {item.description}: R$ {item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
}

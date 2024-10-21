import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações</Text>
      <Text style={styles.text}>
        - Receita: Adicionar uma nova receita com data, valor e descrição.{'\n'}
        - Despesa: Adicionar uma nova despesa com data, valor e descrição.{'\n'}
        - Resumo: Exibe um gráfico de pizza com as receitas e despesas.{'\n'}
        - Ver Mercado: Mostra informações de ações do mercado financeiro.{'\n'}
        - Sair: Retorna para a tela de login.
      </Text>
    </View>
  );
}

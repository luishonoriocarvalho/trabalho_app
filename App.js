import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/HomeScreen';
import InfoScreen from './components/InfoScreen';
import ReceitaScreen from './components/ReceitaScreen';
import DespesaScreen from './components/DespesaScreen';
import ResumoScreen from './components/ResumoScreen';
import MarketScreen from './components/MarketScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerTitle: 'Voltar' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Receita" component={ReceitaScreen} />
        <Stack.Screen name="Despesa" component={DespesaScreen} />
        <Stack.Screen name="Resumo" component={ResumoScreen} />
        <Stack.Screen name="Market" component={MarketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

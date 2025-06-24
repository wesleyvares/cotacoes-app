
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetalhesScreen from '../screens/DetalhesScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Cotações Agrícolas' }} />
      <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{ title: 'Detalhes da Cotação' }} />
    </Stack.Navigator>
  );
}

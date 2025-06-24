
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetalhesScreen({ route }) {
  const { cotacao } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{cotacao.produto}</Text>
      <Text>Preço: R$ {cotacao.preco}</Text>
      <Text>Localidade: {cotacao.estado}</Text>
      <Text>Data: {cotacao.data}</Text>
      <Text>Fonte: {cotacao.fonte}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
});

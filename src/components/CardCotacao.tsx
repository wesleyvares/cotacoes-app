
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { Cotacao } from '../types/Cotacao';

type Props = {
  cotacao: Cotacao;
  onPress: () => void;
};

export default function CardCotacao({ cotacao, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.produto}>{cotacao.produto}</Text>
      <Text>Preço: R$ {cotacao.preco}</Text>
      <Text>{cotacao.estado} - {cotacao.data}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  produto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

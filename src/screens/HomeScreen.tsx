
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { buscarCotacoes } from '../api/cotacoesService';
import CardCotacao from '../components/CardCotacao';
import type { Cotacao } from '../types/Cotacao';

export default function HomeScreen({ navigation }) {
  const [produto, setProduto] = useState('');
  const [cotacoes, setCotacoes] = useState<Cotacao[]>([]);

  const buscar = async () => {
    const resultados = await buscarCotacoes(produto);
    setCotacoes(resultados);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Produto:</Text>
      <TextInput style={styles.input} value={produto} onChangeText={setProduto} placeholder="Ex: milho, leite..." />
      <Button title="Buscar Cotações" onPress={buscar} />

      <FlatList
        data={cotacoes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardCotacao cotacao={item} onPress={() => navigation.navigate('Detalhes', { cotacao: item })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { fontSize: 16, fontWeight: 'bold' },
  input: { borderBottomWidth: 1, marginBottom: 12, padding: 8 },
});

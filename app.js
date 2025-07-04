import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const produtos = ['Café', 'Leite', 'Feijão'];
const estados = ['MG', 'SP', 'PR'];

export default function App() {
  const [produto, setProduto] = useState(produtos[0]);
  const [estado, setEstado] = useState(estados[0]);
  const [cotacao, setCotacao] = useState(null);

  const buscarCotacao = () => {
    setCotacao({
      produto,
      estado,
      data: '2025-06-23',
      preco: 'R$ 1.015,30',
      fonte: 'CEPEA',
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Consulta de Cotações Agrícolas</Text>

      <Text style={styles.label}>Produto:</Text>
      <Picker selectedValue={produto} onValueChange={setProduto} style={styles.picker}>
        {produtos.map(item => <Picker.Item label={item} value={item} key={item} />)}
      </Picker>

      <Text style={styles.label}>Estado:</Text>
      <Picker selectedValue={estado} onValueChange={setEstado} style={styles.picker}>
        {estados.map(item => <Picker.Item label={item} value={item} key={item} />)}
      </Picker>

      <Button title="Buscar Cotação" onPress={buscarCotacao} />

      {cotacao && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{cotacao.produto}</Text>
          <Text>Estado: {cotacao.estado}</Text>
          <Text>Data: {cotacao.data}</Text>
          <Text>Preço: {cotacao.preco}</Text>
          <Text>Fonte: {cotacao.fonte}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', minHeight: '100%' },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  label: { fontWeight: '600', marginTop: 10 },
  picker: { height: 50, width: '100%' },
  card: { marginTop: 30, backgroundColor: '#f3f3f3', padding: 20, borderRadius: 8 },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
});
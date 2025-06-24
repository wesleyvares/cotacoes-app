
export async function buscarCotacoes(produto: string) {
  return [
    {
      id: 1,
      produto,
      preco: 67.25,
      estado: 'PR',
      data: '2025-06-24',
      fonte: 'CEPEA',
    },
    {
      id: 2,
      produto,
      preco: 70.10,
      estado: 'SP',
      data: '2025-06-23',
      fonte: 'CONAB',
    },
  ];
}

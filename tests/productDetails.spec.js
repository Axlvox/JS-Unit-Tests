const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
    it('Teste se productDetails é uma função.', () => {
      expect(typeof productDetails).toBe('function');
       // Teste se productDetails é uma função.
    });
    it('Teste se o retorno da função é um array.', () => {
      let seraArray = productDetails();
      expect(Array.isArray(seraArray)).toBe(true);
     // Teste se o retorno da função é um array.
    });
    it('Teste se o array retornado pela função contém dois itens dentro.', () => {
      expect(productDetails).toHaveLength(2);
     // Teste se o array retornado pela função contém dois itens dentro.
    });
    it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
      expect(productDetails).toBeInstanceOf(Object);
     // Teste se os dois itens dentro do array retornado pela função são objetos.
    });
    it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
      let [produto1, produto2] = productDetails('produto1', 'produto2');
      expect(produto1).not.toEqual(produto2);
     // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    });
    it('Teste se os dois productIds terminam com 123.', () => {
      const products = productDetails("Product1", "Product2");
      products.forEach(product => {
        expect(product.details.productId.endsWith("123")).toBe(true);
       // Teste se os dois productIds terminam com 123.
    });
  });
});
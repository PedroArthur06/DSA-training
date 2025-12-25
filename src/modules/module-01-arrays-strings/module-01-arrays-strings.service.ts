import { Injectable } from '@nestjs/common';

@Injectable()
export class ArraysStringsService {

  // Método que verifica se uma palavra é um palíndromo
  isPalindrome(text: string): string {
    
    // Transforma o texto em minúsculo
    const cleanText = text.toLowerCase();

    // Definir os indexes
    let leftIndex = 0;
    let rightIndex = cleanText.length - 1;

    // O Loop da Verdade
    while (leftIndex < rightIndex) {
      
      if (cleanText[leftIndex] !== cleanText[rightIndex]) {
        return `A palavra "${text}" NÃO é um palíndromo.`;
      }

      // Se for igual, move os indexes para o centro
      leftIndex++;  // Vai pra direita
      rightIndex--; // Vai pra esquerda
    }

    // Se o loop terminou sem retornar false, então é palíndromo.
    return `A palavra "${text}" É um palíndromo!`;
  }

  // Método que inverte uma lista
  private reverse(nums: number[], start: number, end: number): void {
    while (start < end) {
      // Troca os valores de lugar
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;

      // Move os indexes
      start++;
      end--;
    }
  }

  rotateArray(list: number[], k: number): number[] {

    // Se k for maior que o tamanho da lista (ex: lista 5, k 7)
    // 7 rotações é igual a 2 rotações. O resto da divisão resolve isso.
    k = k % list.length;

    // Inverte o array inteiro
    this.reverse(list, 0, list.length - 1);

    // Inverte os primeiros K números
    this.reverse(list, 0, k - 1);

    // Inverte o resto dos números
    this.reverse(list, k, list.length - 1);

    // Retorna a própria lista 
    return list;
  }
}
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
}
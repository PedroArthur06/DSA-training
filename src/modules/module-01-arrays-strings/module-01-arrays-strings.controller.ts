import { Controller, Get, Param } from '@nestjs/common';
import { ArraysStringsService } from './module-01-arrays-strings.service';

@Controller('m1-arrays-strings')
export class ArraysStringsController {
  constructor(private readonly service: ArraysStringsService) {}

  @Get('palindrome/:word') 
  checkPalindrome(@Param('word') word: string) {
    return this.service.isPalindrome(word);
  }
}
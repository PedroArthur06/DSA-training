import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ArraysStringsService } from './module-01-arrays-strings.service';
import { RotateArrayDto } from './dto/rotate-array.dto';

@Controller('m1-arrays-strings')
export class ArraysStringsController {
  constructor(private readonly service: ArraysStringsService) {}

  @Get('palindrome/:word') 
  checkPalindrome(@Param('word') word: string) {
    return this.service.isPalindrome(word);
  }

  @Post('rotate-array')
  rotateArray(@Body() dto: RotateArrayDto) {
    return this.service.rotateArray(dto.list, dto.k);
  }
}
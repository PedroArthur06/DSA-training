import { Module } from '@nestjs/common';
import { ArraysStringsService } from './module-01-arrays-strings.service';
import { ArraysStringsController } from './module-01-arrays-strings.controller';

@Module({
  controllers: [ArraysStringsController],
  providers: [ArraysStringsService],
})
export class Module01ArraysStringsModule {}
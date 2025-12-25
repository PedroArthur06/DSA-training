import { Module } from '@nestjs/common';
import { Module01ArraysStringsService } from './module-01-arrays-strings.service';
import { Module01ArraysStringsController } from './module-01-arrays-strings.controller';

@Module({
  controllers: [Module01ArraysStringsController],
  providers: [Module01ArraysStringsService],
})
export class Module01ArraysStringsModule {}

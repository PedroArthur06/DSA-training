import { Module } from '@nestjs/common';
import { Module04HashmapsService } from './module-04-hashmaps.service';
import { Module04HashmapsController } from './module-04-hashmaps.controller';

@Module({
  controllers: [Module04HashmapsController],
  providers: [Module04HashmapsService],
})
export class Module04HashmapsModule {}

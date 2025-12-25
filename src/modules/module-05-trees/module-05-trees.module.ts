import { Module } from '@nestjs/common';
import { Module05TreesService } from './module-05-trees.service';
import { Module05TreesController } from './module-05-trees.controller';

@Module({
  controllers: [Module05TreesController],
  providers: [Module05TreesService],
})
export class Module05TreesModule {}

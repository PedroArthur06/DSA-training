import { Module } from '@nestjs/common';
import { Module02LinkedListsService } from './module-02-linked-lists.service';
import { Module02LinkedListsController } from './module-02-linked-lists.controller';

@Module({
  controllers: [Module02LinkedListsController],
  providers: [Module02LinkedListsService],
})
export class Module02LinkedListsModule {}

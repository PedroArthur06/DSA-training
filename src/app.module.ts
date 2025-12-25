import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module01ArraysStringsModule } from './modules/module-01-arrays-strings/module-01-arrays-strings.module';
import { Module02LinkedListsModule } from './modules/module-02-linked-lists/module-02-linked-lists.module';
import { Module03StacksQueuesModule } from './modules/module-03-stacks-queues/module-03-stacks-queues.module';
import { Module04HashmapsModule } from './modules/module-04-hashmaps/module-04-hashmaps.module';
import { Module05TreesModule } from './modules/module-05-trees/module-05-trees.module';

@Module({
  imports: [Module01ArraysStringsModule, Module02LinkedListsModule, Module03StacksQueuesModule, Module04HashmapsModule, Module05TreesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

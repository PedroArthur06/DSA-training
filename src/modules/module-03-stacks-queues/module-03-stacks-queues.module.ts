import { Module } from '@nestjs/common';
import { Module03StacksQueuesService } from './module-03-stacks-queues.service';
import { Module03StacksQueuesController } from './module-03-stacks-queues.controller';

@Module({
  controllers: [Module03StacksQueuesController],
  providers: [Module03StacksQueuesService],
})
export class Module03StacksQueuesModule {}

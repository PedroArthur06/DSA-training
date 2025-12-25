import { Controller } from '@nestjs/common';
import { Module03StacksQueuesService } from './module-03-stacks-queues.service';

@Controller('module-03-stacks-queues')
export class Module03StacksQueuesController {
  constructor(private readonly module03StacksQueuesService: Module03StacksQueuesService) {}
}

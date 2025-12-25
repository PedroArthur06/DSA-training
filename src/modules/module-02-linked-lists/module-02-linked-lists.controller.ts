import { Controller } from '@nestjs/common';
import { Module02LinkedListsService } from './module-02-linked-lists.service';

@Controller('module-02-linked-lists')
export class Module02LinkedListsController {
  constructor(private readonly module02LinkedListsService: Module02LinkedListsService) {}
}

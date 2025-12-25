import { Controller } from '@nestjs/common';
import { Module05TreesService } from './module-05-trees.service';

@Controller('module-05-trees')
export class Module05TreesController {
  constructor(private readonly module05TreesService: Module05TreesService) {}
}

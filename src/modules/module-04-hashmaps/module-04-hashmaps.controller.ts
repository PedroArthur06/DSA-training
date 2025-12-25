import { Controller } from '@nestjs/common';
import { Module04HashmapsService } from './module-04-hashmaps.service';

@Controller('module-04-hashmaps')
export class Module04HashmapsController {
  constructor(private readonly module04HashmapsService: Module04HashmapsService) {}
}

import { Controller } from '@nestjs/common';
import { Module01ArraysStringsService } from './module-01-arrays-strings.service';

@Controller('module-01-arrays-strings')
export class Module01ArraysStringsController {
  constructor(private readonly module01ArraysStringsService: Module01ArraysStringsService) {}
}

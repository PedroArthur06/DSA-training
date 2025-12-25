import { IsArray, IsNumber, IsNotEmpty, Min } from 'class-validator';

export class RotateArrayDto {
  @IsArray()
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  list: number[];

  @IsNumber()
  @Min(0)
  k: number;
}
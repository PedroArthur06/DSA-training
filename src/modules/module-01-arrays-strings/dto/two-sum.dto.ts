import { IsArray, IsNumber, IsNotEmpty, Min } from 'class-validator';

export class TwoSumDto {
    @IsNumber()
    @IsNotEmpty()
    target: number;

    @IsArray()
    @Min(2)
    @IsNotEmpty()
    numbers: number[];
}
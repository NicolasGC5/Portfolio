import { IsString, IsArray, IsOptional } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsArray()
  @IsString({ each: true })
  stack!: string[];

  @IsOptional()
  @IsString()
  status?: string;
}

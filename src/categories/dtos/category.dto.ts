import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from 'class-validator';

export class categoryDto {
  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsArray()
  @ArrayMinSize(1)
  readonly events: Array<Event>;
}

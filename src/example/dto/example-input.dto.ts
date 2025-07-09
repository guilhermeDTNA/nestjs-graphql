import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class ExampleInputDTO {
  @Field()
  @IsString()
  readonly name: string;

  @Field(() => Int)
  @IsNumber()
  readonly age: number;
}

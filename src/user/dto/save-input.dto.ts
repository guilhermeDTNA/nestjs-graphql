import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, MinLength } from 'class-validator';

@InputType()
export class SaveUserInputDTO {
  @Field()
  @IsString()
  readonly name: string;

  @Field(() => String)
  @IsEmail()
  readonly email: string;

  @Field(() => String)
  @MinLength(6)
  readonly password: string;
}

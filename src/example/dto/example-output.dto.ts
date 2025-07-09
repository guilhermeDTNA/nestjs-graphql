import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExampleOutputDTO {
  @Field(() => String)
  message: string;
}

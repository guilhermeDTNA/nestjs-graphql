import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SaveUserOutputDTO {
  @Field(() => Int)
  status: number;

  @Field(() => String)
  message: string;
}

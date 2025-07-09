import { Args, Query, Resolver } from '@nestjs/graphql';
import { ExampleInputDTO } from './dto/example-input.dto';
import { ExampleOutputDTO } from './dto/example-output.dto';
import { ExampleService } from './example.service';

@Resolver(() => ExampleOutputDTO)
export class ExampleResolver {
  constructor(private readonly exampleService: ExampleService) {}

  @Query(() => ExampleOutputDTO)
  async exampleQuery(
    @Args('input') input: ExampleInputDTO,
  ): Promise<ExampleOutputDTO> {
    return this.exampleService.processExample(input);
  }
}

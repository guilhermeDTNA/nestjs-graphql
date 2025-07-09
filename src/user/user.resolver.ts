import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetUsersOutputDTO, SaveUserInputDTO, SaveUserOutputDTO } from './dto';
import { UserService } from './user.service';

@Resolver(() => SaveUserOutputDTO)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => SaveUserOutputDTO)
  async saveUser(
    @Args('input') input: SaveUserInputDTO,
  ): Promise<SaveUserOutputDTO> {
    return this.userService.registerUser(input);
  }

  @Query(() => [GetUsersOutputDTO])
  async getUsers(): Promise<GetUsersOutputDTO[]> {
    return this.userService.listUsers();
  }
}

import { Resolver, Query, Mutation, Arg } from 'type-graphql';

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return 'HI from the resolvers';
  }

  @Mutation()
  register(
    @Arg('email') email: string,
    @Arg('password') password: string,
  ) {
    return 
  }
}
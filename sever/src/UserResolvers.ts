import { User } from './entity/User';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { hash } from 'bcryptjs'

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return 'HI from the resolvers';
  }

  @Mutation(() => Boolean)
  async register(
    @Arg('email') email: string,
    @Arg('password') password: string,
  ) {

    const hashedPassword = await hash(password, 12);
    try {
      await User.insert({
        email,
        password: hashedPassword
      });
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  }
}
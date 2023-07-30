import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInResponse } from './dto/signInResponse';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { SignInInput } from './dto/signIn.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => SignInResponse)
  @UseGuards(GqlAuthGuard) // signInメソッドの前にGqlAuthGuardによってLocalStrategyメソッドが実行。成功した場合のみsingInメソッドが実行さえる
  async signIn(
    @Args('signInInput') signInInput: SignInInput,
    @Context() context: any,
  ) {
    // context.user : localStrategyのvalidateメソッドの戻り値の「user」が入っている。
    return await this.authService.singIn(context.user);
  }
}

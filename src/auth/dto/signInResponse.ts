import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/models/user.model';

@ObjectType()
export class SignInResponse {
  @Field()
  accessToken: string;

  // graphQLがUser型だと認識できるようにする
  @Field(() => User)
  user: User;
}

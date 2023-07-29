import { Field, HideField, Int, ObjectType } from '@nestjs/graphql';

// GraphQLのクラスであることを表している
@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  // GraphQLクライアントからは取得できない
  @HideField()
  password: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

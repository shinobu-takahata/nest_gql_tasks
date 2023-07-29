import { ArgsType, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

// graphQLスキーマに変換する際に展開される
@ArgsType()
export class GetUserArgs {
  @Field()
  @IsEmail()
  email: string;
}

import { Field, InputType, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateTaskInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional() // このフィールドが存在するときのみバリデーション
  name?: string;

  @Field({ nullable: true })
  @IsDateString()
  @IsOptional()
  dueDate?: string;

  @Field({ nullable: true })
  @IsEnum(Status)
  @IsOptional()
  status?: Status;

  @Field({ nullable: true })
  description?: string;
}

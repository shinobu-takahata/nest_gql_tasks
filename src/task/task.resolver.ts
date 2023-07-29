import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task as TaskModel } from './models/task.model';
import { CreateTaskInput } from './dto/createTask.input';
import { Task } from '@prisma/client';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  // こっちはgqlの形式の配列で書く
  // 空の配列を返す場合は、'items'
  @Query(() => [TaskModel], { nullable: 'items' })
  async getTasks(): Promise<Task[]> {
    return await this.taskService.getTasks();
  }

  @Mutation(() => TaskModel)
  async createTask(
    @Args('createTaskInput') CreateTaskInput: CreateTaskInput,
  ): Promise<Task> {
    return await this.taskService.createTask(CreateTaskInput);
  }
}

import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext } from '@nestjs/common';

export class GqlAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }

  // ExecutionContext: 実行中の一連の情報を取得（リクエスト情報、実行中のリゾルバの情報）
  // 親クラスの持つメソッドをGql用にオーバーライド
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext();
    request.body = ctx.getArgs().signInInput;

    return request;
  }
}

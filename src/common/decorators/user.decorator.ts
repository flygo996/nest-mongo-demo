import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// 比如数据
// {
//   "id": 101,
//   "firstName": "Alan",
//   "lastName": "Turing",
//   "email": "alan@email.com",
//   "roles": ["admin"]
// }
// 如下使用：
// @User()
// @User('firstName')
export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user && user[data] : user;
  },
);
